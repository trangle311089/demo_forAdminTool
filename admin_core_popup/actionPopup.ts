import { ProtractorBrowser, ProtractorExpectedConditions, browser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport/actionSupport";
import { async } from "q";

export class ActionPopup{
    curBrowser:ProtractorBrowser
    actionSupport:ActionSupport
    
    saveAndClose_btn:string
    cancel_btn:string
    saveAndAddAnother_btn:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)
      
        this.saveAndClose_btn = "//button [@ng-click='saveAndClose()']"
        this.cancel_btn = '//button[@class="button action-btn btn-cancel" and contains (text(), "CANCEL")]'     
        this.saveAndAddAnother_btn = "//button[@ng-click='saveOnly()']"
    }

    // Show the popup, include these popup's names: add, ALERT, INFORMATION, ATTENTION, copy
    async showPopup(popupName:string){
        var xpath = "//span[@class='dialog-title ng-binding' and contains (text(),'"+popupName+"')]"
        await this.actionSupport.presentElement(xpath)
    }

    // Click on the button on popup. Include these button's names: OK, yes, delete, Remove, remove
    async clickPopup_btn(buttonName:string){
        var xpath = "//button[@class='button action-btn btn-save ng-binding' and contains (text(), '"+buttonName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    // Click on the button on popup. Include these button's names: cancel, no
    async clickPopup_Closebtn(buttonName:string){
        var xpath = "//button[@class='button action-btn btn-cancel ng-binding' and contains (text(),'"+buttonName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    // Click on the button on popup. Include these button's names: ok
    async clickPopup_OKbtn(buttonName:string){
        var xpath = "//button[@class='action-btn button btn-save' and contains (text(), '"+buttonName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }
    
    // Action buttons on the popup - SAVE button on the popup
    async clickSaveAndClose_btn(){
        console.log ("Save the data changes and close the popup")
        await this.actionSupport.clickOnElement(this.saveAndClose_btn)
    }
    
    // Action buttons on the popup - CANCEL button on the popup
    async clickCancel_btn(){
        console.log ("Cancel the data changes and close the popup")
        await this.actionSupport.clickOnElement(this.cancel_btn)
    }

    // Action buttons on the popup - SAVE & ADD ANOTHER button 
    async clickSaveAndAddAnother_btn(){
        console.log("Save data and add another")
        await this.actionSupport.clickOnElement(this.saveAndAddAnother_btn)

    }
    
}