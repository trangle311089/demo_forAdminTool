import { ProtractorBrowser, by, browser } from "protractor";
import { ActionSupport } from "../core_function/actionSupport";
import { async } from "q";
import { TouchSequence } from "selenium-webdriver";
import { compileFunction } from "vm";

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
        console.log ("Handle Menu - Select Tier 1 vertical Active Status menu")
        await this.selectVerMenu('active status')
    }

    async selectActiveUserList(){
        await this.selectActiveStatus()
        console.log ("Handle Menu - Select Tier 1 horizontal Active Status - Users menu")
        await this.selectHorMenu('Users')
    }

    // Licensing menu
    async selectLicensing(){
        console.log ("Handle Menu - Select Tier 1 vertical Licensing menu")
        await this.selectVerMenu ('licensing')
    }

    // Users and Teams menu
    async selectUsersAndTeams(){
        console.log ("Handle Menu - Select Tier 1 vertical Users And Teams menu")
        await this.selectVerMenu('Users and Teams')
    }

    //Users and Teams - Groups menu
    async selectGroupsList(){
        await this.selectUsersAndTeams()
        console.log ("Handle Menu - Select Tier 1 horizontal Users And Teams - Groups menu")
        await this.selectHorMenu('Groups')
    }

    // Users and Teams - Groups - Agent Paramters menu
    async selectGroupAgentParameters(){
        console.log ("Handle Menu - Select Tier 2 vertical Users And Teams - Groups - Agent Parameters menu")
        await this.selectVerMenu('Agent Parameters')
    }

    async selectGroupAgentParmeter_LoginSettings(){
        await this.selectGroupAgentParameters()
        console.log ("Handle Menu - Select Tier 2 horizontal Users And Teams - Groups - Agent Parameters - Login Settings menu")
        await this.selectHorMenu('Login Settings')
    }

    async selectGroupAgentParamter_ContactPresentation(){
        await this.selectGroupAgentParameters()
        console.log ("Handle Menu - Select Tier 2 horizontal Users And Teams - Groups - Agent Parameters - Contact Presentation menu")
        await this.selectHorMenu('Contact Presentation')
    }

    async selectGroupAgentParamter_AgentPermission(){
        await this.selectGroupAgentParameters()
        console.log ("Handle Menu - Select Tier 2 horizontal Users And Teams - Groups - Agent Parameters - Agent Permissions menu")
        await this.selectHorMenu('Agent Permissions')
    }

    // Users and Teams - Groups - Skills
    async selectGroupSkills(){
        console.log ("Handle Menu - Select Tier 2 vertical Users And Teams - Groups - Skills menu")
        await this.selectVerMenu('Skills')
    }

    async selectGroupSkillList(){
        await this.selectGroupSkills()
        console.log ("Handle Menu - Select Tier 2 horizontal Users And Teams - Groups - Skills - Skill List menu")
        await this.selectHorMenu('Skill List')
    }

    // Users and Teams - Groups - Telephony
    async selectGroupTelephony(){
        console.log ("Handle Menu - Select Tier 2 vertical Users And Teams - Groups - Telephony menu")
        await this.selectVerMenu('Telephony')
    }

    async selectGroupTelephony_General(){
        await this.selectGroupTelephony()
        console.log ("Handle Menu - Select Tier 2 horizontal Users And Teams - Groups - Telephony - General menu")
        await this.selectHorMenu('General')
    }

    async selectGroupTelephony_PSTN(){
        await this.selectGroupTelephony()
        console.log ("Handle Menu - Select Tier 2 horizontal Users And Teams - Groups - Telephony - PSTN Agent Connection menu")
        await this.selectHorMenu('PSTN Agent Connection')
    }

    async selectGroupTelephony_DialPlan(){
        await this.selectGroupTelephony()
        console.log ("Handle Menu - Select Tier 2 horizontal Users And Teams - Groups - Telephony - Dial Plan menu")
        await this.selectHorMenu('Dial Plan')
    }


    //Users and Teams - Groups - Status Reasons
    async selectGroupStatusReasons(){
        console.log ("Handle Menu - Select Tier 2 vertical Users And Teams - Groups - Status Reasons menu")
        await this.selectVerMenu('Status Reasons')
    }

    async selectGroupStatus_BreakReason(){
        await this.selectGroupStatusReasons()
        console.log ("Handle Menu - Select Tier 2 horizontal Users And Teams - Groups - Status Reasons - Break Reasons menu")
        await this.selectHorMenu('Break Reasons')
    }

    // Users and Teams - Groups - Schedule
    async selectGroupSchedule(){
        console.log ("Handle Menu - Select Tier 2 vertical Users And Teams - Groups - Schedule menu")
        await this.selectVerMenu('Schedule')
    }

    async selectGroup_LoginSchedule(){
        await this.selectGroupSchedule()
        console.log ("Handle Menu - Select Tier 2 horizontal Users And Teams - Groups - Schedule - Login Schedule menu")
        await this.selectHorMenu('Login Schedule')
    }
    

    // Contact Points 
    async selectContactPoints(){
        console.log ("Handle Menu - Select Tier 1 vertical Contact Points menu")
        await this.selectVerMenu('Contact Points')
    }
    
    // Auto Attendant & IVR
    async selectAutoAtt (){
        console.log ("Handle Menu - Select Tier 1 vertical Auto Attendant & IVR menu")
        await this.selectVerMenu('auto attendant & ivr')
    }

    // Queues
    async selectQueues (){
        console.log ("Handle Menu - Select Tier 1 vertical Queues menu")
        await this.selectVerMenu ('queues')
    }

    //Greetings & Prompts menu
    async selectGreetingsPrompts(){
        console.log ("Handle Menu - Select Tier 1 vertical Greetings & Prompts menu")
        await this.selectVerMenu('greetings & prompts')
    }

    //Greetings & Prompts - User Recorded Greetings
    async selectUserRecordedGreetings(){
        await this.selectGreetingsPrompts()
        console.log ("Handle Menu - Select Tier 1 horizontal Greetings & Prompts - User Recorded Greetings menu")
        await this.selectHorMenu('User Recorded Greetings')
    }

    async selectUserAgentGreetings(){
        console.log ("Handle Menu - Select Tier 2 vertical Greetings & Prompts - User Recorded Greetings - Agent Greetings menu")
        await this.selectVerMenu('Agent Greetings')
        console.log ("Handle Menu - Select Tier 2 horizontal Greetings & Prompts - User Recorded Greetings - Agent Greetings - General menu")
        await this.selectHorMenu('General')
    }

    async selectUserVoiceMailGreetings(){
        console.log ("Handle Menu - Select Tier 2 vertical Greetings & Prompts - User Recorded Greetings - Voice Mail Greetings menu")
        await this.selectVerMenu('Voice Mail Greetings')
        console.log ("Handle Menu - Select Tier 2 horizontal Greetings & Prompts - User Recorded Greetings - Voice Mail Greetings - General menu")
        await this.selectHorMenu('General')
    }

    // Voicemail Messages menu
    async selectVoicemailMessages(){
        console.log ("Handle Menu - Select Tier 1 vertical Voicemail Messages menu")
        await this.selectVerMenu('Voicemail Messages')
    }

    // Campaign Lists menu
    async selectCampaignLists(){
        console.log ("Handle Menu - Select Tier 1 vertical Campaign Lists menu")
        await this.selectVerMenu ('Campaign Lists')
    }

    // Global Settings menu
    async selectGlobalSettings(){
        console.log ("Handle Menu - Select Tier 1 vertical Global Settings menu")
        await this.selectVerMenu ('Global Settings')
    }

    // Advanced menu
    async selectAdvanced(){
        console.log ("Handle Menu - Select Tier 1 vertical Advanced menu")
        await this.selectVerMenu ('advanced')
    }

    // Mobility menu
    async selectMobility(){
        console.log ("Handle Menu - Select Tier 1 vertical Mobility menu")
        await this.selectVerMenu ('mobility')
    }

    // Dashboard menu
    async selectDashboard(){
        console.log ("Handle Menu - Select Tier 1 vertical Dashboard menu")
        await this.selectVerMenu ('dashboard')
    }

    // Reports menu
    async selectReports(){
        console.log ("Handle Menu - Select Tier 1 vertical Reports menu")
        await this.selectVerMenu ('reports')
    }

    // Quality Scoring menu
    async selectQualityScoring(){
        console.log ("Handle Menu - Select Tier 1 vertical Quality Scoring menu")
        await this.selectVerMenu ('Quality Scoring')
    }

    // Data Management meny
    async selectDataManagement(){
        console.log ("Handle Menu - Select Tier 1 vertical Data Management menu")
        await this.selectVerMenu ('Data Management')
    }

    // Emergency Response menu
    async selectEmergencyResponse(){
        console.log ("Handle Menu - Select Tier 1 vertical Emergency Response menu")
        await this.selectVerMenu ('Emergency Response')
    }

    // Assign Licences menu
    async selectAssignLicences(){
        console.log ("Handl Menu - Select Tier 1 vertical Assign Licences menu")
        await this.selectVerMenu ('Assign Licences')
    }

    // UI Branding menu
    async selectUIBranding(){
        console.log ("Handle Menu - Select Tier 1 vertical UI Branding menu")
        await this.selectVerMenu ('ui branding')
    }
}