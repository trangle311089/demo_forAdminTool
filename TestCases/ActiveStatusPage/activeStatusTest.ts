import { ActiveStatusPage } from "../../PageObjects/ActiveStatusPage";
import { async } from "q";
import { browser, by} from "protractor";
import { LoginPage } from "../../PageObjects/LoginPage";
import { TenantConfigurationPage } from "../../PageObjects/TenantConfigurationPage";
import { HandleMenu } from "../../CommonSupport/HandleMenu";
import { HandleEditingControl } from "../../CommonSupport/HandleEditingControl";
import { HandlePopup } from "../../CommonSupport/HandlePopup";

describe ("Active Status", function(){
    let loginPage: LoginPage
    let activeStatus: ActiveStatusPage
    let handleMenu : HandleMenu
    let handleEditingControl: HandleEditingControl
    let handlePopup : HandlePopup
    let tenancy: TenantConfigurationPage

    
    beforeEach(async function(){
        loginPage = new LoginPage (browser)
        activeStatus = new ActiveStatusPage (browser)
        handleMenu = new HandleMenu (browser)
        handleEditingControl = new HandleEditingControl(browser)
        handlePopup = new HandlePopup (browser)
        tenancy = new TenantConfigurationPage (browser)
        await loginPage.inputAudience("ec2-52-63-37-167.ap-southeast-2.compute.amazonaws.com")
    })

    it ("Should remove the active user", async function(){
        await handleMenu.selectTenantConfigurationMenu()
        await tenancy.selectTenancy('1001')
        await handleEditingControl.clickEdit()
        await handleMenu.selectActiveUserList()
        await activeStatus.selectActiveUser('Dung Tran')
        await handleEditingControl.clickRemove()
        await handlePopup.clickYesDel('logout')
        await handlePopup.clickYesDel('logout')    
        await activeStatus.verifyRemoveUser('Dung Tran')       
    })

    it ("Should display the active user which has the text matches with the text in the search field", async function(){
        await handleMenu.selectTenantConfigurationMenu()
        await tenancy.selectTenancy('1001')
        await handleEditingControl.clickEdit()
        await handleMenu.selectActiveUserList()
        await handleEditingControl.searchEntry('Dung Tran')
        await activeStatus.verifyActiveUser('Dung Tran')
    })
})