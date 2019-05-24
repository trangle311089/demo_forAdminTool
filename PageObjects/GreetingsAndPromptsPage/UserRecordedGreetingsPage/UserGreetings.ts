import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { Tier1GreetingsAndPrompts } from "../../../admin_core_menu/tier1Menu/tier1GreetingsAndPrompts";
import { Tier1Menu } from "../../../admin_core_menu/tier1Menu/tier1Menu";
import { UserRecordedGreetings } from "./UserRecordedGreetings";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";

export class UserGreetings{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    tier1Greetings : Tier1GreetingsAndPrompts
    tier1Menu: Tier1Menu
    userRecorded: UserRecordedGreetings
    editingControl: EditingControl

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
        this.tier1Greetings = new Tier1GreetingsAndPrompts (this.curBrowser)
        this.tier1Menu = new Tier1Menu (this.curBrowser)
        this.userRecorded = new UserRecordedGreetings (this.curBrowser)
        this.editingControl = new EditingControl (this.curBrowser)
    }

    async navigateToAgentGreetings(){
        await this.tier1Greetings.navigateToGreetingsPrompts()
        await this.tier1Greetings.navigateToUserRecordingGreetings()
        await this.userRecorded.selectUser('userSkill')
        await this.editingControl.clickEdit()
        await this.tier1Menu.presenceOfTier1Ver('Agent Greetings')
        await this.tier1Menu.navigateToTier1Ver('Agent Greetings')
        await this.tier1Menu.presenceOfTier1Hor('General')
        await this.tier1Menu.navigateToTier1Hor('General')
    }

    async navigateToVoiceMailGreetings(){
        await this.tier1Greetings.navigateToGreetingsPrompts()
        await this.tier1Greetings.navigateToUserRecordingGreetings()
        await this.userRecorded.selectUser('userSkill')
        await this.editingControl.clickEdit()
        await this.tier1Menu.presenceOfTier1Ver('Voice Mail Greetings')
        await this.tier1Menu.navigateToTier1Ver('Voice Mail Greetings')
        await this.tier1Menu.presenceOfTier1Hor('General')
        await this.tier1Menu.navigateToTier1Hor('General')
    }
}