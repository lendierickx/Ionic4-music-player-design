(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigService = /** @class */ (function () {
    function ConfigService(db) {
        this.configCollection = db.collection('stations');
        this.stations$ = this.configCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    }
    ConfigService.prototype.getStations = function () {
        return this.stations$;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <audio #audioOption style=\"display: none;\" id=\"audio\" crossorigin=\"anonymous\">\n    </audio>\n    <div [class]=\"lightsClass()\" style=\"z-index: 1\">\n        <!-- <div class=\"topbar\">\n            <ion-icon name=\"menu\" size=\"large\" (click)=\"gotoAbout()\"></ion-icon>\n            <span class=\"fill-remainig-space\"></span>\n            <ion-icon name=\"share\" size=\"large\" (click)=\"share()\"></ion-icon>\n        </div> -->\n        <canvas id=\"glow-layer\"></canvas>\n        <canvas id=\"canvas\"></canvas>\n    </div>\n\n    <div class=\"logo-image\" text-center>\n        <div class=\"effect_svg\">\n            <img src=\"assets/imgs/aiza01.svg\" class=\"svg\">\n        </div>\n        \n        <div class=\"red-circle\">\n            <img src=\"assets/imgs/aiza_circle_logo.png\" class=\"logo\">\n        </div>        \n    </div>\n\n    <div text-center>\n        <div class=\"title\">Let the Music Speak</div>        \n    </div>\n\n    <ion-row justify-content-center class=\"toolbar\" style=\"z-index: 100\">\n        <ion-col align-self-center align-items-center>\n            <button ion-button outline icon-only color=\"transparent\">                \n                <img src=\"assets/imgs/button1.png\">\n            </button>\n        </ion-col>\n        <ion-col align-self-center align-items-center>\n            <button ion-button outline icon-only>                \n                <img src=\"assets/imgs/button2.png\">\n            </button>\n        </ion-col>\n        <ion-col align-self-center align-items-center *ngIf=\"isPlaying\">\n            <button ion-button outline icon-only (click)=\"pause()\">\n                <ion-icon style=\"font-size: 18px\" name=\"pause\"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col align-self-center align-items-center *ngIf=\"!isPlaying\">\n            <button ion-button outline icon-only (click)=\"play()\">                \n                <img *ngIf=\"!isPlaying\" src=\"assets/imgs/play.png\">\n            </button>\n        </ion-col>\n        <ion-col align-self-center align-items-center>\n            <button ion-button outline icon-only>                \n                <img src=\"assets/imgs/button3.png\">\n            </button>\n        </ion-col>\n        <ion-col align-self-center align-items-center>\n            <button ion-button outline icon-only>                \n                <img src=\"assets/imgs/button4.png\">\n            </button>\n        </ion-col>\n    </ion-row>    \n    <!-- (click)=\"play()\" -->\n    <ion-row class=\"progress\">\n        <ion-col size=\"2\" align-self-center align-items-center text-center>\n            {{secondFormat ? secondFormat : '0:00'}}\n        </ion-col>\n\n        <ion-col size=\"8\" align-self-center align-items-center text-center>\n            <ion-progress-bar class=\"pro-bar\" color=\"danger\" [value]=\"currentTime / 1000\"></ion-progress-bar>            \n        </ion-col>\n\n        <ion-col size=\"2\" align-self-center align-items-center text-center>\n            12:05\n        </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-center class=\"music_kind\" style=\"z-index: 100\">\n        <ion-col align-self-center align-items-center>\n            <div text-center [class]=\"getMusicClassName(musicKind[0])\" (click)=\"choose(musicKind[0])\">                \n                {{musicKind[0]}}\n            </div>\n        </ion-col>\n        <ion-col align-self-center align-items-center>\n            <div text-center [class]=\"getMusicClassName(musicKind[1])\" (click)=\"choose(musicKind[1])\">\n                {{musicKind[1]}}\n            </div>\n        </ion-col>\n        <ion-col align-self-center align-items-center>\n            <div text-center [class]=\"getMusicClassName(musicKind[2])\" (click)=\"choose(musicKind[2])\">\n                {{musicKind[2]}}\n            </div>\n        </ion-col>\n        <ion-col align-self-center align-items-center>\n            <div text-center [class]=\"getMusicClassName(musicKind[3])\" (click)=\"choose(musicKind[3])\">                \n                {{musicKind[3]}}\n            </div>\n        </ion-col>\n    </ion-row>\n\n    <div class=\"bottom_setting\" text-center>\n        <img src=\"assets/imgs/settings.png\">\n\n        <p class=\"manager\">Project by Sunny</p>\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n    <div class=\"controls\" style=\"z-index: 100\">\n        <div [class]=\"getControlClass('Party')\" (click)=\"choose('Party')\">\n            Party\n        </div>\n        <div [class]=\"getControlClass('Folk')\" (click)=\"choose('Folk')\">\n            Folk\n        </div>\n        <div [class]=\"getControlClass('Romantic')\" (click)=\"choose('Romantic')\">\n            Romantic\n        </div>\n        <div [class]=\"getControlClass('Classic')\" (click)=\"choose('Classic')\">\n            Classic\n        </div>\n        <div class=\"play\" *ngIf=\"!isPlaying\" (click)=\"play()\" id=\"btn-play\">\n            <ion-icon name=\"play\" style=\"zoom:4.0;\"></ion-icon>\n        </div>\n        <div class=\"pause\" *ngIf=\"isPlaying\" (click)=\"pause()\">\n            <ion-icon name=\"pause\" style=\"zoom:4.0;\"></ion-icon>\n        </div>\n    </div>\n\n    <!-- <div class=\"logo-inner\"></div> -->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: #131b26;\n  font-family: 'Times New Roman', Times, serif;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-family: sans-serif; }\n  :host ion-content #canvas {\n    position: absolute;\n    left: 0; }\n  :host ion-content .topbar {\n    padding-top: 15px;\n    padding-right: 16px;\n    padding-left: 16px;\n    display: flex;\n    color: whitesmoke;\n    width: 100%; }\n  :host ion-content .topbar .fill-remainig-space {\n      flex: 1; }\n  :host ion-content .lights {\n    position: absolute;\n    width: 90%;\n    height: 95px;\n    background: url(\"/assets/lights.png\");\n    top: 100px;\n    left: 5%; }\n  :host ion-content .playing {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%; }\n  :host ion-content .controls {\n    position: absolute;\n    background: url(\"/assets/controls.png\");\n    background-size: cover;\n    width: 408px;\n    height: 295px;\n    top: calc(50vh - 185px);\n    left: calc(50% - 204px);\n    display: none; }\n  :host ion-content .controls .play {\n      position: absolute;\n      color: #0ac500;\n      left: calc(50% - 26px);\n      width: 67px;\n      top: 135px; }\n  :host ion-content .controls .pause {\n      position: absolute;\n      color: #c50a00;\n      left: calc(50% - 26px);\n      width: 67px;\n      top: 135px; }\n  :host ion-content .controls .station {\n      font-weight: normal;\n      font-size: 22px;\n      color: #1e2023; }\n  :host ion-content .controls .station.active {\n      font-weight: bolder; }\n  :host ion-content .controls .station.Party {\n      position: absolute;\n      left: 45%;\n      top: 56px; }\n  :host ion-content .controls .station.Folk {\n      position: absolute;\n      left: 68%;\n      top: 150px;\n      -webkit-transform: rotate(90deg);\n              transform: rotate(90deg); }\n  :host ion-content .controls .station.Classic {\n      position: absolute;\n      left: 18%;\n      top: 148px;\n      -webkit-transform: rotate(270deg);\n              transform: rotate(270deg); }\n  :host ion-content .controls .station.Romantic {\n      position: absolute;\n      left: 39%;\n      top: 241px; }\n  :host ion-content .logo-inner {\n    position: absolute;\n    bottom: 46px;\n    height: 64px;\n    width: 118px;\n    left: calc(50% - 59px);\n    background: url(\"/assets/aiza-logo-inner.png\"); }\n  :host ion-content ion-col button {\n    width: 100%;\n    background-color: transparent;\n    color: white;\n    font-size: 15px; }\n  :host ion-content ion-col button ion-icon {\n      font-size: 30px; }\n  :host ion-content ion-col button img {\n      width: 30%; }\n  :host ion-content .music_kind {\n    margin-top: 3%;\n    position: relative; }\n  :host ion-content .music_kind ion-col .music {\n      color: white;\n      font-size: 15px; }\n  :host ion-content .music_kind ion-col .music.active {\n      font-weight: bolder;\n      background: url(\"/assets/imgs/play_button.png\");\n      background-size: cover;\n      width: 100px;\n      height: 85px;\n      padding-top: 34%; }\n  :host ion-content .logo-image .svg {\n    position: absolute;\n    top: 8%;\n    left: 13%; }\n  :host ion-content .bottom_setting {\n    margin-top: 1%; }\n  :host ion-content .bottom_setting img {\n      width: 8%; }\n  :host ion-content .red-circle .logo {\n    width: 55%;\n    margin-top: 23%; }\n  :host ion-content .title {\n    color: white;\n    font-size: 22px;\n    margin-top: 5%; }\n  :host ion-content .music-subject {\n    color: white;\n    font-size: 18px;\n    margin-top: 3%; }\n  :host ion-content .toolbar {\n    margin-top: 3%;\n    position: relative; }\n  :host ion-content .progress {\n    margin-top: 4%;\n    color: white; }\n  :host ion-content .progress-buffer-bar, :host ion-content .progress-buffer-bar:before, :host ion-content .indeterminate-bar-secondary, :host ion-content .progress-indeterminate {\n    background: #7d7e7f !important; }\n  :host ion-content .pro-bar {\n    background: #7d7e7f !important; }\n  :host ion-content .manager {\n    font-size: 13px;\n    color: #ff3181;\n    margin-top: 7px;\n    margin-bottom: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b21hc21hbGl4L0RvY3VtZW50cy9NeV9Xb3Jrc3BhY2UvSW9uaWNfV29ya3NwYWNlL2FpemEvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUksc0JBQWE7RUFHYiw2Q0FBNEM7RUFFNUMsOEVBQTZFO0VBQzdFLHdCQUF1QixFQWdOeEI7RUExTkg7SUFhTSxtQkFBa0I7SUFDbEIsUUFBTyxFQUNSO0VBZkw7SUFrQk0sa0JBQWlCO0lBQ2pCLG9CQUFtQjtJQUNuQixtQkFBa0I7SUFFbEIsY0FBYTtJQUNiLGtCQUFpQjtJQUNqQixZQUFXLEVBSVo7RUE1Qkw7TUEwQlEsUUFDRixFQUFDO0VBM0JQO0lBK0JNLG1CQUFrQjtJQUNsQixXQUFVO0lBQ1YsYUFBWTtJQUNaLHNDQUFxQztJQUNyQyxXQUFVO0lBQ1YsU0FBUSxFQUNUO0VBckNMO0lBd0NNLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sUUFBTztJQUNQLFlBQVcsRUFDWjtFQTVDTDtJQStDTSxtQkFBa0I7SUFDbEIsd0NBQXVDO0lBQ3ZDLHVCQUFzQjtJQUN0QixhQUFZO0lBQ1osY0FBYTtJQUNiLHdCQUF1QjtJQUN2Qix3QkFBdUI7SUFDdkIsY0FBYSxFQWtEZDtFQXhHTDtNQXlEUSxtQkFBa0I7TUFDbEIsZUFBYztNQUNkLHVCQUFzQjtNQUN0QixZQUFXO01BQ1gsV0FBVSxFQUNYO0VBOURQO01BZ0VRLG1CQUFrQjtNQUNsQixlQUFjO01BQ2QsdUJBQXNCO01BQ3RCLFlBQVc7TUFDWCxXQUFVLEVBQ1g7RUFyRVA7TUF3RVEsb0JBQW1CO01BQ25CLGdCQUFlO01BQ2YsZUFBYyxFQUNmO0VBM0VQO01BNkVRLG9CQUFtQixFQUNwQjtFQTlFUDtNQWlGUSxtQkFBa0I7TUFDbEIsVUFBUztNQUNULFVBQVMsRUFDVjtFQXBGUDtNQXVGUSxtQkFBa0I7TUFDbEIsVUFBUztNQUNULFdBQVU7TUFDVixpQ0FBd0I7Y0FBeEIseUJBQXdCLEVBQ3pCO0VBM0ZQO01BNkZRLG1CQUFrQjtNQUNsQixVQUFTO01BQ1QsV0FBVTtNQUNWLGtDQUF5QjtjQUF6QiwwQkFBeUIsRUFDMUI7RUFqR1A7TUFtR1EsbUJBQWtCO01BQ2xCLFVBQVM7TUFDVCxXQUFVLEVBQ1g7RUF0R1A7SUEyR00sbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixhQUFZO0lBQ1osYUFBWTtJQUNaLHVCQUFzQjtJQUN0QiwrQ0FBOEMsRUFDL0M7RUFqSEw7SUFxSFEsWUFBVztJQUNYLDhCQUE2QjtJQUM3QixhQUFZO0lBQ1osZ0JBQWUsRUFTaEI7RUFqSVA7TUEySFUsZ0JBQWUsRUFDaEI7RUE1SFQ7TUErSFUsV0FBVSxFQUNYO0VBaElUO0lBcUlNLGVBQWM7SUFDZCxtQkFBa0IsRUFlbkI7RUFySkw7TUF5SVUsYUFBWTtNQUNaLGdCQUFlLEVBQ2hCO0VBM0lUO01BNklVLG9CQUFtQjtNQUNuQixnREFBK0M7TUFDL0MsdUJBQXNCO01BQ3RCLGFBQVk7TUFDWixhQUFZO01BQ1osaUJBQWdCLEVBQ2pCO0VBbkpUO0lBbUtRLG1CQUFrQjtJQUNsQixRQUFPO0lBQ1AsVUFBUyxFQUNWO0VBdEtQO0lBeUtNLGVBQWMsRUFJZjtFQTdLTDtNQTJLUSxVQUFTLEVBQ1Y7RUE1S1A7SUFpTFEsV0FBVTtJQUNWLGdCQUFlLEVBQ2hCO0VBbkxQO0lBdUxNLGFBQVk7SUFDWixnQkFBZTtJQUNmLGVBQWMsRUFDZjtFQTFMTDtJQTZMTSxhQUFZO0lBQ1osZ0JBQWU7SUFDZixlQUFjLEVBQ2Y7RUFoTUw7SUFtTU0sZUFBYztJQUNkLG1CQUFrQixFQUNuQjtFQXJNTDtJQXdNTSxlQUFjO0lBQ2QsYUFBWSxFQUNiO0VBMU1MO0lBNk1NLCtCQUE4QixFQUMvQjtFQTlNTDtJQWlOTSwrQkFBOEIsRUFDL0I7RUFsTkw7SUFxTk0sZ0JBQWU7SUFDZixlQUFjO0lBQ2QsZ0JBQWU7SUFDZixtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAvLyBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYmFja2dyb3VuZC5wbmdcIikgbm8tcmVwZWF0IDAgMC8xMDAlIDEwMCU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTMxYjI2O1xuICAgIC8vIGZvbnQtZmFtaWx5OiAnU2Fuc2VyaWZmaWMgQm9sZCc7XG4gICAgLy8gZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIC8vIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuXG4gICAgI2NhbnZhcyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC50b3BiYXIge1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5maWxsLXJlbWFpbmlnLXNwYWNlIHtcbiAgICAgICAgZmxleDogMVxuICAgICAgfVxuICAgIH1cblxuICAgIC5saWdodHMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGhlaWdodDogOTVweDtcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvbGlnaHRzLnBuZ1wiKTtcbiAgICAgIHRvcDogMTAwcHg7XG4gICAgICBsZWZ0OiA1JTtcbiAgICB9XG5cbiAgICAucGxheWluZyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvY29udHJvbHMucG5nXCIpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIHdpZHRoOiA0MDhweDtcbiAgICAgIGhlaWdodDogMjk1cHg7XG4gICAgICB0b3A6IGNhbGMoNTB2aCAtIDE4NXB4KTtcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjA0cHgpO1xuICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgLnBsYXkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOiAjMGFjNTAwO1xuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDI2cHgpO1xuICAgICAgICB3aWR0aDogNjdweDtcbiAgICAgICAgdG9wOiAxMzVweDtcbiAgICAgIH1cbiAgICAgIC5wYXVzZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29sb3I6ICNjNTBhMDA7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjZweCk7XG4gICAgICAgIHdpZHRoOiA2N3B4O1xuICAgICAgICB0b3A6IDEzNXB4O1xuICAgICAgfVxuXG4gICAgICAuc3RhdGlvbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgY29sb3I6ICMxZTIwMjM7XG4gICAgICB9XG4gICAgICAuc3RhdGlvbi5hY3RpdmUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgfVxuXG4gICAgICAuc3RhdGlvbi5QYXJ0eSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNDUlO1xuICAgICAgICB0b3A6IDU2cHg7XG4gICAgICB9XG5cbiAgICAgIC5zdGF0aW9uLkZvbGsge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDY4JTtcbiAgICAgICAgdG9wOiAxNTBweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgfVxuICAgICAgLnN0YXRpb24uQ2xhc3NpYyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTglO1xuICAgICAgICB0b3A6IDE0OHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgfVxuICAgICAgLnN0YXRpb24uUm9tYW50aWMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDM5JTtcbiAgICAgICAgdG9wOiAyNDFweDtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIC5sb2dvLWlubmVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogNDZweDtcbiAgICAgIGhlaWdodDogNjRweDtcbiAgICAgIHdpZHRoOiAxMThweDtcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTlweCk7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2FpemEtbG9nby1pbm5lci5wbmdcIik7XG4gICAgfVxuXG4gICAgaW9uLWNvbCB7XG4gICAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgIH0gICAgICBcbiAgICB9XG5cbiAgICAubXVzaWNfa2luZCB7XG4gICAgICBtYXJnaW4tdG9wOiAzJTsvLzEzXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgLm11c2ljIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4OyAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5tdXNpYy5hY3RpdmUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWdzL3BsYXlfYnV0dG9uLnBuZ1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDg1cHg7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDM0JTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxvZ28taW1hZ2Uge1xuICAgICAgLy8gbWFyZ2luLXRvcDogMTUlO1xuICAgICAgLy8gYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWdzL2FpemEwMS5zdmdcIik7XG4gICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAgIC8vIGhlaWdodDogNjAlO1xuICAgICAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgICAgLmVmZmVjdF9zdmcge1xuXG4gICAgICB9XG5cbiAgICAgIC5zdmcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOCU7XG4gICAgICAgIGxlZnQ6IDEzJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmJvdHRvbV9zZXR0aW5nIHtcbiAgICAgIG1hcmdpbi10b3A6IDElOy8vNVxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDglO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yZWQtY2lyY2xlIHtcbiAgICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjMlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB9XG5cbiAgICAubXVzaWMtc3ViamVjdCB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICB9XG5cbiAgICAudG9vbGJhciB7XG4gICAgICBtYXJnaW4tdG9wOiAzJTsvLzEwXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLnByb2dyZXNzIHtcbiAgICAgIG1hcmdpbi10b3A6IDQlOy8vMTNcbiAgICAgIGNvbG9yOiB3aGl0ZTsgICAgICBcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtYnVmZmVyLWJhciwgLnByb2dyZXNzLWJ1ZmZlci1iYXI6YmVmb3JlLCAuaW5kZXRlcm1pbmF0ZS1iYXItc2Vjb25kYXJ5LCAucHJvZ3Jlc3MtaW5kZXRlcm1pbmF0ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjN2Q3ZTdmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnByby1iYXIge1xuICAgICAgYmFja2dyb3VuZDogIzdkN2U3ZiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYW5hZ2VyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiAjZmYzMTgxO1xuICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH0gICAgXG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





window.Lights = window.Lights || {};
var HomePage = /** @class */ (function () {
    function HomePage(configService, navCtrl, socialSharing) {
        this.configService = configService;
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.allowedStations = ['Classic', 'Party', 'Folk', 'Romantic'];
        this.stations = {};
        this.observableVar = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000);
        this.musicKind = [];
        this.isPlaying = false;
        this.selectedStation = '';
        this.lights = null;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.musicKind = [];
        this.stationsSubscription = this.configService.getStations().subscribe(function (stations) {
            stations.forEach(function (station) {
                // if (this.allowedStations.indexOf(station.id) > -1) {
                _this.stations[station.id] = station;
                _this.musicKind.push(station.id);
                // }
            });
            setTimeout(_this.inintializeDefault.bind(_this), 1000);
        });
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.stationsSubscription.unsubscribe();
    };
    HomePage.prototype.play = function () {
        var _this = this;
        if (!this.lights) {
            this.lights = new window.Lights();
        }
        if (!this.selectedStation) {
            return;
        }
        this.isPlaying = true;
        this.audioPlayerRef.nativeElement.play();
        // this.musicLength = this.audioPlayerRef.nativeElement.endTime;
        // this.currentTime = this.audioPlayerRef.nativeElement.currentTime;
        // console.log('audio - : ', this.musicLength);
        var subscription = this.observableVar.subscribe(function () {
            _this.currentTime = _this.audioPlayerRef.nativeElement.currentTime;
            _this.time = _this.audioPlayerRef.nativeElement.currentTime;
            console.log('second = : ', Math.round(_this.time));
            var second = Math.round(_this.time);
            var min = Math.floor(second / 60);
            var second1 = second % 60;
            var timeFormat = min + ':' + (second1 > 9 ? second1 : '0' + second1);
            console.log('timeFormat = : ', timeFormat);
            _this.secondFormat = timeFormat;
        });
    };
    HomePage.prototype.pause = function () {
        this.isPlaying = false;
        this.audioPlayerRef.nativeElement.pause();
    };
    HomePage.prototype.getControlClass = function (name) {
        if (name === this.selectedStation) {
            return 'station ' + name + ' active';
        }
        else {
            return 'station ' + name;
        }
    };
    HomePage.prototype.lightsClass = function () {
        return  true ? 'playing' : undefined;
    };
    HomePage.prototype.inintializeDefault = function () {
        console.log('choose');
        this.choose(this.musicKind[0]);
    };
    HomePage.prototype.choose = function (name) {
        this.pause();
        this.selectedStation = name;
        this.audioPlayerRef.nativeElement.src = this.stations[name].url;
        this.audioPlayerRef.nativeElement.load();
        // this.play();
    };
    HomePage.prototype.gotoAbout = function () {
        this.navCtrl.navigateRoot('about');
    };
    HomePage.prototype.share = function () {
        var msg = 'Aiza Radio !\n' +
            '\n' +
            'Tune In now to Aiza Radio. App to suit your mood.\n' +
            '\n' +
            'Download Now\n' +
            'www.aiza.pk\n' +
            'Let the music talk.';
        this.socialSharing.share(msg, null, null, null);
    };
    HomePage.prototype.getMusicClassName = function (name) {
        if (name === this.selectedStation) {
            return 'music ' + name + ' active';
        }
        else {
            return 'music ' + name;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('audioOption'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomePage.prototype, "audioPlayerRef", void 0);
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map