import { ProtractorBrowser, browser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { async } from "q";
import { GroupSchedulePage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupSchedulePage";
import { TitleBarButtons } from "../../../admin_core_function/titleBarButtons/titleBarButtons";

describe('Group Schedule Login', function(){
    var curBrowser: ProtractorBrowser
    var loginPage: LoginPage
    var actionPopup: ActionPopup
    var groupSchedule: GroupSchedulePage
    var titleBar: TitleBarButtons
    var actionSupport: ActionSupport

    var originalTimeout: number

    beforeEach(async function(){
        curBrowser = browser
        loginPage = new LoginPage(browser)
        actionPopup = new ActionPopup (browser)
        groupSchedule = new GroupSchedulePage (browser)
        titleBar = new TitleBarButtons(browser)
        actionSupport = new ActionSupport (browser)

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it('Should input date successfully', async function(){
        await actionSupport.startBrowser()
        await loginPage.login ()
        await groupSchedule.navigateToGroupSchedule()
        await groupSchedule.clickEditingControl('data.exceptionGrid','fa fa-plus-circle add')
        await actionPopup.showPopup('add')
        await groupSchedule.inputDate('dtExpiryDate','24 May 2019')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    it ("Should be able to select the year, month, day, time, ampm, recurring for Group Exception", async function(){
        await actionSupport.startBrowser()
        await loginPage.login ()
        await groupSchedule.navigateToGroupSchedule()
        await groupSchedule.clickEditingControl('data.exceptionGrid','fa fa-plus-circle add')
        await actionPopup.showPopup('add')
        await groupSchedule.selectYearMonthDay('2019','May','28')
        await groupSchedule.selectTime('txtStartTime','10','00')
        await groupSchedule.selectTime('txtEndTime','11','00')
        await groupSchedule.switchToAMPM('txtEndTime','PM')
        await groupSchedule.selectRecurring()
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    it ("Should be able to select day of week, startTime, endTime for Group Routine", async function(){
        await actionSupport.startBrowser()
        await loginPage.login ()
        await groupSchedule.navigateToGroupSchedule()
        await groupSchedule.clickEditingControl('data.routineGrid','fa fa-plus-circle add')
        await actionPopup.showPopup('add')
        await groupSchedule.selectDayOfWeek('Tuesday')
        await groupSchedule.selectTime('txtStartTime','10','00')
        await groupSchedule.selectTime('txtEndTime','11','00')
        await groupSchedule.switchToAMPM('txtEndTime','PM')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })
})