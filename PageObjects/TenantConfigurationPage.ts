import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport/actionSupport";

export class TenantConfigurationPage {
    curBrowser:ProtractorBrowser
    actionSupport:ActionSupport

    tnt_id:string
    tnt_name:string
    tnt_selected:string
   
    show_disTenancy_option:string
   
    enable_tenancy_option:string
    disable_tenancy_option:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(browser)
        
        this.tnt_id = "//input[@id='txtTenantId']"
        this.tnt_name = "//input[@id='txtTenantName']"
        this.tnt_selected = "//div[@col-id='tenantid' and contains (text(),'1001')]"
        
        this.show_disTenancy_option = "//label[@class='show-disable-tenant']"

        this.enable_tenancy_option = "//span[@ng-disabled='!checkEnableCondition()']"
        this.disable_tenancy_option = "//span[@ng-disabled='!checkDisableCondition()']"
        
    }

    async createNewTenancy(tenantid:string, tenantName:string){
        console.log("Input Tenant id: " + tenantid)
        await this.actionSupport.sendKeyOnElement(this.tnt_id, tenantid)
        console.log("Input Tenant name: "+ tenantName)
        await this.actionSupport.sendKeyOnElement(this.tnt_name,tenantName)
    }

    async copyTenancy(tenantid:string, tenantName:string){
        console.log ("Input Tenant id: " + tenantid)
        await this.actionSupport.sendKeyOnElement(this.tnt_id, tenantid)
        console.log ("Input Tenant name: " + tenantName)
        await this.actionSupport.sendKeyOnElement(this.tnt_name, tenantName)
    }

    async selectTenancy(){
        console.log("Select one tenancy on grid")
        await this.actionSupport.clickOnElement(this.tnt_selected)

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

    async showTenancy(){
        console.log ("Show the tenancy on grid")
        await this.actionSupport.presentElement(this.tnt_selected)
    }
}