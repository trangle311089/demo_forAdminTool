import { ProtractorBrowser, by } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";

export class GroupProfile{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    groupName_field: string
    description_field:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
        this.groupName_field = "//input[@id='txtGroupName']"
        this.description_field = "//input[@id='txtDescription']"
    }

    async createNewGroup(groupName:string, description:string){
        console.log("Input the group name" + groupName)
        await this.actionSupport.sendKeyOnElement(this.groupName_field, groupName)
        console.log("Input the description" + description)
        await this.actionSupport.sendKeyOnElement(this.description_field, description)
    }

    async selectGroup(groupName:string){
        var xpath ="//span[contains(text(),'"+groupName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async verifyDisplayedGroup(groupName:string){
        let xpath = "//span[contains(text(),'"+groupName+"')]"
        let ele = this.curBrowser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(true)        
    }

    async verifyRemovedGroup(groupName:string){
        let xpath = "//span[contains(text(),'"+groupName+"')]"
        let ele = this.curBrowser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(false)        
    }
  
}