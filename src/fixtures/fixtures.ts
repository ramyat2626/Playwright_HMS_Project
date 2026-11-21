import {test as base, expect} from "@playwright/test";
import { ObjectManager} from "../page/object_manager";
import { credentials } from "../Testdata/credentials";

type platformfixtures = {
    adminSession: ObjectManager
    oatientSession: ObjectManager
    doctorSession: ObjectManager

}

export const test = base.extend<platformfixtures>({
    adminSession: async ({ page }, use) => {
        let pom = new ObjectManager(page)
        await pom.loginPageFunc.navigateTo('https://automatetesting-platform.com');
        await pom.loginPageFunc.login(credentials.admin.username, credentials.admin.password);
        expect(await pom.adminPageFunc.func_verify_miaavi_admin_welcome()).toBe(true);
        await use(pom)
        await pom.playwrightUtilsFunc.func_logout()
    }
    }
)