import{by, element, ProtractorBrowser} from 'protractor';
import { ActionSupport } from '../../core_function/actionSupport/actionSupport';
import { stringify } from 'querystring';

export class EditingControl{
    actionSupport:ActionSupport
    curBrowser:ProtractorBrowser
    
    add_option:string
    edit_option:string
    delete_option:string
    copy_option:string
    remove_option:string
    
    search_function:string
    remove_search:string

    constructor(browser:any){
        this.curBrowser = browser

        this.actionSupport = new ActionSupport(this.curBrowser)

        this.add_option ="//i[@class='fa fa-plus-circle add']"
        this.edit_option = "//i[@class = 'fa fa-pencil edit']"
        this.delete_option = "//i[@class = 'fa fa-trash-o delete']"
        this.copy_option = "//i[@class = 'fa fa-files-o copy']"
        this.remove_option = "//i[@class='fa fa-ban ban']"

        this.search_function = "//input[@placeholder='search']"
        this.remove_search = "//i[@ng-click='removeSearch()']"
    }

    async clickAdd(){
        console.log("Click on the add option on the editing control")
        await this.actionSupport.clickOnElement(this.add_option)
    }

    async clickEdit(){
        console.log ("Click on the edit option on the editing control")
        await this.actionSupport.clickOnElement(this.edit_option)
    }

    async clickDelete(){
        console.log ("Click on the delete option on the editing control")
        await this.actionSupport.clickOnElement(this.delete_option)
    }

    async clickCopy(){
        console.log ("Click on the copy option on the editing control")
        await this.actionSupport.clickOnElement(this.copy_option)
    }

    async clickRemove(){
        console.log ("Click on the remove option on the editing control")
        await this.actionSupport.clickOnElement(this.remove_option)
    }

    async searchEntry(textSearch:string){
        console.log ("Enter text on the search field: " + textSearch)
        await this.actionSupport.sendKeyOnElement(this.search_function, textSearch)
    }

    async removeSearchEntry(){
        console.log ("Click on the cross icon on search field to remove search")
        await this.actionSupport.clickOnElement(this.remove_search)
    }

    
}
