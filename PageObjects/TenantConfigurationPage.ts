import { ProtractorBrowser, by } from "protractor";
import { ActionSupport } from "../core_function/actionSupport";

export class TenantConfigurationPage {
    curBrowser:ProtractorBrowser
    actionSupport:ActionSupport
    tnt_id:string
    tnt_name:string
    show_disTenancy_option:string
   
    enable_tenancy_option:string
    disable_tenancy_option:string
    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(browser)
        
        this.tnt_id = "//input[@id='txtTenantId']"
        this.tnt_name = "//input[@id='txtTenantName']"            
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

    async verifyDisplayedTenancy(tenancyName:string){
        console.log('Tenant Configuration Page: The tenancy ' + tenancyName + ' is displayed in grid' )
        let xpath = "//div[@col-id='tenantid' and contains (text(),'"+tenancyName+"')]"
        let el= this.curBrowser.element(by.xpath(xpath))
        await expect(el.isDisplayed()).toBe(true)  
    }

    async verifyDisabledTenancy(tenancyName:string){
        console.log('Tenant Configuration Page: The tenancy ' + tenancyName + ' is disabled' )
        let xpath = "//div[@col-id='tenantid' and contains (text(),'"+tenancyName+"')]"
        let el= this.curBrowser.element(by.xpath(xpath))
        await expect (el.getCssValue('color')).toBe('rgba(51, 62, 207, 1)')
    }

    async verifyEnabledTenancy(tenancyName:string){
        console.log ('Tenany Configuration Page: The tenancy ' + tenancyName +' is enabled' )
        let xpath = "//div[@col-id='tenantid' and contains (text(),'"+tenancyName+"')]"
        let el= this.curBrowser.element(by.xpath(xpath))
        await expect (el.getCssValue('background-color')).toBe('rgba(51, 51, 51, 1)')
    }
}
