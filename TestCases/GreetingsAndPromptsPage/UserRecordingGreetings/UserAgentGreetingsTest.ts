import { ProtractorBrowser, browser,by,  element, $ } from "protractor";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";
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
    var tenancy: TenantConfigurationPage
    var loginPage: LoginPage
    var originalTimeout: number
    


    beforeEach(function(){
        editingControl = new EditingControl (browser)
        userGreetings = new UserGreetings (browser)
        actionSupport = new ActionSupport (browser)
        actionPopup = new ActionPopup (browser)
        tenancy = new TenantConfigurationPage (browser)
        loginPage = new LoginPage (browser)

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ('Should add the agent greetings prompt successfully', async function(){
        var path = require('path')
        var fileToUpload = 'C:/Users/ltthuytrang/Downloads/MarryYou.mp3'
        var absolutePath = path.resolve(__dirname,fileToUpload)
        var uploadAudio = browser.element(by.xpath("//input[@type='file' and @id='ngf-dialogUploadHandler']"))
    
        await actionSupport.startBrowser()
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await userGreetings.navigateToAgentGreetings()
        await editingControl.clickAdd()
        await actionPopup.showPopup('add')
        await userGreetings.createPrompt('txtPromptName','promptScript2')
        await userGreetings.createPrompt('txtDescription', 'This prompt is created by script')
        await uploadAudio.sendKeys(absolutePath)
        await actionPopup.showPopup('Upload')
        await actionPopup.clickOK_UPLOAD()
        await actionPopup.clickSaveAndClose_btn()  
    }) 
})