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

    async selectSkill(skillName:string){
        var xpath = "//span[contains (text(),'"+skillName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async clickShowSkillHolders_btn(){
        var xpath = "//button[@ng-click='showSkillHolders()']"
        await this.actionSupport.clickOnElement(xpath)
    }

    async showHolder(holderName:string){
        var xpath = "//span[contains (text(), '"+holderName+"')]"
        await this.actionSupport.presentElement(xpath)
    }
}