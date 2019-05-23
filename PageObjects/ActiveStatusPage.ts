import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport/actionSupport";
import { Tier1ActiveStatus } from "../admin_core_menu/tier1Menu/tier1ActiveStatus";

export class ActiveStatusPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    tier1ActiveStatus: Tier1ActiveStatus

      
    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)
        this.tier1ActiveStatus = new Tier1ActiveStatus(this.curBrowser)
      
    }

    async navigateToActiveStatusPage(){
        await this.tier1ActiveStatus.navigateToActiveStatus()
        await this.tier1ActiveStatus.navigateToUsersList()
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