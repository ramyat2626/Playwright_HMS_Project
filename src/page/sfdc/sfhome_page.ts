import { Page, Locator } from '@playwright/test'

export class Homepage {
    private readonly loginpage: Page

    private readonly tab_account: Locator
    private readonly lbl_globalsearch: Locator

    constructor(hometab:Page){
        this.loginpage = hometab
        this.tab_account = hometab.locator("//span[@class='slds-truncate' and text()='Accounts']")
        this.lbl_globalsearch = hometab.locator("//button[@aria-label='Search']")
    }
    // Opens the Lightning home page directly; the saved session in storageState keeps us logged in
    public async func_navigateToHome(org_url: string){
        await this.loginpage.goto(org_url + "lightning/page/home")
        await this.lbl_globalsearch.waitFor({ state: 'visible', timeout: 60000 })
    }

    public async fun_verfyHomePage():Promise<boolean>{
        const inhome_page: boolean = await this.lbl_globalsearch.isVisible()
        //this.lbl_globalsearch.click()
        return inhome_page

    }

    public async func_accountTab(){
        await this.tab_account.click()
        await this.loginpage.waitForLoadState('networkidle')
}


}