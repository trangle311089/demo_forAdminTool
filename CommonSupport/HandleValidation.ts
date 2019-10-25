import { ProtractorBrowser, browser, by } from "protractor";

export class HandleValidation{
    requiredField_msg: string

    constructor (browser:ProtractorBrowser){
        this.requiredField_msg = "//p[@ng-bind='validationMessage.requiredField' and contains (text(),'Required field') ]"
    }

    async verifyRequiredFieldMsg(){
        console.log("Handle Validation - The validation msg Required field is displayed")
        let ele = browser.element(by.xpath(this.requiredField_msg))
        await expect (ele.isDisplayed()).toBe(true) 
    }

    async verifyFieldInRed(fieldid:string){
        console.log("Handle Validation - The field '"+fieldid+"' is bordered in red")
        let xpath = "//input[@id='" + fieldid +"']"
        let ele = browser.element(by.xpath(xpath))
        await expect (ele.getCssValue('border')).toBe('2px solid rgb(255, 13, 0)')

    }
}