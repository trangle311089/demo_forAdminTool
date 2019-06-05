import { ProtractorBrowser, by } from "protractor";
import { ActionSupport } from "../core_function/actionSupport";

export class HandleMenu{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)
    }

    async presenceOfVerMenu(menuName:string){
        var xpath = "//a[@class='verical-menu-item ng-binding' and contains (text(),'"+menuName+"')]"
        await this.actionSupport.presentElement(xpath)
        // verify element is displayed in the UI
        let ele= this.curBrowser.element(by.xpath(xpath))
        await expect(ele.isDisplayed()).toBe(true)   
    }

    async navigateToVerMenu(menuName:string){
        var xpath = "//a[@class='verical-menu-item ng-binding' and contains (text(),'"+menuName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async presenceOfHorMenu(menuName:string){
        var xpath = "//a[@class='ng-binding' and contains (text(),'"+menuName+"')]"
        await this.actionSupport.presentElement(xpath)
        // verify element is displayed in the UI
        let ele= this.curBrowser.element(by.xpath(xpath))
        await expect(ele.isDisplayed()).toBe(true)  
    }

    async navigateToHorMenu(menuName:string){
        var xpath = "//a[@class='ng-binding' and contains (text(),'"+menuName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async navigateToTenantConfiguration(){
        await this.presenceOfVerMenu('Tenant Configuration')
        await this.navigateToVerMenu('Tenant Configuration')
    }
    

}