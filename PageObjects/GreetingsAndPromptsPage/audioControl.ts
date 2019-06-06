import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../core_function/actionSupport";
import { protractor } from "protractor/built/ptor";

export class AudioControl{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
    }

    async audioControl(btnName:string){
        var xpath = "//button[@id='"+btnName+"']"
        await this.actionSupport.clickOnElement(xpath)
    }

    async audioTracking(seekName:string, data:string){
        var xpath = "//input[@id='"+seekName+"']"
        await this.actionSupport.clickOnElement(xpath)
        await this.actionSupport.sendKeyOnElement(xpath,data)
        await this.curBrowser.actions().sendKeys(protractor.Key.ENTER).perform()
    }

    async audioVolumeControl(btnName:string){
        var xpath = "//button[@id='"+btnName+"']"
        await this.actionSupport.clickOnElement(xpath)
    } 
}