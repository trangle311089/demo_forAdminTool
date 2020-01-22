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
        console.log ("STEP 1 - Launch the Admin Tool and click on SIGN IN button")
        await loginPage.login()
        console.log("STEP 2 - Select the existing tenancy")
        await tenancy.selectTenancy('1001')
        console.log ("STEP 3 - Click on the edit option")
        await handleEditingControl.clickEdit()
        console.log ("STEP 4 - Navigate to the group list")
        await handleMenu.selectGroupsList()
        console.log ("STEP 5 - Select the default group")
        await handleEditingControl.selectEntryOnTier1Grid('Default')
        console.log ("STEP 6 - Click on the edit option")
        await handleEditingControl.clickEdit()
    })

    it ("Should update the login settings successfully", async function(){
        console.log ("STEP 7 - Navigate to group agent parameters menu")
        await handleMenu.selectGroupAgentParmeter_LoginSettings()
        console.log ("STEP 8 - Select option for Initial agent state on login")
        await handleEditingControl.selectRadio('rdNotReady')
        console.log ("STEP 9 - Select ready state profile")
        await handleEditingControl.selectCheckbox('dataModel.readyProfiles[0].readyProfile1.enabled')
        console.log ("STEP 10 - Select agent transfers")
        await handleEditingControl.selectCheckbox('dataModel.readyProfiles[0].readyProfile1.agentTransfers')
        console.log ("STEP 11 - Input the profile name")
        await groupAgentParameters.inputData('txtProfileName1','Profile name')
        console.log ("STEP 12 - Input the IP ranges")
        await groupAgentParameters.inputData('txtIPRanges','172.17.0.223')
        console.log ("STEP 13 - Click on SAVE button on the title bar")
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep (2000)
        console.log ("STEP 14 - Verify data changes successfully")
        await handleEditingControl.verifySaveSuccessfully()
    })

    it ("Should update the contact presentation successfully", async function(){
        console.log ("STEP 7 - Navigate to group contact presentation menu")
        await handleMenu.selectGroupAgentParamter_ContactPresentation()
        console.log ("STEP 8 - Select enable accept requeue for voice contacts")
        await handleEditingControl.selectCheckbox('dataModel.enableAcceptRejectVoice')
        console.log ("STEP 9 - Select enable accept requeue for email contacts")
        await handleEditingControl.selectCheckbox('dataModel.enableAcceptRejectEmail')
        console.log ("STEP 10 - Select enable accept requeue for chat contacts")
        await handleEditingControl.selectCheckbox('dataModel.enableAcceptRejectChat')
        console.log ("STEP 11 - Select require requeue reason")
        await handleEditingControl.selectCheckbox('dataModel.requireRejectReason')
        console.log ("STEP 12 - Input the accept requeue response time")
        await groupAgentParameters.inputData('txtAcceptResponseTime','1')
        console.log ("STEP 13 - Select not ready on requeue timeout")
        await handleEditingControl.selectCheckbox('dataModel.placeInNotReadyOnRejectTimeout')
        console.log ("STEP 14 - Click on SAVE button on the tite bar")
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await handleEditingControl.verifySaveSuccessfully()
    })

    it ("Should update the agent permissions successfully ", async function(){
        console.log ("STEP 7 - Navigate to group agent permission menu")
        await handleMenu.selectGroupAgentParamter_AgentPermission()
        console.log ("STEP 8 - Select allow wrap follow on calls")
        await handleEditingControl.selectCheckbox('dataModel.allowWrapFollowOnCalls')
        console.log ("STEP 9 - Select allow calls from ready")
        await handleEditingControl.selectCheckbox('dataModel.allowCallsFromReady')
        console.log ("STEP 10 - Select allow access to the conf call button")
        await handleEditingControl.selectCheckbox('dataModel.allowConfCallButton')
        console.log ("STEP 11 - Select agents to blind transfer calls")
        await handleEditingControl.selectCheckbox('dataModel.allowBlindTransfer')
        console.log ("STEP 12 - Select Allow warm transfer to third parties")
        await handleEditingControl.selectCheckbox('dataModel.allowWarmTransferToThirdParties')
        console.log ("STEP 13 - Select Allow warm transfer to queues")
        await handleEditingControl.selectCheckbox('dataModel.allowWarmTransferToQueues')
        console.log ("STEP 14 - Select Allow agents to conference calls")
        await handleEditingControl.selectCheckbox('dataModel.allowCallConferencing')
        console.log ("STEP 15 - Select Allow call transfers to other agents")
        await handleEditingControl.selectCheckbox('dataModel.allowTransferToAgents')
        console.log ("STEP 16 - Select Allow call transfers to supervisors")
        await handleEditingControl.selectCheckbox('dataModel.allowTransferToSupervisors')
        console.log ("STEP 17 - Select Allow call transfers to queues")
        await handleEditingControl.selectCheckbox('dataModel.allowTransferToQueues')
        console.log ("STEP 18 - Select Allow call transfers internally")
        await handleEditingControl.selectCheckbox('dataModel.allowInternalTransfers')
        console.log ("STEP 19 - Select Allow call transfers externally")
        await handleEditingControl.selectCheckbox('dataModel.allowExternalTransfers')
        console.log ("STEP 20 - Select Allow call transfers to experts")
        await handleEditingControl.selectCheckbox('dataModel.allowTransfertoExperts')
        console.log ("STEP 21 - Select Allow agents to hang up on third parties ")
        await handleEditingControl.selectCheckbox('dataModel.allowHangupOnThirdParties')
        console.log ("STEP 22 - Allow agents to hang up on customers")
        await handleEditingControl.selectCheckbox('dataModel.allowHangupOnCustomers')
        console.log ("STEP 23 - Allow agents to place calls on hold")
        await handleEditingControl.selectCheckbox('dataModel.allowHold')
        console.log ("STEP 24 - Click on the SAVE button on title bar")
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        console.log ("STEP 25 - Verify the data changes saved successfully")
        await handleEditingControl.verifySaveSuccessfully()
   })

})