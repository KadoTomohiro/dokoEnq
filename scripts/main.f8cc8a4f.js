!function(){"use strict";function a(a){console.log("AboutController Constructor"),this.GruntfilesService=a}angular.module("dokoEnq.components.about",["dokoEnq.service.gruntfiles"]).controller("AboutController",a),a.$inject=["GruntfilesService"],a.prototype.canActivate=function(){return console.log("AboutController canActivate Method"),!0},a.prototype.activate=function(){console.log("AboutController activate Method"),b=this;var a=this.GruntfilesService.query().$promise;a.then(c)["catch"](d)},a.prototype.canDeactivate=function(){return console.log("AboutController canDeactivate Method"),!0},a.prototype.deactivate=function(){console.log("AboutController deactivate Method")};var b,c=function(a){b.list=a},d=function(a){b.error=a}}(),function(){"use strict";function a(){console.log("CompleteController Constructor")}angular.module("dokoEnq.components.complete",[]).controller("CompleteController",a),a.$inject=[],a.prototype.canActivate=function(){return console.log("CompleteController canActivate Method"),!0},a.prototype.activate=function(){console.log("CompleteController activate Method"),b=this},a.prototype.canDeactivate=function(){return console.log("CompleteController canDeactivate Method"),!0},a.prototype.deactivate=function(){console.log("CompleteController deactivate Method"),b=this};var b}(),function(){"use strict";function a(a){console.log("ConfirmController Constructor"),this.AnswerService=a}angular.module("dokoEnq.components.confirm",[]).controller("ConfirmController",a),a.$inject=["AnswerService"],a.prototype.canActivate=function(){return console.log("ConfirmController canActivate Method"),!0},a.prototype.activate=function(){console.log("ConfirmController activate Method"),b=this,this.tempAnswer=b.AnswerService.tempRestore("personal"),console.log(this.tempAnswer)},a.prototype.canDeactivate=function(){return console.log("ConfirmController canDeactivate Method"),!0},a.prototype.deactivate=function(){console.log("ConfirmController deactivate Method"),b=this},a.prototype.store=function(){console.log("ConfilmController store Method"),b=this,b.AnswerService.store()};var b}(),function(){"use strict";function a(){console.log("ContactController Constructor")}angular.module("dokoEnq.components.contact",[]).controller("ContactController",a),a.$inject=[],a.prototype.canActivate=function(){return console.log("ContactController canActivate Method"),!0},a.prototype.activate=function(){console.log("ContactController activate Method"),b=this,b.case1=20,c()},a.prototype.canDeactivate=function(){return console.log("ContactController canDeactivate Method"),!0},a.prototype.deactivate=function(){console.log("ContactController deactivate Method")};var b,c=function(){b.case2=10}}(),function(){"use strict";function a(){console.log("DescriptionController Constructor")}angular.module("dokoEnq.components.description",[]).controller("DescriptionController",a),a.$inject=[],a.prototype.canActivate=function(){return console.log("DescriptionController canActivate Method"),!0},a.prototype.activate=function(){console.log("DescriptionController activate Method"),b=this},a.prototype.canDeactivate=function(){return console.log("DescriptionController canDeactivate Method"),!0},a.prototype.deactivate=function(){console.log("DescriptionController deactivate Method"),b=this};var b}(),function(){"use strict";function a(){console.log("HomeController Constructor"),this.titles=["セミナーについて","ハンズオンについて","新製品について"]}angular.module("dokoEnq.components.home",[]).controller("HomeController",a),a.$inject=[],a.prototype.canActivate=function(){return console.log("HomeController canActivate Method"),!0},a.prototype.activate=function(){console.log("HomeController activate Method")},a.prototype.canDeactivate=function(){return console.log("HomeController canDeactivate Method"),!0},a.prototype.deactivate=function(){console.log("HomeController deactivate Method")}}(),function(){"use strict";function a(){console.log("LoginController Constructor")}angular.module("dokoEnq.components.login",[]).controller("LoginController",a),a.$inject=[],a.prototype.canActivate=function(){return console.log("LoginController canActivate Method"),!0},a.prototype.activate=function(){console.log("LoginController activate Method"),b=this},a.prototype.canDeactivate=function(){return console.log("LoginController canDeactivate Method"),!0},a.prototype.deactivate=function(){console.log("LoginController deactivate Method"),b=this};var b}(),function(){"use strict";function a(a,b){console.log("PersonalController Constructor"),this.Upload=a,this.AnswerService=b}angular.module("dokoEnq.components.personal",["ngFileUpload"]).controller("PersonalController",a),a.$inject=["Upload","AnswerService"],a.prototype.canActivate=function(){return console.log("PersonalController canActivate Method"),!0},a.prototype.activate=function(){console.log("PersonalController activate Method"),b=this;var a=b.AnswerService.tempRestore("personal");angular.forEach(a,function(a,c){b[c]=a})},a.prototype.canDeactivate=function(){return console.log("PersonalController canDeactivate Method"),!0},a.prototype.deactivate=function(){console.log("PersonalController deactivate Method"),b=this},a.prototype.temporarilyStored=function(){console.log("PersonalController temporarilyStored Method"),b=this;var a={affiliation:b.affiliation,name:b.name,email:b.email};b.AnswerService.tempStore("personal",a)};var b}(),function(){"use strict";function a(){console.log("QuestionController Constructor")}angular.module("dokoEnq.components.question",[]).controller("QuestionController",a),a.$inject=[],a.prototype.canActivate=function(){return console.log("QuestionController canActivate Method"),!0},a.prototype.activate=function(){console.log("QuestionController activate Method"),b=this},a.prototype.canDeactivate=function(){return console.log("QuestionController canDeactivate Method"),!0},a.prototype.deactivate=function(){console.log("QuestionController deactivate Method"),b=this};var b}(),function(){"use strict";function a(a,c){console.log("SigninController Constructor"),this.firebaseService=a,this.$window=c,b=this}angular.module("dokoEnq.components.signin",[]).controller("SigninController",a),a.$inject=["firebaseService","$window"],a.prototype.canActivate=function(){return console.log("SigninController canActivate Method"),!0},a.prototype.activate=function(){console.log("SigninController activate Method"),b=this},a.prototype.canDeactivate=function(){return console.log("SigninController canDeactivate Method"),!0},a.prototype.deactivate=function(){console.log("SigninController deactivate Method"),b=this},a.prototype.signin=function(a){b.firebaseService.auth.$authWithOAuthPopup(a,{scope:"email"}).then(function(a){console.log("Logged in as:",a.uid),b.$window.history.back()})["catch"](function(a){console.log("Authentication failed:",a)})};var b}(),function(){"use strict";function a(a,b,c){console.log("StoreController Constructor"),this.StoreService=a,this.$firebaseArray=b,this.OnlineStatus=c}angular.module("dokoEnq.components.store",[]).controller("StoreController",a),a.$inject=["StoreService","$firebaseArray","OnlineStatusService"],a.prototype.canActivate=function(){return console.log("StoreController canActivate Method"),!0},a.prototype.activate=function(){console.log("StoreController activate Method"),b=this;var a=new Firebase("https://dokoenq.firebaseio.com/answers");b.pushed=b.$firebaseArray(a),console.log(b.pushed),b.unpushed=b.StoreService.getLocalAnsewrs(),b.isOnline=b.OnlineStatus.isOnline},a.prototype.canDeactivate=function(){return console.log("StoreController canDeactivate Method"),!0},a.prototype.deactivate=function(){console.log("StoreController deactivate Method"),b=this},a.prototype.allPush=function(){console.log("StoreController allPush Method"),b=this,b.StoreService.allPush(),b.unpushed=b.StoreService.getLocalAnsewrs()};var b}(),function(){"use strict";function a(){function a(){this.title="セミナーについて"}return{restrict:"E",replace:!0,templateUrl:"directives/enquetetitle/enquetetitle.html",scope:{},controller:a,controllerAs:"vm",bindToController:{title:"@title"}}}angular.module("dokoEnq.directive.enquetetitle",[]).directive("dokoenqEnqueteTitle",a),a.$inject=[]}(),function(){"use strict";function a(a){a.html5Mode(!0)}angular.module("dokoEnq.config",[]).config(a),a.$inject=["$locationProvider"]}(),function(){"use strict";function a(a){var b={},c=function(a,c){b[a]=c},d=function(a){return b[a]},e=function(){console.log("answerService store Methos"),a.store(b.personal),b={}},f={tempStore:c,tempRestore:d,store:e};return f}angular.module("dokoEnq.service.answer",[]).factory("AnswerService",a),a.$inject=["StoreService"]}(),function(){"use strict";function a(a,b,c){var d=new Firebase("https://dokoenq.firebaseio.com"),e=a(d),f=b(d),g=c(d),h={},i={object:e,array:f,auth:g,authData:h};return i}angular.module("dokoEnq.service.firebase",[]).factory("firebaseService",a),a.$inject=["$firebaseObject","$firebaseArray","$firebaseAuth"]}(),function(){"use strict";function a(a,b){var c={};c.onLine=a.navigator.onLine,c.isOnline=function(){return c.onLine};var d=function(){c.onLine=a.navigator.onLine,console.log(c.onLine?"online":"offline","now!"),b.$digest()};return a.addEventListener("online",d,!0),a.addEventListener("offline",d,!0),c}angular.module("dokoEnq.service.onlinestatus",[]).factory("OnlineStatusService",a),a.$inject=["$window","$rootScope"]}(),function(){"use strict";function a(a,b){var c=function(a){return b.isOnline?(console.log("online!"),e(a)):(console.log("offline!"),d(a)),!0},d=function(b){console.log("store method");var c=g();console.log(c),angular.isArray(c)||(c=[]),console.log(b),c.push(b),a.answers=angular.toJson(c)},e=function(a){console.log("push fire base");var b=new Firebase("https://dokoenq.firebaseio.com");return console.log(b),b.child("answers").push(a,function(a){return angular.isObject(a)?!1:void 0}),!0},f=function(){console.log("StoreService allPush Method");var b=g();console.log(b),angular.forEach(b,function(a){console.log(a),e(a)}),a.answers=void 0},g=function(){return angular.fromJson(a.answers)},h={store:c,allPush:f,getLocalAnsewrs:g,offline:function(){var a;return a=navigator.onLine?!1:!0}};return h}angular.module("dokoEnq.service.store",[]).factory("StoreService",a),a.$inject=["$localStorage","OnlineStatusService"]}(),function(){"use strict";function a(a,c,d,e){console.log("AppController construction"),this.fb=e,this.$location=c,this.onlineStatus=d,b=this,this.fb.auth.$onAuth(function(a){b.fb.authData=a}),b.isOnline=b.onlineStatus.isOnline}angular.module("dokoEnq",["ngNewRouter","ngStorage","firebase","dokoEnq.config","dokoEnq.components.home","dokoEnq.components.description","dokoEnq.components.personal","dokoEnq.components.confirm","dokoEnq.components.complete","dokoEnq.components.store","dokoEnq.components.signin","dokoEnq.directive.enquetetitle","dokoEnq.service.answer","dokoEnq.service.store","dokoEnq.service.onlinestatus","dokoEnq.service.firebase"]).controller("AppController",a),a.$routeConfig=[{path:"/",redirectTo:"/home"},{path:"/home",component:"home"},{path:"/personal",component:"personal"},{path:"/description",component:"description"},{path:"/confirm",component:"confirm"},{path:"/complete",component:"complete"},{path:"/store",component:"store"},{path:"/signin",component:"signin"}],a.$inject=["$rootScope","$location","OnlineStatusService","firebaseService"],a.prototype.signOut=function(){b.fb.auth.$unauth()};var b}();