import { test, expect } from '@playwright/test';
import { FormsPage } from '../pages/forms.page';

test.describe('Form Layouts Page Tests', () => {
    let formsPage: FormsPage;

    test.beforeEach(async ({ page }) => {
        // Initialize the FormsPage object before each test
        formsPage = new FormsPage(page);
        // Navigate to the Form Layouts page
        await formsPage.navigateToFormLayouts();
    });

    test('should navigate to Form Layouts page and verify URL and Inline form header', async () => {
        // Verify that the current URL includes the expected Form Layouts path
        const currentUrl = await formsPage.getCurrentUrl();
        expect(currentUrl).toContain(formsPage.FORM_LAYOUTS_URL);

        // Verify that the 'Inline form' header is displayed on the page
        expect(await formsPage.isInlineFormHeaderDisplayed()).toBeTruthy();
    });

    test('should display "Using the Grid" form header', async () => {
        // Verify that the 'Using the Grid' form header is displayed
        expect(await formsPage.isUsingGridFormHeaderDisplayed()).toBeTruthy();
    });

    test('should display "Form without labels" header', async () => {
        // Verify that the 'Form without labels' header is displayed
        expect(await formsPage.isFormWithoutLabelsHeaderDisplayed()).toBeTruthy();
    });

    test('should display "Basic form" header', async () => {
        // Verify that the 'Basic form' header is displayed
        expect(await formsPage.isBasicFormHeaderDisplayed()).toBeTruthy();
    });

    test('should display "Block form" header', async () => {
        // Verify that the 'Block form' header is displayed
        expect(await formsPage.isBlockFormHeaderDisplayed()).toBeTruthy();
    });

    test('should display "Horizontal form" header', async () => {
        // Verify that the 'Horizontal form' header is displayed
        expect(await formsPage.isHorizontalFormHeaderDisplayed()).toBeTruthy();
    });
}); 