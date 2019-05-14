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
        await browser.actions().mouseMove(el).click().perform()
    }

    async presentElement(xpath:string, timeOut=this.timeOut){
        console.log ("Show the element " + xpath)
        var el = await this.curBrowser.element(by.xpath(xpath))
        await this.curBrowser.wait(this.until.presenceOf(el), timeOut, 'Element' + xpath + 'take too long to appear in the DOM')
        // await this.curBrowser.wait(this.until.visibilityOf(el), timeOut, 'Element' + xpath + 'take too long to visible in the DOM')
        await browser.isElementPresent(el)
    }

    async sendKeyOnElement(xpath:string, data:string, timeOut=this.timeOut){
        console.log ("Send text to the element " + xpath)
        var el = await this.curBrowser.element(by.xpath(xpath))
        await this.curBrowser.wait(this.until.presenceOf(el),timeOut, 'Element' + xpath + 'take too long to appear in the DOM')
        await el.clear()
        await this.sendSingleKey(el, data)
    }

    async sendSingleKey(el:ElementFinder, data:string){
        await this.curBrowser.sleep(60)
        await el.sendKeys(data);
    }

   }