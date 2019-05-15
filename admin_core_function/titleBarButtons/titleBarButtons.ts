import { ProtractorBrowser, browser } from "protractor";
import { ActionSupport } from "../../core_function/actionSupport/actionSupport";

export class TitleBarButtons{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport

    save_btn: string
    cancel_btn:string
    saving_txt:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)

        this.save_btn = "//button[@ng-click='saveAction()' and contains (text(), 'Save')]"
        this.cancel_btn = "//button[@ng-click='cancelAction()']"
        this.saving_txt = "//span[@class='saving-text' and contains (text(), 'All changes saved')]"
    }

    clickSave_btn(){
        console.log ("Click on the SAVE button on the title bar")
        this.actionSupport.clickOnElement(this.save_btn)
    }

    clickCancel_btn(){
        console.log ("Click on the CANCEL button on the title bar")
        this.actionSupport.clickOnElement(this.cancel_btn)
    }

    waitForSavingTxt(){
        console.log("display the text All changes saved when saving successfully")
        this.actionSupport.presentElement(this.saving_txt)
    }


}