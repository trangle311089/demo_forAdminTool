import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../core_function/actionSupport/actionSupport";
import { Tier1Menu } from "./tier1Menu";
import { LoginPage } from "../../PageObjects/LoginPage";

export class Tier1TenantConfiguration{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    tier1menu: Tier1Menu

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
        this.tier1menu = new Tier1Menu (this.curBrowser)
    }

    async navigateToTenantConfiguration(){
        await this.tier1menu.presenceOfTier1Ver('Tenant Configuration')
        await this.tier1menu.navigateToTier1Ver('Tenant Configuration')
    }
}