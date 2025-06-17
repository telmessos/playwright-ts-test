import { test, expect } from '@playwright/test';
import { IotDashboardPage } from '../pages/iot-dashboard.page';

test.describe('IoT Dashboard Page Tests', () => {
    let iotDashboardPage: IotDashboardPage;

    test.beforeEach(async ({ page }) => {
        iotDashboardPage = new IotDashboardPage(page);
        await iotDashboardPage.navigateToIotDashboard();
    });

    test('should load the IoT Dashboard page and display all expected elements', async () => {
        // Verify the page URL
        const currentUrl = await iotDashboardPage.getCurrentUrl();
        expect(currentUrl).toContain('/pages/iot-dashboard');

        // Verify the presence of specific elements
        expect(await iotDashboardPage.isLightTitleDisplayed()).toBeTruthy();
        expect(await iotDashboardPage.isRollerShadesTitleDisplayed()).toBeTruthy();
        expect(await iotDashboardPage.isWirelessAudioTitleDisplayed()).toBeTruthy();
        expect(await iotDashboardPage.isCoffeeMakerTitleDisplayed()).toBeTruthy();
        expect(await iotDashboardPage.isTemperatureSpanDisplayed()).toBeTruthy();
        expect(await iotDashboardPage.isHumiditySpanDisplayed()).toBeTruthy();
        expect(await iotDashboardPage.isSolarEnergyConsumptionHeaderDisplayed()).toBeTruthy();
        expect(await iotDashboardPage.isRoomManagementHeaderDisplayed()).toBeTruthy();
        expect(await iotDashboardPage.isMyPlaylistHeaderDisplayed()).toBeTruthy();
    });
}); 