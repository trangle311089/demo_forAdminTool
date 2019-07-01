import { ProtractorBrowser, ElementFinder } from "protractor";
import { ActionSupport } from "../core_function/actionSupport";

export class HandleDDL{
    actionSupport: ActionSupport
      
    constructor(browser:ProtractorBrowser){
        this.actionSupport = new ActionSupport (browser)
    }

    async clickOnDDL(ddlName:string, visibleText:string){
        var xpath = "//div[@id='"+ddlName+"']"
        await this.actionSupport.clickOnElement(xpath)
        var xpath = "//span[contains(text(),'"+visibleText+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }
}