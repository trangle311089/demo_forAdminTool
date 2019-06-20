import { by, ElementFinder, ProtractorBrowser, ProtractorExpectedConditions, protractor, browser } from 'protractor';
import { TIMEOUT } from 'dns';
export class ActionSupport{
    curBrowser:ProtractorBrowser
    timeOut:number
    until:ProtractorExpectedConditions

    constructor(browser:any, timeOut=60000){
        this.curBrowser=browser
        this.timeOut=timeOut
        this.until=protractor.ExpectedConditions
    }

    async clickOnElement(xpath:string, timeOut=this.timeOut){
        console.log ("Clicking on element " + xpath)
        var el = await this.curBrowser.element(by.xpath(xpath))
        await this.curBrowser.wait(this.until.presenceOf(el), timeOut, 'Element' + xpath + 'take too long to appear in the DOM')
        await this.curBrowser.wait(this.until.elementToBeClickable(el), timeOut, 'Element' + xpath + 'is NOT clickable')
        await el.click()
    }

    async selectCheckbox(xpath:string, timeOut=this.timeOut){
        console.log ("Clicking on the checkbox " + xpath)
        var el = await this.curBrowser.element(by.xpath(xpath))
        await this.curBrowser.wait(this.until.presenceOf(el), timeOut, 'Element' + xpath + 'take too long to appear in the DOM')
        await el.click()
    }

    async sendKeyOnElement(xpath:string, data:string, timeOut=this.timeOut){
        console.log ("Send text to the element " + xpath)
        var el = await this.curBrowser.element(by.xpath(xpath))
        await this.curBrowser.wait(this.until.presenceOf(el),timeOut, 'Element' + xpath + 'take too long to appear in the DOM')
        await el.clear()
        await el.sendKeys(data)
    }
}