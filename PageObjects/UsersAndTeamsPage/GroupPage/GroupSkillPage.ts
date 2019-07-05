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

    async clickShowSkillHolders_btn(){
        let xpath = "//button[@ng-click='showSkillHolders()']"
        await this.actionSupport.clickOnElement(xpath)
    }
    async verifyAddSkillSuccessfully(skillName:string){
        let xpath = "//div[@data='data.skillListGrid']"
        let ele = browser.element(by.xpath(xpath))
        await expect (ele.getText()).toContain(skillName)
    }
    async verifyShowSkillHolder(holderName:string){
        let xpath = "//div[@data='data.skillHoldersGrid']"
        let ele = browser.element(by.xpath(xpath))
        await expect (ele.getText()).toContain(holderName)
    }
}