webpackHotUpdate(0,{

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var Checkbox_1 = __webpack_require__(235);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = React.createClass({
	    render: function () {
	        return React.createElement("div", null,
	            React.createElement(Checkbox_1.default, null));
	    }
	});


/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	__webpack_require__(236); // or single skin css
	var icheck = __webpack_require__(237);
	var Checkbox = (function (_super) {
	    __extends(Checkbox, _super);
	    function Checkbox(data) {
	        return _super.call(this, data) || this;
	    }
	    Checkbox.prototype.render = function () {
	        //const { checked, onChange } = this.props;
	        return React.createElement(icheck.Checkbox, { checkboxClass: "icheckbox_square-blue", label: "dont cry just shy" });
	    };
	    return Checkbox;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Checkbox;


/***/ }

})
//# sourceMappingURL=0.2bdaa91c9da95699d90e.hot-update.js.map