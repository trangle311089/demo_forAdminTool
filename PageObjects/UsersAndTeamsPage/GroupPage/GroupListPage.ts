import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";

export class GroupListPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
      
    constructor(browser:ProtractorBrowser){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
    }

    async selectGroup(groupName:string){
        var xpath ="//span[contains(text(),'"+groupName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async invisibleGroup(groupName:string){
        var xpath = "//span[contains(text(),'"+groupName+"')]"
        await this.actionSupport.notPresentElement(xpath)
    }
}