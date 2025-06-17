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
     * Wait for the page to be loaded
     */
    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
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
} 