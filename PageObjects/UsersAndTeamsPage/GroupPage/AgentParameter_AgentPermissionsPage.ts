import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";

export class GroupAgentPermissionPage{
    curBrowser : ProtractorBrowser
    actionSupport: ActionSupport

    constructor (browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
    }

    async selectCheckbox(checkboxName:string){
        var xpath = "//input[@type='checkbox' and @ng-model='"+checkboxName+"']"
        await this.actionSupport.selectCheckbox(xpath)
    }
}