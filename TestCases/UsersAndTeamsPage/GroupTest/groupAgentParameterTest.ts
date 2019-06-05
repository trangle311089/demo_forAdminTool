import { LoginPage } from "../../../PageObjects/LoginPage";
import { TitleBarButtons } from "../../../admin_core_function/titleBarButtons/titleBarButtons";
import { async, timeout } from "q";
import { browser, by } from "protractor";
import { Driver } from "selenium-webdriver/ie";
import { ActionSupport } from "../../../core_function/actionSupport";
import { GroupAgentParameters } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/AgentParameters";
import { Tier1TenantConfiguration } from "../../../admin_core_menu/tier1Menu/tier1TenantConfiguration";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";


describe ("Group - Agent Parameters", function(){
    var loginPage: LoginPage
    var titleBar: TitleBarButtons
    var actionSupport: ActionSupport
    var groupAgentParameters: GroupAgentParameters
    var tier1TenantConfiguration: Tier1TenantConfiguration
    var tenancy: TenantConfigurationPage
    var editingControl: EditingControl
    var originalTimeout: number

    beforeEach (async function(){
        loginPage = new LoginPage (browser)
        titleBar = new TitleBarButtons (browser)
        actionSupport = new ActionSupport (browser)
        groupAgentParameters = new GroupAgentParameters (browser)
        editingControl = new EditingControl (browser)
        tier1TenantConfiguration = new Tier1TenantConfiguration(browser)
        tenancy = new TenantConfigurationPage (browser)
   
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ("Should update the login settings successfully", async function(){
        await actionSupport.startBrowser()
        await loginPage.login()
        await tier1TenantConfiguration.navigateToTenantConfiguration()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await groupAgentParameters.navigateToGroupLoginSettings()
        await groupAgentParameters.selectRadio_loginPage('rdNotReady')
        await groupAgentParameters.selectCheckbox_loginPage('cbEnabled1')
        await groupAgentParameters.selectCheckbox_loginPage('cbAvaiForAgentTransfer1')
        await groupAgentParameters.inputData_loginPage('txtProfileName1','Profile name')
        await groupAgentParameters.inputData_loginPage('txtIPRanges','172.17.0.223')
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    it ("Should update the contact presentation successfully", async function(){
        await actionSupport.startBrowser()
        await loginPage.login()
        await tier1TenantConfiguration.navigateToTenantConfiguration()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await groupAgentParameters.navigateToGroupContactPresentation()
        await groupAgentParameters.selectCheckbox_contactPre('dataModel.enableAcceptRejectVoice')
        await groupAgentParameters.selectCheckbox_contactPre('dataModel.enableAcceptRejectEmail')
        await groupAgentParameters.selectCheckbox_contactPre('dataModel.enableAcceptRejectChat')
        await groupAgentParameters.selectCheckbox_contactPre('dataModel.requireRejectReason')
        await groupAgentParameters.inputData_contactPre('txtAcceptResponseTime','1')
        await groupAgentParameters.inputData_contactPre('txtAcceptResponseTime','1')
        await groupAgentParameters.selectCheckbox_contactPre('dataModel.placeInNotReadyOnRejectTimeout')
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    it ("Should update successfully the Agent Permissions setting", async function(){
        await actionSupport.startBrowser()
        await loginPage.login()
        await tier1TenantConfiguration.navigateToTenantConfiguration()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await groupAgentParameters.navigateToGroupAgentPermission()
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
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
   })

   afterEach(function(){
       jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
   })
})