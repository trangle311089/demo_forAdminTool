import{by, element, ProtractorBrowser} from 'protractor';
import { ActionSupport } from '../../core_function/actionSupport/actionSupport';

export class EditingControl{
    add_option:string
    actionSupport:ActionSupport
    curBrowser:ProtractorBrowser
    
    

    constructor(browser:any){
        this.curBrowser = browser

        this.actionSupport = new ActionSupport(this.curBrowser)

        this.add_option="//i[@class='fa fa-plus-circle add']"
    }

    async clickAdd(){
        console.log("Click on the add option on the editing control")
        await this.actionSupport.clickOnElement(this.add_option)
    }
}
