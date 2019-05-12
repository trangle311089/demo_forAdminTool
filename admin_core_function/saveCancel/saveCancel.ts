import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../core_function/actionSupport/actionSupport";

export class SaveCancel{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport

    save_btn: string
    cancel_btn:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)

        this.save_btn = "//button[@ng-click='saveAction()']"
        this.cancel_btn = "//button[@ng-click='cancelAction()']"
    }

    async clickSave_btn(){
        console.log ("Click on the SAVE button on the title bar")
        await this.actionSupport.clickOnElement(this.save_btn)
    }

    async clickCancel_btn(){
        console.log ("Click on the CANCEL button on the title bar")
        await this.actionSupport.clickOnElement(this.cancel_btn)
    }
}