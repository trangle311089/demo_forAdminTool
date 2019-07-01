import { ProtractorBrowser, by, browser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport";

export class ActiveStatusPage{
    actionSupport: ActionSupport
      
    constructor(browser:ProtractorBrowser){
           this.actionSupport = new ActionSupport(browser)     
    }

    async selectActiveUser(activeName:string){
        console.log ("Active Status Page: Select the existing user "+ activeName + " ")
        var xpath = "//span[contains (text(),'"+ activeName + "')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async verifyActiveUser(activeName:string){
        console.log ("Active Status Page: The user " + activeName + " is displayed in the grid")
        let xpath = "//span[contains (text(),'"+ activeName + "')]"
        let ele = browser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(true)
    }

    async verifyRemoveUser(activeName:string){
        console.log ("Active Status Page: The user " + activeName + " is removed in the grid")
        let xpath = "//span[contains (text(),'"+ activeName + "')]"
        let ele = browser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(false)
    }
}