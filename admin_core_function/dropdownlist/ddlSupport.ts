// import { ProtractorBrowser, ElementFinder } from "protractor";
// import { ActionSupport } from "../../core_function/actionSupport";

// export class DDLSupport{
//     curBrowser: ProtractorBrowser
//     actionSupport: ActionSupport
      
//     constructor(browser:any){
//         this.curBrowser = browser
//         this.actionSupport = new ActionSupport (this.curBrowser)
//     }

//     async clickOnDDL(ddlName:string){
//         var xpath = "//div[@id='"+ddlName+"']"
//         await this.actionSupport.clickOnElement(xpath)
//     }

//     async selectByVisibleText(visibleText:string){
//         var xpath = "//span[contains(text(),'"+visibleText+"')]"
//         await this.actionSupport.clickOnElement(xpath)
//     }

// }