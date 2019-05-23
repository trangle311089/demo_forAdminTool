import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { Tier1Menu } from "../../../admin_core_menu/tier1Menu/tier1Menu";
import { Tier1UsersAndTeams } from "../../../admin_core_menu/tier1Menu/tier1UsersAndTeams";
import { GroupListPage } from "./GroupListPage";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";

export class GroupSchedulePage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    tier1Menu: Tier1Menu
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

    async navigateToGroupSchedule(){
        await this.tier1UsersAndTeams.navigateToUsersAndTeams()
        await this.tier1UsersAndTeams.navigateToGroupsList()
        await this.groupList.selectGroup('Default')
        await this.editingControl.clickEdit()
        await this.tier1Menu.presenceOfTier1Ver('Schedule')
        await this.tier1Menu.navigateToTier1Ver('Schedule')
        await this.tier1Menu.presenceOfTier1Hor('Login Schedule')
        await this.tier1Menu.navigateToTier1Hor('Login Schedule')
    }

    async clickEditingControl(gridName:string, btnName:string){
        var xpath = "//div[@data='"+gridName+"']//descendant::div/ul/li/span/i[@class='"+btnName+"']"
        await this.actionSupport.clickOnElement(xpath)
    }

    async inputDate(fieldName:string, data:string){
        var xpath = "//input[@id='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath,data)
    }

    async selectYearMonthDay(year:string, month:string, day:string){
        var xpath = "//input[@id='dtExpiryDate']"
        await this.actionSupport.clickOnElement(xpath)
        var buttonSwitchToMonth = "//th[@colspan='5']"
        await this.actionSupport.clickOnElement(buttonSwitchToMonth)
        var buttonSwitchToYear = "//li[@class='date-picker-menu']//descendant::th/button/strong[@class='ng-binding']"
        await this.actionSupport.clickOnElement(buttonSwitchToYear)
        var xpath = "//span[contains (text(),'"+year+"')]"      
        await this.actionSupport.clickOnElement(xpath)
        var xpath = "//span[contains (text(),'"+month+"')]"
        await this.actionSupport.clickOnElement(xpath)
        var xpath = "//span[contains (text(),'"+day+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectTime(timeField:string, hour:string, min:string){
        var xpath = "//input[@id='"+timeField+"']"
        await this.actionSupport.clickOnElement(xpath)
        var xpath = "//input[@placeholder='HH']"
        await this.actionSupport.sendKeyOnElement(xpath,hour)
        var xpath = "//input[@placeholder='MM']"
        await this.actionSupport.sendKeyOnElement(xpath, min)
        var xpath = "//input[@id='"+timeField+"']"
        await this.actionSupport.clickOnElement(xpath)
    }

    async switchToAMPM(timeField:string, btnName:string){
        var xpath = "//input[@id='"+timeField+"']"
        await this.actionSupport.clickOnElement(xpath)
        var xpath = "//button[contains (text(),'"+btnName+"')]"
        await this.actionSupport.clickOnElement(xpath)
        var xpath = "//input[@id='"+timeField+"']"
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectRecurring(){
        var xpath = "//input[@id='chkrecurring']"
        await this.actionSupport.selectCheckbox(xpath)
    }

    async selectDayOfWeek(dayName:string){
        var xpath = "//div[@ng-model='dataModel.dayOfWeek']"
        await this.actionSupport.clickOnElement(xpath)
        var xpath = "//span[contains(text(),'"+dayName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    
    

}