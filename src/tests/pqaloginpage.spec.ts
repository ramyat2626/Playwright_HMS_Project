//This is the Test Spec file for Use Case - Login to Salesforce Org

//Section 1 - Libraries 
import {test,expect}  from   '@playwright/test'
import {pqaloginpage} from     '../page/pqa/pqaloginpage'  

// This spec tests the login form itself, so start without the saved session
test.use({ storageState: { cookies: [], origins: [] } })

//  first thing to do - Export the class from the respective .ts file 
//  second thing to do - import the class name in flower brackets
//  third thing to do -  from  replace src with ..
//  fourth thing to do - copy the relative path of the respective .ts file 

//Section 2 - Create Test Case 
test("Login to SF_Org" , async({page})=>{
    
    //we are trying to login into sfloginpage
    //tell me how to achieve it ???
    //we should first call the Class using an Object 
    // ante - - we should create Object agains tht class from the respective .ts file
    const loginobject = new pqaloginpage(page)
    await loginobject.func_navigate_to_URL("https://orgfarm-95e4b1e1e8-dev-ed.develop.my.salesforce.com/")
    await loginobject.func_pqaloginpage("ramyat2626.f2adf33763b6@agentforce.com", "Qwerty.1212")

})

//Section 3 - 

