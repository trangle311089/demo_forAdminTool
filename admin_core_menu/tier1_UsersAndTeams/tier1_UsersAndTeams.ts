import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../core_function/actionSupport/actionSupport";

export class Tier1UsersAndTeams{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport

    tier1_verUsersAndTeams:string
    tier1_horUsers:string
    tier1_horTeams:string
    // tier1_horGroups:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)

        this.tier1_verUsersAndTeams = "//a[@class='verical-menu-item ng-binding' and contains (text(),'Users and Teams')]"
        this.tier1_horUsers = "//a[@class='ng-binding' and contains (text(), 'Users')]"
        this.tier1_horTeams = "//a[@class='ng-binding' and contains (text(), 'Teams')]"
        // this.tier1_horGroups = "//a[@class='ng-binding' and contains (text(), 'Groups')]"
    }

    async showUsersAndTeamsMenu(){
        console.log ("Check the visible of Tier 1 vertical Users and Teams menu")
        this.actionSupport.presentElement(this.tier1_verUsersAndTeams)
    }

    async clickUsersAndTeamsMenu(){
        console.log ("Click on the Tier 1 vertical Users and Teams menu")
        this.actionSupport.clickOnElement(this.tier1_verUsersAndTeams)
    }

    async showUsersMenu(){
        console.log ("Check the visible of Tier 1 horizontal Users menu")
        this.actionSupport.presentElement(this.tier1_horUsers)
    }

    async clickUsersMenu(){
        console.log ("Click on the Tier 1 horizontal Users menu")
        this.actionSupport.clickOnElement(this.tier1_horUsers)
    }

    async showTeamsMenu(){
        console.log ("Check the visible of Tier 1 horizontal Teams menu")
        this.actionSupport.presentElement(this.tier1_horTeams)
    }

    async clickTeamsMenu(){
        console.log ("Click on the Tier 1 horizontal Teams menu")
        this.actionSupport.clickOnElement(this.tier1_horTeams)
    }

    // async showGroupsMenu(){
    //     console.log ("Check the visible of Tier 1 horizontal Groups menu")
    //     this.actionSupport.clickOnElement(this.tier1_horGroups)
    // }

    // async clickGroupsMenu(){
    //     console.log ("Click on the Tier 1 horizontal Groups menu")
    //     this.actionSupport.clickOnElement(this.tier1_horGroups)
    // }
}