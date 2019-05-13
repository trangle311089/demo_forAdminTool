import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../core_function/actionSupport/actionSupport";

export class SelectedButtons{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport

    checkbox_btn: string
    radio_btn:string
    assigned_btn:string
    unassigned_btn:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)

        this.checkbox_btn = "//input[@type='checkbox']"
        this.radio_btn = "//input[@type='radio']"
        this.assigned_btn = "//div[@class='grid-arrow-left-button']"
        this.unassigned_btn = "//div[@class='grid-arrow-right-button']"

    }

    async clickCheckbox(){
        console.log ("Click on the check box")
        this.actionSupport.clickOnElement(this.checkbox_btn)
    }

    async clickRadiobutton(){
        console.log ("Click on the radio button")
        this.actionSupport.clickOnElement(this.radio_btn)
    }

    async clickAssigned_btn(){
        console.log ("Click on the assigned button")
        this.actionSupport.clickOnElement(this.assigned_btn)
    }

    async clickUnassigned_btn(){
        console.log ("Click on the unassigned button")
        this.actionSupport.clickOnElement(this.unassigned_btn)
    }
}