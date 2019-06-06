import { ProtractorBrowser, by } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";

export class GroupStatusReasonsPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)
    }

    async inputData_StatusReasons(fieldName:string, data:string){
        let xpath = "//input[@id='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath, data)
    }

    async selectStt(sttName:string){
        let xpath = "//span[contains (text(),'"+sttName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async verifyDisplayedStt(sttName:string){
        let xpath = "//span[contains (text(),'"+sttName+"')]"
        let ele = this.curBrowser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(true)
    }
}