import { ProtractorBrowser, browser } from "protractor";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { async } from "q";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { TitleBarButtons } from "../../../admin_core_function/titleBarButtons/titleBarButtons";
import { GroupStatusReasonsPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupStatusReasonsPage";
import { Tier1TenantConfiguration } from "../../../admin_core_menu/tier1Menu/tier1TenantConfiguration";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";

describe ("Group Status Reason", function(){
    var curBrowser: ProtractorBrowser
    var loginPage: LoginPage
    var editingControl: EditingControl
    var actionPopup: ActionPopup
    var actionSupport: ActionSupport
    var titleBar: TitleBarButtons
    var groupStatus: GroupStatusReasonsPage
    var tier1TenantConfiguration: Tier1TenantConfiguration
    var tenancy : TenantConfigurationPage
    var originalTimeout: number
    

    beforeEach(async function(){
        curBrowser = browser
        loginPage = new LoginPage (browser)
        editingControl = new EditingControl (browser)
        actionPopup = new ActionPopup (browser)
        titleBar = new TitleBarButtons(browser)
        groupStatus = new GroupStatusReasonsPage(browser)
        actionSupport = new ActionSupport(browser)
        tier1TenantConfiguration = new Tier1TenantConfiguration (browser)
        tenancy = new TenantConfigurationPage (browser)
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ("Should add the group break reason successfully", async function(){
        await actionSupport.startBrowser()
        await loginPage.login()
        await tier1TenantConfiguration.navigateToTenantConfiguration()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await groupStatus.navigateToGroup_BreakReasons()
        await editingControl.clickAdd()
        await actionPopup.showPopup('add')
        await groupStatus.inputData_StatusReasons('txtStatusReason','Group break reason')
        await groupStatus.inputData_StatusReasons('txtDescription','This group break reason is created by script')
        await actionPopup.clickSaveAndAddAnother_btn()
        await actionPopup.showPopup('add')
        await groupStatus.inputData_StatusReasons('txtStatusReason','Group break reason 1')
        await groupStatus.inputData_StatusReasons('txtDescription','This group break reason is created by script')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    it ("Should edit the group break status reason successfully", async function(){
        await actionSupport.startBrowser()
        await loginPage.login()
        await tier1TenantConfiguration.navigateToTenantConfiguration()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await groupStatus.navigateToGroup_BreakReasons()
        await groupStatus.selectStt('Group break reason 1')
        await editingControl.clickEdit()
        await actionPopup.showPopup('edit')
        await groupStatus.inputData_StatusReasons('txtStatusReason','Group break reason 1 Edited')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    it ("Should delete the group break status reason successfully", async function(){
        await actionSupport.startBrowser()
        await loginPage.login()
        await tier1TenantConfiguration.navigateToTenantConfiguration()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await groupStatus.navigateToGroup_BreakReasons()
        await groupStatus.selectStt('Group break reason 1 Edited')
        await editingControl.clickDelete()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

})