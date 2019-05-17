import { async } from "q";
import { EditingControl } from "../../admin_core_function/editingControl/editingControl";
import { LoginPage } from "../../PageObjects/LoginPage";
import { browser } from "protractor";
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage";
import { TitleBarButtons } from "../../admin_core_function/titleBarButtons/titleBarButtons";
import { ActionPopup } from "../../admin_core_popup/actionPopup";
import { GroupProfile } from "../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";
import { GroupListPage } from "../../PageObjects/UsersAndTeamsPage/GroupPage/GroupListPage";
import { Tier1Menu } from "../../admin_core_menu/tier1Menu/tier1Menu";
import { ActionSupport } from "../../core_function/actionSupport/actionSupport";

describe("Group List", function(){
    var loginPage: LoginPage
    var tier1Menu: Tier1Menu
    var editingControl: EditingControl
    var tenantConfigurationPage: TenantConfigurationPage
    var groupProfilePage: GroupProfile
    var groupListPage: GroupListPage

    var titleBar_btn: TitleBarButtons
    var actionPopup: ActionPopup
    
    var originalTimeout: number

    beforeEach (async function(){
        loginPage = new LoginPage (browser)
        tier1Menu = new Tier1Menu(browser)
        editingControl = new EditingControl (browser)
        groupListPage = new GroupListPage (browser)
        tenantConfigurationPage = new TenantConfigurationPage (browser)
        groupProfilePage = new GroupProfile (browser)
        titleBar_btn = new TitleBarButtons (browser)
        actionPopup = new ActionPopup (browser)
 
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ("should naviagte to the Users and Teams - Groups list", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenantConfigurationPage.selectTenancy('1001')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await expect (tier1Menu.navigateToTier1Hor('Groups'))
    })

    it ("should add new group successfully ", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenantConfigurationPage.selectTenancy('1001')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await editingControl.clickAdd()
        await groupProfilePage.createNewGroup("Automation Group", "This group is created by automation script")
        await titleBar_btn.clickSaveCancel_btn('Save')
        await expect (titleBar_btn.waitForSavingTxt())
    })

    it ("should edit group name and description successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenantConfigurationPage.selectTenancy('1001')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupListPage.selectGroup('Automation Group')
        await editingControl.clickEdit()
        await groupProfilePage.createNewGroup("Updated_ Automation Group Name", "Updated_This group is edited by script")
        await titleBar_btn.clickSaveCancel_btn('Save')
        await expect (titleBar_btn.waitForSavingTxt())
    })

    it ("should delete the group successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenantConfigurationPage.selectTenancy('1001')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupListPage.selectGroup('Updated_ Automation Group Name')  
        await editingControl.clickDelete()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await expect (groupListPage.invisibleGroup('Updated_Automation Group Name')) 
    })

    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

})