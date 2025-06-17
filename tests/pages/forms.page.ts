import { Page } from '@playwright/test';
import { CommonPage } from './common';

export class FormsPage extends CommonPage {
    constructor(page: Page) {
        super(page);
    }

    // ==================== ELEMENT LOCATORS ====================
    private readonly formsMenuItem = 'Forms';
    private readonly formLayoutsSubMenuItem = 'Form Layouts';
    private readonly inlineFormHeader = 'nb-card-header:has-text("Inline form")';
    private readonly usingGridFormHeader = 'nb-card-header:has-text("Using the Grid")';
    private readonly formWithoutLabelsHeader = 'nb-card-header:has-text("Form without labels")';
    private readonly basicFormHeader = 'nb-card-header:has-text("Basic form")';
    private readonly blockFormHeader = 'nb-card-header:has-text("Block form")';
    private readonly horizontalFormHeader = 'nb-card-header:has-text("Horizontal form")';

    // ==================== STATIC STRINGS ====================
    public readonly FORM_LAYOUTS_URL = '/pages/forms/layouts';

    // ==================== METHODS ====================
    /**
     * Navigate to the Form Layouts page
     */
    async navigateToFormLayouts(): Promise<void> {
        // Navigate to the base URL first
        await this.navigateTo(this.APP_URL);
        // Click on the 'Forms' main menu item
        await this.clickMenuItem("Forms");
        // Click on the 'Form Layouts' sub-menu item
        await this.clickMenuItem("Form Layouts");
        // Wait for the page to fully load after navigation
        await this.waitForPageLoad();
    }

    /**
     * Verify if the 'Inline form' header is displayed
     */
    async isInlineFormHeaderDisplayed(): Promise<boolean> {
        return await this.page.locator(this.inlineFormHeader).isVisible();
    }

    /**
     * Verify if the 'Using the Grid' header is displayed
     */
    async isUsingGridFormHeaderDisplayed(): Promise<boolean> {
        return await this.page.locator(this.usingGridFormHeader).isVisible();
    }

    /**
     * Verify if the 'Form without labels' header is displayed
     */
    async isFormWithoutLabelsHeaderDisplayed(): Promise<boolean> {
        return await this.page.locator(this.formWithoutLabelsHeader).isVisible();
    }

    /**
     * Verify if the 'Basic form' header is displayed
     */
    async isBasicFormHeaderDisplayed(): Promise<boolean> {
        return await this.page.locator(this.basicFormHeader).isVisible();
    }

    /**
     * Verify if the 'Block form' header is displayed
     */
    async isBlockFormHeaderDisplayed(): Promise<boolean> {
        return await this.page.locator(this.blockFormHeader).isVisible();
    }

    /**
     * Verify if the 'Horizontal form' header is displayed
     */
    async isHorizontalFormHeaderDisplayed(): Promise<boolean> {
        return await this.page.locator(this.horizontalFormHeader).isVisible();
    }
} 