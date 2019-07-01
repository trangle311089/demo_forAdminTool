import { ProtractorBrowser, browser,by,  element, $ } from "protractor";
import { async } from "q";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { AudioControl } from "../../../PageObjects/GreetingsAndPromptsPage/AudioControl";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";
import { HandlePopup } from "../../../CommonSupport/HandlePopup";
import { HandleMenu } from "../../../CommonSupport/HandleMenu";
import { PromptControl } from "../../../PageObjects/GreetingsAndPromptsPage/PromptControl";

describe ("User Recorded Greetings - Agent Greetings", function(){
    let loginPage: LoginPage
    let handleMenu: HandleMenu
    let handleEditingControl: HandleEditingControl
    let handlePopup: HandlePopup
    let tenancy: TenantConfigurationPage
    let audioControl: AudioControl
    let promptControl: PromptControl
  
    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        handleMenu = new HandleMenu (browser)
        handleEditingControl = new HandleEditingControl (browser)
        handlePopup = new HandlePopup (browser)
        tenancy = new TenantConfigurationPage (browser)
        audioControl = new AudioControl (browser)
        promptControl = new PromptControl (browser)
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await handleEditingControl.clickEdit()
    })

    it ('Should add the user agent greetings prompt and upload the audio successfully', async function(){
        let path = require('path')
        let absolutePath = path.resolve(__dirname,"..//..//..//TestData//MarryYou.mp3")
        let uploadAudio = browser.element(by.xpath("//input[@type='file' and @id='ngf-dialogUploadHandler']"))
               
        await handleMenu.selectGreetingsPrompts()
        await promptControl.selectUserGreetings('userSkill')
        await handleMenu.selectUserAgentGreetings()
        await handleEditingControl.clickAdd()
        await promptControl.createPrompt('txtPromptName','promptScript2')
        await promptControl.createPrompt('txtDescription', 'This prompt is created by script')
        await uploadAudio.sendKeys(absolutePath)
        await handlePopup.clickOK_UPLOAD()
        await handlePopup.clickSave()
        await promptControl.verifyDisplayedPrompt('promptScript2')

    }) 

    fit ("Should play, stop, backward, forward the audio successfully", async function(){
        await handleMenu.selectGreetingsPrompts()
        await promptControl.selectUserGreetings('userSkill')
        await handleMenu.selectUserAgentGreetings()
        await promptControl.selectPrompt('promptScript2')
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
        await handleEditingControl.clickEdit()
        await handleMenu.selectUserAgentGreetings()
        await handleEditingControl.clickSelectAll()
        await audioControl.audioControl('mediaPlay')
        await browser.sleep(2000)
        await audioControl.audioControl('mediaNext')
        await browser.sleep(3000)
        await audioControl.audioControl('mediaPrev')
        await browser.sleep(3000)
    })

})