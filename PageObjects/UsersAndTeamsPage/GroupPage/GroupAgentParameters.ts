import { ProtractorBrowser, element, by } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";


export class GroupAgentParameters{
    actionSupport: ActionSupport

    constructor (browser:ProtractorBrowser){
        this.actionSupport = new ActionSupport (browser)
    }
  
    async inputData(fieldName:string, data:string){
        var xpath = "//input[@name='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath,data)
    }
}