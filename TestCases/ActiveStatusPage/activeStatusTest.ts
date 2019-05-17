import { ActiveStatusPage } from "../../PageObjects/ActiveStatusPage";
import { async } from "q";
import { browser, by} from "protractor";
import { LoginPage } from "../../PageObjects/LoginPage";
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage";
import { EditingControl } from "../../admin_core_function/editingControl/editingControl";
import { ActionPopup } from "../../admin_core_popup/actionPopup";
import { Tier1Menu } from "../../admin_core_menu/tier1Menu/tier1Menu";

describe ("Active Status", function(){
    var loginPage: LoginPage
    var activeStatus: ActiveStatusPage
    var tenantConfiguration: TenantConfigurationPage
    var editingControl: EditingControl
    var actionPopup: ActionPopup
    var tier1Menu: Tier1Menu
    var originalTimeout: number
    
    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        activeStatus = new ActiveStatusPage (browser)
        tenantConfiguration = new TenantConfigurationPage(browser)
        editingControl = new EditingControl(browser)
        actionPopup = new ActionPopup (browser)
        tier1Menu = new Tier1Menu(browser)
       
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ("should remove the active user", async function(){

        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.inputAudience("ec2-52-63-37-167.ap-southeast-2.compute.amazonaws.com")
        await loginPage.login()
        await tenantConfiguration.selectTenancy('1001')
        await editingControl.clickEdit()
        await activeStatus.selectActiveUser('Dung Tran')
        await editingControl.clickRemove()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('Remove')
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('remove')
           
    })

    it ("should display the active user which has the text matches with the text in the searching field", async function(){
        
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.inputAudience("ec2-52-63-37-167.ap-southeast-2.compute.amazonaws.com")
        await loginPage.login()
        await tenantConfiguration.selectTenancy('1001')
        await editingControl.clickEdit()
        await tier1Menu.presenceOfTier1Hor('Users')
        await editingControl.searchEntry('Dung Tran')
        await expect (activeStatus.presenceOfActive('Dung Tran'))
    })
   
    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

    })