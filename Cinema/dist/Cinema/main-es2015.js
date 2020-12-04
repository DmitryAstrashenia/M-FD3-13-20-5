(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickets.service */ "./src/app/tickets.service.ts");
/* harmony import */ var _hall_hall_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hall/hall.component */ "./src/app/hall/hall.component.ts");
/* harmony import */ var _cash_cash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cash/cash.component */ "./src/app/cash/cash.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AppComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
} }
function AppComponent_ng_template_5_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0445 \u043C\u0435\u0441\u0442 \u043D\u0435\u0442!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_5_ng_template_1_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0422\u0430\u043A\u0438\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E! \u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0445 \u043C\u0435\u0441\u0442 ", ctx_r6.getNumberFreeChairs(), " ");
} }
function AppComponent_ng_template_5_ng_template_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u0412\u044B \u043A\u0443\u043F\u0438\u043B\u0438 \u0431\u0438\u043B\u0435\u0442 \u2116", ctx_r7.buyedTickets, ". \u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0445 \u043C\u0435\u0441\u0442 ", ctx_r7.getNumberFreeChairs(), " ");
} }
function AppComponent_ng_template_5_ng_template_1_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u0412\u044B \u043A\u0443\u043F\u0438\u043B\u0438 \u0431\u0438\u043B\u0435\u0442\u044B \u2116", ctx_r8.buyedTickets, ". \u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0445 \u043C\u0435\u0441\u0442 ", ctx_r8.getNumberFreeChairs(), " ");
} }
function AppComponent_ng_template_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_5_ng_template_1_p_0_Template, 2, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_5_ng_template_1_p_1_Template, 2, 2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_template_5_ng_template_1_p_2_Template, 2, 2, "p", 6);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.buyedTickets.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.buyedTickets.length == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.buyedTickets.length > 1);
} }
function AppComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_5_p_0_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_5_ng_template_1_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.getNumberFreeChairs())("ngIfElse", _r4);
} }
class AppComponent {
    constructor(chairs) {
        this.chairs = chairs;
        this.title = 'Cinema';
        this.buyedTickets = null;
    }
    getNumberFreeChairs() {
        return this.chairs.getNumberFreeChairs();
    }
    buyTickets(n) {
        this.buyedTickets = this.chairs.buyRandomTickets(n);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tickets_service__WEBPACK_IMPORTED_MODULE_1__["TicketsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 2, consts: [[1, "cinema"], ["status", "\u041A\u0430\u0441\u0441\u0430", 3, "btnBuy"], ["status", "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0440-\u043A\u0430\u0441\u0441\u0430", 3, "btnBuy"], [4, "ngIf", "ngIfElse"], ["full", ""], ["fullfull", ""], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hall");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-cash", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnBuy", function AppComponent_Template_app_cash_btnBuy_2_listener($event) { return ctx.buyTickets($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-cash", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnBuy", function AppComponent_Template_app_cash_btnBuy_3_listener($event) { return ctx.buyTickets($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_p_4_Template, 1, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_template_5_Template, 3, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buyedTickets == null)("ngIfElse", _r1);
    } }, directives: [_hall_hall_component__WEBPACK_IMPORTED_MODULE_2__["HallComponent"], _cash_cash_component__WEBPACK_IMPORTED_MODULE_3__["CashComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".cinema[_ngcontent-%COMP%] {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    border: 1px black solid;\r\n    padding: 20px 50px;\r\n}\r\n\r\n.cinema[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    display: inline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2luZW1hIHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xyXG4gICAgcGFkZGluZzogMjBweCA1MHB4O1xyXG59XHJcblxyXG4uY2luZW1hIHB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _tickets_service__WEBPACK_IMPORTED_MODULE_1__["TicketsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hall_hall_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hall/hall.component */ "./src/app/hall/hall.component.ts");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tickets.service */ "./src/app/tickets.service.ts");
/* harmony import */ var _cash_cash_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cash/cash.component */ "./src/app/cash/cash.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_tickets_service__WEBPACK_IMPORTED_MODULE_4__["TicketsService"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _hall_hall_component__WEBPACK_IMPORTED_MODULE_3__["HallComponent"], _cash_cash_component__WEBPACK_IMPORTED_MODULE_5__["CashComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _hall_hall_component__WEBPACK_IMPORTED_MODULE_3__["HallComponent"], _cash_cash_component__WEBPACK_IMPORTED_MODULE_5__["CashComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
                providers: [_tickets_service__WEBPACK_IMPORTED_MODULE_4__["TicketsService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cash/cash.component.ts":
/*!****************************************!*\
  !*** ./src/app/cash/cash.component.ts ***!
  \****************************************/
/*! exports provided: CashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashComponent", function() { return CashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CashComponent {
    constructor() {
        this.btnBuyEE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pieces = 1;
    }
    ngOnInit() { }
    getPieces() {
        return this.pieces;
    }
    btnPlus() {
        this.pieces++;
    }
    btnMinus() {
        if (this.pieces <= 1) {
            this.pieces = 1;
        }
        else {
            this.pieces--;
        }
    }
    btnBuy() {
        this.btnBuyEE.emit(this.getPieces());
    }
}
CashComponent.ɵfac = function CashComponent_Factory(t) { return new (t || CashComponent)(); };
CashComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CashComponent, selectors: [["app-cash"]], inputs: { status: "status" }, outputs: { btnBuyEE: "btnBuy" }, decls: 9, vars: 2, consts: [[1, "cash"], ["type", "button", "value", "-", 3, "click"], ["type", "button", "value", "+", 3, "click"], ["type", "button", "value", "\u041A\u0443\u043F\u0438\u0442\u044C", 1, "buy", 3, "click"]], template: function CashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashComponent_Template_input_click_4_listener() { return ctx.btnMinus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashComponent_Template_input_click_7_listener() { return ctx.btnPlus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CashComponent_Template_input_click_8_listener() { return ctx.btnBuy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.getPieces(), "\u0448\u0442.");
    } }, styles: [".cash[_ngcontent-%COMP%] {\r\n  width: 175px;\r\n  height: 200px;\r\n  border: 1px black solid;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n  display: inline-block;\r\n  margin:0 20px;\r\n}\r\n\r\n.cash[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.cash[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 30px;\r\n  height: 30px;\r\n  color: black;\r\n  font-size: 90%;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n  padding: .25em .5em;\r\n  outline: none;\r\n  border: 1px solid rgb(250, 172, 17);\r\n  border-radius: 7px;\r\n  background: rgb(255, 212, 3) linear-gradient(rgb(255, 212, 3), rgb(248, 157, 23));\r\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0), inset 0 1px 2px rgba(0, 0, 0, 0), inset 0 0 0 60px rgba(255, 255, 0, 0);\r\n  transition: box-shadow .2s, border-color .2s;\r\n}\r\n\r\n.cash[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\r\n  box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0), inset 0 1px 2px rgba(0, 0, 0, 0), inset 0 0 0 60px rgba(255, 255, 0, .5);\r\n}\r\n\r\n.cash[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\r\n  \r\n  border-color: rgba(177, 159, 0, 1);\r\n  box-shadow: inset 0 -1px 1px rgba(0, 0, 0, .1), inset 0 1px 2px rgba(0, 0, 0, .3), inset 0 0 0 60px rgba(255, 255, 0, .45);\r\n}\r\n\r\n.cash[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin: 0 10px;\r\n}\r\n\r\n.cash[_ngcontent-%COMP%]   input.buy[_ngcontent-%COMP%]{\r\n    width: 90px;\r\n    margin-top: 50px;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzaC9jYXNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIseUJBQWlCO0tBQWpCLHNCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGlGQUFpRjtFQUNqRixzSEFBc0g7RUFDdEgsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsdUhBQXVIO0FBQ3pIOztBQUVBOztFQUVFLGtDQUFrQztFQUNsQywwSEFBMEg7QUFDNUg7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9jYXNoL2Nhc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXNoIHtcclxuICB3aWR0aDogMTc1cHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOjAgMjBweDtcclxufVxyXG5cclxuLmNhc2ggaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhc2ggaW5wdXQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogOTAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHBhZGRpbmc6IC4yNWVtIC41ZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjUwLCAxNzIsIDE3KTtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjEyLCAzKSBsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwgMjEyLCAzKSwgcmdiKDI0OCwgMTU3LCAyMykpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAxcHggcmdiYSgwLCAwLCAwLCAwKSwgaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMCksIGluc2V0IDAgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMCwgMCk7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMnMsIGJvcmRlci1jb2xvciAuMnM7XHJcbn1cclxuXHJcbi5jYXNoIGlucHV0OmhvdmVyIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMXB4IHJnYmEoMCwgMCwgMCwgMCksIGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDApLCBpbnNldCAwIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDAsIC41KTtcclxufVxyXG5cclxuLmNhc2ggaW5wdXQ6YWN0aXZlIHtcclxuICBcclxuICBib3JkZXItY29sb3I6IHJnYmEoMTc3LCAxNTksIDAsIDEpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAxcHggcmdiYSgwLCAwLCAwLCAuMSksIGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4zKSwgaW5zZXQgMCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAwLCAuNDUpO1xyXG59XHJcblxyXG4uY2FzaCBzcGFue1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5jYXNoIGlucHV0LmJ1eXtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CashComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cash',
                templateUrl: './cash.component.html',
                styleUrls: ['./cash.component.css'],
            }]
    }], function () { return []; }, { status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['status']
        }], btnBuyEE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['btnBuy']
        }] }); })();


/***/ }),

/***/ "./src/app/hall/hall.component.ts":
/*!****************************************!*\
  !*** ./src/app/hall/hall.component.ts ***!
  \****************************************/
/*! exports provided: HallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallComponent", function() { return HallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tickets.service */ "./src/app/tickets.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { backgroundColor: a0 }; };
function HallComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r1 ? "green" : "red"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
} }
class HallComponent {
    constructor(chairs) {
        this.chairs = chairs;
    }
    ngOnInit() { }
    getPlaces() {
        return this.chairs.getChairs();
    }
}
HallComponent.ɵfac = function HallComponent_Factory(t) { return new (t || HallComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tickets_service__WEBPACK_IMPORTED_MODULE_1__["TicketsService"])); };
HallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HallComponent, selectors: [["app-hall"]], decls: 2, vars: 1, consts: [[1, "hall"], ["class", "place", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "place", 3, "ngStyle"]], template: function HallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HallComponent_p_1_Template, 3, 4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getPlaces());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".hall[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content:space-between;\r\n    margin-left: 24px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.hall[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%]{\r\n    width: 30px;\r\n    height: 30px;\r\n    border: 1px black solid;\r\n    text-align: center;\r\n    margin-right: 48px;\r\n}\r\n\r\n.green[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n}\r\n\r\n.red[_ngcontent-%COMP%] {\r\n    background-color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFsbC9oYWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvaGFsbC9oYWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFsbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5oYWxsIC5wbGFjZXtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hall',
                templateUrl: './hall.component.html',
                styleUrls: ['./hall.component.css'],
            }]
    }], function () { return [{ type: _tickets_service__WEBPACK_IMPORTED_MODULE_1__["TicketsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/tickets.service.ts":
/*!************************************!*\
  !*** ./src/app/tickets.service.ts ***!
  \************************************/
/*! exports provided: TicketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsService", function() { return TicketsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TicketsService {
    constructor() {
        this.totalСhairs = 20;
        this.chairs = new Array(this.totalСhairs).fill(true);
    }
    getChairs() {
        return this.chairs;
    }
    getNumberFreeChairs() {
        let count = 0;
        this.chairs.forEach((item) => {
            if (item) {
                count++;
            }
        });
        return count;
    }
    buyRandomTickets(n) {
        let options = [];
        let buyedTickets = [];
        for (let i = 0; i <= this.chairs.length - n; i++) {
            let option = {};
            for (let j = i; j < i + n; j++) {
                option[j] = this.chairs[j];
            }
            if (Object.values(option).indexOf(false) == -1) {
                options.push(option);
            }
        }
        let random = Math.floor(Math.random() * options.length);
        for (let key in options[random]) {
            this.chairs[key] = false;
            buyedTickets.push(Number(key) + 1);
        }
        return buyedTickets;
    }
}
TicketsService.ɵfac = function TicketsService_Factory(t) { return new (t || TicketsService)(); };
TicketsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TicketsService, factory: TicketsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\HTML_CSS\it_academy\FD3\homework\cinema\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map