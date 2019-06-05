// import { ProtractorBrowser, by } from "protractor";
// import { ActionSupport } from "../../core_function/actionSupport";

// export class Tier1Menu{
//     curBrowser: ProtractorBrowser
//     actionSupport: ActionSupport

//     constructor(browser:any){
//         this.curBrowser = browser
//         this.actionSupport = new ActionSupport(this.curBrowser)
//     }

//     async presenceOfTier1Ver(menuName:string){
//         var xpath = "//a[@class='verical-menu-item ng-binding' and contains (text(),'"+menuName+"')]"
//         await this.actionSupport.presentElement(xpath)

//         // verify element is displayed in the UI
//         let ele= this.curBrowser.element(by.xpath(xpath))
//         await expect(ele.isDisplayed()).toBe(true)
        

//     }

//     async navigateToTier1Ver(menuName:string){
//         var xpath = "//a[@class='verical-menu-item ng-binding' and contains (text(),'"+menuName+"')]"
//         await this.actionSupport.clickOnElement(xpath)
//     }

//     async presenceOfTier1Hor(menuName:string){
//         var xpath = "//a[@class='ng-binding' and contains (text(),'"+menuName+"')]"
//         await this.actionSupport.presentElement(xpath)
//     }

//     async navigateToTier1Hor(menuName:string){
//         var xpath = "//a[@class='ng-binding' and contains (text(),'"+menuName+"')]"
//         await this.actionSupport.clickOnElement(xpath)
//     }

    

// }