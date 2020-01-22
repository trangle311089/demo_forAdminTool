import { GroupSkillPage } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupSkillPage";
import { LoginPage } from "../../../PageObjects/LoginPage";
import { async } from "q";
import { browser } from "protractor";
import { TenantConfigurationPage } from "../../../PageObjects/TenantConfigurationPage";
import { HandleMenu } from "../../../CommonSupport/HandleMenu";
import { HandlePopup } from "../../../CommonSupport/HandlePopup";
import { HandleEditingControl } from "../../../CommonSupport/HandleEditingControl";
import { GroupProfile } from "../../../PageObjects/UsersAndTeamsPage/GroupPage/GroupProfileGeneralPage";
import skillData from "../../../TestData/groupSkillData.json"

describe("Group Skill", function(){
    let loginPage: LoginPage
    let groupSkillPage: GroupSkillPage
    let tenancy: TenantConfigurationPage
    let handleMenu: HandleMenu
    let handlePopup: HandlePopup
    let handleEditingControl: HandleEditingControl

    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        groupSkillPage = new GroupSkillPage (browser)
        tenancy = new TenantConfigurationPage (browser)
        handleMenu = new HandleMenu (browser)
        handlePopup = new HandlePopup (browser)
        handleEditingControl = new HandleEditingControl (browser)
        console.log ("STEP 1 - Launch the Admin Tool and click on SIGN IN button")
        await loginPage.login()
        console.log("STEP 2 - Select the existing tenancy")
        await tenancy.selectTenancy('1001')
        console.log ("STEP 3 - Click on the edit option")
        await handleEditingControl.clickEdit()
        console.log ("STEP 4 - Navigate to the group list")
        await handleMenu.selectGroupsList()
        console.log ("STEP 5 - Select the default group")
        await handleEditingControl.selectEntryOnTier1Grid('Default')
        console.log ("STEP 6 - Click on the edit option")
        await handleEditingControl.clickEdit()
        console.log ("STEP 7 - Select the group skill menu")
        await handleMenu.selectGroupSkillList()
    })

    it ("TC 01 - Should add new skill successfully", async function(){
        let skill = skillData["TC01"]
        let skillName = skill.skillName
        let skillDescription = skill.description
        let skill2 = skillData["TC02"]
        let skillName2 = skill2.skillName
        let skillDescription2 = skill2.description
        console.log ("STEP 8 - Click on the add option")
        await handleEditingControl.clickAdd()
        console.log ("STEP 9 - Input skill name, skill description")
        await groupSkillPage.createSkill(skillName, skillDescription)
        console.log ("STEP 10 - Click on SAVE AND ADD ANOTHER button")
        await handlePopup.clickSaveAndAddAnother()   
        console.log ("STEP 11 - Input skill name, skill description")     
        await groupSkillPage.createSkill(skillName2, skillDescription2)
        console.log ("STEP 12 - Click on SAVE button")
        await handlePopup.clickSave()
        console.log ("STEP 13 - Click on SAVE button on the title bar")
        await handleEditingControl.clickSaveCancel_btn('Save')
        console.log ("STEP 14 - Verify new skill displayed on grid")
        await groupSkillPage.verifyAddSkillSuccessfully('Skill 1')
    })

    it ("Should edit the skill successfully", async function(){
        let skill = skillData["TC03"]
        let skillName = skill.skillName
        let skillDescription = skill.description
        console.log ("STEP 8 - Select an existing skill to edit")
        await handleEditingControl.selectEntryOnTier2Grid('Skill 1')
        console.log ("STEP 9 - Click on the edit option")
        await handleEditingControl.clickEdit()
        console.log ("STEP 10 - Update the skill name, skill description")
        await groupSkillPage.createSkill(skillName, skillDescription)
        console.log ("STEP 11 - Click on the SAVE button on the EDIT popup")
        await handlePopup.clickSave()
        console.log ("STEP 12 - Click on the SAVE button on the title bar")
        await handleEditingControl.clickSaveCancel_btn('Save')
        console.log ("STEP 13 - Verify new skill displayed on the grid")
        await groupSkillPage.verifyAddSkillSuccessfully('Skill 3')
    })

    it ("Should delete the skill successfully", async function(){
        console.log ("STEP 8 - Select an existing skill to delete")
        await handleEditingControl.selectEntryOnTier2Grid('Skill 2')
        console.log ("STEP 9 - Click on the delete option")
        await handleEditingControl.clickDelete()
        console.log ("STEP 10 - Click on delete button on the attention popup")
        await handlePopup.clickYesDel('delete')
        console.log ("STEP 11 - Click on delete button on the attention popup")
        await handlePopup.clickYesDel('delete')
        await handleEditingControl.selectEntryOnTier2Grid('Skill 3')
        console.log ("STEP 12 - Click on the delete option")
        await handleEditingControl.clickDelete()
        console.log ("STEP 13 - Click on delete button on the attention popup")
        await handlePopup.clickYesDel('delete')
        console.log ("STEP 14 - Click on delete button on the attention popup")
        await handlePopup.clickYesDel('delete')
        console.log ("STEP 15 - Click on the SAVE button on the title bar")
        await handleEditingControl.clickSaveCancel_btn('Save')
        await browser.sleep(2000)
        console.log ("STEP 16 - Verify delete successfully")
        await handleEditingControl.verifyRemoveSuccessfully('Skill 2')
        await handleEditingControl.verifyRemoveSuccessfully('Skill 3')
    })

    // need to check the way to handle data for this test case
    // should create user and assign the skill to user first
    // then can check the user list when clicking on show skill holder button
    // it("Should return the users list who are holding the skill", async function(){
    //     await handleMenu.selectGroupSkillList()
    //     await handleEditingControl.selectEntryOnTier2Grid('skillHolder')
    //     await groupSkillPage.clickShowSkillHolders_btn()
    //     await groupSkillPage.verifyShowSkillHolder('userSkill')
    // })
})