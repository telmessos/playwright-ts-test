import { Page } from '@playwright/test';

export class CommonPage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // ==================== ELEMENT LOCATORS ====================
    protected readonly menuToggle = 'nb-menu-toggle';
    protected readonly menuItems = 'nb-menu-item';
    protected readonly loadingSpinner = '.loading-spinner';
    protected readonly toastrContainer = 'nb-toast-container';

    // ==================== STATIC STRINGS ====================
    protected readonly APP_URL = 'http://localhost:4200';
    protected readonly TIMEOUT = 30000;
    protected readonly DEFAULT_WAIT_TIME = 5000;

    // ==================== METHODS ====================
    /**
     * Navigate to a specific URL
     * @param url - The URL to navigate to
     */
    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
        await this.waitForPageLoad();
    }

    /**
     * Wait for the page to be loaded, including network idle, Pace progress bar, and optionally a key element.
     * @param keySelector - Optional selector for a key element that should be visible when the page is ready
     */
    async waitForPageLoad(keySelector?: string): Promise<void> {
        // Wait for the network to be idle (no ongoing network requests)
        await this.page.waitForLoadState('networkidle');
        // Wait for the Pace progress bar at the top to disappear (ensures loading bar is gone)
        await this.page.waitForSelector('.pace.pace-active', { state: 'detached', timeout: 10000 });
        // If a keySelector is provided, wait for that specific element to be visible (ensures page content is ready)
        if (keySelector) {
            await this.page.waitForSelector(keySelector, { state: 'visible', timeout: 10000 });
        }
    }

    /**
     * Click on a menu item by its title
     * @param menuTitle - The title of the menu item to click
     */
    async clickMenuItem(menuTitle: string): Promise<void> {
        await this.page.locator(`text=${menuTitle}`).click();
        await this.waitForPageLoad();
    }

    /**
     * Check if element is visible
     * @param selector - The selector of the element to check
     */
    async isElementVisible(selector: string): Promise<boolean> {
        return await this.page.locator(selector).isVisible();
    }

    /**
     * Wait for element to be visible
     * @param selector - The selector of the element to wait for
     */
    async waitForElement(selector: string): Promise<void> {
        await this.page.locator(selector).waitFor({ state: 'visible' });
    }

    /**
     * Get text content of an element
     * @param selector - The selector of the element
     */
    async getElementText(selector: string): Promise<string> {
        return await this.page.textContent(selector) || '';
    }

    /**
     * Get current URL
     */
    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }

    /**
     * Check if a menu item is expanded
     * @param menuTitle - The title of the menu item to check
     */
    async isMenuItemExpanded(menuTitle: string): Promise<boolean> {
        const menuItem = this.page.locator(`a:has-text("${menuTitle}")`);
        const ariaExpanded = await menuItem.getAttribute('aria-expanded');
        return ariaExpanded === 'true';
    }

    /**
     * Expand the sidebar if it is collapsed
     */
    async expandSidebarIfCollapsed(): Promise<void> {
        const sidebar = this.page.locator('nb-sidebar');
        const isCollapsed = await sidebar.evaluate((el) => el.classList.contains('collapsed'));
        if (isCollapsed) {
            await this.page.locator(this.menuToggle).click();
            // Wait for the sidebar to expand (wait for class to be removed)
            await this.page.waitForFunction(() => {
                const el = document.querySelector('nb-sidebar');
                return el && !el.classList.contains('collapsed');
            });
        }
    }
} 