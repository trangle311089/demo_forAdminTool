import { async } from "q";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { browser } from "protractor";
import { GroupProfile } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";
import { HandlePopup } from "../../../CommonSupport/HandlePopup";
import { HandleMenu } from "../../../CommonSupport/HandleMenu";
import { HandleBreadcrumb } from "../../../CommonSupport/HandleBreadcrumb";

describe("Group List", function(){
    let loginPage: LoginPage
    let handleEditingControl: HandleEditingControl
    let groupProfilePage: GroupProfile
    let handlePopup: HandlePopup
    let tenancy: TenantConfigurationPage
    let handleMenu: HandleMenu

    beforeEach (async function(){
        loginPage = new LoginPage (browser)
        handleEditingControl = new HandleEditingControl (browser)
        groupProfilePage = new GroupProfile (browser)
        handlePopup = new HandlePopup (browser)
        tenancy = new TenantConfigurationPage(browser)
        handleMenu = new HandleMenu (browser)
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await handleEditingControl.clickEdit()
    })

    it ("Should add new group successfully ", async function(){
        await handleMenu.selectGroupsList()
        await handleEditingControl.clickAdd()
        await groupProfilePage.createNewGroup("Automation Group", "This group is created by automation script")
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await handleEditingControl.verifySaveSuccessfully()
    })

    it ("Should edit group name and description successfully", async function(){
        await handleMenu.selectGroupsList()
        await groupProfilePage.selectGroup('Automation Group')
        await handleEditingControl.clickEdit()
        await groupProfilePage.createNewGroup("Updated _ Automation Group Name", "Updated_This group is edited by script")
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(3000)
        await handleEditingControl.verifySaveSuccessfully()
    })

    it ("Should delete the group successfully", async function(){
        await handleMenu.selectGroupsList()      
        await groupProfilePage.selectGroup('Updated _ Automation Group Name')  
        await handleEditingControl.clickDelete()
        await handlePopup.clickYesDel('delete')
        await handlePopup.clickYesDel('delete')
    })
})