import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";

export class GroupSkillPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
    }

    async inputSkill(fieldName:string, data:string){
        var xpath = "//input[@id = '"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath, data)
    }
}