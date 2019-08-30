import { ProtractorBrowser, browser } from "protractor";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { async } from "q";
import { GroupStatusReasonsPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupStatusReasonsPage";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { HandleMenu } from "../../../CommonSupport/HandleMenu";
import { HandlePopup } from "../../../CommonSupport/HandlePopup";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";

describe ("Group Status Reason", function(){
    let loginPage: LoginPage
    let groupStatus: GroupStatusReasonsPage
    let tenancy : TenantConfigurationPage
    let handleMenu: HandleMenu
    let handlePopup: HandlePopup
    let handleEditingControl: HandleEditingControl
      
    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        groupStatus = new GroupStatusReasonsPage(browser)
        tenancy = new TenantConfigurationPage (browser)
        handleMenu = new HandleMenu (browser)
        handlePopup = new HandlePopup (browser)
        handleEditingControl = new HandleEditingControl(browser)
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await handleEditingControl.clickEdit()
        await handleMenu.selectGroupsList()
        await handleEditingControl.selectEntryOnGrid('Default')
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
        await handleEditingControl.verifyAddSuccessfully('Group break reason')
        await handleEditingControl.verifyAddSuccessfully('Group break reason 1')
    })

    it ("Should edit the group break status reason successfully", async function(){
        await handleMenu.selectGroupStatus_BreakReason()
        await handleEditingControl.selectEntryOnGrid('Group break reason')
        await handleEditingControl.clickEdit()
        await groupStatus.inputData_StatusReasons('txtStatusReason','Group break reason edited')
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await handleEditingControl.verifyAddSuccessfully('Group break reason edited')
    })

    it ("Should delete the group break status reason successfully", async function(){
        await handleMenu.selectGroupStatus_BreakReason()
        await handleEditingControl.selectEntryOnGrid('Group break reason edited')
        await handleEditingControl.clickDelete()
        await handlePopup.clickYesDel('delete')
        await handlePopup.clickYesDel('delete')
        await handleEditingControl.selectEntryOnGrid('Group break reason 1')
        await handleEditingControl.clickDelete()
        await handlePopup.clickYesDel('delete')
        await handlePopup.clickYesDel('delete')
        await handleEditingControl.clickSaveCancel_btn('Save')
        await handleEditingControl.verifyRemoveSuccessfully('Group break reason edited')
        await handleEditingControl.verifyRemoveSuccessfully('Group break reason 1')
    })
})