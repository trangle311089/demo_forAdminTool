import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";
import { Tier1UsersAndTeams } from "../../../admin_core_menu/tier1Menu/tier1UsersAndTeams";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";
import { Tier1Menu } from "../../../admin_core_menu/tier1Menu/tier1Menu";
import { GroupListPage } from "./GroupListPage";

export class GroupAgentParameters{
    curBrowser : ProtractorBrowser
    actionSupport: ActionSupport
    tier1UsersAndTeams: Tier1UsersAndTeams
    tier1Menu : Tier1Menu
    groupList: GroupListPage
    editingControl: EditingControl

    constructor (browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
        this.tier1UsersAndTeams = new Tier1UsersAndTeams (this.curBrowser)
        this.editingControl = new EditingControl (this.curBrowser)
        this.tier1Menu = new Tier1Menu (this.curBrowser)
        this.groupList = new GroupListPage (this.curBrowser)
    }

    async navigateToGroupLoginSettings(){
        await this.tier1UsersAndTeams.navigateToUsersAndTeams()
        await this.tier1UsersAndTeams.navigateToGroupsList()
        await this.groupList.selectGroup('Default')
        await this.editingControl.clickEdit()
        await this.tier1Menu.presenceOfTier1Ver('Agent Parameters')
        await this.tier1Menu.navigateToTier1Ver('Agent Parameters')
        await this.tier1Menu.presenceOfTier1Hor('Login Settings')
        await this.tier1Menu.navigateToTier1Hor('Login Settings')
    }

    async navigateToGroupContactPresentation(){
        await this.tier1UsersAndTeams.navigateToUsersAndTeams()
        await this.tier1UsersAndTeams.navigateToGroupsList()
        await this.groupList.selectGroup('Default')
        await this.editingControl.clickEdit()
        await this.tier1Menu.presenceOfTier1Ver('Agent Parameters')
        await this.tier1Menu.navigateToTier1Ver('Agent Parameters')
        await this.tier1Menu.presenceOfTier1Hor('Contact Presentation')
        await this.tier1Menu.navigateToTier1Hor('Contact Presentation')
    }

    async navigateToGroupAgentPermission(){
        await this.tier1UsersAndTeams.navigateToUsersAndTeams()
        await this.tier1UsersAndTeams.navigateToGroupsList()
        await this.groupList.selectGroup('Default')
        await this.editingControl.clickEdit()
        await this.tier1Menu.presenceOfTier1Ver('Agent Parameters')
        await this.tier1Menu.navigateToTier1Ver('Agent Parameters')
        await this.tier1Menu.presenceOfTier1Hor('Agent Permissions')
        await this.tier1Menu.navigateToTier1Hor('Agent Permissions')
    }

    // define element on Login Settings page
    async selectRadio_loginPage(btnName:string){
        var xpath = "//input[@id='"+btnName+"']"
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectCheckbox_loginPage(btnName:string){
        var xpath = "//label[@for='"+btnName+"']" 
        await this.actionSupport.clickOnElement(xpath)
    }

    async inputData_loginPage(fieldName:string, data:string){
        var xpath = "//input[@name='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath,data)
    }

    // define elements on Contact Presentation page
    async selectCheckbox_contactPre(btnName:string){
        var xpath = "//input[@type='checkbox' and @ng-model='"+btnName+"']"
        await this.actionSupport.selectCheckbox(xpath)
    }

    async inputData_contactPre(fieldName:string, data:string){
        var xpath = "//input[@id='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath,data)
    }

    // define element on Agent Permission page
    async selectCheckbox_agentPer(checkboxName:string){
        var xpath = "//input[@type='checkbox' and @ng-model='"+checkboxName+"']"
        await this.actionSupport.selectCheckbox(xpath)
    }
}