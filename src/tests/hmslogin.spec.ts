import{test,expect} from '@playwright/test';
import {HmsLoginPage} from '../page/drloginpage'

test('To get the admin username', async ({page}) => {
  const loginPage = new HmsLoginPage(page)

  await loginPage.navigateTo('https://automatetesting-platform.com');

  console.log(await loginPage.func_hover_get_miaavi_username_value())
  expect(await loginPage.func_hover_get_miaavi_username_value()).toBe('miaaviAdmin')
 
})
