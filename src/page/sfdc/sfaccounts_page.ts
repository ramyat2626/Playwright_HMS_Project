import { Page, Locator } from "@playwright/test"

export class AccountsPage {
    private readonly loginpage: Page

    private readonly btn_new_account: Locator
    private readonly pop_up_title_new_account: Locator

    private readonly lbl_account_name: Locator
    private readonly drp_rating: Locator
    private readonly date_SLA_Expiration_date: Locator
    private readonly long_text_deacription: Locator

    private readonly btn_save: Locator

   // initalisation the variable with constructor
constructor(accountpage: Page){
    this.loginpage = accountpage
    this.btn_new_account = accountpage.locator("//div[@title = 'New']")
   // this.pop_up_title_new_account = accountpage.locator("//h2[text()='New Account']")
    this.pop_up_title_new_account = accountpage.getByTitle('New')
    this.lbl_account_name = accountpage.locator("//input[@name='Name']")
    this.drp_rating = accountpage.locator("//button[@aria-label='Rating']")
  //  this.drp_rating = accountpage.getByRole ("button" , {name: 'Hot' })
    this.date_SLA_Expiration_date = accountpage.locator("//input[@name='SLAExpirationDate__c']")
    this.long_text_deacription = accountpage.locator("//textarea[@maxlength='32000']")
    this.btn_save = accountpage.getByRole("button", {name: 'Save' })
}

public async func_verifyInAccountTab(): Promise<boolean> {
    return await this.btn_new_account.isVisible()
}

public async func_verify_add_new_account_popup(): Promise<boolean> {
    await this.btn_new_account.click()
    return await this.pop_up_title_new_account.isVisible()
}
   

 public async func_account(account_name_value:string, rating_value:string, date_value:string, deacription_value:string){   
    await this.lbl_account_name.fill(account_name_value)
    await this.drp_rating.selectOption(rating_value)
    await this.date_SLA_Expiration_date.fill(date_value)
    await this.long_text_deacription.fill(deacription_value)
    await this.btn_save.click()
}

}
