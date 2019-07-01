import { ProtractorBrowser, by, browser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";

export class GroupSkillPage{
    actionSupport: ActionSupport

    constructor(browser:ProtractorBrowser){
        this.actionSupport = new ActionSupport (browser)
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
        let ele = browser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(true)
    }
    async verifyDisplayedHolder(holderName:string){
        console.log ("Group Skill Page: Show the holder "+holderName+" on grid")
        var xpath = "//span[contains (text(), '"+holderName+"')]"
        let ele = browser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(true)
    }
}