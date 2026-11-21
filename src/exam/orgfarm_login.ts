//lib we page and locator are predefined class in playwright
import {Page, Locator} from '@playwright/test' 

//username is lo
class OrgfarmLogin{
  //  this.page("https://orgfarm-95e4b1e1e8-dev-ed.develop.my.salesforce.com/")
  // access identifer/Read-only modifie/variable name : datatype     
        private readonly loginpage: Page //instance variable loginpage
    
        private readonly lbl_user_name: Locator
        private readonly lbl_password: Locator
        private readonly btn_login: Locator

//constractor will be executed 1st when every we declar the object to execute
//method(Parameter name: class/interface)
        constructor(orgfarmpage: Page){
          this.loginpage = orgfarmpage 
//keyword.class_property/innstance variable name=parameter.method( Method argument passing an XPath selector string)
          this.lbl_user_name = orgfarmpage.locator("//input[@id='username']")
          this.btn_login = orgfarmpage.getByRole("button", { name: "Log In"})
          this.lbl_password = orgfarmpage.locator("//input[@id='password']")

        }

}   

/*
XPath
//<tagname>[@atrributename='atrributevalue')]

//tagname[contains(@atrributname, 'atrributevalue')]

//tagname[text()='textValue']


*/






