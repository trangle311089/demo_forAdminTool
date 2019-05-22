import { ProtractorBrowser } from "protractor";
import { Tier1Menu } from "./tier1Menu";

export class Tier1UsersAndTeams{
    curBrowser: ProtractorBrowser
    tier1Menu: Tier1Menu

    constructor(browser:any){
        this.curBrowser = browser
        this.tier1Menu = new Tier1Menu (this.curBrowser)
    }

    async  navigateToUsersAndTeams(){
        await this.tier1Menu.presenceOfTier1Ver('Users and Teams')
        await this.tier1Menu.navigateToTier1Ver('Users and Teams')
    }

    async navigateToGroupsList(){
        await this.tier1Menu.presenceOfTier1Hor('Groups')
        await this.tier1Menu.navigateToTier1Hor('Groups')
    }
}