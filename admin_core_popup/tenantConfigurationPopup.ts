import { ProtractorBrowser, ProtractorExpectedConditions, browser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport/actionSupport";


export class TenantConfigurationPopup{
    curBrowser:ProtractorBrowser
    actionSupport:ActionSupport

    add_Tenant_popup:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)

        this.add_Tenant_popup = "//span[@class='dialog-title ng-binding' and contains (text(),'add')]"
    }

    async showAddPop(){
        console.log("Show the ADD popup")
        await this.actionSupport.presentElement(this.add_Tenant_popup)
    }



}