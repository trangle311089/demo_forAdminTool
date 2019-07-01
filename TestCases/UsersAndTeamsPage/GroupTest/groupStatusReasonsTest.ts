import { ProtractorBrowser, browser } from "protractor";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { async } from "q";
import { ActionSupport } from "../../../core_function/actionSupport";
import { GroupStatusReasonsPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupStatusReasonsPage";

import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { HandleMenu } from "../../../CommonSupport/HandleMenu";
import { HandlePopup } from "../../../CommonSupport/HandlePopup";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";
import { GroupProfile } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";

describe ("Group Status Reason", function(){
    let loginPage: LoginPage
    let groupStatus: GroupStatusReasonsPage
    let tenancy : TenantConfigurationPage
    let handleMenu: HandleMenu
    let handlePopup: HandlePopup
    let handleEditingControl: HandleEditingControl
    let groupProfile: GroupProfile
    
    
    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        groupStatus = new GroupStatusReasonsPage(browser)
        tenancy = new TenantConfigurationPage (browser)
        handleMenu = new HandleMenu (browser)
        handlePopup = new HandlePopup (browser)
        handleEditingControl = new HandleEditingControl(browser)
        groupProfile = new GroupProfile (browser)

        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await handleEditingControl.clickEdit()
        await handleMenu.selectGroupsList()
        await groupProfile.selectGroup('Default')
        await handleEditingControl.clickEdit()        
     })

    it ("Should add the group break reason successfully", async function(){
        await handleMenu.selectGroupStatus_BreakReason()
        await handleEditingControl.clickAdd()
        await groupStatus.inputData_StatusReasons('txtStatusReason','Group break reason')
        await groupStatus.inputData_StatusReasons('txtDescription','This group break reason is created by script')
        await handlePopup.clickSaveAndAddAnother()
        await groupStatus.inputData_StatusReasons('txtStatusReason','Group break reason 1')
        await groupStatus.inputData_StatusReasons('txtDescription','This group break reason is created by script')
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await groupStatus.verifyDisplayedStt('Group break reason')
    })

    it ("Should edit the group break status reason successfully", async function(){
        await handleMenu.selectGroupStatus_BreakReason()
        await groupStatus.selectStt('Group break reason 1')
        await handleEditingControl.clickEdit()
        await groupStatus.inputData_StatusReasons('txtStatusReason','Group break reason 1 Edited')
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await groupStatus.verifyDisplayedStt('Group break reason 1 Edited')
    })

    it ("Should delete the group break status reason successfully", async function(){
        await handleMenu.selectGroupStatus_BreakReason()
        await groupStatus.selectStt('Group break reason 1 Edited')
        await handleEditingControl.clickDelete()
        await handlePopup.clickYesDel('delete')
        await handlePopup.clickYesDel('delete')
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await handleEditingControl.verifySaveSuccessfully()
    })

})