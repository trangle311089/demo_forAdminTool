import { async } from "q";
import { browser, by } from "protractor";
import { LoginPage } from "../../PageObjects/LoginPage";
import { EditingControl } from "../../admin_core_function/editingControl/editingControl";
import { ActionPopup } from "../../admin_core_popup/actionPopup";
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage";
import { HandleMenu } from "../../CommonSupport/HandleMenu";
import { ActionSupport } from "../../core_function/actionSupport";


describe("Tenant Configuration", function(){
    var loginPage:LoginPage
    var editingControl:EditingControl
    var actionPopup:ActionPopup
    var tenantConfigurationPage:TenantConfigurationPage
    var handleMenu: HandleMenu
    let actionSupport: ActionSupport
    
   
    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        editingControl = new EditingControl(browser)
        actionPopup = new ActionPopup (browser)
        tenantConfigurationPage = new TenantConfigurationPage (browser)
        handleMenu = new HandleMenu (browser)
        await loginPage.login()

    })

    // Create the new tenancy
    it ("Should add the new tenancy successfully", async function(){
    
        await handleMenu.navigateToTenantConfiguration()
        await editingControl.clickAdd()
        await actionPopup.showPopup('add')
        await tenantConfigurationPage.createNewTenancy("1007","1007")
        await actionPopup.clickSaveAndClose_btn()
        await actionPopup.showPopup('ALERT')
        await actionPopup.clickPopup_btn('OK')
        await actionPopup.showPopup('INFORMATION')
        await actionPopup.clickPopup_OKbtn('ok')
        await tenantConfigurationPage.displayedTenancy('1007')
    })

    // Edit the existing tenancy
    it ("Should navigate to the active status page when editing the tenancy", async function(){
        await handleMenu.navigateToTenantConfiguration()      
        await tenantConfigurationPage.selectTenancy("1001")
        await editingControl.clickEdit()
        await handleMenu.presenceOfVerMenu('active status')
    })

    // Copy the tenancy
    it ("Should copy new tenancy when clicking on copy option", async function(){
        await handleMenu.navigateToTenantConfiguration()      
        await tenantConfigurationPage.selectTenancy("1001")
        await editingControl.clickCopy()
        await actionPopup.showPopup('copy')
        await tenantConfigurationPage.createNewTenancy("copied1", "copied1")
        await actionPopup.clickSaveAndClose_btn()
        await actionPopup.showPopup('ALERT')
        await actionPopup.clickPopup_btn('OK')
        await actionPopup.showPopup('INFORMATION')
        await actionPopup.clickPopup_OKbtn('ok')
    })

    // Delete the tenancy
    it ("Should disable the tenancy when clicking on delete option", async function(){
        await handleMenu.navigateToTenantConfiguration()      
        await tenantConfigurationPage.selectTenancy("1001")
        await editingControl.clickDelete()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
    })

    // Enable the tenancy
    it ("Should enable the tenancy when clicking on enable option", async function(){
        await tenantConfigurationPage.showDisabledTenancy()
        await tenantConfigurationPage.selectTenancy('1001')
        await tenantConfigurationPage.enableTenancy()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('yes')
        await actionPopup.showPopup('INFORMATION')
        await actionPopup.clickPopup_OKbtn('ok')
    })

    // Disable the tenancy
    it('Should disable the selected tenancy when clicking on disable option', async function(){
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
    fit ("Should display the entry matches with the text on search field", async function(){
        await editingControl.searchEntry("1001")
        await tenantConfigurationPage.displayedTenancy('1001')
    })


})