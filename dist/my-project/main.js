(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

  /***/ "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
   !*** ./src/$$_lazy_route_resource lazy namespace object ***!
   \**********************************************************/
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
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

    /***/ }),

  /***/ "./src/app/app-routing.module.ts":
  /*!***************************************!*\
   !*** ./src/app/app-routing.module.ts ***!
   \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
    /* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
    /* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
    /* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
    /* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
    /* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
    /* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
    /* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
    /* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
    /* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
    /* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
    /* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");















    var routes = [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
      { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
      { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
      { path: 'user/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteListComponent"] },
      { path: 'user/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteNewComponent"] },
      { path: 'user/:uid/website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteEditComponent"] },
      { path: 'user/:uid/website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"] },
      { path: 'user/:uid/website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"] },
      { path: 'user/:uid/website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"] },
      { path: 'user/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
      { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooserComponent"] },
      { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] },
      { path: '**', redirectTo: 'login' }
    ];
    var AppRoutingModule = /** @class */ (function () {
      function AppRoutingModule() {
      }
      AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
      ], AppRoutingModule);
      return AppRoutingModule;
    }());



    /***/ }),

  /***/ "./src/app/app.component.css":
  /*!***********************************!*\
   !*** ./src/app/app.component.css ***!
   \***********************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "a:hover {\n  text-decoration: none;\n}\n\n.container-align {\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n\n.container {\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n\n.form-control {\n  margin-bottom: 5px;\n}\n\n.bc-blue {\n  background-color: #337ab7;\n}\n\n.bc-grey {\n  background-color: #d3d3d354;\n}\n\n.text-white {\n  color: white;\n}\n\n.text-blue {\n  color: #337ab7;\n}\n\n.text-grey {\n  color: grey;\n  font-weight: bold;\n}\n\n.text-black {\n  color: black;\n}\n\n.text-white-bold {\n  color: white;\n  font-weight: bold;\n}\n\nli i {\n  padding: 3px;\n  float: right;\n}\n\n.vertical-line {\n  border-left: 1px solid lightgrey;\n}\n\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n\n.paragraph-img {\n  height: 400px;\n  width: 1000px;\n  max-height: 30%;\n  max-width: 90%;\n}\n\n.icon-padding {\n  padding-top: 8px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFpbmVyLWFsaWduIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJjLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xufVxuXG4uYmMtZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM1NDtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0LWJsdWUge1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLnRleHQtZ3JleSB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQtYmxhY2sge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50ZXh0LXdoaXRlLWJvbGQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5saSBpIHtcbiAgcGFkZGluZzogM3B4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi52ZXJ0aWNhbC1saW5lIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGdyZXk7XG59XG5cbi5jbC1saXN0LWl0ZW0tYm9yZGVybGVzcyB7XG4gIGJvcmRlci10b3A6IDAgbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMCBub25lO1xuICBib3JkZXItbGVmdDogMCBub25lO1xuICBib3JkZXItcmlnaHQ6IDAgbm9uZTtcbn1cblxuLnBhcmFncmFwaC1pbWcge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMTAwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMCU7XG4gIG1heC13aWR0aDogOTAlO1xufVxuXG4uaWNvbi1wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuXG4iXX0= */"

    /***/ }),

  /***/ "./src/app/app.component.html":
  /*!************************************!*\
   !*** ./src/app/app.component.html ***!
   \************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

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
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


    var AppComponent = /** @class */ (function () {
      function AppComponent() {
      }
      AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-root',
          template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
          styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
      ], AppComponent);
      return AppComponent;
    }());



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
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
    /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
    /* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
    /* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
    /* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
    /* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
    /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
    /* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
    /* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
    /* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
    /* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
    /* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
    /* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
    /* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
    /* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
    /* harmony import */ var _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-header/widget-header.component */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
    /* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
    /* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
    /* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
    /* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
    /* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
    /* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
    /* harmony import */ var _services_safepipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/safepipe */ "./src/app/services/safepipe.ts");


























    var AppModule = /** @class */ (function () {
      function AppModule() {
      }
      AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
          declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
            _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
            _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteListComponent"],
            _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteNewComponent"],
            _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteEditComponent"],
            _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_12__["PageNewComponent"],
            _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_13__["PageEditComponent"],
            _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_14__["PageListComponent"],
            _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_15__["WidgetChooserComponent"],
            _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_16__["WidgetEditComponent"],
            _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__["WidgetListComponent"],
            _views_widget_widget_edit_widget_header_widget_header_component__WEBPACK_IMPORTED_MODULE_18__["WidgetHeaderComponent"],
            _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_19__["WidgetImageComponent"],
            _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_20__["WidgetYoutubeComponent"],
            _services_safepipe__WEBPACK_IMPORTED_MODULE_25__["SafePipe"]
          ],
          imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
          ],
          providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__["WidgetService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
      ], AppModule);
      return AppModule;
    }());



    /***/ }),

  /***/ "./src/app/models/widget.model.ts":
  /*!****************************************!*\
   !*** ./src/app/models/widget.model.ts ***!
   \****************************************/
  /*! exports provided: WidgetHeading, WidgetImage, WidgetHtml, WidgetYoutube */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeading", function() { return WidgetHeading; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImage", function() { return WidgetImage; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtml", function() { return WidgetHtml; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutube", function() { return WidgetYoutube; });
    var WidgetHeading = /** @class */ (function () {
      function WidgetHeading(_id, widgetType, pageId, size, text) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
      }
      return WidgetHeading;
    }());

    var WidgetImage = /** @class */ (function () {
      function WidgetImage(_id, widgetType, pageId, width, url) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.width = width;
        this.url = url;
      }
      return WidgetImage;
    }());

    var WidgetHtml = /** @class */ (function () {
      function WidgetHtml(_id, widgetType, pageId, text) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.text = text;
      }
      return WidgetHtml;
    }());

    var WidgetYoutube = /** @class */ (function () {
      function WidgetYoutube(_id, widgetType, pageId, width, url) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.width = width;
        this.url = url;
      }
      return WidgetYoutube;
    }());



    /***/ }),

  /***/ "./src/app/services/page.service.client.ts":
  /*!*************************************************!*\
   !*** ./src/app/services/page.service.client.ts ***!
   \*************************************************/
  /*! exports provided: PageService */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
    /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

    var PageService = /** @class */ (function () {
      function PageService() {
        this.pagesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.pages = [
          { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
          { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
          { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
        ];
      }
      PageService.prototype.createPage = function (websiteId, page) {
        page._id = String(Math.floor(Math.random() * 1000) + 1);
        page.websiteId = websiteId;
        this.pages.push(page);
        this.pagesChanged.next(this.pages.slice());
      };
      PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var ans = [];
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
          var page = _a[_i];
          if (page.websiteId === websiteId) {
            ans.push(page);
          }
        }
        return ans;
      };
      PageService.prototype.findPageById = function (pageId) {
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
          var page = _a[_i];
          if (page._id === pageId) {
            return page;
          }
        }
      };
      PageService.prototype.updatePage = function (pageId, newPage) {
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
          var page = _a[_i];
          if (page._id === pageId) {
            page.name = newPage.name;
            page.description = newPage.description;
          }
        }
        this.pagesChanged.next(this.pages.slice());
      };
      PageService.prototype.deletePage = function (pageId) {
        var _this = this;
        this.pages.forEach(function (page, index) {
          if (page._id === pageId) {
            _this.pages.splice(index, 1);
          }
        });
        this.pagesChanged.next(this.pages.slice());
      };
      return PageService;
    }());



    /***/ }),

  /***/ "./src/app/services/safepipe.ts":
  /*!**************************************!*\
   !*** ./src/app/services/safepipe.ts ***!
   \**************************************/
  /*! exports provided: SafePipe */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



    var SafePipe = /** @class */ (function () {
      function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
      }
      SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      };
      SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
      ], SafePipe);
      return SafePipe;
    }());



    /***/ }),

  /***/ "./src/app/services/user.service.client.ts":
  /*!*************************************************!*\
   !*** ./src/app/services/user.service.client.ts ***!
   \*************************************************/
  /*! exports provided: UserService */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
    /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

    var UserService = /** @class */ (function () {
      function UserService() {
        this.userChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.users = [
          { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
          { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
          { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
          { _id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jannunzi", lastName: "Annunzi" },
        ];
      }
      UserService.prototype.createUser = function (user) {
        user._id = String(Math.floor(Math.random() * 1000) + 1);
        this.users.push(user);
        this.userChanged.next(this.users.slice());
      };
      UserService.prototype.findUserById = function (userId) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
          var user = _a[_i];
          if (user._id === userId) {
            return user;
          }
        }
      };
      UserService.prototype.findUserByUsername = function (username) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
          var user = _a[_i];
          if (user.username === username) {
            return user;
          }
        }
      };
      UserService.prototype.findUserByCredentials = function (username, password) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
          var user = _a[_i];
          if (user.username === username && user.password === password) {
            return user;
          }
        }
      };
      UserService.prototype.updateUser = function (userId, newUser) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
          var user = _a[_i];
          if (user._id === userId) {
            user.username = newUser.username;
            user.password = newUser.password;
            user.firstName = newUser.firstName;
            user.lastName = newUser.lastName;
          }
        }
        this.userChanged.next(this.users.slice());
      };
      UserService.prototype.deleteUser = function (userId) {
        var _this = this;
        this.users.forEach(function (user, index) {
          if (user._id === userId) {
            _this.users.splice(index, 1);
          }
        });
        this.userChanged.next(this.users.slice());
      };
      return UserService;
    }());



    /***/ }),

  /***/ "./src/app/services/website.service.client.ts":
  /*!****************************************************!*\
   !*** ./src/app/services/website.service.client.ts ***!
   \****************************************************/
  /*! exports provided: WebsiteService */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
    /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

    var WebsiteService = /** @class */ (function () {
      function WebsiteService() {
        this.websitesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.websites = [
          { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
          { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
          { _id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },
          { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
          { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
          { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
          { _id: "789", name: "Chess", developerId: "234", description: "Lorem" },
        ];
      }
      WebsiteService.prototype.createWebsite = function (userId, website) {
        website._id = String(Math.floor(Math.random() * 1000) + 1);
        website.developerId = userId;
        this.websites.push(website);
        this.websitesChanged.next(this.websites.slice());
      };
      WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var ans = [];
        for (var _i = 0, _a = this.websites; _i < _a.length; _i++) {
          var website = _a[_i];
          if (website.developerId === userId) {
            ans.push(website);
          }
        }
        return ans;
      };
      WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var _i = 0, _a = this.websites; _i < _a.length; _i++) {
          var website = _a[_i];
          if (website._id === websiteId) {
            return website;
          }
        }
      };
      WebsiteService.prototype.updateWebsite = function (websiteId, newWebsite) {
        for (var _i = 0, _a = this.websites; _i < _a.length; _i++) {
          var website = _a[_i];
          if (website._id === websiteId) {
            website.name = newWebsite.name;
            website.description = newWebsite.description;
          }
        }
        this.websitesChanged.next(this.websites.slice());
      };
      WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var _this = this;
        this.websites.forEach(function (website, index) {
          if (website._id === websiteId) {
            _this.websites.splice(index, 1);
          }
        });
        this.websitesChanged.next(this.websites.slice());
      };
      return WebsiteService;
    }());



    /***/ }),

  /***/ "./src/app/services/widget.service.client.ts":
  /*!***************************************************!*\
   !*** ./src/app/services/widget.service.client.ts ***!
   \***************************************************/
  /*! exports provided: WidgetService */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _models_widget_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/widget.model */ "./src/app/models/widget.model.ts");
    /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




    var WidgetService = /** @class */ (function () {
      function WidgetService() {
        this.widgetsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.widgetChosen = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('DEFAULT');
        this.currentWidgetType = this.widgetChosen.asObservable();
        this.widgets = [
          new _models_widget_model__WEBPACK_IMPORTED_MODULE_1__["WidgetHeading"]("123", "HEADING", "321", 2, "GIZMODO"),
          new _models_widget_model__WEBPACK_IMPORTED_MODULE_1__["WidgetHeading"]("234", "HEADING", "321", 4, "Lorem ipsum"),
          new _models_widget_model__WEBPACK_IMPORTED_MODULE_1__["WidgetImage"]("345", "IMAGE", "321", "100%", "http://lorempixel.com/400/200"),
          new _models_widget_model__WEBPACK_IMPORTED_MODULE_1__["WidgetHtml"]("456", "HTML", "321", "<p>Lorem ipsum</p>"),
          new _models_widget_model__WEBPACK_IMPORTED_MODULE_1__["WidgetHeading"]("567", "HEADING", "321", 4, "Lorem ipsum"),
          new _models_widget_model__WEBPACK_IMPORTED_MODULE_1__["WidgetYoutube"]("678", "YOUTUBE", "321", "100%", "https://www.youtube.com//embed/eSLe4HuKuK0"),
          new _models_widget_model__WEBPACK_IMPORTED_MODULE_1__["WidgetHtml"]("789", "HTML", "321", "<p>Lorem ipsum</p>")
        ];
        this.widgetTypes = [
          "Header", "Label", "HTML", "Text Input", "Link", "Button", "Image", "YouTube", "Data Table", "Repeater"
        ];
        this.editFlag = false;
      }
      WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = String(Math.floor(Math.random() * 1000) + 1);
        widget.pageId = pageId;
        this.widgets.push(widget);
        this.widgetsChanged.next(this.widgets.slice());
      };
      WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var ans = [];
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
          var widget = _a[_i];
          if (widget.pageId === pageId) {
            ans.push(widget);
          }
        }
        return ans;
      };
      WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
          var widget = _a[_i];
          if (widget._id === widgetId) {
            return widget;
          }
        }
      };
      WidgetService.prototype.updateWidget = function (widgetId, newWidget) {
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
          var widget = _a[_i];
          if (widget._id === widgetId) {
            if (widget.widgetType === 'HEADING') {
              // @ts-ignore
              widget.size = newWidget.size;
              // @ts-ignore
              widget.text = newWidget.text;
            }
            else if (widget.widgetType === 'IMAGE') {
              // @ts-ignore
              widget.width = newWidget.width;
              // @ts-ignore
              widget.url = newWidget.url;
            }
            else if (widget.widgetType === 'YOUTUBE') {
              // @ts-ignore
              widget.width = newWidget.width;
              // @ts-ignore
              widget.url = newWidget.url;
            }
          }
        }
        this.widgetsChanged.next(this.widgets.slice());
      };
      WidgetService.prototype.deleteWidget = function (widgetId) {
        var _this = this;
        this.widgets.forEach(function (widget, index) {
          if (widget._id === widgetId) {
            _this.widgets.splice(index, 1);
          }
        });
        this.widgetsChanged.next(this.widgets.slice());
      };
      WidgetService.prototype.chooseNewType = function (widgetType) {
        this.widgetChosen.next(widgetType);
      };
      WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
      ], WidgetService);
      return WidgetService;
    }());



    /***/ }),

  /***/ "./src/app/views/page/page-edit/page-edit.component.css":
  /*!**************************************************************!*\
   !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
   \**************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1lZGl0L3BhZ2UtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

    /***/ }),

  /***/ "./src/app/views/page/page-edit/page-edit.component.html":
  /*!***************************************************************!*\
   !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
   \***************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Edit Page\n      </a>\n    </div>\n    <a (click)=\"onEditPage()\" style=\"cursor: pointer\" class=\"text-black\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        name=\"pageName\"\n        class=\"form-control\"\n        placeholder=\"{{ page.name }}\"\n        [(ngModel)]=\"page.name\">\n    </div>\n    <div class=\"form-group\">\n      <label>Title</label>\n      <input\n        type=\"text\"\n        name=\"pageTile\"\n        class=\"form-control\"\n        placeholder=\"{{ page.title }}\"\n        [(ngModel)]=\"page.title\">\n    </div>\n    <button class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

    /***/ }),

  /***/ "./src/app/views/page/page-edit/page-edit.component.ts":
  /*!*************************************************************!*\
   !*** ./src/app/views/page/page-edit/page-edit.component.ts ***!
   \*************************************************************/
  /*! exports provided: PageEditComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




    var PageEditComponent = /** @class */ (function () {
      function PageEditComponent(pageService, route, router) {
        this.pageService = pageService;
        this.route = route;
        this.router = router;
      }
      PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
          .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
          });
        this.page = this.pageService.findPageById(this.pageId);
      };
      PageEditComponent.prototype.onEditPage = function () {
        this.pageService.updatePage(this.pageId, this.page);
        this.router.navigate(['../'], { relativeTo: this.route });
      };
      PageEditComponent.prototype.onDelete = function () {
        this.pageService.deletePage(this.pageId);
        this.router.navigate(['../'], { relativeTo: this.route });
      };
      PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-page-edit',
          template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
          styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
      ], PageEditComponent);
      return PageEditComponent;
    }());



    /***/ }),

  /***/ "./src/app/views/page/page-list/page-list.component.css":
  /*!**************************************************************!*\
   !*** ./src/app/views/page/page-list/page-list.component.css ***!
   \**************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

    /***/ }),

  /***/ "./src/app/views/page/page-list/page-list.component.html":
  /*!***************************************************************!*\
   !*** ./src/app/views/page/page-list/page-list.component.html ***!
   \***************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Pages\n      </a>\n    </div>\n    <a [routerLink]=\"['./', 'new']\" class=\"text-black\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"form-control\" *ngFor=\"let page of pages\">\n    <a [routerLink]=\"['./', page._id, 'widget']\" class=\"text-blue\">{{ page.name }}</a>\n    <a [routerLink]=\"['./', page._id]\" class=\"text-blue float-right\">\n      <i class=\"fas fa-cog\"></i>\n    </a>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

    /***/ }),

  /***/ "./src/app/views/page/page-list/page-list.component.ts":
  /*!*************************************************************!*\
   !*** ./src/app/views/page/page-list/page-list.component.ts ***!
   \*************************************************************/
  /*! exports provided: PageListComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




    var PageListComponent = /** @class */ (function () {
      function PageListComponent(pageService, route) {
        this.pageService = pageService;
        this.route = route;
      }
      PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
          .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
          });
        this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
        this.subscription = this.pageService.pagesChanged
          .subscribe(function (pages) {
            _this.pages = pages;
          });
      };
      PageListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
      };
      PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-page-list',
          template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
          styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
      ], PageListComponent);
      return PageListComponent;
    }());



    /***/ }),

  /***/ "./src/app/views/page/page-new/page-new.component.css":
  /*!************************************************************!*\
   !*** ./src/app/views/page/page-new/page-new.component.css ***!
   \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

    /***/ }),

  /***/ "./src/app/views/page/page-new/page-new.component.html":
  /*!*************************************************************!*\
   !*** ./src/app/views/page/page-new/page-new.component.html ***!
   \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        New Page\n      </a>\n    </div>\n    <a (click)=\"onNewPage()\" style=\"cursor: pointer\" class=\"text-black\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        name=\"pageName\"\n        class=\"form-control\"\n        placeholder=\"Page Name\"\n        required\n        [(ngModel)]=\"newPageName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Title</label>\n      <input\n        type=\"text\"\n        name=\"pageTitle\"\n        class=\"form-control\"\n        placeholder=\"Page Title\"\n        [(ngModel)]=\"newPageTitle\">\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

    /***/ }),

  /***/ "./src/app/views/page/page-new/page-new.component.ts":
  /*!***********************************************************!*\
   !*** ./src/app/views/page/page-new/page-new.component.ts ***!
   \***********************************************************/
  /*! exports provided: PageNewComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");




    var PageNewComponent = /** @class */ (function () {
      function PageNewComponent(pageService, route, router) {
        this.pageService = pageService;
        this.route = route;
        this.router = router;
        this.newPageName = '';
      }
      PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
          .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
          });
      };
      PageNewComponent.prototype.onNewPage = function () {
        if (this.newPageName === '') {
          return false;
        }
        else {
          this.newPage = { _id: '', name: this.newPageName, websiteId: this.websiteId, description: '' };
          this.pageService.createPage(this.websiteId, this.newPage);
          this.router.navigate(['../'], { relativeTo: this.route });
        }
      };
      PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-page-new',
          template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
          styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
      ], PageNewComponent);
      return PageNewComponent;
    }());



    /***/ }),

  /***/ "./src/app/views/user/login/login.component.css":
  /*!******************************************************!*\
   !*** ./src/app/views/user/login/login.component.css ***!
   \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

    /***/ }),

  /***/ "./src/app/views/user/login/login.component.html":
  /*!*******************************************************!*\
   !*** ./src/app/views/user/login/login.component.html ***!
   \*******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<div class=\"container\">\n  <div\n    *ngIf=\"errorFlag\"\n    class=\"alert alert-danger\">\n    <h1>{{ errorMessage }}</h1>\n    <hr>\n    <a routerLink=\"login\" (click)=\"reload()\">Back</a>\n  </div>\n\n  <div *ngIf=\"!errorFlag\">\n    <h1>Login</h1>\n    <form\n      (ngSubmit)=\"onLogin()\"\n      #form='ngForm'>\n      <div class=\"form-group\">\n        <input\n          type=\"text\"\n          name=\"username\"\n          class=\"form-control\"\n          placeholder=\"username\"\n          ngModel\n          required\n          #username=\"ngModel\">\n        <span\n          class=\"help-block\"\n          *ngIf=\"!username.valid && username.touched\">\n          Please enter a username\n        </span>\n      </div>\n      <div class=\"form-group\">\n        <input\n          type=\"password\"\n          name=\"password\"\n          class=\"form-control\"\n          placeholder=\"password\"\n          ngModel\n          required\n          #password=\"ngModel\">\n        <span\n          class=\"help-block\"\n          *ngIf=\"!password.valid && password.touched\">\n          Please enter a password\n        </span>\n      </div>\n      <div class=\"form-group\">\n        <button\n          class=\"btn btn-primary btn-block\"\n          type=\"submit\"\n          [disabled]=\"!form.valid\">\n          Login\n        </button>\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</a>\n      </div>\n    </form>\n  </div>\n</div>\n"

    /***/ }),

  /***/ "./src/app/views/user/login/login.component.ts":
  /*!*****************************************************!*\
   !*** ./src/app/views/user/login/login.component.ts ***!
   \*****************************************************/
  /*! exports provided: LoginComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");





    var LoginComponent = /** @class */ (function () {
      function LoginComponent(router, userService, route) {
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.errorFlag = false;
        this.errorMsg = "Invalid Username or Password";
      }
      LoginComponent.prototype.ngOnInit = function () {
      };
      LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var submittedUser = this.userService.findUserByUsername(this.username);
        if (submittedUser === undefined || this.password != submittedUser.password) {
          this.errorFlag = true;
        }
        else {
          var loginUser = this.userService.findUserByCredentials(this.username, this.password);
          this.router.navigate(['/user', loginUser._id]);
        }
      };
      LoginComponent.prototype.reload = function () {
        this.errorFlag = false;
        this.router.navigate(['./'], { relativeTo: this.route });
      };
      tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
      ], LoginComponent.prototype, "loginForm", void 0);
      LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-login',
          template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
          styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
      ], LoginComponent);
      return LoginComponent;
    }());



    /***/ }),

  /***/ "./src/app/views/user/profile/profile.component.css":
  /*!**********************************************************!*\
   !*** ./src/app/views/user/profile/profile.component.css ***!
   \**********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

    /***/ }),

  /***/ "./src/app/views/user/profile/profile.component.html":
  /*!***********************************************************!*\
   !*** ./src/app/views/user/profile/profile.component.html ***!
   \***********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<nav class=\"navbar navbar-default fixed-top bc-blue\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header navbar-dark\">\n      <a class=\"navbar-brand text-white-bold\" routerLink=\"./\">Profile</a>\n    </div>\n    <div class=\"ml-auto\">\n      <a (click)=\"onUpdateUser()\" style=\"cursor:pointer;\" class=\"float-right text-white\">\n        <i class=\"fas fa-check\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input\n        name=\"username\"\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ user.username }}\"\n        [(ngModel)]=\"user.username\">\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input\n        name=\"email\"\n        type=\"email\"\n        class=\"form-control\"\n        placeholder=\"{{ user.email }}\"\n        [(ngModel)]=\"user.email\">\n    </div>\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input\n        name=\"first-name\"\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ user.firstName }}\"\n        [(ngModel)]=\"user.firstName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Last Name</label>\n      <input\n        name=\"last-name\"\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"{{ user.lastName }}\"\n        [(ngModel)]=\"user.lastName\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block\" routerLink=\"./website\">Websites</a>\n  <a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Logout</a>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-blue\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a routerLink=\"./\" class=\"text-white float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

    /***/ }),

  /***/ "./src/app/views/user/profile/profile.component.ts":
  /*!*********************************************************!*\
   !*** ./src/app/views/user/profile/profile.component.ts ***!
   \*********************************************************/
  /*! exports provided: ProfileComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");




    var ProfileComponent = /** @class */ (function () {
      function ProfileComponent(route, userService, router) {
        this.route = route;
        this.userService = userService;
        this.router = router;
      }
      ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
          .subscribe(function (params) {
            _this.userId = params['uid'];
          });
        this.user = this.userService.findUserById(this.userId);
        this.username = this.user['username'];
      };
      ProfileComponent.prototype.onUpdateUser = function () {
        this.userService.updateUser(this.userId, this.user);
        alert("successfully update your profile");
      };
      ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-profile',
          template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
          styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
      ], ProfileComponent);
      return ProfileComponent;
    }());



    /***/ }),

  /***/ "./src/app/views/user/register/register.component.css":
  /*!************************************************************!*\
   !*** ./src/app/views/user/register/register.component.css ***!
   \************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

    /***/ }),

  /***/ "./src/app/views/user/register/register.component.html":
  /*!*************************************************************!*\
   !*** ./src/app/views/user/register/register.component.html ***!
   \*************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n  <form\n    (ngSubmit)=\"onRegister()\"\n    #form='ngForm'>\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        name=\"username\"\n        class=\"form-control\"\n        placeholder=\"username\"\n        [(ngModel)]=\"regUsername\"\n        required\n        #username=\"ngModel\">\n      <span\n        class=\"help-block\"\n        *ngIf=\"!username.valid && username.touched\">\n        Please enter a valid username\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <input\n        type=\"password\"\n        name=\"password\"\n        class=\"form-control\"\n        placeholder=\"password\"\n        [(ngModel)]=\"regPassword\"\n        required\n        #password=\"ngModel\">\n      <span\n        class=\"help-block\"\n        *ngIf=\"!password.valid && password.touched\">\n        Please enter a valid password\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <input\n        type=\"password\"\n        name=\"verifiedPassword\"\n        class=\"form-control\"\n        placeholder=\"verify password\"\n        [(ngModel)]=\"regVerifiedPassword\"\n        required\n        #verifiedPassword=\"ngModel\">\n      <span\n        class=\"help-block\"\n        *ngIf=\"(regPassword !== regVerifiedPassword || !verifiedPassword.valid) && verifiedPassword.touched\">\n        Please enter the same password\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <button\n        class=\"btn btn-primary btn-block\"\n        type=\"submit\"\n        [disabled]=\"!form.valid || regPassword !== regVerifiedPassword\">\n        Register\n      </button>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\" (click)=\"onCancel()\">Cancel</a>\n    </div>\n  </form>\n</div>\n"

    /***/ }),

  /***/ "./src/app/views/user/register/register.component.ts":
  /*!***********************************************************!*\
   !*** ./src/app/views/user/register/register.component.ts ***!
   \***********************************************************/
  /*! exports provided: RegisterComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
    /* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





    var RegisterComponent = /** @class */ (function () {
      function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = { _id: '', username: '', password: '', firstName: '', lastName: '' };
      }
      RegisterComponent.prototype.ngOnInit = function () {
      };
      RegisterComponent.prototype.onRegister = function () {
        this.user.username = this.regUsername;
        this.user.password = this.regPassword;
        this.userService.createUser(this.user);
        var loginUser = this.userService.findUserByCredentials(this.regUsername, this.regPassword);
        this.router.navigate(['/user', loginUser._id]);
      };
      RegisterComponent.prototype.onCancel = function () {
        this.router.navigate(['login']);
      };
      tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
      ], RegisterComponent.prototype, "signupForm", void 0);
      RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-register',
          template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
          styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
      ], RegisterComponent);
      return RegisterComponent;
    }());



    /***/ }),

  /***/ "./src/app/views/website/website-edit/website-edit.component.css":
  /*!***********************************************************************!*\
   !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
   \***********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

    /***/ }),

  /***/ "./src/app/views/website/website-edit/website-edit.component.html":
  /*!************************************************************************!*\
   !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
   \************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<nav class=\"navbar fixed-top bc-blue\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-brand navbar-dark\">\n          <a routerLink=\"../\" class=\"float-left text-white\">\n            <i class=\"fas fa-chevron-left\"></i>\n          </a>\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          <a class=\"text-white-bold\" routerLink=\"../\">\n            Websites\n          </a>\n\n        </div>\n        <a routerLink=\"../new\" class=\"icon-padding float-right text-white\">\n          <i class=\"fas fa-plus\"></i>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"container-fluid\">\n        <a class=\"navbar-brand text-white-bold\" routerLink=\"./\">\n          Edit Website\n        </a>\n        <a (click)=\"onEditWebsite()\" style=\"cursor: pointer\" class=\"icon-padding float-right text-white\">\n          <i class=\"fas fa-check\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-align\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <div class=\"form-control\" *ngFor=\"let website of websites\">\n        <a [routerLink]=\"['../', website._id, 'page']\" class=\"text-blue\">{{ website.name }}</a>\n        <a [routerLink]=\"['../', website._id]\" (click)=\"onChangeWebsite(website._id)\" class=\"text-blue float-right\">\n          <i class=\"fas fa-cog\"></i>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-7\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input\n            type=\"text\"\n            name=\"websiteName\"\n            class=\"form-control\"\n            id=\"websiteName\"\n            placeholder=\"{{ website.name }}\"\n            [(ngModel)]=\"website.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDescription\">Website Description</label>\n          <textarea\n            id=\"websiteDescription\"\n            name=\"websiteDescription\"\n            class=\"form-control\"\n            rows=\"5\"\n            [(ngModel)]=\"website.description\"\n            placeholder=\"{{ website.description }}\"></textarea>\n        </div>\n        <button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"onDelete()\">Delete</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-blue\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-white float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

    /***/ }),

  /***/ "./src/app/views/website/website-edit/website-edit.component.ts":
  /*!**********************************************************************!*\
   !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
   \**********************************************************************/
  /*! exports provided: WebsiteEditComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
    /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






    var WebsiteEditComponent = /** @class */ (function () {
      function WebsiteEditComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
        this.websiteIdObs = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }
      WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
          .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
          });
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
        this.website = this.websiteService.findWebsiteById(this.websiteId);
        this.websiteIdObs
          .subscribe(function (websiteId) {
            _this.websiteId = websiteId;
            _this.website = _this.websiteService.findWebsiteById(_this.websiteId);
          });
      };
      WebsiteEditComponent.prototype.onChangeWebsite = function (id) {
        this.websiteIdObs.next(id);
      };
      WebsiteEditComponent.prototype.onEditWebsite = function () {
        this.websiteService.updateWebsite(this.websiteId, this.website);
        this.router.navigate(['../'], { relativeTo: this.route });
      };
      WebsiteEditComponent.prototype.onDelete = function () {
        this.websiteService.deleteWebsite(this.websiteId);
        this.router.navigate(['../'], { relativeTo: this.route });
      };
      tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
      ], WebsiteEditComponent.prototype, "websiteForm", void 0);
      WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-website-edit',
          template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
          styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
      ], WebsiteEditComponent);
      return WebsiteEditComponent;
    }());



    /***/ }),

  /***/ "./src/app/views/website/website-list/website-list.component.css":
  /*!***********************************************************************!*\
   !*** ./src/app/views/website/website-list/website-list.component.css ***!
   \***********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

    /***/ }),

  /***/ "./src/app/views/website/website-list/website-list.component.html":
  /*!************************************************************************!*\
   !*** ./src/app/views/website/website-list/website-list.component.html ***!
   \************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<nav class=\"navbar fixed-top bc-blue\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-dark\">\n      <a routerLink=\"../\" class=\"float-left text-white\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-white-bold\">\n        Websites\n      </a>\n    </div>\n    <a routerLink=\"./new\" class=\"text-white\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"form-control\" *ngFor=\"let website of websites\">\n      <a [routerLink]=\"['./', website._id, 'page']\" class=\"text-blue\">{{ website.name }}</a>\n      <a [routerLink]=\"['./', website._id]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-cog\"></i>\n      </a>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-blue\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-white float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

    /***/ }),

  /***/ "./src/app/views/website/website-list/website-list.component.ts":
  /*!**********************************************************************!*\
   !*** ./src/app/views/website/website-list/website-list.component.ts ***!
   \**********************************************************************/
  /*! exports provided: WebsiteListComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




    var WebsiteListComponent = /** @class */ (function () {
      function WebsiteListComponent(websiteService, route) {
        this.websiteService = websiteService;
        this.route = route;
      }
      WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
          .subscribe(function (params) {
            _this.userId = params['uid'];
          });
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
        this.subscription = this.websiteService.websitesChanged
          .subscribe(function (websites) {
            _this.websites = websites;
          });
      };
      WebsiteListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
      };
      WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-website-list',
          template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
          styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_2__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
      ], WebsiteListComponent);
      return WebsiteListComponent;
    }());



    /***/ }),

  /***/ "./src/app/views/website/website-new/website-new.component.css":
  /*!*********************************************************************!*\
   !*** ./src/app/views/website/website-new/website-new.component.css ***!
   \*********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

    /***/ }),

  /***/ "./src/app/views/website/website-new/website-new.component.html":
  /*!**********************************************************************!*\
   !*** ./src/app/views/website/website-new/website-new.component.html ***!
   \**********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<nav class=\"navbar fixed-top bc-blue\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-brand navbar-dark\">\n          <a routerLink=\"../\" class=\"float-left text-white\">\n            <i class=\"fas fa-chevron-left\"></i>\n          </a>\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          <a class=\"text-white-bold\" routerLink=\"../\">\n            Websites\n          </a>\n\n        </div>\n        <a routerLink=\"./\" class=\"icon-padding float-right text-white\">\n          <i class=\"fas fa-plus\"></i>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"container-fluid\">\n        <a class=\"navbar-brand text-white-bold\" routerLink=\"./\">\n          New Websites\n        </a>\n        <a routerLink=\"../\" class=\"icon-padding float-right text-white\">\n          <i class=\"fas fa-check\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-align\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n      <div class=\"form-control\" *ngFor=\"let website of websites\">\n        <a [routerLink]=\"['../', website._id, 'page']\" class=\"text-blue\">{{ website.name }}</a>\n        <a [routerLink]=\"['../', website._id]\" class=\"text-blue float-right\">\n          <i class=\"fas fa-cog\"></i>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-sm-7\">\n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"websiteName\">Website Name</label>\n          <input\n            type=\"text\"\n            name=\"websiteName\"\n            class=\"form-control\"\n            id=\"websiteName\"\n            [(ngModel)]=\"newWebsiteName\"\n            required\n            #name=\"ngModel\">\n          <span\n            class=\"help-block\"\n            *ngIf=\"!name.valid && name.touched\">\n            Please enter a valid website name\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"websiteDescription\">Website Description</label>\n          <textarea\n            id=\"websiteDescription\"\n            name=\"websiteDescription\"\n            class=\"form-control\"\n            rows=\"5\"\n            [(ngModel)]=\"newWebsiteDescription\"></textarea>\n        </div>\n        <button\n          class=\"btn btn-primary btn-block\"\n          type=\"submit\"\n          [disabled]=\"!f.valid\">\n          Submit\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-blue\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-white float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

    /***/ }),

  /***/ "./src/app/views/website/website-new/website-new.component.ts":
  /*!********************************************************************!*\
   !*** ./src/app/views/website/website-new/website-new.component.ts ***!
   \********************************************************************/
  /*! exports provided: WebsiteNewComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
    /* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





    var WebsiteNewComponent = /** @class */ (function () {
      function WebsiteNewComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
      }
      WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
          .subscribe(function (params) {
            _this.userId = params['uid'];
          });
        this.websites = this.websiteService.findWebsitesByUser(this.userId);
      };
      WebsiteNewComponent.prototype.onSubmit = function () {
        this.newWebsite = { _id: '', name: this.newWebsiteName, developerId: this.userId, description: this.newWebsiteDescription };
        this.websiteService.createWebsite(this.userId, this.newWebsite);
        this.router.navigate(['../'], { relativeTo: this.route });
      };
      tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
      ], WebsiteNewComponent.prototype, "websiteForm", void 0);
      WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-website-new',
          template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
          styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
      ], WebsiteNewComponent);
      return WebsiteNewComponent;
    }());



    /***/ }),

  /***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
  /*!**************************************************************************!*\
   !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.css ***!
   \**************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtY2hvb3Nlci93aWRnZXQtY2hvb3Nlci5jb21wb25lbnQuY3NzIn0= */"

    /***/ }),

  /***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
  /*!***************************************************************************!*\
   !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
   \***************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Choose Widget\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <ul class=\"list-group\" *ngFor=\"let type of widgetTypes\">\n    <li class=\"list-group-item border-0\">\n      <a [routerLink]=\"['../', widgetId]\" class=\"text-blue\" (click)=\"onNewWidget(type)\">{{ type }}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

    /***/ }),

  /***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
  /*!*************************************************************************!*\
   !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.ts ***!
   \*************************************************************************/
  /*! exports provided: WidgetChooserComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




    var WidgetChooserComponent = /** @class */ (function () {
      function WidgetChooserComponent(widgetService, route) {
        this.widgetService = widgetService;
        this.route = route;
      }
      WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
          .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.widgetId = params['wgid'];
          });
        this.widgetTypes = this.widgetService.widgetTypes;
        this.subscription = this.widgetService.currentWidgetType
          .subscribe(function (widgetType) {
            _this.widgetType = widgetType;
          });
      };
      WidgetChooserComponent.prototype.onNewWidget = function (widgetType) {
        this.widgetService.chooseNewType(widgetType);
      };
      WidgetChooserComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
      };
      WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-widget-chooser',
          template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
          styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
      ], WidgetChooserComponent);
      return WidgetChooserComponent;
    }());



    /***/ }),

  /***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
  /*!********************************************************************!*\
   !*** ./src/app/views/widget/widget-edit/widget-edit.component.css ***!
   \********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

    /***/ }),

  /***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
  /*!*********************************************************************!*\
   !*** ./src/app/views/widget/widget-edit/widget-edit.component.html ***!
   \*********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<div *ngIf=\"widget !== undefined\" [ngSwitch]=\"widget.widgetType\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n  <div *ngSwitchDefault>\n    <h1>This Widget Type is not DEFINED in assignment</h1>\n    <hr>\n    <button routerLink=\"../\">Back</button>\n  </div>\n</div>\n\n<div *ngIf=\"widget === undefined\" [ngSwitch]=\"widgetChosen\">\n  <div *ngSwitchCase=\"'Header'\">\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'Image'\">\n    <app-widget-image></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YouTube'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n  <div *ngSwitchDefault>\n    <h1>This Widget Type is not DEFINED in assignment</h1>\n    <hr>\n    <button routerLink=\"../new\">Back</button>\n  </div>\n</div>\n"

    /***/ }),

  /***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
  /*!*******************************************************************!*\
   !*** ./src/app/views/widget/widget-edit/widget-edit.component.ts ***!
   \*******************************************************************/
  /*! exports provided: WidgetEditComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




    var WidgetEditComponent = /** @class */ (function () {
      function WidgetEditComponent(route, widgetService) {
        this.route = route;
        this.widgetService = widgetService;
      }
      WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
          .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.widgetId = params['wgid'];
          });
        this.subscription = this.widgetService.currentWidgetType
          .subscribe(function (widgetChosen) {
            _this.widgetChosen = widgetChosen;
          });
        // console.log(this.widgetId);
        if (this.widgetId !== 'undefined') {
          this.widget = this.widgetService.findWidgetById(this.widgetId);
          this.widgetService.editFlag = true;
        }
        else {
          this.widgetService.editFlag = false;
        }
      };
      WidgetEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
      };
      WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-widget-edit',
          template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
          styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
      ], WidgetEditComponent);
      return WidgetEditComponent;
    }());



    /***/ }),

  /***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
  /*!************************************************************************************!*\
   !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.css ***!
   \************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGVyL3dpZGdldC1oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

    /***/ }),

  /***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
  /*!*************************************************************************************!*\
   !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.html ***!
   \*************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Widget Edit\n      </a>\n    </div>\n    <a (click)=\"onEditWidget()\" style=\"cursor: pointer\" class=\"text-black\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetName\"\n        placeholder=\"{{ widget.name }}\"\n        [(ngModel)]=\"newWidgetName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Text</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetText\"\n        placeholder=\"{{ widget.text }}\"\n        [(ngModel)]=\"newWidgetText\">\n    </div>\n    <div class=\"form-group\">\n      <label>Size</label>\n      <input\n        type=\"number\"\n        class=\"form-control\"\n        name=\"widgetSize\"\n        placeholder=\"{{ widget.size }}\"\n        [(ngModel)]=\"newWidgetSize\">\n    </div>\n    <button *ngIf=\"editFlag\" class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

    /***/ }),

  /***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
  /*!***********************************************************************************!*\
   !*** ./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts ***!
   \***********************************************************************************/
  /*! exports provided: WidgetHeaderComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeaderComponent", function() { return WidgetHeaderComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _models_widget_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/widget.model */ "./src/app/models/widget.model.ts");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");





    var WidgetHeaderComponent = /** @class */ (function () {
      function WidgetHeaderComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.widget = new _models_widget_model__WEBPACK_IMPORTED_MODULE_2__["WidgetHeading"]("", "", "", null, "");
        this.newWidgetText = '';
        this.newWidgetSize = null;
        this.editFlag = false;
      }
      WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
          .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
          });
        if (this.widgetId !== 'undefined') {
          this.widget = this.widgetService.findWidgetById(this.widgetId);
        }
        this.editFlag = this.widgetService.editFlag;
      };
      WidgetHeaderComponent.prototype.onEditWidget = function () {
        if (this.widgetId === 'undefined') {
          this.newWidget = new _models_widget_model__WEBPACK_IMPORTED_MODULE_2__["WidgetHeading"]("", "HEADING", this.pageId, this.newWidgetSize, this.newWidgetText);
          this.widgetService.createWidget(this.pageId, this.newWidget);
          this.router.navigate(['../'], { relativeTo: this.route });
        }
        else {
          if (this.newWidgetText === '') {
            // @ts-ignore
            this.newWidgetText = this.widget.text;
          }
          if (this.newWidgetSize === null) {
            // @ts-ignore
            this.newWidgetSize = this.widget.size;
          }
          // console.log(this.newWidgetText);
          this.newWidget = new _models_widget_model__WEBPACK_IMPORTED_MODULE_2__["WidgetHeading"](this.widgetId, "HEADING", this.pageId, this.newWidgetSize, this.newWidgetText);
          this.widgetService.updateWidget(this.widgetId, this.newWidget);
          this.router.navigate(['../'], { relativeTo: this.route });
        }
      };
      WidgetHeaderComponent.prototype.onDelete = function () {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['../'], { relativeTo: this.route });
      };
      WidgetHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-widget-header',
          template: __webpack_require__(/*! ./widget-header.component.html */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
          styles: [__webpack_require__(/*! ./widget-header.component.css */ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
      ], WidgetHeaderComponent);
      return WidgetHeaderComponent;
    }());



    /***/ }),

  /***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
  /*!**********************************************************************************!*\
   !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
   \**********************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"

    /***/ }),

  /***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
  /*!***********************************************************************************!*\
   !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
   \***********************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Widget Edit\n      </a>\n    </div>\n    <a (click)=\"onEditWidget()\" style=\"cursor: pointer\" class=\"text-black\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetName\"\n        placeholder=\"{{ widget.name }}\"\n        [(ngModel)]=\"newWidgetName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Text</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetText\"\n        placeholder=\"{{ widget.text }}\"\n        [(ngModel)]=\"newWidgetText\">\n    </div>\n    <div class=\"form-group\">\n      <label>URL</label>\n      <input\n        type=\"url\"\n        class=\"form-control\"\n        name=\"widgetURL\"\n        placeholder=\"{{ widget.url }}\"\n        [(ngModel)]=\"newWidgetURL\">\n    </div>\n    <div class=\"form-group\">\n      <label>Width</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetWidth\"\n        placeholder=\"{{ widget.width }}\"\n        [(ngModel)]=\"newWidgetWidth\">\n    </div>\n    <div class=\"form-group\">\n      <label>Upload</label>\n      <div class=\"file-upload\">\n        <input type=\"file\"\n               id=\"avatar\" name=\"avatar\"\n               accept=\"image/png, image/jpeg\">\n      </div>\n    </div>\n    <button class=\"btn btn-primary btn-block\">Upload Image</button>\n    <button *ngIf=\"editFlag\" class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

    /***/ }),

  /***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
  /*!*********************************************************************************!*\
   !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
   \*********************************************************************************/
  /*! exports provided: WidgetImageComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _models_widget_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/widget.model */ "./src/app/models/widget.model.ts");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");





    var WidgetImageComponent = /** @class */ (function () {
      function WidgetImageComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.widget = new _models_widget_model__WEBPACK_IMPORTED_MODULE_2__["WidgetImage"]("", "", "", "", "");
        this.newWidgetText = '';
        this.newWidgetWidth = '';
        this.newWidgetURL = '';
        this.editFlag = false;
      }
      WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
          .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
          });
        if (this.widgetId !== 'undefined') {
          this.widget = this.widgetService.findWidgetById(this.widgetId);
        }
        this.editFlag = this.widgetService.editFlag;
      };
      WidgetImageComponent.prototype.onEditWidget = function () {
        if (this.widgetId === 'undefined') {
          this.newWidget = new _models_widget_model__WEBPACK_IMPORTED_MODULE_2__["WidgetImage"]("", "IMAGE", this.pageId, this.newWidgetWidth, this.newWidgetURL);
          this.widgetService.createWidget(this.pageId, this.newWidget);
          this.router.navigate(['../'], { relativeTo: this.route });
        }
        else {
          if (this.newWidgetText === '') {
            // @ts-ignore
            this.newWidgetText = this.widget.text;
          }
          if (this.newWidgetWidth === '') {
            // @ts-ignore
            this.newWidgetWidth = this.widget.width;
          }
          if (this.newWidgetURL === '') {
            // @ts-ignore
            this.newWidgetURL = this.widget.url;
          }
          this.newWidget = new _models_widget_model__WEBPACK_IMPORTED_MODULE_2__["WidgetImage"](this.widgetId, "IMAGE", this.pageId, this.newWidgetWidth, this.newWidgetURL);
          this.widgetService.updateWidget(this.widgetId, this.newWidget);
          this.router.navigate(['../'], { relativeTo: this.route });
        }
      };
      WidgetImageComponent.prototype.onDelete = function () {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['../'], { relativeTo: this.route });
      };
      WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-widget-image',
          template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
          styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
      ], WidgetImageComponent);
      return WidgetImageComponent;
    }());



    /***/ }),

  /***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
  /*!**************************************************************************************!*\
   !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
   \**************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQteW91dHViZS93aWRnZXQteW91dHViZS5jb21wb25lbnQuY3NzIn0= */"

    /***/ }),

  /***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
  /*!***************************************************************************************!*\
   !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
   \***************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Widget Edit\n      </a>\n    </div>\n    <a (click)=\"onEditWidget()\" style=\"cursor: pointer\" class=\"text-black\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetName\"\n        placeholder=\"{{ widget.name }}\"\n        [(ngModel)]=\"newWidgetName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Text</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetText\"\n        placeholder=\"{{ widget.text }}\"\n        [(ngModel)]=\"newWidgetText\">\n    </div>\n    <div class=\"form-group\">\n      <label>URL</label>\n      <input\n        type=\"url\"\n        class=\"form-control\"\n        name=\"widgetURL\"\n        placeholder=\"{{ widget.url }}\"\n        [(ngModel)]=\"newWidgetURL\">\n    </div>\n    <div class=\"form-group\">\n      <label>Width</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"widgetWidth\"\n        placeholder=\"{{ widget.width }}\"\n        [(ngModel)]=\"newWidgetWidth\">\n    </div>\n    <button *ngIf=\"editFlag\" class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

    /***/ }),

  /***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
  /*!*************************************************************************************!*\
   !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
   \*************************************************************************************/
  /*! exports provided: WidgetYoutubeComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _models_widget_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/widget.model */ "./src/app/models/widget.model.ts");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
    /* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");





    var WidgetYoutubeComponent = /** @class */ (function () {
      function WidgetYoutubeComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.widget = new _models_widget_model__WEBPACK_IMPORTED_MODULE_2__["WidgetYoutube"]("", "", "", "", "");
        this.newWidgetText = '';
        this.newWidgetWidth = '';
        this.newWidgetURL = '';
        this.editFlag = false;
      }
      WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
          .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
          });
        if (this.widgetId !== 'undefined') {
          this.widget = this.widgetService.findWidgetById(this.widgetId);
        }
        this.editFlag = this.widgetService.editFlag;
      };
      WidgetYoutubeComponent.prototype.onEditWidget = function () {
        if (this.widgetId === 'undefined') {
          this.newWidget = new _models_widget_model__WEBPACK_IMPORTED_MODULE_2__["WidgetYoutube"]("", "YOUTUBE", this.pageId, this.newWidgetWidth, this.newWidgetURL);
          this.widgetService.createWidget(this.pageId, this.newWidget);
          this.router.navigate(['../'], { relativeTo: this.route });
        }
        else {
          if (this.newWidgetText === '') {
            // @ts-ignore
            this.newWidgetText = this.widget.text;
          }
          if (this.newWidgetWidth === '') {
            // @ts-ignore
            this.newWidgetWidth = this.widget.width;
          }
          if (this.newWidgetURL === '') {
            // @ts-ignore
            this.newWidgetURL = this.widget.url;
          }
          this.newWidget = new _models_widget_model__WEBPACK_IMPORTED_MODULE_2__["WidgetYoutube"](this.widgetId, "YOUTUBE", this.pageId, this.newWidgetWidth, this.newWidgetURL);
          this.widgetService.updateWidget(this.widgetId, this.newWidget);
          this.router.navigate(['../'], { relativeTo: this.route });
        }
      };
      WidgetYoutubeComponent.prototype.onDelete = function () {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['../'], { relativeTo: this.route });
      };
      WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-widget-youtube',
          template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
          styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
      ], WidgetYoutubeComponent);
      return WidgetYoutubeComponent;
    }());



    /***/ }),

  /***/ "./src/app/views/widget/widget-list/widget-list.component.css":
  /*!********************************************************************!*\
   !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
   \********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

    /***/ }),

  /***/ "./src/app/views/widget/widget-list/widget-list.component.html":
  /*!*********************************************************************!*\
   !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
   \*********************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {

    module.exports = "<nav class=\"navbar fixed-top bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-brand navbar-light\">\n      <a routerLink=\"../../\" class=\"float-left text-black\">\n        <i class=\"fas fa-chevron-left\"></i>\n      </a>\n      &nbsp;&nbsp;&nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-grey\">\n        Widgets\n      </a>\n    </div>\n    <a routerLink=\"new\" class=\"text-black\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div *ngFor=\"let widget of widgets\" [ngSwitch]=\"widget.widgetType\">\n    <a routerLink=\"./\" class=\"float-right text-black\">\n      <i class=\"fas fa-bars\"></i>\n    </a>\n    <a routerLink=\"{{ widget._id }}\" class=\"float-right text-blue\">\n      <i class=\"fas fa-cog\"></i>\n    </a>\n    <div *ngSwitchCase=\"'HEADING'\" [ngSwitch]=\"widget.size\">\n      <h1 *ngSwitchCase=\"1\">{{ widget.text }}</h1>\n      <h2 *ngSwitchCase=\"2\">{{ widget.text }}</h2>\n      <h3 *ngSwitchCase=\"3\">{{ widget.text }}</h3>\n      <h4 *ngSwitchCase=\"4\">{{ widget.text }}</h4>\n      <h5 *ngSwitchCase=\"5\">{{ widget.text }}</h5>\n      <h3 *ngSwitchDefault>{{ widget.text }}</h3>\n    </div>\n    <img *ngSwitchCase=\"'IMAGE'\" src=\"{{ widget.url }}\" alt=\"\">\n    <iframe *ngSwitchCase=\"'YOUTUBE'\" width=\"420\" height=\"315\" [src]=\"widget.url | safe\"></iframe>\n    <div *ngSwitchCase=\"'HTML'\" [innerHTML]=\"widget.text\"></div>\n    <p *ngSwitchDefault><br><br></p>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bc-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"\">\n      <a routerLink=\"./\" class=\"text-black\">\n        <i class=\"fas fa-play\"></i>\n      </a>\n      &nbsp;&nbsp;\n      <a routerLink=\"./\" class=\"text-black\">\n        <i class=\"fas fa-eye\"></i>\n      </a>\n    </div>\n    <div class=\"ml-auto\">\n      <a [routerLink]=\"['/user', userId]\" class=\"text-blue float-right\">\n        <i class=\"fas fa-user\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n"

    /***/ }),

  /***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
  /*!*******************************************************************!*\
   !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
   \*******************************************************************/
  /*! exports provided: WidgetListComponent */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
    /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




    var WidgetListComponent = /** @class */ (function () {
      function WidgetListComponent(widgetService, route) {
        this.widgetService = widgetService;
        this.route = route;
      }
      WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
          .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.pageId = params['pid'];
          });
        this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
      };
      WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
          selector: 'app-widget-list',
          template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
          styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
      ], WidgetListComponent);
      return WidgetListComponent;
    }());



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
    var environment = {
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
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
    /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
    /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
      .catch(function (err) { return console.error(err); });


    /***/ }),

  /***/ 0:
  /*!***************************!*\
   !*** multi ./src/main.ts ***!
   \***************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {

    module.exports = __webpack_require__(/*! /Users/stevenxi/Documents/CS5610/my-project/src/main.ts */"./src/main.ts");


    /***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
