import { async } from "q";
import { Tier1UsersAndTeams } from "../../admin_core_menu/tier1_UsersAndTeams/tier1_UsersAndTeams";
import { EditingControl } from "../../admin_core_function/editingControl/editingControl";
import { LoginPage } from "../../PageObjects/LoginPage";
import { browser } from "protractor";
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage";
import { TitleBarButtons } from "../../admin_core_function/titleBarButtons/titleBarButtons";
import { ActionPopup } from "../../admin_core_popup/actionPopup";
import { GroupProfile } from "../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";
import { GroupListPage } from "../../PageObjects/UsersAndTeamsPage/GroupPage/GroupListPage";

describe("Group List", function(){
    var loginPage: LoginPage
    var tier1UsersAndTeams: Tier1UsersAndTeams
    var editingControl: EditingControl
    var tenantConfigurationPage: TenantConfigurationPage
    var groupProfilePage: GroupProfile
    var groupListPage: GroupListPage

    var titleBar_btn: TitleBarButtons
    var actionPopup: ActionPopup
    
    var originalTimeout: number

    beforeEach (async function(){
        loginPage = new LoginPage (browser)
        tier1UsersAndTeams = new Tier1UsersAndTeams(browser)
        editingControl = new EditingControl (browser)
        groupListPage = new GroupListPage (browser)
        tenantConfigurationPage = new TenantConfigurationPage (browser)
        groupProfilePage = new GroupProfile (browser)
        titleBar_btn = new TitleBarButtons (browser)
        actionPopup = new ActionPopup (browser)

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 800000
    })

    it ("should naviagte to the Users and Teams - Groups list", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenantConfigurationPage.selectTenancy()
        await editingControl.clickEdit()
        await browser.sleep(3000)
        await tier1UsersAndTeams.showUsersAndTeamsMenu()
        await tier1UsersAndTeams.clickUsersAndTeamsMenu()
        await browser.sleep(2000)
        await groupListPage.showGroupsMenu()
        await groupListPage.clickGroupsMenu()
    })

    fit ("should add new group successfully ", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenantConfigurationPage.selectTenancy()
        await editingControl.clickEdit()
        await browser.sleep(3000)
        await tier1UsersAndTeams.showUsersAndTeamsMenu()
        await tier1UsersAndTeams.clickUsersAndTeamsMenu()
        await browser.sleep(5000)
        await groupListPage.showGroupsMenu()
        await groupListPage.clickGroupsMenu()
        await browser.sleep(5000)
        await editingControl.clickAdd()
        await groupProfilePage.createNewGroup("Automation Group", "This group is created by automation script")
        await titleBar_btn.clickSave_btn()
        await browser.sleep(5000)
        await expect (titleBar_btn.waitForSavingTxt())
    })

    it ("should edit group name and description successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenantConfigurationPage.selectTenancy()
        await editingControl.clickEdit()
        await browser.sleep(3000)
        await tier1UsersAndTeams.showUsersAndTeamsMenu()
        await tier1UsersAndTeams.clickUsersAndTeamsMenu()
        await browser.sleep(5000)
        await groupListPage.showGroupsMenu()
        await groupListPage.clickGroupsMenu()
        await browser.sleep(5000)
        await groupListPage.selectGroupEntry()
        await browser.sleep(5000)
        await editingControl.clickEdit()
        await browser.sleep(5000)
        await groupProfilePage.editExistingGroup("Updated_ Automation Group Name", "Updated_This group is edited by script")
        await titleBar_btn.clickSave_btn()
        await browser.sleep(3000)
        await expect (titleBar_btn.waitForSavingTxt())
    })

    it ("should delete the group successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenantConfigurationPage.selectTenancy()
        await editingControl.clickEdit()
        await browser.sleep(3000)
        await tier1UsersAndTeams.showUsersAndTeamsMenu()
        await tier1UsersAndTeams.clickUsersAndTeamsMenu()
        await browser.sleep(3000)
        await groupListPage.showGroupsMenu()
        await groupListPage.clickGroupsMenu()
        await browser.sleep(3000)
        await groupListPage.selectDeletedGroupEntry()  
        await browser.sleep(3000)
        await editingControl.clickDelete()
        await actionPopup.showAttentionPop()
        await actionPopup.clickAttentionDel_btn()
        await browser.sleep(3000)
        await actionPopup.showAttentionPop()
        await actionPopup.clickAttentionDel_btn()

    })

    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

})