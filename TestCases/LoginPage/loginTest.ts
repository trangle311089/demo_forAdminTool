import { async } from "q";
import { browser, by } from "protractor";
import { LoginPage } from "../../PageObjects/LoginPage";
import { sign } from "crypto";
import { ActionSupport } from "../../core_function/actionSupport";
import { HandleMenu } from "../../CommonSupport/HandleMenu";

// define the name of this spec "Login Page"
// define the variables for this spec to call to other page object
describe("Login Page", function(){
    var loginPage:LoginPage
    var handleMenu: HandleMenu
    var actionSupport: ActionSupport
    var originalTimeout:number

    // define some shared setup before running the test script in this spec
        beforeEach(async function(){
        loginPage = new LoginPage(browser)
        handleMenu = new HandleMenu(browser)
        actionSupport = new ActionSupport (browser)
    })

    // Test script to verify when clicking on Sign In button 
    it ("Should login successfully when click on Sign In button", async function(){            

        console.log ("STEP 1: Load the Admin Tool page and click on Sign In button")
        await loginPage.login()

        console.log ("STEP 2: Verify login successfully and the Tenant Configuration menu is displayed")
        await handleMenu.presenceOfVerMenu('Tenant Configuration')
    })
    
    // Test script to verify the sign in option with pcp audience
    it ("Should login successfully with pcp audience", async function(){

        console.log("STEP 1: Input the pcp audience and click on SIGN IN button")
        await loginPage.inputAudience('ec2-52-63-37-167.ap-southeast-2.compute.amazonaws.com')

        console.log("STEP 2: Verify login successfully and the Tenant Configuration menu is displayed")
        await tier1Menu.presenceOfTier1Ver('Tenant Configuration')
    })
})