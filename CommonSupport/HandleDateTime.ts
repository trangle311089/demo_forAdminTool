import { ProtractorBrowser, by, browser } from "protractor";
import { SSL_OP_LEGACY_SERVER_CONNECT } from "constants";
import { ActionSupport } from "../core_function/actionSupport";

export class HandleDateTime{
    actionSupport: ActionSupport

    constructor(browser:ProtractorBrowser){
          this.actionSupport = new ActionSupport (browser)
    }

    async clickEditingControl(gridName:string, btnName:string){
        var xpath = "//div[@data='"+gridName+"']//descendant::div/ul/li/span/i[@class='"+btnName+"']"
        await this.actionSupport.clickOnElement(xpath)
    }

    async inputDate(fieldName:string, data:string){
        var xpath = "//input[@id='"+fieldName+"']"
        await this.actionSupport.sendKeyOnElement(xpath,data)
    }

    async selectYearMonthDay(year:string, month:string, day:string){
        var xpath = "//input[@id='dtExpiryDate']"
        await this.actionSupport.clickOnElement(xpath)
        var buttonSwitchToMonth = "//th[@colspan='5']"
        await this.actionSupport.clickOnElement(buttonSwitchToMonth)
        var buttonSwitchToYear = "//li[@class='date-picker-menu']//descendant::th/button/strong[@class='ng-binding']"
        await this.actionSupport.clickOnElement(buttonSwitchToYear)
        var xpath = "//span[contains (text(),'"+year+"')]"      
        await this.actionSupport.clickOnElement(xpath)
        var xpath = "//span[contains (text(),'"+month+"')]"
        await this.actionSupport.clickOnElement(xpath)
        var xpath = "//span[contains (text(),'"+day+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectTime(timeField:string, hour:string, min:string){
        var xpath = "//input[@id='"+timeField+"']"
        await this.actionSupport.clickOnElement(xpath)
        var xpath = "//input[@placeholder='HH']"
        await this.actionSupport.sendKeyOnElement(xpath,hour)
        var xpath = "//input[@placeholder='MM']"
        await this.actionSupport.sendKeyOnElement(xpath, min)
        var xpath = "//input[@id='"+timeField+"']"
        await this.actionSupport.clickOnElement(xpath)
    }

    async switchToAMPM(timeField:string, btnName:string){
        var xpath = "//input[@id='"+timeField+"']"
        await this.actionSupport.clickOnElement(xpath)
        var xpath = "//button[contains (text(),'"+btnName+"')]"
        await this.actionSupport.clickOnElement(xpath)
        var xpath = "//input[@id='"+timeField+"']"
        await this.actionSupport.clickOnElement(xpath)
    }

    async selectRecurring(){
        var xpath = "//input[@id='chkrecurring']"
        await this.actionSupport.selectCheckbox(xpath)
    }

    async selectDayOfWeek(dayName:string){
        var xpath = "//div[@ng-model='dataModel.dayOfWeek']"
        await this.actionSupport.clickOnElement(xpath)
        var xpath = "//span[contains(text(),'"+dayName+"')]"
        await this.actionSupport.clickOnElement(xpath)
    }

    async verifyAddExceptionDateSuccessfully(date:string, startTime:string){
        let xpath = "//div[@data='data.exceptionGrid']"
        let ele = browser.element(by.xpath(xpath))
        await expect (ele.getText()).toContain(date, startTime)
    }

    async verifyAddRoutineScheduleSuccessfully(date:string, startTime:string){
        let xpath = "//div[@data='data.routineGrid']"
        let ele = browser.element(by.xpath(xpath))
        await expect (ele.getText()).toContain(date, startTime)
    }
}