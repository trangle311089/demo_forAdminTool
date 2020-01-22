import { ProtractorBrowser, browser, by, element } from "protractor"
import { ActionSupport } from "../core_function/actionSupport"
import { LoginPage } from "./LoginPage"
import { HandleMenu } from "../CommonSupport/HandleMenu"

export class Tier1icon{
    tier1Icon_activeStatus: string
    tier1Icon_licensing: string
    tier1Icon_usersAndTeams: string
    tier1Icon_contactPoint: string
    tier1Icon_autoAtt: string
    tier1Icon_queues: string
    tier1Icon_greetingPrompt: string
    tier1Icon_voicemail : string
    tier1Icon_campaign: string
    tier1Icon_globalSetting: string
    tier1Icon_advanced: string
    tier1Icon_mobility: string
    tier1Icon_dashboard: string
    tier1Icon_report: string
    tier1Icon_qualityScoring: string
    tier1Icon_dataManagement: string
    tier1Icon_emergencyResponse: string
    tier1Icon_assignLicences: string
    tier1Icon_uiBranding: string


    constructor(browser:ProtractorBrowser){
        this.tier1Icon_activeStatus = "//i[@class = 'status tier1-icon']"
        this.tier1Icon_licensing = "//i[@class = 'licensing tier1-icon']"
        this.tier1Icon_usersAndTeams = "//i[@class = 'users tier1-icon']"
        this.tier1Icon_contactPoint = "//i[@class = 'contact-points tier1-icon']"
        this.tier1Icon_autoAtt = "//i[@class = 'ivr tier1-icon']"
        this.tier1Icon_queues = "//i[@class = 'queue tier1-icon']"
        this.tier1Icon_greetingPrompt = "//i[@class='messages-and-prompts tier1-icon']"
        this.tier1Icon_voicemail = "//i[@class='voice-mail tier1-icon']"
        this.tier1Icon_campaign = "//i[@class='lists tier1-icon']"
        this.tier1Icon_globalSetting = "//i[@class='global-settings tier1-icon']"
        this.tier1Icon_advanced = "//i[@class='advanced tier1-icon']"
        this.tier1Icon_mobility = "//i[@class='mobility tier1-icon']"
        this.tier1Icon_dashboard = "//i[@class='dashboard tier1-icon']"
        this.tier1Icon_report = "//i[@class='reports tier1-icon']"
        this.tier1Icon_qualityScoring = "//i[@class='quality-scoring tier1-icon']"
        this.tier1Icon_dataManagement = "//i[@class='data-management tier1-icon']"
        this.tier1Icon_emergencyResponse = "//i[@class='emergency-response tier1-icon']"
        this.tier1Icon_assignLicences = "//i[@class='landlord tier1-icon']"
        this.tier1Icon_uiBranding = "//i[@class='landlord tier1-icon']"
    }

    async verifyTier1Icon_ActiveStatus (){
        let xpath = this.tier1Icon_activeStatus
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el,'activeStatusIcon')
        await expect (browser.imageComparison.checkElement((el),'activeStatusIcon')).toEqual(0)
    }

    async verifyTier1Icon_Licensing (){
        let xpath = this.tier1Icon_licensing
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'licensingIcon')
        await expect (browser.imageComparison.checkElement((el),'licensingIcon')).toEqual(0)
    }

    async verifyTier1Icon_UsersAndTeams(){
        let xpath = this.tier1Icon_usersAndTeams
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'usersAndTeamsIcon')
        await expect (browser.imageComparison.checkElement((el), 'usersAndTeamsIcon')).toEqual(0)
    }

    async verifyTier1Icon_ContactPoint (){
        let xpath = this.tier1Icon_contactPoint
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'contactPointIcon')
        await expect (browser.imageComparison.checkElement((el), 'contactPointIcon')).toEqual(0)
    }

    async verifyTier1Icon_AutoAtt (){
        let xpath = this.tier1Icon_autoAtt
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'autoAttIcon')
        await expect (browser.imageComparison.checkElement((el), 'autoAttIcon')).toEqual(0)
    }

    async verifyTier1Icon_Queues (){
        let xpath = this.tier1Icon_queues
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'queueIcon')
        await expect (browser.imageComparison.checkElement((el), 'queueIcon')).toEqual(0)
    }

    async verifyTier1Icon_GreetingPrompt(){
        let xpath = this.tier1Icon_greetingPrompt
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'greetingPromptIcon')
        await expect (browser.imageComparison.checkElement((el), 'greetingPromptIcon')).toEqual(0)
    }

    async verifyTier1Icon_Voicemail(){
        let xpath = this.tier1Icon_voicemail
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'voicemailIcon')
        await expect (browser.imageComparison.checkElement((el), 'voicemailIcon')).toEqual(0)
    }

    async verifyTier1Icon_Campaign(){
        let xpath= this.tier1Icon_campaign
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'campaignIcon')
        await expect (browser.imageComparison.checkElement((el),'campaignIcon')).toEqual(0)
    }

    async verifyTier1Icon_GlobalSetting(){
        let xpath = this.tier1Icon_globalSetting
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'globalIcon')
        await expect (browser.imageComparison.checkElement((el), 'globalIcon')).toEqual(0)
    }

    async verifyTier1Icon_Advanced(){
        let xpath = this.tier1Icon_advanced
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'advancedIcon')
        await expect (browser.imageComparison.checkElement((el), 'advancedIcon')).toEqual(0)
    }

    async verifyTier1Icon_Mobility(){
        let xpath = this.tier1Icon_mobility
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'mobilityIcon')
        await expect (browser.imageComparison.checkElement((el), 'mobilityIcon')).toEqual(0)
    }

    async verifyTier1Icon_Dashboard(){
        let xpath = this.tier1Icon_dashboard
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'dashboardIcon')
        await expect (browser.imageComparison.checkElement((el), 'dashboardIcon')).toEqual(0)
    }

    async verifyTier1Icon_Report(){
        let xpath = this.tier1Icon_report
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'reportIcon')
        await expect (browser.imageComparison.checkElement((el), 'reportIcon')).toEqual(0)
    }

    async verifyTier1Icon_QualityScoring(){
        let xpath = this.tier1Icon_qualityScoring
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'qualityScoringIcon')
        await expect (browser.imageComparison.checkElement((el), 'qualityScoringIcon')).toEqual(0)
    }

    async verifyTier1Icon_DataManagement(){
        let xpath  = this.tier1Icon_dataManagement
        let el  = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'dataManagementIcon')
        await expect (browser.imageComparison.checkElement((el), 'dataManagementIcon')).toEqual(0)
    }

    async verifyTier1Icon_EmergencyResponse(){
        let xpath = this.tier1Icon_emergencyResponse
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'emergencyIcon')
        await expect (browser.imageComparison.checkElement((el), 'emergencyIcon')).toEqual(0)
    }

    async verifyTier1Icon_AssignLicences(){
        let xpath = this.tier1Icon_assignLicences
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'assignLicenceIcon')
        await expect (browser.imageComparison.checkElement((el), 'assignLicenceIcon')).toEqual(0)
    }

    async verifyTier1Icon_UIBranding(){
        let xpath = this.tier1Icon_uiBranding
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el, 'uiBrandingIcon')
        await expect (browser.imageComparison.checkElement((el), 'uiBrandingIcon')).toEqual(0)
    }
}