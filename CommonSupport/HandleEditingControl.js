"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var protractor_1 = require("protractor");
var actionSupport_1 = require("../core_function/actionSupport");
var HandleEditingControl = /** @class */ (function () {
    function HandleEditingControl(browser) {
        this.actionSupport = new actionSupport_1.ActionSupport(browser);
        this.add_option = "//i[@class='fa fa-plus-circle add']";
        this.edit_option = "//i[@class = 'fa fa-pencil edit']";
        this.delete_option = "//i[@class = 'fa fa-trash-o delete']";
        this.copy_option = "//i[@class = 'fa fa-files-o copy']";
        this.remove_option = "//i[@class='fa fa-ban ban']";
        this.move_option = "//i[@class='fa fa-sign-out move']";
        this.upload_option = "//i[@class='fa fa-upload upload']";
        this.download_option = "//i[@class='fa fa-download download']";
        this.search_function = "//input[@placeholder='search']";
        this.remove_search = "//i[@ng-click='removeSearch()']";
        this.selectall_check = "//div[@class='ag-header-cell']";
        this.saving_txt = "//span[@class='saving-text' and contains (text(), 'All changes saved')]";
    }
    HandleEditingControl.prototype.clickAdd = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Editing Control: Click on the add option on the editing control");
                        return [4 /*yield*/, this.actionSupport.clickOnElement(this.add_option)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.clickEdit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Editing Control: Click on the edit option on the editing control");
                        return [4 /*yield*/, this.actionSupport.clickOnElement(this.edit_option)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.clickDelete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Editing Control: Click on the delete option on the editing control");
                        return [4 /*yield*/, this.actionSupport.clickOnElement(this.delete_option)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.clickCopy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Editing Control: Click on the copy option on the editing control");
                        return [4 /*yield*/, this.actionSupport.clickOnElement(this.copy_option)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.clickRemove = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Editing Control: Click on the remove option on the editing control");
                        return [4 /*yield*/, this.actionSupport.clickOnElement(this.remove_option)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.searchEntry = function (textSearch) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Editing Control: Enter text on the search field: " + textSearch);
                        return [4 /*yield*/, this.actionSupport.sendKeyOnElement(this.search_function, textSearch)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.removeSearchEntry = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Editing Control: Click on the cross icon on search field to remove search");
                        return [4 /*yield*/, this.actionSupport.clickOnElement(this.remove_search)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.clickUpload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Editing Control: Click on the upload option on the editing control of Greetings & Prompts");
                        return [4 /*yield*/, this.actionSupport.clickOnElement(this.upload_option)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.clickMove = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Editing Control: Click on the move option on the editing control of Greetings & Prompts");
                        return [4 /*yield*/, this.actionSupport.clickOnElement(this.move_option)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.clickDownload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Editing Control:  Click on the download option on the editing control of Greetings & Prompts");
                        return [4 /*yield*/, this.actionSupport.clickOnElement(this.download_option)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.clickSelectAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Angular Grid: Click on the select all check box on the grid");
                        return [4 /*yield*/, this.actionSupport.selectCheckbox(this.selectall_check)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.clickSaveCancel_btn = function (btnName) {
        return __awaiter(this, void 0, void 0, function () {
            var xpath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Title Bar: Click on SAVE or CANCEL button");
                        xpath = "//button[@ng-click='saveAction()' and contains (text(), '" + btnName + "')]";
                        return [4 /*yield*/, this.actionSupport.clickOnElement(xpath)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.verifySaveSuccessfully = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ele;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Title Bar: Display the text All changes saved when saving data successfully");
                        ele = protractor_1.browser.element(protractor_1.by.xpath(this.saving_txt));
                        return [4 /*yield*/, expect(ele.isDisplayed()).toBe(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.verifyAddSuccessfully = function (entryName) {
        return __awaiter(this, void 0, void 0, function () {
            var xpath, ele;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xpath = "//div[@ref='eBodyContainer']";
                        ele = protractor_1.browser.element(protractor_1.by.xpath(xpath));
                        return [4 /*yield*/, expect(ele.getText()).toContain(entryName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.verifyRemoveSuccessfully = function (entryName) {
        return __awaiter(this, void 0, void 0, function () {
            var xpath, ele;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xpath = "//div[@ref='eBodyContainer']";
                        ele = protractor_1.browser.element(protractor_1.by.xpath(xpath));
                        return [4 /*yield*/, expect(ele.getText()).not.toContain(entryName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.selectEntryOnGrid = function (entryName) {
        return __awaiter(this, void 0, void 0, function () {
            var xpath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xpath = "//span[contains(text(),'" + entryName + "')]";
                        return [4 /*yield*/, this.actionSupport.clickOnElement(xpath)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.selectEntryOnGrid2 = function (entryName) {
        return __awaiter(this, void 0, void 0, function () {
            var xpath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xpath = "//div[text()='" + entryName + "']";
                        return [4 /*yield*/, this.actionSupport.clickOnElement(xpath)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.selectCheckbox = function (btnName) {
        return __awaiter(this, void 0, void 0, function () {
            var xpath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xpath = "//input[@type='checkbox' and @ng-model='" + btnName + "']";
                        return [4 /*yield*/, this.actionSupport.selectCheckbox(xpath)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleEditingControl.prototype.selectRadio = function (btnName) {
        return __awaiter(this, void 0, void 0, function () {
            var xpath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xpath = "//input[@id='" + btnName + "']";
                        return [4 /*yield*/, this.actionSupport.clickOnElement(xpath)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HandleEditingControl;
}());
exports.HandleEditingControl = HandleEditingControl;
