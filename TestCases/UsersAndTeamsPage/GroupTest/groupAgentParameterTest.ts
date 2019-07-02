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
    let tenancy: TenantConfigurationPage
    let groupProfile: GroupProfile
    let groupAgentParameters: GroupAgentParameters
    let handleMenu : HandleMenu
    let handleEditingControl: HandleEditingControl
    

    beforeEach (async function(){
        loginPage = new LoginPage (browser)
        handleMenu = new HandleMenu (browser)
        groupProfile = new GroupProfile (browser)
        handleEditingControl = new HandleEditingControl (browser)
        tenancy = new TenantConfigurationPage (browser)
        groupAgentParameters = new GroupAgentParameters (browser)
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await handleEditingControl.clickEdit()
        await handleMenu.selectGroupsList()
        await handleEditingControl.selectEntryOnGrid('Default')
        await handleEditingControl.clickEdit()
    })

    it ("Should update the login settings successfully", async function(){
        await handleMenu.selectGroupAgentParmeter_LoginSettings()
        await handleEditingControl.selectRadio('rdNotReady')
        await handleEditingControl.selectCheckbox('dataModel.readyProfiles[0].readyProfile1.enabled')
        await handleEditingControl.selectCheckbox('dataModel.readyProfiles[0].readyProfile1.agentTransfers')
        await groupAgentParameters.inputData('txtProfileName1','Profile name')
        await groupAgentParameters.inputData('txtIPRanges','172.17.0.223')
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await handleEditingControl.verifySaveSuccessfully()
    })

    it ("Should update the contact presentation successfully", async function(){
        await handleMenu.selectGroupAgentParamter_ContactPresentation()
        await handleEditingControl.selectCheckbox('dataModel.enableAcceptRejectVoice')
        await handleEditingControl.selectCheckbox('dataModel.enableAcceptRejectEmail')
        await handleEditingControl.selectCheckbox('dataModel.enableAcceptRejectChat')
        await handleEditingControl.selectCheckbox('dataModel.requireRejectReason')
        await groupAgentParameters.inputData('txtAcceptResponseTime','1')
        await groupAgentParameters.inputData('txtAcceptResponseTime','1')
        await handleEditingControl.selectCheckbox('dataModel.placeInNotReadyOnRejectTimeout')
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await handleEditingControl.verifySaveSuccessfully()
    })

    it ("Should update successfully the Agent Permissions setting", async function(){
        await handleMenu.selectGroupAgentParamter_AgentPermission()
        await handleEditingControl.selectCheckbox('dataModel.allowWrapFollowOnCalls')
        await handleEditingControl.selectCheckbox('dataModel.allowCallsFromReady')
        await handleEditingControl.selectCheckbox('dataModel.allowConfCallButton')
        await handleEditingControl.selectCheckbox('dataModel.allowBlindTransfer')
        await handleEditingControl.selectCheckbox('dataModel.allowWarmTransferToThirdParties')
        await handleEditingControl.selectCheckbox('dataModel.allowWarmTransferToQueues')
        await handleEditingControl.selectCheckbox('dataModel.allowCallConferencing')
        await handleEditingControl.selectCheckbox('dataModel.allowTransferToAgents')
        await handleEditingControl.selectCheckbox('dataModel.allowTransferToSupervisors')
        await handleEditingControl.selectCheckbox('dataModel.allowTransferToQueues')
        await handleEditingControl.selectCheckbox('dataModel.allowInternalTransfers')
        await handleEditingControl.selectCheckbox('dataModel.allowExternalTransfers')
        await handleEditingControl.selectCheckbox('dataModel.allowTransfertoExperts')
        await handleEditingControl.selectCheckbox('dataModel.allowHangupOnThirdParties')
        await handleEditingControl.selectCheckbox('dataModel.allowHangupOnCustomers')
        await handleEditingControl.selectCheckbox('dataModel.allowHold')
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await handleEditingControl.verifySaveSuccessfully()
   })

})