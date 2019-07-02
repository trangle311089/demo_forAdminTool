import { async } from "q";
import { browser, by } from "protractor";
import { LoginPage } from "../../PageObjects/LoginPage";
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage";
import { HandleMenu } from "../../CommonSupport/HandleMenu";
import { HandlePopup } from "../../CommonSupport/HandlePopup";
import { HandleEditingControl } from "../../CommonSupport/HandleEditingControl";


describe("Tenant Configuration", function(){
    let loginPage:LoginPage
    let handleEditingControl:HandleEditingControl
    let tenantConfigurationPage:TenantConfigurationPage
    let handleMenu: HandleMenu
    let handlePopup: HandlePopup    
   
    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        handleEditingControl = new HandleEditingControl(browser)
        handlePopup = new HandlePopup (browser)
        tenantConfigurationPage = new TenantConfigurationPage (browser)
        handleMenu = new HandleMenu (browser)
        await loginPage.login()
    })

    // Create the new tenancy
    it ("Should add the new tenancy successfully", async function(){
        await handleMenu.selectTenantConfigurationMenu()
        await handleEditingControl.clickAdd()
        await tenantConfigurationPage.createNewTenancy("1001","1001")
        await handlePopup.clickSave()
        await handlePopup.clickYesDel('OK')
        await handlePopup.clickOK('ok')
        await tenantConfigurationPage.verifyDisplayedTenancy('1001')
    })

    // Edit the existing tenancy
    it ("Should navigate to the active status page when editing the tenancy", async function(){
        await handleMenu.selectTenantConfigurationMenu()      
        await tenantConfigurationPage.selectTenancy("1001")
        await handleEditingControl.clickEdit()
        await handleMenu.verifyDisplayedVerMenu('active status')
    })

    // Copy the tenancy
    it ("Should copy new tenancy when clicking on copy option", async function(){
        await handleMenu.selectTenantConfigurationMenu()      
        await tenantConfigurationPage.selectTenancy("1001")
        await handleEditingControl.clickCopy()
        await tenantConfigurationPage.createNewTenancy("copied1", "copied1")
        await handlePopup.clickSave()
        await handlePopup.clickYesDel('OK')
        await handlePopup.clickOK('ok')
        await tenantConfigurationPage.verifyDisplayedTenancy('copied1')
    })

    // Delete the tenancy
    it ("Should disable the tenancy when clicking on delete option", async function(){
        await handleMenu.selectTenantConfigurationMenu()      
        await tenantConfigurationPage.selectTenancy("1001")
        await handleEditingControl.clickDelete()
        await handlePopup.clickYesDel('delete')
        await handlePopup.clickYesDel('delete')
        await tenantConfigurationPage.showDisabledTenancy()
        await tenantConfigurationPage.verifyDisabledTenancy('1001')
        await tenantConfigurationPage.showDisabledTenancy()
    })

    // Enable the tenancy
    it ("Should enable the tenancy when clicking on enable option", async function(){
        await tenantConfigurationPage.showDisabledTenancy()
        await tenantConfigurationPage.selectTenancy('1001')
        await tenantConfigurationPage.enableTenancy()
        await handlePopup.clickYesDel('yes')       
        await handlePopup.clickOK('ok')
        await tenantConfigurationPage.verifyEnabledTenancy('1001')
    })

    // Disable the tenancy
    it('Should disable the selected tenancy when clicking on disable option', async function(){
        await tenantConfigurationPage.selectTenancy('copied1')
        await tenantConfigurationPage.disableTenancy()
        await handlePopup.clickYesDel('yes')
        await handlePopup.clickOK('ok')
        await browser.sleep(2000)
        await tenantConfigurationPage.verifyDisabledTenancy('copied1')
    })

    // Search function on the Tenant Configuration page
    it ("Should display the entry matches with the text on search field", async function(){
        await handleEditingControl.searchEntry("1001")
        await tenantConfigurationPage.verifyDisplayedTenancy('1001')
    })


})