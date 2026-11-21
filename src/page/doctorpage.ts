import{Page, Locator} from '@playwright/test'

export class HmsDoctorPage{
    private readonly page: Page
    private readonly tree_outpatients: Locator
    private readonly eles_patients: Locator
    private readonly eles_prescription: Locator

    private readonly eles_drop_to: Locator
    private readonly btn_submit: Locator

    constructor(page: Page){
        this.page = page

        this.tree_outpatients = page.getByTestId("outpatients-label")
        this.eles_patients = page.locator("//ul[@id='outpatients-list']/li")
        this.eles_prescription = page.locator("//ul[@id='prescriptions-list-saved']/li")
        this.eles_drop_to = page.getByTestId('prescription-inputs-drop-zone')
        this.btn_submit = page.getByTestId('submit-prescriptions-button')
    
    }

    public async func_drag_drop_demo(): Promise<boolean>{
        await this.tree_outpatients.click()
        await this.page.waitForTimeout(1000)
        await this.eles_patients.first().click()
        await this.page.waitForTimeout(1000)
        const prescription_count_before = await this.eles_prescription.count()
        await this.eles_prescription.nth(2).dragTo(this.eles_drop_to)
        await this.page.waitForTimeout(2000)
        await this.btn_submit.click()
        await this.page.waitForTimeout(1000)
        const prescription_count_after = await this.eles_prescription.count()
        console.log("Prescription count after : "+prescription_count_after)
        if(prescription_count_after>prescription_count_before){
            return true
        }else{
            return false
        }


    }
}