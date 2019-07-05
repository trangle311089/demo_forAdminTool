import { ProtractorBrowser, by, browser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";

export class GroupStatusReasonsPage{
    actionSupport: ActionSupport

    constructor(browser:ProtractorBrowser){
           this.actionSupport = new ActionSupport(browser)
    }

    async inputData_StatusReasons(fieldName:string, data:string){
        let xpath = "//input[@id='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath, data)
    }
}