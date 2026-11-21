Readme
SalesforceDev	
https://orgfarm-95e4b1e1e8-dev-ed.develop.my.salesforce.com/

ramyat2626.f2adf33763b6@agentforce.com

Qwerty.1212



Page Object Mordel - for every page in the application you should have a file in the project

https - protocol

orgfarm-95e4b1e1e8-dev-ed.develop.my.salesforce.com - Hostname

username - element, web element, object

tagname attribute = value, attribute = value, attribute = value

//Playwright Project.ts
        Inbuild classes in the lib
import{Page, Locator} from @playwright/test

//decleraing a variable
class classname{
    access identifer/Read-only modifie/variable name : datatype     
    private readonly loginpage: Page    //instance variable loginpage
    private readonly lbl_username: Locator

//constractor will be executed 1st when every we declar the object to execute
//method(Parameter name: class/interface)
        constructor(orgfarmpage: Page){
          this.loginpage = orgfarmpage 
//instance varibale keyword.variablename/innstance variable name=parametername(variablename).method(Method argument passing an XPath selector string)
          this.lbl_user_name = orgfarmpage.locator("//input[@id='username']")

//to assign value to variable performaing the action 
public function(username_value: string, password_value: string){
    this.lbl_user_name.fill(uaername_value)


    }

    }

}