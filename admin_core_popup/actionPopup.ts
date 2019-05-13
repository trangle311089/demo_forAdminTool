import { ProtractorBrowser, ProtractorExpectedConditions, browser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport/actionSupport";
import { async } from "q";


export class ActionPopup{
    curBrowser:ProtractorBrowser
    actionSupport:ActionSupport

    add_popup:string
    saveAndClose_btn:string
    cancel_btn:string

    alert_popup:string
    okClose_btn:string

    info_popup:string
    info_ok_btn:string

    attention_popup:string
    attention_del_btn:string
    attention_cancel_btn:string
    attention_yes_btn:string
    attention_no_btn:string
    attention_remove_btn:string
    attention_remove_btn1:string

    copy_popup:string


    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)

        this.add_popup = "//span[@class='dialog-title ng-binding' and contains (text(),'add')]"
        this.saveAndClose_btn = "//button [@ng-click='saveAndClose()']"
        this.cancel_btn = '//button[@class="button action-btn btn-cancel" and contains (text(), "CANCEL")]'

        this.alert_popup = "//span[@class='dialog-title ng-binding' and contains (text(),'ALERT')]"
        this.okClose_btn = "//button[@class='button action-btn btn-save ng-binding' and contains (text(), 'OK')]"

        this.info_popup = "//span[@class='dialog-title ng-binding' and contains (text(),'INFORMATION')]"
        this.info_ok_btn = "//button[@class='action-btn button btn-save' and contains (text(), 'ok')]"
       
        this.attention_popup = "//span[@class='dialog-title ng-binding' and contains (text(),'ATTENTION')]"
        this.attention_del_btn = "//button[@class='button action-btn btn-save ng-binding' and contains (text(), 'delete')]"
        this.attention_cancel_btn = "//button[@class='button action-btn btn-cancel ng-binding' and contains (text(),'cancel')]"
        this.attention_yes_btn = "//button[@class='button action-btn btn-save ng-binding' and contains (text(),'yes')]"
        this.attention_no_btn = "//button[@class='button action-btn btn-cancel ng-binding' and contains (text(),'no')]"
        this.attention_remove_btn = "//button[@class='button action-btn btn-save ng-binding' and contains (text(),'Remove')]"
        this.attention_remove_btn1 = "//button[@class='button action-btn btn-save ng-binding' and contains (text(),'remove')]"
        

        this.copy_popup = "//span[@class='dialog-title ng-binding' and contains (text(),'copy')]"

    }

    // Showing the popup in Admin Tool
    async showAddPop(){
        console.log("Show the ADD popup")
        this.actionSupport.presentElement(this.add_popup)
    }

    async showAlertPop(){
        console.log ("Show the ALERT popup")
        this.actionSupport.presentElement(this.alert_popup)
    }

    async showInfoPop(){
        console.log ("Show the INFORMATION popup")
       this.actionSupport.presentElement(this.info_popup)
    }

    async showAttentionPop(){
        console.log ("Show the ATTENTION popup")
        this.actionSupport.presentElement(this.attention_popup)
    }

    async showCopyPop(){
        console.log("Show the COPY popup")
        this.actionSupport.presentElement(this.copy_popup)
    }

    // Action buttons on the popup
    async clickSaveAndClose_btn(){
        console.log ("Save the data changes and close the popup")
        this.actionSupport.clickOnElement(this.saveAndClose_btn)
    }

    async clickCancel_btn(){
        console.log ("Cancel the data changes and close the popup")
        this.actionSupport.clickOnElement(this.cancel_btn)
    }

    async clickOkClose_btn(){
        console.log ("Click on OK button to close the popup")
        this.actionSupport.clickOnElement(this.okClose_btn)
    }

    async clickAttentionDel_btn(){
        console.log ("Click on DELETE button to delete the entry and close popup")
        this.actionSupport.clickOnElement(this.attention_del_btn)
    }

    async clickAttenctionCancel_btn(){
        console.log("Click on CANCEL button to close the popup")
        this.actionSupport.clickOnElement(this.attention_cancel_btn)
    }

    async clickAttentionYes_btn(){
        console.log("Click on Yes button to save the changes and close the popup")
        this.actionSupport.clickOnElement(this.attention_yes_btn)
    }

    async clickAttentionNo_btn(){
        console.log("Click on No button to cancel the changes and close the popup")
        this.actionSupport.clickOnElement(this.attention_no_btn)
    }

    async clickAttentionRem_btn(){
        console.log ("Click on Remove button to remove the active user and close the popup")
        this.actionSupport.clickOnElement(this.attention_remove_btn)

    }

    async clickAttentionRem_btn1(){
        console.log ("Click on Remove button to confirm remove the active user and close the popup")
        this.actionSupport.clickOnElement(this.attention_remove_btn1)

    }

    async clickInfOK_btn(){
        console.log("Click on OK button to closed the popup")
        this.actionSupport.clickOnElement(this.info_ok_btn)
    }



    
    


}