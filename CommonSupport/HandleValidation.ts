import { ProtractorBrowser, browser, by } from "protractor";

export class HandleValidation{
    requiredField_msg: string
    duplicated_tenantid_msg:string
    duplicated_tenantName_msg:string

    constructor (browser:ProtractorBrowser){
        this.requiredField_msg = "//p[@ng-bind='validationMessage.requiredField' and contains (text(),'Required field')]"
        // Tenant Validation Message
        this.duplicated_tenantid_msg = "//p[@ng-bind='tenantIdUniqueMessage' and contains (text(),'The Tenant Id already exists')]"
        this.duplicated_tenantName_msg = "//p[@ng-bind='tenantNameUniqueMessage' and contains (text(),'The Tenant Name already exists')]"
    }

    // Verify validation message displayed
    async verifyRequiredFieldMsg(){
        console.log("Handle Validation - The validation msg Required field is displayed")
        let ele = browser.element(by.xpath(this.requiredField_msg))
        await expect (ele.isDisplayed()).toBe(true) 
    }

    //Tenant Validation message
    async verifyDuplicatedTenantidMsg(){
        console.log("Handle Validation - The validation msg The Tenant Id already exists is displayed")
        let ele = browser.element(by.xpath(this.duplicated_tenantid_msg))
        await expect (ele.isDisplayed()).toBe(true) 
    }

    async verifyDuplicatedTenantNameMsg(){
        console.log("Handle Validation - The validation msg The Tenant Name already exists is displayed")
        let ele = browser.element(by.xpath(this.duplicated_tenantName_msg))
        await expect (ele.isDisplayed()).toBe(true) 
    }

    // Verify invalid field bordered in red
    async verifyFieldInRed(fieldid:string){
        console.log("Handle Validation - The field '"+fieldid+"' is bordered in red")
        let xpath = "//input[@id='" + fieldid +"']"
        let ele = browser.element(by.xpath(xpath))
        await expect (ele.getCssValue('border')).toBe('2px solid rgb(255, 13, 0)')

    }
}