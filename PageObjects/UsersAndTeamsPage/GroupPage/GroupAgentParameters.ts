import { ProtractorBrowser, element, by } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";
import { emit } from "cluster";
import { EBADF } from "constants";

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