import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport/actionSupport";

export class ActiveStatusPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    
    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)
      
    }

    async presenceOfActive(activeName:string){
        var xpath = "//span[contains (text(),'"+ activeName + "')]"
        await this.actionSupport.presentElement(xpath)
    }

    async invisibilityOfActive(activeName:string){
        var xpath = "//span[contains (text(),'"+ activeName + "')]"
        await this.actionSupport.notPresentElement(xpath)
    }

    async selectActiveUser(activeName:string){
        var xpath = "//span[contains (text(),'"+ activeName + "')]"
        await this.actionSupport.clickOnElement(xpath)
    }
}