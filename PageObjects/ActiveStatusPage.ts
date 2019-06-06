import { ProtractorBrowser, by } from "protractor";
import { ActionSupport } from "../core_function/actionSupport";

export class ActiveStatusPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
      
    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)     
    }

    async selectActiveUser(activeName:string){
        console.log ("Active Status Page: Select the existing user "+ activeName + " ")
        var xpath = "//span[contains (text(),'"+ activeName + "')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async verifyActiveUser(activeName:string){
        console.log ("Active Status Page: The user " + activeName + " is displayed in the grid")
        let xpath = "//span[contains (text(),'"+ activeName + "')]"
        let ele = this.curBrowser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(true)
    }

    async verifyRemoveUser(activeName:string){
        console.log ("Active Status Page: The user " + activeName + " is removed in the grid")
        let xpath = "//span[contains (text(),'"+ activeName + "')]"
        let ele = this.curBrowser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(false)
    }
}