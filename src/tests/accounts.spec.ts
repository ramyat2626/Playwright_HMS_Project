import { test, expect} from '@playwright/test'
import{ Homepage } from '../page/home_page'
import{ AccountsPage } from '../page/accounts_page'
import{ SF_ORG_URL } from '../utils/sfdc_config'

// No login here: the session saved by auth.setup.ts is loaded via storageState (no MFA prompt)

test("Add an account", async ({page})=>{
    const home_obj = new Homepage(page)
    const account_obj = new AccountsPage(page)

    await home_obj.func_navigateToHome(SF_ORG_URL)
    expect(await home_obj.fun_verfyHomePage()).toBe(true)
    await home_obj.func_accountTab()
    expect(await account_obj.func_verifyInAccountTab()).toBe(true)
    await account_obj.func_account("Typescript", "Hot", "30/10/2026","This is to add new account")

})
