// appointment.spec.ts
import { test } from '@playwright/test';
import {HmsLoginPage} from '../page/drloginpage'
import { PatientPage } from '../page/drpatientspage';
import { PlaywrightUtils } from '../utils/playwright_utils';

test.only('Book appointment and logout', async ({ page }) => {
  const loginPageobj = new HmsLoginPage(page);
  const appointmentPage = new PatientPage(page);
  const playwrightUtilsobj_utils_obj = new PlaywrightUtils(page);

  await loginPageobj.navigateTo('https://automatetesting-platform.com');
  await loginPageobj.login('miaaviPatient', 'miaaviPassword');

  await appointmentPage.selectMumbaiLocation();
  await appointmentPage.fillPersonalDetails('Playwright', 'RQA', '23');
  await appointmentPage.fillMedicalDetails('Dermatology', 'skin issue');
  await appointmentPage.fillAppointmentDetails('Dr Kapil', '2026-11-07', '11:30');
  await appointmentPage.acceptTermsAndPreferences();
  await appointmentPage.submitBooking();
  //await appointmentPage.logout();
  await playwrightUtilsobj_utils_obj.func_logout()


}

)

test("get url of view doctor profile", async ({ page }) => {
  const loginPageobj = new HmsLoginPage(page);
  const patientPageobj = new PatientPage(page);

  await loginPageobj.navigateTo('https://automatetesting-platform.com');
  await loginPageobj.login('miaaviPatient', 'miaaviPassword');

 console.log(await patientPageobj.func_get_docprofile_url('Dermatology'));
})

