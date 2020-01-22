import { async } from "q";
import { $,browser, by, element } from "protractor";
import { LoginPage } from "../../PageObjects/LoginPage";
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage";
import { HandleMenu } from "../../CommonSupport/HandleMenu";
import { HandlePopup } from "../../CommonSupport/HandlePopup";
import { HandleEditingControl } from "../../CommonSupport/HandleEditingControl";
import tenantdata from "../../TestData/tenantdata.json"
import { HandleValidation } from "../../CommonSupport/HandleValidation";



describe("Tenant Configuration", function(){
    let loginPage:LoginPage
    let handleEditingControl:HandleEditingControl
    let tenantConfigurationPage:TenantConfigurationPage
    let handleMenu: HandleMenu
    let handlePopup: HandlePopup 
    let handleValidation: HandleValidation 
  

         
    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        handleEditingControl = new HandleEditingControl(browser)
        handlePopup = new HandlePopup (browser)
        tenantConfigurationPage = new TenantConfigurationPage (browser)
        handleMenu = new HandleMenu (browser)
        handleValidation = new HandleValidation (browser)     
        console.log ("STEP 1 - Launch the Admin Tool and click on SIGN IN button")
        await loginPage.login()
        console.log("STEP 2: Navigate to Tenant Configuration menu")
        await handleMenu.selectTenantConfigurationMenu()
    })

    // Create the new tenancy by getting json data
    it ("TC 01 - Create tenancy - should create tenancy successfully", async function(){
        let tenant = tenantdata["TC01"]
        let tenantid = tenant.tenantid
        let tenantName = tenant.tenantName
        let tenantDescription = tenant.description
        console.log("STEP 3: Click on the add option")
        await handleEditingControl.clickAdd()
        console.log("STEP 4: Input tenantid, tenantName, tenantDescription value on ADD popup")
        await tenantConfigurationPage.createNewTenancy(tenantid, tenantName, tenantDescription)
        console.log("STEP 5: Click on the SAVE button on the ADD popup")
        await handlePopup.clickSave()
        console.log ("STEP 6: Click on the OK button on the ALERT popup")
        await handlePopup.clickYesDel('OK')
        console.log ("STEP 7: Click on the OK button on the INFORMATION popup")
        await handlePopup.clickOK('ok')
        console.log ("STEP 8: Verify the new tenancy is displayed on tenant list")
        await handleEditingControl.verifyDisplayedEntry('1001')
    })

    // Edit the existing tenancy
    it ("TC 02 - Edit tenancy - should navigate to the active status page when editing the tenancy", async function(){
        console.log("STEP 3: Select the existing tenant on grid")     
        await tenantConfigurationPage.selectTenancy("1001")
        console.log("STEP 4: Click on edit option")
        await handleEditingControl.clickEdit()
        console.log("STEP 5: Verify Active Status menu displayed")
        await handleMenu.verifyDisplayedVerMenu('active status')
    })

    // Copy the tenancy
    it ("TC 03 - Copy tenancy - should copy tenancy successfully", async function(){
        let tenant = tenantdata["TC02"]
        let tenantid = tenant.tenantid
        let tenantName = tenant.tenantName
        let tenantDescription = tenant.description
        console.log("STEP 3: Select the existing tenant on grid")   
        await tenantConfigurationPage.selectTenancy("1001")
        console.log("STEP 4: Click on the copy option")   
        await handleEditingControl.clickCopy()
        console.log("STEP 5: Input tenantid, tenantName, tenantDescription value on COPY popup")
        await tenantConfigurationPage.createNewTenancy(tenantid, tenantName, tenantDescription)
        console.log("STEP 6: Click on the SAVE button on the COPY popup")
        await handlePopup.clickSave()
        console.log("STEP 7: Click on the OK button on the ALERT popup")
        await handlePopup.clickYesDel('OK')
        console.log("STEP 8: Click on the OK button on the INFORMATION popup")
        await handlePopup.clickOK('ok')
        console.log("STEP 9: Verify the new tenancy is displayed on tenant list")
        await handleEditingControl.verifyDisplayedEntry('1002')
    })
   
    // Disable the tenancy
    it('TC 04 - Disable tenancy - should disable tenancy successfully', async function(){
        console.log("STEP 3: Select the existing tenant on grid")
        await tenantConfigurationPage.selectTenancy('1001')
        console.log("STEP 4: Click on disable option")
        await tenantConfigurationPage.disableTenancy()
        console.log("STEP 5: Click on YES button on the ATTENTION popup")
        await handlePopup.clickYesDel('yes')
        console.log("STEP 6: Click on OK button on the INFORMATION popup")
        await handlePopup.clickOK('ok')
        console.log("STEP 7: Click on Show disabled tenants option")
        await tenantConfigurationPage.showDisabledTenancy()
        console.log("STEP 8: Verify disable tenant highlighted in color #333ecf")
        await tenantConfigurationPage.verifyDisabledTenancy("1001")
    })

    // Enable the tenancy
    it ("TC 05 - Enable tenancy - should enable tenancy successfully", async function(){
        console.log("STEP 3: Select the existing tenant on grid")
        await tenantConfigurationPage.selectTenancy('1001')
        console.log("STEP 4: Click on the enable option")
        await tenantConfigurationPage.enableTenancy()
        console.log("STEP 5: Click on YES button on the ATTENTION popup")
        await handlePopup.clickYesDel('yes')
        console.log("STEP 6: Click on OK button on the INFORMATION popup")       
        await handlePopup.clickOK('ok')
        console.log("STEP 7: Verify enable tenant displayed in color #000000")
        await tenantConfigurationPage.verifyEnabledTenancy('1001')
    })

    // Search function on the Tenant Configuration page
    it ("TC 06 - Search entry - should search matched entry successfully", async function(){
        console.log("STEP 3: Enter the tenant id that want to search on the search field")
        await handleEditingControl.searchEntry("1001")
        console.log("STEP 4: Verify matched entry displayed on grid")
        await handleEditingControl.verifyDisplayedEntry('1001')
    })

    // Delete the tenancy - will be updated because the business change. Tenant will be delete from grid.
    // it ("TC 07 - Delete tenancy - should delete tenancy successfully", async function(){
    //     console.log("STEP 3: Select the existing tenant on grid")
    //     await tenantConfigurationPage.selectTenancy('1002')
    //     console.log("STEP 4: Click on delete option")
    //     await handleEditingControl.clickDelete()
    //     console.log("STEP 5: Click on DELETE button on the ATTENTION popup")
    //     await handlePopup.clickYesDel('delete')
    //     console.log("STEP 6: Click on DELETE button on the ATTENTION popup")
    //     await handlePopup.clickYesDel('delete')
    //     console.log ("STEP 7: Verify delete tenancy successfully")
    //     await handleEditingControl.verifyRemoveSuccessfully('1002')
    // })

    // Validation message
    it ("TC 08 - Required field - should validate when Tenant Id field is empty", async function(){
        console.log("STEP 3: Click on add option")
        await handleEditingControl.clickAdd()
        console.log("STEP 4: Input Tenant Name value")
        await tenantConfigurationPage.inputTenantName('Tenant 1003')
        console.log("STEP 5: Click on SAVE button on the popup")
        await handlePopup.clickSave()
        console.log("STEP 6: Verify validation message Required field displayed")
        await handleValidation.verifyRequiredFieldMsg()
        console.log("STEP 7: Verify Tenant Id field bordered in red")
        await handleValidation.verifyFieldInRed('txtTenantId')
    })

    it ("TC 09 - Required field - should validate when Tenant Name field is empty", async function(){
        console.log("STEP 3: Click on add option")
        await handleEditingControl.clickAdd()
        console.log("STEP 4: Input Tenant Id value")
        await tenantConfigurationPage.inputTenantId('1003')
        console.log("STEP 5: Click on SAVE button on the popup")
        await handlePopup.clickSave()
        console.log("STEP 6: Verify validation message Required field displayed")
        await handleValidation.verifyRequiredFieldMsg()
        console.log("STEP 7: Verify Tenant Name field bordered in red")
        await handleValidation.verifyFieldInRed('txtTenantName')
    })

    it ("TC 10 - Duplicated tenantid - should validate when tenant id is duplicated", async function(){
        console.log("STEP 3: Click on add option")
        await handleEditingControl.clickAdd()
        console.log("STEP 4: Input duplicated tenant id with existing one")
        await tenantConfigurationPage.inputTenantId("1001")
        console.log("STEP 5: Verify validation message Tenant Id already exists displayed")
        await handleValidation.verifyDuplicatedTenantidMsg()
        console.log("STEP 6: Verify Tenant Id field is bordered in red")
        await handleValidation.verifyFieldInRed('txtTenantId')

    })

    it ("TC 11 - Duplicated tenant name - should validate when tenant name is duplicated", async function(){
        console.log("STEP 3: Click on add option")
        await handleEditingControl.clickAdd()
        console.log("STEP 4: Input duplicated tenant name with existing one")
        await tenantConfigurationPage.inputTenantName("Tenant 1001")
        console.log("STEP 5: Verify validation message Tenant Name already exists displayed")
        await handleValidation.verifyDuplicatedTenantNameMsg()
        console.log("STEP 6: Verify Tenant Name field is bordered in red")
        await handleValidation.verifyFieldInRed("txtTenantName")
    })
 
    it ("TC 12 - Verify Tier 1 icon - TENANT CONFIGURATION page", async function(){
        console.log ("STEP 3: Verify the Tier 1 Tenant Configuration icon")
        let xpath = "//i[@class='landlord tier1-icon']"
        let el = browser.element(by.xpath(xpath))
        await browser.imageComparison.saveElement(el,'tenantConfiguration')
        await expect (browser.imageComparison.checkElement((el),'tenantConfiguration')).toEqual(0)
        
    })
})