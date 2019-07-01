import { GroupSkillPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupSkillPage";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { async } from "q";
import { browser } from "protractor";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { HandleMenu } from "../../../CommonSupport/HandleMenu";
import { HandlePopup } from "../../../CommonSupport/HandlePopup";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";
import { GroupProfile } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";

describe("Group Skill", function(){
    let loginPage: LoginPage
    let groupSkillPage: GroupSkillPage
    let tenancy: TenantConfigurationPage
    let handleMenu: HandleMenu
    let handlePopup: HandlePopup
    let handleEditingControl: HandleEditingControl
    let groupProfile: GroupProfile

    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        groupSkillPage = new GroupSkillPage (browser)
        tenancy = new TenantConfigurationPage (browser)
        handleMenu = new HandleMenu (browser)
        handlePopup = new HandlePopup (browser)
        handleEditingControl = new HandleEditingControl (browser)
        groupProfile = new GroupProfile (browser)

        await loginPage.login()
        await tenancy.selectTenancy('1001')
        await handleEditingControl.clickEdit()
        await handleMenu.selectGroupsList()
        await groupProfile.selectGroup('Default')
        await handleEditingControl.clickEdit()
    })

    it ("Should add new skill successfully", async function(){
        await handleMenu.selectGroupSkillList()
        await handleEditingControl.clickAdd()
        await groupSkillPage.inputData_Skills('txtSkillName','SkillScript')
        await groupSkillPage.inputData_Skills('txtSkillDescription','This skill is created by script')
        await handlePopup.clickSaveAndAddAnother()        
        await groupSkillPage.inputData_Skills('txtSkillName','skillscript9')
        await groupSkillPage.inputData_Skills('txtSkillDescription','This skill is created by script')
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await groupSkillPage.verifyDispalyedSkill('SkillScript')
    })

    it ("Should edit the skill successfully", async function(){
        await handleMenu.selectGroupSkillList()
        await groupSkillPage.selectSkill('skillscript9')
        await handleEditingControl.clickEdit()
        await groupSkillPage.inputData_Skills('txtSkillName', 'skillScriptEdited')
        await handlePopup.clickSave()
        await handleEditingControl.clickSaveCancel_btn('Save')
        await groupSkillPage.verifyDispalyedSkill('skillScriptEdited')
    })

    it ("Should delete the skill successfully", async function(){
        await handleMenu.selectGroupSkillList()
        await groupSkillPage.selectSkill('skillScriptEdited')
        await handleEditingControl.clickDelete()
        await handlePopup.clickYesDel('delete')
        await handlePopup.clickYesDel('delete')
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        await handleEditingControl.verifySaveSuccessfully()
    })

    it("Should return the users list who are holding the skill", async function(){
        await handleMenu.selectGroupSkillList()
        await groupSkillPage.selectSkill('skillHolder')
        await groupSkillPage.clickShowSkillHolders_btn()
        await groupSkillPage.verifyDisplayedHolder('userSkill')
    })
})