import { ProtractorBrowser, browser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";
import { Tier1Menu } from "../../../admin_core_menu/tier1Menu/tier1Menu";
import { async } from "q";
import { GroupSchedulePage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupSchedulePage";
import { GroupListPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupListPage";
import { TitleBarButtons } from "../../../admin_core_function/titleBarButtons/titleBarButtons";

describe('Group Schedule Login', function(){
    var curBrowser: ProtractorBrowser
    var loginPage: LoginPage
    var tenancy: TenantConfigurationPage
    var editingControl: EditingControl
    var actionSupport: ActionSupport
    var actionPopup: ActionPopup
    var tier1Menu: Tier1Menu
    var groupSchedule: GroupSchedulePage
    var groupList:GroupListPage
    var titleBar: TitleBarButtons

    var originalTimeout: number

    beforeEach(async function(){
        curBrowser = browser
        loginPage = new LoginPage(browser)
        tenancy = new TenantConfigurationPage(browser)
        editingControl = new EditingControl (browser)
        actionSupport = new ActionSupport (browser)
        actionPopup = new ActionPopup (browser)
        tier1Menu = new Tier1Menu (browser)
        groupSchedule = new GroupSchedulePage (browser)
        groupList = new GroupListPage(browser)
        titleBar = new TitleBarButtons(browser)

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it('should select date successfully', async function(){
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
        await tier1Menu.presenceOfTier1Ver('Schedule')
        await tier1Menu.navigateToTier1Ver('Schedule')
        await tier1Menu.presenceOfTier1Hor('Login Schedule')
        await tier1Menu.navigateToTier1Hor('Login Schedule')
        await groupSchedule.clickEditingControl('fa fa-plus-circle add')
        await actionPopup.showPopup('add')
        await groupSchedule.inputDate('October')
        await browser.sleep(2000)
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await expect (titleBar.waitForSavingTxt())

    })

    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })
})