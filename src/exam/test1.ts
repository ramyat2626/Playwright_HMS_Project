import {Page, Locator} from '@playwright/test'

class SfdcLogin{
    private readonly loginpage: Page
    private readonly lbl_username: Locator 
    private readonly lbl_password: Locator 
    private readonly click_login: Locator 

    constructor (Sfdcpage : Page){
        this.loginpage = Sfdcpage
        this.lbl_username = Sfdcpage.locator("//input[@id='username']")
        this.lbl_password = Sfdcpage.locator("//input[@id='password']")
        this.click_login = Sfdcpage.getByRole("button",{name:"Login"})

    }


}