// We need to write Playwirght code to automate a SF Login Page 

// Any file for above is divided into 3 sections


// Section 1 -  Importing the required Libraries
import { Page , Locator } from '@playwright/test'

 class OrgfarmLoginPage {
// Section 2  -  Declaration the required Page and its fields/elements

   private readonly loginpage: Page
   private readonly lbl_username: Locator
   private readonly lbl_password: Locator
   private readonly btn_login: Locator


   //Section 3   - Initialization
   constructor( loginpageURL: Page ){
      this.loginpage = loginpageURL
      // xpath syntax -    //tagname[@attributename:("attributevalue")]
      this.lbl_username = loginpageURL.locator("//input[@id=("username")]")
   }


 }


