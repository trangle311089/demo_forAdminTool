import { async } from "q";
import { browser, by } from "protractor";
import { LoginPage } from "../../PageObjects/LoginPage";
import { sign } from "crypto";
import { Tier1Menu } from "../../admin_core_menu/tier1Menu/tier1Menu";
import { ActionSupport } from "../../core_function/actionSupport/actionSupport";

describe("Login Page", function(){
    var loginPage:LoginPage
    var tier1Menu: Tier1Menu
    var actionSupport: ActionSupport
    var originalTimeout:number

    beforeEach(async function(){
        loginPage = new LoginPage(browser)
        tier1Menu = new Tier1Menu(browser)
        actionSupport = new ActionSupport (browser)

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000000

    })

    fit ("Should login successfully when click on Sign In button", async function(){            
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
        await loginPage.login()
        await tier1Menu.presenceOfTier1Ver('active status')
    })
    
    it ("Should login successfully with pcp audience", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
        await loginPage.inputAudience('ec2-52-63-37-167.ap-southeast-2.compute.amazonaws.com')
        await tier1Menu.presenceOfTier1Ver('active status')
    })
        
    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

})