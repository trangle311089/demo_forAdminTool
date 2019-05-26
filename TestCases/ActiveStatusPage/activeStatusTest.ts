import { ActiveStatusPage } from "../../PageObjects/ActiveStatusPage";
import { async } from "q";
import { browser, by} from "protractor";
import { LoginPage } from "../../PageObjects/LoginPage";
import { EditingControl } from "../../admin_core_function/editingControl/editingControl";
import { ActionPopup } from "../../admin_core_popup/actionPopup";
import { ActionSupport } from "../../core_function/actionSupport/actionSupport";
import { Tier1TenantConfiguration } from "../../admin_core_menu/tier1Menu/tier1TenantConfiguration";
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage";

describe ("Active Status", function(){
    var loginPage: LoginPage
    var activeStatus: ActiveStatusPage
    var editingControl: EditingControl
    var actionPopup: ActionPopup
    var actionSupport: ActionSupport
    var tier1TenantConfiguration: Tier1TenantConfiguration
    var tenancy: TenantConfigurationPage

    var originalTimeout: number
    
    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        activeStatus = new ActiveStatusPage (browser)
        editingControl = new EditingControl(browser)
        actionPopup = new ActionPopup (browser)
        actionSupport = new ActionSupport(browser)
        tier1TenantConfiguration = new Tier1TenantConfiguration (browser)
        tenancy = new TenantConfigurationPage (browser)
       
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    it ("Should remove the active user", async function(){
        await actionSupport.startBrowser()
        await loginPage.inputAudience("ec2-52-63-37-167.ap-southeast-2.compute.amazonaws.com")
        await loginPage.login()
        await tier1TenantConfiguration.navigateToTenantConfiguration()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await activeStatus.navigateToActiveStatusPage()
        await activeStatus.selectActiveUser('Dung Tran')
        await editingControl.clickRemove()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('Remove')
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('remove')           
    })

    it ("Should display the active user which has the text matches with the text in the search field", async function(){
        await actionSupport.startBrowser()
        await loginPage.inputAudience("ec2-52-63-37-167.ap-southeast-2.compute.amazonaws.com")
        await loginPage.login()
        await tier1TenantConfiguration.navigateToTenantConfiguration()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()
        await activeStatus.navigateToActiveStatusPage()
        await editingControl.searchEntry('Dung Tran')
        await activeStatus.presenceOfActive('Dung Tran')
    })
   
    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })

    })