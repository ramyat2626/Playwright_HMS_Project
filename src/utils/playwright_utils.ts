import { Page, Locator } from '@playwright/test';


export class PlaywrightUtils {
    private readonly page: Page;
    private readonly btn_logout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btn_logout = page.locator('//button[text()="Logout"]');
    }

    public async func_logout(){
        await this.btn_logout.click();

    }

}