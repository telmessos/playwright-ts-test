import { Page } from '@playwright/test';
import { CommonPage } from './common';

export class IotDashboardPage extends CommonPage {
    constructor(page: Page) {
        super(page);
    }

    // ==================== ELEMENT LOCATORS ====================
    private readonly lightTitle = 'div.title.h5:has-text("Light")';
    private readonly rollerShadesTitle = 'div.title.h5:has-text("Roller Shades")';
    private readonly wirelessAudioTitle = 'div.title.h5:has-text("Wireless Audio")';
    private readonly coffeeMakerTitle = 'div.title.h5:has-text("Coffee Maker")';
    private readonly temperatureSpan = 'span:has-text("Temperature")';
    private readonly humiditySpan = 'span:has-text("Humidity")';
    private readonly solarEnergyConsumptionHeader = 'xpath=//nb-card-header[normalize-space()="Solar Energy Consumption"]';
    private readonly roomManagementHeader = 'nb-card-header:has-text("Room Management")';
    private readonly myPlaylistHeader = 'nb-card-header:has-text("My Playlist")';

    // ==================== STATIC STRINGS ====================
    private readonly PAGE_URL = '/pages/iot-dashboard';
    private readonly PAGE_TITLE = 'IoT Dashboard';

    // ==================== METHODS ====================
    /**
     * Navigate to the IoT Dashboard page
     */
    async navigateToIotDashboard(): Promise<void> {
        await this.navigateTo(`${this.APP_URL}${this.PAGE_URL}`);
        await this.expandSidebarIfCollapsed();
    }

    /**
     * Verify if the 'Light' title is displayed
     */
    async isLightTitleDisplayed(): Promise<boolean> {
        return await this.isElementVisible(this.lightTitle);
    }

    /**
     * Verify if the 'Roller Shades' title is displayed
     */
    async isRollerShadesTitleDisplayed(): Promise<boolean> {
        return await this.isElementVisible(this.rollerShadesTitle);
    }

    /**
     * Verify if the 'Wireless Audio' title is displayed
     */
    async isWirelessAudioTitleDisplayed(): Promise<boolean> {
        return await this.isElementVisible(this.wirelessAudioTitle);
    }

    /**
     * Verify if the 'Coffee Maker' title is displayed
     */
    async isCoffeeMakerTitleDisplayed(): Promise<boolean> {
        return await this.isElementVisible(this.coffeeMakerTitle);
    }

    /**
     * Verify if the 'Temperature' span is displayed
     */
    async isTemperatureSpanDisplayed(): Promise<boolean> {
        return await this.isElementVisible(this.temperatureSpan);
    }

    /**
     * Verify if the 'Humidity' span is displayed
     */
    async isHumiditySpanDisplayed(): Promise<boolean> {
        return await this.isElementVisible(this.humiditySpan);
    }

    /**
     * Verify if the 'Solar Energy Consumption' header is displayed
     */
    async isSolarEnergyConsumptionHeaderDisplayed(): Promise<boolean> {
        return await this.isElementVisible(this.solarEnergyConsumptionHeader);
    }

    /**
     * Verify if the 'Room Management' header is displayed
     */
    async isRoomManagementHeaderDisplayed(): Promise<boolean> {
        return await this.isElementVisible(this.roomManagementHeader);
    }

    /**
     * Verify if the 'My Playlist' header is displayed
     */
    async isMyPlaylistHeaderDisplayed(): Promise<boolean> {
        return await this.isElementVisible(this.myPlaylistHeader);
    }
} 