import { async } from "q";
import { browser, by } from "protractor";
import { sign } from "crypto";
import { LoginPage } from "../../PageObjects/LoginPage";
import { protractor } from "protractor/built/ptor";

describe("Tenant Configuration", function(){
    var loginPage:LoginPage
    var originalTimeOut:number

    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        originalTimeOut = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000
    })

    // create new tenancy
    fit ("should add the new tenancy successfully", async function(){
        var add_opt = browser.element(by.xpath("//i[@class='fa fa-plus-circle add']"))
        var add_pop = browser.element(by.xpath("//span[@class='dialog-title ng-binding' and contains (text(),'add')]"))
        var tenant_id = browser.element(by.id("txtTenantId"))
        var tenant_name = browser.element(by.id("txtTenantName"))
        var save_btn = browser.element(by.xpath("//button [@ng-click='saveAndClose()']"))
        var alert_pop = browser.element(by.xpath("//span[@class='dialog-title ng-binding' and contains (text(),'ALERT')]"))
        var alert_OK_btn = browser.element(by.xpath("//button[@class='button action-btn btn-save ng-binding' and contains (text(),'OK')]"))
        var inform_pop = browser.element(by.xpath("//div[@ng-bind='content' and contains (text(),'Your changes have been saved.')]"))
        var inform_btn = browser.element(by.xpath("//button[@class='action-btn button btn-save' and contains (text(), 'ok')]"))
      
        browser.waitForAngularEnabled(false)
        browser.get("http://localhost:81/landlord/#/login")
        browser.manage().window().maximize()

        await loginPage.login()
        await browser.sleep(2000)
        await add_opt.click()
        await add_pop.isDisplayed()
        await tenant_id.sendKeys("")
        await tenant_name.sendKeys("")
        await save_btn.click()
        await alert_pop.isDisplayed()
        await alert_OK_btn.click()
        await inform_pop.isDisplayed()
        await browser.sleep(2000)
        await expect(inform_pop.getText()).toEqual('Your changes have been saved.')
        await inform_btn.click()
    })

    //edit the tenancy
    it("should navigate to the active status page when editing the tenancy", async function(){
        var signIn_btn = browser.element(by.xpath("//button[@ng-click='login()']"))
        var selected_tenancy = browser.element(by.xpath("//div[@col-id='tenantid' and contains (text(),'1001')]"))
        var edit_opt = browser.element(by.xpath("//i[@class='fa fa-pencil edit']"))
        var activeStt_bcrumb = browser.element(by.xpath("//a[@ng-click='breadcrumbClick()' and contains (text(),'Active Status')]"))

        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlord/#/login")
        await browser.manage().window().maximize()

        await signIn_btn.click()
        await selected_tenancy.click()
        await edit_opt.click()
        await browser.sleep(5000)
        await expect (activeStt_bcrumb.getText()).toEqual("ACTIVE STATUS")
    })

    // delete the tenancy
    it("should disable the tenancy when clicking on delete option", async function(){
        var signIn_btn = browser.element(by.xpath("//button[@ng-click='login()']"))
        var selected_tenancy = browser.element(by.xpath("//div[@col-id='tenantid' and contains (text(),'1001')]"))
        var delete_opt = browser.element(by.xpath("//i[@class='fa fa-trash-o delete']"))
        var attention_del_pop = browser.element(by.xpath("//span[@class='dialog-title ng-binding' and contains (text(),'ATTENTION')]"))
        var attention_del_btn = browser.element(by.xpath("//button[@class='button action-btn btn-save ng-binding' and contains (text(),'delete')]"))
        var confirm_del_pop = browser.element(by.xpath("//div[@class='modal-message ng-binding' and contains (text(),'Are you sure?')]"))
        var confirm_del_btn = browser.element(by.xpath("//button[@class='button action-btn btn-save ng-binding' and contains (text(),'delete')]"))

        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlord/#/login")
        await browser.manage().window().maximize()

        await signIn_btn.click()
        await selected_tenancy.click()
        await delete_opt.click()
        await attention_del_pop.isDisplayed()
        await attention_del_btn.click()
        await browser.sleep(2000)
        await confirm_del_pop.isDisplayed()
        await browser.sleep(2000)
        await expect(confirm_del_pop.getText()).toEqual('Are you sure?')
        await confirm_del_btn.click()
    })

    // enable the tenancy
    it("should enable the tenancy when clicking on enable option", async function(){
        var signIn_btn = browser.element(by.xpath("//button[@ng-click='login()']"))
        var show_disableTnt_check = browser.element(by.xpath("//input[@id='chkShowDisableTenant']"))
        var selected_disTenancy = browser.element(by.xpath("//div[@col-id='tenantid' and contains (text(),'1002')]"))
        var enable_opt = browser.element(by.xpath("//span[@ng-disabled='!checkEnableCondition()']"))
        var attention_enable_pop = browser.element(by.xpath("//span[@class='dialog-title ng-binding' and contains (text(),'ATTENTION')]"))
        var attention_enableYes_btn = browser.element(by.xpath("//button[@class='button action-btn btn-save ng-binding' and contains (text(),'yes')]"))
        var inform_Enable_pop = browser.element(by.xpath("//div[@ng-bind='content' and contains(text(),'This tenant has been enabled.')]"))
        var inform_Enable_btn = browser.element(by.xpath("//button[@class='action-btn button btn-save' and contains (text(),'ok')]"))

        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlord/#/login")
        await browser.manage().window().maximize()

        await signIn_btn.click()
        await show_disableTnt_check.click()
        await browser.sleep(2000)
        await selected_disTenancy.click()
        await enable_opt.click()
        await attention_enable_pop.isDisplayed()
        await attention_enableYes_btn.click()
        await inform_Enable_pop.isDisplayed
        await browser.sleep(5000)
        await expect (inform_Enable_pop.getText()).toEqual('This tenant has been enabled.')
        await inform_Enable_btn.click()
    })

    // disable the tenancy
    it('should disable the selected tenancy when clicking on disable option', async function(){
        var signIn_btn = browser.element(by.xpath("//button[@ng-click='login()']"))
        var show_disableTnt_check = browser.element(by.xpath("//input[@id='chkShowDisableTenant']"))
        var selected_enTenancy = browser.element(by.xpath("//div[@col-id='tenantid' and contains (text(),'1002')]"))
        var disable_opt = browser.element(by.xpath("//span[@ng-disabled='!checkDisableCondition()']"))
        var attention_disable_pop = browser.element(by.xpath("//span[@class='dialog-title ng-binding' and contains (text(),'ATTENTION')]"))
        var attention_disableYes_btn = browser.element(by.xpath("//button[@class='button action-btn btn-save ng-binding' and contains (text(),'yes')]"))
        var inform_Disable_pop = browser.element(by.xpath("//div[@ng-bind='content' and contains(text(),'This tenant has been disabled.')]"))
        var inform_Disable_btn = browser.element(by.xpath("//button[@class='action-btn button btn-save' and contains (text(),'ok')]"))

        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlord/#/login")
        await browser.manage().window().maximize()

        await signIn_btn.click()
        await show_disableTnt_check.click()
        await selected_enTenancy.click()
        await disable_opt.click()
        await attention_disable_pop.isDisplayed()
        await attention_disableYes_btn.click()
        await inform_Disable_pop.isDisplayed()
        await browser.sleep(2000)
        await expect (inform_Disable_pop.getText()).toEqual("This tenant has been disabled.")
        await inform_Disable_btn.click()
    })

    // search function on the Tenant Configuration page
    it("should display the entry which matches with the character on search field", async function(){
        var signIn_btn = browser.element(by.xpath("//button[@ng-click='login()']"))
        var search_field = browser.element(by.xpath("//input[@placeholder='search']"))
        var matched_tenancy = browser.element(by.xpath("//div[@col-id='tenantid' and contains (text(),'1001')]"))
        var remove_search = browser.element(by.xpath("//i[@ng-click='removeSearch()']"))

        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlord/#/login")
        await browser.manage().window().maximize()

        await signIn_btn.click()
        await search_field.sendKeys('1001')
        await browser.sleep(2000)
        await expect (matched_tenancy.isDisplayed)
        await browser.sleep(2000)
        await remove_search.click()

    })



})