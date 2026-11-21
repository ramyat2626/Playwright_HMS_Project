import {test, expect} from '@playwright/test';
import {HmsLoginPage} from '../page/drloginpage'
import {HmsAdminPage} from '../page/dradminpage'
import {PlaywrightUtils} from '../utils/playwright_utils'
import {credentials} from '../Testdata/credentials'

test('Add new doctor', async ({page}) => {
    const loginPageobj = new HmsLoginPage(page);
    const adminPageobj = new HmsAdminPage(page);
    const playwrightUtilsobj_utils_obj = new PlaywrightUtils(page);


    
    await loginPageobj.navigateTo('https://automatetesting-platform.com');
    await loginPageobj.login(credentials.admin.username, credentials.admin.password);
    
    await adminPageobj.func_get_all_specialization_values();
    expect(await adminPageobj.func_verify_miaavi_admin_welcome()).toBe(true);
    await adminPageobj.func_delete_existing_doctor_record('Dr.Shiva');
    expect(await adminPageobj.func_verify_plus_add_doctor_popup()).toBe('Add New Doctor');

    await adminPageobj.func_add_doctor('Dr.Shiva', 'Cardiology', 'Hyderabad', 'shiva@gmail.com', '1234567890');

    expect(await adminPageobj.func_search_doctor('Dr.Shiva')).toBe(true);

    //await playwrightUtilsobj_utils_obj.func_logout();  


})

test("Get all Specilizations", async ({page}) => {
    const loginPageobj = new HmsLoginPage(page)
    const adminPageobj = new HmsAdminPage(page)
    const playwrightUtilsobj_utils_obj = new PlaywrightUtils(page)

    await loginPageobj.navigateTo('https://automatetesting-platform.com')
    await loginPageobj.login(credentials.admin.username, credentials.admin.password)

    expect(await adminPageobj.func_verify_miaavi_admin_welcome()).toBe(true)
    console.log(await adminPageobj.func_get_all_specialization_values())

})
