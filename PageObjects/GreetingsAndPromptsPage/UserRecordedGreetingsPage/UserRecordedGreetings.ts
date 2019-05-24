import { ProtractorBrowser } from "protractor";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { Tier1GreetingsAndPrompts } from "../../../admin_core_menu/tier1Menu/tier1GreetingsAndPrompts";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";

export class UserRecordedGreetings{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    editingControl: EditingControl
    tier1Greetings: Tier1GreetingsAndPrompts

    constructor (browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
        this.tier1Greetings = new Tier1GreetingsAndPrompts (this.curBrowser)
        this.editingControl = new EditingControl (this.curBrowser)
    }

    async selectUser(userName: string){
        var xpath = "//div[@col-id='displayName' and span[contains(text(),'"+userName+"')]]"
        await this.actionSupport.clickOnElement(xpath)
        await this.editingControl.clickEdit()
    }
}