import { LoginPage } from "../../../PageObjects/LoginPage";
import { async, timeout } from "q";
import { browser, by } from "protractor";
import { GroupAgentParameters } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupAgentParameters";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";
import { HandleMenu } from "../../../CommonSupport/HandleMenu";
import { GroupProfile } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";


describe ("Group - Agent Parameters", function(){
    let loginPage: LoginPage
    let groupAgentParameters: GroupAgentParameters
    let tenancy: TenantConfigurationPage
    let groupProfile: GroupProfile
    let handleMenu : HandleMenu
    let handleEditingControl: HandleEditingControl
    

    beforeEach (async function(){
        loginPage = new LoginPage (browser)
        handleMenu = new HandleMenu (browser)
        groupProfile = new GroupProfile (browser)
        groupAgentParameters = new GroupAgentParameters (browser)
        handleEditingControl = new HandleEditingControl (browser)
        tenancy = new TenantConfigurationPage (browser)
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await handleEditingControl.clickEdit()
        await handleMenu.selectGroupsList()
        await groupProfile.selectGroup('Default')
        await handleEditingControl.clickEdit()
    })

    it ("Should update the login settings successfully", async function(){
        await handleMenu.selectGroupAgentParmeter_LoginSettings()
        await groupAgentParameters.selectRadio_loginPage('rdNotReady')
        await groupAgentParameters.selectCheckbox_loginPage('cbEnabled1')
        await groupAgentParameters.selectCheckbox_loginPage('cbAvaiForAgentTransfer1')
        await groupAgentParameters.inputData_loginPage('txtProfileName1','Profile name')
        await groupAgentParameters.inputData_loginPage('txtIPRanges','172.17.0.223')
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await handleEditingControl.verifySaveSuccessfully()
    })

    it ("Should update the contact presentation successfully", async function(){
        await handleMenu.selectGroupAgentParamter_ContactPresentation()
        await groupAgentParameters.selectCheckbox_contactPre('dataModel.enableAcceptRejectVoice')
        await groupAgentParameters.selectCheckbox_contactPre('dataModel.enableAcceptRejectEmail')
        await groupAgentParameters.selectCheckbox_contactPre('dataModel.enableAcceptRejectChat')
        await groupAgentParameters.selectCheckbox_contactPre('dataModel.requireRejectReason')
        await groupAgentParameters.inputData_contactPre('txtAcceptResponseTime','1')
        await groupAgentParameters.inputData_contactPre('txtAcceptResponseTime','1')
        await groupAgentParameters.selectCheckbox_contactPre('dataModel.placeInNotReadyOnRejectTimeout')
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await handleEditingControl.verifySaveSuccessfully()
    })

    it ("Should update successfully the Agent Permissions setting", async function(){
        await handleMenu.selectGroupAgentParamter_AgentPermission()
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowWrapFollowOnCalls')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowCallsFromReady')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowConfCallButton')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowBlindTransfer')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowWarmTransferToThirdParties')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowWarmTransferToQueues')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowCallConferencing')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowTransferToAgents')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowTransferToSupervisors')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowTransferToQueues')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowInternalTransfers')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowExternalTransfers')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowTransfertoExperts')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowHangupOnThirdParties')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowHangupOnCustomers')
        await groupAgentParameters.selectCheckbox_agentPer('dataModel.allowHold')
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await handleEditingControl.verifySaveSuccessfully()
   })

})