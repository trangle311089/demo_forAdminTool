import { ProtractorBrowser, ProtractorExpectedConditions, browser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport";
import { async } from "q";

export class HandlePopup{
    actionSupport:ActionSupport
    saveAndClose_btn:string
    cancel_btn:string
    saveAndAddAnother_btn:string
    upload_btn:string
    okOnUploadPopup:string

    constructor(browser:ProtractorBrowser){
        this.actionSupport = new ActionSupport(browser)      
        this.saveAndClose_btn = "//button [@ng-click='saveAndClose()']"
        this.cancel_btn = '//button[@class="button action-btn btn-cancel" and contains (text(), "CANCEL")]'     
        this.saveAndAddAnother_btn = "//button[@ng-click='saveOnly()']"
        this.upload_btn = "//button[@ng-click='beforeUpload()']"
        this.okOnUploadPopup = "//button[@ng-if='isComplete']"
    }

    // Click on the button on popup. Include these button's names: OK, yes, delete, logout
    async clickYesDel(buttonName:string){
        var xpath = "//button[@class='button action-btn btn-save ng-binding' and contains (text(), '"+buttonName+"')]"
        console.log ("Handle POPUP - Click on OK/ YES/ DEL/ LOGOUT button on the popup")
        await this.actionSupport.clickOnElement(xpath)
    }

    // Click on the button on popup. Include these button's names: cancel, no
    async clickNoCancel(buttonName:string){
        var xpath = "//button[@class='button action-btn btn-cancel ng-binding' and contains (text(),'"+buttonName+"')]"
        console.log ("Handle POPUP - Click on CANCEL/ NO button on the popup")
        await this.actionSupport.clickOnElement(xpath)
    }

    // Click on the button on popup. Include these button's names: ok
    async clickOK(buttonName:string){
        var xpath = "//button[@class='action-btn button btn-save' and contains (text(), '"+buttonName+"')]"
        console.log ("Handle POPUP - Click on OK button on the popup")
        await this.actionSupport.clickOnElement(xpath)
    }
    
    // Click on SAVE button on the popup
    async clickSave(){
        console.log ("Handle POPUP - Click on the SAVE button on the popup")
        await this.actionSupport.clickOnElement(this.saveAndClose_btn)
    }
    
    // Click on CANCEL button on the popup
    async clickCancel(){
        console.log ("Handle POPUP - Click on the CANCEL button on the popup")
        await this.actionSupport.clickOnElement(this.cancel_btn)
    }

    // Click SAVE & ADD ANOTHER button on the popup
    async clickSaveAndAddAnother(){
        console.log("Handle POPUP - Click on the SAVE & ADD ANOTHER button on the popup")
        await this.actionSupport.clickOnElement(this.saveAndAddAnother_btn)
    }

    // Click UPLOAD button on the popup
    async clickUpload(){
        console.log ("Handle POPUP - Click on the UPLOAD button on the popup")
        await this.actionSupport.clickOnElement(this.upload_btn)
    }

    //Click OK button on UPLOAD popup
    async clickOK_UPLOAD(){
        console.log("Handle POPUP: Click on the OK button on the UPLOAD popup")
        await this.actionSupport.clickOnElement(this.okOnUploadPopup)
    }
    
}