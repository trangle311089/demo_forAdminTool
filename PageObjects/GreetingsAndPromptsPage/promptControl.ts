import { ProtractorBrowser, by, Browser, browser } from "protractor";
import { ActionSupport } from "../../core_function/actionSupport";
import { protractor } from "protractor/built/ptor";
import { HandleEditingControl } from "../../CommonSupport/HandleEditingControl";

export class PromptControl{
    actionSupport: ActionSupport
    handleEditingControl: HandleEditingControl

    constructor (browser:ProtractorBrowser){
        this.actionSupport = new ActionSupport (browser)
        this.handleEditingControl = new HandleEditingControl (browser)

    }

    async selectUserGreetings(userName: string){
        console.log ("User Recorded Greetings: Select user on grid")
        let xpath = "//div[@col-id='displayName' and span[contains(text(),'"+userName+"')]]"
        await this.actionSupport.clickOnElement(xpath)
        await this.handleEditingControl.clickEdit()
    }

    async createPrompt(fieldName:string, data:string){
        console.log("Greetings & Prompts: Create new prompt")
        let xpath = "//input[@id='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath, data)
    }

    async selectPrompt(promptName:string){
        console.log ("Greetings & Prompts: Select the prompt on grid")
        let xpath = "//span[contains (text(), '"+promptName+"' )]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async verifyDisplayedPrompt(promptName:string){
        console.log ("New Prompt: The prompt " + promptName + " has been created successfully")
        let xpath = "//span[contains (text(), '"+promptName+"' )]"
        let ele =browser.element(by.xpath(xpath))
        await expect (ele.isDisplayed()).toBe(true)
    }

    async verifyPromptWithAudio(){
        console.log ("Audio Prompt: Prompt with audio is highlighed in yellow")
        let xpath = "//div[@role='row' and @comp-id=]"
        let ele = browser.element(by.xpath(xpath))
        await ele.click()
        await expect (ele.getCssValue('background-color')).toBe("rgba(255, 240, 154, 1)")

    }
}