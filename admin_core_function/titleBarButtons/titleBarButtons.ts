import { ProtractorBrowser, browser } from "protractor";
import { ActionSupport } from "../../core_function/actionSupport";

export class TitleBarButtons{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport

    saving_txt:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)

        this.saving_txt = "//span[@class='saving-text' and contains (text(), 'All changes saved')]"
    }

    async clickSaveCancel_btn(btnName:string){
        var xpath = "//button[@ng-click='saveAction()' and contains (text(), '"+btnName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async waitForSavingTxt(){
        console.log("display the text All changes saved when saving successfully")
        await this.actionSupport.presentElement(this.saving_txt)
    }


}