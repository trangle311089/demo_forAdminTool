import { async } from "q";
import { browser, by } from "protractor";
import { LoginPage } from "../../PageObjects/LoginPage";
import { sign } from "crypto";
import { Tier1Menu } from "../../admin_core_menu/tier1Menu/tier1Menu";
import { ActionSupport } from "../../core_function/actionSupport/actionSupport";

// define the name of this spec "Login Page"
// define the variables for this spec to call to other page object
describe("Login Page", function(){
    var loginPage:LoginPage
    var tier1Menu: Tier1Menu
    var actionSupport: ActionSupport
    var originalTimeout:number

    // define some shared setup before running the test script in this spec
    // includes : page object, timeout
    beforeEach(async function(){
        loginPage = new LoginPage(browser)
        tier1Menu = new Tier1Menu(browser)
        actionSupport = new ActionSupport (browser)

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    // Test script to verify when clicking on Sign In button 
    it ("Should login successfully when click on Sign In button", async function(){            
        // Load the Admin Tool - Sign In page
        await actionSupport.startBrowser()

        // Find the element Sign In button with ng-click - "//button[@ng-click='login()']"
        // Then call action click on this element
        await loginPage.login()

        // Define the expectation after login successfully, the Tier 1 vertical menu "Tenant Configuration" should be displayed
        await tier1Menu.presenceOfTier1Ver('Tenant Configuration')
    })
    
    // Test script to verify the sign in option with pcp audience
    it ("Should login successfully with pcp audience", async function(){
        await actionSupport.startBrowser()
        await loginPage.inputAudience('ec2-52-63-37-167.ap-southeast-2.compute.amazonaws.com')
        await loginPage.login()
        await tier1Menu.presenceOfTier1Ver('Tenant Configuration')
    })
        
    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

})