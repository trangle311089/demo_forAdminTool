import { async } from "q";
import { browser, by } from "protractor";
import { LoginPage } from "../../PageObjects/LoginPage";
import { EditingControl } from "../../admin_core_function/editingControl/editingControl";
import { ActionPopup } from "../../admin_core_popup/actionPopup";
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage";
import { Tier1Menu } from "../../admin_core_menu/tier1Menu/tier1Menu";
import { ActionSupport } from "../../core_function/actionSupport/actionSupport";


describe("Tenant Configuration", function(){
    var loginPage:LoginPage
    var originalTimeout:number
    var editingControl:EditingControl
    var actionPopup:ActionPopup
    var tenantConfigurationPage:TenantConfigurationPage
    var tier1Menu: Tier1Menu
    var actionSupport: ActionSupport
    
   
    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        editingControl = new EditingControl(browser)
        actionPopup = new ActionPopup (browser)
        tenantConfigurationPage = new TenantConfigurationPage (browser)
        tier1Menu = new Tier1Menu(browser)
        actionSupport = new ActionSupport (browser)

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    // Create the new tenancy
    fit ("Should add the new tenancy successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
        await loginPage.clickOnSignIn()
        await tenantConfigurationPage.navigateToTenantConfiguration()
        await editingControl.clickAdd()
        await actionPopup.showPopup('add')
        await tenantConfigurationPage.createNewTenancy("1002","1002")
        await actionPopup.clickSaveAndClose_btn()
        await actionPopup.showPopup('ALERT')
        await actionPopup.clickPopup_btn('OK')
        await actionPopup.showPopup('INFORMATION')
        await actionPopup.clickPopup_OKbtn('ok')
    })

    // Edit the existing tenancy
    it ("should navigate to the active status page when editing the tenancy", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenantConfigurationPage.selectTenancy("1001")
        await editingControl.clickEdit()
        await expect(tier1Menu.presenceOfTier1Ver('active status'))
    })

    // Copy the tenancy
    it("should copy new tenancy when clicking on copy option", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenantConfigurationPage.selectTenancy('1001')
        await editingControl.clickCopy()
        await actionPopup.showPopup('copy')
        await tenantConfigurationPage.createNewTenancy("copied", "copied")
        await actionPopup.clickSaveAndClose_btn()
        await actionPopup.showPopup('ALERT')
        await actionPopup.clickPopup_btn('OK')
        await actionPopup.showPopup('INFORMATION')
        await actionPopup.clickPopup_OKbtn('ok')
    })

    // Delete the tenancy
    it("should disable the tenancy when clicking on delete option", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenantConfigurationPage.selectTenancy('1001')
        await editingControl.clickDelete()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
    })

    // Enable the tenancy
    it("should enable the tenancy when clicking on enable option", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenantConfigurationPage.showDisabledTenancy()
        await tenantConfigurationPage.selectTenancy('1001')
        await tenantConfigurationPage.enableTenancy()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('yes')
        await actionPopup.showPopup('INFORMATION')
        await actionPopup.clickPopup_OKbtn('ok')
    })

    // Disable the tenancy
    it('should disable the selected tenancy when clicking on disable option', async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await tenantConfigurationPage.selectTenancy('1001')
        await tenantConfigurationPage.disableTenancy()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('yes')
        await actionPopup.showPopup('INFORMATION')
        await actionPopup.clickPopup_OKbtn('ok')
        await tenantConfigurationPage.showDisabledTenancy()
        await tenantConfigurationPage.selectTenancy('1001')
        await tenantConfigurationPage.enableTenancy()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('yes')
        await actionPopup.showPopup('INFORMATION')
        await actionPopup.clickPopup_OKbtn('ok')
    })

    // Search function on the Tenant Configuration page
    it("should display the entry matches with the text on search field", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await editingControl.searchEntry("1001")
        await editingControl.removeSearchEntry()
    })

    afterEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
    })


})