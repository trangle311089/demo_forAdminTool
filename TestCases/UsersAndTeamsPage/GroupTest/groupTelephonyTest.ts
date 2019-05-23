import { LoginPage } from "../../../PageObjects/LoginPage";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";
import { DDLSupport } from "../../../admin_core_function/dropdownlist/ddlSupport";
import { async } from "q";
import { browser } from "protractor";
import { TitleBarButtons } from "../../../admin_core_function/titleBarButtons/titleBarButtons";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { GroupTelephonyPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupTelephonyPage";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";

describe("Group Telephony", function(){
    var loginPage: LoginPage
    var editingControl: EditingControl
    var ddlSupport: DDLSupport
    var titleBar : TitleBarButtons
    var actionPopup: ActionPopup
    var groupTelephony: GroupTelephonyPage
    var actionSupport: ActionSupport

    var originalTimeout: number

    beforeEach(async function(){
        loginPage = new LoginPage(browser)
        editingControl = new EditingControl(browser)
        ddlSupport = new DDLSupport(browser)
        titleBar = new TitleBarButtons(browser)
        actionPopup = new ActionPopup (browser)
        groupTelephony = new GroupTelephonyPage (browser)
        actionSupport = new ActionSupport (browser)

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ("Should assign the outbound call and music on hold to group successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
        await loginPage.login()
        await groupTelephony.navigateToGroup_TelephonyGeneralPage()
        await ddlSupport.clickOnDDL('post2Prompt')
        await ddlSupport.selectByVisibleText('+01224217688')
        await ddlSupport.clickOnDDL('onHoldPrompt')
        await ddlSupport.selectByVisibleText('holdMusic')
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    //  Group Telephony - PSTN Agent Connection
    it ("Should add the group PSTN successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()       
        await loginPage.login()
        await groupTelephony.navigateToGroup_TelephonyPSTN()
        await editingControl.clickAdd()
        await actionPopup.showPopup('add')
        await groupTelephony.inputData_Telephony('txtPhoneNumber','+01224217688')
        await groupTelephony.inputData_Telephony('txtDescription','This PSTN is created by script')
        await actionPopup.clickSaveAndAddAnother_btn()
        await actionPopup.showPopup('add')
        await groupTelephony.inputData_Telephony('txtPhoneNumber','+0932093963')
        await groupTelephony.inputData_Telephony('txtDescription','This PSTN is created by script')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })
    
    it ("Should edit the group PSTN successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()       
        await loginPage.login()
        await groupTelephony.navigateToGroup_TelephonyPSTN()
        await groupTelephony.selectPSTN('+0932093963')
        await editingControl.clickEdit()
        await actionPopup.showPopup('edit')
        await groupTelephony.inputData_Telephony('txtPhoneNumber','+84932093963')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    it ("Should delete the group PSTN successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()       
        await loginPage.login()
        await groupTelephony.navigateToGroup_TelephonyPSTN()
        await groupTelephony.selectPSTN('+84932093963')
        await editingControl.clickDelete()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    //Group Telephony - Dial Plan
    it ("Should update the global dial plan collection successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
        await loginPage.login()
        await groupTelephony.navigateToGroup_TelephonyDialPlan()
        await ddlSupport.clickOnDDL('dialPlanCollection')
        await ddlSupport.selectByVisibleText('dialPlanCollection')
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    it ('Should add group dialplan successfully', async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
        await loginPage.login()
        await groupTelephony.navigateToGroup_TelephonyDialPlan()
        await editingControl.clickAdd()
        await actionPopup.showPopup('add')
        await groupTelephony.inputData_Telephony('txtDialString','0123456789')
        await groupTelephony.inputData_Telephony('txtMinLength','10')
        await groupTelephony.inputData_Telephony('txtMaxLength','10')
        await groupTelephony.inputData_Telephony('txtDescription','This group dial plan is created by script')
        await actionPopup.clickSaveAndAddAnother_btn()
        await actionPopup.showPopup('add')
        await groupTelephony.inputData_Telephony('txtDialString','012345678910')
        await groupTelephony.inputData_Telephony('txtMinLength','15')
        await groupTelephony.inputData_Telephony('txtMaxLength','15')
        await groupTelephony.inputData_Telephony('txtDescription','This group dial plan is created by script')
        await groupTelephony.selectPermission('rdDeny')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    it('Should edit the group dial plan successfully', async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
        await loginPage.login()
        await groupTelephony.navigateToGroup_TelephonyDialPlan()
        await groupTelephony.selectDialPlan('0123456789')
        await editingControl.clickEdit()
        await actionPopup.showPopup('edit')
        await groupTelephony.inputData_Telephony('txtDialString','012345678')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    it ('Should delete the group dial plan successfully', async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
        await loginPage.login()
        await groupTelephony.navigateToGroup_TelephonyDialPlan()
        await groupTelephony.selectDialPlan('012345678')
        await editingControl.clickDelete()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    it ('Should get validation message when the min length is greater than max length', async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
        await loginPage.login()
        await groupTelephony.navigateToGroup_TelephonyDialPlan()
        await editingControl.clickAdd()
        await actionPopup.showPopup('add')
        await groupTelephony.inputData_Telephony('txtDialString','012345678910')
        await groupTelephony.inputData_Telephony('txtMinLength','15')
        await groupTelephony.inputData_Telephony('txtMaxLength','12')
        await groupTelephony.inputData_Telephony('txtDescription','This group dial plan is created by script')
        await actionPopup.clickSaveAndAddAnother_btn()
        await groupTelephony.getValidationMessage('invalidMinAndMaxLength','Min length is greater than Max length')
    })    

    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })
})