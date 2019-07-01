import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport";

export class HandleBreadcrumb {
    actionSupport: ActionSupport

    constructor(browser:ProtractorBrowser){
        this.actionSupport = new ActionSupport (browser)
    }

    async selectBreadcrumb(breadcrumbName:string){
        var xpath = "//a[@ng-click='breadcrumbClick()' and contains (text(), '"+breadcrumbName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }
}