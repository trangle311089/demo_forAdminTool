import { ProtractorBrowser, by, browser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport";
import { async } from "q";
import { TouchSequence } from "selenium-webdriver";

export class HandleMenu{
    actionSupport: ActionSupport

    constructor(browser:ProtractorBrowser){
        this.actionSupport = new ActionSupport(browser)
    }

    async selectVerMenu(menuName:string){
        var xpath = "//a[@class='verical-menu-item ng-binding' and contains (text(),'"+menuName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }
    
    async selectHorMenu(menuName:string){
        var xpath = "//a[@class='ng-binding' and contains (text(),'"+menuName+"')]"
        await this.actionSupport.clickOnElement(xpath)

    }

    async verifyDisplayedVerMenu(menuName:string){
        console.log ("Handle Menu - The vertical menu "+menuName+" is displayed")
        let xpath = "//a[@class='verical-menu-item ng-binding' and contains (text(),'"+menuName+"')]"
        let ele= browser.element(by.xpath(xpath))
        await expect(ele.isDisplayed()).toBe(true)   
    }

    async verifyDisplayedHorMenu(menuName:string){
        console.log ("Horizontal Menu: The horizontal menu "+menuName+" is displayed")
        let xpath = "//a[@class='ng-binding' and contains (text(),'"+menuName+"')]"
        let ele= browser.element(by.xpath(xpath))
        await expect(ele.isDisplayed()).toBe(true)  
    }

    async selectTenantConfigurationMenu(){
        console.log ("Handle Menu - Select Tier 1 vertical Tenant Configuration menu")
        await this.selectVerMenu('Tenant Configuration')
    }

    // Active status menu
    async selectActiveStatus(){
        await this.selectVerMenu('active status')
    }

    async selectActiveUserList(){
        await this.selectActiveStatus()
        await this.selectHorMenu('Users')
    }

    // Users and Teams menu
    async selectUsersAndTeams(){
        await this.selectVerMenu('Users and Teams')
    }

    //Users and Teams - Groups menu
    async selectGroupsList(){
        await this.selectUsersAndTeams()
        await this.selectHorMenu('Groups')
    }

    // Users and Teams - Groups - Agent Paramters menu
    async selectGroupAgentParameters(){
        await this.selectVerMenu('Agent Parameters')
    }

    async selectGroupAgentParmeter_LoginSettings(){
        await this.selectGroupAgentParameters()
        await this.selectHorMenu('Login Settings')
    }

    async selectGroupAgentParamter_ContactPresentation(){
        await this.selectGroupAgentParameters()
        await this.selectHorMenu('Contact Presentation')
    }

    async selectGroupAgentParamter_AgentPermission(){
        await this.selectGroupAgentParameters()
        await this.selectHorMenu('Agent Permissions')
    }

    // Users and Teams - Groups - Skills
    async selectGroupSkills(){
        await this.selectVerMenu('Skills')
    }

    async selectGroupSkillList(){
        await this.selectGroupSkills()
        await this.selectHorMenu('Skill List')
    }

    // Users and Teams - Groups - Telephony
    async selectGroupTelephony(){
        await this.selectVerMenu('Telephony')
    }

    async selectGroupTelephony_General(){
        await this.selectGroupTelephony()
        await this.selectHorMenu('General')
    }

    async selectGroupTelephony_PSTN(){
        await this.selectGroupTelephony()
        await this.selectHorMenu('PSTN Agent Connection')
    }

    async selectGroupTelephony_DialPlan(){
        await this.selectGroupTelephony()
        await this.selectHorMenu('Dial Plan')
    }



    //Users and Teams - Groups - Status Reasons
    async selectGroupStatusReasons(){
        await this.selectVerMenu('Status Reasons')
    }

    async selectGroupStatus_BreakReason(){
        await this.selectGroupStatusReasons()
        await this.selectHorMenu('Break Reasons')
    }

    // Users and Teams - Groups - Schedule
    async selectGroupSchedule(){
        await this.selectVerMenu('Schedule')
    }

    async selectGroup_LoginSchedule(){
        await this.selectGroupSchedule()
        await this.selectHorMenu('Login Schedule')
    }

    //Greetings & Prompts menu
    async selectGreetingsPrompts(){
        await this.selectVerMenu('greetings & prompts')
    }

    //Greetings & Prompts - User Recorded Greetings
    async selectUserRecordedGreetings(){
        await this.selectGreetingsPrompts()
        await this.selectHorMenu('User Recorded Greetings')
    }

    async selectUserAgentGreetings(){
        await this.selectVerMenu('Agent Greetings')
        await this.selectHorMenu('General')
    }

    async selectUserVoiceMailGreetings(){
        await this.selectVerMenu('Voice Mail Greetings')
        await this.selectHorMenu('General')
    }
    

}