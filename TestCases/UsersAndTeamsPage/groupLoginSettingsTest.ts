import { LoginPage } from "../../PageObjects/LoginPage";
import { Tier1UsersAndTeams } from "../../admin_core_menu/tier1_UsersAndTeams/tier1_UsersAndTeams";
import { GroupListPage } from "../../PageObjects/UsersAndTeamsPage/GroupPage/GroupListPage";
import { GroupLoginSettingPage } from "../../PageObjects/UsersAndTeamsPage/GroupPage/AgentParameter_LoginSettingsPage";
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage";
import { TitleBarButtons } from "../../admin_core_function/titleBarButtons/titleBarButtons";
import { async } from "q";
import { browser, by } from "protractor";
import { EditingControl } from "../../admin_core_function/editingControl/editingControl";
import { Driver } from "selenium-webdriver/ie";

describe ("Group Login Settings", function(){
    var loginPage: LoginPage
    var tenancy: TenantConfigurationPage
    var tier1UsersandTeams: Tier1UsersAndTeams
    var groupList: GroupListPage
    var groupLoginSettings: GroupLoginSettingPage
    var titleBar: TitleBarButtons
    var editingControl: EditingControl

    var originalTimeout: number

    beforeEach (async function(){
        loginPage = new LoginPage (browser)
        tenancy = new TenantConfigurationPage (browser)
        tier1UsersandTeams = new Tier1UsersAndTeams (browser)
        groupList = new GroupListPage (browser)
        groupLoginSettings = new GroupLoginSettingPage (browser)
        titleBar = new TitleBarButtons (browser)
        editingControl = new EditingControl (browser)

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ("should update the login settings successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlord/#/login")
        await browser.manage().window().maximize()
                
        await loginPage.login()
        await tenancy.selectTenancy()
        await editingControl.clickEdit()
        await browser.sleep(3000)
        await tier1UsersandTeams.clickUsersAndTeamsMenu()
        await browser.sleep(3000)
        await groupList.showGroupsMenu()
        await groupList.clickGroupsMenu()
        await browser.sleep(3000)
        await groupList.selectGroupEntry()
        await browser.sleep(3000)
        await editingControl.clickEdit()
        await browser.sleep(3000)
        await groupLoginSettings.presenceOf_AgentParammeters()
        await groupLoginSettings.clickAgentParameterMenu()
        await browser.sleep(2000)
        await groupLoginSettings.presentOf_LoginSettings()
        await groupLoginSettings.clickLoginSettings()
        await browser.sleep(2000)
        await groupLoginSettings.checkNotReady_rad()
        await browser.sleep(2000)
        await groupLoginSettings.checkReadyPro1()
        await browser.sleep(2000)
        await groupLoginSettings.inputProfile1("automation_readyStateProfile1")
        await browser.sleep(3000)
        await groupLoginSettings.checkAvailable1()
        await browser.sleep(2000)
        await groupLoginSettings.inputIPRanges("172.17.0.223")
        await browser.sleep(3000)
        await titleBar.clickSave_btn()
        await browser.sleep(3000)
        await expect (titleBar.waitForSavingTxt())
   })
})