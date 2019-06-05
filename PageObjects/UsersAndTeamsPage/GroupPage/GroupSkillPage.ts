import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";
import { Tier1Menu } from "../../../admin_core_menu/tier1Menu/tier1Menu";
import { Tier1UsersAndTeams } from "../../../admin_core_menu/tier1Menu/tier1UsersAndTeams";
import { GroupListPage } from "./GroupListPage";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";

export class GroupSkillPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    tier1Menu : Tier1Menu
    tier1UsersAndTeams: Tier1UsersAndTeams
    groupList: GroupListPage
    editingControl: EditingControl

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)

        this.tier1Menu = new Tier1Menu (this.curBrowser)
        this.tier1UsersAndTeams = new Tier1UsersAndTeams (this.curBrowser)
        this.groupList = new GroupListPage (this.curBrowser)
        this.editingControl = new EditingControl (this.curBrowser)
    }
    async navigateToGroupSkillList(){
        await this.tier1UsersAndTeams.navigateToUsersAndTeams()
        await this.tier1UsersAndTeams.navigateToGroupsList()
        await this.groupList.selectGroup('Default')
        await this.editingControl.clickEdit()
        await this.tier1Menu.presenceOfTier1Ver('Skills')
        await this.tier1Menu.navigateToTier1Ver('Skills')
        await this.tier1Menu.presenceOfTier1Hor('Skill List')
        await this.tier1Menu.navigateToTier1Hor('Skill List')
    }

    async inputData_Skills(fieldName:string, data:string){
        var xpath = "//input[@id = '"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath, data)
    }

    async selectSkill(skillName:string){
        var xpath = "//span[contains (text(),'"+skillName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async clickShowSkillHolders_btn(){
        var xpath = "//button[@ng-click='showSkillHolders()']"
        await this.actionSupport.clickOnElement(xpath)
    }

    async showHolder(holderName:string){
        var xpath = "//span[contains (text(), '"+holderName+"')]"
        await this.actionSupport.presentElement(xpath)
    }
}