webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1); // tslint:disable-line
	var ReactDOM = __webpack_require__(32);
	var react_router_1 = __webpack_require__(178);
	var Routing_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./module/Routing\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Page1_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./page/Page1\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Page2_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./page/Page2\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	// A '.tsx' file enables JSX support in the TypeScript compiler,
	// for more information see the following page on the TypeScript wiki:
	// https://github.com/Microsoft/TypeScript/wiki/JSX
	ReactDOM.render((React.createElement(react_router_1.Router, { history: react_router_1.hashHistory },
	    React.createElement(react_router_1.Route, { path: "/", component: Routing_1.default },
	        React.createElement(react_router_1.IndexRoute, { component: Page1_1.default }),
	        React.createElement(react_router_1.Route, { path: "/Page1", component: Page1_1.default }),
	        React.createElement(react_router_1.Route, { path: "/Page2", component: Page2_1.default })))), document.getElementById("app"));
	//console.log(this.baseurl);
	//$(function () {
	//    $.ajax({
	//        url: "http://localhost:56614/"+"OnePageWebSite/Hello",
	//        beforeSend: this.beforeSend,
	//        type: "post",
	//        data: {},
	//        dataType: "text",        
	//    }).done((data) => {
	//        console.log(data);
	//    }).fail((data) => {
	//        console.log(data);
	//    });
	//    console.log(window.location.pathname);
	//    console.log(window.location.href);
	//}) 


/***/ }
])
//# sourceMappingURL=0.2c406af30b2e8e850ed1.hot-update.js.map