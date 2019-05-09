import { by, element, ProtractorBrowser } from 'protractor';
import { ActionSupport } from '../core_function/actionSupport/actionSupport';

export class LoginPage {
    signIn_btn:string
    curBrowser:ProtractorBrowser
    actionSupport:ActionSupport

    constructor(brower: any) {
        this.curBrowser = brower;
        this.actionSupport = new ActionSupport(this.curBrowser)

        // define xpath for sign in button
        this.signIn_btn = "//button[@ng-click='login()']"
    }

    async login() {
        console.log("Click on the SIGN IN button on the Login Page")
        await this.actionSupport.clickOnElement(this.signIn_btn)
    }
}