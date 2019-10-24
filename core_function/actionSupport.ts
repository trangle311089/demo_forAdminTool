import { by, ElementFinder, ProtractorBrowser, ProtractorExpectedConditions, protractor, browser } from 'protractor';
import { TIMEOUT } from 'dns';
export class ActionSupport{
    timeOut:number
    until:ProtractorExpectedConditions

    constructor(browser:ProtractorBrowser, timeOut=60000){
        this.timeOut=timeOut
        this.until=protractor.ExpectedConditions
    }

    async clickOnElement(xpath:string, timeOut=this.timeOut){
        console.log ("Action Support - Clicking on element " + xpath)
        var el = await browser.element(by.xpath(xpath))
        await browser.wait(this.until.presenceOf(el), timeOut, 'Element' + xpath + 'take too long to appear in the DOM')
        await browser.wait(this.until.elementToBeClickable(el), timeOut, 'Element' + xpath + 'is NOT clickable')
        await el.click()
    }

    async selectCheckbox(xpath:string, timeOut=this.timeOut){
        console.log ("Action Support - Clicking on the checkbox " + xpath)
        var el = await browser.element(by.xpath(xpath))
        await browser.wait(this.until.presenceOf(el), timeOut, 'Element' + xpath + 'take too long to appear in the DOM')
        await el.click()
    }

    async sendKeyOnElement(xpath:string, data:string, timeOut=this.timeOut){
        console.log ("Action Support - Send text to the element " + xpath)
        var el = await browser.element(by.xpath(xpath))
        await browser.wait(this.until.presenceOf(el),timeOut, 'Element' + xpath + 'take too long to appear in the DOM')
        await el.clear()
        await el.sendKeys(data)
    }
}