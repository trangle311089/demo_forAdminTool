import { LoginPage } from "../../../PageObjects/LoginPage";
import { browser } from "protractor";
import { GroupProfile } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { dataBuilder } from "../../../core_function/dataBuilder";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";
import { HandleMenu } from "../../../CommonSupport/HandleMenu";
import { HandleBreadcrumb } from "../../../CommonSupport/HandleBreadcrumb";

describe("get data from file", function(){
    let loginPage: LoginPage
    let groupProfilePage: GroupProfile
    let tenancy: TenantConfigurationPage
    let dataArray
    let handleEditingControl: HandleEditingControl
    let handleMenu: HandleMenu
    let handleBreadcrumb: HandleBreadcrumb
    
    beforeEach(async function(){
        loginPage = new LoginPage(browser)
        groupProfilePage = new GroupProfile (browser)
        tenancy = new TenantConfigurationPage (browser)
        handleEditingControl = new HandleEditingControl (browser)
        handleMenu = new HandleMenu (browser)
        handleBreadcrumb = new HandleBreadcrumb (browser)
    })

    it (" Should create new group successfully by getting data from file", async function(){
        dataArray = await dataBuilder.readExcel(__dirname + "..\\..\\..\\..\\TestData\\group.xlsx","createGroup","TC01")
        let groupName = dataArray[0].get("Group name") || ''
        let description = dataArray[0].get("Description")
        debugger
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await handleEditingControl.clickEdit()
        await handleMenu.selectGroupsList()
        await handleEditingControl.clickAdd()
        await groupProfilePage.createNewGroup(groupName,description)
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep (2000)
        await handleBreadcrumb.selectBreadcrumb("Groups")
        await handleEditingControl.verifyAddSuccessfully("Group UI Automation")
    })
   
})