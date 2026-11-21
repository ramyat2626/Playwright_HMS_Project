// Use Case : Create a Account Record in Salesforce Org 

//Salesforce  Login Page 

//Section 1 -  Libraries Section 
import {Page,Locator} from '@playwright/test'

export class pqaloginpage {
//Section 2 -  Declaration
//for any page , we need to declare the page first

//readonly - purpose and importance - TBD
private readonly sfloginpage:Page
private readonly lbl_username:Locator
private readonly lbl_password:Locator
private readonly btn_login:Locator


//Section 3 -  Initialization
constructor( page:Page ){
this.sf
this.sfloginpage  = page
this.lbl_username = page.locator("//input[@id='username']")
this.lbl_password = page.locator("//input[@type='password']")
this.btn_login    = page.getByRole("button", { name: "Log In"})
}

//Section 4  - Performing Actions - 
//             on the elements declared/intialized in above sections

//define a funciton - to navigate to the desired URL
public async func_navigate_to_URL(url:string){

this.sfloginpage.goto(url)
await this.sfloginpage.waitForLoadState('networkidle')
return await this.lbl_username.isVisible()

} 

//async - purpose and importance to TBD
public async func_pqaloginpage(username:string,password:string){

await this.lbl_username.fill(username)
await this.btn_login.click()
await this.lbl_password.fill(password)
await this.btn_login.click()
await this.sfloginpage.waitForTimeout(60000)
}
}