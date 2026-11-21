
import {Page, Locator} from '@playwright/test'

export class LoginSfdc{

    private readonly loginpage: Page
    private readonly lbl_Username: Locator
    private readonly lbl_Password: Locator
    private readonly btn_login: Locator

    constructor (SFLoginpage: Page){

        this.loginpage = SFLoginpage
        this.lbl_Username = SFLoginpage.locator("//input[@id='username']")
        this.lbl_Password = SFLoginpage.locator("//input[@type='password']")
        this.btn_login = SFLoginpage.getByRole("button", { name: "Log In"})
    }  

    public async func_navigateTo(url: string){
        await this.loginpage.goto(url)
        await this.loginpage.waitForLoadState('networkidle');
        return await this.lbl_Username.isVisible()
    }

    public async func_login(Username_value: string, password_value: string){
        await this.lbl_Username.fill(Username_value)
        await this.btn_login.click()
        await this.lbl_Password.fill(password_value)
        await this.btn_login.click()

        
        await this.loginpage.waitForLoadState('networkidle');
        // No fixed wait here: auth.setup.ts waits until the MFA code is entered and Lightning loads
    }

}