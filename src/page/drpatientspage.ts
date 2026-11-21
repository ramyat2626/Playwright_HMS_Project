import { Page, Locator, expect } from '@playwright/test';

export class PatientPage {
  readonly page: Page;
  //readonly body: Locator;
  private readonly mumbaiLocationBtn: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly femaleGenderRadio: Locator;
  private readonly ageInput: Locator;
  private readonly specializationSelect: Locator;
  private readonly symptomsInput: Locator;
  private readonly doctorSelect: Locator;
  private readonly appointmentDateInput: Locator;
  private readonly appointmentTimeSelect: Locator;
  private readonly urgentCheckbox: Locator;
  private readonly firstTimeVisitorCheckbox: Locator;
  private readonly sendReminderCheckbox: Locator;
  private readonly acceptTermsCheckbox: Locator;
  private readonly submitBtn: Locator;
  private readonly logoutBtn: Locator;
  private readonly searchDoctor: Locator;
  private readonly drp_all_specialization: Locator;
  private readonly eles_view_profile: Locator;



  constructor(page: Page) {
    this.page = page;
    //this.body = page.locator('body');
    this.mumbaiLocationBtn = page.getByTestId('location-button-mumbai');
    this.firstNameInput = page.getByTestId('input-first-name');
    this.lastNameInput = page.getByTestId('input-last-name');
    this.femaleGenderRadio = page.getByTestId('radio-gender-female');
    this.ageInput = page.getByTestId('input-age');
    this.specializationSelect = page.getByTestId('select-specialization');
    this.symptomsInput = page.getByTestId('input-symptoms');
    this.doctorSelect = page.getByTestId('select-doctor');
    this.appointmentDateInput = page.getByTestId('input-appointment-date');
    this.appointmentTimeSelect = page.getByTestId('select-appointment-time');
    this.urgentCheckbox = page.getByTestId('checkbox-urgent-appointment');
    this.firstTimeVisitorCheckbox = page.getByTestId('checkbox-first-time-visitor');
    this.sendReminderCheckbox = page.getByTestId('checkbox-send-reminder');
    this.acceptTermsCheckbox = page.getByTestId('checkbox-accept-terms');
    this.submitBtn = page.getByTestId('booking-submit-button');
    this.logoutBtn = page.getByTestId('patient-logout-button');
    this.searchDoctor = page.getByTestId('search-tab-button');
    this.drp_all_specialization = page.getByTestId('specialization-filter');
    this.eles_view_profile = page.locator('//button[contains(@id, "view-profile-button-")]');
  }

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

    public async selectMHospitalLocation(location_value: string) {
        const select_location = this.page.getByTestId(`location-button-"+{location_value.toLowerCase()}`).click()
  }

 public async selectMumbaiLocation() {
    //await this.body.click();
   await this.mumbaiLocationBtn.click();
  }

  public async fillPersonalDetails(firstName: string, lastName: string, age: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.femaleGenderRadio.check();
    await this.ageInput.fill(age);
  }

  public async fillMedicalDetails(specialization: string, symptoms: string) {
    await this.specializationSelect.selectOption(specialization);
    await this.symptomsInput.fill(symptoms);
  }

  public async fillAppointmentDetails(doctor: string, date: string, time: string) {
    await this.doctorSelect.selectOption(doctor);
    await this.appointmentDateInput.fill(date);
    await this.appointmentTimeSelect.selectOption(time);
  }

  public async acceptTermsAndPreferences() {
    await this.urgentCheckbox.check();
    await this.firstTimeVisitorCheckbox.check();
    await this.sendReminderCheckbox.check();
    await this.acceptTermsCheckbox.check();
  }

  public async submitBooking() {
    await this.submitBtn.click();
  }

  public async logout() {
    await expect(this.logoutBtn).toBeVisible();
    await this.logoutBtn.click();
  }
}