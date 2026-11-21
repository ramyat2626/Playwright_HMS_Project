import { test, expect } from "@playwright/test";
import {loginpage} from '../exam/practicetest/rqaloginpage'

// This spec tests the login form itself, so start without the saved session
test.use({ storageState: { cookies: [], origins: [] } })

test("SfdcLogin", async ({page})=>{
    const loginobj = new loginpage(page)
    await loginobj.func_naviagteToUrl("https://orgfarm-95e4b1e1e8-dev-ed.develop.my.salesforce.com/")
    await loginobj.func_login("ramyat2626.f2adf33763b6@agentforce.com", "Qwerty.1212")
    

})
//await context.storagestate({path: 'sf-profile/state.jason'});