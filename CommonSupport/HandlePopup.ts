import { ProtractorBrowser, ProtractorExpectedConditions, browser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport";
import { async } from "q";

export class HandlePopup{
    curBrowser:ProtractorBrowser
    actionSupport:ActionSupport
    
    saveAndClose_btn:string
    cancel_btn:string
    saveAndAddAnother_btn:string
    upload_btn:string
    okOnUploadPopup:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)
      
        this.saveAndClose_btn = "//button [@ng-click='saveAndClose()']"
        this.cancel_btn = '//button[@class="button action-btn btn-cancel" and contains (text(), "CANCEL")]'     
        this.saveAndAddAnother_btn = "//button[@ng-click='saveOnly()']"
        this.upload_btn = "//button[@ng-click='beforeUpload()']"
        this.okOnUploadPopup = "//button[@ng-if='isComplete']"
    }

    // Show the popup, include these popup's names: add, ALERT, INFORMATION, ATTENTION, copy
    async showPopup(popupName:string){
        console.log ("Show POP-UP: The pop-up "+popupName+" is displayed")
        var xpath = "//span[@class='dialog-title ng-binding' and contains (text(),'"+popupName+"')]"
        await this.actionSupport.presentElement(xpath)
    }

    // Click on the button on popup. Include these button's names: OK, yes, delete, logout
    async clickYesDel(buttonName:string){
        var xpath = "//button[@class='button action-btn btn-save ng-binding' and contains (text(), '"+buttonName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    // Click on the button on popup. Include these button's names: cancel, no
    async clickNoCancel(buttonName:string){
        var xpath = "//button[@class='button action-btn btn-cancel ng-binding' and contains (text(),'"+buttonName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    // Click on the button on popup. Include these button's names: ok
    async clickOK(buttonName:string){
        console.log ("POPUP: Click on the OK button")
        var xpath = "//button[@class='action-btn button btn-save' and contains (text(), '"+buttonName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }
    
    // Click on SAVE button on the popup
    async clickSave(){
        console.log ("POPUP: Click on the SAVE button")
        await this.actionSupport.clickOnElement(this.saveAndClose_btn)
    }
    
    // Click on CANCEL button on the popup
    async clickCancel(){
        console.log ("POPUP: Click on the CANCEL button")
        await this.actionSupport.clickOnElement(this.cancel_btn)
    }

    // Click SAVE & ADD ANOTHER button on the popup
    async clickSaveAndAddAnother(){
        console.log("POPUP: Click on the SAVE & ADD ANOTHER button")
        await this.actionSupport.clickOnElement(this.saveAndAddAnother_btn)
    }

    // Click UPLOAD button on the popup
    async clickUpload(){
        console.log ("POPUP: Click on the UPLOAD button")
        await this.actionSupport.clickOnElement(this.upload_btn)
    }

    //Click OK button on UPLOAD popup
    async clickOK_UPLOAD(){
        console.log("UPLOAD POPUP: Click on the OK button")
        await this.actionSupport.clickOnElement(this.okOnUploadPopup)
    }
    
}