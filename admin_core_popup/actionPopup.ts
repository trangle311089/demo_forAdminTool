import { ProtractorBrowser, ProtractorExpectedConditions, browser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport/actionSupport";
import { async } from "q";


export class ActionPopup{
    curBrowser:ProtractorBrowser
    actionSupport:ActionSupport

    add_popup:string
    saveAndClose_btn:string
    cancel_btn:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)

        this.add_popup = "//span[@class='dialog-title ng-binding' and contains (text(),'add')]"
        this.saveAndClose_btn = "//button [@ng-click='saveAndClose()']"
        this.cancel_btn = "//button[@ng-click='close('No')' and contains (text(),'CANCEL')]"

    }

    async showAddPop(){
        console.log("Show the ADD popup")
        await this.actionSupport.presentElement(this.add_popup)
    }

    async clickSaveAndClose_btn(){
        console.log ("Save the data changes and close the popup")
        await this.actionSupport.clickOnElement(this.saveAndClose_btn)
    }

    async clickCancel_btn(){
        console.log ("Cancel the data changes and close the popup")
        await this.actionSupport.clickOnElement(this.cancel_btn)
    }
    


}