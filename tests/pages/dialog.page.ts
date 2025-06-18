import { Page } from '@playwright/test';
import { CommonPage } from './common';

export class DialogPage extends CommonPage {
    constructor(page: Page) {
        super(page);
    }

    // ==================== ELEMENT LOCATORS ====================
    private readonly modalOverlaysMenuItem = 'Modal & Overlays';
    private readonly dialogSubMenuItem = 'Dialog';
    private readonly openDialogWithComponentButton = 'button:has-text("Open Dialog with component")';
    private readonly dismissDialogButton = 'button:has-text("Dismiss Dialog")';
    private readonly dialogCardHeader = 'nb-card-header:has-text("This is a title passed to the dialog component")';

    // ==================== STATIC STRINGS ====================
    public readonly DIALOG_URL = '/pages/modal-overlays/dialog';

    // ==================== METHODS ====================
    /**
     * Navigate to the Dialog page
     */
    async navigateToDialog(): Promise<void> {
        await this.navigateTo(this.APP_URL);
        await this.expandSidebarIfCollapsed();
        await this.clickMenuItem(this.modalOverlaysMenuItem);
        await this.clickMenuItem(this.dialogSubMenuItem);
        // Wait for the page to be fully loaded and for the Dialog page's main header to be visible
        await this.waitForPageLoad('nb-card-header:has-text("Open Dialog")');
    }

    /**
     * Verify if a card header with specific text is displayed
     * @param headerText - The text to search for in the card header
     */
    async isCardHeaderDisplayed(headerText: string): Promise<boolean> {
        const headers = this.page.locator('nb-card-header');
        const count = await headers.count();
        for (let i = 0; i < count; i++) {
            const text = (await headers.nth(i).innerText()).trim();
            if (text === headerText) {
                return await headers.nth(i).isVisible();
            }
        }
        return false;
    }

    /**
     * Click the "Open Dialog with component" button
     */
    async clickOpenDialogWithComponent(): Promise<void> {
        await this.page.locator(this.openDialogWithComponentButton).click();
        // Wait for dialog to appear
        await this.page.waitForTimeout(500);
    }

    /**
     * Click the "Dismiss Dialog" button
     */
    async clickDismissDialog(): Promise<void> {
        await this.page.locator(this.dismissDialogButton).click();
        // Wait for dialog to disappear
        await this.page.waitForTimeout(500);
    }

    /**
     * Verify if the dialog card header is displayed
     */
    async isDialogCardHeaderDisplayed(): Promise<boolean> {
        return await this.page.locator(this.dialogCardHeader).isVisible();
    }

    /**
     * Verify if the dialog card header is not displayed
     */
    async isDialogCardHeaderNotDisplayed(): Promise<boolean> {
        return !(await this.page.locator(this.dialogCardHeader).isVisible());
    }
} 