import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";

export class GroupStatusReasonsPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)
    }

    async inputValue(fieldName:string, data:string){
        var xpath = "//input[@id='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath, data)
    }

    async selectStt(sttName:string){
        var xpath = "//span[contains (text(),'"+sttName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }
}