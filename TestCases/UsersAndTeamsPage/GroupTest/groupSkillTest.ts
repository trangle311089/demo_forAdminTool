import { GroupSkillPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupSkillPage";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { GroupListPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupListPage";
import { Tier1Menu } from "../../../admin_core_menu/tier1Menu/tier1Menu";
import { async } from "q";
import { browser } from "protractor";
import { TitleBarButtons } from "../../../admin_core_function/titleBarButtons/titleBarButtons";

describe("Group Skill", function(){
    var loginPage: LoginPage
    var tenancy: TenantConfigurationPage
    var tier1Menu: Tier1Menu
    var groupList: GroupListPage
    var groupSkillPage: GroupSkillPage
    var editingControl: EditingControl
    var actionPopup: ActionPopup
    var titleBar: TitleBarButtons

    var originalTimeout: number

    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        tenancy = new TenantConfigurationPage (browser)
        tier1Menu = new Tier1Menu (browser)
        groupList = new GroupListPage (browser)
        groupSkillPage = new GroupSkillPage (browser)
        editingControl = new EditingControl (browser)
        actionPopup = new ActionPopup (browser)
        titleBar = new TitleBarButtons (browser)

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000

    })

    it ("should add new skill successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
                
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Skills')
        await tier1Menu.navigateToTier1Ver('Skills')
        await tier1Menu.presenceOfTier1Hor('Skill List')
        await tier1Menu.navigateToTier1Hor ('Skill List')
        await editingControl.clickAdd()
        
        await actionPopup.showPopup('add')
        await groupSkillPage.inputSkill('txtSkillName','skill script')
        await groupSkillPage.inputSkill('txtSkillDescription','This skill is created by script')
        await actionPopup.clickSaveAndAddAnother_btn()
        
        await actionPopup.showPopup('add')
        await groupSkillPage.inputSkill('txtSkillName','deleted skill script')
        await groupSkillPage.inputSkill('txtSkillDescription','This skill is created by script')
        await actionPopup.clickSaveAndClose_btn()

        await titleBar.clickSaveCancel_btn('Save')
        await expect (titleBar.waitForSavingTxt())
    })

    it("should edit the skill successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
                
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Skills')
        await tier1Menu.navigateToTier1Ver('Skills')
        await tier1Menu.presenceOfTier1Hor('Skill List')
        await tier1Menu.navigateToTier1Hor ('Skill List')

        await groupSkillPage.selectSkill('skill script')
        await editingControl.clickEdit()
        await actionPopup.showPopup('edit')
        await groupSkillPage.inputSkill('txtSkillName', 'skill script edited')
        await actionPopup.clickSaveAndClose_btn()

        await titleBar.clickSaveCancel_btn('Save')
        await expect(titleBar.waitForSavingTxt())
    })

    it ("should delete the skill successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
                
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Skills')
        await tier1Menu.navigateToTier1Ver('Skills')
        await tier1Menu.presenceOfTier1Hor('Skill List')
        await tier1Menu.navigateToTier1Hor ('Skill List')

        await groupSkillPage.selectSkill('skill script edited')
        await editingControl.clickDelete()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')

        await titleBar.clickSaveCancel_btn('Save')
        await expect(titleBar.waitForSavingTxt())
    })

    it("should return the users list who are holding the skill", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
                
        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Users and Teams')
        await tier1Menu.navigateToTier1Ver('Users and Teams')
        await tier1Menu.presenceOfTier1Hor('Groups')
        await tier1Menu.navigateToTier1Hor('Groups')
        await groupList.selectGroup('Default')
        await editingControl.clickEdit()

        await tier1Menu.presenceOfTier1Ver('Skills')
        await tier1Menu.navigateToTier1Ver('Skills')
        await tier1Menu.presenceOfTier1Hor('Skill List')
        await tier1Menu.navigateToTier1Hor ('Skill List')

        await groupSkillPage.selectSkill('skill script')
        await groupSkillPage.clickShowSkillHolders_btn()
        await expect (groupSkillPage.showHolder('userSkill'))
    })
})