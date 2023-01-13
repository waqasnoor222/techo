(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\tacho-all-master@42fd3856325\src\main.ts */"zUnb");


/***/ }),

/***/ "0HhE":
/*!***************************************************!*\
  !*** ./src/app/auto-focus-directive.directive.ts ***!
  \***************************************************/
/*! exports provided: AutoFocusDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoFocusDirectiveDirective", function() { return AutoFocusDirectiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AutoFocusDirectiveDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.el.nativeElement.focus();
        }, 0);
    }
}
AutoFocusDirectiveDirective.ɵfac = function AutoFocusDirectiveDirective_Factory(t) { return new (t || AutoFocusDirectiveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AutoFocusDirectiveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutoFocusDirectiveDirective, selectors: [["", "appAutoFocusDirective", ""]], inputs: { appAutoFocus: "appAutoFocus" } });


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modal/modal.service */ "saQ5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HomeComponent_span_3_tr_30_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_span_3_tr_30_td_3_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.downloadFile(techo_r3.data[11].name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_3_tr_30_td_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} }
function HomeComponent_span_3_tr_30_td_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function HomeComponent_span_3_tr_30_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_span_3_tr_30_td_4_div_1_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_span_3_tr_30_td_4_div_2_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[11].colorcode == "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[11].colorcode == "gray");
} }
function HomeComponent_span_3_tr_30_td_5_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_span_3_tr_30_td_5_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.downloadFile(techo_r3.data[10].name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_3_tr_30_td_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} }
function HomeComponent_span_3_tr_30_td_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function HomeComponent_span_3_tr_30_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_span_3_tr_30_td_6_div_1_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_span_3_tr_30_td_6_div_2_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[10].colorcode == "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[10].colorcode == "gray");
} }
function HomeComponent_span_3_tr_30_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_span_3_tr_30_td_7_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.downloadFile(techo_r3.data[9].name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_3_tr_30_td_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} }
function HomeComponent_span_3_tr_30_td_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function HomeComponent_span_3_tr_30_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_span_3_tr_30_td_8_div_1_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_span_3_tr_30_td_8_div_2_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[9].colorcode == "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[9].colorcode == "gray");
} }
function HomeComponent_span_3_tr_30_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_span_3_tr_30_td_9_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.downloadFile(techo_r3.data[8].name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_3_tr_30_td_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} }
function HomeComponent_span_3_tr_30_td_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function HomeComponent_span_3_tr_30_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_span_3_tr_30_td_10_div_1_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_span_3_tr_30_td_10_div_2_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[8].colorcode == "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[8].colorcode == "gray");
} }
function HomeComponent_span_3_tr_30_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_span_3_tr_30_td_11_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.downloadFile(techo_r3.data[7].name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_3_tr_30_td_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} }
function HomeComponent_span_3_tr_30_td_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function HomeComponent_span_3_tr_30_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_span_3_tr_30_td_12_div_1_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_span_3_tr_30_td_12_div_2_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[7].colorcode == "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[7].colorcode == "gray");
} }
function HomeComponent_span_3_tr_30_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_span_3_tr_30_td_13_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.downloadFile(techo_r3.data[6].name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_3_tr_30_td_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} }
function HomeComponent_span_3_tr_30_td_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function HomeComponent_span_3_tr_30_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_span_3_tr_30_td_14_div_1_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_span_3_tr_30_td_14_div_2_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[6].colorcode == "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[6].colorcode == "gray");
} }
function HomeComponent_span_3_tr_30_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_span_3_tr_30_td_15_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.downloadFile(techo_r3.data[5].name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_3_tr_30_td_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} }
function HomeComponent_span_3_tr_30_td_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function HomeComponent_span_3_tr_30_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_span_3_tr_30_td_16_div_1_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_span_3_tr_30_td_16_div_2_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[5].colorcode == "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[5].colorcode == "gray");
} }
function HomeComponent_span_3_tr_30_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_span_3_tr_30_td_17_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r70.downloadFile(techo_r3.data[4].name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_3_tr_30_td_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} }
function HomeComponent_span_3_tr_30_td_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function HomeComponent_span_3_tr_30_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_span_3_tr_30_td_18_div_1_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_span_3_tr_30_td_18_div_2_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[4].colorcode == "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[4].colorcode == "gray");
} }
function HomeComponent_span_3_tr_30_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_span_3_tr_30_td_19_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r76.downloadFile(techo_r3.data[3].name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_3_tr_30_td_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} }
function HomeComponent_span_3_tr_30_td_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function HomeComponent_span_3_tr_30_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_span_3_tr_30_td_20_div_1_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_span_3_tr_30_td_20_div_2_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[3].colorcode == "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[3].colorcode == "gray");
} }
function HomeComponent_span_3_tr_30_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_span_3_tr_30_td_21_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r82.downloadFile(techo_r3.data[2].name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_3_tr_30_td_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} }
function HomeComponent_span_3_tr_30_td_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function HomeComponent_span_3_tr_30_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_span_3_tr_30_td_22_div_1_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_span_3_tr_30_td_22_div_2_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[2].colorcode == "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[2].colorcode == "gray");
} }
function HomeComponent_span_3_tr_30_td_23_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_span_3_tr_30_td_23_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r88.downloadFile(techo_r3.data[1].name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_3_tr_30_td_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} }
function HomeComponent_span_3_tr_30_td_24_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} }
function HomeComponent_span_3_tr_30_td_24_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function HomeComponent_span_3_tr_30_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_span_3_tr_30_td_24_div_1_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_span_3_tr_30_td_24_div_2_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_span_3_tr_30_td_24_div_3_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[1].colorcode == "red" && ctx_r25.showyellow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[1].colorcode == "red" && !ctx_r25.showyellow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[1].colorcode == "gray");
} }
function HomeComponent_span_3_tr_30_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_span_3_tr_30_td_25_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97); const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r95.downloadFile(techo_r3.data[0].name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_span_3_tr_30_td_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} }
function HomeComponent_span_3_tr_30_td_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} }
function HomeComponent_span_3_tr_30_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_span_3_tr_30_td_26_div_1_Template, 1, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_span_3_tr_30_td_26_div_2_Template, 1, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[0].colorcode == "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[0].colorcode == "gray");
} }
function HomeComponent_span_3_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_span_3_tr_30_Template_td_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const techo_r3 = ctx.$implicit; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r101.openModal($event, "Hello Modal", techo_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_span_3_tr_30_td_3_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_span_3_tr_30_td_4_Template, 3, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_span_3_tr_30_td_5_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_span_3_tr_30_td_6_Template, 3, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_span_3_tr_30_td_7_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_span_3_tr_30_td_8_Template, 3, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_span_3_tr_30_td_9_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_span_3_tr_30_td_10_Template, 3, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_span_3_tr_30_td_11_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_span_3_tr_30_td_12_Template, 3, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_span_3_tr_30_td_13_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_span_3_tr_30_td_14_Template, 3, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_span_3_tr_30_td_15_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_span_3_tr_30_td_16_Template, 3, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_span_3_tr_30_td_17_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_span_3_tr_30_td_18_Template, 3, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_span_3_tr_30_td_19_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_span_3_tr_30_td_20_Template, 3, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_span_3_tr_30_td_21_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_span_3_tr_30_td_22_Template, 3, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_span_3_tr_30_td_23_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_span_3_tr_30_td_24_Template, 4, 3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_span_3_tr_30_td_25_Template, 2, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_span_3_tr_30_td_26_Template, 3, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](techo_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[11].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !techo_r3.data[11].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[10].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !techo_r3.data[10].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[9].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !techo_r3.data[9].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[8].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !techo_r3.data[8].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[7].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !techo_r3.data[7].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[6].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !techo_r3.data[6].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[5].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !techo_r3.data[5].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[4].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !techo_r3.data[4].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[3].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !techo_r3.data[3].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[2].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !techo_r3.data[2].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !techo_r3.data[1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo_r3.data[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !techo_r3.data[0].name);
} }
function HomeComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Driver Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_span_3_tr_30_Template, 27, 25, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.monthss[11]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.monthss[10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.monthss[9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.monthss[8]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.monthss[7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.monthss[6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.monthss[5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.monthss[4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.monthss[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.monthss[2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.monthss[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.monthss[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.techoGraphData);
} }
class HomeComponent {
    constructor(http, sanitizer, modalService, viewContainerRef) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.monthss = [];
        this.techoGraphData = [];
        this.itemID = 1;
        this.sessionID = '';
        this.showyellow = true;
        this.showPage = false;
        const queryParams = window.location.search;
        const searchParams = new URLSearchParams(queryParams);
        let sid = searchParams.get('sid');
        let user = searchParams.get('user');
        if (!sid) {
            sid = searchParams.get('?sid');
            sid = searchParams.get('user');
        }
        if (!sid) {
            sid = sessionStorage.getItem('sid');
        }
        if (typeof (Storage) !== 'undefined') {
            // Store
            sessionStorage.setItem('sid', sid);
            sessionStorage.setItem('user', user);
        }
        this.sessionID = sid ? sid : sessionStorage.getItem('sid');
    }
    ngOnInit() {
        var d = new Date();
        if (d.getDate() > 20) {
            this.showyellow = false;
        }
        let sessionID = '020fd5ec278ffe1694edb41009aca165'; //this.sessionID;
        this.http.get('https://wialonapp.herokuapp.com/https://hst-api.wialon.com/wialon/ajax.html?svc=core/search_items&params={"spec":{"itemsType":"avl_resource","propName":"","propValueMask":"","sortType":""},"force":1,"flags":8465,"from":0,"to":0}&sid=' + sessionID).subscribe((res) => {
            this.itemID = res.items[0].id;
            // console.log('111111',res);
            this.http.get('https://wialonapp.herokuapp.com/https://hst-api.wialon.com/wialon/ajax.html?svc=file/list&sid=' + sessionID + '&params={"itemId":' + res.items[0].id + ',"storageType":2,"path":"/tachograph","mask":"*","recursive":false,"fullPath":false}').subscribe((res1) => {
                // console.log('222222',res1);
                let drvrs = [];
                res.items.forEach((element) => {
                    drvrs.push(element.drvrs);
                });
                this.doProcessData(drvrs, res1);
            });
        });
    }
    doProcessData(drvrs, fileDetails) {
        let sessionID = this.sessionID;
        var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        drvrs.forEach((element1) => {
            let drvrsDetails = Object.keys(element1).map(function (key) { return element1[key]; });
            drvrsDetails.forEach(element => {
                this.techoGraphData.push({ name: element.n, id: element.c, data: {}, datejoin: element.ct, joindate: new Date(element.ct * 1000), phone: element.p, desc: element.ds, cardExpiry: element.jp && element.jp['Scadenza Tessera Autista'] ? element.jp['Scadenza Tessera Autista'] : '',
                    dateofemp: element.jp && element.jp['Date of employment'] ? element.jp['Date of employment'] : '',
                    email: element.jp && element.jp['E-mail'] ? element.jp['E-mail'] : '',
                    Patentediguida: element.jp && element.jp['Patente di guida'] ? element.jp['Patente di guida'] : '',
                    Patenteprofessionale: element.jp && element.jp['Patente professionale'] ? element.jp['Patente professionale'] : '',
                    Scadenzacarta: element.jp && element.jp['Scadenza carta'] ? element.jp['Scadenza carta'] : '',
                    Ruolonellazienda: element.jp && element.jp['Ruolo nellazienda'] ? element.jp['Ruolo nellazienda'] : '' });
            });
        });
        this.techoGraphData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        this.techoGraphData.forEach((techoGraph, index) => {
            let maxdrive = 9991618497441434;
            let detailsData = [];
            let monthss = [];
            var d = new Date();
            d.setDate(1);
            for (let i = 0; i <= 11; i++) {
                monthss.push(monthName[d.getMonth()] + '-' + d.getFullYear());
                let dateTime = Math.round(d.getTime() / 1000);
                let details = { name: null, dates: null, monthKey: monthName[d.getMonth()] + '-' + d.getFullYear(), colorcode: techoGraph.datejoin > dateTime ? 'gray' : 'red' };
                detailsData.push(details);
                d.setMonth(d.getMonth() - 1);
            }
            fileDetails.forEach((data) => {
                let driverdata = String(data.n).split("_")[0];
                if (driverdata.indexOf(techoGraph.id) >= 0) {
                    var d = new Date(data.ct * 1000);
                    let podindex = monthss.indexOf(monthName[d.getMonth()] + '-' + d.getFullYear());
                    if (podindex > -1) {
                        detailsData[podindex].name = data.n;
                        detailsData[podindex].dates = data.ct;
                        detailsData[podindex].colorcode = 'green';
                        if (data.ct < maxdrive) {
                            maxdrive = data.ct;
                        }
                    }
                }
            });
            let setCode = 0;
            detailsData.forEach((element, pos) => {
                if (maxdrive != 9991618497441434) {
                    if (element.colorcode == 'green') {
                        setCode = 1;
                    }
                    if (setCode && element.colorcode != 'green') {
                        detailsData[pos].colorcode = 'red';
                    }
                }
            });
            this.techoGraphData[index].data = detailsData;
            this.monthss = monthss;
        });
        console.log(this.techoGraphData);
        this.showPage = true;
    }
    downloadFile(fileName) {
        let sessionID = this.sessionID;
        window.open('https://hst-api.wialon.com/wialon/ajax.html?svc=file/get&sid=' + sessionID + '&params={"itemId":' + this.itemID + ',"storageType":2,"path":"/tachograph/' + fileName + '","format":"1"}');
        // window.open('https://hst-api.wialon.com/wialon/ajax.html?svc=file/get&params={"itemId":'+sessionID +',"storageType":2,"path":"/' + fileName + '","format":"1"}')
        // this.http.get('https://hst-api.wialon.com/wialon/ajax.html?svc=file/get&sid=' + sessionID + '&params={"itemId":'+this.itemID +',"storageType":2,"path":"/tachograph/' + fileName + '","format":"1"}', { responseType: 'blob' }).subscribe((res1: any) => {
        //   var objectUrl = URL.createObjectURL(res1);
        //   var a = document.createElement('a');
        //   document.body.appendChild(a);
        //   a.href = objectUrl;
        //   a.download = fileName
        //   a.click();
        //   a.remove();
        // })
    }
    openModal(e, modalTitle, modalText) {
        e.preventDefault();
        this.modalService.setRootViewContainerRef(this.viewContainerRef);
        this.modalService.addDynamicComponent(modalTitle, modalText);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 1, consts: [["role", "main"], ["type", "hidden"], ["selection", ""], ["class", "card-container", 4, "ngIf"], [1, "card-container"], ["cellpadding", "0", "cellspacing", "0", "border", "0"], [4, "ngFor", "ngForOf"], [1, "cursorname", 3, "click"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "click"], [1, "circle", "green"], ["class", "circle red", 4, "ngIf"], ["class", "circle gray", 4, "ngIf"], [1, "circle", "red"], [1, "circle", "gray"], ["class", "circle yellow", 4, "ngIf"], [1, "circle", "yellow"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_span_3_Template, 31, 13, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.monthss && ctx.showPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);\n#content[_ngcontent-%COMP%] {\n  margin: 40px auto;\n  text-align: center;\n  width: 600px;\n}\n#content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 700;\n  margin: 0 0 40px 0;\n  font-size: 25px;\n  line-height: 30px;\n}\n.circle[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  line-height: 0px;\n  border-radius: 50%;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  text-align: center;\n  color: white;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 700;\n  margin: 0px auto 0px;\n  cursor: pointer;\n}\n.red[_ngcontent-%COMP%] {\n  background-color: #dd1313;\n}\n.green[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  line-height: 20px;\n  cursor: pointer;\n  text-align: center;\n  -webkit-border-radius: 15%;\n  display: inline-block;\n  transform: rotate(45deg);\n  height: 25px;\n  width: 12px;\n  margin-left: 60%;\n  border-bottom: 7px solid #78b13f;\n  border-right: 7px solid #78b13f;\n}\n.gray[_ngcontent-%COMP%] {\n  background-color: #797979;\n}\n.orange[_ngcontent-%COMP%] {\n  background-color: #f58607;\n}\n.yellow[_ngcontent-%COMP%] {\n  background-color: #f1f507;\n}\n.feedback[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #b1b1b1;\n}\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\nh1.example-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 400;\n  text-align: center;\n  margin-bottom: 15px;\n}\n.tbl-header[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.tbl-content[_ngcontent-%COMP%] {\n  height: 800px;\n  overflow-x: auto;\n  margin-top: 0px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\nth[_ngcontent-%COMP%] {\n  padding: 20px 15px;\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #000;\n  text-transform: uppercase;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: left;\n  vertical-align: middle;\n  font-weight: 400;\n  font-size: 12px;\n  color: #000;\n  border-bottom: solid 1px rgba(255, 255, 255, 0.1);\n}\n\nbody[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #25c481, #25b7c4);\n  font-family: \"Roboto\", sans-serif;\n}\nsection[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.made-with-love[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  padding: 10px;\n  clear: left;\n  text-align: center;\n  font-size: 10px;\n  font-family: arial;\n  color: #000;\n}\n.made-with-love[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: #000;\n  font-size: 14px;\n  position: relative;\n  top: 2px;\n}\n.made-with-love[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none;\n}\n.made-with-love[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\np[_ngcontent-%COMP%] {\n  display: none;\n}\ntable[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  min-width: 100%;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 6px;\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #002b5c;\n  color: white;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%] {\n  background-color: #f3f3f3;\n}\ntable[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: white;\n}\ntable[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: right;\n  font-weight: 700;\n}\n.mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 760px) {\n  p[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: bold;\n  }\n\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.total-val) {\n    display: none;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%]:first-child {\n    background-color: #d9eaf4;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd)   td[_ngcontent-%COMP%]:first-child {\n    background-color: white;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%]:not(:first-child) {\n    background-color: white;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    width: 100%;\n    display: block;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child) {\n    width: 40%;\n    transition: transform 0.4s ease-out;\n    transform: translateY(-9999px);\n    position: relative;\n    z-index: -1;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child) {\n    transition: transform 0.4s ease-out;\n    transform: translateY(-9999px);\n    width: 60%;\n    position: relative;\n    z-index: -1;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    display: block;\n    cursor: pointer;\n  }\n  table[_ngcontent-%COMP%]   tr.total[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    width: 25%;\n    display: inline-block;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.total-val[_ngcontent-%COMP%] {\n    display: inline-block;\n    transform: translateY(0);\n    width: 75%;\n  }\n}\n@media only screen and (max-width: 300px) {\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child) {\n    width: 50%;\n    font-size: 14px;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child) {\n    width: 50%;\n    font-size: 14px;\n  }\n}\n.cursorname[_ngcontent-%COMP%] {\n  cursor: pointer;\n  max-width: 200px;\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlKUSwyRUFBQTtBQXhKTjtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFHSjtBQVFFO0VBQ0UseUJBQUE7QUFMSjtBQU9FO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FBTEo7QUFPRTtFQUVFLHlCQUFBO0FBTEo7QUFTRTtFQUNFLHlCQUFBO0FBTko7QUFRRTtFQUNFLHlCQUFBO0FBTEo7QUFPRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUpKO0FBT0U7RUFDRSxlQUFBO0VBQ0EsOEVBQUE7RUFDQSxVQUFBO0FBSko7QUFPRTtFQUNFLGdCQUFBO0FBSko7QUFPRTtFQUNFOzBGQUFBO0VBRUEsT0FBQTtBQUpKO0FBT0U7RUFDRTsrREFBQTtFQUVBLGNBQUE7QUFKSjtBQU9FO0VBQ0UsV0FBQTtBQUpKO0FBU0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTkY7QUFZQTtFQUNFLDBDQUFBO0FBVEY7QUFXQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQVJGO0FBVUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBUEY7QUFTQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0FBTkY7QUFVQSxnQkFBQTtBQUdBO0VBRUUsdURBQUE7RUFDQSxpQ0FBQTtBQVRGO0FBV0E7RUFDRSxXQUFBO0VBR0EsaUNBQUE7QUFWRjtBQWNBLHVCQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBWEY7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFWRjtBQVlBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBVEY7QUFXQTtFQUNFLDBCQUFBO0FBUkY7QUFZQSwyQ0FBQTtBQUVBO0VBQ0ksVUFBQTtBQVZKO0FBWUE7RUFDSSxvREFBQTtBQVRKO0FBV0E7RUFDSSxvREFBQTtBQVJKO0FBWUE7RUFDRSxzQkFBQTtBQVRGO0FBY0E7RUFDRSxhQUFBO0FBWEY7QUFjQTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7QUFYSjtBQWFDO0VBQ0csZ0JBQUE7RUFDQSxrQkFBQTtBQVhKO0FBb0JFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBbEJKO0FBcUJFO0VBQ0UseUJBQUE7QUFuQko7QUF1Qkk7RUFDRSx1QkFBQTtBQXJCTjtBQXdCSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUF0Qk47QUEyQkU7RUFDRSxhQUFBO0FBeEJKO0FBMkJBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7RUF4QkY7O0VBNkJJO0lBQ0UsYUFBQTtFQTFCTjtFQTZCSTtJQUNFLHlCQUFBO0VBM0JOO0VBNkJJO0lBQ0UsdUJBQUE7RUEzQk47RUE4Qkk7SUFDRSx1QkFBQTtFQTVCTjtFQStCSTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VBN0JOO0VBZ0NJO0lBQ0UsVUFBQTtJQUNBLG1DQUFBO0lBQ0EsOEJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUE5Qk47RUFpQ0k7SUFDRSxtQ0FBQTtJQUNBLDhCQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQS9CTjtFQWtDSTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VBaENOO0VBbUNJO0lBQ0UsVUFBQTtJQUNBLHFCQUFBO0VBakNOO0VBb0NJO0lBQ0UscUJBQUE7SUFDQSx3QkFBQTtJQUNBLFVBQUE7RUFsQ047QUFDRjtBQXVDQTtFQUdNO0lBQ0UsVUFBQTtJQUNBLGVBQUE7RUF2Q047RUEwQ0k7SUFDRSxVQUFBO0lBQ0EsZUFBQTtFQXhDTjtBQUNGO0FBNkNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUEzQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAjY29udGVudCB7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA2MDBweDtcbiAgfVxuICAjY29udGVudCBoMSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMCAwIDQwcHggMDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cbiAgLmNpcmNsZSB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC8vIGhlaWdodDogMjVweDtcbiAgICAvLyB3aWR0aDogMTJweDtcbiAgICAvLyBtYXJnaW4tbGVmdDogNjAlOyBcbiAgICAvLyBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzc4YjEzZjtcbiAgICAvLyBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjNzhiMTNmO1xuICB9XG4gIFxuICAucmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAxOSwgMTkpOyAgXG4gIH1cbiAgLmdyZWVuIHtcbiAgICBcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDE1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogNjAlOyBcbiAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzc4YjEzZjtcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjNzhiMTNmO1xuICB9XG4gIC5ncmF5IHtcbiAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5Nzk3OVxuXG5cbiAgfVxuICAub3JhbmdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU4NjA3O1xuICB9XG4gIC55ZWxsb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1MDc7XG4gIH1cbiAgLmZlZWRiYWNrIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNiMWIxYjE7XG4gIH1cblxuICAuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIFxuICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXG4gICAgZmxleDogMTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXG4gICAgZmxleDogMSAwIGF1dG87XG4gIH1cbiAgXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG5cbiAgXG5oMXtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxudGFibGV7XG4vLyAgIHdpZHRoOjEwMCU7XG4vLyAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4udGJsLWhlYWRlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuIH1cbi50YmwtY29udGVudHtcbiAgaGVpZ2h0OjgwMHB4O1xuICBvdmVyZmxvdy14OmF1dG87XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xufVxudGh7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbnRke1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG59XG5cblxuLyogZGVtbyBzdHlsZXMgKi9cblxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNTAwLDMwMCw3MDApO1xuYm9keXtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzI1YzQ4MSwgIzI1YjdjNCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI1YzQ4MSwgIzI1YjdjNCk7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cbnNlY3Rpb257XG4gIG1hcmdpbjogNXB4O1xuICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjOTlhMmEzLCAjMDBiZWVlKTtcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYTRiNWI2LCAjMjViN2M0KTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5cbi8qIGZvbGxvdyBtZSB0ZW1wbGF0ZSAqL1xuLm1hZGUtd2l0aC1sb3ZlIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY2xlYXI6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGNvbG9yOiAjMDAwO1xufVxuLm1hZGUtd2l0aC1sb3ZlIGkge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59XG4ubWFkZS13aXRoLWxvdmUgYSB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWFkZS13aXRoLWxvdmUgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5cbi8qIGZvciBjdXN0b20gc2Nyb2xsYmFyIGZvciB3ZWJraXQgYnJvd3NlciovXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA2cHg7XG59IFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXG59IFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXG59XG5cblxuKntcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG5cbnB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnRhYmxle1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgXG4gdGQsIHRoe1xuICAgIHBhZGRpbmc6IDhweCA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xuICB9XG4gIFxuICB0ZHtcbiAgICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFQ0YwRjE7XG4gICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0VDRjBGMTtcbiAgfVxuICBcbiAgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmI1YztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIHRyOm50aC1vZi10eXBlKGV2ZW4pIHRke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIH1cbiAgXG4gIC50b3RhbHtcbiAgICB0aHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICB0ZHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gIH1cbn1cblxuICAubW9iaWxlLWhlYWRlcntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpe1xuICBwe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICB0YWJsZXtcbiAgICB0cntcbiAgICAgIHRkOm5vdCg6Zmlyc3QtY2hpbGQpLCB0aDpub3QoOmZpcnN0LWNoaWxkKSwgdGQ6bm90KC50b3RhbC12YWwpe1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHRkOmZpcnN0LWNoaWxke1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCM0ZTllY2QsIDM1JSk7XG4gICAgICB9XG4gICAgICAmOm50aC1vZi10eXBlKG9kZCkgdGQ6Zmlyc3QtY2hpbGR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHRkOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGg6Zmlyc3QtY2hpbGR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aDpub3QoOmZpcnN0LWNoaWxkKXtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1vdXQ7XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC05OTk5cHgpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0ZDpub3QoOmZpcnN0LWNoaWxkKXtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1vdXQ7XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC05OTk5cHgpO1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0ZDpmaXJzdC1jaGlsZHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJi50b3RhbCB0aHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0ZC50b3RhbC12YWx7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KXtcbiAgdGFibGV7XG4gICAgdHJ7XG4gICAgICB0aDpub3QoOmZpcnN0LWNoaWxkKXtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICB0ZDpub3QoOmZpcnN0LWNoaWxkKXtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY3Vyc29ybmFtZXtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
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

/***/ "FJYG":
/*!**********************************************!*\
  !*** ./src/app/pages/unit/unit.component.ts ***!
  \**********************************************/
/*! exports provided: UnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitComponent", function() { return UnitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modal/modal.service */ "saQ5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auto_focus_directive_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auto-focus-directive.directive */ "0HhE");







function UnitComponent_div_3_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("colspan", techo_r5.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", techo_r5.month, " - ", techo_r5.year, " ");
} }
function UnitComponent_div_3_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](techo_r6);
} }
function UnitComponent_div_3_tr_14_td_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnitComponent_div_3_tr_14_td_3_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const techo1_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r17.downloadFile(techo1_r9.id, techo1_r9.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UnitComponent_div_3_tr_14_td_3_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 21);
} }
function UnitComponent_div_3_tr_14_td_3_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 22);
} }
function UnitComponent_div_3_tr_14_td_3_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnitComponent_div_3_tr_14_td_3_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const techo1_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r20.downloadFile(techo1_r9.id, techo1_r9.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UnitComponent_div_3_tr_14_td_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 24);
} }
function UnitComponent_div_3_tr_14_td_3_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 25);
} }
function UnitComponent_div_3_tr_14_td_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 26);
} }
function UnitComponent_div_3_tr_14_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UnitComponent_div_3_tr_14_td_3_div_1_Template, 1, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UnitComponent_div_3_tr_14_td_3_img_2_Template, 1, 0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UnitComponent_div_3_tr_14_td_3_img_3_Template, 1, 0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UnitComponent_div_3_tr_14_td_3_div_4_Template, 1, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UnitComponent_div_3_tr_14_td_3_div_5_Template, 1, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UnitComponent_div_3_tr_14_td_3_img_6_Template, 1, 0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UnitComponent_div_3_tr_14_td_3_div_7_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo1_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", techo1_r9.colorcode == "green" && ctx_r8.checkName(techo1_r9.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", techo1_r9.colorcode == "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", techo1_r9.colorcode == "gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.enableDownloadFor_dd(techo1_r9.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", techo1_r9.colorcode == "blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", techo1_r9.colorcode == "yellow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", techo1_r9.colorcode == "nocolor");
} }
function UnitComponent_div_3_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnitComponent_div_3_tr_14_Template_td_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const techo_r7 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r23.openModal($event, "Hello Modal", techo_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UnitComponent_div_3_tr_14_td_3_Template, 8, 7, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](techo_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", techo_r7.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", techo_r7.errorCount, " ");
} }
function UnitComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, UnitComponent_div_3_th_5_Template, 2, 3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " SERIE DI \"X\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Vehicles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UnitComponent_div_3_th_11_Template, 2, 1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UnitComponent_div_3_tr_14_Template, 7, 3, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.header1Rev);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.headerRev);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.techoGraphData);
} }
class UnitComponent {
    constructor(http, sanitizer, modalService, viewContainerRef) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.monthss = [];
        this.header = [];
        this.headerRev = [];
        this.header1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.header1Rev = [];
        this.techoGraphData = [];
        this.techoGraphDataRev = [];
        this.itemID = 1;
        this.sessionID = '';
        this.showyellow = true;
        this.showPage = false;
        this.unit_hash = new Map();
        this.unit_data = {};
        this.erro_count_hash = new Map();
        const queryParams = window.location.search;
        const searchParams = new URLSearchParams(queryParams);
        let sid = searchParams.get('sid');
        let user = searchParams.get('user');
        if (!sid) {
            sid = searchParams.get('?sid');
            sid = searchParams.get('user');
        }
        if (!sid) {
            sid = sessionStorage.getItem('sid');
        }
        if (typeof (Storage) !== 'undefined') {
            // Store
            sessionStorage.setItem('sid', sid);
            sessionStorage.setItem('user', user);
        }
        this.sessionID = sid ? sid : sessionStorage.getItem('sid');
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var d = new Date();
            if (d.getDate() > 20) {
                this.showyellow = false;
            }
            let sessionID = this.sessionID;
            //https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=core/search_items&params={"spec":{"itemsType":"avl_unit","propName":"sys_name","propValueMask":"*","sortType":"sys_name"},"force":1,"flags":1,"from":0,"to":0}&sid=023a6cca5cac6315101045006834e996
            this.http.get('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=core/search_items&params={"spec":{"itemsType":"avl_unit","propName":"sys_name","propValueMask":"*","sortType":"sys_name"},"force":1,"flags":1,"from":0,"to":0}&sid=' + sessionID).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //this.itemID = res.items[0].id;
                let item_array = res.items;
                let units = [];
                res.items.forEach((element) => {
                    units.push(element);
                });
                /***
                 *
                 * Start Populate unit details data
                 *
                 * ***/
                units.forEach((element) => {
                    this.techoGraphData.push({
                        name: element.nm, id: element.id, data: {},
                    });
                });
                this.techoGraphData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
                /***
                 *
                 * End Populate unit details data
                 *
                 * ***/
                /***  create unit data hash */
                this.techoGraphData.forEach((techoGraph, index) => {
                    this.unit_hash.set(techoGraph.id, techoGraph.name);
                });
                //     console.log(this.unit_hash)
                /***  create driver data hash */
                yield item_array.forEach((item, index) => {
                    let item_id = item.id;
                    // console.log('item id',item_id)
                    this.http.get('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=file/list&sid=' + sessionID + '&params={"itemId":' + item_id + ',"storageType":2,"path":"/tachograph","mask":"*","recursive":false,"fullPath":false}').subscribe((res1) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield this.doProcessData(item_id, res1);
                        let unitData = this.doPopulateData(item_id);
                        // if (checkdata.length > 0) {
                        //   console.log('.dd Files:', checkdata);
                        // }
                        this.doPopulateToFront(item_id, index, unitData);
                        // console.log('len',item_array.length,'index',index)
                        // console.log('printData',this.techoGraphData);
                        if (item_array.length == (index + 1))
                            this.doPopulateHeader();
                    })); //end second api
                }); //end foreach
            })); //end first api
            //console.log(this.techoGraphData)
            // const checkdata = [...unitData]
            // checkdata.map(res123 => {
            //   if (res123.name) {
            //     console.log(res123.name.split('.'));
            //   }
            // })
        });
    }
    doProcessData(unit_id, fileDetails) {
        // console.log(unit_id, this.unit_hash.get(unit_id), 'files:', fileDetails.length)
        if (fileDetails.length == undefined) {
            let Date1 = new Date();
            if (unit_id in this.unit_data == false)
                this.unit_data[unit_id] = new Array();
            let data1 = { month: "", date: Date1.getDate(), filepresent: false, name: '', dates: '', ct: '', mt: '', colorcode: 'gray' };
            //console.log( data1.mt,mt_tmp.getDate(),mt_tmp.getMonth(),mt_tmp.getFullYear())
            this.unit_data[unit_id].push(data1);
        }
        else {
            let Date1 = new Date();
            // fileDetails = fileDetails.filter((x: any)=>x.n.includes('.ddd'));
            // console.log("------------------------------------------")
            // console.log(fileDetails);
            // console.log("------------------------------------------")
            // yeh mera code hai or neechy tmhara
            //   const source = [
            //     {name:"heelo.DD"},
            //     {name:"heelo.dd"},
            //     {name:"heelo.DD"},
            //     {name:"heelo.dd"},
            //     {name:"heelo.DD"},
            //     {name:"heelo.dd"},
            //     {name:"heelo.DD"}
            // ];
            // const filteredData = source.filter(x => x.name.split('.')[1] === 'dd');
            // console.log('--------------------------------------');
            // console.log(filteredData);
            fileDetails.forEach((data) => {
                if (unit_id in this.unit_data == false)
                    this.unit_data[unit_id] = new Array();
                let data1 = { month: "", date: Date1.getDate(), filepresent: false, name: '', dates: '', ct: '', mt: '', colorcode: 'gray' };
                data1.name = data.n;
                // console.log(data1.name)
                data1.mt = data.mt;
                data1.ct = data.ct;
                let mt_tmp = new Date(data.mt * 1000);
                //console.log( data1.mt,mt_tmp.getDate(),mt_tmp.getMonth(),mt_tmp.getFullYear())
                this.unit_data[unit_id].push(data1);
                // // unitData1.map(res => {
                // if (data1.name) {
                // }
                //   if (data1.name.split('.')[1] === 'ddd' || data1.name.split('.')[1] === "ddd") {
                //     console.log(data1);
                //   console.count();
                // }
                // })
                ///hammad malick code 
                ///hammad malick code 
            }); //end  loop
        }
    } //end doProcessData()
    /***
     *
     * End Populate unit details data
     *
     * ***/
    doPopulateData(unit_id) {
        var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        let maxdrive = 9991618497441434;
        let unitData1 = [];
        this.header = [];
        let cM = -1;
        let inde = 0;
        this.header1 = [{ count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }];
        for (let index = 0; index <= 365; index++) {
            let oldDate = new Date();
            let newdate = new Date(oldDate);
            newdate.setDate(oldDate.getDate() - index);
            let dateTime = Math.round(newdate.getTime() / 1000);
            let data1 = { id: unit_id, month: monthName[newdate.getMonth()], date: newdate.getDate(), filepresent: false, name: '', ct: '', mt: '', dates: '', colorcode: 'gray' };
            this.header.push(newdate.getDate());
            if (cM == -1 || cM != newdate.getMonth()) {
                if (cM >= 0) {
                    inde++;
                }
                this.header1[inde].count = this.header1[inde].count + 1;
                this.header1[inde].month = monthName[newdate.getMonth()];
                this.header1[inde].year = newdate.getFullYear();
                cM = newdate.getMonth();
            }
            else {
                this.header1[inde].count = this.header1[inde].count + 1;
            }
            //  console.log(this.unit_data[unit_id])
            for (let key in this.unit_data[unit_id]) {
                let dobj = this.unit_data[unit_id][key];
                var d = new Date(dobj.mt * 1000);
                let cmonth = newdate.getMonth();
                if (d.getMonth() == cmonth && d.getDate() == newdate.getDate() && d.getFullYear() == newdate.getFullYear()) {
                    data1.filepresent = true;
                    data1.colorcode = 'green';
                    data1.name = dobj.name;
                    let d1 = new Date(dobj.mt * 1000);
                    data1.dates = String(d1.getDate()) + ' ' + String(d1.getMonth());
                    data1.filepresent = true;
                    if (dobj.ct < maxdrive) {
                        maxdrive = dobj.ct;
                    }
                }
            }
            unitData1.push(data1);
        } //end 365 days loop
        unitData1.reverse();
        let setCode = 0;
        let errorCount = 0;
        let Datecount = 0;
        unitData1.forEach((element, pos) => {
            if (maxdrive != 9991618497441434) {
                if (element.colorcode == 'green') {
                    Datecount = 0;
                    setCode = 1;
                }
                if (setCode && element.colorcode != 'green') {
                    Datecount++;
                    unitData1[pos].colorcode = 'red';
                    if (Datecount > 60 && Datecount <= 90) {
                        unitData1[pos].colorcode = 'yellow';
                    }
                    if (Datecount == 91) {
                        errorCount++;
                    }
                    if (Datecount <= 60) {
                        unitData1[pos].colorcode = 'nocolor';
                    }
                }
            }
            else {
                if (element.colorcode == 'blue') {
                    Datecount = 0;
                    setCode = 1;
                }
                if (setCode) {
                    Datecount++;
                    if (Datecount > 60 && Datecount <= 90) {
                        unitData1[pos].colorcode = 'yellow';
                    }
                    if (Datecount <= 60) {
                        unitData1[pos].colorcode = 'nocolor';
                    }
                }
            }
        }); //end unitData1
        //this.erro_count_array[]=errorCount
        this.erro_count_hash.set(unit_id, errorCount);
        return unitData1;
    }
    doPopulateToFront(unit_id, index, unitData1) {
        // is array mai kia hai yr shayad isi araay s data arha hai onintit dkho
        this.techoGraphData[index].data = unitData1;
        this.techoGraphData[index].errorCount = this.erro_count_hash.get(unit_id);
    }
    doPopulateHeader() {
        this.showPage = true;
        for (let i = this.header1.length - 1; i >= 0; i--) {
            this.header1Rev.push(this.header1[i]);
        }
        for (let j = this.header.length - 1; j >= 0; j--) {
            this.headerRev.push(this.header[j]);
        }
    }
    downloadFile(item_id, fileName) {
        let sessionID = this.sessionID;
        window.open('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=file/get&sid=' + sessionID + '&params={"itemId":' + item_id + ',"storageType":2,"path":"/tachograph/' + fileName + '","format":"1"}');
    }
    openModal(e, modalTitle, modalText) {
        e.preventDefault();
        this.modalService.setRootViewContainerRef(this.viewContainerRef);
        this.modalService.addDynamicComponent(modalTitle, modalText);
    }
    enableDownloadFor_dd(fileName) {
        if (fileName) {
            const _extension = fileName.split('.')[1];
            // console.log('data:', fileName)
            if (_extension === 'ddd') {
                // console.log('data:', fileName)
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    checkName(name) {
        return name.indexOf("_tacho_file.DDD") >= 0;
    }
}
UnitComponent.ɵfac = function UnitComponent_Factory(t) { return new (t || UnitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])); };
UnitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UnitComponent, selectors: [["app-profile"]], decls: 4, vars: 1, consts: [["role", "main", 1, "content1"], ["type", "hidden"], ["selection", ""], [4, "ngIf"], ["border", "1", 2, "background-color", "#00beee"], ["border", "1"], ["style", "text-align:center", "border", "1", 4, "ngFor", "ngForOf"], [1, "fixed", 2, "z-index", "8"], [4, "ngFor", "ngForOf"], ["border", "1", 2, "text-align", "center"], [1, "cursorname", "fixed", 3, "click"], [1, "error-count", 2, "font-size", "13px"], ["appAutoFocusDirective", "", "type", "text", 1, "focus"], ["class", "green", 3, "click", 4, "ngIf"], ["src", "../../../assets/red_1.svg", "alt", "", "width", "20", 4, "ngIf"], ["src", "../../../assets/grey_2.svg", "alt", "", "width", "20", 4, "ngIf"], ["class", "dummy", 3, "click", 4, "ngIf"], ["class", " blue", 4, "ngIf"], ["src", "../../../assets/yellow_2.svg", "alt", "", "width", "20", 4, "ngIf"], ["class", " orange", 4, "ngIf"], [1, "green", 3, "click"], ["src", "../../../assets/red_1.svg", "alt", "", "width", "20"], ["src", "../../../assets/grey_2.svg", "alt", "", "width", "20"], [1, "dummy", 3, "click"], [1, "blue"], ["src", "../../../assets/yellow_2.svg", "alt", "", "width", "20"], [1, "orange"]], template: function UnitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UnitComponent_div_3_Template, 15, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _auto_focus_directive_directive__WEBPACK_IMPORTED_MODULE_6__["AutoFocusDirectiveDirective"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);\n#content[_ngcontent-%COMP%] {\n  margin: 40px auto;\n  text-align: center;\n  width: 600px;\n}\n#content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 700;\n  margin: 0 0 40px 0;\n  font-size: 25px;\n  line-height: 30px;\n}\n.circle[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  line-height: 20px;\n  border-radius: 50%;\n  \n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  text-align: center;\n  color: white;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 700;\n  margin: 10px auto 10px;\n  cursor: pointer;\n}\n.red[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  background-image: url('red.png');\n  background-size: cover;\n}\n.green[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  background-image: url('green_2.svg');\n  background-size: cover;\n}\n.gray_download[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  background-image: url('green_2.svg');\n  background-size: cover;\n  filter: grayscale(1);\n}\n.gray[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  background-color: #797979;\n  background-size: cover;\n}\n.blue[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  background-size: cover;\n  background-image: url('blue.png');\n}\n.yellow[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  background-image: url('yellow.png');\n  background-size: cover;\n}\n.feedback[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #b1b1b1;\n}\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\nh1.example-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 400;\n  text-align: center;\n  margin-bottom: 15px;\n}\ntable[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.tbl-header[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n}\nth[_ngcontent-%COMP%] {\n  padding: 10px 5px;\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #000;\n  text-transform: uppercase;\n}\ntd[_ngcontent-%COMP%] {\n  text-align: left;\n  vertical-align: middle;\n  color: #000;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #25c481, #25b7c4);\n  font-family: \"Roboto\", sans-serif;\n}\nsection[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.made-with-love[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  padding: 10px;\n  clear: left;\n  text-align: center;\n  font-size: 10px;\n  font-family: arial;\n  color: #000;\n}\n.made-with-love[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: #000;\n  font-size: 14px;\n  position: relative;\n  top: 2px;\n}\n.made-with-love[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none;\n}\n.made-with-love[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\np[_ngcontent-%COMP%] {\n  display: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  text-align: left;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #ffffff;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #d9eaf4;\n  font-size: 13px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%] {\n  background-color: #f3f1f1;\n}\ntable[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #ebebeb;\n}\ntable[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 760px) {\n  p[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: bold;\n  }\n\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.total-val) {\n    display: none;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%]:first-child {\n    background-color: #d9eaf4;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd)   td[_ngcontent-%COMP%]:first-child {\n    background-color: white;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%]:not(:first-child) {\n    background-color: white;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    width: 100%;\n    display: block;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child) {\n    width: 40%;\n    transition: transform 0.4s ease-out;\n    transform: translateY(-9999px);\n    position: relative;\n    z-index: -1;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child) {\n    transition: transform 0.4s ease-out;\n    transform: translateY(-9999px);\n    width: 60%;\n    position: relative;\n    z-index: -1;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    display: block;\n    cursor: pointer;\n  }\n  table[_ngcontent-%COMP%]   tr.total[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    width: 25%;\n    display: inline-block;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.total-val[_ngcontent-%COMP%] {\n    display: inline-block;\n    transform: translateY(0);\n    width: 75%;\n  }\n}\n@media only screen and (max-width: 300px) {\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child) {\n    width: 50%;\n    font-size: 14px;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child) {\n    width: 50%;\n    font-size: 14px;\n  }\n}\n.cursorname[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ndiv[_ngcontent-%COMP%] {\n  position: relative;\n}\ntable[_ngcontent-%COMP%] {\n  position: relative;\n  border-collapse: collapse;\n}\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  padding: 0.25em;\n  z-index: 6;\n}\nthead[_ngcontent-%COMP%] {\n  \n  position: sticky;\n  top: 0;\n  color: #FFF;\n  border: 2px;\n  z-index: 6;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  left: 0;\n  z-index: 10;\n}\ntbody[_ngcontent-%COMP%] {\n  \n  position: sticky;\n  left: 0;\n  background: #FFF;\n  border-right: 1px solid #CCC;\n  z-index: 4;\n}\n.fixed[_ngcontent-%COMP%] {\n  \n  position: sticky;\n  left: 0;\n  background: #FFF;\n  z-index: 4;\n  max-width: 200px;\n  min-width: 200px;\n}\ntd.cursorname.fixed[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-align: left;\n}\n.content1[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n  overflow: auto;\n}\n.focus[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.dummy[_ngcontent-%COMP%] {\n  background: red;\n  height: 20px;\n  width: 20px;\n  border: 5px solid green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1bml0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVtQlEsMkVBQUE7QUFyTFI7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWhiRjtBQWtiQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQS9hRjtBQWliQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUFvQixjQUFBO0VBQ3BCLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQTdhRjtBQXViQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtBQXBiSjtBQXNiRTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBWUEsb0NBQUE7RUFDQSxzQkFBQTtBQS9iSjtBQWljRTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBWUEsb0NBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBMWNKO0FBNmNFO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0FBNWNKO0FBZ2RFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FBN2NKO0FBbWRFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0FBaGRKO0FBa2RBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUEvY0Y7QUFrZEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUEvY0Y7QUFrZEE7RUFDRSxlQUFBO0VBQ0EsOEVBQUE7RUFDQSxVQUFBO0FBL2NGO0FBa2RBO0VBQ0UsZ0JBQUE7QUEvY0Y7QUFrZEE7RUFDRTswRkFBQTtFQUVBLE9BQUE7QUEvY0Y7QUFrZEE7RUFDRTsrREFBQTtFQUVBLGNBQUE7QUEvY0Y7QUFzZEE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBbmRBO0FBcWRBO0VBRUEsbUJBQUE7QUFuZEE7QUFxZEE7RUFDQSwwQ0FBQTtBQWxkQTtBQXFkQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFsZEE7QUFvZEE7RUFFQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQWxkQTtBQXVkQSxnQkFBQTtBQUdBO0VBRUEsdURBQUE7RUFDQSxpQ0FBQTtBQXRkQTtBQXdkQTtFQUNBLFdBQUE7RUFHQSxpQ0FBQTtBQXZkQTtBQTJkQSx1QkFBQTtBQUNBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXhkQTtBQTBkQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUF2ZEE7QUF5ZEE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUF0ZEE7QUF3ZEE7RUFDQSwwQkFBQTtBQXJkQTtBQXlkQSwyQ0FBQTtBQWdCQTtFQUNBLHNCQUFBO0FBcmVBO0FBMGVBO0VBQ0EsYUFBQTtBQXZlQTtBQTBlQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUF2ZUE7QUE4ZUE7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7QUE3ZUY7QUFnZkE7RUFHRSxrQkFBQTtFQUNBLHlCQUFBO0FBaGZGO0FBbWZBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBamZGO0FBb2ZBO0VBQ0UseUJBQUE7QUFsZkY7QUFzZkU7RUFDRSx5QkFBQTtBQXBmSjtBQXVmRTtFQUVFLGdCQUFBO0FBdGZKO0FBNGZBO0VBQ0UsYUFBQTtBQXpmRjtBQTRmQTtFQUNBO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0VBemZBOztFQThmRTtJQUNFLGFBQUE7RUEzZko7RUE4ZkU7SUFDRSx5QkFBQTtFQTVmSjtFQThmRTtJQUNFLHVCQUFBO0VBNWZKO0VBK2ZFO0lBQ0UsdUJBQUE7RUE3Zko7RUFnZ0JFO0lBQ0UsV0FBQTtJQUNBLGNBQUE7RUE5Zko7RUFpZ0JFO0lBQ0UsVUFBQTtJQUNBLG1DQUFBO0lBQ0EsOEJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUEvZko7RUFrZ0JFO0lBQ0UsbUNBQUE7SUFDQSw4QkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUFoZ0JKO0VBbWdCRTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VBamdCSjtFQW9nQkU7SUFDRSxVQUFBO0lBQ0EscUJBQUE7RUFsZ0JKO0VBcWdCRTtJQUNFLHFCQUFBO0lBQ0Esd0JBQUE7SUFDQSxVQUFBO0VBbmdCSjtBQUNGO0FBNGdCQTtFQUdJO0lBQ0UsVUFBQTtJQUNBLGVBQUE7RUE1Z0JKO0VBK2dCRTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VBN2dCSjtBQUNGO0FBa2hCQTtFQUNBLGVBQUE7QUFoaEJBO0FBcWhCQTtFQUNFLGtCQUFBO0FBbGhCRjtBQXFoQkE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBbGhCRjtBQXFoQkE7O0VBRUUsZUFBQTtFQUNBLFVBQUE7QUFsaEJGO0FBcWhCQTtFQUM0QixlQUFBO0VBQzFCLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWpoQkY7QUFvaEJBO0VBQ0UsT0FBQTtFQUNBLFdBQUE7QUFqaEJGO0FBb2hCQTtFQUM0QixlQUFBO0VBQzFCLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FBaGhCRjtBQW1oQkE7RUFDNEIsZUFBQTtFQUMxQixnQkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUVBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBaGhCRjtBQWtoQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUEvZ0JGO0FBa2hCQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUdBLGNBQUE7QUFqaEJGO0FBbWhCQTtFQUNFLFVBQUE7QUFoaEJGO0FBa2hCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBL2dCRiIsImZpbGUiOiJ1bml0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gI2NvbnRlbnQge1xuLy8gICBtYXJnaW46IDQwcHggYXV0bztcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICB3aWR0aDogNjAwcHg7XG4vLyB9XG4vLyAjY29udGVudCBoMSB7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4vLyAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4vLyAgIG1hcmdpbjogMCAwIDQwcHggMDtcbi8vICAgZm9udC1zaXplOiAyNXB4O1xuLy8gICBsaW5lLWhlaWdodDogMzBweDtcbi8vIH1cbi8vIC5jaXJjbGUge1xuLy8gICB3aWR0aDogMTVweDtcbi8vICAgaGVpZ2h0OiAxNXB4O1xuLy8gICBsaW5lLWhlaWdodDogMjBweDtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlOyAvKiB0aGUgbWFnaWMgKi9cbi8vICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gICBmb250LXdlaWdodDogNzAwO1xuLy8gICBtYXJnaW46IDEwcHggYXV0byAxMHB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG5cbi8vICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4vLyAgIC8vIGhlaWdodDogMjVweDtcbi8vICAgLy8gd2lkdGg6IDEycHg7XG4vLyAgIC8vIG1hcmdpbi1sZWZ0OiA2MCU7IFxuLy8gICAvLyBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzc4YjEzZjtcbi8vICAgLy8gYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgIzc4YjEzZjtcbi8vIH1cbi8vIC5yZWQge1xuLy8gICAgIHdpZHRoOiAyMXB4O1xuLy8gICAgIGhlaWdodDogMjFweDtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcmVkLnBuZ1wiKTsgXG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBcbi8vICAgfVxuLy8gICAuZ3JlZW4ge1xuICAgIFxuLy8gICAgIHdpZHRoOiAyMXB4O1xuLy8gICAgIGhlaWdodDogMjFweDtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZ3JlZW4ucG5nXCIpO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB9XG4vLyAgIC5ncmF5IHtcbiAgXG4vLyAgICAgd2lkdGg6IDIxcHg7XG4vLyAgICAgaGVpZ2h0OiAyMXB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTc5Nzk7XG4vLyAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2dyYXkucG5nXCIpO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cblxuLy8gICB9XG4vLyAgIC5ibHVlIHtcbi8vICAgICB3aWR0aDogMjFweDtcbi8vICAgICBoZWlnaHQ6IDIxcHg7XG4vLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmx1ZS5wbmdcIik7XG5cbi8vICAgfVxuLy8gICAub3JhbmdlIHtcbi8vICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4vLyAgIH1cbi8vICAgLnllbGxvdyB7XG4vLyAgICAgd2lkdGg6IDIxcHg7XG4vLyAgICAgaGVpZ2h0OiAyMXB4O1xuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy95ZWxsb3cucG5nXCIpO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgIH1cbi8vIC5mZWVkYmFjayB7XG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgY29sb3I6ICNiMWIxYjE7XG4vLyB9XG5cbi8vIC5leGFtcGxlLWNvbnRhaW5lciB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgdG9wOiAwO1xuLy8gICBib3R0b206IDA7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIHJpZ2h0OiAwO1xuLy8gfVxuXG4vLyAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XG4vLyAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xuLy8gICB6LWluZGV4OiAyO1xuLy8gfVxuXG4vLyBoMS5leGFtcGxlLWFwcC1uYW1lIHtcbi8vICAgbWFyZ2luLWxlZnQ6IDhweDtcbi8vIH1cblxuLy8gLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xuLy8gICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXG4vLyAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXG4vLyAgIGZsZXg6IDE7XG4vLyB9XG5cbi8vIC5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4vLyAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXG4vLyAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXG4vLyAgIGZsZXg6IDEgMCBhdXRvO1xuLy8gfVxuXG5cblxuXG5cbi8vIGgxe1xuLy8gZm9udC1zaXplOiAzMHB4O1xuLy8gY29sb3I6ICNmZmY7XG4vLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gZm9udC13ZWlnaHQ6IDQwMDtcbi8vIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIG1hcmdpbi1ib3R0b206IDE1cHg7XG4vLyB9XG4vLyB0YWJsZXtcblxuLy8gdGFibGUtbGF5b3V0OiBmaXhlZDtcbi8vIH1cbi8vIC50YmwtaGVhZGVye1xuLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuLy8gfVxuXG4vLyB0aHtcbi8vIHBhZGRpbmc6IDEwcHggNXB4O1xuLy8gdGV4dC1hbGlnbjogbGVmdDtcbi8vIGZvbnQtd2VpZ2h0OiA1MDA7XG4vLyBmb250LXNpemU6IDEycHg7XG4vLyBjb2xvcjogIzAwMDtcbi8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4vLyB9XG4vLyB0ZHtcblxuLy8gdGV4dC1hbGlnbjogbGVmdDtcbi8vIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbi8vIGNvbG9yOiAjMDAwO1xuLy8gYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbi8vIH1cbi8vIC5lcnJvci1jb3VudHtcbi8vICAgY29sb3I6IHJlZDtcbi8vICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4vLyB9XG5cbi8vIC8qIGRlbW8gc3R5bGVzICovXG5cbi8vIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCwzMDAsNzAwKTtcbi8vIGJvZHl7XG4vLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMjVjNDgxLCAjMjViN2M0KTtcbi8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI1YzQ4MSwgIzI1YjdjNCk7XG4vLyBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4vLyB9XG4vLyBzZWN0aW9ue1xuLy8gbWFyZ2luOiA1cHg7XG4vLyAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjOTlhMmEzLCAjMDBiZWVlKTtcbi8vIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2E0YjViNiwgIzI1YjdjNCk7XG4vLyBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4vLyB9XG5cblxuLy8gLyogZm9sbG93IG1lIHRlbXBsYXRlICovXG4vLyAubWFkZS13aXRoLWxvdmUge1xuLy8gbWFyZ2luLXRvcDogNDBweDtcbi8vIHBhZGRpbmc6IDEwcHg7XG4vLyBjbGVhcjogbGVmdDtcbi8vIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIGZvbnQtc2l6ZTogMTBweDtcbi8vIGZvbnQtZmFtaWx5OiBhcmlhbDtcbi8vIGNvbG9yOiAjMDAwO1xuLy8gfVxuLy8gLm1hZGUtd2l0aC1sb3ZlIGkge1xuLy8gZm9udC1zdHlsZTogbm9ybWFsO1xuLy8gY29sb3I6ICMwMDA7XG4vLyBmb250LXNpemU6IDE0cHg7XG4vLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyB0b3A6IDJweDtcbi8vIH1cbi8vIC5tYWRlLXdpdGgtbG92ZSBhIHtcbi8vIGNvbG9yOiAjMDAwO1xuLy8gdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gfVxuLy8gLm1hZGUtd2l0aC1sb3ZlIGE6aG92ZXIge1xuLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4vLyB9XG5cblxuLy8gLyogZm9yIGN1c3RvbSBzY3JvbGxiYXIgZm9yIHdlYmtpdCBicm93c2VyKi9cblxuLy8gLy8gOjotd2Via2l0LXNjcm9sbGJhciB7XG4vLyAvLyAgIHdpZHRoOiA2cHg7XG4vLyAvLyB9IFxuLy8gLy8gOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4vLyAvLyAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7IFxuLy8gLy8gICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuLy8gLy8gfSBcbi8vIC8vIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuLy8gLy8gICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpOyBcbi8vIC8vICAgYmFja2dyb3VuZDogI2MxYzFjMTtcblxuLy8gLy8gfVxuXG5cbi8vICp7XG4vLyBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuLy8gfVxuXG5cblxuLy8gcHtcbi8vIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIHRhYmxle1xuLy8gYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbi8vIHRleHQtYWxpZ246IGxlZnQ7XG4vLyAvLyBmbG9hdDpyaWdodCAhaW1wb3J0YW50O1xuLy8gLy8gZGlzcGxheTpibG9jaztcbi8vIC8vIG92ZXJmbG93OnNjcm9sbDtcbi8vIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cblxuLy8gdGQsIHRoe1xuLy8gICBib3JkZXItdG9wOiAxcHggc29saWQgI0VDRjBGMTtcbi8vICAgcGFkZGluZzogNXB4O1xuLy8gfVxuXG4vLyB0ZHtcbi8vICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRUNGMEYxO1xuLy8gICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRUNGMEYxO1xuICBcbi8vIH1cblxuLy8gdGh7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwMGJlZWU7XG4vLyB9XG5cbi8vIHRyOm50aC1vZi10eXBlKGV2ZW4pIHRke1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCM0ZTllY2QsIDM1JSk7XG4vLyB9XG5cbi8vIC50b3RhbHtcbi8vICAgdGh7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgIH1cbiAgXG4vLyAgIHRke1xuLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgXG4vLyAgIH1cbi8vIH1cbi8vIH1cblxuLy8gLm1vYmlsZS1oZWFkZXJ7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpe1xuLy8gcHtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuXG4vLyB0YWJsZXtcbi8vICAgdHJ7XG4vLyAgICAgdGQ6bm90KDpmaXJzdC1jaGlsZCksIHRoOm5vdCg6Zmlyc3QtY2hpbGQpLCB0ZDpub3QoLnRvdGFsLXZhbCl7XG4vLyAgICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgIH1cbiAgICBcbi8vICAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHRkOmZpcnN0LWNoaWxke1xuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigjNGU5ZWNkLCAzNSUpO1xuLy8gICAgIH1cbi8vICAgICAmOm50aC1vZi10eXBlKG9kZCkgdGQ6Zmlyc3QtY2hpbGR7XG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbi8vICAgICB9XG4gICAgXG4vLyAgICAgJjpudGgtb2YtdHlwZShldmVuKSB0ZDpub3QoOmZpcnN0LWNoaWxkKXtcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICAgIH1cbiAgICBcbi8vICAgICB0aDpmaXJzdC1jaGlsZHtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgZGlzcGxheTpibG9jaztcbi8vICAgICB9XG4gICAgXG4vLyAgICAgdGg6bm90KDpmaXJzdC1jaGlsZCl7XG4vLyAgICAgICB3aWR0aDogNDAlO1xuLy8gICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1vdXQ7XG4vLyAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtOTk5OXB4KTtcbi8vICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgIHotaW5kZXg6IC0xO1xuLy8gICAgIH1cbiAgICBcbi8vICAgICB0ZDpub3QoOmZpcnN0LWNoaWxkKXtcbi8vICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2Utb3V0O1xuLy8gICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTk5OTlweCk7XG4vLyAgICAgICB3aWR0aDogNjAlO1xuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgei1pbmRleDogLTE7XG4vLyAgICAgfVxuICAgIFxuLy8gICAgIHRkOmZpcnN0LWNoaWxke1xuLy8gICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgfVxuICAgIFxuLy8gICAgICYudG90YWwgdGh7XG4vLyAgICAgICB3aWR0aDogMjUlO1xuLy8gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgIH1cbiAgICBcbi8vICAgICB0ZC50b3RhbC12YWx7XG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4vLyAgICAgICB3aWR0aDogNzUlO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuLy8gfVxuLy8gLy8gdGFibGUsIHRkIHtcbi8vIC8vICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4vLyAvLyAgIGZsb2F0OnJpZ2h0ICFpbXBvcnRhbnQ7XG4vLyAvLyB9XG5cbi8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpe1xuLy8gdGFibGV7XG4vLyAgIHRye1xuLy8gICAgIHRoOm5vdCg6Zmlyc3QtY2hpbGQpe1xuLy8gICAgICAgd2lkdGg6IDUwJTtcbi8vICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICB9XG4gICAgXG4vLyAgICAgdGQ6bm90KDpmaXJzdC1jaGlsZCl7XG4vLyAgICAgICB3aWR0aDogNTAlO1xuLy8gICAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuLy8gfVxuXG4vLyAuY3Vyc29ybmFtZXtcbi8vIGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cblxuXG5cbi8vIGRpdiB7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vIH1cblxuLy8gdGFibGUge1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4vLyB9XG5cbi8vIHRkLFxuLy8gdGgge1xuLy8gICBwYWRkaW5nOiAwLjI1ZW07XG4vLyAgIHotaW5kZXg6IDY7XG4vLyB9XG5cbi8vIHRoZWFkIHtcbi8vICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBmb3IgU2FmYXJpICovXG4vLyAgIHBvc2l0aW9uOiBzdGlja3k7XG4vLyAgIHRvcDogMDtcbi8vICAgY29sb3I6ICNGRkY7XG4vLyAgIGJvcmRlcjogMnB4O1xuLy8gICB6LWluZGV4OiA2O1xuLy8gfVxuXG4vLyB0aGVhZCB0aDpmaXJzdC1jaGlsZCB7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIHotaW5kZXg6IDEwO1xuLy8gfVxuXG4vLyB0Ym9keXtcbi8vICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBmb3IgU2FmYXJpICovXG4vLyAgIHBvc2l0aW9uOiBzdGlja3k7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIGJhY2tncm91bmQ6ICNGRkY7XG4vLyAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDQ0M7XG4vLyAgIHotaW5kZXg6IDQ7XG4vLyB9XG5cbi8vIC5maXhlZHtcbi8vICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBmb3IgU2FmYXJpICovXG4vLyAgIHBvc2l0aW9uOiBzdGlja3k7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIGJhY2tncm91bmQ6ICNGRkY7XG4vLyAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDQ0M7XG4vLyAgIHotaW5kZXg6IDQ7XG4vLyAgIG1heC13aWR0aDogMjAwcHg7XG4vLyAgIG1pbi13aWR0aDogMjAwcHg7XG4vLyB9XG4vLyB0ZC5jdXJzb3JuYW1lLmZpeGVke1xuLy8gICBmb250LXNpemU6IDE1cHg7XG4vLyB9XG5cbi8vIC5jb250ZW50MSB7XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuXG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gbmV3IFxuXG4jY29udGVudCB7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA2MDBweDtcbn1cbiNjb250ZW50IGgxIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAwIDAgNDBweCAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmNpcmNsZSB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7IC8qIHRoZSBtYWdpYyAqL1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMTBweCBhdXRvIDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8vIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLy8gaGVpZ2h0OiAyNXB4O1xuICAvLyB3aWR0aDogMTJweDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDYwJTsgXG4gIC8vIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjNzhiMTNmO1xuICAvLyBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjNzhiMTNmO1xufVxuLnJlZCB7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9yZWQucG5nXCIpOyBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIC5ncmVlbiB7XG4gICAgXG4gICAgd2lkdGg6IDIxcHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIC8vIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIC8vIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxNSU7XG4gICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAvLyBoZWlnaHQ6IFsyNXB4O1xuICAgIC8vIHdpZHRoOiAxMnB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiA2MCU7IFxuICAgIC8vIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjNzhiMTNmO1xuICAgIC8vIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICM3OGIxM2Y7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2dyZWVuXzIuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmdyYXlfZG93bmxvYWQge1xuICAgIFxuICAgIHdpZHRoOiAyMXB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICAvLyBsaW5lLWhlaWdodDogMjBweDtcbiAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTUlO1xuICAgIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLy8gaGVpZ2h0OiBbMjVweDtcbiAgICAvLyB3aWR0aDogMTJweDtcbiAgICAvLyBtYXJnaW4tbGVmdDogNjAlOyBcbiAgICAvLyBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzc4YjEzZjtcbiAgICAvLyBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjNzhiMTNmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ncmVlbl8yLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICB9XG5cbiAgLmdyYXkge1xuICBcbiAgICB3aWR0aDogMjFweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5Nzk3OTtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZ3JheS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuXG4gIH1cbiAgLmJsdWUge1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ibHVlLnBuZ1wiKTtcblxuICB9XG4gIC5vcmFuZ2Uge1xuICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAueWVsbG93IHtcbiAgICB3aWR0aDogMjFweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3llbGxvdy5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuLmZlZWRiYWNrIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2IxYjFiMTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXG4gIHotaW5kZXg6IDI7XG59XG5cbmgxLmV4YW1wbGUtYXBwLW5hbWUge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcbiAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cbiAgZmxleDogMTtcbn1cblxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cbiAgZmxleDogMSAwIGF1dG87XG59XG5cblxuXG5cblxuaDF7XG5mb250LXNpemU6IDMwcHg7XG5jb2xvcjogI2ZmZjtcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5mb250LXdlaWdodDogNDAwO1xudGV4dC1hbGlnbjogY2VudGVyO1xubWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbnRhYmxle1xuXG50YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLnRibC1oZWFkZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG59XG5cbnRoe1xucGFkZGluZzogMTBweCA1cHg7XG50ZXh0LWFsaWduOiBsZWZ0O1xuZm9udC13ZWlnaHQ6IDUwMDtcbmZvbnQtc2l6ZTogMTJweDtcbmNvbG9yOiAjMDAwO1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbnRke1xuXG50ZXh0LWFsaWduOiBsZWZ0O1xudmVydGljYWwtYWxpZ246bWlkZGxlO1xuY29sb3I6ICMwMDA7XG4vLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQztcbn1cblxuXG4vKiBkZW1vIHN0eWxlcyAqL1xuXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw1MDAsMzAwLDcwMCk7XG5ib2R5e1xuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzI1YzQ4MSwgIzI1YjdjNCk7XG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNWM0ODEsICMyNWI3YzQpO1xuZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuc2VjdGlvbntcbm1hcmdpbjogNXB4O1xuLy8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzk5YTJhMywgIzAwYmVlZSk7XG4vLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNhNGI1YjYsICMyNWI3YzQpO1xuZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5cbi8qIGZvbGxvdyBtZSB0ZW1wbGF0ZSAqL1xuLm1hZGUtd2l0aC1sb3ZlIHtcbm1hcmdpbi10b3A6IDQwcHg7XG5wYWRkaW5nOiAxMHB4O1xuY2xlYXI6IGxlZnQ7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5mb250LXNpemU6IDEwcHg7XG5mb250LWZhbWlseTogYXJpYWw7XG5jb2xvcjogIzAwMDtcbn1cbi5tYWRlLXdpdGgtbG92ZSBpIHtcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmNvbG9yOiAjMDAwO1xuZm9udC1zaXplOiAxNHB4O1xucG9zaXRpb246IHJlbGF0aXZlO1xudG9wOiAycHg7XG59XG4ubWFkZS13aXRoLWxvdmUgYSB7XG5jb2xvcjogIzAwMDtcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tYWRlLXdpdGgtbG92ZSBhOmhvdmVyIHtcbnRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5cbi8qIGZvciBjdXN0b20gc2Nyb2xsYmFyIGZvciB3ZWJraXQgYnJvd3NlciovXG5cbi8vIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuLy8gICB3aWR0aDogNnB4O1xuLy8gfSBcbi8vIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuLy8gICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpOyBcbi8vICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbi8vIH0gXG4vLyA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbi8vICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXG4vLyAgIGJhY2tncm91bmQ6ICNjMWMxYzE7XG5cbi8vIH1cblxuXG4qe1xuYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG5cbnB7XG5kaXNwbGF5OiBub25lO1xufVxuXG50YWJsZXtcbmJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG50ZXh0LWFsaWduOiBsZWZ0O1xuLy8gZmxvYXQ6cmlnaHQgIWltcG9ydGFudDtcbi8vIGRpc3BsYXk6YmxvY2s7XG4vLyBvdmVyZmxvdzpzY3JvbGw7XG4vLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG5cbnRkLCB0aHtcbiAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDQ0M7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZHtcbiAgLy8gYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQ0NDO1xuICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0NDO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbnRoe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllYWY0O1xuICBmb250LXNpemU6IDEzcHhcbn1cblxudHI6bnRoLW9mLXR5cGUoZXZlbikgdGR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YxZjE7XG59XG5cbi50b3RhbHtcbiAgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbiAgfVxuICBcbiAgdGR7XG4gICAgLy8gdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBcbiAgfVxufVxufVxuXG4ubW9iaWxlLWhlYWRlcntcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCl7XG5we1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRhYmxle1xuICB0cntcbiAgICB0ZDpub3QoOmZpcnN0LWNoaWxkKSwgdGg6bm90KDpmaXJzdC1jaGlsZCksIHRkOm5vdCgudG90YWwtdmFsKXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgICY6bnRoLW9mLXR5cGUoZXZlbikgdGQ6Zmlyc3QtY2hpbGR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCM0ZTllY2QsIDM1JSk7XG4gICAgfVxuICAgICY6bnRoLW9mLXR5cGUob2RkKSB0ZDpmaXJzdC1jaGlsZHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHRkOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuICAgIHRoOmZpcnN0LWNoaWxke1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1cbiAgICBcbiAgICB0aDpub3QoOmZpcnN0LWNoaWxkKXtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLW91dDtcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC05OTk5cHgpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICAgIFxuICAgIHRkOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1vdXQ7XG4gICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtOTk5OXB4KTtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gICAgXG4gICAgdGQ6Zmlyc3QtY2hpbGR7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgXG4gICAgJi50b3RhbCB0aHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIFxuICAgIHRkLnRvdGFsLXZhbHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICB9XG59XG59XG4vLyB0YWJsZSwgdGQge1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbi8vICAgZmxvYXQ6cmlnaHQgIWltcG9ydGFudDtcbi8vIH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCl7XG50YWJsZXtcbiAgdHJ7XG4gICAgdGg6bm90KDpmaXJzdC1jaGlsZCl7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBcbiAgICB0ZDpub3QoOmZpcnN0LWNoaWxkKXtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59XG59XG5cbi5jdXJzb3JuYW1le1xuY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG50YWJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbiAgei1pbmRleDogNjtcbn1cblxudGhlYWQge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIGZvciBTYWZhcmkgKi9cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiAycHg7XG4gIHotaW5kZXg6IDY7XG59XG5cbnRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG59XG5cbnRib2R5e1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIGZvciBTYWZhcmkgKi9cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0NDQztcbiAgei1pbmRleDogNDtcbn1cblxuLmZpeGVke1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIGZvciBTYWZhcmkgKi9cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0NDQztcbiAgei1pbmRleDogNDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cbnRkLmN1cnNvcm5hbWUuZml4ZWR7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbnRlbnQxIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG5cbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uZm9jdXN7XG4gIG9wYWNpdHk6IDA7XG59XG4uZHVtbXl7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgZ3JlZW47XG59Il19 */"] });


/***/ }),

/***/ "SE/N":
/*!**************************************************************!*\
  !*** ./src/app/pages/infringement/infringement.component.ts ***!
  \**************************************************************/
/*! exports provided: InfringementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfringementComponent", function() { return InfringementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modal/modal.service */ "saQ5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function InfringementComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfringementComponent_tr_12_Template_td_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const doc_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openModal($event, "Infringement", doc_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doc_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doc_r3.driver_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doc_r3.driver_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doc_r3.driver_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", doc_r3.driver_description, " ");
} }
function InfringementComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading Driver Report Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InfringementComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Record not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class InfringementComponent {
    constructor(http, sanitizer, modalService, viewContainerRef) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.itemID = 0;
        this.reportID = 0;
        this.drivergroupID = 0;
        this.sessionID = '';
        this.rows = 0;
        this.docs = [];
        this.totalRecords = -1;
        this.drivers_data = {};
        this.infrigngementData = [];
        this.api_fld_acc = 'Account';
        this.api_fld_com = 'Company';
        this.api_fld_ins = 'Inspecter';
        this.api_fld_site = 'Site';
        this.account_name = '';
        this.company_name = '';
        this.inspecter_name = '';
        this.site_name = '';
        this.description_data = {};
        const queryParams = window.location.search;
        const searchParams = new URLSearchParams(queryParams);
        let sid = searchParams.get('sid');
        //let user: any = searchParams.get('user');
        if (!sid) {
            sid = searchParams.get('?sid');
            //  sid = searchParams.get('user');
        }
        if (!sid) {
            sid = sessionStorage.getItem('sid');
        }
        if (typeof (Storage) !== 'undefined') {
            // Store
            sessionStorage.setItem('sid', sid);
        }
        this.sessionID = sid ? sid : sessionStorage.getItem('sid');
        this.description_data['Exceeded daily driving time of 9 h'] = 'assets/Exceeded-daily-driving-time-of-9-h.png';
        this.description_data['Exceeded extended daily driving time of 10 h'] = 'assets/Exceeded-extended-daily-driving-time-of-10-h-.png';
        this.description_data['Exceeded weekly driving time of 56 h'] = 'assets/Exceeded-weekly-driving-time-of-56-h-.png';
        this.description_data['Exceeded accumulated two-week driving time of 90 h'] = 'assets/Exceeded-accumulated-two-week-driving-time-of-90-h-.png';
        this.description_data['Exceeded uninterrupted driving time of 4 h 30 min'] = 'assets/Exceeded-uninterrupted-driving-time-of-4-h-30-min-.png';
        this.description_data['Insufficient daily rest period of less than 11 h'] = 'assets/Insufficient-daily-rest-period-of-less-than-11-h-.png';
        this.description_data['Insufficient reduced daily rest period of less than 9 h'] = 'assets/Insufficient-reduced-daily-rest-period-of-less-than-9-h-.png';
        this.description_data['Insufficient split daily rest period of less than 3 h + 9h'] = 'assets/Insufficient-split-daily-rest-period-of-less-than-3-h-9-h-.png';
        this.description_data['Insufficient weekly rest period of less than 45 h'] = 'assets/Insufficient-weekly-rest-period-of-less-than-45-h.png';
        this.description_data['Insufficient reduced weekly rest period of less than 24 h'] = 'assets/Insufficient-reduced-weekly-rest-period-of-less-than-24-h-.png';
        this.description_data['Insufficient daily rest period of less than 9 h for crew'] = 'assets/Insufficient-reduced-daily-rest-period-of-less-than-9-h-.png';
    }
    ngOnInit() {
        let sessionID = this.sessionID;
        /**
         * Get Item ID
         */
        this.http.get('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=core/search_items&params={"spec":{"itemsType":"avl_resource","propName":"","propValueMask":"","sortType":""},"force":1,"flags":8465,"from":0,"to":0}&sid=' + sessionID).subscribe((res0) => {
            this.itemID = res0.items[0].id;
            /**
            * Get Report ID
            */
            this.http.get('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=core/search_items&params={\"spec\":{\"itemsType\":\"avl_resource\",\"propType\":\"propitemname\",\"propName\":\"reporttemplates\",\"propValueMask\":\"*\",\"sortType\":\"reporttemplates\"},\"force\":1,\"flags\":8192,\"from\":0,\"to\":0}&sid=' + sessionID).subscribe((res1) => {
                //console.log('report template',res1)
                res1.items.forEach((element_rep) => {
                    let rep = element_rep.rep;
                    Object.keys(rep).forEach((key1) => {
                        if (rep[key1].n == 'Infringements') {
                            this.reportID = rep[key1].id;
                        }
                    });
                });
                /**
                * Get driver group ID
                */
                this.http.get('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=core/search_items&params={\"spec\":{\"itemsType\":\"avl_resource\",\"propType\":\"propitemname\",\"propName\":\"driver_groups\",\"propValueMask\":\"*\",\"sortType\":\"driver_groups\"},\"force\":1,\"flags\":32768,\"from\":0,\"to\":0}&sid=' + sessionID).subscribe((res2) => {
                    res2.items.forEach((element_drvrsgroup) => {
                        // this.http.get('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=file/list&sid=' + sessionID + '&params={"itemId":' + this.itemID + ',"storageType":2,"path":"/tachograph","mask":"*","recursive":false,"fullPath":false}').subscribe((res3: any) => {
                        //  let drv_list = res3.items[0].drvrs
                        //  Object.keys(drv_list).forEach((element: any) => {
                        //     //element.drvrs
                        //   })
                        // })
                        // //drivers_data
                        let drvrsgr = element_drvrsgroup.drvrsgr;
                        Object.keys(drvrsgr).forEach((key1) => {
                            if (drvrsgr[key1].n == 'All Drivers') {
                                this.drivergroupID = drvrsgr[key1].id;
                                this.generateDriversReport();
                            }
                        });
                    });
                }); //end drivergroup id
            }); //end Report Id
        }); //END ITEM ID
        // })
    }
    generateDriversReport() {
        var formData0 = new FormData();
        formData0.append('params', '{"params":[{"svc":"report/cleanup_result","params":{}},{"svc":"report/cleanup_result","params":{}},{"svc":"report/get_report_data","params":{"itemId":' + this.itemID + ',"col":["8"],"flags":0}}],"flags":0}');
        formData0.append('sid', this.sessionID);
        this.http.post('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=core/batch&sid=' + this.sessionID, formData0).subscribe((res0) => {
            var formData0 = new FormData();
            formData0.append('params', '{"reportResourceId":' + this.itemID + ',"reportTemplateId":' + this.reportID + ',"reportTemplate":null,"reportObjectId":' + this.itemID + ',"reportObjectSecId":"' + this.drivergroupID + '","interval":{"flags":16777256,"from":0,"to":12},"remoteExec":1}');
            formData0.append('sid', this.sessionID);
            this.http.post('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=report/exec_report&sid=' + this.sessionID, formData0).subscribe((res0) => {
                var formData0 = new FormData();
                formData0.append('params', '{}');
                formData0.append('sid', this.sessionID);
                this.http.post('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=report/get_report_status&sid=' + this.sessionID, formData0).subscribe((res0) => {
                    var formData0 = new FormData();
                    formData0.append('params', '{}');
                    formData0.append('sid', this.sessionID);
                    this.http.post('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=report/apply_report_result&sid=' + this.sessionID, formData0).subscribe((res_rows) => {
                        var res_rows_obj = res_rows.reportResult.tables;
                        res_rows_obj.forEach((item) => {
                            if (item.hasOwnProperty('rows') && item.hasOwnProperty('rows') > 0) {
                                this.rows = item.rows;
                            }
                        });
                        var formData0 = new FormData();
                        formData0.append('params', '{"tableIndex":0,"config":{"type":"range","data":{"from":0,"to":' + this.rows + ',"level":0,"unitInfo":1}}}');
                        formData0.append('sid', this.sessionID);
                        this.http.post('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=report/select_result_rows&sid=' + this.sessionID, formData0).subscribe((res_) => {
                            this.getDriverFields(res_);
                            //console.log(res_)
                        });
                    });
                });
            });
        });
    }
    getDriverFields(res_) {
        let sessionID = this.sessionID;
        this.http.get('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=core/search_items&params={\"spec\":{\"itemsType\":\"user\",\"propName\":\"sys_name\",\"propValueMask\":\"Customer Document*\",\"sortType\":\"sys_name\"},\"force\":1,\"flags\":1,\"from\":0,\"to\":0}&sid=' + sessionID).subscribe((users) => {
            if (users.items.length > 0) {
                this.http.get('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=core/search_items&params={\"spec\":{\"itemsType\":\"avl_resource\","propType":"propitemname","propName":"drivers","propValueMask":"*","sortType":"drivers"},"force":1,"flags":256,"from":0,"to":0}&sid=' + sessionID).subscribe((res3) => {
                    let drv_tmp = res3.items[0].drvrs;
                    Object.keys(drv_tmp).forEach((element1) => {
                        if (this.drivers_data.hasOwnProperty(drv_tmp[element1].n)) {
                            this.drivers_data[drv_tmp[element1].n + '_' + drv_tmp[element1].c] = drv_tmp[element1].c;
                        }
                        else {
                            this.drivers_data[drv_tmp[element1].n] = drv_tmp[element1].c;
                        }
                    });
                    // console.log(this.drivers_data)
                    const account_id = users.items[0].id;
                    const flag1 = 4294967295;
                    var formData0 = new FormData();
                    formData0.append('params', '{\"id\":' + account_id + ',\"flags\":' + flag1 + '}');
                    formData0.append('sid', this.sessionID);
                    this.http.post('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=core/search_item&sid=' + this.sessionID, formData0).subscribe((res0) => {
                        // console.log(res0.item.flds)
                        const customer_fields = res0.item.flds;
                        Object.keys(customer_fields).forEach((key1) => {
                            let fld_val = customer_fields[key1].v;
                            let fld_name = customer_fields[key1].n;
                            // console.log( fld_name, this.api_fld_acc, fld_val)
                            switch (fld_name) {
                                case this.api_fld_acc:
                                    this.account_name = fld_val;
                                    break;
                                case this.api_fld_com:
                                    this.company_name = fld_val;
                                    break;
                                case this.api_fld_ins:
                                    this.inspecter_name = fld_val;
                                    break;
                                case this.api_fld_site:
                                    this.site_name = fld_val;
                                    break;
                            }
                        });
                        this.doProcessData(res_);
                    });
                });
            }
        });
    }
    doProcessData(res) {
        let sessionID = this.sessionID;
        res.forEach((item) => {
            let doc1 = { account_name: '', company_name: '', inspecter_name: '', site_name: '', driver_name: '', driver_date: '', driver_time: '', driver_description: '', driver_description_image: '' };
            let dt = item.c[0];
            dt = dt.split(" ");
            doc1.driver_name = item.c[1];
            doc1.driver_date = dt[0];
            doc1.driver_time = dt[1];
            doc1.driver_card = this.drivers_data[doc1.driver_name];
            doc1.driver_description = item.c[3];
            doc1.driver_description_image = this.description_data[item.c[3]];
            doc1.account_name = this.account_name;
            doc1.company_name = this.company_name;
            doc1.inspecter_name = this.inspecter_name;
            doc1.site_name = this.site_name;
            this.docs.push(doc1);
            //  console.log(doc1)
            this.totalRecords = this.docs.length;
        });
    }
    openModal(e, modalTitle, modalText) {
        e.preventDefault();
        this.modalService.setRootViewContainerRef(this.viewContainerRef);
        this.modalService.addDynamicComponent(modalTitle, modalText);
    }
}
InfringementComponent.ɵfac = function InfringementComponent_Factory(t) { return new (t || InfringementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
InfringementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfringementComponent, selectors: [["app-infringement"]], decls: 15, vars: 3, consts: [[1, "mainDiv"], [1, "my_table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "cursorname", 3, "click"], ["colspan", "4"]], template: function InfringementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DRIVER NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "DATE OF THE INFRINGEMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "TIME OF THE INFRINGEMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SHORT DESCRIPTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InfringementComponent_tr_12_Template, 9, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InfringementComponent_tr_13_Template, 3, 0, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InfringementComponent_tr_14_Template, 3, 0, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.docs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalRecords == -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalRecords == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".mainDiv[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  background: #d9eaf4;\n  color: #fff;\n  font-weight: 500;\n  font-size: 13px;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  color: #000;\n}\n\ntd[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #efefef;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background: #d1d1d1;\n}\n\n.cursorname[_ngcontent-%COMP%] {\n  cursor: pointer;\n  max-width: 200px;\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbmZyaW5nZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVHO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0FBQUo7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoiaW5mcmluZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5EaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAgdGgge1xuICAgIGJhY2tncm91bmQ6ICNkOWVhZjQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgXG4gIHRoLCB0ZCB7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgY29sb3I6ICMwMDA7XG5cbiAgfVxuICB0ZHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICB9XG4gIFxuICB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2QxZDFkMTtcbiAgfVxuICAuY3Vyc29ybmFtZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICB9Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











const _c0 = function () { return ["nav-active"]; };
let AppComponent = class AppComponent {
    constructor(observer, router) {
        this.observer = observer;
        this.router = router;
        this.mode = true;
    }
    ngAfterViewInit() {
        this.observer
            .observe(['(max-width: 100px)'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this))
            .subscribe((res) => {
            if (res.matches) {
                this.sidenav.mode = 'over';
                this.sidenav.close();
                console.log('over');
            }
            else {
                this.sidenav.mode = 'side';
                this.sidenav.open();
                console.log('side');
            }
        });
        this.router.events
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]))
            .subscribe(() => {
            if (this.sidenav.mode === 'over') {
                this.sidenav.close();
            }
        });
    }
    changeMode() {
        this.mode = !this.mode;
    }
};
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 35, vars: 9, consts: [[1, "mat-elevation-z8"], [3, "ngClass"], [1, "row"], [1, "col-md-1", "col-sm-2", "col-2", "text-center"], [1, "fa", "fa-bars", "menu-icon", 3, "click"], [1, "col-md-3", "col-sm-6", "col-6"], ["alt", "Logo", "src", "../assets/logo-top.png", 1, "logo"], [1, "offset-md-7", "col-md-1", "col-sm-1", "col-1", "offset-sm-0"], [1, "dropdown"], ["onclick", "myFunction()", "src", "../assets/novo.svg", "alt", "", 1, "dropbtn"], ["id", "myDropdown", 1, "dropdown-content"], ["routerLink", "/customer", 3, "routerLinkActive"], [1, "fa", "fa-book"], ["id", "left-tb-1"], [1, "mat-elevation-z8", "side-menu"], ["sidenav", "matSidenav"], ["src", "../assets/techo-new.png", 1, "side-logo"], [1, "custom-side"], ["routerLink", "/monthly", 3, "routerLinkActive"], [1, "fa", "fa-credit-card"], ["routerLink", "/infringement", 3, "routerLinkActive"], [1, "fa", "fa-envelope"], ["routerLink", "/unit", 3, "routerLinkActive"], [1, "fa", "fa-download"], [1, "content", "mat-elevation-z8"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17); _r0.toggle(); return ctx.changeMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Customer Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-sidenav-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-sidenav", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Driver Card Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Driver Infringement Letter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Techograph data Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.mode ? "container" : "container-fluid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c0));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  \n  height: 70px;\n  border-bottom: 1px solid #b3afaf36;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n  border-right: none;\n  background: #ffffff;\n  \n  text-align: center;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 65px);\n}\n\n.menu-button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 1rem;\n}\n\n.menu-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\n.name[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-weight: normal;\n}\n\n.designation[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 0.7rem;\n  color: lightgrey;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\nheader[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n}\n\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 181px;\n  display: block;\n}\n\nheader[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  cursor: pointer;\n  width: 42px;\n}\n\n.side-menu[_ngcontent-%COMP%]   .side-logo[_ngcontent-%COMP%] {\n  width: 177px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.custom-side[_ngcontent-%COMP%] {\n  padding: 0;\n  text-align: left;\n  margin: 0;\n}\n\n.custom-side[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  border-top: 1px solid #a1a1a13d;\n}\n\n.custom-side[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #9a9a9a;\n  display: block;\n  padding: 13px 10px;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.custom-side[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: white;\n  color: #002b5c;\n  transition: 0.5s;\n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  color: #9f9f9f;\n  font-size: 29px;\n  margin-top: 3px;\n  cursor: pointer;\n}\n\n.dropbtn[_ngcontent-%COMP%] {\n  \n  \n  \n  \n  border: none;\n  cursor: pointer;\n  width: 32px;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  left: -120px;\n  top: 53px;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #7d7d7d;\n  padding: 6px 16px;\n  text-decoration: none;\n  display: block;\n  font-size: 15px;\n}\n\n.dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #00bbf9;\n  color: white;\n}\n\n.show[_ngcontent-%COMP%] {\n  display: block;\n  display: block;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBYUE7RUFDRSwwQkFBQTtBQVZGOztBQWFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQVZGOztBQVlFO0VBQ0UsaUJBQUE7QUFWSjs7QUFjQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBWEY7O0FBY0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVhGOztBQWNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FBWEY7O0FBYUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQVZGOztBQVdFO0VBQ0UsWUFBQTtFQUVBLGNBQUE7QUFWSjs7QUFZRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFWSjs7QUFjRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWEo7O0FBY0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBWEY7O0FBWUU7RUFDRSxxQkFBQTtFQUNBLCtCQUFBO0FBVko7O0FBV0k7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBVE47O0FBVU07RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBUlI7O0FBYUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBVkY7O0FBbUJBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFoQko7O0FBdUJBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBcEJGOztBQXdCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFyQkY7O0FBd0JBO0VBQW1CLHlCQUFBO0VBQ2pCLFlBQUE7QUFwQkY7O0FBdUJBO0VBQU8sY0FBQTtFQUVMLGNBQUE7RUFDQSxhQUFBO0FBcEJGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLyogcGFkZGluZzogMTFweCAwcHg7ICovXG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiM2FmYWYzNjtcbn1cblxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgLy8gaGVpZ2h0OiBjYWxjKDgzdmggLSAxcHgpO1xuICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvLyBtYXJnaW46IDE2cHg7XG4gIC8vIG1hcmdpbi1sZWZ0OiAzMnB4O1xuXG4gIC8vIHBhZGRpbmc6IDE2cHg7XG5cbiAgLy8gb3ZlcmZsb3c6IGF1dG87XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY1cHgpO1xufVxuXG4ubWVudS1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmb250LXNpemU6IDFyZW07XG5cbiAgbWF0LWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG59XG5cbi5hdmF0YXIge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm5hbWUge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5kZXNpZ25hdGlvbiB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGNvbG9yOiBsaWdodGdyZXk7XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC5sb2dvIHtcbiAgICB3aWR0aDogMTgxcHg7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm1lbnUtYnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiA0MnB4O1xuICB9XG59XG4uc2lkZS1tZW51IHtcbiAgLnNpZGUtbG9nbyB7XG4gICAgd2lkdGg6IDE3N3B4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxufVxuLmN1c3RvbS1zaWRlIHtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwO1xuICBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYTFhMWExM2Q7XG4gICAgYSB7XG4gICAgICBjb2xvcjogIzlhOWE5YTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogMTNweCAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzAwMmI1YztcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5tZW51LWljb24ge1xuICBjb2xvcjogIzlmOWY5ZjtcbiAgZm9udC1zaXplOiAyOXB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5cblxuXG5cbi8vIGRyb3Bkb3duICBcbi5kcm9wYnRuIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OERCOyAqL1xuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbiAgICAvKiBwYWRkaW5nOiAxNnB4OyAqL1xuICAgIC8qIGZvbnQtc2l6ZTogMTZweDsgKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAzMnB4O1xufVxuXG4uZHJvcGJ0bjpob3ZlciwgLmRyb3BidG46Zm9jdXMge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MEI5O1xufVxuXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYigwIDAgMCAvIDIwJSk7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IC0xMjBweDtcbiAgdG9wOiA1M3B4O1xuICAvLyBwYWRkaW5nOiAyMHB4IDBweDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiAjN2Q3ZDdkO1xuICBwYWRkaW5nOiA2cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uZHJvcGRvd24gYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogIzAwYmJmOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2hvdyB7ZGlzcGxheTogYmxvY2s7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIHotaW5kZXg6IDk5OTk7XG59Il19 */"] });
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["UntilDestroy"])()
], AppComponent);



/***/ }),

/***/ "XwkG":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ModalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_div_2_Template_i_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.close($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Patente di guida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Patente professionale");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Scadenza carta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Ruolo nell'azienda");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Card Expiry");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Date of employment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Creation Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](66, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalText.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalText.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalText.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalText.Patentediguida);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalText.Patenteprofessionale);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalText.Scadenzacarta);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalText.Ruolonellazienda);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalText.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalText.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.modalText.cardExpiry);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 12, ctx_r0.modalText.dateofemp));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](66, 14, ctx_r0.modalText.joindate));
} }
function ModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_div_3_Template_i_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.close($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "INFRINGEMENT AND SANCTIONS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_div_3_Template_i_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.print($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Account name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Company name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Inspecter name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Site");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Driver name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Card number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Date of the Infringement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Time of the Infringement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.modalText.account_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.modalText.company_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.modalText.inspecter_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.modalText.site_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.modalText.driver_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.modalText.driver_card);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.modalText.driver_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.modalText.driver_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.modalText.driver_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r1.modalText.driver_description_image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class ModalComponent {
    constructor() {
        this.modalTitle = '';
        this.modalText = '';
        this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    close(event) {
        this.closeModal.emit(event);
    }
    print(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const img = document.getElementById('source-image');
            yield fetch(img.src)
                .then(res => res.blob())
                .then(blob => {
                const file = new File([blob], 'source.png', blob);
                var reader = new FileReader();
                reader.onloadend = function () {
                    const pimg = document.getElementById("print-image");
                    pimg.src = reader.result;
                    console.log(pimg);
                };
                reader.readAsDataURL(file);
            });
            setTimeout(function () {
                var printContent = document.getElementById('print-view');
                var WinPrint = window.open('', '', 'width=900,height=650');
                WinPrint.document.write(printContent === null || printContent === void 0 ? void 0 : printContent.innerHTML);
                WinPrint.document.close();
                WinPrint.focus();
                WinPrint.print();
                WinPrint.close();
            }, 1000);
        });
    }
    encodeImageFileAsURL() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { modalTitle: "modalTitle", modalText: "modalText" }, outputs: { closeModal: "closeModal" }, decls: 59, vars: 11, consts: [[1, "modal"], [1, "modal-overlay", 3, "click"], ["class", "modal--modal-content", 4, "ngIf"], ["class", "modal--modal-content-inf", 4, "ngIf"], ["id", "print-view", 1, "modal--modal-content-inf", "d-noe"], [1, "fa", "fa-times", "cross-icon", 3, "click"], [1, "in-h3", 2, "color", "#00bbf9", "font-family", "arial"], [1, "fa", "fa-print", "print-btn", 3, "click"], [2, "text-align", "center", "padding", "10px", "font-family", "arial"], [2, "text-align", "center", "border-bottom", "1px solid grey", "padding", "10px", "font-family", "arial"], [2, "text-align", "center", "padding", "10px", "font-family", "arial", "border-bottom", "1px solid grey"], [1, "tbl-content", 2, "overflow-x", "auto !important", "margin-top", "0px !important", "border", "1px solid rgba(255,255,255,0.3) !important"], ["cellpadding", "0", "cellspacing", "0", "border", "0", 1, "infringement", 2, "vertical-align", "middle !important", "text-align", "center !important", "font-weight", "500 !important", "font-size", "13px !important", "width", "100% !important", "table-layout", "fixed !important", "color", "#fff !important"], ["colspan", "4", 2, "padding", "15px !important", "border-bottom", "solid 1px rgba(255,255,255,0.1) !important"], ["src", "", "alt", "", "id", "print-image", "width", "500px"], [1, "modal--modal-content"], [2, "color", "#00bbf9"], [1, "row", "driver-row"], [1, "col-md-4", "col-sm-6", "col-6"], [1, "col-md-4", "col-sm-6", "col-6", 2, "border", "0"], [1, "modal--modal-content-inf"], [1, "in-h3", 2, "color", "#00bbf9"], [1, "col-md-4", "col-sm-6", "col-6", "print-col"], [1, "col-md-4", "col-sm-12", "col-12"], ["id", "modal-inf"], ["width", "500px", "id", "source-image", 3, "src"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_Template_div_click_1_listener($event) { return ctx.close($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalComponent_div_2_Template, 67, 16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModalComponent_div_3_Template, 58, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_Template_i_click_5_listener($event) { return ctx.close($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "INFRINGEMENT AND SANCTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponent_Template_i_click_8_listener($event) { return ctx.print($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Account name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Company name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Inspecter name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Site ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Driver name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Card number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Date of the Infringement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Time of the Infringement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalTitle != "Infringement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalTitle == "Infringement");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.modalText.account_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.modalText.company_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.modalText.inspecter_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.modalText.site_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.modalText.driver_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.modalText.driver_card, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.modalText.driver_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.modalText.driver_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.modalText.driver_description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 30px;\n}\n\n.modal-overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.6);\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal--modal-content[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px 0 rgba(38, 41, 58, 0.06);\n  width: 100%;\n  max-width: 600px;\n  padding: 15px;\n  background: white;\n  position: relative;\n  border-radius: 6px;\n}\n\n.modal--modal-content-inf[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px 0 rgba(38, 41, 58, 0.06);\n  width: 100%;\n  max-width: 800px;\n  max-height: 550px;\n  padding: 15px;\n  background: white;\n  position: relative;\n  overflow: auto;\n}\n\n.modal--close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -4px;\n  font-size: 18px;\n  color: #d74840;\n  background-color: #ebe084;\n  padding: 8px 10px;\n  border-radius: 30px;\n}\n\n.modal--close-btn1[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  font-size: 18px;\n  padding: 8px 10px;\n  border-radius: 30px;\n}\n\n.modal--close-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e0cf42;\n  cursor: pointer;\n}\n\n.modal--close-btn1[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n}\n\n.tbl-header[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n  margin-top: 1.5%;\n}\n\n.tbl-content[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-top: 0px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\nth[_ngcontent-%COMP%] {\n  padding: 20px 15px;\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #000;\n  text-transform: uppercase;\n  border-bottom: solid 1px rgba(255, 255, 255, 0.1);\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: left;\n  vertical-align: middle;\n  font-weight: 500;\n  font-size: 13px;\n  color: #000;\n  border-bottom: solid 1px rgba(255, 255, 255, 0.1);\n  text-align: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  color: #fff;\n  padding: 14px 0px;\n}\n\n.infringement[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #414141;\n}\n\n.print[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  background-image: url('print-button.png');\n  background-size: cover;\n  margin-right: 6%;\n}\n\n#modal-tb-inf[_ngcontent-%COMP%] {\n  margin-top: 10%;\n}\n\n@media print {\n  table[_ngcontent-%COMP%] {\n    width: 100% !important;\n    table-layout: fixed !important;\n    -webkit-print-color-adjust: exact;\n  }\n\n  .tbl-header[_ngcontent-%COMP%] {\n    background-color: rgba(255, 255, 255, 0.3) !important;\n    margin-top: 1.5% !important;\n    -webkit-print-color-adjust: exact;\n  }\n\n  .tbl-content[_ngcontent-%COMP%] {\n    overflow-x: auto !important;\n    margin-top: 0px !important;\n    border: 1px solid rgba(255, 255, 255, 0.3) !important;\n    -webkit-print-color-adjust: exact;\n  }\n\n  th[_ngcontent-%COMP%] {\n    padding: 20px 15px !important;\n    text-align: left !important;\n    font-weight: 500 !important;\n    font-size: 12px !important;\n    color: #000 !important;\n    text-transform: uppercase !important;\n    border-bottom: solid 1px rgba(255, 255, 255, 0.1) !important;\n    -webkit-print-color-adjust: exact;\n  }\n\n  td[_ngcontent-%COMP%] {\n    padding: 15px !important;\n    text-align: left !important;\n    vertical-align: middle !important;\n    font-weight: 500 !important;\n    font-size: 13px !important;\n    color: #000 !important;\n    border-bottom: solid 1px rgba(255, 255, 255, 0.1) !important;\n    text-align: center !important;\n    -webkit-print-color-adjust: exact;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    text-align: center !important;\n    font-size: 20px !important;\n    color: #fff !important;\n    background-color: #00beee !important;\n    padding: 14px 0px !important;\n    -webkit-print-color-adjust: exact;\n  }\n\n  .infringement[_ngcontent-%COMP%] {\n    background-color: #00beee !important;\n    -webkit-print-color-adjust: exact;\n  }\n  .infringement[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    color: #fff !important;\n    -webkit-print-color-adjust: exact;\n  }\n}\n\n.driver-row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\n  border-bottom: 1px solid grey;\n  border-radius: 0;\n  border-right: 0;\n  border-left: 0;\n  text-align: center;\n  padding: 11px 0px;\n}\n\n.driver-row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  margin: 0;\n  font-size: 13px;\n}\n\n.driver-row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.driver-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  border-bottom: 1px solid grey;\n  border-radius: 0;\n  border-right: 0;\n  border-left: 0;\n  text-align: center;\n  padding: 11px 0px;\n}\n\n.driver-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  margin: 0;\n  font-size: 13px;\n}\n\n.driver-row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.driver-row[_ngcontent-%COMP%]   .col-sm-12[_ngcontent-%COMP%] {\n  border-bottom: 1px solid grey;\n  border-radius: 0;\n  border-right: 0;\n  border-left: 0;\n  text-align: center;\n  padding: 11px 0px;\n}\n\n.driver-row[_ngcontent-%COMP%]   .col-sm-12[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  margin: 0;\n  font-size: 13px;\n}\n\n.driver-row[_ngcontent-%COMP%]   .col-sm-12[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.cross-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 17px;\n  top: 10px;\n  background: #00bbf9;\n  padding: 3px;\n  color: white;\n  border-radius: 6px;\n  height: 23px;\n  width: 23px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.print-btn[_ngcontent-%COMP%] {\n  color: white;\n  background: #00bbf9;\n  height: 23px;\n  width: 23px;\n  text-align: center;\n  padding-top: 3px;\n  border-radius: 5px;\n  position: absolute;\n  right: 50px;\n  top: 10px;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 991px) {\n  .in-h3[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n\n.d-noe[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFHQSxpQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsMENBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpREFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0FBS0Y7O0FBRkU7RUFDRSxjQUFBO0FBS0o7O0FBREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtBQUtGOztBQUhBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLDhCQUFBO0lBQ0EsaUNBQUE7RUFNRjs7RUFKQTtJQUNFLHFEQUFBO0lBQ0EsMkJBQUE7SUFDQSxpQ0FBQTtFQU9GOztFQUxBO0lBQ0UsMkJBQUE7SUFDQSwwQkFBQTtJQUNBLHFEQUFBO0lBQ0EsaUNBQUE7RUFRRjs7RUFOQTtJQUNFLDZCQUFBO0lBQ0EsMkJBQUE7SUFDQSwyQkFBQTtJQUNBLDBCQUFBO0lBQ0Esc0JBQUE7SUFDQSxvQ0FBQTtJQUNBLDREQUFBO0lBQ0EsaUNBQUE7RUFTRjs7RUFQQTtJQUNFLHdCQUFBO0lBQ0EsMkJBQUE7SUFDQSxpQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsMEJBQUE7SUFDQSxzQkFBQTtJQUNBLDREQUFBO0lBQ0EsNkJBQUE7SUFDQSxpQ0FBQTtFQVVGOztFQVJBO0lBQ0UsNkJBQUE7SUFDQSwwQkFBQTtJQUNBLHNCQUFBO0lBQ0Esb0NBQUE7SUFDQSw0QkFBQTtJQUNBLGlDQUFBO0VBV0Y7O0VBVEE7SUFLRSxvQ0FBQTtJQUNBLGlDQUFBO0VBUUY7RUFiRTtJQUNFLHNCQUFBO0lBQ0EsaUNBQUE7RUFlSjtBQUNGOztBQVJFO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVVKOztBQVRJO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBV047O0FBVEk7RUFDRSxnQkFBQTtBQVdOOztBQVJJO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVVOOztBQVRNO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBV1I7O0FBVE07RUFDRSxnQkFBQTtBQVdSOztBQVBNO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVNSOztBQVJRO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBVVY7O0FBUlE7RUFDRSxnQkFBQTtBQVVWOztBQU5BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBVUY7O0FBUkE7RUFDRTtJQUNFLGVBQUE7RUFXRjtBQUNGOztBQVRBO0VBQ0UsYUFBQTtBQVdGIiwiZmlsZSI6Im1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4ubW9kYWwtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5tb2RhbC0tbW9kYWwtY29udGVudCB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYigzOCA0MSA1OCAvIDYlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5tb2RhbC0tbW9kYWwtY29udGVudC1pbmYge1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDM4LCA0MSwgNTgsIDAuMDYpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWF4LWhlaWdodDogNTUwcHg7XG5cbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tb2RhbC0tY2xvc2UtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIHJpZ2h0OiAtNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZDc0ODQwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlMDg0O1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbi5tb2RhbC0tY2xvc2UtYnRuMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgLy8gY29sb3I6ICNkNzQ4NDA7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNlYmUwODQ7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4ubW9kYWwtLWNsb3NlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjZWJlMDg0LCAxNSUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubW9kYWwtLWNsb3NlLWJ0bjE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4udGJsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgbWFyZ2luLXRvcDogMS41JTtcbn1cbi50YmwtY29udGVudCB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxudGgge1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG50ZCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwYmVlZTtcbiAgcGFkZGluZzogMTRweCAwcHg7XG59XG4uaW5mcmluZ2VtZW50IHtcbiAgdGQge1xuICAgIGNvbG9yOiAjNDE0MTQxO1xuICB9XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMGJlZWU7XG59XG4ucHJpbnQge1xuICB3aWR0aDogMjFweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvcHJpbnQtYnV0dG9uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luLXJpZ2h0OiA2JTtcbn1cbiNtb2RhbC10Yi1pbmYge1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5AbWVkaWEgcHJpbnQge1xuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICB9XG4gIC50YmwtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxLjUlICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICB9XG4gIC50YmwtY29udGVudCB7XG4gICAgb3ZlcmZsb3cteDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcbiAgfVxuICB0aCB7XG4gICAgcGFkZGluZzogMjBweCAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICB9XG4gIHRkIHtcbiAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICB9XG4gIC50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiZWVlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTRweCAwcHggIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XG4gIH1cbiAgLmluZnJpbmdlbWVudCB7XG4gICAgdGQge1xuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcbiAgICB9XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmVlZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0OiBleGFjdDtcbiAgfVxufVxuXG4uZHJpdmVyLXJvdyB7XG4gIC5jb2wtbWQtNCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDExcHggMHB4O1xuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICBoNntcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4gICAgfVxuICAgIC5jb2wtMTIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMXB4IDBweDtcbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgICAgaDZ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgICAgIH1cblxuICAgICAgLmNvbC1zbS0xMiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDExcHggMHB4O1xuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuICAgICAgICBoNntcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgICAgICAgfVxuICB9XG4uY3Jvc3MtaWNvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTdweDtcbiAgdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDBiYmY5O1xuICBwYWRkaW5nOiAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIHdpZHRoOiAyM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcmludC1idG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwYmJmOTtcbiAgaGVpZ2h0OiAyM3B4O1xuICB3aWR0aDogMjNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDUwcHg7XG4gIHRvcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogOTkxcHgpIHtcbiAgLmluLWgze1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuLmQtbm9le1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"] });


/***/ }),

/***/ "Y5Lh":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modal/modal.service */ "saQ5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auto_focus_directive_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auto-focus-directive.directive */ "0HhE");






function ProfileComponent_div_3_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", techo_r5.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", techo_r5.month, " - ", techo_r5.year, " ");
} }
function ProfileComponent_div_3_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](techo_r6);
} }
function ProfileComponent_div_3_tr_11_td_3_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_3_tr_11_td_3_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const techo1_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.downloadFile(techo1_r9.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_3_tr_11_td_3_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
} }
function ProfileComponent_div_3_tr_11_td_3_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
} }
function ProfileComponent_div_3_tr_11_td_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 21);
} }
function ProfileComponent_div_3_tr_11_td_3_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} }
function ProfileComponent_div_3_tr_11_td_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
} }
function ProfileComponent_div_3_tr_11_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_3_tr_11_td_3_img_1_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_3_tr_11_td_3_img_2_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_3_tr_11_td_3_img_3_Template, 1, 0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_div_3_tr_11_td_3_div_4_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_div_3_tr_11_td_3_img_5_Template, 1, 0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_div_3_tr_11_td_3_div_6_Template, 1, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo1_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo1_r9.colorcode == "green");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo1_r9.colorcode == "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo1_r9.colorcode == "gray");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo1_r9.colorcode == "blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo1_r9.colorcode == "yellow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", techo1_r9.colorcode == "nocolor");
} }
function ProfileComponent_div_3_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_3_tr_11_Template_td_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const techo_r7 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.openModal($event, "Hello Modal", techo_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_3_tr_11_td_3_Template, 7, 6, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techo_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](techo_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", techo_r7.data);
} }
function ProfileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_div_3_th_5_Template, 2, 3, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Driver Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_div_3_th_9_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileComponent_div_3_tr_11_Template, 6, 2, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cellSpacing", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.header1Rev);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.headerRev);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.techoGraphData);
} }
class ProfileComponent {
    constructor(http, sanitizer, modalService, viewContainerRef, elementRef) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
        this.monthss = [];
        this.header = [];
        this.headerRev = [];
        this.header1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.header1Rev = [];
        this.techoGraphData = [];
        this.techoGraphDataRev = [];
        this.itemID = 1;
        this.sessionID = '';
        this.showyellow = true;
        this.showPage = false;
        this.elementRef.nativeElement.focus();
        const queryParams = window.location.search;
        const searchParams = new URLSearchParams(queryParams);
        let sid = searchParams.get('sid');
        let user = searchParams.get('user');
        if (!sid) {
            sid = searchParams.get('?sid');
            sid = searchParams.get('user');
        }
        if (!sid) {
            sid = sessionStorage.getItem('sid');
        }
        if (typeof (Storage) !== 'undefined') {
            // Store
            sessionStorage.setItem('sid', sid);
            sessionStorage.setItem('user', user);
        }
        this.sessionID = sid ? sid : sessionStorage.getItem('sid');
    }
    ngOnInit() {
        var d = new Date();
        if (d.getDate() > 20) {
            this.showyellow = false;
        }
        let sessionID = this.sessionID;
        this.http.get('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=core/search_items&params={"spec":{"itemsType":"avl_resource","propName":"","propValueMask":"","sortType":""},"force":1,"flags":8465,"from":0,"to":0}&sid=' + sessionID).subscribe((res) => {
            this.itemID = res.items[0].id;
            this.http.get('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=file/list&sid=' + sessionID + '&params={"itemId":' + res.items[0].id + ',"storageType":2,"path":"/tachograph","mask":"*","recursive":false,"fullPath":false}').subscribe((res1) => {
                let drvrs = [];
                res.items.forEach((element) => {
                    drvrs.push(element.drvrs);
                });
                // console.log('drvrs')
                this.doProcessData(drvrs, res1);
            });
        });
    }
    doProcessData(drvrs, fileDetails) {
        let sessionID = this.sessionID;
        var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        /***
         *
         * Start Populate drivers data
         *
         * ***/
        //console.log(drvrs.length)
        drvrs.forEach((element1) => {
            let drvrsDetails = Object.keys(element1).map(function (key) {
                return element1[key];
            });
            drvrsDetails.forEach(element => {
                // if (String(element.c).length < 14 && element.c) {
                //   for (let index = 0; index < 14 - String(element.c).length; index++) {
                //   }
                // }
                this.techoGraphData.push({
                    name: element.n, id: element.c, data: {}, datejoin: element.ct, joindate: new Date(element.ct * 1000), phone: element.p, desc: element.ds, cardExpiry: element.jp && element.jp['Scadenza Tessera Autista'] ? element.jp['Scadenza Tessera Autista'] : '',
                    dateofemp: element.jp && element.jp['Date of employment'] ? element.jp['Date of employment'] : '',
                    email: element.jp && element.jp['E-mail'] ? element.jp['E-mail'] : '',
                    Patentediguida: element.jp && element.jp['Patente di guida'] ? element.jp['Patente di guida'] : '',
                    Patenteprofessionale: element.jp && element.jp['Patente professionale'] ? element.jp['Patente professionale'] : '',
                    Scadenzacarta: element.jp && element.jp['Scadenza carta'] ? element.jp['Scadenza carta'] : '',
                    Ruolonellazienda: element.jp && element.jp['Ruolo nellazienda'] ? element.jp['Ruolo nellazienda'] : ''
                });
            });
        });
        this.techoGraphData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        /***
         *
         * Start Populate drivers details data
         *
         * ***/
        var driver_hash = new Map();
        var driver_data = {};
        /***  create driver data hash */
        this.techoGraphData.forEach((techoGraph, index) => {
            driver_hash.set(techoGraph.id, techoGraph.name);
        });
        /***  create driver data hash */
        let Date1 = new Date();
        let dateTime = Math.round(Date1.getTime() / 1000);
        let maxdrive = 9991618497441434;
        fileDetails.forEach((data) => {
            //let driver_id = String(data.n).split("_")[0] as string;
            let driver_id = '';
            let is_driver_id = false;
            let inc = 0;
            for (let [key2, value1] of driver_hash) {
                let tmp_did = String(data.n);
                let did_len = key2.length;
                let tmp_driver_id = tmp_did.substring(0, did_len);
                if (tmp_driver_id == key2 && tmp_driver_id != '') {
                    driver_id = tmp_driver_id;
                    is_driver_id = true;
                    //break;
                }
                inc++;
                // console.log('key2',key2,'length',did_len, data.n,'tmp_dd',driver_id) 
            }
            //console.log(inc)
            //if (driver_hash.has(driver_id)) {
            if (is_driver_id == true) {
                if (driver_id in driver_data == false)
                    driver_data[driver_id] = new Array();
                let data1 = { month: "", date: Date1.getDate(), filepresent: false, name: '', dates: '', ct: '', mt: '', colorcode: 'gray' };
                data1.name = data.n;
                data1.mt = data.mt;
                data1.ct = data.ct;
                driver_data[driver_id].push(data1);
            }
            else {
                // console.log('new driverid',data.n)
            }
        }); //end driver_data loop
        for (let [key1, value1] of driver_hash) {
            if (key1 in driver_data == false) {
                //  let data1 = { month:"",date: Date1.getDate(),  filepresent: false, name: '', dates: '',ct:'', mt: '', colorcode: dateTime > driver_hash.get(key1) ? 'gray' : 'red' }
                let data1 = { month: "", date: Date1.getDate(), filepresent: false, name: '', dates: '', ct: '', mt: '', colorcode: 'gray' };
                driver_data[key1] = new Array();
                driver_data[key1].push(data1);
            }
        }
        for (let val in driver_data) {
            let dd = driver_data[val];
            // let dd1= [...driver_data[val]]
            dd.sort((a, b) => {
                return a.mt - b.mt;
            });
        }
        // console.log(driver_data)
        for (let did in driver_data) {
            for (let val in driver_data[did]) {
                let dobj = driver_data[did][val];
                var d = new Date(dobj.mt * 1000);
                // console.log(dobj.name,d.getDate(),d.getMonth(),d.getFullYear()) 
            }
        }
        /***
         *
         * End Populate drivers details data
         *
         * ***/
        this.techoGraphData.forEach((techoGraph, index) => {
            let maxdrive = 9991618497441434;
            let driverData1 = [];
            this.header = [];
            let cM = -1;
            let inde = 0;
            this.header1 = [{ count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }, { count: 0, month: '', year: '' }];
            for (let index = 0; index <= 365; index++) {
                let oldDate = new Date();
                let newdate = new Date(oldDate);
                newdate.setDate(oldDate.getDate() - index);
                let dateTime = Math.round(newdate.getTime() / 1000);
                let data1 = { month: monthName[newdate.getMonth()], date: newdate.getDate(), filepresent: false, name: '', ct: '', mt: '', dates: '', colorcode: 'gray' };
                this.header.push(newdate.getDate());
                if (cM == -1 || cM != newdate.getMonth()) {
                    if (cM >= 0) {
                        inde++;
                    }
                    this.header1[inde].count = this.header1[inde].count + 1;
                    this.header1[inde].month = monthName[newdate.getMonth()];
                    this.header1[inde].year = newdate.getFullYear();
                    cM = newdate.getMonth();
                }
                else {
                    this.header1[inde].count = this.header1[inde].count + 1;
                }
                for (let key in driver_data[techoGraph.id]) {
                    let dobj = driver_data[techoGraph.id][key];
                    var d = new Date(dobj.mt * 1000);
                    let cmonth = newdate.getMonth();
                    if (d.getMonth() == cmonth && d.getDate() == newdate.getDate() && d.getFullYear() == newdate.getFullYear()) {
                        data1.filepresent = true;
                        data1.colorcode = 'green';
                        data1.name = dobj.name;
                        let d1 = new Date(dobj.mt * 1000);
                        data1.dates = String(d1.getDate()) + ' ' + String(d1.getMonth());
                        data1.filepresent = true;
                        data1.colorcode = 'green';
                        if (dobj.ct < maxdrive) {
                            maxdrive = dobj.ct;
                        }
                    }
                }
                driverData1.push(data1);
            } //end 365 days loop
            driverData1.reverse();
            let setCode = 0;
            let Datecount = 0;
            driverData1.forEach((element, pos) => {
                if (maxdrive != 9991618497441434) {
                    if (element.colorcode == 'green') {
                        Datecount = 0;
                        setCode = 1;
                    }
                    if (setCode && element.colorcode != 'green') {
                        Datecount++;
                        driverData1[pos].colorcode = 'red';
                        if (Datecount > 14 && Datecount <= 27) {
                            driverData1[pos].colorcode = 'yellow';
                        }
                        if (Datecount <= 14) {
                            driverData1[pos].colorcode = 'nocolor';
                        }
                    }
                }
                else {
                    if (element.colorcode == 'blue') {
                        Datecount = 0;
                        setCode = 1;
                    }
                    if (setCode) {
                        Datecount++;
                        if (Datecount > 14 && Datecount <= 27) {
                            driverData1[pos].colorcode = 'yellow';
                        }
                        if (Datecount <= 14) {
                            driverData1[pos].colorcode = 'nocolor';
                        }
                    }
                }
            });
            this.techoGraphData[index].data = driverData1;
            // console.log('driverData1',driverData1)
        }); //end driver loop
        /***
         *
         * End Populate drivers data
         *
         * ***/
        // console.log('techoGraphData',this.techoGraphData)
        this.showPage = true;
        for (let i = this.header1.length - 1; i >= 0; i--) {
            this.header1Rev.push(this.header1[i]);
        }
        //console.log('header1', this.header1)
        for (let j = this.header.length - 1; j >= 0; j--) {
            this.headerRev.push(this.header[j]);
        }
        // console.log('header', this.header)
    }
    downloadFile(fileName) {
        let sessionID = this.sessionID;
        window.open('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=file/get&sid=' + sessionID + '&params={"itemId":' + this.itemID + ',"storageType":2,"path":"/tachograph/' + fileName + '","format":"1"}');
    }
    openModal(e, modalTitle, modalText) {
        e.preventDefault();
        this.modalService.setRootViewContainerRef(this.viewContainerRef);
        this.modalService.addDynamicComponent(modalTitle, modalText);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modal_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 4, vars: 1, consts: [["role", "main", 1, ""], ["type", "hidden"], ["selection", ""], [4, "ngIf"], [3, "cellSpacing"], ["style", "text-align:center", 4, "ngFor", "ngForOf"], [1, "fixed", 2, "z-index", "99"], [4, "ngFor", "ngForOf"], [2, "text-align", "center"], [1, "cursorname", "fixed", 3, "click"], [2, "width", "0 !important", "padding", "0", "opacity", "0"], ["appAutoFocusDirective", "", "type", "text", 1, "focus"], ["src", "../../../assets/green_2.svg", "alt", "", "width", "20", 3, "click", 4, "ngIf"], ["src", "../../../assets/red_1.svg", "alt", "", "width", "20", 4, "ngIf"], ["src", "../../../assets/grey_2.svg", "alt", "", "width", "20", 4, "ngIf"], ["class", "circle blue", 4, "ngIf"], ["src", "../../../assets/yellow_2.svg", "alt", "", "width", "20", 4, "ngIf"], ["class", "circle orange", 4, "ngIf"], ["src", "../../../assets/green_2.svg", "alt", "", "width", "20", 3, "click"], ["src", "../../../assets/red_1.svg", "alt", "", "width", "20"], ["src", "../../../assets/grey_2.svg", "alt", "", "width", "20"], [1, "circle", "blue"], ["src", "../../../assets/yellow_2.svg", "alt", "", "width", "20"], [1, "circle", "orange"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 12, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _auto_focus_directive_directive__WEBPACK_IMPORTED_MODULE_5__["AutoFocusDirectiveDirective"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);\n#content[_ngcontent-%COMP%] {\n  margin: 40px auto;\n  text-align: center;\n  width: 600px;\n}\n#content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 700;\n  margin: 0 0 40px 0;\n  font-size: 25px;\n  line-height: 30px;\n}\n.circle[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  line-height: 20px;\n  border-radius: 50%;\n  \n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  text-align: center;\n  color: white;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 700;\n  margin: 10px auto 10px;\n  cursor: pointer;\n}\n.red[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  background-image: url('red.png');\n  background-size: cover;\n}\n.green[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  background-image: url('green.png');\n  background-size: cover;\n}\n.gray[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  background-color: #797979;\n  background-size: cover;\n}\n.blue[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  background-size: cover;\n  background-image: url('blue.png');\n}\n.yellow[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  background-image: url('yellow.png');\n  background-size: cover;\n}\n.feedback[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #b1b1b1;\n}\n.example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\nh1.example-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 400;\n  text-align: center;\n  margin-bottom: 15px;\n}\ntable[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.tbl-header[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n}\nth[_ngcontent-%COMP%] {\n  padding: 10px 5px;\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #000;\n  text-transform: uppercase;\n}\ntd[_ngcontent-%COMP%] {\n  text-align: left;\n  vertical-align: middle;\n  color: #000;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #25c481, #25b7c4);\n  font-family: \"Roboto\", sans-serif;\n}\nsection[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.made-with-love[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  padding: 10px;\n  clear: left;\n  text-align: center;\n  font-size: 10px;\n  font-family: arial;\n  color: #000;\n}\n.made-with-love[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: #000;\n  font-size: 14px;\n  position: relative;\n  top: 2px;\n}\n.made-with-love[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none;\n}\n.made-with-love[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\np[_ngcontent-%COMP%] {\n  display: none;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  text-align: left;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #ffffff;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #d9eaf4;\n  font-size: 13px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%] {\n  background-color: #f3f1f1;\n}\ntable[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #ebebeb;\n}\ntable[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.mobile-header[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 760px) {\n  p[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: bold;\n  }\n\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%]:first-child {\n    background-color: #f3f1f1;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd)   td[_ngcontent-%COMP%]:first-child {\n    background-color: white;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even)   td[_ngcontent-%COMP%]:not(:first-child) {\n    background-color: white;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    width: 100%;\n    display: block;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child) {\n    width: 40%;\n    transition: transform 0.4s ease-out;\n    transform: translateY(-9999px);\n    position: relative;\n    z-index: -1;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child) {\n    transition: transform 0.4s ease-out;\n    transform: translateY(-9999px);\n    width: 60%;\n    position: relative;\n    z-index: -1;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    display: block;\n    cursor: pointer;\n  }\n  table[_ngcontent-%COMP%]   tr.total[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    width: 25%;\n    display: inline-block;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.total-val[_ngcontent-%COMP%] {\n    display: inline-block;\n    transform: translateY(0);\n    width: 75%;\n  }\n}\n@media only screen and (max-width: 300px) {\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child) {\n    width: 50%;\n    font-size: 14px;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child) {\n    width: 50%;\n    font-size: 14px;\n  }\n}\n.cursorname[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ndiv[_ngcontent-%COMP%] {\n  position: relative;\n}\ntable[_ngcontent-%COMP%] {\n  position: relative;\n  border-collapse: collapse;\n}\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  padding: 0.25em;\n  z-index: 6;\n}\nthead[_ngcontent-%COMP%] {\n  \n  position: sticky;\n  top: 0;\n  color: #FFF;\n  border: 2px;\n  z-index: 6;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  left: 0;\n  z-index: 10;\n}\ntbody[_ngcontent-%COMP%] {\n  \n  position: sticky;\n  left: 0;\n  background: #FFF;\n  z-index: 4;\n}\n.fixed[_ngcontent-%COMP%] {\n  \n  position: sticky;\n  left: 0;\n  background: #FFF;\n  z-index: 4;\n  max-width: 200px;\n  min-width: 200px;\n}\ntd.cursorname.fixed[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-align: left;\n}\n.content1[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlLUSwyRUFBQTtBQWpLUjtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRUY7QUFBQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdGO0FBREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFBb0IsY0FBQTtFQUNwQix1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFLRjtBQUtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0FBRko7QUFJRTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBWUEsa0NBQUE7RUFDQSxzQkFBQTtBQWJKO0FBZUU7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7QUFkSjtBQWtCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtBQWZKO0FBcUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0FBbEJKO0FBb0JBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFqQkY7QUFvQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFqQkY7QUFvQkE7RUFDRSxlQUFBO0VBQ0EsOEVBQUE7RUFDQSxVQUFBO0FBakJGO0FBb0JBO0VBQ0UsZ0JBQUE7QUFqQkY7QUFvQkE7RUFDRTswRkFBQTtFQUVBLE9BQUE7QUFqQkY7QUFvQkE7RUFDRTsrREFBQTtFQUVBLGNBQUE7QUFqQkY7QUF3QkE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBckJBO0FBdUJBO0VBRUEsbUJBQUE7QUFyQkE7QUF1QkE7RUFDQSwwQ0FBQTtBQXBCQTtBQXVCQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFwQkE7QUFzQkE7RUFFQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQXBCQTtBQXlCQSxnQkFBQTtBQUdBO0VBRUEsdURBQUE7RUFDQSxpQ0FBQTtBQXhCQTtBQTBCQTtFQUNBLFdBQUE7RUFHQSxpQ0FBQTtBQXpCQTtBQTZCQSx1QkFBQTtBQUNBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQTFCQTtBQTRCQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUF6QkE7QUEyQkE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUF4QkE7QUEwQkE7RUFDQSwwQkFBQTtBQXZCQTtBQTJCQSwyQ0FBQTtBQWdCQTtFQUNBLHNCQUFBO0FBdkNBO0FBNENBO0VBQ0EsYUFBQTtBQXpDQTtBQTRDQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUF6Q0E7QUFnREE7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7QUEvQ0Y7QUFrREE7RUFHRSxrQkFBQTtFQUNBLHlCQUFBO0FBbERGO0FBcURBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBbkRGO0FBc0RBO0VBQ0UseUJBQUE7QUFwREY7QUF3REU7RUFDRSx5QkFBQTtBQXRESjtBQXlERTtFQUVFLGdCQUFBO0FBeERKO0FBOERBO0VBQ0UsYUFBQTtBQTNERjtBQThEQTtFQUNBO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0VBM0RBOztFQW9FRTtJQUNFLHlCQUFBO0VBakVKO0VBbUVFO0lBQ0UsdUJBQUE7RUFqRUo7RUFvRUU7SUFDRSx1QkFBQTtFQWxFSjtFQXFFRTtJQUNFLFdBQUE7SUFDQSxjQUFBO0VBbkVKO0VBc0VFO0lBQ0UsVUFBQTtJQUNBLG1DQUFBO0lBQ0EsOEJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUFwRUo7RUF1RUU7SUFDRSxtQ0FBQTtJQUNBLDhCQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQXJFSjtFQXdFRTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VBdEVKO0VBeUVFO0lBQ0UsVUFBQTtJQUNBLHFCQUFBO0VBdkVKO0VBMEVFO0lBQ0UscUJBQUE7SUFDQSx3QkFBQTtJQUNBLFVBQUE7RUF4RUo7QUFDRjtBQWlGQTtFQUdJO0lBQ0UsVUFBQTtJQUNBLGVBQUE7RUFqRko7RUFvRkU7SUFDRSxVQUFBO0lBQ0EsZUFBQTtFQWxGSjtBQUNGO0FBdUZBO0VBQ0EsZUFBQTtBQXJGQTtBQTBGQTtFQUNFLGtCQUFBO0FBdkZGO0FBMEZBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQXZGRjtBQTBGQTs7RUFFRSxlQUFBO0VBQ0EsVUFBQTtBQXZGRjtBQTBGQTtFQUM0QixlQUFBO0VBQzFCLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQXRGRjtBQXlGQTtFQUNFLE9BQUE7RUFDQSxXQUFBO0FBdEZGO0FBeUZBO0VBQzRCLGVBQUE7RUFDMUIsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFFQSxVQUFBO0FBdEZGO0FBeUZBO0VBQzRCLGVBQUE7RUFDMUIsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFFQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXRGRjtBQXdGQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQXJGRjtBQXdGQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUdBLGNBQUE7QUF2RkYiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50IHtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDYwMHB4O1xufVxuI2NvbnRlbnQgaDEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDAgMCA0MHB4IDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uY2lyY2xlIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgLyogdGhlIG1hZ2ljICovXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAvLyBoZWlnaHQ6IDI1cHg7XG4gIC8vIHdpZHRoOiAxMnB4O1xuICAvLyBtYXJnaW4tbGVmdDogNjAlOyBcbiAgLy8gYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICM3OGIxM2Y7XG4gIC8vIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICM3OGIxM2Y7XG59XG4ucmVkIHtcbiAgICB3aWR0aDogMjFweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3JlZC5wbmdcIik7IFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgLmdyZWVuIHtcbiAgICBcbiAgICB3aWR0aDogMjFweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgLy8gbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgLy8gY3Vyc29yOiBwb2ludGVyO1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDE1JTtcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLy8gdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC8vIGhlaWdodDogMjVweDtcbiAgICAvLyB3aWR0aDogMTJweDtcbiAgICAvLyBtYXJnaW4tbGVmdDogNjAlOyBcbiAgICAvLyBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzc4YjEzZjtcbiAgICAvLyBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjNzhiMTNmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ncmVlbi5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICAuZ3JheSB7XG4gIFxuICAgIHdpZHRoOiAyMXB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk3OTc5O1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ncmF5LnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG5cbiAgfVxuICAuYmx1ZSB7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JsdWUucG5nXCIpO1xuXG4gIH1cbiAgLm9yYW5nZSB7XG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIC55ZWxsb3cge1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMveWVsbG93LnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4uZmVlZGJhY2sge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjYjFiMWIxO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cbiAgei1pbmRleDogMjtcbn1cblxuaDEuZXhhbXBsZS1hcHAtbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xuICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xuICBmbGV4OiAxO1xufVxuXG4uZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxuICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xuICBmbGV4OiAxIDAgYXV0bztcbn1cblxuXG5cblxuXG5oMXtcbmZvbnQtc2l6ZTogMzBweDtcbmNvbG9yOiAjZmZmO1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbmZvbnQtd2VpZ2h0OiA0MDA7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5tYXJnaW4tYm90dG9tOiAxNXB4O1xufVxudGFibGV7XG5cbnRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4udGJsLWhlYWRlcntcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbn1cblxudGh7XG5wYWRkaW5nOiAxMHB4IDVweDtcbnRleHQtYWxpZ246IGxlZnQ7XG5mb250LXdlaWdodDogNTAwO1xuZm9udC1zaXplOiAxMnB4O1xuY29sb3I6ICMwMDA7XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxudGR7XG5cbnRleHQtYWxpZ246IGxlZnQ7XG52ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG5jb2xvcjogIzAwMDtcbi8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQ0NDO1xufVxuXG5cbi8qIGRlbW8gc3R5bGVzICovXG5cbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDUwMCwzMDAsNzAwKTtcbmJvZHl7XG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMjVjNDgxLCAjMjViN2M0KTtcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI1YzQ4MSwgIzI1YjdjNCk7XG5mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5zZWN0aW9ue1xubWFyZ2luOiA1cHg7XG4vLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjOTlhMmEzLCAjMDBiZWVlKTtcbi8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2E0YjViNiwgIzI1YjdjNCk7XG5mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cblxuLyogZm9sbG93IG1lIHRlbXBsYXRlICovXG4ubWFkZS13aXRoLWxvdmUge1xubWFyZ2luLXRvcDogNDBweDtcbnBhZGRpbmc6IDEwcHg7XG5jbGVhcjogbGVmdDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmZvbnQtc2l6ZTogMTBweDtcbmZvbnQtZmFtaWx5OiBhcmlhbDtcbmNvbG9yOiAjMDAwO1xufVxuLm1hZGUtd2l0aC1sb3ZlIGkge1xuZm9udC1zdHlsZTogbm9ybWFsO1xuY29sb3I6ICMwMDA7XG5mb250LXNpemU6IDE0cHg7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG50b3A6IDJweDtcbn1cbi5tYWRlLXdpdGgtbG92ZSBhIHtcbmNvbG9yOiAjMDAwO1xudGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm1hZGUtd2l0aC1sb3ZlIGE6aG92ZXIge1xudGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cblxuLyogZm9yIGN1c3RvbSBzY3JvbGxiYXIgZm9yIHdlYmtpdCBicm93c2VyKi9cblxuLy8gOjotd2Via2l0LXNjcm9sbGJhciB7XG4vLyAgIHdpZHRoOiA2cHg7XG4vLyB9IFxuLy8gOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4vLyAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7IFxuLy8gICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuLy8gfSBcbi8vIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuLy8gICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpOyBcbi8vICAgYmFja2dyb3VuZDogI2MxYzFjMTtcblxuLy8gfVxuXG5cbip7XG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cblxucHtcbmRpc3BsYXk6IG5vbmU7XG59XG5cbnRhYmxle1xuYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbnRleHQtYWxpZ246IGxlZnQ7XG4vLyBmbG9hdDpyaWdodCAhaW1wb3J0YW50O1xuLy8gZGlzcGxheTpibG9jaztcbi8vIG92ZXJmbG93OnNjcm9sbDtcbi8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cblxudGQsIHRoe1xuICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgI0NDQztcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRke1xuICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkICNDQ0M7XG4gIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDQ0M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxudGh7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWVhZjQ7XG4gIGZvbnQtc2l6ZTogMTNweFxufVxuXG50cjpudGgtb2YtdHlwZShldmVuKSB0ZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjFmMTtcbn1cblxuLnRvdGFse1xuICB0aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xuICB9XG4gIFxuICB0ZHtcbiAgICAvLyB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIFxuICB9XG59XG59XG5cbi5tb2JpbGUtaGVhZGVye1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KXtcbnB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudGFibGV7XG4gIHRye1xuICAgIHRkOm5vdCg6Zmlyc3QtY2hpbGQpLCB0aDpub3QoOmZpcnN0LWNoaWxkKSwgdGQ6bm90KC50b3RhbC12YWwpe1xuICAgICAgLy8gZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgJjpudGgtb2YtdHlwZShldmVuKSB0ZDpmaXJzdC1jaGlsZHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YxZjE7XG4gICAgfVxuICAgICY6bnRoLW9mLXR5cGUob2RkKSB0ZDpmaXJzdC1jaGlsZHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAmOm50aC1vZi10eXBlKGV2ZW4pIHRkOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuICAgIHRoOmZpcnN0LWNoaWxke1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1cbiAgICBcbiAgICB0aDpub3QoOmZpcnN0LWNoaWxkKXtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLW91dDtcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC05OTk5cHgpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICAgIFxuICAgIHRkOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1vdXQ7XG4gICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtOTk5OXB4KTtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gICAgXG4gICAgdGQ6Zmlyc3QtY2hpbGR7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgXG4gICAgJi50b3RhbCB0aHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIFxuICAgIHRkLnRvdGFsLXZhbHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgfVxuICB9XG59XG59XG4vLyB0YWJsZSwgdGQge1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbi8vICAgZmxvYXQ6cmlnaHQgIWltcG9ydGFudDtcbi8vIH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCl7XG50YWJsZXtcbiAgdHJ7XG4gICAgdGg6bm90KDpmaXJzdC1jaGlsZCl7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBcbiAgICB0ZDpub3QoOmZpcnN0LWNoaWxkKXtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG59XG59XG5cbi5jdXJzb3JuYW1le1xuY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG50YWJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDAuMjVlbTtcbiAgei1pbmRleDogNjtcbn1cblxudGhlYWQge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIGZvciBTYWZhcmkgKi9cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBjb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiAycHg7XG4gIHotaW5kZXg6IDY7XG59XG5cbnRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG59XG5cbnRib2R5e1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIGZvciBTYWZhcmkgKi9cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0NDQztcbiAgei1pbmRleDogNDtcbn1cblxuLmZpeGVke1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIGZvciBTYWZhcmkgKi9cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0NDQztcbiAgei1pbmRleDogNDtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cbnRkLmN1cnNvcm5hbWUuZml4ZWR7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbnRlbnQxIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG5cbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/profile/profile.component */ "Y5Lh");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_help_help_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/help/help.component */ "kOAU");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _modal_modal_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modal/modal.service */ "saQ5");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal.component */ "XwkG");
/* harmony import */ var _pages_infringement_infringement_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/infringement/infringement.component */ "SE/N");
/* harmony import */ var _pages_customer_customer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/customer/customer.component */ "aKbR");
/* harmony import */ var _pages_unit_unit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/unit/unit.component */ "FJYG");
/* harmony import */ var _auto_focus_directive_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auto-focus-directive.directive */ "0HhE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_modal_modal_service__WEBPACK_IMPORTED_MODULE_17__["ModalService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"], _pages_help_help_component__WEBPACK_IMPORTED_MODULE_12__["HelpComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"],
        _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["ModalComponent"], _pages_infringement_infringement_component__WEBPACK_IMPORTED_MODULE_19__["InfringementComponent"], _pages_customer_customer_component__WEBPACK_IMPORTED_MODULE_20__["CustomerComponent"], _pages_unit_unit_component__WEBPACK_IMPORTED_MODULE_21__["UnitComponent"], _auto_focus_directive_directive__WEBPACK_IMPORTED_MODULE_22__["AutoFocusDirectiveDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]] }); })();


/***/ }),

/***/ "aKbR":
/*!******************************************************!*\
  !*** ./src/app/pages/customer/customer.component.ts ***!
  \******************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer */ "nOeI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modal/modal.service */ "saQ5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







class CustomerComponent {
    constructor(http, sanitizer, modalService, viewContainerRef) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.itemID = 1;
        this.sessionID = '';
        this.account_id = 0;
        this.api_fld_acc = 'Account';
        this.api_fld_com = 'Company';
        this.api_fld_ins = 'Inspecter';
        this.api_fld_site = 'Site';
        this.customer_fields = {};
        this.model = {};
        this.ctime = new Date().getTime();
        this.submitted = false;
        this.fld_acc_id = 0;
        this.fld_com_id = 0;
        this.fld_ins_id = 0;
        this.fld_site_id = 0;
        const queryParams = window.location.search;
        const searchParams = new URLSearchParams(queryParams);
        let sid = searchParams.get('sid');
        let user = searchParams.get('user');
        if (!sid) {
            sid = searchParams.get('?sid');
            sid = searchParams.get('user');
        }
        if (!sid) {
            sid = sessionStorage.getItem('sid');
        }
        if (typeof (Storage) !== 'undefined') {
            // Store
            sessionStorage.setItem('sid', sid);
            sessionStorage.setItem('user', user);
        }
        this.sessionID = sid ? sid : sessionStorage.getItem('sid');
    }
    onSubmit() {
    }
    newCustomer() {
        this.submitted = true;
        // console.log(this.model,this.model.company_name);
        /**
         *
         * Update API of Customer Document's Account custom fields
         *
         */
        const p1 = '{\"svc\":\"item/update_custom_field\",\"params\":{\"id\":' + this.fld_acc_id + ',\"n\":\"' + this.api_fld_acc + '\",\"v\":\"' + this.model.account_name + '\",\"itemId\":' + this.account_id + ',\"callMode\":\"update\"}},';
        const p2 = '{\"svc\":\"item/update_custom_field\",\"params\":{\"id\":' + this.fld_com_id + ',\"n\":\"' + this.api_fld_com + '\",\"v\":\"' + this.model.company_name + '\",\"itemId\":' + this.account_id + ',\"callMode\":\"update\"}},';
        const p3 = '{\"svc\":\"item/update_custom_field\",\"params\":{\"id\":' + this.fld_ins_id + ',\"n\":\"' + this.api_fld_ins + '\",\"v\":\"' + this.model.inspecter_name + '\",\"itemId\":' + this.account_id + ',\"callMode\":\"update\"}},';
        const p4 = '{\"svc\":\"item/update_custom_field\",\"params\":{\"id\":' + this.fld_site_id + ',\"n\":\"' + this.api_fld_site + '\",\"v\":\"' + this.model.site_name + '\",\"itemId\":' + this.account_id + ',\"callMode\":\"update\"}}';
        const param = '{\"params\":[' + p1 + p2 + p3 + p4 + '],\"flags\":0}';
        var formData = new FormData();
        formData.append('params', param);
        formData.append('sid', this.sessionID);
        this.http.post('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=core/batch&sid=' + this.sessionID, formData).subscribe((res1) => {
            console.log(res1);
        });
    }
    ngOnInit() {
        /**
         *
         * Get Customer Document User ID
         *
         */
        let sessionID = this.sessionID;
        this.http.get('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=core/search_items&params={\"spec\":{\"itemsType\":\"user\",\"propName\":\"sys_name\",\"propValueMask\":\"Customer Document*\",\"sortType\":\"sys_name\"},\"force\":1,\"flags\":1,\"from\":0,\"to\":0}&sid=' + sessionID).subscribe((res) => {
            this.doProcessData(res);
        });
    }
    doProcessData(users) {
        console.log(users);
        let acc_name = '';
        let com_name = '';
        let ins_name = '';
        let site_name = '';
        if (users.items.length > 0) {
            /**
             *
             * Get Customer Document  custom fields Ids' from API
             * And populate to class variables
             *
             */
            this.account_id = users.items[0].id;
            const flag1 = 4294967295;
            var formData0 = new FormData();
            formData0.append('params', '{\"id\":' + this.account_id + ',\"flags\":' + flag1 + '}');
            formData0.append('sid', this.sessionID);
            this.http.post('https://cors.topflyiot.com/https://hst-api.wialon.com/wialon/ajax.html?svc=core/search_item&sid=' + this.sessionID, formData0).subscribe((res0) => {
                console.log(res0.item.flds);
                this.customer_fields = res0.item.flds;
                Object.keys(this.customer_fields).forEach((key1) => {
                    let fld_id = this.customer_fields[key1].id;
                    let fld_name = this.customer_fields[key1].n;
                    let fld_val = this.customer_fields[key1].v;
                    console.log(fld_name, fld_name);
                    switch (fld_name) {
                        case this.api_fld_acc:
                            acc_name = fld_val;
                            this.fld_acc_id = fld_id;
                            break;
                        case this.api_fld_com:
                            com_name = fld_val;
                            this.fld_com_id = fld_id;
                            break;
                        case this.api_fld_ins:
                            ins_name = fld_val;
                            this.fld_ins_id = fld_id;
                            break;
                        case this.api_fld_site:
                            site_name = fld_val;
                            this.fld_site_id = fld_id;
                            break;
                    }
                });
                this.model = new _customer__WEBPACK_IMPORTED_MODULE_0__["Customer"](acc_name, com_name, ins_name, site_name, this.ctime, this.ctime);
                //console.log(this.model)
            });
        }
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])); };
CustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], decls: 41, vars: 9, consts: [[1, "container"], [1, "row"], [1, "main-heading"], ["name", "customerForm", 3, "ngSubmit"], ["customerForm", "ngForm"], [1, "col-md-6"], ["for", "account_name"], ["type", "text", "id", "account_name", "name", "account_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["account_name", "ngModel"], [1, "mat-error", 3, "hidden"], ["for", "company_name"], ["type", "text", "id", "company_name", "name", "company_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["company_name", "ngModel"], [1, "row", "mt-2"], ["for", "inspecter_name"], ["type", "text", "id", "inspecter_name", "name", "inspecter_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["inspecter_name", "ngModel"], ["for", "site_name"], ["type", "text", "id", "site_name", "name", "site_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["site_name", "ngModel"], [1, "col-md-12", "text-right"], ["mat-raised-button", "", "type", "button", 1, "ct-btn", 3, "disabled", "click"]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "CUSTOMER DOCUMENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CustomerComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Account name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerComponent_Template_input_ngModelChange_10_listener($event) { return ctx.model.account_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Account Name is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Company name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerComponent_Template_input_ngModelChange_17_listener($event) { return ctx.model.company_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Company Name is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Inspecter name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerComponent_Template_input_ngModelChange_25_listener($event) { return ctx.model.inspecter_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Inspecter Name is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Site Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerComponent_Template_input_ngModelChange_32_listener($event) { return ctx.model.site_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Site Name is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_39_listener() { return ctx.newCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.account_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.company_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.inspecter_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", _r3.valid || _r3.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.site_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", _r4.valid || _r4.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".main-heading[_ngcontent-%COMP%] {\n  margin: 23px 20px;\n}\n\n.ct-btn[_ngcontent-%COMP%] {\n  background: #00bbf9;\n  color: white;\n  padding: 2px 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrREE7RUFDSSxpQkFBQTtBQWpESjs7QUFtREE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWhESiIsImZpbGUiOiJjdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5tYWluRGl2e1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbi8vIH1cbi8vIC5jb250YWluZXJ7XG4gICAgXG4vLyAgICAgd2lkdGg6IDY1JTtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgbWFyZ2luLXRvcDogODBweDtcbi8vIH1cbi8vIC50aXRsZXtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgIGNvbG9yOiAjRkZGO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGJlZWU7XG4vLyAgICAgcGFkZGluZzogMTRweCAwcHg7XG4vLyB9XG4vLyAubWFpbkJvZHl7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFmMGZmO1xuLy8gICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuLy8gICAgIGhlaWdodDogNjB2aDtcbi8vIH1cbi8vIC5pbnB1dEJveGVze1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gfVxuLy8gLmlucHV0Qm94ZXMgbGFiZWx7XG4vLyAgICAgd2lkdGg6IDE1MHB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuLy8gfVxuLy8gLmlucHV0Qm94ZXMgaW5wdXR7XG4vLyAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMGJlZWU7XG4vLyAgICAgd2lkdGg6IDIwMHB4O1xuLy8gICAgIGhlaWdodDogMzBweDtcbi8vIH1cbi8vIGlucHV0OmZvY3VzLXZpc2libGV7XG4gICAgXG4vLyAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuXG4vLyB9XG5cbi5tYWluLWhlYWRpbmd7XG4gICAgbWFyZ2luOiAyM3B4IDIwcHg7XG59XG4uY3QtYnRue1xuICAgIGJhY2tncm91bmQ6ICMwMGJiZjk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJweCA2MHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "kOAU":
/*!**********************************************!*\
  !*** ./src/app/pages/help/help.component.ts ***!
  \**********************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HelpComponent {
    constructor() { }
    ngOnInit() {
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 206, vars: 0, template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Help page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Some text here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Some footer text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "nOeI":
/*!********************************************!*\
  !*** ./src/app/pages/customer/customer.ts ***!
  \********************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
class Customer {
    constructor(
    // public id: number,
    account_name, company_name, inspecter_name, site_name, ct, mt) {
        this.account_name = account_name;
        this.company_name = company_name;
        this.inspecter_name = inspecter_name;
        this.site_name = site_name;
        this.ct = ct;
        this.mt = mt;
    }
}


/***/ }),

/***/ "rVrE":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 206, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Some text here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Some footer text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "saQ5":
/*!****************************************!*\
  !*** ./src/app/modal/modal.service.ts ***!
  \****************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.component */ "XwkG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ModalService {
    constructor(factoryResolver) {
        this.factoryResolver = factoryResolver;
        this.rootViewContainer = null;
        this.factoryResolver = factoryResolver;
    }
    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }
    addDynamicComponent(modalTitle, modalText) {
        const factory = this.factoryResolver.resolveComponentFactory(_modal_component__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"]);
        const component = factory.create(this.rootViewContainer.parentInjector);
        component.instance.modalTitle = modalTitle;
        component.instance.modalText = modalText;
        // Subscribe to the closeModal event and destroy the component
        component.instance.closeModal.subscribe(() => this.removeDynamicComponent(component));
        this.rootViewContainer.insert(component.hostView);
    }
    removeDynamicComponent(component) {
        component.destroy();
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"])); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac });


/***/ }),

/***/ "v2M4":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 4, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sorry!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page was not found. Please select a valid page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/about/about.component */ "rVrE");
/* harmony import */ var _pages_customer_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/customer/customer.component */ "aKbR");
/* harmony import */ var _pages_help_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/help/help.component */ "kOAU");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_infringement_infringement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/infringement/infringement.component */ "SE/N");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/profile/profile.component */ "Y5Lh");
/* harmony import */ var _pages_unit_unit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/unit/unit.component */ "FJYG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'monthly',
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
    },
    {
        path: 'monthly',
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
    },
    {
        path: 'customer',
        component: _pages_customer_customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"],
    },
    {
        path: 'infringement',
        component: _pages_infringement_infringement_component__WEBPACK_IMPORTED_MODULE_5__["InfringementComponent"],
    },
    {
        path: 'about',
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"],
    },
    {
        path: 'unit',
        component: _pages_unit_unit_component__WEBPACK_IMPORTED_MODULE_8__["UnitComponent"],
    },
    {
        path: 'help',
        component: _pages_help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"],
    },
    {
        path: '**',
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map