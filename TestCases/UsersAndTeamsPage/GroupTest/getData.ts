import { async, timeout } from "q";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { browser } from "protractor";
import { GroupProfile } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";
import { ActionSupport } from "../../../core_function/actionSupport";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { dataBuilder } from "../../../core_function/dataBuilder";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";
import { HandleMenu } from "../../../CommonSupport/HandleMenu";

describe("get data from file", function(){
    let loginPage: LoginPage
    let groupProfilePage: GroupProfile
    let tenancy: TenantConfigurationPage
    let dataArray

    let handleEditingControl: HandleEditingControl
    let handleMenu: HandleMenu
    

    beforeEach(async function(){
        loginPage = new LoginPage(browser)
        groupProfilePage = new GroupProfile (browser)
        tenancy = new TenantConfigurationPage (browser)
        handleEditingControl = new HandleEditingControl (browser)
        handleMenu = new HandleMenu (browser)
    })

    it (" Should create new group successfully by getting data from file", async function(){
        dataArray = await dataBuilder.readExcel(__dirname + "..\\..\\..\\..\\TestData\\group.xlsx","createGroup","TC02")

        debugger
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
        await handleEditingControl.verifySaveSuccessfully()
    })
   
})