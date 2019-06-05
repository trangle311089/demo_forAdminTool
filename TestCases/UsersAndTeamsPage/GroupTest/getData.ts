import { async, timeout } from "q";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { browser } from "protractor";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";
import { GroupProfile } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";
import { GroupListPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupListPage";
import { ActionSupport } from "../../../core_function/actionSupport";
import { Tier1UsersAndTeams } from "../../../admin_core_menu/tier1Menu/tier1UsersAndTeams";
import { TitleBarButtons } from "../../../admin_core_function/titleBarButtons/titleBarButtons";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { Tier1TenantConfiguration } from "../../../admin_core_menu/tier1Menu/tier1TenantConfiguration";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { dataBuilder } from "../../../core_function/dataBuilder";

describe("get data from file", function(){
    var loginPage: LoginPage
    var editingControl: EditingControl
    var groupProfilePage: GroupProfile
    var groupListPage: GroupListPage
    var actionSupport: ActionSupport
    var tier1UsersAndTeams: Tier1UsersAndTeams
    var titleBar_btn: TitleBarButtons
    var actionPopup: ActionPopup
    var tier1TenantConfiguration: Tier1TenantConfiguration
    var tenancy: TenantConfigurationPage
    var dataArray
    
    var originalTimeout: number

    beforeEach(async function(){
        loginPage = new LoginPage(browser)
        editingControl = new EditingControl (browser)
        groupProfilePage = new GroupProfile (browser)
        groupListPage = new GroupListPage (browser)
        actionSupport = new ActionSupport (browser)
        tier1UsersAndTeams = new Tier1UsersAndTeams (browser)
        titleBar_btn = new TitleBarButtons (browser)
        actionPopup = new ActionPopup (browser)
        tier1TenantConfiguration = new Tier1TenantConfiguration (browser)
        tenancy = new TenantConfigurationPage (browser)
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ("create new group successfully by getting data from file", async function(){
        dataArray = await dataBuilder.readExcel("D:/Working/ProtractorAdminTool/demo_forAdminTool/TestData/group.xlsx","createGroup","TC02")
        await actionSupport.startBrowser()

        debugger
        var groupName = dataArray[0].get("Group name") || ''
        var description = dataArray[0].get("Description")

        debugger
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await tier1UsersAndTeams.navigateToUsersAndTeams()
        await tier1UsersAndTeams.navigateToGroupsList()
        await editingControl.clickAdd()
        await groupProfilePage.createNewGroup(groupName,description)
        await titleBar_btn.clickSaveCancel_btn('Save')
        await titleBar_btn.waitForSavingTxt()
    })

    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

    
})