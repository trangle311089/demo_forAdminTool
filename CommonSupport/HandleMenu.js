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
var HandleMenu = /** @class */ (function () {
    function HandleMenu(browser) {
        this.actionSupport = new actionSupport_1.ActionSupport(browser);
    }
    HandleMenu.prototype.selectVerMenu = function (menuName) {
        return __awaiter(this, void 0, void 0, function () {
            var xpath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xpath = "//a[@class='verical-menu-item ng-binding' and contains (text(),'" + menuName + "')]";
                        return [4 /*yield*/, this.actionSupport.clickOnElement(xpath)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.selectHorMenu = function (menuName) {
        return __awaiter(this, void 0, void 0, function () {
            var xpath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xpath = "//a[@class='ng-binding' and contains (text(),'" + menuName + "')]";
                        return [4 /*yield*/, this.actionSupport.clickOnElement(xpath)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.verifyDisplayedVerMenu = function (menuName) {
        return __awaiter(this, void 0, void 0, function () {
            var xpath, ele;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Vertical Menu: The vertical menu " + menuName + " is displayed");
                        xpath = "//a[@class='verical-menu-item ng-binding' and contains (text(),'" + menuName + "')]";
                        ele = protractor_1.browser.element(protractor_1.by.xpath(xpath));
                        return [4 /*yield*/, expect(ele.isDisplayed()).toBe(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.verifyDisplayedHorMenu = function (menuName) {
        return __awaiter(this, void 0, void 0, function () {
            var xpath, ele;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Horizontal Menu: The horizontal menu " + menuName + " is displayed");
                        xpath = "//a[@class='ng-binding' and contains (text(),'" + menuName + "')]";
                        ele = protractor_1.browser.element(protractor_1.by.xpath(xpath));
                        return [4 /*yield*/, expect(ele.isDisplayed()).toBe(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.selectTenantConfigurationMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectVerMenu('Tenant Configuration')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Active status menu
    HandleMenu.prototype.selectActiveStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectVerMenu('active status')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.selectActiveUserList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectActiveStatus()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectHorMenu('Users')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Users and Teams menu
    HandleMenu.prototype.selectUsersAndTeams = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectVerMenu('Users and Teams')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Users and Teams - Groups menu
    HandleMenu.prototype.selectGroupsList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectUsersAndTeams()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectHorMenu('Groups')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Users and Teams - Groups - Agent Paramters menu
    HandleMenu.prototype.selectGroupAgentParameters = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectVerMenu('Agent Parameters')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.selectGroupAgentParmeter_LoginSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectGroupAgentParameters()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectHorMenu('Login Settings')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.selectGroupAgentParamter_ContactPresentation = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectGroupAgentParameters()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectHorMenu('Contact Presentation')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.selectGroupAgentParamter_AgentPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectGroupAgentParameters()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectHorMenu('Agent Permissions')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Users and Teams - Groups - Skills
    HandleMenu.prototype.selectGroupSkills = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectVerMenu('Skills')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.selectGroupSkillList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectGroupSkills()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectHorMenu('Skill List')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Users and Teams - Groups - Telephony
    HandleMenu.prototype.selectGroupTelephony = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectVerMenu('Telephony')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.selectGroupTelephony_General = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectGroupTelephony()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectHorMenu('General')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.selectGroupTelephony_PSTN = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectGroupTelephony()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectHorMenu('PSTN Agent Connection')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.selectGroupTelephony_DialPlan = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectGroupTelephony()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectHorMenu('Dial Plan')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Users and Teams - Groups - Status Reasons
    HandleMenu.prototype.selectGroupStatusReasons = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectVerMenu('Status Reasons')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.selectGroupStatus_BreakReason = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectGroupStatusReasons()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectHorMenu('Break Reasons')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Users and Teams - Groups - Schedule
    HandleMenu.prototype.selectGroupSchedule = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectVerMenu('Schedule')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.selectGroup_LoginSchedule = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectGroupSchedule()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectHorMenu('Login Schedule')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Greetings & Prompts menu
    HandleMenu.prototype.selectGreetingsPrompts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectVerMenu('greetings & prompts')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Greetings & Prompts - User Recorded Greetings
    HandleMenu.prototype.selectUserRecordedGreetings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectGreetingsPrompts()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectHorMenu('User Recorded Greetings')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.selectUserAgentGreetings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectVerMenu('Agent Greetings')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectHorMenu('General')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandleMenu.prototype.selectUserVoiceMailGreetings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectVerMenu('Voice Mail Greetings')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectHorMenu('General')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HandleMenu;
}());
exports.HandleMenu = HandleMenu;
