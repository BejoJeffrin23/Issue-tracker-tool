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

/***/ "./node_modules/raw-loader/index.js!./src/app/User/log-in/log-in.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/User/log-in/log-in.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar navbar-expand-md navbar-light\" style=\"background-color: aqua\">\n\n    <a class=\"navbar-brand\" href=\"/\" style=\"color: black\"><img src=\"assets/logo.png\" class=\"logo\"><b>ISSUE\n        TRACKER</b></a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n      <ul class=\"navbar-nav\">\n\n        <li class=\"nav-item\">\n\n          <a class=\"nav-link\" (click)=\"goToSignUp()\" style=\"color: gray\">\n            <h5>Sign-Up</h5>\n          </a>\n\n        </li>\n\n      </ul>\n\n    </div>\n\n  </nav>\n\n  <div class=\"row p-0 m-0 \" style=\"background-image: url('assets/pic.jpeg');height:100vh;\">\n\n    <div class=\"col-sm\"></div>\n\n\n    <div class=\"col-sm p-5 sides\">\n\n      <h2 style=\"color: aqua;text-align: center\">Please Log in</h2>\n\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required\n        autofocus>\n\n      <br>\n\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\"\n        required>\n\n      <br>\n\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signinFunction()\">Log in</button>\n\n    </div>\n\n    <div class=\"col-sm\"></div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/User/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/User/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light \" style=\"background-color: aqua\">\n\n  <a class=\"navbar-brand\" href=\"/\" style=\"color: black\"><img src=\"assets/logo.png\" class=\"logo\"><b>ISSUE TRACKER</b></a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link\" (click)=\"goToLogin()\" style=\"color: grey\">\n          <h5> Log-In</h5>\n        </a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<div class=\"row p-0 m-0 im \" style=\"background-image: url('assets/pic.jpeg');height:100%;\">\n\n  <div class=\"col-sm\"></div>\n  <div class=\"sides\">\n\n    <div class=\"col-sm p-5\">\n\n      <h2 class=\"heading\">Sign-up to track your issues</h2>\n\n      <br>\n\n      <span>FirstName: </span>\n\n      <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n\n      <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"First Name\"\n        required autofocus>\n\n      <br>\n\n      <span>LastName: </span>\n\n      <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n\n      <input type=\"text\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"Last Name\"\n        required>\n\n      <br>\n\n      <span>Mobile: </span>\n\n      <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n\n      <input type=\"number\" id=\"inputMobile\" class=\"form-control\" [(ngModel)]=\"mobileNumber\" placeholder=\"Mobile number\"\n        required>\n\n      <br>\n\n      <span>Email: </span>\n\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required>\n\n      <br>\n\n      <span>Password: </span>\n\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\"\n        required>\n\n      <br>\n\n\n\n\n\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n      <h4>or</h4>\n      <button class=\"btn btn-lg btn-primary btn-block google\" (click)=\"socialSignIn('google')\"><img\n          src=\"assets/google.png\" class=\"logo\">Sign in with Google</button>\n\n    </div>\n\n\n  </div>\n\n  <div class=\"col-sm\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/assigned-issue/assigned-issue.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/assigned-issue/assigned-issue.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: black;height: 130vh;\">\n  <nav class=\"navbar navbar-expand-lg navbar-light \" id=\"home\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/logo.png\" class=\"logo\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"('/reported')\" style=\"font-size: 1.2em\">My Issues <span\n              class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"('/home')\" style=\"font-size: 1.2em\">All Issues </a>\n        </li>\n        <li class=\"nav-item active \">\n          <button class=\"btn btn-outline-success my-2 my-sm-0 blue gap\" type=\"submit\" [routerLink]=\"('/create')\">Add\n            Issue</button>\n        </li>\n\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" name=\"key\"\n            [(ngModel)]=\"key\">\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n      </ul>\n      <button class=\"btn btn-outline-success my-2 my-sm-0 blue\" type=\"submit\" (click)=\"logout()\">LogOut</button>\n    </div>\n  </nav>\n  <br>\n\n  <div *ngIf=\"array.length==0\"\n    style=\"background-image: url(assets/image2.jpg);background-repeat: no-repeat;height:100vh;background-position: center\">\n    <h1 style=\"color: blanchedalmond;text-align: center\">No IssUes AssiGned to {{fullName}}...<br>Enjoy The Day</h1>\n\n  </div>\n\n  <table class=\"table table-striped table-bordered table-dark table-hover\" *ngIf=\"array.length>0\">\n    <thead>\n      <tr>\n        <th class=\"font\">Title <img src=\"assets/arrowup.png\" class=\"arrow\" (click)=\"ta()\"> <img\n            src=\"assets/arrowdown.png\" class=\"arrow\" (click)=\"td()\"></th>\n        <th class=\"font\">Status <img src=\"assets/arrowup.png\" class=\"arrow\" (click)=\"sa()\"> <img\n            src=\"assets/arrowdown.png\" class=\"arrow\" (click)=\"sd()\"></th>\n        <th class=\"font\">Reporter <img src=\"assets/arrowup.png\" class=\"arrow\" (click)=\"ra()\"> <img\n            src=\"assets/arrowdown.png\" class=\"arrow\" (click)=\"rd()\"></th>\n        <th class=\"font\">Date <img src=\"assets/arrowup.png\" class=\"arrow\" (click)=\"ca()\"> <img\n            src=\"assets/arrowdown.png\" class=\"arrow\" (click)=\"cd()\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr\n        *ngFor=\"let x of array |search:'issueTitle,reporterName,status,createdOn': key| paginate: { itemsPerPage: count, currentPage: p }\"\n        [ngStyle]=\"{'background-color':setColor(x.status)}\" routerLink=\"/{{x.issueId}}/view\">\n\n        <td class=\"font\" style=\"width: 30%\">{{x.issueTitle}}</td>\n        <td class=\"font\" style=\"width: 20%\">{{x.status}}</td>\n        <td class=\"font\" style=\"width: 30%\">{{x.reporterName}}</td>\n        <td class=\"font\" style=\"width: 20%\">{{x.createdOn | date:'dd/MM/yyyy'}}</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"controller\" *ngIf=\"array.length>0\">\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-issue/create-issue.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-issue/create-issue.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:mistyrose\">\n  <nav class=\"navbar navbar-expand-lg navbar-light \" id=\"home\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/logo.png\" class=\"logo\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"('/assign')\" style=\"font-size: 1.2em\">Dash board <span\n              class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"('/reported')\" style=\"font-size: 1.2em\">My Issues </a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"('/home')\" style=\"font-size: 1.2em\">All Issues </a>\n        </li>\n      </ul>\n      <button class=\"btn btn-outline-success my-2 my-sm-0 blue\" type=\"submit\" (click)=\"logout()\">LogOut</button>\n    </div>\n  </nav>\n  <br>\n  <div class=\"col-12 text-center heading\">\n    <h2 class=\"title\">Create new Issue</h2>\n\n  </div>\n  <form #createIssueForm=\"ngForm\" (ngSubmit)=\"Upload()\" enctype=\"multipart/form-data\">\n\n    <div class=\"form-group box \">\n\n      <label class=\"tt\">Issue Title</label>\n      <input style=\"background-color:rgb(182, 228, 255)\" [(ngModel)]=\"title\" #Title=\"ngModel\" type=\"Title\"\n        class=\"form-control input-box validate \" [ngModelOptions]=\"{standalone: true}\" required>\n\n    </div>\n\n    <div class=\"form-group box\">\n      <label class=\"tt\">Description</label>\n      <app-ngx-editor style=\"background-color:rgb(182, 228, 255)\" [placeholder]=\"'Enter description here...'\"\n        [config]=\"editorConfig\" [spellcheck]=\"true\" [(ngModel)]=\"description\" #issueDescription=\"ngModel\"\n        [ngModelOptions]=\"{standalone: true}\" class=\"descrip\"></app-ngx-editor>\n    </div>\n\n    <div class=\"form-group box\">\n      <label class=\"tt\">Image</label>\n      <input type=\"file\" (change)=\"Selected($event)\">\n      <div style=\"background-color:rgb(182, 228, 255)\" [hidden]=\"!imagePreview\">\n        <img class=\"image\" src=\"{{imagePreview}}\">\n      </div>\n    </div>\n\n    <div class=\"form-group box\">\n      <label class=\"tt\">Status</label>\n      <select style=\"background-color:rgb(182, 228, 255)\" [(ngModel)]=\"status\"\n        class=\"custom-select form-control input-box\" [ngModelOptions]=\"{standalone: true}\" required>\n        <option selected>Choose...</option>\n        <option value=\"Backlog\">backlog</option>\n        <option value=\"In-progress\">in-progress</option>\n        <option value=\"In-test\">in-test</option>\n        <option value=\"Done\">done</option>\n      </select>\n\n    </div>\n\n\n    <div class=\"form-group box\">\n      <label class=\"tt\">Assignee</label>\n\n      <select style=\"background-color:rgb(182, 228, 255)\" [(ngModel)]=\"assignee\"\n        class=\"custom-select form-control input-box\" [ngModelOptions]=\"{standalone: true}\" required>\n        <option selected>Choose...</option>\n\n        <option *ngFor=\"let user of allusers\" value=\"{{user}}\">\n          <p>{{user}}</p>\n        </option>\n      </select>\n\n    </div>\n\n    <br>\n    <button type=\"submit\" class=\"btn btn-default btn-primary submit button\"\n      [disabled]=\"!createIssueForm.form.valid\">Create Issue</button>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-issue/edit-issue.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-issue/edit-issue.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:mistyrose\">\n  <nav class=\"navbar navbar-expand-lg navbar-light \" id=\"home\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/logo.png\" class=\"logo\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"('/assign')\" style=\"font-size: 1.2em\">Dash board <span\n              class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"('/reported')\" style=\"font-size: 1.2em\">My Issues </a>\n        </li>\n      </ul>\n      <button class=\"btn btn-outline-success my-2 my-sm-0 blue\" type=\"submit\" (click)=\"logout()\">LogOut</button>\n    </div>\n  </nav>\n  <br>\n  <div class=\"col-12 text-center heading\">\n    <h2 class=\"title\">Edit Issue</h2>\n\n  </div>\n  <form #editIssueForm=\"ngForm\" (ngSubmit)=\"editIssue()\" enctype=\"multipart/form-data\">\n\n    <div class=\"form-group box\">\n\n      <label class=\"tt\">Issue Title</label>\n      <input style=\"background-color:rgb(182, 228, 255)\" class=\"form-control input-box validate\"\n        [(ngModel)]=\"issued.issueTitle\" [ngModelOptions]=\"{standalone: true}\" required>\n\n    </div>\n\n    <div class=\"form-group box\">\n      <label class=\"tt\">Description</label>\n      <app-ngx-editor style=\"background-color:rgb(182, 228, 255)\" [placeholder]=\"'Enter description here...'\"\n        [config]=\"editorConfig\" [spellcheck]=\"true\" [(ngModel)]=\"issued.description\" #issueDescription=\"ngModel\"\n        [ngModelOptions]=\"{standalone: true}\" class=\"descrip\"></app-ngx-editor>\n    </div>\n\n    <div class=\"form-group box\">\n      <label class=\"tt\">Image</label>\n      <input type=\"file\" (change)=\"Selected($event)\">\n      <div style=\"background-color:rgb(182, 228, 255)\" [hidden]=\"!imagePreview\">\n        <img class=\"image\" src=\"{{imagePreview}}\">\n      </div>\n      <div style=\"background-color:rgb(182, 228, 255)\" [hidden]=\"imagePreview\">\n        <img class=\"image\" src=\"http://13.232.157.131:4001/{{issued.productImage}}\">\n      </div>\n    </div>\n\n    <div class=\"form-group box\">\n      <label class=\"tt\">Status</label>\n      <select style=\"background-color:rgb(182, 228, 255)\" [(ngModel)]=\"issued.status\"\n        class=\"custom-select form-control input-box\" [ngModelOptions]=\"{standalone: true}\" required>\n        <option selected>Choose...</option>\n        <option value=\"Backlog\">backlog</option>\n        <option value=\"In-progress\">in-progress</option>\n        <option value=\"In-test\">in-test</option>\n        <option value=\"Done\">done</option>\n      </select>\n\n    </div>\n\n\n    <div class=\"form-group box\">\n      <label class=\"tt\">Assignee</label>\n\n      <select style=\"background-color:rgb(182, 228, 255)\" [(ngModel)]=\"issued.assignee\"\n        class=\"custom-select form-control input-box\" [ngModelOptions]=\"{standalone: true}\" required>\n        <option selected>Choose...</option>\n\n        <option *ngFor=\"let user of allusers\" value=\"{{user}}\">\n          <p>{{user}}</p>\n        </option>\n      </select>\n\n    </div>\n\n    <br>\n    <button type=\"submit\" class=\"btn btn-default btn-primary submit button\" [disabled]=\"!editIssueForm.form.valid\">Edit\n      Issue</button>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: black;height:102vh\">\n  <nav class=\"navbar navbar-expand-lg navbar-light \" id=\"home\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/logo.png\" class=\"logo\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"('/assign')\" style=\"font-size: 1.2em\">Dash board <span\n              class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"('/reported')\" style=\"font-size: 1.2em\">My Issues </a>\n        </li>\n        <li class=\"nav-item active \">\n          <button class=\"btn btn-outline-success my-2 my-sm-0 blue gap\" type=\"submit\" [routerLink]=\"('/create')\">Add\n            Issue</button>\n        </li>\n\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" name=\"key\"\n            [(ngModel)]=\"key\">\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n      </ul>\n      <button class=\"btn btn-outline-success my-2 my-sm-0 blue\" type=\"submit\" (click)=\"logout()\">LogOut</button>\n    </div>\n  </nav>\n  <br>\n\n  <table class=\"table table-striped table-bordered table-dark table-hover\" style=\"width: 100%\">\n    <thead>\n      <tr>\n        <th class=\"font\" style=\"width: 30%\">Title <img src=\"assets/arrowup.png\" class=\"arrow\" (click)=\"ta()\"> <img\n            src=\"assets/arrowdown.png\" class=\"arrow\" (click)=\"td()\"></th>\n        <th class=\"font\" style=\"width: 20%\">Status <img src=\"assets/arrowup.png\" class=\"arrow\" (click)=\"sa()\"> <img\n            src=\"assets/arrowdown.png\" class=\"arrow\" (click)=\"sd()\"></th>\n        <th class=\"font\" style=\"width: 30%\">Reporter <img src=\"assets/arrowup.png\" class=\"arrow\" (click)=\"ra()\"> <img\n            src=\"assets/arrowdown.png\" class=\"arrow\" (click)=\"rd()\"></th>\n        <th class=\"font\" style=\"width: 20%\">Date <img src=\"assets/arrowup.png\" class=\"arrow\" (click)=\"ca()\"> <img\n            src=\"assets/arrowdown.png\" class=\"arrow\" (click)=\"cd()\"></th>\n      </tr>\n    </thead>\n    <tbody\n      *ngFor=\"let x of details |search:'issueTitle,reporterName,status,createdOn': key| paginate: { itemsPerPage: count, currentPage: p }\">\n      <tr routerLink=\"/{{x.issueId}}/view\" [ngStyle]=\"{'background-color':setColor(x.status)}\">\n        <td class=\"font\" style=\"width: 30%\">{{x.issueTitle}}</td>\n        <td class=\"font\" style=\"width: 20%\">{{x.status}}</td>\n        <td class=\"font\" style=\"width: 30%\">{{x.reporterName}}</td>\n        <td class=\"font\" style=\"width: 20%\">{{x.createdOn | date:'dd/MM/yyyy'}}</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"controller\">\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reported/reported.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reported/reported.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: black;height: 130vh;\">\n\n  <nav class=\"navbar navbar-expand-lg navbar-light \" id=\"home\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/logo.png\" class=\"logo\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"('/assign')\" style=\"font-size: 1.2em\">Dash board <span\n              class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"('/home')\" style=\"font-size: 1.2em\">All Issues</a>\n        </li>\n        <li class=\"nav-item active\">\n          <button class=\"btn btn-outline-success my-2 my-sm-0 blue gap\" type=\"submit\" [routerLink]=\"('/create')\">Add\n            Issue</button>\n        </li>\n\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" name=\"key\"\n            [(ngModel)]=\"key\">\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form>\n      </ul>\n      <button class=\"btn btn-outline-success my-2 my-sm-0 blue\" type=\"submit\" (click)=\"logout()\">LogOut</button>\n    </div>\n  </nav>\n  <br>\n  <div *ngIf=\"array.length==0\"\n    style=\"background-image: url(assets/image2.jpg);background-repeat: no-repeat;height:100vh;background-position: center\">\n    <h1 style=\"color: blanchedalmond;text-align: center\">No IssUes Reported by {{fullName}}...</h1>\n\n  </div>\n  <div *ngIf=\"array.length>0\">\n    <table class=\"table table-striped table-bordered table-dark table-hover\">\n      <thead>\n        <tr>\n          <th class=\"font\">Title <img src=\"assets/arrowup.png\" class=\"arrow\" (click)=\"ta()\"> <img\n              src=\"assets/arrowdown.png\" class=\"arrow\" (click)=\"td()\"></th>\n          <th class=\"font\">Status <img src=\"assets/arrowup.png\" class=\"arrow\" (click)=\"sa()\"> <img\n              src=\"assets/arrowdown.png\" class=\"arrow\" (click)=\"sd()\"></th>\n          <th class=\"font\">Reporter <img src=\"assets/arrowup.png\" class=\"arrow\" (click)=\"ra()\"> <img\n              src=\"assets/arrowdown.png\" class=\"arrow\" (click)=\"rd()\"></th>\n          <th class=\"font\">Date <img src=\"assets/arrowup.png\" class=\"arrow\" (click)=\"ca()\"> <img\n              src=\"assets/arrowdown.png\" class=\"arrow\" (click)=\"cd()\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor=\"let x of array |search:'issueTitle,reporterName,status,createdOn': key| paginate: { itemsPerPage: count, currentPage: p }\"\n          [ngStyle]=\"{'background-color':setColor(x.status)}\" routerLink=\"/{{x.issueId}}/view\">\n          <td class=\"font\" style=\"width: 30%\">{{x.issueTitle}}</td>\n          <td class=\"font\" style=\"width: 20%\">{{x.status}}</td>\n          <td class=\"font\" style=\"width: 30%\">{{x.reporterName}}</td>\n          <td class=\"font\" style=\"width: 20%\">{{x.createdOn | date:'dd/MM/yyyy'}}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"controller\">\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view-issue/view-issue.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-issue/view-issue.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:black;height: 100%; \">\n  <nav class=\"navbar navbar-expand-lg navbar-light \" id=\"home\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/logo.png\" class=\"logo\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"('/assign')\" style=\"font-size: 1.2em\">Dash board <span\n              class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"('/reported')\" style=\"font-size: 1.2em\">My Issues </a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"('/home')\" style=\"font-size: 1.2em\">All Issues </a>\n        </li>\n        <li class=\"nav-item active \">\n          <button class=\"btn btn-outline-success my-2 my-sm-0 blue gap\" type=\"submit\" [routerLink]=\"('/create')\">Add\n            Issue</button>\n        </li>\n\n\n      </ul>\n      <button class=\"btn btn-outline-success my-2 my-sm-0 blue\" type=\"submit\" (click)=\"logout()\">LogOut</button>\n    </div>\n  </nav>\n  <br>\n  <div style=\"text-align: center\">\n    <button class=\"edit\" (click)=\"edit()\">Edit Issue</button>\n    <button class=\"delete\" (click)=\"delete()\">Delete Issue</button>\n    <button class=\"watch\" (click)=\"watch()\">+Watch list</button>\n\n  </div>\n  <div class=\"container\">\n\n    <ul class=\"list-group \">\n      <label>\n        <h4 class=\"bl\">Issue Title</h4>\n      </label>\n      <li class=\"list-group-item center\" style=\"background-color:rgb(182, 228, 255)\">\n        <h5>{{issued.issueTitle}}</h5>\n      </li>\n      <label>\n        <h4 class=\"bl\">Reporter Name</h4>\n      </label>\n      <li class=\"list-group-item\" style=\"background-color:rgb(182, 228, 255)\">\n        <h5>{{issued.reporterName}}</h5>\n      </li>\n      <label>\n        <h4 class=\"bl\">Description</h4>\n      </label>\n      <li class=\"list-group-item\" style=\"background-color:rgb(182, 228, 255)\">\n        <h5 [innerHtml]=\"issued.description\"></h5>\n      </li>\n      <label>\n        <h4 class=\"bl\">Image</h4>\n      </label>\n      <li class=\"list-group-item\" style=\"background-color:rgb(182, 228, 255)\"><img class=\"image\"\n          src=\"http://13.232.157.131:4001/{{issued.productImage}}\"></li>\n      <label>\n        <h4 class=\"bl\">Status</h4>\n      </label>\n      <li class=\"list-group-item\" style=\"background-color:rgb(182, 228, 255)\">\n        <h5>Status : {{issued.status}}</h5>\n      </li>\n      <label>\n        <h4 class=\"bl\">Assignee</h4>\n      </label>\n      <li class=\"list-group-item\" style=\"background-color:rgb(182, 228, 255)\">\n        <h5>Assignee : {{issued.assignee}}</h5>\n      </li>\n      <div>\n        <label>\n          <h4 class=\"bl\">Watchers</h4>\n        </label>\n        <span  *ngFor=\"let x of issued.watchers\" class=\"list-group-item\" style=\"background-color:rgb(182, 228, 255)\">\n          <h5>{{x.watcher}}</h5>\n        </span>\n      </div>\n    </ul>\n    <br>\n\n    <div *ngFor=\"let Comment of issued.comments\">\n      <div>\n        <label>\n          <h4 class=\"bl\">Comments</h4>\n        </label>\n        <div style=\"border:1px solid #1cd3a2\">\n          <h5 style=\"color:#1cd3a2;margin-left:10vmin;margin-top:10px\"><b>{{Comment.name}}</b></h5>\n          <h6 style=\"color: gray;margin-left:11vmin\">{{Comment.date |  date}}</h6>\n          <h5 style=\"margin-left:12vmin;color:lavenderblush\"><b>{{Comment.comment}}</b></h5>\n          <br>\n        </div>\n\n        <br>\n      </div>\n    </div>\n\n    <div class=\"form-group \">\n\n      <label class=\"tt\">\n        <h4 class=\"bl\">Comment box</h4>\n      </label>\n      <input style=\"background-color:rgb(182, 228, 255)\" class=\"form-control input-box validate box\"\n        [(ngModel)]=\"comment\" [ngModelOptions]=\"{standalone: true}\" required>\n      <button class=\"comment\" (click)=\"Comment()\">comment</button>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/Pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/Pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (data, values, input) {
        if (!input)
            return data;
        return data.filter(function (item) { return values.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(input, 'gi').test(item[key]); }); });
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/User/log-in/log-in.component.css":
/*!**************************************************!*\
  !*** ./src/app/User/log-in/log-in.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sides{\r\n    border: 2px solid aqua;\r\n    margin-top: 8px;\r\n    border-radius: 10px;\r\n    height: 60vh;\r\n}\r\n\r\n.logo{\r\n    height: 3.8vmax;\r\n    width: 4.5vmax;\r\n    padding: auto;\r\n    margin-top: 0;\r\n    padding-right: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlci9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL1VzZXIvbG9nLWluL2xvZy1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVze1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYXF1YTtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gICAgaGVpZ2h0OiAzLjh2bWF4O1xyXG4gICAgd2lkdGg6IDQuNXZtYXg7XHJcbiAgICBwYWRkaW5nOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/User/log-in/log-in.component.ts":
/*!*************************************************!*\
  !*** ./src/app/User/log-in/log-in.component.ts ***!
  \*************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");







var LogInComponent = /** @class */ (function () {
    function LogInComponent(appService, router, toastr, SocketService) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.SocketService = SocketService;
        this.userList = [];
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken');
        // Move to Sign-up page function
        this.goToSignUp = function () {
            _this.router.navigate(['/signup']);
        }; // end goToSignUp
        // Log-in function
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.signinFunction(data)
                    .subscribe(function (apiResponse) {
                    _this.toastr.success('Login success');
                    if (apiResponse.status === 200) {
                        _this.SocketService.verifyUser(apiResponse.data.authToken)
                            .subscribe(function (data) {
                            _this.disconnectedSocket = false;
                        });
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('userId', apiResponse.data.userDetails.userId);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('userName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.router.navigate(['/assign']);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.warning('enter correct password');
                });
            } // end condition
        }; // end Log-inFunction
    }
    LogInComponent.prototype.ngOnInit = function () {
    };
    LogInComponent.ctorParameters = function () { return [
        { type: _issue_service__WEBPACK_IMPORTED_MODULE_4__["IssueService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] }
    ]; };
    LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__(/*! raw-loader!./log-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/User/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.css */ "./src/app/User/log-in/log-in.component.css")]
        })
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/User/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/User/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\r\n    height: 3.8vmax;\r\n    width: 4.5vmax;\r\n    padding: auto;\r\n    margin-top: 0;\r\n    padding-right: 10px;\r\n}\r\n.google{\r\n    background-color: red;\r\n}\r\n.sides{\r\n    border: 2px solid aqua;\r\n    margin-top: 8px;\r\n    border-radius: 10px;\r\n}\r\nh4{\r\n    text-align: center\r\n}\r\n.heading{\r\n    color: aqua\r\n}\r\n   \r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSTtBQUNKO0FBR0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvVXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICAgIGhlaWdodDogMy44dm1heDtcclxuICAgIHdpZHRoOiA0LjV2bWF4O1xyXG4gICAgcGFkZGluZzogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5nb29nbGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG4uc2lkZXN7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBhcXVhO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5oNHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG5cclxuLmhlYWRpbmd7XHJcbiAgICBjb2xvcjogYXF1YVxyXG59XHJcbiAgIFxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/User/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/User/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__);







var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, socialAuthService, toastr, service) {
        var _this = this;
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.toastr = toastr;
        this.service = service;
        // function to move to log-in page
        this.goToLogin = function () {
            _this.router.navigate(['/login']);
        };
    }
    //end of move to log-in function
    //function for Social platform signin using Google account
    SignupComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            var name = userData.name.split(" ");
            var firstName = name[0];
            var possibleLastName = [];
            for (var i = 0; i < name.length; i++) {
                if (i !== 0) {
                    possibleLastName.push(name[i]);
                }
            }
            var lastName = possibleLastName.join(' ');
            var data = {
                firstName: firstName,
                lastName: lastName,
                email: userData.email
            };
            _this.service.Google(data).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.toastr.success('Signup successful');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('authtoken', apiResponse.data.authToken);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('userId', apiResponse.data.userDetails.userId);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('userName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                    _this.service.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                    _this.router.navigate(['/assign']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        });
    };
    //End of social platform signin function
    // Sign-up function
    SignupComponent.prototype.signupFunction = function () {
        var _this = this;
        if (!this.firstName) {
            this.toastr.warning('Enter your first name');
        }
        else if (!this.lastName) {
            this.toastr.warning('Enter your last name');
        }
        else if (!this.mobileNumber) {
            this.toastr.warning('mobileNumber is required');
        }
        else if (!this.email) {
            this.toastr.warning('Enter your email');
        }
        else if (!this.password) {
            this.toastr.warning('Enter the password');
        }
        else {
            var data = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                mobileNumber: this.mobileNumber,
            };
            this.service.signupFunction(data).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.toastr.success('Signup successful');
                    setTimeout(function () {
                        _this.goToLogin();
                    }, 2000);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        }
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angular_6_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _issue_service__WEBPACK_IMPORTED_MODULE_5__["IssueService"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/User/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/User/signup/signup.component.css")]
        })
    ], SignupComponent);
    return SignupComponent;
}());

// end of Sign-up function


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



var routes = [];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
        this.title = 'issue-track';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_User_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .././app/User/signup/signup.component */ "./src/app/User/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_User_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! .././app/User/log-in/log-in.component */ "./src/app/User/log-in/log-in.component.ts");
/* harmony import */ var _create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create-issue/create-issue.component */ "./src/app/create-issue/create-issue.component.ts");
/* harmony import */ var _Pipes_search_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Pipes/search.pipe */ "./src/app/Pipes/search.pipe.ts");
/* harmony import */ var _edit_issue_edit_issue_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./edit-issue/edit-issue.component */ "./src/app/edit-issue/edit-issue.component.ts");
/* harmony import */ var _view_issue_view_issue_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view-issue/view-issue.component */ "./src/app/view-issue/view-issue.component.ts");
/* harmony import */ var _assigned_issue_assigned_issue_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assigned-issue/assigned-issue.component */ "./src/app/assigned-issue/assigned-issue.component.ts");
/* harmony import */ var _reported_reported_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reported/reported.component */ "./src/app/reported/reported.component.ts");
/* harmony import */ var _issue_route_gaurd_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./issue-route-gaurd.service */ "./src/app/issue-route-gaurd.service.ts");























function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"]("591838160370-2d8vnf04agnber0nrjb26j6t5rr4f6hi.apps.googleusercontent.com")
        },
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _app_User_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _app_User_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_15__["LogInComponent"],
                _Pipes_search_pipe__WEBPACK_IMPORTED_MODULE_17__["SearchPipe"],
                _create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_16__["CreateIssueComponent"],
                _edit_issue_edit_issue_component__WEBPACK_IMPORTED_MODULE_18__["EditIssueComponent"],
                _view_issue_view_issue_component__WEBPACK_IMPORTED_MODULE_19__["ViewIssueComponent"],
                _assigned_issue_assigned_issue_component__WEBPACK_IMPORTED_MODULE_20__["AssignedIssueComponent"],
                _reported_reported_component__WEBPACK_IMPORTED_MODULE_21__["ReportedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({
                    preventDuplicates: true
                }),
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["SocialLoginModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([
                    { path: 'signup', component: _app_User_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"] },
                    { path: '', redirectTo: 'signup', pathMatch: 'full' },
                    { path: 'login', component: _app_User_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_15__["LogInComponent"] },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], canActivate: [_issue_route_gaurd_service__WEBPACK_IMPORTED_MODULE_22__["IssueRouteGaurdService"]] },
                    { path: 'create', component: _create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_16__["CreateIssueComponent"], canActivate: [_issue_route_gaurd_service__WEBPACK_IMPORTED_MODULE_22__["IssueRouteGaurdService"]] },
                    { path: ':id/edit', component: _edit_issue_edit_issue_component__WEBPACK_IMPORTED_MODULE_18__["EditIssueComponent"], canActivate: [_issue_route_gaurd_service__WEBPACK_IMPORTED_MODULE_22__["IssueRouteGaurdService"]] },
                    { path: ':id/view', component: _view_issue_view_issue_component__WEBPACK_IMPORTED_MODULE_19__["ViewIssueComponent"], canActivate: [_issue_route_gaurd_service__WEBPACK_IMPORTED_MODULE_22__["IssueRouteGaurdService"]] },
                    { path: 'assign', component: _assigned_issue_assigned_issue_component__WEBPACK_IMPORTED_MODULE_20__["AssignedIssueComponent"], canActivate: [_issue_route_gaurd_service__WEBPACK_IMPORTED_MODULE_22__["IssueRouteGaurdService"]] },
                    { path: 'reported', component: _reported_reported_component__WEBPACK_IMPORTED_MODULE_21__["ReportedComponent"], canActivate: [_issue_route_gaurd_service__WEBPACK_IMPORTED_MODULE_22__["IssueRouteGaurdService"]] }
                ])
            ],
            providers: [{ provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"], useFactory: getAuthServiceConfigs }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assigned-issue/assigned-issue.component.css":
/*!*************************************************************!*\
  !*** ./src/app/assigned-issue/assigned-issue.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home{\r\n    background-color:aqua;\r\n}\r\n.blue{\r\n    background-color: blue;\r\n    color: azure\r\n}\r\n.font{\r\n    font-size: 3.7vmin;\r\n    text-align: center;\r\n}\r\n.controller{\r\n    background-color: blue;\r\n    font-size: 3.7vmin;\r\n    width: 100%;\r\n    \r\n}\r\n.arrow{\r\n    height: 20px;\r\n    width: 3.5vmin;\r\n    border-radius: 30%;\r\n}\r\n.logo{\r\n    height: 3.8vmax;\r\n    width: 4.5vmax;\r\n    padding: auto;\r\n    margin-top: 0;\r\n    padding-right: 10px;\r\n}\r\n.gap{\r\n    border: 2px solid lightseagreen;\r\n    border-radius: 20%;\r\n    font-size: 1.2em;\r\n    margin-right: 40px;\r\n    margin-left: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWduZWQtaXNzdWUvYXNzaWduZWQtaXNzdWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCO0FBQ0o7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVzs7QUFFZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hc3NpZ25lZC1pc3N1ZS9hc3NpZ25lZC1pc3N1ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmFxdWE7XHJcbn1cclxuLmJsdWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgY29sb3I6IGF6dXJlXHJcbn1cclxuXHJcblxyXG4uZm9udHtcclxuICAgIGZvbnQtc2l6ZTogMy43dm1pbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRyb2xsZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiAzLjd2bWluO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxufVxyXG5cclxuLmFycm93e1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDMuNXZtaW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gICAgaGVpZ2h0OiAzLjh2bWF4O1xyXG4gICAgd2lkdGg6IDQuNXZtYXg7XHJcbiAgICBwYWRkaW5nOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmdhcHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/assigned-issue/assigned-issue.component.ts":
/*!************************************************************!*\
  !*** ./src/app/assigned-issue/assigned-issue.component.ts ***!
  \************************************************************/
/*! exports provided: AssignedIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedIssueComponent", function() { return AssignedIssueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");






var sortOn = __webpack_require__(/*! sort-on */ "./node_modules/sort-on/index.js");

var AssignedIssueComponent = /** @class */ (function () {
    function AssignedIssueComponent(SocketService, Service, toastr, router) {
        var _this = this;
        this.SocketService = SocketService;
        this.Service = Service;
        this.toastr = toastr;
        this.router = router;
        this.userList = [];
        this.fullName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get("userName");
        this.array = [];
        this.p = 1;
        this.count = 7;
        this.sortOrder = false;
        //function to get assigned issues
        this.assigned = function () {
            _this.Service.dashboard().subscribe(function (data) {
                var e_1, _a;
                _this.details = data["data"];
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.details), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var issue = _c.value;
                        if (_this.fullName == issue.assignee) {
                            _this.array.push(issue);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        };
        // end of assigned issues function
        // Log out function
        this.logout = function () {
            _this.Service.logout().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.SocketService.disconnect();
                    _this.SocketService.exitSocket();
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('userName');
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('Internal Server Error occured');
            });
        };
        // end of log-out function
        //function to sort items
        this.sa = function () {
            _this.array = sortOn(_this.array, ['status']);
        };
        this.sd = function () {
            _this.array = sortOn(_this.array, ['-status']);
        };
        this.ta = function () {
            _this.array = sortOn(_this.array, ['issueTitle']);
        };
        this.td = function () {
            _this.array = sortOn(_this.array, ['-issueTitle']);
        };
        this.ra = function () {
            _this.array = sortOn(_this.array, ['reporterName']);
        };
        this.rd = function () {
            _this.array = sortOn(_this.array, ['-reporterName']);
        };
        this.ca = function () {
            _this.array = sortOn(_this.array, ['createdOn']);
        };
        this.cd = function () {
            _this.array = sortOn(_this.array, ['-createdOn']);
        };
        //end of set color function
        //socket function to notify comments
        this.commentnotify = function () {
            _this.SocketService.commentNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has commented his issue");
                }
                else {
                    _this.toastr.success(" " + data.name + " has commented on " + data.reporter + "s issue");
                }
            });
        };
        //socket function to notify adding watchers
        this.watchnotify = function () {
            _this.SocketService.watchNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has added himself as watcher");
                }
                else {
                    _this.toastr.success(" " + data.name + " has added himself as watcher in  " + data.reporter + "s issue");
                }
            });
        };
        //socket function to notify adding issues
        this.issuenotify = function () {
            _this.SocketService.issueNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has edited his issue");
                }
                else {
                    _this.toastr.success(" " + data.name + " has edited " + data.reporter + "s issue");
                }
            });
        };
        this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get("userId");
        this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get("userName");
    }
    AssignedIssueComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get("authtoken");
        this.userInfo = this.Service.getUserInfoInLocalStorage();
        this.assigned();
        this.commentnotify();
        this.issuenotify();
        this.watchnotify();
    };
    // end of sort item function
    //function to set color to issue based on status
    AssignedIssueComponent.prototype.setColor = function (status) {
        switch (status) {
            case 'Done':
                return "LawnGreen";
            case 'In-test':
                return "LightSkyBlue";
            case 'In-progress':
                return "LightGreen";
            case 'Backlog':
                return 'LightCoral';
        }
    };
    AssignedIssueComponent.ctorParameters = function () { return [
        { type: _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] },
        { type: _issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AssignedIssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assigned-issue',
            template: __webpack_require__(/*! raw-loader!./assigned-issue.component.html */ "./node_modules/raw-loader/index.js!./src/app/assigned-issue/assigned-issue.component.html"),
            styles: [__webpack_require__(/*! ./assigned-issue.component.css */ "./src/app/assigned-issue/assigned-issue.component.css")]
        })
    ], AssignedIssueComponent);
    return AssignedIssueComponent;
}());



/***/ }),

/***/ "./src/app/create-issue/create-issue.component.css":
/*!*********************************************************!*\
  !*** ./src/app/create-issue/create-issue.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\r\n\r\n\r\n#home{\r\n    background-color:aqua;\r\n}\r\n\r\n\r\n.blue{\r\n    background-color: blue;\r\n    color: azure\r\n}\r\n\r\n\r\napp-ngx-editor[placeholder]{\r\n\r\n    color:blueviolet;\r\n     height:100vh;\r\n }\r\n\r\n\r\n.box{\r\n     margin-left:5vmin;\r\n     width: auto;\r\n     margin-right:5vmin; \r\n }\r\n\r\n\r\n.button{\r\n     margin-left:40px;\r\n     margin-bottom:90px;\r\n     background-color: blue;\r\n }\r\n\r\n\r\n.image{\r\n     height: 50vmin;\r\n     width:80vmin;\r\n }\r\n\r\n\r\n.logo{\r\n    height: 3.8vmax;\r\n    width: 4.5vmax;\r\n    padding: auto;\r\n    margin-top: 0;\r\n    padding-right: 10px;}\r\n\r\n\r\n.tt{\r\n    color:blue;\r\n    font-weight:bolder;\r\n    font-size: 1.2em\r\n   }\r\n\r\n\r\n.heading{\r\n       border: 2px solid blue;\r\n       background-color: blueviolet\r\n      \r\n   }\r\n\r\n\r\n.border{\r\n       border: 2px solid aqua\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWlzc3VlL2NyZWF0ZS1pc3N1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBGQUEwRjs7O0FBRzFGO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QjtBQUNKOzs7QUFDQTs7SUFFSSxnQkFBZ0I7S0FDZixZQUFZO0NBQ2hCOzs7QUFDQTtLQUNJLGlCQUFpQjtLQUNqQixXQUFXO0tBQ1gsa0JBQWtCO0NBQ3RCOzs7QUFFQTtLQUNJLGdCQUFnQjtLQUNoQixrQkFBa0I7S0FDbEIsc0JBQXNCO0NBQzFCOzs7QUFFQTtLQUNJLGNBQWM7S0FDZCxZQUFZO0NBQ2hCOzs7QUFDQTtJQUNHLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUIsQ0FBQzs7O0FBRXJCO0lBQ0MsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQjtHQUNEOzs7QUFFQTtPQUNJLHNCQUFzQjtPQUN0Qjs7R0FFSjs7O0FBQ0E7T0FDSTtHQUNKIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLWlzc3VlL2NyZWF0ZS1pc3N1ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIik7XHJcblxyXG5cclxuI2hvbWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmFxdWE7XHJcbn1cclxuLmJsdWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgY29sb3I6IGF6dXJlXHJcbn1cclxuYXBwLW5neC1lZGl0b3JbcGxhY2Vob2xkZXJde1xyXG5cclxuICAgIGNvbG9yOmJsdWV2aW9sZXQ7XHJcbiAgICAgaGVpZ2h0OjEwMHZoO1xyXG4gfVxyXG4gLmJveHtcclxuICAgICBtYXJnaW4tbGVmdDo1dm1pbjtcclxuICAgICB3aWR0aDogYXV0bztcclxuICAgICBtYXJnaW4tcmlnaHQ6NXZtaW47IFxyXG4gfVxyXG5cclxuIC5idXR0b257XHJcbiAgICAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOjkwcHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuIH1cclxuXHJcbiAuaW1hZ2V7XHJcbiAgICAgaGVpZ2h0OiA1MHZtaW47XHJcbiAgICAgd2lkdGg6ODB2bWluO1xyXG4gfVxyXG4gLmxvZ297XHJcbiAgICBoZWlnaHQ6IDMuOHZtYXg7XHJcbiAgICB3aWR0aDogNC41dm1heDtcclxuICAgIHBhZGRpbmc6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDt9XHJcblxyXG4gICAudHR7XHJcbiAgICBjb2xvcjpibHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbVxyXG4gICB9XHJcblxyXG4gICAuaGVhZGluZ3tcclxuICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0XHJcbiAgICAgIFxyXG4gICB9XHJcbiAgIC5ib3JkZXJ7XHJcbiAgICAgICBib3JkZXI6IDJweCBzb2xpZCBhcXVhXHJcbiAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/create-issue/create-issue.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-issue/create-issue.component.ts ***!
  \********************************************************/
/*! exports provided: CreateIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIssueComponent", function() { return CreateIssueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");








var CreateIssueComponent = /** @class */ (function () {
    function CreateIssueComponent(socket, toastr, router, http, service) {
        var _this = this;
        this.socket = socket;
        this.toastr = toastr;
        this.router = router;
        this.http = http;
        this.service = service;
        this.allusers = [];
        this.editorConfig = {
            "editable": true,
            "spellcheck": true,
            "height": "25vmin",
            "minHeight": "0",
            "width": "auto",
            "minWidth": "0",
            "translate": "yes",
            "enableToolbar": true,
            "showToolbar": true,
            "imageEndPoint": this.file,
            "toolbar": [
                ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
                ["fontName", "fontSize", "color"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
                ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
                ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"]
            ]
        };
        //function to get list of all users registered
        this.allUsers = function () {
            _this.service.allUser().subscribe(function (apiResponse) {
                var e_1, _a;
                _this.users = apiResponse.data;
                _this.allusers = [];
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.users), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var user = _c.value;
                        if (user.firstName + " " + user.lastName != ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("userName")) {
                            var name_1 = user.firstName + " " + user.lastName;
                            _this.allusers.push(name_1);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        };
        //log out function
        this.logout = function () {
            _this.service.logout().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('userName');
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('Internal Server Error occured');
            });
        };
        //socket function to notify comments
        this.commentnotify = function () {
            _this.socket.commentNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has commented his issue");
                }
                else {
                    _this.toastr.success(" " + data.name + " has commented on " + data.reporter + "s issue");
                }
            });
        };
        //socket function to notify adding watchers
        this.watchnotify = function () {
            _this.socket.watchNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has added himself as watcher");
                }
                else {
                    _this.toastr.success(" " + data.name + " has added himself as watcher in  " + data.reporter + "s issue");
                }
            });
        };
        //socket function to notify adding issues
        this.issuenotify = function () {
            _this.socket.issueNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has edited his issue");
                }
                else {
                    _this.toastr.success(" " + data.name + " has edited " + data.reporter + "s issue");
                }
            });
        };
    }
    CreateIssueComponent.prototype.ngOnInit = function () {
        this.allUsers();
        this.watchnotify();
        this.issuenotify();
        this.commentnotify();
    };
    //function to select and preview image
    CreateIssueComponent.prototype.Selected = function (event) {
        var _this = this;
        this.file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result.toString();
        };
        reader.readAsDataURL(this.file);
    };
    //function to Create issue
    CreateIssueComponent.prototype.Upload = function () {
        var _this = this;
        if (!this.title) {
            this.toastr.warning('enter title of the issue');
        }
        else if (!this.file) {
            this.toastr.warning('please select the image of issue');
        }
        else if (!this.description) {
            this.toastr.warning('type the description of the issue');
        }
        else if (!this.status) {
            this.toastr.warning('Please select the status of the issue');
        }
        else if (!this.assignee) {
            this.toastr.warning('Please select the assignee of the issue');
        }
        else {
            var data = {
                title: this.title,
                description: this.description,
                status: this.status,
                image: this.file,
                name: this.file.name,
                reporterName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("userName"),
                assignee: this.assignee
            };
            this.service.Upload(data).subscribe(function (Data) {
                var Issuedata = Data['data'];
                _this.toastr.success("Issue created successfully");
                setTimeout(function () {
                    _this.router.navigate([Issuedata.issueId + "/view"]);
                }, 1000);
            });
        }
    };
    CreateIssueComponent.ctorParameters = function () { return [
        { type: _socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _issue_service__WEBPACK_IMPORTED_MODULE_5__["IssueService"] }
    ]; };
    CreateIssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-issue',
            template: __webpack_require__(/*! raw-loader!./create-issue.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-issue/create-issue.component.html"),
            styles: [__webpack_require__(/*! ./create-issue.component.css */ "./src/app/create-issue/create-issue.component.css")]
        })
    ], CreateIssueComponent);
    return CreateIssueComponent;
}());



/***/ }),

/***/ "./src/app/edit-issue/edit-issue.component.css":
/*!*****************************************************!*\
  !*** ./src/app/edit-issue/edit-issue.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\r\n\r\n\r\n#home{\r\n    background-color:aqua;\r\n}\r\n\r\n\r\n.blue{\r\n    background-color: blue;\r\n    color: azure\r\n}\r\n\r\n\r\napp-ngx-editor[placeholder]{\r\n\r\n    color:blueviolet;\r\n     height:100vh;\r\n }\r\n\r\n\r\n.box{\r\n     margin-left:5vmin;\r\n     width: auto;\r\n     margin-right:5vmin; \r\n }\r\n\r\n\r\n.button{\r\n     margin-left:40px;\r\n     margin-bottom:90px;\r\n     background-color: blue;\r\n }\r\n\r\n\r\n.image{\r\n     height: 50vmin;\r\n     width:70vmin;\r\n }\r\n\r\n\r\n.logo{\r\n    height: 3.8vmax;\r\n    width: 4.5vmax;\r\n    padding: auto;\r\n    margin-top: 0;\r\n    padding-right: 10px;}\r\n\r\n\r\n.tt{\r\n    color:blue;\r\n    font-weight:bolder;\r\n    font-size: 1.2em\r\n   }\r\n\r\n\r\n.heading{\r\n       border: 2px solid blue;\r\n       background-color: blueviolet\r\n      \r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1pc3N1ZS9lZGl0LWlzc3VlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZBQTBGOzs7QUFHMUY7SUFDSSxxQkFBcUI7QUFDekI7OztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCO0FBQ0o7OztBQUNBOztJQUVJLGdCQUFnQjtLQUNmLFlBQVk7Q0FDaEI7OztBQUNBO0tBQ0ksaUJBQWlCO0tBQ2pCLFdBQVc7S0FDWCxrQkFBa0I7Q0FDdEI7OztBQUVBO0tBQ0ksZ0JBQWdCO0tBQ2hCLGtCQUFrQjtLQUNsQixzQkFBc0I7Q0FDMUI7OztBQUVBO0tBQ0ksY0FBYztLQUNkLFlBQVk7Q0FDaEI7OztBQUNBO0lBQ0csZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQixDQUFDOzs7QUFFckI7SUFDQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCO0dBQ0Q7OztBQUVBO09BQ0ksc0JBQXNCO09BQ3RCOztHQUVKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1pc3N1ZS9lZGl0LWlzc3VlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiKTtcclxuXHJcblxyXG4jaG9tZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YXF1YTtcclxufVxyXG4uYmx1ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBjb2xvcjogYXp1cmVcclxufVxyXG5hcHAtbmd4LWVkaXRvcltwbGFjZWhvbGRlcl17XHJcblxyXG4gICAgY29sb3I6Ymx1ZXZpb2xldDtcclxuICAgICBoZWlnaHQ6MTAwdmg7XHJcbiB9XHJcbiAuYm94e1xyXG4gICAgIG1hcmdpbi1sZWZ0OjV2bWluO1xyXG4gICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgIG1hcmdpbi1yaWdodDo1dm1pbjsgXHJcbiB9XHJcblxyXG4gLmJ1dHRvbntcclxuICAgICBtYXJnaW4tbGVmdDo0MHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206OTBweDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gfVxyXG5cclxuIC5pbWFnZXtcclxuICAgICBoZWlnaHQ6IDUwdm1pbjtcclxuICAgICB3aWR0aDo3MHZtaW47XHJcbiB9XHJcbiAubG9nb3tcclxuICAgIGhlaWdodDogMy44dm1heDtcclxuICAgIHdpZHRoOiA0LjV2bWF4O1xyXG4gICAgcGFkZGluZzogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O31cclxuXHJcbiAgIC50dHtcclxuICAgIGNvbG9yOmJsdWU7XHJcbiAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDEuMmVtXHJcbiAgIH1cclxuXHJcbiAgIC5oZWFkaW5ne1xyXG4gICAgICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXRcclxuICAgICAgXHJcbiAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/edit-issue/edit-issue.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-issue/edit-issue.component.ts ***!
  \****************************************************/
/*! exports provided: EditIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIssueComponent", function() { return EditIssueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);







var EditIssueComponent = /** @class */ (function () {
    function EditIssueComponent(SocketService, toastr, Service, _route, router) {
        var _this = this;
        this.SocketService = SocketService;
        this.toastr = toastr;
        this.Service = Service;
        this._route = _route;
        this.router = router;
        this.editorConfig = {
            "editable": true,
            "spellcheck": true,
            "height": "25vmin",
            "minHeight": "0",
            "width": "auto",
            "minWidth": "0",
            "translate": "yes",
            "enableToolbar": true,
            "showToolbar": true,
            "placeholder": "Enter text here...",
            "imageEndPoint": "",
            "toolbar": [
                ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
                ["fontName", "fontSize", "color"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
                ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
                ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"]
            ]
        };
        this.allusers = [];
        //function to get list of name of all users
        this.allUsers = function () {
            _this.Service.allUser().subscribe(function (apiResponse) {
                var e_1, _a;
                _this.users = apiResponse.data;
                _this.allusers = [];
                try {
                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.users), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var user = _c.value;
                        var name_1 = user.firstName + " " + user.lastName;
                        _this.allusers.push(name_1);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        };
        //socket function to notify adding watchers
        this.watchnotify = function () {
            _this.SocketService.watchNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has added himself as watcher");
                }
                else {
                    _this.toastr.success(" " + data.name + " has added himself as watcher in  " + data.reporter + "s issue");
                }
            });
        };
        //socket function to notify issue edited event
        this.issuenotify = function () {
            _this.SocketService.issueNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has edited his issue");
                }
                else {
                    _this.toastr.success(" " + data.name + " has edited " + data.reporter + "s issue");
                }
            });
        };
        //socket function to notify comments
        this.commentnotify = function () {
            _this.SocketService.commentNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has commented his issue");
                }
                else {
                    _this.toastr.success(" " + data.name + " has commented on " + data.reporter + "s issue");
                }
            });
        };
        // Log out function
        this.logout = function () {
            _this.Service.logout().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.SocketService.disconnect();
                    _this.SocketService.exitSocket();
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('userName');
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('Internal Server Error occured');
            });
        };
    }
    EditIssueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allUsers();
        var issueId = this._route.snapshot.paramMap.get('id');
        this.issued = this.Service.getsingle(issueId).subscribe(function (data) {
            _this.issued = data['data'];
            // this.upload();
        });
        this.issuenotify();
        this.commentnotify();
        this.watchnotify();
    };
    EditIssueComponent.prototype.Selected = function (event) {
        var _this = this;
        this.file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result.toString();
        };
        reader.readAsDataURL(this.file);
    };
    //function to edit Issue
    EditIssueComponent.prototype.editIssue = function () {
        var _this = this;
        if (this.file) {
            this.issued.image = this.file;
            this.issued.name = this.file.name;
        }
        this.Service.edit(this.issued.issueId, this.issued).subscribe(function (data) {
            _this.toastr.success('blog posted', 'Success');
            //socket function to emit edit event
            _this.SocketService.issueUpdated(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userName'), _this.issued.reporterName);
            _this.issuenotify();
            setTimeout(function () {
                _this.router.navigate([_this.issued.issueId + "/view"]);
            }, 1000);
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    EditIssueComponent.ctorParameters = function () { return [
        { type: _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    EditIssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-issue',
            template: __webpack_require__(/*! raw-loader!./edit-issue.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-issue/edit-issue.component.html"),
            styles: [__webpack_require__(/*! ./edit-issue.component.css */ "./src/app/edit-issue/edit-issue.component.css")]
        })
    ], EditIssueComponent);
    return EditIssueComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home{\r\n    background-color:aqua;\r\n}\r\n.blue{\r\n    background-color: blue;\r\n    color: azure\r\n}\r\n.logo{\r\n    height: 3.8vmax;\r\n    width: 4.5vmax;\r\n    padding: auto;\r\n    margin-top: 0;\r\n    padding-right: 10px;\r\n}\r\n.font{\r\n    font-size: 3.7vmin;\r\n    text-align: center;\r\n}\r\n.controller{\r\n    background-color: blue;\r\n    font-size: 3.7vmin;\r\n    width: 100%;\r\n    \r\n}\r\n.arrow{\r\n    height: 20px;\r\n    width: 3.5vmin;\r\n    border-radius: 30%;\r\n}\r\n.gap{\r\n    border: 2px solid lightseagreen;\r\n    border-radius: 20%;\r\n    font-size: 1.2em;\r\n    margin-right: 40px;\r\n    margin-left: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QjtBQUNKO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7O0FBRWY7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YXF1YTtcclxufVxyXG4uYmx1ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBjb2xvcjogYXp1cmVcclxufVxyXG4ubG9nb3tcclxuICAgIGhlaWdodDogMy44dm1heDtcclxuICAgIHdpZHRoOiA0LjV2bWF4O1xyXG4gICAgcGFkZGluZzogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZm9udHtcclxuICAgIGZvbnQtc2l6ZTogMy43dm1pbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRyb2xsZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiAzLjd2bWluO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxufVxyXG5cclxuLmFycm93e1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDMuNXZtaW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbn1cclxuLmdhcHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .././issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");





var sortOn = __webpack_require__(/*! sort-on */ "./node_modules/sort-on/index.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent(socket, appService, toastr, router) {
        var _this = this;
        this.socket = socket;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.p = 1;
        this.count = 7;
        this.sortOrder = false;
        /*
        public search=(key)=>{
          let keyt:any;
        for(var i=0;i<this.details.length;i++){
          for(keyt in this.details[i]){
            
          if(this.details[i][keyt]===key){
           return this.details=[this.details[i]]
          }
        
        }}
        }
        */
        // function for sorting the issues
        this.sa = function () {
            _this.details = sortOn(_this.details, ['status']);
        };
        this.sd = function () {
            _this.details = sortOn(_this.details, ['-status']);
        };
        this.ta = function () {
            _this.details = sortOn(_this.details, ['issueTitle']);
        };
        this.td = function () {
            _this.details = sortOn(_this.details, ['-issueTitle']);
        };
        this.ra = function () {
            _this.details = sortOn(_this.details, ['reporterName']);
        };
        this.rd = function () {
            _this.details = sortOn(_this.details, ['-reporterName']);
        };
        this.ca = function () {
            _this.details = sortOn(_this.details, ['createdOn']);
        };
        this.cd = function () {
            _this.details = sortOn(_this.details, ['-createdOn']);
        };
        //end of set color function
        // log-out function
        this.logout = function () {
            _this.appService.logout().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('authtoken');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('userName');
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('Internal Server Error occured');
            });
        };
        // end of log out function
        //socket function to notify comments
        this.commentnotify = function () {
            _this.socket.commentNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has commented his issue");
                }
                else {
                    _this.toastr.success(" " + data.name + " has commented on " + data.reporter + "s issue");
                }
            });
        };
        //socket function to notify adding watchers
        this.watchnotify = function () {
            _this.socket.watchNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has added himself as watcher");
                }
                else {
                    _this.toastr.success(" " + data.name + " has added himself as watcher in  " + data.reporter + "s issue");
                }
            });
        };
        //socket function to notify adding issues
        this.issuenotify = function () {
            _this.socket.issueNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has edited his issue");
                }
                else {
                    _this.toastr.success(" " + data.name + " has edited " + data.reporter + "s issue");
                }
            });
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.dashboard().subscribe(function (data) {
            _this.details = data["data"];
        });
        this.commentnotify();
        this.watchnotify();
        this.issuenotify();
    };
    // end of sort function
    //Set color to issue based on status
    HomeComponent.prototype.setColor = function (status) {
        switch (status) {
            case 'Done':
                return "LawnGreen";
            case 'In-test':
                return "LightSkyBlue";
            case 'In-progress':
                return "LightGreen";
            case 'Backlog':
                return 'LightCoral';
        }
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] },
        { type: _issue_service__WEBPACK_IMPORTED_MODULE_5__["IssueService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/issue-route-gaurd.service.ts":
/*!**********************************************!*\
  !*** ./src/app/issue-route-gaurd.service.ts ***!
  \**********************************************/
/*! exports provided: IssueRouteGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueRouteGaurdService", function() { return IssueRouteGaurdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);




var IssueRouteGaurdService = /** @class */ (function () {
    function IssueRouteGaurdService(router) {
        this.router = router;
    }
    IssueRouteGaurdService.prototype.canActivate = function (route) {
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken') === null) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    IssueRouteGaurdService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    IssueRouteGaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], IssueRouteGaurdService);
    return IssueRouteGaurdService;
}());



/***/ }),

/***/ "./src/app/issue.service.ts":
/*!**********************************!*\
  !*** ./src/app/issue.service.ts ***!
  \**********************************/
/*! exports provided: IssueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueService", function() { return IssueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);





var IssueService = /** @class */ (function () {
    function IssueService(http) {
        this.http = http;
        this.url = '/api/v1/users';
        this.getUserInfoInLocalStorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        };
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    }
    IssueService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/login", params);
    }; // end of signinFunction function.
    IssueService.prototype.Google = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('email', data.email);
        return this.http.post(this.url + "/google", params);
    };
    IssueService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobileNumber)
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/signup", params);
    }; // end of signupFunction function.
    IssueService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('authtoken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/logout?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'), params);
    }; // end logout function
    IssueService.prototype.dashboard = function () {
        return this.http.get(this.url + "/issues");
    };
    IssueService.prototype.Upload = function (data) {
        var issueData = new FormData();
        issueData.append("issueTitle", data.title);
        issueData.append("description", data.description);
        issueData.append("status", data.status);
        issueData.append("productImage", data.image, data.name);
        issueData.append("reporterName", data.reporterName);
        issueData.append("assignee", data.assignee);
        return this.http.post(this.url + "/create", issueData);
    };
    IssueService.prototype.getsingle = function (issueId) {
        return this.http.get(this.url + "/" + issueId + "/getone", issueId);
    };
    IssueService.prototype.edit = function (issueId, data) {
        var formdata;
        var formData = new FormData();
        if (data.image) {
            formData.append("issueTitle", data.issueTitle);
            formData.append("description", data.description);
            formData.append("status", data.status);
            formData.append("productImage", data.image, data.name);
            formData.append("reporterName", data.reporterName);
            formData.append("assignee", data.assignee);
        }
        else if (!data.image) {
            formData.append("issueTitle", data.issueTitle);
            formData.append("description", data.description);
            formData.append("status", data.status);
            formData.append("productImage", data.productImage);
            formData.append("reporterName", data.reporterName);
            formData.append("assignee", data.assignee);
        }
        return this.http.put(this.url + "/" + issueId + "/edit", formData || formdata);
    };
    IssueService.prototype.allUser = function () {
        return this.http.get(this.url + "/allUsers");
    };
    IssueService.prototype.delete = function (issueId) {
        return this.http.post(this.url + "/" + issueId + "/delete", issueId);
    };
    IssueService.prototype.comment = function (issueId, data) {
        return this.http.put(this.url + "/" + issueId + "/comment", data);
    };
    IssueService.prototype.watch = function (issueId, data) {
        return this.http.put(this.url + "/" + issueId + "/watch", data);
    };
    IssueService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    IssueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], IssueService);
    return IssueService;
}());



/***/ }),

/***/ "./src/app/reported/reported.component.css":
/*!*************************************************!*\
  !*** ./src/app/reported/reported.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home{\r\n    background-color:aqua;\r\n}\r\n.blue{\r\n    background-color: blue;\r\n    color: azure\r\n}\r\n.font{\r\n    font-size: 3.7vmin;\r\n    text-align: center;\r\n}\r\n.controller{\r\n    background-color: blue;\r\n    font-size: 3.7vmin;\r\n    width: 100%;\r\n    \r\n}\r\n.arrow{\r\n    height: 20px;\r\n    width: 3.5vmin;\r\n    border-radius: 30%;\r\n}\r\n.logo{\r\n    height: 3.8vmax;\r\n    width: 4.5vmax;\r\n    padding: auto;\r\n    margin-top: 0;\r\n    padding-right: 10px;}\r\n.gap{\r\n        border: 2px solid lightseagreen;\r\n        border-radius: 20%;\r\n        font-size: 1.2em;\r\n        margin-right: 40px;\r\n        margin-left: 20px;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0ZWQvcmVwb3J0ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCO0FBQ0o7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVzs7QUFFZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUIsQ0FBQztBQUVwQjtRQUNJLCtCQUErQjtRQUMvQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRlZC9yZXBvcnRlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmFxdWE7XHJcbn1cclxuLmJsdWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgY29sb3I6IGF6dXJlXHJcbn1cclxuXHJcblxyXG4uZm9udHtcclxuICAgIGZvbnQtc2l6ZTogMy43dm1pbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRyb2xsZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiAzLjd2bWluO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxufVxyXG5cclxuLmFycm93e1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDMuNXZtaW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbn1cclxuLmxvZ297XHJcbiAgICBoZWlnaHQ6IDMuOHZtYXg7XHJcbiAgICB3aWR0aDogNC41dm1heDtcclxuICAgIHBhZGRpbmc6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDt9XHJcblxyXG4gICAgLmdhcHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/reported/reported.component.ts":
/*!************************************************!*\
  !*** ./src/app/reported/reported.component.ts ***!
  \************************************************/
/*! exports provided: ReportedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportedComponent", function() { return ReportedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");







var sortOn = __webpack_require__(/*! sort-on */ "./node_modules/sort-on/index.js");
var ReportedComponent = /** @class */ (function () {
    function ReportedComponent(socket, router, toastr, Service) {
        var _this = this;
        this.socket = socket;
        this.router = router;
        this.toastr = toastr;
        this.Service = Service;
        this.fullName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("userName");
        this.array = [];
        this.p = 1;
        this.count = 7;
        //function to sort the issues
        this.sa = function () {
            _this.array = sortOn(_this.array, ['status']);
        };
        this.sd = function () {
            _this.array = sortOn(_this.array, ['-status']);
        };
        this.ta = function () {
            _this.array = sortOn(_this.array, ['issueTitle']);
        };
        this.td = function () {
            _this.array = sortOn(_this.array, ['-issueTitle']);
        };
        this.ra = function () {
            _this.array = sortOn(_this.array, ['reporterName']);
        };
        this.rd = function () {
            _this.array = sortOn(_this.array, ['-reporterName']);
        };
        this.ca = function () {
            _this.array = sortOn(_this.array, ['createdOn']);
        };
        this.cd = function () {
            _this.array = sortOn(_this.array, ['-createdOn']);
        };
        //end of set color function
        // logout function
        this.logout = function () {
            _this.Service.logout().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('userName');
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('Internal Server Error occured');
            });
        };
        //end of log out function
        //socket function to notify comments
        this.commentnotify = function () {
            _this.socket.commentNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has commented his issue");
                }
                else {
                    _this.toastr.success(" " + data.name + " has commented on " + data.reporter + "s issue");
                }
            });
        };
        //socket function to notify adding watchers
        this.watchnotify = function () {
            _this.socket.watchNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has added himself as watcher");
                }
                else {
                    _this.toastr.success(" " + data.name + " has added himself as watcher in  " + data.reporter + "s issue");
                }
            });
        };
        //socket function to notify adding issues
        this.issuenotify = function () {
            _this.socket.issueNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has edited his issue");
                }
                else {
                    _this.toastr.success(" " + data.name + " has edited " + data.reporter + "s issue");
                }
            });
        };
    }
    ReportedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.issuenotify();
        this.watchnotify();
        this.commentnotify();
        //function to get reported issues
        this.Service.dashboard().subscribe(function (data) {
            var e_1, _a;
            _this.details = data["data"];
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.details), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var issue = _c.value;
                    if (_this.fullName == issue.reporterName) {
                        _this.array.push(issue);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    //end of sort function
    //function to set color to issue based on status
    ReportedComponent.prototype.setColor = function (status) {
        switch (status) {
            case 'Done':
                return "LawnGreen";
            case 'In-test':
                return "LightSkyBlue";
            case 'In-progress':
                return "LightGreen";
            case 'Backlog':
                return 'LightCoral';
        }
    };
    ReportedComponent.ctorParameters = function () { return [
        { type: _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _issue_service__WEBPACK_IMPORTED_MODULE_3__["IssueService"] }
    ]; };
    ReportedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reported',
            template: __webpack_require__(/*! raw-loader!./reported.component.html */ "./node_modules/raw-loader/index.js!./src/app/reported/reported.component.html"),
            styles: [__webpack_require__(/*! ./reported.component.css */ "./src/app/reported/reported.component.css")]
        })
    ], ReportedComponent);
    return ReportedComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SocketService = /** @class */ (function () {
    function SocketService() {
        var _this = this;
        this.url = 'http://13.232.157.131:4001/';
        this.verifyUser = function (authToken) {
            _this.socket.emit('set-user', authToken);
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                });
            });
        };
        this.disconnect = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.emit('disconnect', function () {
                    observer.next();
                });
            });
        };
        this.exitSocket = function () {
            _this.socket.disconnect();
        };
        this.issueUpdated = function (name, reporter) {
            _this.socket.emit('issue-updated', name, reporter);
        };
        this.issueNotify = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('issue-updated-notification', function (name) {
                    observer.next(name);
                });
            });
        };
        this.comment = function (name, reporter) {
            _this.socket.emit('comment', name, reporter);
        };
        this.commentNotify = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('commentno', function (name) {
                    observer.next(name);
                });
            });
        };
        this.watch = function (name, reporter) {
            _this.socket.emit('watch', name);
        };
        this.watchNotify = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('watchno', function (name) {
                    observer.next(name);
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/view-issue/view-issue.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-issue/view-issue.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\r\n\r\n#home{\r\n    background-color:aqua;\r\n}\r\n\r\n.blue{\r\n    background-color: blue;\r\n    color: azure\r\n}\r\n\r\napp-ngx-editor[placeholder]{\r\n\r\n    color:blueviolet;\r\n     height:100vh;\r\n }\r\n\r\n.box{\r\n     margin-left:10vmin;\r\n     width: 90vw;\r\n }\r\n\r\n.logo{\r\n    height: 3.8vmax;\r\n    width: 4.5vmax;\r\n    padding: auto;\r\n    margin-top: 0;\r\n    padding-right: 10px;\r\n}\r\n\r\n.gap{\r\n    border: 2px solid lightseagreen;\r\n    border-radius: 20%;\r\n    font-size: 1.2em;\r\n    margin-right: 40px;\r\n    margin-left: 20px;\r\n}\r\n\r\n.image{\r\n    height: 50vmin;\r\n    width:80vmin;\r\n}\r\n\r\n.box{\r\n    margin-left:3vmin;\r\n    width: 70vw;\r\n    margin-right:5vmin; \r\n    height:20vmin;\r\n}\r\n\r\n.bl{\r\n    color: blue;\r\n}\r\n\r\n.edit{\r\nbackground-color: blue;\r\ncolor: azure;\r\nwidth:15vw;\r\n\r\n}\r\n\r\n.delete{\r\n    background-color: red;\r\n    color: beige;\r\n    width:15vw;\r\n    margin-left: 10px\r\n}\r\n\r\n.watch{\r\n    background-color: green;\r\n    margin-left:10px;\r\n    width:20vw;\r\n    color: antiquewhite\r\n}\r\n\r\n.comment{\r\n    background-color: aqua;\r\n    margin: 20px;\r\n    margin-left: 60vw;\r\n    width: 10vmax;\r\n    min-height: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1pc3N1ZS92aWV3LWlzc3VlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZBQTBGOztBQUUxRjtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QjtBQUNKOztBQUNBOztJQUVJLGdCQUFnQjtLQUNmLFlBQVk7Q0FDaEI7O0FBQ0E7S0FDSSxrQkFBa0I7S0FDbEIsV0FBVztDQUNmOztBQUNBO0lBQ0csZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsWUFBWTtBQUNaLFVBQVU7O0FBRVY7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFVBQVU7SUFDVjtBQUNKOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Y7QUFDSjs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC92aWV3LWlzc3VlL3ZpZXctaXNzdWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIpO1xyXG5cclxuI2hvbWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmFxdWE7XHJcbn1cclxuLmJsdWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgY29sb3I6IGF6dXJlXHJcbn1cclxuYXBwLW5neC1lZGl0b3JbcGxhY2Vob2xkZXJde1xyXG5cclxuICAgIGNvbG9yOmJsdWV2aW9sZXQ7XHJcbiAgICAgaGVpZ2h0OjEwMHZoO1xyXG4gfVxyXG4gLmJveHtcclxuICAgICBtYXJnaW4tbGVmdDoxMHZtaW47XHJcbiAgICAgd2lkdGg6IDkwdnc7XHJcbiB9XHJcbiAubG9nb3tcclxuICAgIGhlaWdodDogMy44dm1heDtcclxuICAgIHdpZHRoOiA0LjV2bWF4O1xyXG4gICAgcGFkZGluZzogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZ2Fwe1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRzZWFncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4uaW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDUwdm1pbjtcclxuICAgIHdpZHRoOjgwdm1pbjtcclxufVxyXG4uYm94e1xyXG4gICAgbWFyZ2luLWxlZnQ6M3ZtaW47XHJcbiAgICB3aWR0aDogNzB2dztcclxuICAgIG1hcmdpbi1yaWdodDo1dm1pbjsgXHJcbiAgICBoZWlnaHQ6MjB2bWluO1xyXG59XHJcbi5ibHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59XHJcbi5lZGl0e1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG5jb2xvcjogYXp1cmU7XHJcbndpZHRoOjE1dnc7XHJcblxyXG59XHJcbi5kZWxldGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogYmVpZ2U7XHJcbiAgICB3aWR0aDoxNXZ3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHhcclxufVxyXG4ud2F0Y2h7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICB3aWR0aDoyMHZ3O1xyXG4gICAgY29sb3I6IGFudGlxdWV3aGl0ZVxyXG59XHJcbi5jb21tZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHZ3O1xyXG4gICAgd2lkdGg6IDEwdm1heDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view-issue/view-issue.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-issue/view-issue.component.ts ***!
  \****************************************************/
/*! exports provided: ViewIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewIssueComponent", function() { return ViewIssueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issue_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../issue.service */ "./src/app/issue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");







var ViewIssueComponent = /** @class */ (function () {
    function ViewIssueComponent(socket, toastr, Service, _route, router) {
        var _this = this;
        this.socket = socket;
        this.toastr = toastr;
        this.Service = Service;
        this._route = _route;
        this.router = router;
        this.editorConfig = {
            "editable": true,
            "spellcheck": true,
            "height": "auto",
            "minHeight": "0",
            "width": "90vw",
            "minWidth": "0",
            "translate": "yes",
            "enableToolbar": true,
            "showToolbar": true,
            "placeholder": "Enter text here...",
            "imageEndPoint": "",
            "toolbar": [
                ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
                ["fontName", "fontSize", "color"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
                ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
                ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"]
            ]
        };
        //socket function to notify comments
        this.commentnotify = function () {
            _this.socket.commentNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has commented his issue");
                }
                else {
                    _this.toastr.success(" " + data.name + " has commented on " + data.reporter + "s issue");
                }
            });
        };
        //socket function to notify adding watchers
        this.watchnotify = function () {
            _this.socket.watchNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has added himself as watcher");
                }
                else {
                    _this.toastr.success(" " + data.name + " has added himself as watcher in  " + data.reporter + "s issue");
                }
            });
        };
        //socket function to notify adding issues
        this.issuenotify = function () {
            _this.socket.issueNotify().subscribe(function (data) {
                if (data.name = data.reporter) {
                    _this.toastr.success(data.name + " has edited his issue");
                }
                else {
                    _this.toastr.success(" " + data.name + " has edited " + data.reporter + "s issue");
                }
            });
        };
        // Log out function
        this.logout = function () {
            _this.Service.logout().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.socket.disconnect();
                    _this.socket.exitSocket();
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('userName');
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('Internal Server Error occured');
            });
        };
    }
    ViewIssueComponent.prototype.ngOnInit = function () {
        var _this = this;
        // function to get issueId
        var issueId = this._route.snapshot.paramMap.get('id');
        this.issued = this.Service.getsingle(issueId).subscribe(function (data) {
            _this.issued = data['data'];
        });
        this.commentnotify();
        this.watchnotify();
        this.issuenotify();
    };
    //function to set as watcher
    ViewIssueComponent.prototype.watch = function () {
        var e_1, _a;
        var _this = this;
        var name = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get("userName");
        var y;
        if (this.issued.watchers.length <= 0) {
            var object = { 'watcher': name };
            console.log(object);
            this.issued.watchers.push(object);
            this.Service.watch(this.issued.issueId, object).subscribe(function (data) {
                console.log(data);
                _this.socket.watch(name, _this.issued.reporterName);
                _this.toastr.success('you are added to watcher list');
            });
            console.log(this.issued.watchers);
        }
        else {
            var x = void 0;
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.issued.watchers), _c = _b.next(); !_c.done; _c = _b.next()) {
                    x = _c.value;
                    if (x.watcher = name) {
                        console.log(x.watcher);
                        this.toastr.success('you are already a watcher');
                    }
                    else if (this.watch) { }
                    else {
                        var object = { 'watcher': name };
                        console.log(object);
                        this.issued.watchers.push(object);
                        this.Service.watch(this.issued.issueId, object).subscribe(function (data) {
                            console.log(data);
                            _this.socket.watch(name, _this.issued.reporterName);
                            _this.watchnotify();
                            _this.toastr.success('you are added to watcher list');
                        });
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    //function to comment on the issue
    ViewIssueComponent.prototype.Comment = function () {
        var _this = this;
        var name = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get("userName");
        var object = {
            'name': name,
            'date': Date.now(),
            'comment': this.comment
        };
        if (!object.comment) {
            this.toastr.error('enter any comment');
        }
        else {
            this.issued.comments.push(object);
            this.Service.comment(this.issued.issueId, object).subscribe(function (data) {
                _this.toastr.success("comment uploaded successfully");
                _this.socket.comment(name, _this.issued.reporterName);
            });
        }
    };
    // end of comment function
    //function to delete issue
    ViewIssueComponent.prototype.delete = function () {
        var _this = this;
        this.Service.delete(this.issued.issueId).subscribe(function (data) {
            _this.toastr.success("Issue deleted successfully");
            _this.router.navigate(['/home']);
        });
    };
    //end of delete function
    //navigate to edit page
    ViewIssueComponent.prototype.edit = function () {
        this.router.navigate([this.issued.issueId + "/edit"]);
    };
    ViewIssueComponent.ctorParameters = function () { return [
        { type: _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _issue_service__WEBPACK_IMPORTED_MODULE_2__["IssueService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ViewIssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-issue',
            template: __webpack_require__(/*! raw-loader!./view-issue.component.html */ "./node_modules/raw-loader/index.js!./src/app/view-issue/view-issue.component.html"),
            styles: [__webpack_require__(/*! ./view-issue.component.css */ "./src/app/view-issue/view-issue.component.css")]
        })
    ], ViewIssueComponent);
    return ViewIssueComponent;
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

module.exports = __webpack_require__(/*! C:\Users\BEJO JEFFRIN G\Downloads\issue-track\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map