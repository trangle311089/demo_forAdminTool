import{by, element, ProtractorBrowser, browser} from 'protractor';
import { ActionSupport } from '../core_function/actionSupport';
import { stringify } from 'querystring';

export class HandleEditingControl{
    actionSupport:ActionSupport
    add_option:string
    edit_option:string
    delete_option:string
    copy_option:string
    remove_option:string
    upload_option:string
    move_option:string
    download_option:string
    search_function:string
    remove_search:string
    selectall_check:string
    saving_txt:string

    constructor(browser:ProtractorBrowser){
        this.actionSupport = new ActionSupport(browser)
        this.add_option ="//i[@class='fa fa-plus-circle add']"
        this.edit_option = "//i[@class = 'fa fa-pencil edit']"
        this.delete_option = "//i[@class = 'fa fa-trash-o delete']"
        this.copy_option = "//i[@class = 'fa fa-files-o copy']"
        this.remove_option = "//i[@class='fa fa-ban ban']"
        this.move_option ="//i[@class='fa fa-sign-out move']"
        this.upload_option="//i[@class='fa fa-upload upload']"
        this.download_option="//i[@class='fa fa-download download']"
        this.search_function = "//input[@placeholder='search']"
        this.remove_search = "//i[@ng-click='removeSearch()']"
        this.selectall_check = "//div[@class='ag-header-cell']"
        this.saving_txt = "//span[@class='saving-text' and contains (text(), 'All changes saved')]"
    }

    async clickAdd(){
        console.log("Editing Control - Click on the add option on the editing control")
        await this.actionSupport.clickOnElement(this.add_option)
    }

    async clickEdit(){
        console.log ("Editing Control - Click on the edit option on the editing control")
        await this.actionSupport.clickOnElement(this.edit_option)
        await browser.sleep(2000)
    }

    async clickDelete(){
        console.log ("Editing Control - Click on the delete option on the editing control")
        await this.actionSupport.clickOnElement(this.delete_option)
    }

    async clickCopy(){
        console.log ("Editing Control - Click on the copy option on the editing control")
        await this.actionSupport.clickOnElement(this.copy_option)
    }

    async clickRemove(){
        console.log ("Editing Control - Click on the remove option on the editing control")
        await this.actionSupport.clickOnElement(this.remove_option)
    }

    async searchEntry(textSearch:string){
        console.log ("Editing Control - Enter text on the search field: " + textSearch)
        await this.actionSupport.sendKeyOnElement(this.search_function, textSearch)
    }

    async removeSearchEntry(){
        console.log ("Editing Control - Click on the cross icon on search field to remove search")
        await this.actionSupport.clickOnElement(this.remove_search)
    }

    async clickUpload(){
        console.log ("Editing Control - Click on the upload option on the editing control of Greetings & Prompts")
        await this.actionSupport.clickOnElement(this.upload_option)
    }

    async clickMove(){
        console.log ("Editing Control - Click on the move option on the editing control of Greetings & Prompts")
        await this.actionSupport.clickOnElement(this.move_option)
    }

    async clickDownload(){
        console.log ("Editing Control - Click on the download option on the editing control of Greetings & Prompts")
        await this.actionSupport.clickOnElement(this.download_option)
    }

    async clickSelectAll(){
        console.log ("Editing Control - Click on the select all check box on the grid")
        await this.actionSupport.selectCheckbox(this.selectall_check)
    }

    async clickSaveCancel_btn(btnName:string){
        console.log ("Editing Control - Click on SAVE or CANCEL button on the title bar")
        var xpath = "//button[@ng-click='saveAction()' and contains (text(), '"+btnName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async verifySaveSuccessfully(){
        console.log("Editing Control - All changes saved is displayed on the title bar")
        var ele = browser.element(by.xpath(this.saving_txt))
        await expect(ele.isDisplayed()).toBe(true)             
    }

    async verifyAddSuccessfully(entryName:string){
        let xpath = "//div[@ref='eBodyContainer']"
        let ele = browser.element(by.xpath(xpath))
        console.log ("Editing Control - Verify new entry added")
        await expect (ele.getText()).toContain(entryName)  
    }

    async verifyRemoveSuccessfully(entryName:string){
        let xpath = "//div[@ref='eBodyContainer']"
        let ele = browser.element(by.xpath(xpath))
        console.log ("Editing Control - Verify existing entry removed")
        await expect (ele.getText()).not.toContain(entryName)
    }

    async selectEntryOnGrid(entryName:string){
        let xpath ="//span[contains(text(),'"+entryName+"')]"
        console.log ("Editing Control - Select one entry on the Tier 1 grid")
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectEntryOnGrid2(entryName:string){
        let xpath = "//div[text()='"+entryName+"']"
        console.log ("Editing Control - Select one entry on the Tier 2 grid")
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectCheckbox(btnName:string){
        let xpath = "//input[@type='checkbox' and @ng-model='"+btnName+"']"
        console.log ("Editing Control - Select the checkbox")
        await this.actionSupport.selectCheckbox(xpath)
    }

    async selectRadio(btnName:string){
        let xpath = "//input[@id='"+btnName+"']"
        console.log ("Editing Control - Select the radio")
        await this.actionSupport.clickOnElement(xpath)
    }

    
}
