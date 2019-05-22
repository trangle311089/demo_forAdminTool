import { async } from "q";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { browser } from "protractor";
import { TitleBarButtons } from "../../../admin_core_function/titleBarButtons/titleBarButtons";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { GroupProfile } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";
import { GroupListPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupListPage";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { Tier1UsersAndTeams } from "../../../admin_core_menu/tier1Menu/tier1UsersAndTeams";

describe("Group List", function(){
    var loginPage: LoginPage
    var editingControl: EditingControl
    var groupProfilePage: GroupProfile
    var groupListPage: GroupListPage
    var actionSupport:ActionSupport
    var tier1UsersAndTeams: Tier1UsersAndTeams

    var titleBar_btn: TitleBarButtons
    var actionPopup: ActionPopup
    
    var originalTimeout: number

    beforeEach (async function(){
        loginPage = new LoginPage (browser)
        editingControl = new EditingControl (browser)
        groupListPage = new GroupListPage (browser)
        groupProfilePage = new GroupProfile (browser)
        titleBar_btn = new TitleBarButtons (browser)
        actionPopup = new ActionPopup (browser)
        actionSupport = new ActionSupport (browser)
        tier1UsersAndTeams = new Tier1UsersAndTeams (browser)
 
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ("Should naviagte to the Users and Teams - Groups list", async function(){
        await actionSupport.startBrowser()
        await loginPage.login()
        await tier1UsersAndTeams.navigateToUsersAndTeams()
        await tier1UsersAndTeams.navigateToGroupsList()      
    })

    it ("Should add new group successfully ", async function(){
        await actionSupport.startBrowser()
        await loginPage.login()
        await tier1UsersAndTeams.navigateToUsersAndTeams()
        await tier1UsersAndTeams.navigateToGroupsList()
        await editingControl.clickAdd()
        await groupProfilePage.createNewGroup("Automation Group", "This group is created by automation script")
        await titleBar_btn.clickSaveCancel_btn('Save')
        await titleBar_btn.waitForSavingTxt()
    })

    it ("Should edit group name and description successfully", async function(){
        await actionSupport.startBrowser()
        await loginPage.login()
        await tier1UsersAndTeams.navigateToUsersAndTeams()
        await tier1UsersAndTeams.navigateToGroupsList()
        await groupListPage.selectGroup('Automation Group')
        await editingControl.clickEdit()
        await groupProfilePage.createNewGroup("Updated _ Automation Group Name", "Updated_This group is edited by script")
        await titleBar_btn.clickSaveCancel_btn('Save')
        await titleBar_btn.waitForSavingTxt()
    })

    it ("Should delete the group successfully", async function(){
        await actionSupport.startBrowser()
        await loginPage.login()
        await tier1UsersAndTeams.navigateToUsersAndTeams()
        await tier1UsersAndTeams.navigateToGroupsList()      
        await groupListPage.selectGroup('Updated _ Automation Group Name')  
        await editingControl.clickDelete()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await groupListPage.invisibleGroup('Updated _ Automation Group Name')
    })

    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

})