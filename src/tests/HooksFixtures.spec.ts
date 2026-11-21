import {test, expect} from '@playwright/test';
import {HmsLoginPage} from '../page/drloginpage'
import {HmsAdminPage} from '../page/dradminpage'
import {PlaywrightUtils} from '../utils/playwright_utils'
import {credentials} from '../Testdata/credentials'
import {ObjectManager} from '../page/object_manager'
import add_doctor from '../Testdata/add_doctor.json'

let pom: ObjectManager
test.beforeEach("Login to the application", async ({page})=>{
    pom = new ObjectManager(page)
    await pom.loginPageFunc.navigateTo("https://automatetesting-platform.com")
    await pom.loginPageFunc.login(credentials.admin.username, credentials.admin.password);
    expect(await pom.adminPageFunc.func_verify_miaavi_admin_welcome()).toBe(true);
})

test.afterEach("Logout of the application", async ({page})=>{
    await playwrightUtilsobj_utils_obj.func_logout();  

})


for(const data of add_doctor){
test(`Add new doctor' ${data.doc_name}`, async ({page}) => {
  //  const loginPageobj = new HmsLoginPage(page);
    //const adminPageobj = new HmsAdminPage(page);
    //const playwrightUtilsobj_utils_obj = new PlaywrightUtils(page);

    //const pom = new ObjectManager(page)
   // await pom.loginPageFunc.navigateTo("https://automatetesting-platform.com")
    //await loginPageobj.navigateTo('https://automatetesting-platform.com');
   // await pom.loginPageFunc.login(credentials.admin.username, credentials.admin.password);
    
    await pom.adminPageFunc.func_get_all_specialization_values();
   // expect(await pom.adminPageFunc.func_verify_miaavi_admin_welcome()).toBe(true);
    await pom.adminPageFunc.func_delete_existing_doctor_record(data.doc_name);
    expect(await pom.adminPageFunc.func_verify_plus_add_doctor_popup()).toBe('Add New Doctor');

    await pom.adminPageFunc.func_add_doctor(data.doc_name, data.doc_specialization,data.doc_location, data.doc_email, data.doc_phone)

    expect(await pom.adminPageFunc.func_search_doctor(data.doc_name)).toBe(true);

    //await playwrightUtilsobj_utils_obj.func_logout();  


})}

test("Get all Specilizations", async ({page}) => {
   // const loginPageobj = new HmsLoginPage(page)
    //const adminPageobj = new HmsAdminPage(page)
    //const playwrightUtilsobj_utils_obj = new PlaywrightUtils(page)

     //const pom = new ObjectManager(page)

    await pom.loginPageFunc.navigateTo('https://automatetesting-platform.com')
    await pom.loginPageFunc.login(credentials.admin.username, credentials.admin.password)

    expect(await pom.adminPageFunc.func_verify_miaavi_admin_welcome()).toBe(true)
    console.log(await pom.adminPageFunc.func_get_all_specialization_values())

})
