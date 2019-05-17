import { LoginPage } from "../../PageObjects/LoginPage";
import { GroupListPage } from "../../PageObjects/UsersAndTeamsPage/GroupPage/GroupListPage";
import { GroupLoginSettingPage } from "../../PageObjects/UsersAndTeamsPage/GroupPage/AgentParameter_LoginSettingsPage";
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage";
import { TitleBarButtons } from "../../admin_core_function/titleBarButtons/titleBarButtons";
import { async } from "q";
import { browser, by } from "protractor";
import { EditingControl } from "../../admin_core_function/editingControl/editingControl";
import { Driver } from "selenium-webdriver/ie";
import { Tier1Menu } from "../../admin_core_menu/tier1Menu/tier1Menu";

describe ("Group Login Settings", function(){
    var loginPage: LoginPage
    var tenancy: TenantConfigurationPage
    var tier1Menu: Tier1Menu
    var groupList: GroupListPage
    var groupLoginSettings: GroupLoginSettingPage
    var titleBar: TitleBarButtons
    var editingControl: EditingControl
    var agentParam: GroupLoginSettingPage

    var originalTimeout: number

    beforeEach (async function(){
        loginPage = new LoginPage (browser)
        tenancy = new TenantConfigurationPage (browser)
        tier1Menu = new Tier1Menu (browser)
        groupList = new GroupListPage (browser)
        groupLoginSettings = new GroupLoginSettingPage (browser)
        titleBar = new TitleBarButtons (browser)
        editingControl = new EditingControl (browser)
        agentParam = new GroupLoginSettingPage(browser)

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ("should update the login settings successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
                
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Ver('Agent Parameters')
        await tier1Menu.navigateToTier1Ver('Agent Parameter')
        await tier1Menu.presenceOfTier1Hor('Login Settings')
        await tier1Menu.navigateToTier1Hor('Login Settings')
        await agentParam.inputText_field('txtIPRanges','172.17.0.223')
        
      
        await titleBar.clickSave_btn()
      
        await expect (titleBar.waitForSavingTxt())
   })
})