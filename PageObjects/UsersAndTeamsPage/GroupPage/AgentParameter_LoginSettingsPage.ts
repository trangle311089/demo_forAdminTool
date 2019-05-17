import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { TitleBarButtons } from "../../../admin_core_function/titleBarButtons/titleBarButtons";

import { async } from "q";

export class GroupLoginSettingPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    titleBar_btn: TitleBarButtons

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)
        this.titleBar_btn = new TitleBarButtons (this.curBrowser)
    }

    selectRadio_btn(btnName:string){
        var xpath = "//input[@id='"+btnName+"']"
        this.actionSupport.clickOnElement(xpath)
    }

    selectCheckbox_btn(btnName:string){
        var xpath = "//label[@for='"+btnName+"']" 
        this.actionSupport.clickOnElement(xpath)
    }

    inputText_field(fieldName:string, data:string){
        var xpath = "//input[@name='"+fieldName+"']"
        this.actionSupport.sendKeyOnElement(xpath,data)
    }


  





}