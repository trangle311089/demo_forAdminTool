import { ProtractorBrowser, by, browser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport";
import { HandleValidation } from "../../../CommonSupport/HandleValidation";

export class GroupProfile{
    actionSupport: ActionSupport
    groupName_field: string
    description_field:string
    handleValidation: HandleValidation

    constructor(browser:ProtractorBrowser){
        this.actionSupport = new ActionSupport (browser)
        this.handleValidation = new HandleValidation (browser)
        this.groupName_field = "//input[@id='txtGroupName']"
        this.description_field = "//input[@id='txtDescription']"
    }

    async createNewGroup(groupName:string, description:string){
        console.log("Group Profile Page - Input the group name: " + groupName)
        await this.actionSupport.sendKeyOnElement(this.groupName_field, groupName)
        console.log("Group Profile Page - Input the description: " + description)
        await this.actionSupport.sendKeyOnElement(this.description_field, description)
    }

    async validateGroupNameEmpty (){
        console.log ("Group Profile Page - Verify the field is bordered in red")
        await this.handleValidation.verifyFieldInRed ("txtGroupName")
        await browser.sleep (2000)
        // console.log ("Group Profile Page - Verify the validation message is displayed")
        // await this.handleValidation.verifyRequiredFieldMsg()
    }
}
