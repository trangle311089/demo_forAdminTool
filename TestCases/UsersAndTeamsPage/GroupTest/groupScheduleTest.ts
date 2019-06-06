import { ProtractorBrowser, browser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { async } from "q";
import { GroupSchedulePage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupSchedulePage";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";
import { HandleMenu } from "../../../CommonSupport/HandleMenu";
import { GroupProfile } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";
import { HandlePopup } from "../../../CommonSupport/HandlePopup";


describe('Group Schedule Login', function(){
    let curBrowser: ProtractorBrowser
    let loginPage: LoginPage
    let groupSchedule: GroupSchedulePage
    let tenancy: TenantConfigurationPage
   
    let handleEditingControl: HandleEditingControl
    let handleMenu: HandleMenu
    let groupProfile: GroupProfile
    let handlePopup: HandlePopup

    beforeEach(async function(){
        curBrowser = browser
        loginPage = new LoginPage(browser)
        groupSchedule = new GroupSchedulePage (browser)

        tenancy = new TenantConfigurationPage (browser)
        handleMenu = new HandleMenu (browser)
        groupProfile = new GroupProfile (browser)
        handlePopup = new HandlePopup (browser)
        handleEditingControl = new HandleEditingControl (browser)

        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await handleEditingControl.clickEdit()
        await handleMenu.selectGroupsList()
        await groupProfile.selectGroup('Default')
        await handleEditingControl.clickEdit()
   
    })

    it ('Should input date successfully', async function(){
        await handleMenu.selectGroup_LoginSchedule()
        await groupSchedule.clickEditingControl('data.exceptionGrid','fa fa-plus-circle add')
        await handlePopup.showPopup('add')
        await groupSchedule.inputDate('dtExpiryDate','24 May 2019')
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await groupSchedule.verifyDisplayedDate('24 May 2019')
    })

    it ("Should be able to select the year, month, day, time, ampm, recurring for Group Exception", async function(){
        await handleMenu.selectGroup_LoginSchedule()
        await groupSchedule.clickEditingControl('data.exceptionGrid','fa fa-plus-circle add')
        await handlePopup.showPopup('add')
        await groupSchedule.selectYearMonthDay('2019','July','29')
        await groupSchedule.selectTime('txtStartTime','10','00')
        await groupSchedule.selectTime('txtEndTime','11','00')
        await groupSchedule.switchToAMPM('txtEndTime','PM')
        await groupSchedule.selectRecurring()
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await groupSchedule.verifyDisplayedDate('29 Jul 2019')
    })

    it ("Should be able to select day of week, startTime, endTime for Group Routine", async function(){
        await handleMenu.selectGroup_LoginSchedule()
        await groupSchedule.clickEditingControl('data.routineGrid','fa fa-plus-circle add')
        await handlePopup.showPopup('add')
        await groupSchedule.selectDayOfWeek('Tuesday')
        await groupSchedule.selectTime('txtStartTime','10','00')
        await groupSchedule.selectTime('txtEndTime','11','00')
        await groupSchedule.switchToAMPM('txtEndTime','PM')
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await handleEditingControl.verifySaveSuccessfully()
    })
})