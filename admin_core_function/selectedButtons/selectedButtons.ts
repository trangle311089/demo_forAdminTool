import { ProtractorBrowser } from "protractor";
import { ActionSupport } from "../../core_function/actionSupport/actionSupport";

export class SelectedButtons{
    curBrowser: ProtractorBrowser
    actionSupport: ActionSupport

    checkbox_btn: string
    radio_btn:string
    assigned_btn:string
    unassigned_btn:string
}