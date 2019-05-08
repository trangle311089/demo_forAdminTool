import { async } from "q";
import { browser, by } from "protractor";
import { LoginPage } from "../../PageObjects/LoginPage";
import { sign } from "crypto";

describe("Login Page", function(){
    var loginPage:LoginPage

    beforeEach(async function(){
        // await browser.restart()
        loginPage = new LoginPage(browser)

    })

    it("should login successfully when click on Sign In button", async function(){
        // var signIn_btn = browser.element(by.xpath("//button[@ng-click='login()']"))
        var tenant_bcrumb = browser.element(by.xpath('//a[@class="verical-menu-item ng-binding" and contains (text(),"Tenant Configuration")]'))
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlord/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        // await signIn_btn.click()
        await browser.sleep(5000)
        await expect (tenant_bcrumb.getText()).toEqual("TENANT CONFIGURATION")
    })


})