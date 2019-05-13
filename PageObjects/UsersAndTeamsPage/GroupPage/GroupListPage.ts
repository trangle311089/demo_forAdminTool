import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { Tier1UsersAndTeams } from "../../../admin_core_menu/tier1_UsersAndTeams/tier1_UsersAndTeams";

export class GroupListPage{
    
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    tier1_UsersAndTeams: Tier1UsersAndTeams

    tier1_horGroups: string
    selectedGroup: string
    deletedGroup:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
        this.tier1_UsersAndTeams = new Tier1UsersAndTeams (this.curBrowser)

        this.tier1_horGroups = "//a[@class='ng-binding' and contains (text(), 'Groups')]"
        this.selectedGroup = "//span[contains(text(),'Automation Group')]"
        this.deletedGroup = "//span[contains(text(),'Updated_ Automation Group Name')]"
        
    }

    async showGroupsMenu(){
        console.log ("Check the visible of Tier 1 horizontal Groups menu")
        this.actionSupport.clickOnElement(this.tier1_horGroups)
    }

    async clickGroupsMenu(){
        console.log ("Click on the Tier 1 horizontal Groups menu")
        this.actionSupport.clickOnElement(this.tier1_horGroups)
    }
    
    async selectGroupEntry(){
        console.log ("Select one group in list")
        this.actionSupport.clickOnElement(this.selectedGroup)
    }

    async selectDeletedGroupEntry(){
        console.log ("Select one group for deleting")
        this.actionSupport.clickOnElement(this.deletedGroup)
    }
}