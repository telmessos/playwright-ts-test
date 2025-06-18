import { test, expect } from '@playwright/test';
import { DialogPage } from '../pages/dialog.page';

test.describe('Dialog Page Tests', () => {
    let dialogPage: DialogPage;

    test.beforeEach(async ({ page }) => {
        // Initialize the DialogPage object before each test
        dialogPage = new DialogPage(page);
        // Navigate to the Dialog page
        await dialogPage.navigateToDialog();
    });

    test('should navigate to dialog page, verify card headers, open dialog, and dismiss it', async () => {
        // Verify that the current URL includes the expected Dialog path
        const currentUrl = await dialogPage.getCurrentUrl();
        expect(currentUrl).toContain(dialogPage.DIALOG_URL);

        // Verify all the expected card headers are displayed
        const expectedHeaders = [
            'Open Dialog',
            'Open Without Backdrop',
            'Open Without Esc Close',
            'Open Without Backdrop Click',
            'Return Result From Dialog'
        ];

        for (const headerText of expectedHeaders) {
            const isDisplayed = await dialogPage.isCardHeaderDisplayed(headerText);
            expect(isDisplayed).toBeTruthy();
        }

        // Click "Open Dialog with component" button
        await dialogPage.clickOpenDialogWithComponent();

        // Verify if the dialog card header with the specific text is displayed
        const isDialogHeaderDisplayed = await dialogPage.isDialogCardHeaderDisplayed();
        expect(isDialogHeaderDisplayed).toBeTruthy();

        // Click "Dismiss Dialog" button
        await dialogPage.clickDismissDialog();

        // Verify if the dialog card header is not displayed anymore
        const isDialogHeaderNotDisplayed = await dialogPage.isDialogCardHeaderNotDisplayed();
        expect(isDialogHeaderNotDisplayed).toBeTruthy();
    });
}); 