import { GroupSkillPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupSkillPage";
import { EditingControl } from "../../../admin_core_function/editingControl/editingControl";
import { ActionPopup } from "../../../admin_core_popup/actionPopup";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { async } from "q";
import { browser } from "protractor";
import { TitleBarButtons } from "../../../admin_core_function/titleBarButtons/titleBarButtons";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";

describe("Group Skill", function(){
    var loginPage: LoginPage
    var groupSkillPage: GroupSkillPage
    var editingControl: EditingControl
    var actionPopup: ActionPopup
    var actionSupport: ActionSupport
    var titleBar: TitleBarButtons

    var originalTimeout: number

    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        groupSkillPage = new GroupSkillPage (browser)
        editingControl = new EditingControl (browser)
        actionPopup = new ActionPopup (browser)
        titleBar = new TitleBarButtons (browser)
        actionSupport = new ActionSupport (browser)
     
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000

    })

    it ("Should add new skill successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
        await loginPage.login()
        await groupSkillPage.navigateToGroupSkillList()
        await editingControl.clickAdd()
        await actionPopup.showPopup('add')
        await groupSkillPage.inputData_Skills('txtSkillName','SkillScript')
        await groupSkillPage.inputData_Skills('txtSkillDescription','This skill is created by script')
        await actionPopup.clickSaveAndAddAnother_btn()        
        await actionPopup.showPopup('add')
        await groupSkillPage.inputData_Skills('txtSkillName','_skillscript')
        await groupSkillPage.inputData_Skills('txtSkillDescription','This skill is created by script')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    it ("Should edit the skill successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
        await loginPage.login()
        await groupSkillPage.navigateToGroupSkillList()
        await groupSkillPage.selectSkill('_skillscript')
        await editingControl.clickEdit()
        await actionPopup.showPopup('edit')
        await groupSkillPage.inputData_Skills('txtSkillName', 'skillScriptEdited')
        await actionPopup.clickSaveAndClose_btn()
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    it ("Should delete the skill successfully", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
        await loginPage.login()
        await groupSkillPage.navigateToGroupSkillList()
        await groupSkillPage.selectSkill('skillScriptEdited')
        await editingControl.clickDelete()
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await actionPopup.showPopup('ATTENTION')
        await actionPopup.clickPopup_btn('delete')
        await titleBar.clickSaveCancel_btn('Save')
        await titleBar.waitForSavingTxt()
    })

    it("Should return the users list who are holding the skill", async function(){
        await browser.waitForAngularEnabled(true)
        await browser.get("http://localhost:81/landlordAutomation/#/login")
        await browser.manage().window().maximize()
        await loginPage.login()
        await groupSkillPage.navigateToGroupSkillList()
        await groupSkillPage.selectSkill('SkillScript')
        await groupSkillPage.clickShowSkillHolders_btn()
        await groupSkillPage.showHolder('userSkill')
    })
})