import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport/actionSupport";
import { Tier1TenantConfiguration } from "../admin_core_menu/tier1Menu/tier1TenantConfiguration";

export class TenantConfigurationPage {
    curBrowser:ProtractorBrowser
    actionSupport:ActionSupport
    tier1TenantConfiguration: Tier1TenantConfiguration

    tnt_id:string
    tnt_name:string
   
   
    show_disTenancy_option:string
   
    enable_tenancy_option:string
    disable_tenancy_option:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(browser)
        this.tier1TenantConfiguration = new Tier1TenantConfiguration(browser)
        
        this.tnt_id = "//input[@id='txtTenantId']"
        this.tnt_name = "//input[@id='txtTenantName']"
               
        this.show_disTenancy_option = "//label[@class='show-disable-tenant']"

        this.enable_tenancy_option = "//span[@ng-disabled='!checkEnableCondition()']"
        this.disable_tenancy_option = "//span[@ng-disabled='!checkDisableCondition()']"
        
    }

    async navigateToTenantConfiguration(){
        await this.tier1TenantConfiguration.navigateToTenantConfiguration()
    }

    async createNewTenancy(tenantid:string, tenantName:string){
        console.log("Input Tenant id: " + tenantid)
        await this.actionSupport.sendKeyOnElement(this.tnt_id, tenantid)
        console.log("Input Tenant name: "+ tenantName)
        await this.actionSupport.sendKeyOnElement(this.tnt_name,tenantName)
    }

    async selectTenancy(tenancyName:string){
        var xpath = "//div[@col-id='tenantid' and contains (text(),'"+tenancyName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async showDisabledTenancy(){
        console.log ("Show the disabled tenancy on the tenant list")
        await this.actionSupport.clickOnElement(this.show_disTenancy_option)
    }

    async enableTenancy(){
        console.log("Enable the tenancy")
        await this.actionSupport.clickOnElement(this.enable_tenancy_option)
    }

    async disableTenancy(){
        console.log("Disable the tenancy")
        await this.actionSupport.clickOnElement(this.disable_tenancy_option)
    }

    async showTenancy(tenancyName:string){
        console.log('The tenancy is displayed in grid')
        var xpath = "//div[@col-id='tenantid' and contains (text(),'"+tenancyName+"')]"
        await this.actionSupport.presentElement(xpath)
    }
}
