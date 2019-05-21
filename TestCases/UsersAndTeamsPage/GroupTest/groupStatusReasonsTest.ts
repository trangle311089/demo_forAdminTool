import { ProtractorBrowser, browser } from "protractor";
import { Tier1Menu } from "../../../admin_core_menu/tier1Menu/tier1Menu";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { async } from "q";
import { GroupListPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupListPage";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { TitleBarButtons } from "../../../admin_core_function/titleBarButtons/titleBarButtons";
import { GroupStatusReasonsPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupStatusReasonsPage";

describe ("Group Status Reason", function(){
    var curBrowser: ProtractorBrowser
    var loginPage: LoginPage
    var tenancy: TenantConfigurationPage
    var tier1Menu: Tier1Menu
    var editingControl: EditingControl
    var groupList: GroupListPage
    var actionPopup: ActionPopup
    var actionSupport: ActionSupport
    var titleBar: TitleBarButtons
    var groupStatus: GroupStatusReasonsPage
    var originalTimeout: number

    beforeEach(async function(){
        curBrowser = browser
        loginPage = new LoginPage (browser)
        tenancy = new TenantConfigurationPage (browser)
        tier1Menu = new Tier1Menu (browser)
        editingControl = new EditingControl (browser)
        actionPopup = new ActionPopup (browser)
        groupList = new GroupListPage(browser)
        titleBar = new TitleBarButtons(browser)
        groupStatus = new GroupStatusReasonsPage(browser)
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it("should add the group break reason successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login ()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Ver('Status Reasons')
        await tier1Menu.navigateToTier1Ver('Status Reasons')
        await tier1Menu.presenceOfTier1Hor('Break Reasons')
        await tier1Menu.navigateToTier1Hor('Break Reasons')

        await editingControl.clickAdd()
        await actionPopup.showPopup('add')
        await groupStatus.inputValue('txtStatusReason','Group break reason')
        await groupStatus.inputValue('txtDescription','This group break reason is created by script')
        await actionPopup.clickSaveAndAddAnother_btn()
        await actionPopup.showPopup('add')
        await groupStatus.inputValue('txtStatusReason','Group break reason 1')
        await  groupStatus.inputValue('txtDescription','This group break reason is created by script')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await expect(titleBar.waitForSavingTxt())
    })

    it ("should edit the group break status reason successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login ()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Ver('Status Reasons')
        await tier1Menu.navigateToTier1Ver('Status Reasons')
        await tier1Menu.presenceOfTier1Hor('Break Reasons')
        await tier1Menu.navigateToTier1Hor('Break Reasons')

        await groupStatus.selectStt('Group break reason 1')
        await editingControl.clickEdit()
        await actionPopup.showPopup('edit')
        await groupStatus.inputValue('txtStatusReason','Group break reason 1 Edited')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await expect (titleBar.waitForSavingTxt())
    })

    it("should delete the group break status reason successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login ()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Ver('Status Reasons')
        await tier1Menu.navigateToTier1Ver('Status Reasons')
        await tier1Menu.presenceOfTier1Hor('Break Reasons')
        await tier1Menu.navigateToTier1Hor('Break Reasons')

        await groupStatus.selectStt('Group break reason 1 Edited')
        await editingControl.clickDelete()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await titleBar.clickSaveCancel_btn('Save')
        await expect(titleBar.waitForSavingTxt())
    })


    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

})