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

    getToday_xpath(){
        return "//li[@class='date-picker-menu']//table[@class='uib-daypicker']//descendant::tbody/tr/td/button/span[@class='ng-binding text-info-custom']"
    }

    getDay_xpath(day:string){
        return "//li[@class='date-picker-menu']//table[@class='uib-daypicker']//descendant::tbody/tr/td/button/span[contains(text(),'"+day+"')]"
    }

    getMonth_xpath(month:string){
        return "//li[@class='date-picker-menu']//table[@class='uib-monthpicker']//descendant::tbody/tr/td/button/span[contains(text(),'"+month+"')]"
    }

    getYear_xpath(year:string){
        return "//li[@class='date-picker-menu']//table[@class='uib-yearpicker']//descendant::tbody/tr/td/button/span[contains(text(),'"+year+"')]"
    }
    
    getSwicth_xpath(){
        return "//table[@class='uib-daypicker']//button[@id='datepicker-3128-351-title']"
    }

    getSwicthWhenDay_xpath(){
        return "//li[@class='date-picker-menu']//table[@class='uib-daypicker' and @ng-switch-when='day']"
    }

    getSwitchWhenMonth_xpath(){
        return "//li[@class='date-picker-menu']//table[@class='uib-monthpicker' and @ng-switch-when='month']"
    }

    getMonth(fullDate:string):string{
        var month=fullDate.split("/")[1]
        
        switch (month) {
            case "1" : case "01":
                month="January"
                break;
            case "2": case "02":
                month="February"
                break;
            case "3": case "03":
                month="March"
                break;
            case "4": case "04":
                month="April"
                break;
            case "5": case "05":
                month="May"
                break;
            case "6": case "06":
                month="June"
                break;
            case "7": case "07":
                month="July"
                break;
            case "8": case "08":
                month="August"
                break;
            case "9": case "09":
                month="September"
                break;
            case "10":
                month="October"
                break;
            case "11":
                month="November"
                break;
            case "12":
                month="December"
                break;
            }
        return month
    }
    
    getDay(fullDate:string):string{
        return fullDate.split("/")[0]
    }

    
    async selectDateTimePicker(dateTimePickerIndex:string, fullDate:string){
        var month = this.getMonth(fullDate)
        var day = this.getDay(fullDate)
        await this.actionSupport.clickOnElement(this.date)
        // await this.actionSupport.clickOnElement(this.getToday_xpath())
        await this.actionSupport.clickOnElement(this.getSwicth_xpath())
        
        
        // await this.actionSupport.clickOnElement(this.getSwitchWhenMonth_xpath())
        // await this.actionSupport.clickOnElement(this.getSwicthWhenDay_xpath())
        await this.actionSupport.clickOnElement(this.getMonth_xpath(month))
        await this.actionSupport.clickOnElement(this.getDay_xpath(day))
    }

    
    async input(month:string, day:string){
        await this.selectDateTimePicker('October',month)
        await this.selectDateTimePicker('18',day)
        
    }

     async clickEditingControl(btnName:string){
        var xpath = "//div[@data='data.exceptionGrid']//descendant::div/ul/li/span/i[@class='"+btnName+"']"
        await this.actionSupport.clickOnElement(xpath)
    }

}