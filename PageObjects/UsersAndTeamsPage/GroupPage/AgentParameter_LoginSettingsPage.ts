import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../../core_function/actionSupport/actionSupport";
import { TitleBarButtons } from "../../../admin_core_function/titleBarButtons/titleBarButtons";
import { SelectedButtons } from "../../../admin_core_function/selectedButtons/selectedButtons";

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

    constructor(browser:any){
        this.curBrowser = browser
        this.actionSupport = new ActionSupport (this.curBrowser)
        this.titleBar_btn = new TitleBarButtons (this.curBrowser)
        this.selected_btn = new SelectedButtons (this.curBrowser)

        this.tier2Ver_agentParam = "//li[@id='uatGroupAgentParameters']"
        this.tier2Hor_loginSettings = "//a[@class='ng-binding' and contains (text(),'Login Settings')]"

        this.notReady_rad = "//input[@id='rdNotReady']"
        this.readyPro1_rad = "//input[@id='rtReadyProfile1']"
        this.readyPro2_rad = "//input[@id='rtReadyProfile2']"
        this.readyPro3_rad = "//input[@id='rtReadyProfile3']"
        this.readyPro4_rad = "//input[@id='rtReadyProfile4']"

        this.enableReady1_check = "//input[@id='cbEnabled1']"
        this.enableReady2_check = "//input[@id='cbEnabled2']"
        this.enableReady3_check = "//input[@id='cbEnabled3']"
        this.enableReady4_check = "//input[@id='cbEnabled3']"
    }

    async clickAgentParameterMenu(){
        console.log ("Click on the Tier 2 vertical menu Agent Parameters")
        this.actionSupport.clickOnElement(this.tier2Ver_agentParam)
    }
}