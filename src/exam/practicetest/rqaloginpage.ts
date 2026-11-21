import {Page, Locator} from '@playwright/test'

export class loginpage{
    private readonly sflogin: Page
    private readonly lbl_username: Locator
    private readonly lbl_password: Locator
    private readonly btn_login: Locator

constructor (page:Page){
    this.sflogin      = page
    this.lbl_username = page.locator("//input[@id = 'username']")
    this.lbl_password = page.locator("//input[@type = 'password']")
    this.btn_login    = page.getByRole("button", {"name": 'Log in'})

}

public async func_naviagteToUrl(Url:string){
    await this.sflogin.goto(Url)
    await this.sflogin.waitForLoadState("networkidle")

}

public async func_login(username:string, password:string){
    await this.lbl_username.fill(username)
    await this.btn_login.click()
    await this.lbl_password.fill(password)
    await this.btn_login.click()

    await this.sflogin.waitForTimeout(60000)

}

}