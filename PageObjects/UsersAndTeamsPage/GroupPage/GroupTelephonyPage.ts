import { ProtractorBrowser } from "protractor";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";

export class GroupTelephonyPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    input : string
    valid :string
  

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
        this.input = "//input[@id='txtMinLength']"
        this.valid = "//p[@ng-bind='minValueMessage']"
    }

    async inputValue(fieldName:string, data:string){
        var xpath = "//input[@id='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath, data)
    }

    async selectPSTN(pstnName:string){
        var xpath = "//div[@col-id='phoneNumber' and contains(text(),'"+pstnName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectPermission(btn_name:string){
        var xpath = "//input[@id='"+btn_name+"']"
        await this.actionSupport.clickOnElement(xpath)
    }
    

}