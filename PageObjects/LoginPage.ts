import { by, element, ProtractorBrowser } from 'protractor';
import { ActionSupport } from '../core_function/actionSupport/actionSupport';

export class LoginPage {
    signIn_btn:string
    curBrowser:ProtractorBrowser
    actionSupport:ActionSupport

    constructor(brower: any) {
        console.log("Initialize all elements on Login Page")
        this.curBrowser = brower;
        this.actionSupport = new ActionSupport(this.curBrowser)

        // define xpath for sign in button
        this.signIn_btn = "//button[@ng-click='login()']"
    }

    async login() {
        // var signIn = this.curBrowser.element(by.xpath(this.signIn_btn))
        console.log("Click on the SIGN IN button on the Login Page")
        await this.actionSupport.clickOnElement(this.signIn_btn)
    }
}