import { async } from "q";
import { browser, by } from "protractor";
import { LoginPage } from "../../PageObjects/LoginPage";
import { sign } from "crypto";

describe("Login Page", function(){
    var loginPage:LoginPage
    var originalTimeout:number

    beforeEach(async function(){
        // await browser.restart()
        loginPage = new LoginPage(browser)
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000

    })

    it("should login successfully when click on Sign In button", async function(){
        var tenant_bcrumb = browser.element(by.xpath('//a[@class="verical-menu-item ng-binding" and contains (text(),"Tenant Configuration")]'))
        
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await browser.sleep(5000)
        await expect (tenant_bcrumb.getText()).toEqual("TENANT CONFIGURATION")
    })
    
    it ("should login successfully with pcp audience", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.inputAudience('ec2-52-63-37-167.ap-southeast-2.compute.amazonaws.com')
        await loginPage.login()
    })
    
    
    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

})