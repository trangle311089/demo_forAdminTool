import { browser, by, element, ProtractorBrowser } from 'protractor';
import { ActionSupport } from '../core_function/actionSupport';

export class LoginPage {
    actionSupport:ActionSupport    
    signIn_btn:string
    audience_txt:string   

    constructor(browser: ProtractorBrowser) {
        this.actionSupport = new ActionSupport(browser)
        this.signIn_btn = "//button[@ng-click='login()']"
        this.audience_txt = "//input[@id='audience']"
    }
     
    async login() {
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        console.log("LoginPage: Click on the SIGN IN button on the Login Page")
        await this.actionSupport.clickOnElement(this.signIn_btn)
    }

    async inputAudience(audience:string){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        console.log("LoginPage: Input the PCP address to audience text field" + audience)
        await this.actionSupport.sendKeyOnElement(this.audience_txt, audience)

        console.log("LoginPage: Click on the SIGN IN button on the Login Page")
        await this.actionSupport.clickOnElement(this.signIn_btn)
    }
}