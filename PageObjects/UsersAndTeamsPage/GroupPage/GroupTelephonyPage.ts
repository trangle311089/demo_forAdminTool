import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";


export class GroupTelephonyPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
 
    }
    // async navigateToGroup_TelephonyGeneralPage(){
    //     await this.tier1UsersAndTeams.navigateToUsersAndTeams()
    //     await this.tier1UsersAndTeams.navigateToGroupsList()
    //     await this.groupList.selectGroup('Default')
    //     await this.editingControl.clickEdit()
    //     await this.tier1Menu.presenceOfTier1Ver('Telephony')
    //     await this.tier1Menu.navigateToTier1Ver('Telephony')
    //     await this.tier1Menu.presenceOfTier1Hor('General')
    //     await this.tier1Menu.navigateToTier1Hor('General')
    // }

    // async navigateToGroup_TelephonyPSTN(){
    //     await this.tier1UsersAndTeams.navigateToUsersAndTeams()
    //     await this.tier1UsersAndTeams.navigateToGroupsList()
    //     await this.groupList.selectGroup('Default')
    //     await this.editingControl.clickEdit()
    //     await this.tier1Menu.presenceOfTier1Ver('Telephony')
    //     await this.tier1Menu.navigateToTier1Ver('Telephony')
    //     await this.tier1Menu.presenceOfTier1Hor('PSTN Agent Connection')
    //     await this.tier1Menu.navigateToTier1Hor('PSTN Agent Connection')
    // }

    // async navigateToGroup_TelephonyDialPlan(){
    //     await this.tier1UsersAndTeams.navigateToUsersAndTeams()
    //     await this.tier1UsersAndTeams.navigateToGroupsList()
    //     await this.groupList.selectGroup('Default')
    //     await this.editingControl.clickEdit()
    //     await this.tier1Menu.presenceOfTier1Ver('Telephony')
    //     await this.tier1Menu.navigateToTier1Ver('Telephony')
    //     await this.tier1Menu.presenceOfTier1Hor('Dial Plan')
    //     await this.tier1Menu.navigateToTier1Hor('Dial Plan')
    // }

    async inputData_Telephony(fieldName:string, data:string){
        var xpath = "//input[@id='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath, data)
    }

    async selectPSTN(pstnName:string){
        var xpath = "//div[@col-id='phoneNumber' and contains(text(),'"+pstnName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectDialPlan(dialPlan:string){
        var xpath = "//div[@col-id='dialString' and contains(text(),'"+dialPlan+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectPermission(btn_name:string){
        var xpath = "//input[@id='"+btn_name+"']"
        await this.actionSupport.clickOnElement(xpath)
    }
    
    async getValidationMessage(message_txt:string, message_content:string){
        var xpath ="//p[@ng-bind='"+message_txt+"' and contains (text(),'"+message_content+"')]"
        await this.actionSupport.presentElement(xpath)
    }

}