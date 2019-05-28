import { browser, by, element, ProtractorBrowser } from 'protractor';
import { ActionSupport } from '../core_function/actionSupport/actionSupport';
import { TenantConfigurationPage } from './TenantConfigurationPage';
import { EditingControl } from '../admin_core_function/editingControl/editingControl';

export class LoginPage {
    signIn_btn:string
    audience_txt:string
    tenancy: TenantConfigurationPage
    editingControl: EditingControl

    curBrowser:ProtractorBrowser
    actionSupport:ActionSupport

    constructor(brower: any) {
        this.curBrowser = brower
        this.actionSupport = new ActionSupport(this.curBrowser)
        this.tenancy = new TenantConfigurationPage(this.curBrowser)
        this.editingControl = new EditingControl(this.curBrowser)

        // define xpath for sign in button
        this.signIn_btn = "//button[@ng-click='login()']"
        this.audience_txt = "//input[@id='audience']"

    }

    async login() {
        console.log("Click on the SIGN IN button on the Login Page")
        await this.actionSupport.clickOnElement(this.signIn_btn)
    }

    async inputAudience(audience:string){
        console.log("Input the PCP address to audience text field" + audience)
        await this.actionSupport.sendKeyOnElement(this.audience_txt, audience)
    }
}