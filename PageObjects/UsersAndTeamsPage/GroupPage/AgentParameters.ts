import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";
import { HandleMenu } from "../../../CommonSupport/HandleMenu";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";

export class GroupAgentParameters{
    curBrowser : ProtractorBrowser
    actionSupport: ActionSupport
    handleEditingControl: HandleEditingControl

    constructor (browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
        this.handleEditingControl = new HandleEditingControl (this.curBrowser)      
    }
  
    // define element on Login Settings page
    async selectRadio_loginPage(btnName:string){
        var xpath = "//input[@id='"+btnName+"']"
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectCheckbox_loginPage(btnName:string){
        var xpath = "//label[@for='"+btnName+"']" 
        await this.actionSupport.clickOnElement(xpath)
    }

    async inputData_loginPage(fieldName:string, data:string){
        var xpath = "//input[@name='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath,data)
    }

    // define elements on Contact Presentation page
    async selectCheckbox_contactPre(btnName:string){
        var xpath = "//input[@type='checkbox' and @ng-model='"+btnName+"']"
        await this.actionSupport.selectCheckbox(xpath)
    }

    async inputData_contactPre(fieldName:string, data:string){
        var xpath = "//input[@id='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath,data)
    }

    // define element on Agent Permission page
    async selectCheckbox_agentPer(checkboxName:string){
        var xpath = "//input[@type='checkbox' and @ng-model='"+checkboxName+"']"
        await this.actionSupport.selectCheckbox(xpath)
    }
}