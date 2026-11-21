// One-time Salesforce login that saves the session (cookies + local storage) to a file.
// Every other test reuses that file through `storageState` in playwright.config.ts,
// so the MFA code from email only has to be entered when the saved session has expired.

import { test as setup, expect } from '@playwright/test'
import fs from 'fs'
import { LoginSfdc } from '../page/login_page'
import { SF_ORG_URL, SF_USERNAME, SF_PASSWORD, AUTH_FILE } from '../utils/sfdc_config'

setup("authenticate to Salesforce", async ({ browser }) => {
    setup.setTimeout(5 * 60 * 1000) // gives you time to type the MFA code

    // 1. If a saved session exists and Salesforce still accepts it, there's nothing to do
    if (fs.existsSync(AUTH_FILE)) {
        const context = await browser.newContext({ storageState: AUTH_FILE })
        const page = await context.newPage()
        await page.goto(SF_ORG_URL + "lightning/page/home")
        const stillLoggedIn = await page
            .waitForURL(/\/lightning\//, { timeout: 30000 })
            .then(() => true, () => false)
        if (stillLoggedIn) {
            await context.storageState({ path: AUTH_FILE }) // refresh the cookies
            await context.close()
            return
        }
        await context.close()
    }

    // 2. Otherwise log in again and enter the MFA code by hand in the opened browser
    const context = await browser.newContext()
    const page = await context.newPage()
    const login_obj = new LoginSfdc(page)

    await login_obj.func_navigateTo(SF_ORG_URL)
    await login_obj.func_login(SF_USERNAME, SF_PASSWORD)

    // Wait until you finish "Verify Your Identity" and Lightning opens
    await page.waitForURL(/\/lightning\//, { timeout: 4 * 60 * 1000 })
    await expect(page.locator("//button[@aria-label='Search']")).toBeVisible({ timeout: 60000 })

    // 3. Save the logged-in session for all the tests
    await context.storageState({ path: AUTH_FILE })
    await context.close()
})
