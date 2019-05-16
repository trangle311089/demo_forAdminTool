import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { Tier1UsersAndTeams } from "../../../admin_core_menu/tier1_UsersAndTeams/tier1_UsersAndTeams";

export class GroupListPage{
    
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    tier1_UsersAndTeams: Tier1UsersAndTeams

    tier1_horGroups: string
      

    constructor(browser:ProtractorBrowser){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
        this.tier1_UsersAndTeams = new Tier1UsersAndTeams (this.curBrowser)

        this.tier1_horGroups = "//a[@class='ng-binding' and contains (text(), 'Groups')]"
               
    }

    async showGroupsMenu(){
        console.log ("Check the visible of Tier 1 horizontal Groups menu")
        await this.actionSupport.clickOnElement(this.tier1_horGroups)
    }

    async clickGroupsMenu(){
        console.log ("Click on the Tier 1 horizontal Groups menu")
        await this.actionSupport.clickOnElement(this.tier1_horGroups)
    }

    async selectGroup(name:string){
        var xpath ="//span[contains(text(),'"+name+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }
}