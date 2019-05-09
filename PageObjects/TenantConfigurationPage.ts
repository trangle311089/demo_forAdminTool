import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport/actionSupport";

export class TenantConfigurationPage {
    curBrowser:ProtractorBrowser
    actionSupport:ActionSupport

    tnt_id:string
    tnt_name:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(browser)
        
        this.tnt_id = "//input[@id='txtTenantId']"
        this.tnt_name = "//input[@id='txtTenantName']"
    }

    async createNewTenancy(tenantid:string, tenantName:string){
        console.log("Input Tenant id: " + tenantid)
        await this.actionSupport.sendKeyOnElement(this.tnt_id, tenantid)
        console.log("Input Tenant name: "+ tenantName)
        await this.actionSupport.sendKeyOnElement(this.tnt_name,tenantName)
    }
}