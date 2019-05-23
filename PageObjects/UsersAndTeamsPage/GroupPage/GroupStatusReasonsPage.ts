import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { Tier1UsersAndTeams } from "../../../admin_core_menu/tier1Menu/tier1UsersAndTeams";
import { Tier1Menu } from "../../../admin_core_menu/tier1Menu/tier1Menu";
import { GroupListPage } from "./GroupListPage";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";

export class GroupStatusReasonsPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    tier1UsersAndTeams: Tier1UsersAndTeams
    tier1Menu: Tier1Menu
    groupList: GroupListPage
    editingControl: EditingControl

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport(this.curBrowser)

        this.tier1UsersAndTeams = new Tier1UsersAndTeams(this.curBrowser)
        this.tier1Menu = new Tier1Menu (this.curBrowser)
        this.groupList = new GroupListPage(this.curBrowser)
        this.editingControl = new EditingControl (this.curBrowser)
    }

    async navigateToGroup_BreakReasons(){
        await this.tier1UsersAndTeams.navigateToUsersAndTeams()
        await this.tier1UsersAndTeams.navigateToGroupsList()
        await this.groupList.selectGroup('Default')
        await this.editingControl.clickEdit()
        await this.tier1Menu.presenceOfTier1Ver('Status Reasons')
        await this.tier1Menu.navigateToTier1Ver('Status Reasons')
        await this.tier1Menu.presenceOfTier1Hor('Break Reasons')
        await this.tier1Menu.navigateToTier1Hor('Break Reasons')
    }
    async inputData_StatusReasons(fieldName:string, data:string){
        var xpath = "//input[@id='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath, data)
    }

    async selectStt(sttName:string){
        var xpath = "//span[contains (text(),'"+sttName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }
}