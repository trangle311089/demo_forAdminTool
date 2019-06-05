import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../core_function/actionSupport";
import { Tier1Menu } from "./tier1Menu";

export class Tier1ActiveStatus{
    curBrowser : ProtractorBrowser
    actionSuppot : ActionSupport
    tier1Menu: Tier1Menu

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSuppot = new ActionSupport (this.curBrowser)
        this.tier1Menu = new Tier1Menu (this.curBrowser)
    }

    async navigateToActiveStatus(){
        await this.tier1Menu.presenceOfTier1Ver('active status')
        await this.tier1Menu.navigateToTier1Ver('active status')
    }

    async navigateToUsersList(){
        await this.tier1Menu.presenceOfTier1Hor('Users')
        await this.tier1Menu.navigateToTier1Hor('Users')
    }
}