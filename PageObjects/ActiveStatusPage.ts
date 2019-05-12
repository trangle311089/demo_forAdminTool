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
        this.active_user = "//div[@tabindex='-1' and @col-id='userDisplayName']"
    }

    async show_Tier1VerActiveStt(){
        console.log ("Show the Tier 1 vertical menu Active Status")
        this.actionSupport.presentElement(this.tier1ver_actStatus)
    }
    async click_Tier1VerActiveStt(){
        console.log ("Click on the Tier 1 vertical menu Active Status")
        this.actionSupport.clickOnElement(this.tier1ver_actStatus)
    }

    async selectActiveUser(){
        console.log ("Select the active user on the grid")
        this.actionSupport.clickOnElement(this.active_user)
    }

    async showActiveUser(){
        console.log ("Show the active user on grid ")
        this.actionSupport.presentElement(this.active_user)
    }

    
}