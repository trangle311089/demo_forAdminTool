import { ActiveStatusPage } from "../../PageObjects/ActiveStatusPage";
import { async } from "q";
import { browser, by} from "protractor";
import { LoginPage } from "../../PageObjects/LoginPage";
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage";
import { EditingControl } from "../../admin_core_function/editingControl/editingControl";
import { ActionPopup } from "../../admin_core_popup/actionPopup";

describe ("Active Status", function(){
    var loginPage: LoginPage
    var activeStatus: ActiveStatusPage
    var tenantConfiguration: TenantConfigurationPage
    var editingControl: EditingControl
    var actionPopup: ActionPopup

    var originalTimeout: number
    
    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        activeStatus = new ActiveStatusPage (browser)
        tenantConfiguration = new TenantConfigurationPage(browser)
        editingControl = new EditingControl(browser)
        actionPopup = new ActionPopup (browser)
        

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ("should display the Active Status page", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlord/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenantConfiguration.selectTenancy()
        await editingControl.clickEdit()
        await activeStatus.show_Tier1VerActiveStt()
    })

    it ("should remove the active user", async function(){

        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlord/#/login")
        await browser.manage().window().maximize()

        await loginPage.inputAudience("ec2-52-63-37-167.ap-southeast-2.compute.amazonaws.com")
        await loginPage.login()
        await tenantConfiguration.selectTenancy()
        await editingControl.clickEdit()
        await activeStatus.show_Tier1VerActiveStt()
        await browser.sleep (2000)
        await activeStatus.selectActiveUser()
        await browser.sleep (2000)
        await editingControl.clickRemove()
        await actionPopup.showAttentionPop()
        await actionPopup.clickAttentionRem_btn()
        await browser.sleep(2000)
        await actionPopup.showAttentionPop()
        await actionPopup.clickAttentionRem_btn1()
    
    })

    it ("should display the active user which has the text matches with the text in the searching field", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlord/#/login")
        await browser.manage().window().maximize()

        await loginPage.inputAudience("ec2-52-63-37-167.ap-southeast-2.compute.amazonaws.com")
        await loginPage.login()
        await tenantConfiguration.selectTenancy()
        await editingControl.clickEdit()
        await activeStatus.show_Tier1VerActiveStt()
        await editingControl.searchEntry("Dung Tran")
        await activeStatus.showActiveUser()

    })
   
    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

    })