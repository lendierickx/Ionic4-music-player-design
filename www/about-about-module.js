(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/about/about.page.html":
/*!***************************************!*\
  !*** ./src/app/about/about.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n    <div class=\"topbar\">\n        <span (click)=\"navigateBack()\"><ion-icon name=\"arrow-back\"></ion-icon> Back</span>\n    </div>\n    <h3>About:</h3>\n\n    <p>Aiza Radio is a project of Cell.Exchange sponsored by <a href=\"http://giftmarkaz.com\">GiftMarkaz.com</a> & <a\n            href=\"http://backstitch.pk\">BackStitch.pk</a></p>\n\n    <p>We appreciate your feed back for any suggestions or advertisement please feel free to contact us at <a\n            href=\"mailto:info@aiza.pk\">info@aiza.pk</a></p>\n\n    <p>Kind Regards</p>\n    <p><a href=\"http://aiza.pk\">Aiza.pk</a> | <a href=\"http://giftmarkaz.com\">Giftmarkaz.com</a> | <a\n            href=\"http://backstitch.pk\">BackStitch.pk</a></p>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  color: whitesmoke;\n  --background: url(\"/assets/background.png\") no-repeat 0 0/100% 100%; }\n  :host ion-content .topbar {\n    padding-top: 15px;\n    padding-right: 8px;\n    display: flex;\n    color: whitesmoke;\n    width: 100%; }\n  :host ion-content .topbar .fill-remainig-space {\n      flex: 1; }\n  :host ion-content h3 {\n    color: whitesmoke; }\n  :host ion-content p {\n    color: whitesmoke; }\n  :host ion-content p a {\n      color: #3f9c1c; }\n  :host ion-content p:nth-child(5) {\n    position: absolute;\n    bottom: 40px;\n    width: 90%;\n    text-align: center; }\n  :host ion-content p:nth-child(6) {\n    position: absolute;\n    bottom: 15px;\n    width: 90%;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc21hbGl4L0RvY3VtZW50cy9NeV9Xb3Jrc3BhY2UvSW9uaWNfV29ya3NwYWNlL2FpemEvc3JjL2FwcC9hYm91dC9hYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBaUI7RUFDakIsb0VBQWEsRUFvQ2Q7RUF2Q0g7SUFNTSxrQkFBaUI7SUFDakIsbUJBQWtCO0lBRWxCLGNBQWE7SUFDYixrQkFBaUI7SUFDakIsWUFBVyxFQUlaO0VBZkw7TUFhUSxRQUNGLEVBQUM7RUFkUDtJQWtCTSxrQkFBaUIsRUFDbEI7RUFuQkw7SUFxQk0sa0JBQWlCLEVBSWxCO0VBekJMO01BdUJRLGVBQXVCLEVBQ3hCO0VBeEJQO0lBNEJNLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osV0FBVTtJQUNWLG1CQUFrQixFQUNuQjtFQWhDTDtJQWtDTSxtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLFdBQVU7SUFDVixtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYmFja2dyb3VuZC5wbmdcIikgbm8tcmVwZWF0IDAgMC8xMDAlIDEwMCU7XG5cbiAgICAudG9wYmFyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5maWxsLXJlbWFpbmlnLXNwYWNlIHtcbiAgICAgICAgZmxleDogMVxuICAgICAgfVxuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiByZ2IoNjMsIDE1NiwgMjgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcDpudGgtY2hpbGQoNSkge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgcDpudGgtY2hpbGQoNikge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage.prototype.navigateBack = function () {
        this.navCtrl.goBack();
    };
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map