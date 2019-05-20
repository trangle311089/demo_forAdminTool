import { ProtractorBrowser } from "protractor";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";

export class GroupTelephonyPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport

  

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
 
    }

    async inputValue(fieldName:string, data:string){
        var xpath = "//input[@id='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath, data)
    }

    async selectPSTN(pstnName:string){
        var xpath = "//div[@col-id='phoneNumber' and contains(text(),'"+pstnName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectDialPlan(dialPlan:string){
        var xpath = "//div[@col-id='dialString' and contains(text(),'"+dialPlan+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectPermission(btn_name:string){
        var xpath = "//input[@id='"+btn_name+"']"
        await this.actionSupport.clickOnElement(xpath)
    }
    
    async getValidationMessage(message_txt:string, message_content:string){
        var xpath ="//p[@ng-bind='"+message_txt+"' and contains (text(),'"+message_content+"')]"
        await this.actionSupport.presentElement(xpath)
    }

}