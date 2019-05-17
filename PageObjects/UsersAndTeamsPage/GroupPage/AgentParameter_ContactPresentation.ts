import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";

export class GroupContactPresentationPage{
    curBrowser: ProtractorBrowser
    actionSupport : ActionSupport

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)
    }

    async selectCheckbox_btn(btnName:string){
        var xpath = "//input[@type='checkbox' and @ng-model='"+btnName+"']"
        await this.actionSupport.selectCheckbox(xpath)
    }

    async inputText_field(fieldName:string, data:string){
        var xpath = "//input[@id='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath,data)
    }
}