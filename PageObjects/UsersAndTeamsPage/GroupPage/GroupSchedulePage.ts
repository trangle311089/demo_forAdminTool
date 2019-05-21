import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";

export class GroupSchedulePage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    date: string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
        this.date = "//input[@id='dtExpiryDate']"
      
    }

    // getToday_xpath(){
    //     return "//li[@class='date-picker-menu']//table[@class='uib-daypicker']//descendant::tbody/tr/td/button/span[@class='ng-binding text-info-custom']"
    // }

    getDate_xpath( date:string){
        return "//li[@class='date-picker-menu']//table[@class='uib-daypicker']//descendant::tbody/tr/td/button/span[contains(text(),'"+date+"')]"
    }
    getSwitch_xpath(){
        return "//li[@class='date-picker-menu']//table[@class='uib-daypicker']//descendant::th[@colspan='5']"
    }

    getMonth_xpath(month:string){
        return "//li[@class='date-picker-menu']//table[@class='uib-monthpicker']//descendant::tbody/tr/td/button/span[contains(text(),'"+month+"')]"
    }

    getYear_xpath(year:string){
        return "//li[@class='date-picker-menu']//table[@class='uib-yearpicker']//descendant::tbody/tr/td/button/span[contains(text(),'"+year+"')]"
    }
    
    getMonth(fullDate:string):string{
        return fullDate.split("/")[0]
        
    }
    
    getDate(fullDate:string):string{
        return fullDate.split("/")[0]
    }

    
    async selectDateTimePicker(dateTimePickerIndex:string, fullDate:string){
        var month = this.getMonth(fullDate)
        var date = this.getDate(fullDate)
        console.log ("Schedule: Click on the DateTimePicker")
        await this.actionSupport.clickOnElement(this.date)
        await this.actionSupport.clickOnElement(this.getSwitch_xpath())
        await this.actionSupport.clickOnElement(this.getMonth_xpath(month))
        // await this.actionSupport.clickOnElement(this.getDate_xpath(date))
        
    }
    
    async inputDate(month:string){
        await this.selectDateTimePicker('1',month)
    }

     async clickEditingControl(btnName:string){
        var xpath = "//div[@data='data.exceptionGrid']//descendant::div/ul/li/span/i[@class='"+btnName+"']"
        await this.actionSupport.clickOnElement(xpath)
    }

}