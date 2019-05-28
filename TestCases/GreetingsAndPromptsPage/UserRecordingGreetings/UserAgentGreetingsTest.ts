import { ProtractorBrowser, browser,by,  element, $ } from "protractor";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";
import { UserGreetings } from "../../../PageObjects/GreetingsAndPromptsPage/UserRecordedGreetingsPage/UserGreetings";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { async } from "q";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { AudioControl } from "../../../PageObjects/GreetingsAndPromptsPage/audioControl/audioControl";

describe ("User Recorded Greetings - Agent Greetings", function(){
    var editingControl: EditingControl
    var userGreetings: UserGreetings
    var actionSupport: ActionSupport
    var actionPopup: ActionPopup
    var tenancy: TenantConfigurationPage
    var loginPage: LoginPage
    var originalTimeout: number
    var audioControl: AudioControl
  
    beforeEach(function(){
        editingControl = new EditingControl (browser)
        userGreetings = new UserGreetings (browser)
        actionSupport = new ActionSupport (browser)
        actionPopup = new ActionPopup (browser)
        tenancy = new TenantConfigurationPage (browser)
        loginPage = new LoginPage (browser)
        audioControl = new AudioControl (browser)

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ('Should add the agent greetings prompt and upload the audio successfully', async function(){
        var path = require('path')
        var fileToUpload = 'D:/MarryYou.mp3'
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

    it ("Should play, stop, backward, forward the audio successfully", async function(){
        await actionSupport.startBrowser()
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await userGreetings.navigateToAgentGreetings()
        await userGreetings.selectPrompt('promptScript2')
        await audioControl.audioControl('mediaPlay')
        await browser.sleep(8000)
        await audioControl.audioVolumeControl('mediaVolUp')
        await audioControl.audioControl('mediaForward')
        await browser.sleep(8000)
        await audioControl.audioVolumeControl('mediaVolDown')
        await audioControl.audioControl('mediaBackward')
        await browser.sleep(8000)
        await audioControl.audioControl('mediaStop')
    })

    it ("Should play all audio in list with next, previous option", async function(){
        await actionSupport.startBrowser()
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await userGreetings.navigateToAgentGreetings()
        await editingControl.clickSelectAll()
        await audioControl.audioControl('mediaPlay')
        await browser.sleep(2000)
        await audioControl.audioControl('mediaNext')
        await browser.sleep(3000)
        await audioControl.audioControl('mediaPrev')
        await browser.sleep(3000)
    })

    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })
})