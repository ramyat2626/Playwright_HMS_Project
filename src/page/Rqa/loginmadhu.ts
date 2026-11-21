import {Page, Locator} from '@playwright/test'

class MSRTraining{
    private readonly page:Page
    private readonly lbl_user_name: Locator
    private readonly lbl_password: Locator
    private readonly btn_login: Locator

    constructor(page:Page){
        this.page = page
        this.lbl_user_name = page.locator("//input[@placeholder='Email']")
        this.lbl_password = page.locator("//input[@placeholder='Password']")
        this.btn_login = page.getByLabel("button = {name 'Login}")

    }

    private async MSloginFun(username_value:string, password:string){
        await this.lbl_user_name(username_value)
        await this.lbl_password(password)
        await this.btn_login.click

    }

    private async navigateTourl(){
        await 

    }
        


}