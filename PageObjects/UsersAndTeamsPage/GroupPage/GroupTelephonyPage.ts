import { ProtractorBrowser, by, browser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";

export class GroupTelephonyPage{
    actionSupport: ActionSupport

    constructor(browser:any){
        this.actionSupport = new ActionSupport (browser)
 
    }

    async inputData_Telephony(fieldName:string, data:string){
        let xpath = "//input[@id='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath, data)
    }

    async selectPSTN(pstnName:string){
        let xpath = "//div[@col-id='phoneNumber' and contains(text(),'"+pstnName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectDialPlan(dialPlan:string){
        let xpath = "//div[@col-id='dialString' and contains(text(),'"+dialPlan+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectPermission(btn_name:string){
        let xpath = "//input[@id='"+btn_name+"']"
        await this.actionSupport.clickOnElement(xpath)
    }
    
    async verifyValidationMessage(message_txt:string, message_content:string){
        let xpath ="//p[@ng-bind='"+message_txt+"' and contains (text(),'"+message_content+"')]"
        let ele = browser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(true)
    }

    async verifyDisplayedPSTN(pstnName:string){
        let xpath = "//div[@col-id='phoneNumber' and contains(text(),'"+pstnName+"')]"
        let ele = browser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(true)
    }

    async verifyDisplayedDialPlan(dialPlan:string){
        let xpath = "//div[@col-id='dialString' and contains(text(),'"+dialPlan+"')]"
        let ele = browser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(true)
    }

}