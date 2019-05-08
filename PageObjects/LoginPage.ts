import { by, element, ProtractorBrowser } from 'protractor';
import { ActionSupport } from '../core_function/actionSupport/actionSupport';

export class LoginPage {
    // define the type for signIn_btn. Define it as string type because we will get xpath of this button.
    signIn_btn:string
    
    //define the curBrwoser by using ProtractorBrowser library.
    curBrowser:ProtractorBrowser 

    // define action support which has been defined in core function/actionSupport
    actionSupport:ActionSupport

    constructor(brower:any) {
        // log the action that will occur
        console.log("Initialize all elements on Login Page")
       
        this.curBrowser = brower;

        // create instance
        this.actionSupport = new ActionSupport(this.curBrowser)

        // define xpath for sign in button
        this.signIn_btn = "//button[@ng-click='login()' and contains (text(), 'Sign in')]"
    }

    // define the login action. It can be used by other test scripts
    async login() {
        console.log("Click on the SIGN IN button on the Login Page")
        await this.actionSupport.clickOnElement(this.signIn_btn)
    }
}