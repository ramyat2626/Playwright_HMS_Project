import {Page, Locator} from '@playwright/test'

export class HmsAdminPage {
private readonly page: Page
private readonly lbl_Welcome_miaaviAdmin: Locator
private readonly btn_plus_add_doctor: Locator
private readonly lbl_add_doctor_popup: Locator
private readonly lbl_name: Locator
private readonly drp_specialization: Locator
private readonly drp_location: Locator
private readonly lbl_email: Locator
private readonly lbl_phone_number: Locator
private readonly btn_add_doctor: Locator
private readonly lbl_search_doctor: Locator
private readonly lbl_popup_header: Locator
private readonly btn_all_delete_buttons: Locator

private readonly eles_Specialization_column: Locator

constructor(page: Page) {
  this.page = page
  this.lbl_Welcome_miaaviAdmin = page.getByText('Welcome, miaaviAdmin')
  this.btn_plus_add_doctor = page.getByRole('button', { name: '+ Add Doctor' })
  this.lbl_add_doctor_popup = page.getByTestId('Add New Doctor')
  this.lbl_name = page.getByLabel('Name *')
  this.lbl_search_doctor = page.getByTestId("doctors-search-input")
 // <input id="doctors-search-input" type="text" class="table-search-input-small" data-testid="doctors-search-input" placeholder="Search..." value="">
  this.lbl_popup_header = page.getByTestId("add-doctor-title")
  //<h3 id="add-doctor-title" data-testid="add-doctor-title">Add New Doctor</h3>
  this.btn_all_delete_buttons = page.getByRole('button', { name: 'Delete' })
  //<button id="delete-doctor-button-53" class="btn-delete" data-testid="delete-doctor-button-53">Delete</button>
  
  //this.drp_specialization = page.locator("//select[@id='doctor-specialization']")
  //this.drp_specialization = page.getByTestId('specialization-dropdown')
  this.drp_specialization = page.getByTestId('select-doctor-specialization')

  this.drp_location = page.getByTestId('select-doctor-location')
  this.lbl_email = page.getByTestId('input-doctor-email')
  this.lbl_phone_number = page.getByTestId('label-doctor-phone')
  this.btn_add_doctor = page.getByTestId('submit-doctor-button')
  
  this.eles_Specialization_column = page.locator("//tbody/tr/td[2]")

}

public async func_get_all_specialization_values(): Promise<Set<string>>{
    const unique_specialization_values = new Set<string>();
    (await this.eles_Specialization_column.allInnerTexts()).forEach((element: string)=>unique_specialization_values.add(element))
   console.log(unique_specialization_values)
    return unique_specialization_values
}


public async func_verify_miaavi_admin_welcome(): Promise<boolean>{
    //add wait for the page to load completely
    //await this.page.waitForLoadState('networkidle')
   // this.page.waitForTimeout(5000)
   this.page
    return await this.lbl_Welcome_miaaviAdmin.isVisible()

}

public async func_delete_existing_doctor_record(doc_name_value: string){
    await this.lbl_search_doctor.fill(doc_name_value)
}

public async func_verify_plus_add_doctor_popup(): Promise<string>{
    await this.btn_plus_add_doctor.click()
    return await this.lbl_popup_header.innerText()
}

public async func_add_doctor(name_value: string, specialization_value: string, location_value: string, email_value: string, phone_number_value: string){
    await this.lbl_name.fill(name_value)
    await this.drp_specialization.selectOption(specialization_value)
    await this.drp_location.selectOption(location_value)
    await this.lbl_email.fill(email_value)
    await this.lbl_phone_number.fill(phone_number_value)
    await this.btn_add_doctor.click()
    await this.page.waitForTimeout(5000)
}

public async func_search_doctor(doc_name_value: string): Promise<boolean>{
    await this.lbl_search_doctor.fill(doc_name_value)
    return await this.btn_all_delete_buttons.first().isVisible()
}

public async func_delete_doctor_record(doc_name_value: string){
    await this.lbl_search_doctor.fill(doc_name_value)

    //PW- alet dialog handling
    this.page.once('dialog', async (dialog) => {
        await dialog.accept(doc_name_value);

    })
    await this.btn_all_delete_buttons.click()
}

}