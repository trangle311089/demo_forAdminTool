import { by, element, ProtractorBrowser, ProtractorExpectedConditions, protractor, browser } from 'protractor';
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
        await this.curBrowser.wait(this.until.elementToBeClickable(el), this.timeOut, 'Element' + xpath + 'is NOT clickable')
        await browser.actions().mouseMove(el).click().perform()
    }

    async presentElement(xpath:string, timeOut=this.timeOut){
        console.log ("Show the element " + xpath)
        var el = await this.curBrowser.element(by.xpath(xpath))
        await this.curBrowser.wait(this.until.presenceOf(el), timeOut, 'Element' + xpath + 'take too long to appear in the DOM')
        await browser.isElementPresent(el)
    }
}