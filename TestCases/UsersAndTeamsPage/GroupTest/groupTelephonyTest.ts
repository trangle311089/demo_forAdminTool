import { LoginPage } from "../../../PageObjects/LoginPage";
import { async } from "q";
import { browser } from "protractor";
import { GroupTelephonyPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupTelephonyPage";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { HandleMenu } from "../../../CommonSupport/HandleMenu";
import { HandlePopup } from "../../../CommonSupport/HandlePopup";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";
import { GroupProfile } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";
import { HandleDDL } from "../../../CommonSupport/HandleDDL";

describe("Group Telephony", function(){
    let loginPage: LoginPage
    let groupTelephony: GroupTelephonyPage
    let tenancy : TenantConfigurationPage
    let handleMenu: HandleMenu
    let handleEditingControl: HandleEditingControl
    let groupProfile : GroupProfile
    let handleDDL: HandleDDL
    let handlePopup: HandlePopup

    beforeEach(async function(){
        loginPage = new LoginPage(browser)
        groupTelephony = new GroupTelephonyPage (browser)
        tenancy = new TenantConfigurationPage (browser)
        handleMenu = new HandleMenu(browser)
        handleEditingControl = new HandleEditingControl (browser)
        groupProfile = new GroupProfile (browser)
        handleDDL = new HandleDDL(browser)
        handlePopup = new HandlePopup (browser)

        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await handleEditingControl.clickEdit()
        await handleMenu.selectGroupsList()
        await groupProfile.selectGroup('Default')
        await handleEditingControl.clickEdit()
    })

    // Group Telephony General
    it ("Should assign the outbound call and music on hold to group successfully", async function(){
        console.log ("STEP 1: Navigate to Group Telephony General menu")
        await handleMenu.selectGroupTelephony_General()

        console.log ("STEP 2: Set assign caller id for outbound calls ")
        await handleDDL.clickOnDDL('post2Prompt','+01224217688')

        console.log("STEP 3: Set default music on hold")
        await handleDDL.clickOnDDL('onHoldPrompt', 'holdMusic')

        console.log ("STEP 4: Click on SAVE button on the title bar")
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)

        console.log ("STEP 5: The All changes saved text should be displayed")
        await handleEditingControl.verifySaveSuccessfully()
    })

    //  Group Telephony - PSTN Agent Connection
    it ("Should add the group PSTN successfully", async function(){
        await handleMenu.selectGroupTelephony_PSTN()
        await handleEditingControl.clickAdd()
        await handlePopup.showPopup('add')
        await groupTelephony.inputData_Telephony('txtPhoneNumber','+01224217688')
        await groupTelephony.inputData_Telephony('txtDescription','This PSTN is created by script')
        await handlePopup.clickSaveAndAddAnother()
        await handlePopup.showPopup('add')
        await groupTelephony.inputData_Telephony('txtPhoneNumber','+0932093963')
        await groupTelephony.inputData_Telephony('txtDescription','This PSTN is created by script')
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await groupTelephony.verifyDisplayedPSTN('+01224217688')
        await groupTelephony.verifyDisplayedPSTN('+0932093963')
    })
    
    it ("Should edit the group PSTN successfully", async function(){
        await handleMenu.selectGroupTelephony_PSTN()
        await groupTelephony.selectPSTN('+0932093963')
        await handleEditingControl.clickEdit()
        await handlePopup.showPopup('edit')
        await groupTelephony.inputData_Telephony('txtPhoneNumber','+84932093963')
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await groupTelephony.verifyDisplayedPSTN('+84932093963')
    })

    it ("Should delete the group PSTN successfully", async function(){
        await handleMenu.selectGroupTelephony_PSTN()
        await groupTelephony.selectPSTN('+84932093963')
        await handleEditingControl.clickDelete()
        await handlePopup.showPopup('ATTENTION')
        await handlePopup.clickYesDel('delete')
        await handlePopup.showPopup('ATTENTION')
        await handlePopup.clickYesDel('delete')
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await handleEditingControl.verifySaveSuccessfully()
    })

    //Group Telephony - Dial Plan
    it ("Should update the global dial plan collection successfully", async function(){
        await handleMenu.selectGroupTelephony_DialPlan()
        await handleDDL.clickOnDDL('dialPlanCollection','dialPlanCollection')
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await handleEditingControl.verifySaveSuccessfully()
    })

    it ('Should add group dialplan successfully', async function(){
        await handleMenu.selectGroupTelephony_DialPlan()
        await handleEditingControl.clickAdd()
        await handlePopup.showPopup('add')
        await groupTelephony.inputData_Telephony('txtDialString','0123456789')
        await groupTelephony.inputData_Telephony('txtMinLength','10')
        await groupTelephony.inputData_Telephony('txtMaxLength','10')
        await groupTelephony.inputData_Telephony('txtDescription','This group dial plan is created by script')
        await handlePopup.clickSaveAndAddAnother()
        await handlePopup.showPopup('add')
        await groupTelephony.inputData_Telephony('txtDialString','012345678910')
        await groupTelephony.inputData_Telephony('txtMinLength','15')
        await groupTelephony.inputData_Telephony('txtMaxLength','15')
        await groupTelephony.inputData_Telephony('txtDescription','This group dial plan is created by script')
        await groupTelephony.selectPermission('rdDeny')
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await groupTelephony.verifyDisplayedDialPlan('0123456789')
    })

    it('Should edit the group dial plan successfully', async function(){
        await handleMenu.selectGroupTelephony_DialPlan()
        await groupTelephony.selectDialPlan('0123456789')
        await handleEditingControl.clickEdit()
        await handlePopup.showPopup('edit')
        await groupTelephony.inputData_Telephony('txtDialString','012345678')
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await groupTelephony.verifyDisplayedDialPlan('012345678')
    })

    it ('Should delete the group dial plan successfully', async function(){
        await handleMenu.selectGroupTelephony_DialPlan()
        await groupTelephony.selectDialPlan('012345678')
        await handleEditingControl.clickDelete()
        await handlePopup.showPopup('ATTENTION')
        await handlePopup.clickYesDel('delete')
        await handlePopup.showPopup('ATTENTION')
        await handlePopup.clickYesDel('delete')
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await handleEditingControl.verifySaveSuccessfully()
    })

    it ('Should get validation message when the min length is greater than max length', async function(){
        await handleMenu.selectGroupTelephony_DialPlan()
        await handleEditingControl.clickAdd()
        await handlePopup.showPopup('add')
        await groupTelephony.inputData_Telephony('txtDialString','012345678910')
        await groupTelephony.inputData_Telephony('txtMinLength','15')
        await groupTelephony.inputData_Telephony('txtMaxLength','12')
        await groupTelephony.inputData_Telephony('txtDescription','This group dial plan is created by script')
        await handlePopup.clickSave()
        await groupTelephony.verifyValidationMessage('invalidMinAndMaxLength','Min length is greater than Max length')
    })    

})