import { Tier1icon } from "../../PageObjects/Tier1icon"
import { LoginPage } from "../../PageObjects/LoginPage"
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage"
import { HandleMenu } from "../../CommonSupport/HandleMenu"
import { async } from "q"
import { browser } from "protractor"
import { HandleEditingControl } from "../../CommonSupport/HandleEditingControl"

describe ("Verify the tier 1 Icon", function(){
    let tier1Icon: Tier1icon
    let loginPage: LoginPage
    let tenantConfiguration: TenantConfigurationPage
    let handleEditingControl: HandleEditingControl
    let handleMenu: HandleMenu

    beforeEach (async function(){
        tier1Icon = new Tier1icon (browser)
        loginPage = new LoginPage (browser)
        tenantConfiguration = new TenantConfigurationPage (browser)
        handleEditingControl = new HandleEditingControl (browser)
        handleMenu = new HandleMenu (browser)
        console.log ("STEP 1: Launch the Admin Tool and click on SIGN IN button")
        await loginPage.login()
        console.log ("STEP 2: Navigate to Tenant Configuration menu")
        await handleMenu.selectTenantConfigurationMenu()
        console.log ("STEP 3: Select the existing tenant on grid")
        await tenantConfiguration.selectTenancy("1001")
        console.log ("STEP 4: Click on the edit option")
        await handleEditingControl.clickEdit()
    })

    it ("TC 01 - Verify Tier 1 icon - ACTIVE STATUS page", async function(){
        console.log ("STEP 5: Navigate to ACTIVE STATUS menu")
        await handleMenu.selectActiveStatus()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_ActiveStatus()
        
    })

    it ("TC 02 - Verify Tier 1 icon - LICENSING page", async function(){
        console.log ("STEP 5: Navigate to LICENSING menu")
        await handleMenu.selectLicensing()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_Licensing()
        
    })

    it ("TC 03 - Verify Tier 1 icon - USERS AND TEAMS page", async function(){
        console.log ("STEP 5: Navigate to USERS AND TEAMS menu")
        await handleMenu.selectUsersAndTeams()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_UsersAndTeams()
    })

    it ("TC 04 - Verify Tier 1 icon - CONTACT POINTS page", async function(){
        console.log ("STEP 5: Navigate to CONTACT POINTS menu")
        await handleMenu.selectContactPoints()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_ContactPoint()
    })

    it ("TC 05 - Verify Tier 1 icon - AUTO ATTENDANT & IVR page", async function(){
        console.log ("STEP 5: Navigate to AUTO ATTENDANT & IVR menu")
        await handleMenu.selectAutoAtt()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_AutoAtt()
    })

    it ("TC 06 - Verify Tier 1 icon - QUEUES page", async function(){
        console.log ("STEP 5: Navigate to QUEUES menu")
        await handleMenu.selectQueues()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_Queues()
    })

    it ("TC 07 - Verify Tier 1 icon - GREETINGS & PROMPTS page", async function(){
        console.log ("STEP 5: Navigate to GREETINGS & PROMPTS menu")
        await handleMenu.selectGreetingsPrompts()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_GreetingPrompt()
    })

    it ("TC 08 - Verify Tier 1 icon - VOICEMAIL MESSAGES page", async function(){
        console.log ("STEP 5: Navigate to VOICEMAIL MESSAGES menu")
        await handleMenu.selectVoicemailMessages()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_Voicemail()
    })

    it ("TC 09 - Verify Tier 1 icon - CAMPAIGN LISTS page", async function(){
        console.log ("STEP 5: Navigate to CAMPAIGN LISTS menu")
        await handleMenu.selectCampaignLists()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_Campaign()
    })

    it ("TC 10 - Verify Tier 1 icon - GLOBAL SETTINGS page", async function(){
        console.log ("STEP 5: Navigate to GLOBAL SETTINGS menu")
        await handleMenu.selectGlobalSettings()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_GlobalSetting()
    })

    it ("TC 11 - Verify Tier 1 icon - ADVANCED page", async function(){
        console.log ("STEP 5: Navigate to ADVANCED menu")
        await handleMenu.selectAdvanced()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_Advanced()
    })

    it ("TC 12 - Verify Tier 1 icon - MOBILITY page", async function(){
        console.log ("STEP 5: Navigate to MOBILITY menu")
        await handleMenu.selectMobility()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_Mobility()
    })

    it ("TC 13 - Verify Tier 1 icon - DASHBOARD page", async function(){
        console.log ("STEP 5: Navigate to DASHBOARD menu")
        await handleMenu.selectDashboard()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_Dashboard()
    })

    it ("TC 14 - Verify Tier 1 icon - REPORTS page", async function(){
        console.log ("STEP 5: Navigate to REPORTS menu")
        await handleMenu.selectReports()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_Report()
    })

    it ("TC 15 - Verify Tier 1 icon - QUALITY SCORING page", async function(){
        console.log ("STEP 5: Navigate to QUALITY SCORING menu")
        await handleMenu.selectQualityScoring()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_QualityScoring()
    })

    it ("TC 16 - Verify Tier 1 icon - DATA MANAGEMENT page", async function(){
        console.log ("STEP 5: Navigate to DATA MANAGEMENT menu")
        await handleMenu.selectDataManagement()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_DataManagement()
    })

    it ("TC 17 - Verify Tier 1 icon - EMERGENCY RESPONSE page", async function(){
        console.log ("STEP 5: Navigate to EMERGENCY RESPONSE menu")
        await handleMenu.selectEmergencyResponse()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_EmergencyResponse()
    })

    it ("TC 18 - Verify Tier 1 icon - ASSIGN LICENCES page", async function(){
        console.log ("STEP 5: Navigate to ASSIGN LICENCES menu")
        await handleMenu.selectAssignLicences()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_AssignLicences()
    })

    it ("TC 19 - Verify Tier 1 icon - UI BRANDING page", async function(){
        console.log ("STEP 5: Navigate to UI BRANDING menu")
        await handleMenu.selectUIBranding()
        console.log ("STEP 6: Verify Tier 1 icon - The icon should be correct")
        await tier1Icon.verifyTier1Icon_UIBranding()
    })
})