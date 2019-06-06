import { ProtractorBrowser, by } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";

export class GroupSkillPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
    }
    async inputData_Skills(fieldName:string, data:string){
        let xpath = "//input[@id = '"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath, data)
    }
    async selectSkill(skillName:string){
        let xpath = "//span[contains (text(),'"+skillName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }
    async clickShowSkillHolders_btn(){
        let xpath = "//button[@ng-click='showSkillHolders()']"
        await this.actionSupport.clickOnElement(xpath)
    }
    async verifyDispalyedSkill(skillName:string){
        let xpath = "//span[contains (text(), '"+skillName+"')]"
        let ele = this.curBrowser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(true)
    }
    async verifyDisplayedHolder(holderName:string){
        console.log ("Group Skill Page: Show the holder "+holderName+" on grid")
        var xpath = "//span[contains (text(), '"+holderName+"')]"
        let ele = this.curBrowser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(true)
    }
}