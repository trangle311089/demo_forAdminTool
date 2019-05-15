import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport/actionSupport";

export class ActiveStatusPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    
    tier1ver_actStatus:string
    active_user:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)

        this.tier1ver_actStatus = "//a[@class='verical-menu-item ng-binding' and contains (text(), 'active status')]"
        this.active_user = "//span[contains(text(),'Dung Tran')]"
    }

    async show_Tier1VerActiveStt(){
        console.log ("Check the presence of Tier 1 vertical Active Status menu ")
        await this.actionSupport.presentElement(this.tier1ver_actStatus)
    }
    async click_Tier1VerActiveStt(){
        console.log ("Click on the Tier 1 vertical menu Active Status")
        await this.actionSupport.clickOnElement(this.tier1ver_actStatus)
    }

    async selectActiveUser(){
        console.log ("Select the active user on the grid")
        await this.actionSupport.clickOnElement(this.active_user)
    }

    async showActiveUser(){
        console.log ("Show the active user on grid ")
        await this.actionSupport.presentElement(this.active_user)
    }

    getTextEmlement(name:string){
          return "//span[contains(text()='"+ name +"')]"
        }

}