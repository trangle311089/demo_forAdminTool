import { ProtractorBrowser, by, browser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport";

export class TenantConfigurationPage {
    actionSupport:ActionSupport
    tnt_id:string
    tnt_name:string
    tnt_description:string
    show_disTenancy_option:string
    enable_tenancy_option:string
    disable_tenancy_option:string
    

    constructor(browser:ProtractorBrowser){
        this.actionSupport = new ActionSupport(browser)        
        this.tnt_id = "//input[@id='txtTenantId']"
        this.tnt_name = "//input[@id='txtTenantName']" 
        this.tnt_description = "//input[@id='txtDescription']" 
                  
        this.show_disTenancy_option = "//label[@class='show-disable-tenant']"
        this.enable_tenancy_option = "//span[@ng-disabled='!checkEnableCondition()']"
        this.disable_tenancy_option = "//span[@ng-disabled='!checkDisableCondition()']"        
    }

    async createNewTenancy(tenantid:string, tenantName:string, tenantDescription:string){
        console.log("Tenant Configuration Page - Input Tenant id: " + tenantid)
        await this.actionSupport.sendKeyOnElement(this.tnt_id, tenantid)
        console.log("Tenant Configuration Page - Input Tenant name: "+ tenantName)
        await this.actionSupport.sendKeyOnElement(this.tnt_name,tenantName)
        console.log("Tenant Configuration Page - Input Tenant Description: "+ tenantDescription)
        await this.actionSupport.sendKeyOnElement(this.tnt_description,tenantDescription)
    }

    async inputTenantId(tenantid:string){
        console.log("Tenant Configuration Page - Input Tenant id: " + tenantid)
        await this.actionSupport.sendKeyOnElement(this.tnt_id, tenantid)
    }

    async inputTenantName(tenantName:string){
        console.log("Tenant Configuration Page - Input Tenant Name: " + tenantName)
        await this.actionSupport.sendKeyOnElement(this.tnt_name, tenantName)
    }

    async selectTenancy(tenantid:string){
        var xpath = "//div[@col-id='tenantid' and contains (text(),'"+tenantid+"')]"
        console.log ("Tenant Configuration Page - Select the existing tenant on grid")
        await this.actionSupport.clickOnElement(xpath)
    }

    async showDisabledTenancy(){
        console.log ("Tenant Configuration Page - Click on the Show disabled tenant option")
        await this.actionSupport.clickOnElement(this.show_disTenancy_option)
    }

    async enableTenancy(){
        console.log("Tenant Configuration Page - Click on the enable option")
        await this.actionSupport.clickOnElement(this.enable_tenancy_option)
    }

    async disableTenancy(){
        console.log("Tenant Configuration Page - Click on the disable option")
        await this.actionSupport.clickOnElement(this.disable_tenancy_option)
    }

    async verifyDisabledTenancy(tenantid:string){
        console.log('Tenant Configuration Page: The tenancy ' + tenantid + ' is disabled' )
        let xpath = "//div[@col-id='tenantid' and contains (text(),'"+tenantid+"')]"
        let el= browser.element(by.xpath(xpath))
        await expect (el.getCssValue('color')).toBe('rgba(51, 62, 207, 1)')
    }

    async verifyEnabledTenancy(tenantid:string){
        console.log ('Tenany Configuration Page: The tenancy ' + tenantid +' is enabled' )
        let xpath = "//div[@col-id='tenantid' and contains (text(),'"+tenantid+"')]"
        let el= browser.element(by.xpath(xpath))
        await expect (el.getCssValue('background-color')).toBe('rgba(0, 0, 0, 0)')
    }

}
