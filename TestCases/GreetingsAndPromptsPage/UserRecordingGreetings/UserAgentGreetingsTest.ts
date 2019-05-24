import { ProtractorBrowser, browser } from "protractor";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";
import { Tier1GreetingsAndPrompts } from "../../../admin_core_menu/tier1Menu/tier1GreetingsAndPrompts";
import { UserGreetings } from "../../../PageObjects/GreetingsAndPromptsPage/UserRecordedGreetingsPage/UserGreetings";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { UserRecordedGreetings } from "../../../PageObjects/GreetingsAndPromptsPage/UserRecordedGreetingsPage/UserRecordedGreetings";
import { async } from "q";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { LoginPage } from "../../../PageObjects/LoginPage";

describe ("User Recorded Greetings - Agent Greetings", function(){
    var editingControl: EditingControl
    var userGreetings: UserGreetings
    var actionSupport: ActionSupport
    var actionPopup: ActionPopup
    var userRecorded: UserRecordedGreetings
    var tenancy: TenantConfigurationPage
    var loginPage: LoginPage
    var originalTimeout: number


    beforeEach(function(){
        editingControl = new EditingControl (browser)
        userGreetings = new UserGreetings (browser)
        actionSupport = new ActionSupport (browser)
        actionPopup = new ActionPopup (browser)
        userRecorded = new UserRecordedGreetings (browser)
        tenancy = new TenantConfigurationPage (browser)
        loginPage = new LoginPage (browser)

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ('Should add the agent greetings prompt successfully', async function(){
        await actionSupport.startBrowser()
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await userGreetings.navigateToAgentGreetings()
    }) 
})