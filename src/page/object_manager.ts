import{Page} from '@playwright/test'
import{HmsAdminPage} from '../page/dradminpage'
import{HmsLoginPage} from '../page/drloginpage'
import{PatientPage} from '../page/drpatientspage'
import{HmsDoctorPage} from '../page/doctorpage'
import {PlaywrightUtils} from '../utils/playwright_utils'

export class ObjectManager{
    private readonly page: Page
    private readonly loginPageobj: HmsLoginPage
    private readonly adminPageobj: HmsAdminPage
    private readonly patientPageobj: PatientPage
    private readonly doctorPageobj: HmsDoctorPage
    private readonly playwrightUtilsobj_utils_obj: PlaywrightUtils

    constructor(page: Page){
        this.page = page
        this.loginPageobj = new HmsLoginPage(page)
        this.adminPageobj = new HmsAdminPage(page)
        this.patientPageobj = new PatientPage(page)
        this.doctorPageobj = new HmsDoctorPage(page)
        this.playwrightUtilsobj_utils_obj = new PlaywrightUtils(page)
    }


    public get loginPageFunc(): HmsLoginPage{
        return this.loginPageobj
    }

    public get adminPageFunc(): HmsAdminPage{
        return this.adminPageobj
    }

    public get patientPageFunc(): PatientPage{
        return this.patientPageobj
    }

    public get doctorPageFunc(): HmsDoctorPage{
        return this.doctorPageobj
    }

    public get playwrightUtilsFunc(): PlaywrightUtils{
        return this.playwrightUtilsobj_utils_obj
    }   
}