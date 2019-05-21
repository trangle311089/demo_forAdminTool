import { LoginPage } from "../../../PageObjects/LoginPage";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";
import { Tier1Menu } from "../../../admin_core_menu/tier1Menu/tier1Menu";
import { DDLSupport } from "../../../admin_core_function/dropdownlist/ddlSupport";
import { async } from "q";
import { browser } from "protractor";
import { GroupListPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupListPage";
import { TitleBarButtons } from "../../../admin_core_function/titleBarButtons/titleBarButtons";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { GroupTelephonyPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupTelephonyPage";

describe("Group Telephony", function(){
    var loginPage: LoginPage
    var tenancy: TenantConfigurationPage
    var editingControl: EditingControl
    var tier1Menu: Tier1Menu
    var ddlSupport: DDLSupport
    var groupList: GroupListPage
    var titleBar : TitleBarButtons
    var actionPopup: ActionPopup
    var groupTelephony: GroupTelephonyPage

    var originalTimeout: number

    beforeEach(async function(){
        loginPage = new LoginPage(browser)
        tenancy = new TenantConfigurationPage(browser)
        editingControl = new EditingControl(browser)
        tier1Menu = new Tier1Menu(browser)
        ddlSupport = new DDLSupport(browser)
        groupList = new GroupListPage (browser)
        titleBar = new TitleBarButtons(browser)
        actionPopup = new ActionPopup (browser)
        groupTelephony = new GroupTelephonyPage (browser)

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ("should assign the outbound call to group successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')

        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')

        await groupList.selectGroup('Default')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Ver('Telephony')
        await tier1Menu.navigateToTier1Ver('Telephony')

        await tier1Menu.presenceOfTier1Hor('General')
        await tier1Menu.navigateToTier1Hor('General')

        await ddlSupport.clickOnDDL('post2Prompt')
        await ddlSupport.selectByVisibleText('+01224217688')

        await ddlSupport.clickOnDDL('onHoldPrompt')
        await ddlSupport.selectByVisibleText('holdMusic')

        await titleBar.clickSaveCancel_btn('Save')
        await expect(titleBar.waitForSavingTxt())
    })

    // Telephony - PSTN Agent Connection
    it("should add the group pstn successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Telephony')
        await tier1Menu.navigateToTier1Ver('Telephony') 
        await tier1Menu.presenceOfTier1Hor('PSTN Agent Connection')
        await tier1Menu.navigateToTier1Hor('PSTN Agent Connection')

        await editingControl.clickAdd()
        await actionPopup.showPopup('add')
        await groupTelephony.inputValue('txtPhoneNumber','+01224217688')
        await groupTelephony.inputValue('txtDescription','This PSTN is created by script')
        await actionPopup.clickSaveAndAddAnother_btn()
        await actionPopup.showPopup('add')
        await groupTelephony.inputValue('txtPhoneNumber','+0932093963')
        await groupTelephony.inputValue('txtDescription','This PSTN is created by script')
        await actionPopup.clickSaveAndClose_btn()

        await titleBar.clickSaveCancel_btn('Save')
        await expect(titleBar.waitForSavingTxt())
    })
    
    it("should edit the group pstn successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Telephony')
        await tier1Menu.navigateToTier1Ver('Telephony') 
        await tier1Menu.presenceOfTier1Hor('PSTN Agent Connection')
        await tier1Menu.navigateToTier1Hor('PSTN Agent Connection')

        await groupTelephony.selectPSTN('+0932093963')
        await editingControl.clickEdit()
        await actionPopup.showPopup('edit')
        await groupTelephony.inputValue('txtPhoneNumber','+84932093963')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await expect (titleBar.waitForSavingTxt())
    })

    it ("should delete the group pstn successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Telephony')
        await tier1Menu.navigateToTier1Ver('Telephony') 
        await tier1Menu.presenceOfTier1Hor('PSTN Agent Connection')
        await tier1Menu.navigateToTier1Hor('PSTN Agent Connection')

        await groupTelephony.selectPSTN('+84932093963')
        await editingControl.clickDelete()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')

        await titleBar.clickSaveCancel_btn('Save')
        await expect (titleBar.waitForSavingTxt())

    })

    //Group Telephony - Dial Plan
    it("should update the global dial plan collection successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Telephony')
        await tier1Menu.navigateToTier1Ver('Telephony') 
        await tier1Menu.presenceOfTier1Hor('Dial Plan')
        await tier1Menu.navigateToTier1Hor('Dial Plan')

        await ddlSupport.clickOnDDL('dialPlanCollection')
        await ddlSupport.selectByVisibleText('dialPlanCollection')
        await titleBar.clickSaveCancel_btn('Save')
        await expect(titleBar.waitForSavingTxt())
    })

    it('should add group dialplan successfully', async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Telephony')
        await tier1Menu.navigateToTier1Ver('Telephony') 
        await tier1Menu.presenceOfTier1Hor('Dial Plan')
        await tier1Menu.navigateToTier1Hor('Dial Plan')

        await editingControl.clickAdd()
        await actionPopup.showPopup('add')
        await groupTelephony.inputValue('txtDialString','0123456789')
        await groupTelephony.inputValue('txtMinLength','10')
        await groupTelephony.inputValue('txtMaxLength','10')
        await groupTelephony.inputValue('txtDescription','This group dial plan is created by script')
        await actionPopup.clickSaveAndAddAnother_btn()

        await actionPopup.showPopup('add')
        await groupTelephony.inputValue('txtDialString','012345678910')
        await groupTelephony.inputValue('txtMinLength','15')
        await groupTelephony.inputValue('txtMaxLength','15')
        await groupTelephony.inputValue('txtDescription','This group dial plan is created by script')
        await groupTelephony.selectPermission('rdDeny')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await expect(titleBar.waitForSavingTxt())
    })

    it('should edit the group dial plan successfully', async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Telephony')
        await tier1Menu.navigateToTier1Ver('Telephony') 
        await tier1Menu.presenceOfTier1Hor('Dial Plan')
        await tier1Menu.navigateToTier1Hor('Dial Plan')

        await groupTelephony.selectDialPlan('0123456789')
        await editingControl.clickEdit()
        await actionPopup.showPopup('edit')
        await groupTelephony.inputValue('txtDialString','012345678')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await expect (titleBar.waitForSavingTxt())
    })

    it('should delete the group dial plan successfully', async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Telephony')
        await tier1Menu.navigateToTier1Ver('Telephony') 
        await tier1Menu.presenceOfTier1Hor('Dial Plan')
        await tier1Menu.navigateToTier1Hor('Dial Plan')

        await groupTelephony.selectDialPlan('012345678')
        await editingControl.clickDelete()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')

        await titleBar.clickSaveCancel_btn('Save')
        await expect (titleBar.waitForSavingTxt())
    })

    it('should get validation message', async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Telephony')
        await tier1Menu.navigateToTier1Ver('Telephony') 
        await tier1Menu.presenceOfTier1Hor('Dial Plan')
        await tier1Menu.navigateToTier1Hor('Dial Plan') 

        await editingControl.clickAdd()
        await actionPopup.showPopup('add')
        await groupTelephony.inputValue('txtDialString','012345678910')
        await groupTelephony.inputValue('txtMinLength','15')
        await groupTelephony.inputValue('txtMaxLength','12')
        await groupTelephony.inputValue('txtDescription','This group dial plan is created by script')
        await actionPopup.clickSaveAndAddAnother_btn()
        await expect (groupTelephony.getValidationMessage('invalidMinAndMaxLength','Min length is greater than Max length'))
    })


    

    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })
})