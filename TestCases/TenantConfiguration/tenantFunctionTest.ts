import { async } from "q";
import { browser, by } from "protractor";
import { sign } from "crypto";
import { LoginPage } from "../../PageObjects/LoginPage";
import { protractor } from "protractor/built/ptor";
import { EditingControl } from "../../admin_core_function/editingControl/editingControl";
import { ActionPopup } from "../../admin_core_popup/actionPopup";
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage";
import { arch } from "os";
import { ActionSupport } from "../../core_function/actionSupport/actionSupport";
import { ActiveStatusPage } from "../../PageObjects/ActiveStatusPage";


describe("Tenant Configuration", function(){
    var loginPage:LoginPage
    var originalTimeOut:number
    var editingControl:EditingControl
    var actionPopup:ActionPopup
    var tenantConfigurationPage:TenantConfigurationPage
    var activeStt: ActiveStatusPage
    
   
    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        editingControl = new EditingControl(browser)
        actionPopup = new ActionPopup (browser)
        tenantConfigurationPage = new TenantConfigurationPage (browser)
        activeStt = new ActiveStatusPage (browser)

        originalTimeOut = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    // Create the new tenancy
    it ("Should add the new tenancy successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()

        await loginPage.login()
        await editingControl.clickAdd()
        await actionPopup.showPopup('add')
        await tenantConfigurationPage.createNewTenancy("1001","1001")
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
        await expect (activeStt.show_Tier1VerActiveStt())
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
    fit('should disable the selected tenancy when clicking on disable option', async function(){
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
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeOut
    })


})