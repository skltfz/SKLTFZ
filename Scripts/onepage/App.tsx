import * as React from "react"; // tslint:disable-line
import * as ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import * as $ from "jquery";
import Routing from "./module/Routing"
import Page1 from "./page/Page1";
import Page2 from "./page/Page2";
// A '.tsx' file enables JSX support in the TypeScript compiler,
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Routing}>
            <IndexRoute component={Page2} />
            <Route path="/Page1" component={Page1} />
            <Route path="/Page2" component={Page2} />
        </Route>
    </Router>
), document.getElementById("app"));
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