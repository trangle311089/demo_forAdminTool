import { ProtractorBrowser, browser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { async } from "q";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";
import { HandleMenu } from "../../../CommonSupport/HandleMenu";
import { GroupProfile } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";
import { HandlePopup } from "../../../CommonSupport/HandlePopup";
import { HandleDateTime } from "../../../CommonSupport/HandleDateTime";


describe('Group Schedule Login', function(){
    let loginPage: LoginPage
    let tenancy: TenantConfigurationPage
    let handleEditingControl: HandleEditingControl
    let handleMenu: HandleMenu
    let handlePopup: HandlePopup
    let handleDateTime: HandleDateTime

    beforeEach(async function(){
        loginPage = new LoginPage(browser)
        tenancy = new TenantConfigurationPage (browser)
        handleMenu = new HandleMenu (browser)
        handlePopup = new HandlePopup (browser)
        handleEditingControl = new HandleEditingControl (browser)
        handleDateTime = new HandleDateTime (browser)

        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await handleEditingControl.clickEdit()
        await handleMenu.selectGroupsList()
        await handleEditingControl.selectEntryOnGrid('Default')
        await handleEditingControl.clickEdit()
    })

    fit ('Should input date successfully', async function(){
        await handleMenu.selectGroup_LoginSchedule()
        await handleDateTime.clickEditingControl('data.exceptionGrid','fa fa-plus-circle add')
        await handleDateTime.inputDate('dtExpiryDate','24 May 2019')
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await handleDateTime.verifyAddExceptionDateSuccessfully('24 May 2019','09:00 AM' )
    })

    it ("Should be able to select the year, month, day, time, ampm, recurring for Group Exception", async function(){
        await handleMenu.selectGroup_LoginSchedule()
        await handleDateTime.clickEditingControl('data.exceptionGrid','fa fa-plus-circle add')
        await handleDateTime.selectYearMonthDay('2019','July','29')
        await handleDateTime.selectTime('txtStartTime','10','00')
        await handleDateTime.selectTime('txtEndTime','11','00')
        await handleDateTime.switchToAMPM('txtEndTime','PM')
        await handleDateTime.selectRecurring()
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await handleDateTime.verifyAddExceptionDateSuccessfully('29 Jul 2019','10:00 AM')
    })

    it ("Should be able to select day of week, startTime, endTime for Group Routine", async function(){
        await handleMenu.selectGroup_LoginSchedule()
        await handleDateTime.clickEditingControl('data.routineGrid','fa fa-plus-circle add')
        await handleDateTime.selectDayOfWeek('Tuesday')
        await handleDateTime.selectTime('txtStartTime','10','00')
        await handleDateTime.selectTime('txtEndTime','11','00')
        await handleDateTime.switchToAMPM('txtEndTime','PM')
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await handleDateTime.verifyAddRoutineScheduleSuccessfully('Tuesday', '10:00 AM')
    })
})