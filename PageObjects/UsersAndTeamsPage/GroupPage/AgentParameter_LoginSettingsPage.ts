import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { TitleBarButtons } from "../../../admin_core_function/titleBarButtons/titleBarButtons";
import { SelectedButtons } from "../../../admin_core_function/selectedButtons/selectedButtons";
import { async } from "q";

export class GroupLoginSettingPage{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport
    titleBar_btn: TitleBarButtons
    selected_btn: SelectedButtons

    tier2Ver_agentParam: string
    tier2Hor_loginSettings:string

    notReady_rad:string
    readyPro1_rad:string
    readyPro2_rad:string
    readyPro3_rad:string
    readyPro4_rad:string

    enableReady1_check:string
    enableReady2_check:string
    enableReady3_check:string
    enableReady4_check:string

    profile1_txt:string
    profile2_txt:string
    profile3_txt:string
    profile4_txt:string

    avail_agentTrans1:string
    avail_agentTrans2:string
    avail_agentTrans3:string
    avail_agentTrans4:string

    IPranges_txt:string

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
        this.titleBar_btn = new TitleBarButtons (this.curBrowser)
        this.selected_btn = new SelectedButtons (this.curBrowser)

        this.tier2Ver_agentParam = "//a[@class='verical-menu-item ng-binding' and contains (text(),'Agent Parameters')]"
        this.tier2Hor_loginSettings = "//a[@class='ng-binding' and contains (text(),'Login Settings')]"

        this.notReady_rad = "//input[@id='rdNotReady']"
        this.readyPro1_rad = "//input[@id='rtReadyProfile1']"
        this.readyPro2_rad = "//input[@id='rtReadyProfile2']"
        this.readyPro3_rad = "//input[@id='rtReadyProfile3']"
        this.readyPro4_rad = "//input[@id='rtReadyProfile4']"

        this.enableReady1_check = "//label[@for='cbEnabled1']"
        this.enableReady2_check = "//label[@for='cbEnabled2']"
        this.enableReady3_check = "//label[@for='cbEnabled3']"
        this.enableReady4_check = "//label[@for='cbEnabled4']"

        this.profile1_txt = "//input[@name='txtProfileName1']"
        this.profile2_txt = "//input[@name='txtProfileName2']"
        this.profile3_txt = "//input[@name='txtProfileName3']"
        this.profile4_txt = "//input[@name='txtProfileName4']"

        this.avail_agentTrans1 = "//label[@for='cbAvaiForAgentTransfer1']"
        this.avail_agentTrans2 = "//label[@for='cbAvaiForAgentTransfer2']"
        this.avail_agentTrans3 = "//label[@for='cbAvaiForAgentTransfer3']"
        this.avail_agentTrans4 = "//label[@for='cbAvaiForAgentTransfer4']"


        this.IPranges_txt = "//input[@name='txtIPRanges']"

    }

    // check presence of Agent Parameters menu
    async presenceOf_AgentParammeters(){
        console.log ("Check the presence of Agent Paramters menu")
        await this.actionSupport.presentElement(this.tier2Ver_agentParam)
    }

    // access to Groups - Agent Parameters menu
    async clickAgentParameterMenu(){
        console.log ("Click on the Tier 2 vertical menu Agent Parameters")
        await this.actionSupport.clickOnElement(this.tier2Ver_agentParam)

    }

    // check presence of Login Settings page
    async presentOf_LoginSettings(){
        console.log ("Check the presence of Tier 2 horizontal menu Login Settings")
        await this.actionSupport.presentElement(this.tier2Hor_loginSettings)
    }

    // access to Agent Parameters - Login Settings page
    async clickLoginSettings(){
        console.log("Click on the Tier 2 horizontal menu Agent Parameters - Login Settings")
        await this.actionSupport.clickOnElement(this.tier2Hor_loginSettings)
    }

    // GROUP AGENT STATE ON LOGIN SETTING
    // action click on Initial agent state on login
    checkNotReady_rad(){
        console.log ("Select the Not ready radio button")
        this.actionSupport.clickOnElement(this.notReady_rad)
    }

    checkReadyPro1_rad(){
        console.log ("Select the Ready profile 1 radio button")
        this.actionSupport.clickOnElement(this.readyPro1_rad)
    }

    checkReadyPro2_rad(){
        console.log("Select the Ready profile 2 radio button")
        this.actionSupport.clickOnElement(this.readyPro2_rad)
    }

    checkReadyPro3_rad(){
        console.log("Select the Ready profile 2 radio button")
        this.actionSupport.clickOnElement(this.readyPro3_rad)
    }

    checkReadyPro4_rad(){
        console.log("Select the Ready profile 2 radio button")
        this.actionSupport.clickOnElement(this.readyPro4_rad)
    }

    // GROUP READY STATE PROFILE
    // action click on enabled option 
    checkReadyPro1(){
        console.log ("Enabled the Ready state profile 1")
        this.actionSupport.clickOnElement(this.enableReady1_check)
    }

    checkReadyPro2(){
        console.log ("Enabled the Ready state profile 2")
        this.actionSupport.clickOnElement(this.enableReady2_check)
    }

    checkReadyPro3(){
        console.log ("Enabled the Ready state profile 3")
        this.actionSupport.clickOnElement(this.enableReady3_check)
    }

    async checkReadyPro4(){
        console.log ("Enabled the Ready state profile 4")
        this.actionSupport.clickOnElement(this.enableReady4_check)
    }

    // action input value in Profile name field
    inputProfile1(profileName:string){
        console.log ("Input the name for Profile name 1 " + profileName)
        this.actionSupport.sendKeyOnElement(this.profile1_txt, profileName)
    }

    inputProfile2(profileName:string){
        console.log ("Input the name for Profile name 2 " + profileName)
        this.actionSupport.sendKeyOnElement(this.profile2_txt, profileName)
    }

    inputProfile3(profileName:string){
        console.log ("Input the name for Profile name 3" + profileName)
        this.actionSupport.sendKeyOnElement(this.profile3_txt, profileName)
    }

    inputProfile4(profileName:string){
        console.log ("Input the name for Profile name 4 " + profileName)
        this.actionSupport.sendKeyOnElement(this.profile4_txt, profileName)
    }

    // action check Available for agent transfers
    checkAvailable1(){
        console.log ("Enable available for agent transfer 1")
        this.actionSupport.clickOnElement(this.avail_agentTrans1)
    }

   checkAvailable2(){
        console.log ("Enable available for agent transfer 2")
        this.actionSupport.clickOnElement(this.avail_agentTrans2)
    }

    checkAvailable3(){
        console.log ("Enable available for agent transfer 3")
        this.actionSupport.clickOnElement(this.avail_agentTrans3)
    }

    checkAvailable4(){
        console.log ("Enable available for agent transfer 4")
        this.actionSupport.clickOnElement(this.avail_agentTrans4)
    }

    // GROUP IP ADDRESS RANGE FOR AGENT LOGIN
    // action input the Allowed IP ranges
    inputIPRanges(ipRanges:string){
        console.log ("Input the value for IP ranges" + ipRanges)
        this.actionSupport.sendKeyOnElement(this.IPranges_txt, ipRanges)
    }




}