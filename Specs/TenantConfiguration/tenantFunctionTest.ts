import { async } from "q";
import { browser, by } from "protractor";
import { LoginPage } from "../../PageObjects/LoginPage";
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage";
import { HandleMenu } from "../../CommonSupport/HandleMenu";
import { HandlePopup } from "../../CommonSupport/HandlePopup";
import { HandleEditingControl } from "../../CommonSupport/HandleEditingControl";
import tenantdata from "../../TestData/tenantdata.json"


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

    // Create the new tenancy by getting json data
    it ("should create tenancy successfully", async function(){
        let tenant = tenantdata["TC01"]
        let tenantid = tenant.tenantid
        let tenantName = tenant.tenantName
        let tenantDescription = tenant.description
        console.log("STEP 2: Navigate to Tenant Configuration menu")
        await handleMenu.selectTenantConfigurationMenu()
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
        console.log ("STEP 8: Verify the new tenancy is presented on tenant list")
        await tenantConfigurationPage.verifyDisplayedTenancy('1001')
    })

    // Edit the existing tenancy
    it ("should navigate to the active status page when editing the tenancy", async function(){
        console.log("STEP 2: Navigate to Tenant Configuration menu")
        await handleMenu.selectTenantConfigurationMenu() 
        console.log("STEP 3: Select the existing tenant on grid")     
        await tenantConfigurationPage.selectTenancy("1001")
        console.log("STEP 4: Click on edit option")
        await handleEditingControl.clickEdit()
        console.log("STEP 5: Verify Active Status menu displayed")
        await handleMenu.verifyDisplayedVerMenu('active status')
    })

    // Copy the tenancy
    it ("should copy tenancy successfully", async function(){
        let tenant = tenantdata["TC02"]
        let tenantid = tenant.tenantid
        let tenantName = tenant.tenantName
        let tenantDescription = tenant.description
        console.log("STEP 2: Navigate to Tenant Configuration menu")
        await handleMenu.selectTenantConfigurationMenu()  
        console.log("STEP 3: Select the existing tenant on grid")   
        await tenantConfigurationPage.selectTenancy("1001")
        console.log("STEP 4: Click on the copy option")   
        await handleEditingControl.clickCopy()
        console.log("STEP 4: Input tenantid, tenantName, tenantDescription value on COPY popup")
        await tenantConfigurationPage.createNewTenancy(tenantid, tenantName, tenantDescription)
        console.log("STEP 5: Click on the SAVE button on the COPY popup")
        await handlePopup.clickSave()
        console.log ("STEP 6: Click on the OK button on the ALERT popup")
        await handlePopup.clickYesDel('OK')
        console.log ("STEP 7: Click on the OK button on the INFORMATION popup")
        await handlePopup.clickOK('ok')
        console.log ("STEP 8: Verify the new tenancy is presented on tenant list")
        await tenantConfigurationPage.verifyDisplayedTenancy('1002')
    })
   
    // Disable the tenancy
    it('should disable tenancy successfully', async function(){
        console.log("STEP 2: Navigate to Tenant Configuration menu")
        await handleMenu.selectTenantConfigurationMenu()
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
        console.log("STEP 8: Verify disable tenant displayed with correct color #333ecf")
        await tenantConfigurationPage.verifyDisabledTenancy("1001")
    })

    // Enable the tenancy
    it ("should enable tenancy successfully", async function(){
        console.log("STEP 2: Navigate to Tenant Configuration menu")
        await handleMenu.selectTenantConfigurationMenu()
        // console.log("STEP 3: Click on Show disabled tenants option")
        // await tenantConfigurationPage.showDisabledTenancy()
        console.log("STEP 4: Select the existing tenant on grid")
        await tenantConfigurationPage.selectTenancy('1001')
        console.log("STEP 5: Click on the enable option")
        await tenantConfigurationPage.enableTenancy()
        console.log("STEP 6: Click on YES button on the ATTENTION popup")
        await handlePopup.clickYesDel('yes')
        console.log("STEP 7: Click on OK button on the INFORMATION popup")       
        await handlePopup.clickOK('ok')
        console.log("STEP 8: Verify enable tenant displayed with correct color #000000")
        await tenantConfigurationPage.verifyEnabledTenancy('1001')
    })

    // Search function on the Tenant Configuration page
    it ("should search matched entry successfully", async function(){
        console.log("STEP 2: Navigate to Tenant Configuration menu")
        await handleMenu.selectTenantConfigurationMenu()
        console.log("STEP 3: Enter the tenant id that want to search on the search field")
        await handleEditingControl.searchEntry("1001")
        console.log("STEP 4: Verify matched entry displayed on grid")
        await tenantConfigurationPage.verifyDisplayedTenancy('1001')
    })

    // Delete the tenancy - will be updated because the business change. Tenant will be delete from grid.
    // it ("Should disable the tenancy when clicking on delete option", async function(){
    //     await handleMenu.selectTenantConfigurationMenu()      
    //     await tenantConfigurationPage.selectTenancy("1001")
    //     await handleEditingControl.clickDelete()
    //     await handlePopup.clickYesDel('delete')
    //     await handlePopup.clickYesDel('delete')
    //     await tenantConfigurationPage.showDisabledTenancy()
    //     await tenantConfigurationPage.verifyDisabledTenancy('1001')
    //     await tenantConfigurationPage.showDisabledTenancy()
    // })
})