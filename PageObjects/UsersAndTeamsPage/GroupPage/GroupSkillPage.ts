import { ProtractorBrowser, by, browser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";

export class GroupSkillPage{
    actionSupport: ActionSupport
    skill_name: string
    skill_description: string

    constructor(browser:ProtractorBrowser){
        this.actionSupport = new ActionSupport (browser)
        this.skill_name = "//input[@id = 'txtSkillName']"
        this.skill_description = "//input[@id = 'txtSkillDescription']"
    }
    async createSkill(skillName:string, skillDescription:string){
        console.log ("Group Skills Page - Input skill name: " + skillName)
        await this.actionSupport.sendKeyOnElement(this.skill_name, skillName)
        console.log ("Group Skills Page - Input skill description: " + skillDescription)
        await this.actionSupport.sendKeyOnElement(this.skill_description, skillDescription)
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