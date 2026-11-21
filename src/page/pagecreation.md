When we navigate to a new page we need to wait until the page is loctaed
We need to look for a stable and unique element on the page is visiable.

HMS - As a Admin user: add a new doctor
search for the doctor (Dr.Shiva)
delete the exiting doctor (Dr.Shiva)
 
//==================================================
 
Step1: Identify the Pages
Step2: Identify the Popup screens
Step3: Identify the number of functions on each page
Step4: Identify unique element on the page which remains stable to confirm the focus is on the page.
Stpe5: draft the flow: run the manual flow
 
//=========================================================
Step1: Pages: Login_Page, Admin_Page
Step2: Popup screen: AddNewDoctor
Step3: Login_Page - Functions : fun_navigateToUrl(add step: networkidle & Stable element ), fun_LoginPage(performing actions on elements),
Step4: Amin_Page - Functions: fun_
 

//==========================================================
  
 1 Test case to login to HMSloginpage, created a class and 2 functions. 
   Login_Page
            un_navigateToUrl(add step: networkidle & Stable element )
            fun_LoginPage(performing actions on elements),
    Admin_Page
            FunC_ Global search, waitforloadstate(networkidle) ( stable element)  - isVisible() -  
            funC_Delete  - Delete Doctor - ALERT
            func_add_new doctor pop-up screen
            fun_to add_doctor(performing actions)- To create a doctor record
            func_serach_doctor_record  - to add a doctor record or to delete doctor record
    Patients Page
            Fun_booking Appointment - DYNAMIC PATH CREATION 
            fun_Search Doctor - NEW WINDOW


//=====================================================================================
ALERT
public async func_delete_doctor_record(doc_name_value: string){
    await this.lbl_search_doctor.fill(doc_name_value)

    this.page.once('dialog', async (dialog) => {
        await dialog.accept(doc_name_value);

    })
    await this.btn_all_delete_buttons.click()
}
=============================================================
DYNAMIC PATH CREATION 
public async selectMHospitalLocation(location_value: string) {
        const select_location = this.page.getByTestId(`location-button-"+{location_value.toLowerCase()}`).click()
}
================================================================
trace viewer - we will get trace it will take a screenshort for every.5sec it will take a trace.
===================================================================
NEW WINDOW
 public async func_get_docprofile_url(specialization_value: string): Promise<string> {
     await this.searchDoctor.waitFor({ state: 'visible', timeout: 15000 });
        await this.searchDoctor.click()

    await this.drp_all_specialization.selectOption(specialization_value)

    const [newpage] = await Promise.all([
        await this.page.context().waitForEvent('page'),
        await this.eles_view_profile.first().click()
    ])
    
    await newpage.waitForLoadState('networkidle')
    const url_value = newpage.url()
    await newpage.close()
    return url_value
  }
=======================================================================
WEB table

eles_specilization_coloumn
uniq_specilization

func_uniq_specilization_doc ()
    eles_specilzatio_column : string[] = (to get all specilizations uing array innertext method
    add method)
    
     unique_specilization ( uisng set we get unique values)
    we need xpath for coloum 2 whihc is specilization we are identifing the xpath for the 1st element in the row //tbody/tr/td[2]

const unique_specilization_value = new Set<String>();
(await this.eles_specilization_column.allinnertext()).foreach((element: string)=> unique_specilization_value.add(element))
==============================================================================
ASSERTIONS
.toBe
.Tocontain
.toBeTruthy

=====================================================================
SCREENSHORTS
'off'
'on'
'only-on-failure'
'on-first-failure'

VIDEO
off
on
on all retries
on first retry
retain on failure
retain on failure and retries
retain on first faliure
retry with video






=================================================================================
Test Case
    Import class from lib (Test, expect)
    Import class from loginpage
    import class fron admin page

test()
test("get all specilization", async({page})=>{

define test name
create an object and assign the class (pages)
create an object and assign utils 
call the function using object name
    naviagte url
    login 

    homepage validation
    + add doc popup
    add doc record
    search doc 

    utils logout
    })

=================================
window - where additional link opes in a new browser with the same url extension
Frams- Where a link opens and navigates to a new page with different website link


class declaration 
private readonly myframe: FrameLocator
private readonly tab_search_doctor_frame: Locator;
private readonly drp_all_specialization_frame: Locator;
private readonly eles_view_profile_frame: Locator;

this.myframe = page.frameLocator("")
this.tab_search_doctor_frame = this.myframe.getByTestId("search-tab-button")
this.drp_all_specialization_frame = this.myframe.getByTestId("")
======================================================================
KEYBOARD
when your filling the application to go to next field we click tab
await this.firstNameInput.press("Tab")

if we have submit we press enter
await this.submitbtn.press("Enter")

Mouse hover action

class{
    private readonly hover_show_credentials: Locator;
    private readonly lbl_miaavi_admin_username: Locator;


constructor  this.hover_show_credentials = page.locator("//span[text()='Show credentials']")
    this.lbl_miaavi_admin_username = page.locator("//strong[text()='miaaviAdmin']")
}

public async func_get_miaavi_admin_username(): Promise<string>{
    await this.hover_show_credentials.hover()
    await this.page.waitForTimeout(2000)
    return await this.lbl_miaavi_admin_username.innerText()
}

test("get all specilization", async ({page})=>{
    const loginpage = new HmsLoginPage '../page/drloginpage
    const adminpage = new Hmsadminpage '../page/dradminpage
    const PWutils = new PlaywrightUtils '../src/utils

    await loginpage.navigateto ('https://automatetesting-platform.com')
    await loginpage.login('miaaviAdmin', 'miaaviPassword')

    expect(await adminpage func verify mivai admin welcome) tobe(true)
    console.log (await adminpage func_get_all_splizations()) 



})


    
    



