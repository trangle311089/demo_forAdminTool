import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../core_function/actionSupport";
import { Tier1Menu } from "./tier1Menu";

export class Tier1GreetingsAndPrompts{
    curBrowser: ProtractorBrowser
    actionSupport:ActionSupport
    tier1Menu:Tier1Menu

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
        this.tier1Menu = new Tier1Menu (this.curBrowser)
    }

    async navigateToGreetingsPrompts(){
        await this.tier1Menu.presenceOfTier1Ver('greetings & prompts')
        await this.tier1Menu.navigateToTier1Ver('greetings & prompts')
    }

    async navigateToUserRecordingGreetings(){
        await this.tier1Menu.presenceOfTier1Hor('User Recorded Greetings')
        await this.tier1Menu.navigateToTier1Hor('User Recorded Greetings')
    }
}