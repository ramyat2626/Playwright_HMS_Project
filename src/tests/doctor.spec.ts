import { test, expect } from '@playwright/test'
import { HmsLoginPage } from '../page/drloginpage'
import{ HmsDoctorPage } from '../page/doctorpage'
//import { PlaywrightUtils } from '../utils/playwright_utils'
import { credentials } from '../Testdata/credentials'

test("Add prescription to an existing patient", async ({page})=>{
    const login_obj = new HmsLoginPage(page)
    const doctor_obj = new HmsDoctorPage(page)
   // const playwright_utils_obj = new PlaywrightUtils(page)

    await login_obj.navigateTo("https://automatetesting-platform.com")
    await login_obj.login(credentials.doctor.username, credentials.doctor.password)

    expect(await doctor_obj.func_drag_drop_demo()).toBe(true)


})