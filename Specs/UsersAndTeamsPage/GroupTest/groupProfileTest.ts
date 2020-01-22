import { async } from "q";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { browser } from "protractor";
import { GroupProfile } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";
import { HandlePopup } from "../../../CommonSupport/HandlePopup";
import { HandleMenu } from "../../../CommonSupport/HandleMenu";
import { HandleBreadcrumb } from "../../../CommonSupport/HandleBreadcrumb";
import groupdata from "../../../TestData/groupProfileData.json"
import { HandleValidation } from "../../../CommonSupport/HandleValidation";

describe("Group Profile ", function(){
    let loginPage: LoginPage
    let handleEditingControl: HandleEditingControl
    let groupProfilePage: GroupProfile
    let handlePopup: HandlePopup
    let tenancy: TenantConfigurationPage
    let handleMenu: HandleMenu
    let breadcrumb: HandleBreadcrumb

    beforeEach (async function(){
        loginPage = new LoginPage (browser)
        handleEditingControl = new HandleEditingControl (browser)
        groupProfilePage = new GroupProfile (browser)
        handlePopup = new HandlePopup (browser)
        tenancy = new TenantConfigurationPage(browser)
        handleMenu = new HandleMenu (browser)
        breadcrumb = new HandleBreadcrumb (browser)
        console.log ("STEP 1 - Launch the Admin Tool and click on SIGN IN button")
        await loginPage.login()
        console.log("STEP 2 - Select the existing tenancy")
        await tenancy.selectTenancy('1001')
        console.log ("STEP 3 - Click on the edit option")
        await handleEditingControl.clickEdit()
        console.log ("STEP 4 - Navigate to the group list")
        await handleMenu.selectGroupsList()
    })

    it ("Should add new group successfully ", async function(){
        let group = groupdata["TC01"]
        let groupName = group.groupName
        let groupDescription = group.description
        console.log ("STEP 5 - Click on the add option")
        await handleEditingControl.clickAdd()
        console.log ("STEP 6 - Input the group name, group description")
        await groupProfilePage.createNewGroup(groupName, groupDescription)
        console.log ("STEP 7 - Click on the SAVE button on the title bar")
        await handleEditingControl.clickSaveCancel_btn('Save')
        console.log ("STEP 8 - Return to the group list")
        await breadcrumb.selectBreadcrumb('Groups')
        console.log ("STEP 9 - Verify new group displayed on the group list")
        await handleEditingControl.verifyDisplayedEntry('Group 1')
    })

    it ("Should edit group profile successfully", async function(){
        let group = groupdata["TC02"]
        let groupName = group.groupName
        let groupDescription = group.description
        console.log ("STEP 5 - Select the existing group")
        await handleEditingControl.selectEntryOnTier1Grid('Group 1')
        console.log ("STEP 6 - Click on the edit option")
        await handleEditingControl.clickEdit()
        console.log ("STEP 7 - Update the group name, group description")
        await groupProfilePage.createNewGroup(groupName, groupDescription)
        console.log ("STEP 8 - Click on the SAVE button on the title bar")
        await handleEditingControl.clickSaveCancel_btn('Save')
        console.log ("STEP 9 - Return to the group list")
        await breadcrumb.selectBreadcrumb('Groups')
        console.log ("STEP 10 - Verify the group is updated successfully")
        await handleEditingControl.verifyDisplayedEntry('Group 2')
    })

    it ("Should delete the group successfully", async function(){
        console.log ("STEP 5 - Select the existing group")
        await handleEditingControl.selectEntryOnTier1Grid('Group 2')
        console.log ("STEP 6 - Click on the delete option")  
        await handleEditingControl.clickDelete()
        console.log ("STEP 7 - Click on the delete button on the ATTENTION popup")
        await handlePopup.clickYesDel('delete')
        console.log ("STEP 8 - Click on the delete button on the ATTENTION popup")
        await handlePopup.clickYesDel('delete')
        console.log ("STEP 9 - Verify the selected group is deleted successfully")
        await handleEditingControl.verifyRemoveSuccessfully('Group 2')
    })

    fit ("Should validate when the group name field is empty", async function (){
        console.log ("STEP 5 - Click on the add option")
        await handleEditingControl.clickAdd()
        console.log ("STEP 6 - Click on the SAVE button on the title bar")
        await handleEditingControl.clickSaveCancel_btn('Save')
        console.log ("STEP 7 - Verify the group name field should be bordered in red and Required field msg should be displayed")
        await groupProfilePage.validateGroupNameEmpty()
        
    })
})