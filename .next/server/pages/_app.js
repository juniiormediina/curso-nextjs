module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./global.css":
/*!********************!*\
  !*** ./global.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.css */ "./global.css");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/Cart */ "./store/Cart.tsx");
var _jsxFileName = "C:\\Users\\junii\\Documents\\Challenges\\curso-nextjs\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MyApp = ({
  Component,
  pageProps
}) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return __jsx(_store_Cart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./store/Cart.tsx":
/*!************************!*\
  !*** ./store/Cart.tsx ***!
  \************************/
/*! exports provided: useCart, useCartMutations, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return useCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCartMutations", function() { return useCartMutations; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\junii\\Documents\\Challenges\\curso-nextjs\\store\\Cart.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {};
const CartItemsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultState);
const CartDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(() => {});

const CartProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(cartReducers, defaultState);
  return __jsx(CartItemsContext.Provider, {
    value: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(CartDispatchContext.Provider, {
    value: dispatch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, children));
};

function cartReducers(state, {
  item,
  type,
  quantity: qtyToAdd = 1
}) {
  const existingCartItem = state[item.id];

  switch (type) {
    case 'add':
      {
        if (existingCartItem != undefined) {
          const quantity = existingCartItem.quantity + qtyToAdd;
          return _objectSpread(_objectSpread({}, state), {}, {
            [item.id]: _objectSpread(_objectSpread({}, existingCartItem), {}, {
              quantity
            })
          });
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          [item.id]: _objectSpread(_objectSpread({}, item), {}, {
            quantity: qtyToAdd
          })
        });
      }

    case 'remove':
      {
        if (existingCartItem == undefined) {
          return state;
        }

        const quantity = existingCartItem.quantity - 1;

        if (quantity > 0) {
          return _objectSpread(_objectSpread({}, state), {}, {
            [item.id]: _objectSpread(_objectSpread({}, existingCartItem), {}, {
              quantity
            })
          });
        }

        const newCartItems = _objectSpread({}, state);

        delete newCartItems[item.id];
        return newCartItems;
      }

    default:
      {
        throw new Error(`Unhandled action type: ${type}`);
      }
  }
}

const getCartSubTotal = (sum, item) => {
  sum += item.price * item.quantity;
  return sum;
};

const getCartCount = (sum, item) => sum + item.quantity;
/**
 * Hey there insatiably brain,
 * Are you interested in this pattern where the Context values are
 * exposed without actually provinding access to the Context itself :)
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */


const useCart = () => {
  const itemsById = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(CartItemsContext);
  const items = Object.values(itemsById); // Not familiar with Array.reduce? :)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

  const count = items.reduce(getCartCount, 0);
  const subTotal = items.reduce(getCartSubTotal, 0);
  return {
    items,
    itemsById,
    count,
    subTotal
  };
};
const useCartMutations = () => {
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(CartDispatchContext);

  const addToCart = (product, quantity) => dispatch({
    type: 'add',
    item: product,
    quantity
  });

  const removeFromCart = product => dispatch({
    type: 'remove',
    item: product
  });

  return {
    addToCart,
    removeFromCart
  };
};
/* harmony default export */ __webpack_exports__["default"] = (CartProvider);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQ2FydC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRlZmF1bHRTdGF0ZSIsIkNhcnRJdGVtc0NvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJDYXJ0RGlzcGF0Y2hDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImNhcnRSZWR1Y2VycyIsIml0ZW0iLCJ0eXBlIiwicXVhbnRpdHkiLCJxdHlUb0FkZCIsImV4aXN0aW5nQ2FydEl0ZW0iLCJpZCIsInVuZGVmaW5lZCIsIm5ld0NhcnRJdGVtcyIsIkVycm9yIiwiZ2V0Q2FydFN1YlRvdGFsIiwic3VtIiwicHJpY2UiLCJnZXRDYXJ0Q291bnQiLCJ1c2VDYXJ0IiwiaXRlbXNCeUlkIiwidXNlQ29udGV4dCIsIml0ZW1zIiwiT2JqZWN0IiwidmFsdWVzIiwiY291bnQiLCJyZWR1Y2UiLCJzdWJUb3RhbCIsInVzZUNhcnRNdXRhdGlvbnMiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicmVtb3ZlRnJvbUNhcnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFF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O0FBQ1BJLFFBQUksRUFBRSxLQURDO0FBRVBELFFBQUksRUFBRXdCLE9BRkM7QUFHUHRCO0FBSE8sR0FBRCxDQURWOztBQU9BLFFBQU11QixjQUFjLEdBQUlELE9BQUQsSUFDckIzQixRQUFRLENBQUM7QUFDUEksUUFBSSxFQUFFLFFBREM7QUFFUEQsUUFBSSxFQUFFd0I7QUFGQyxHQUFELENBRFY7O0FBTUEsU0FBTztBQUNMRCxhQURLO0FBRUxFO0FBRkssR0FBUDtBQUlELENBcEJNO0FBc0JRL0IsMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUEsa0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9nbG9iYWwuY3NzJztcclxuXHJcbmltcG9ydCBDYXJ0UHJvdmlkZXIgZnJvbSAnQHN0b3JlL0NhcnQnO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xyXG4gIC8vIEFkaXRpb25hbCBwcm9wc1xyXG4gIC8vIEFkaXRpb25hbCBsYXlvdXRcclxuICAvLyBNYW5lamFyIGVycm9yZXMgLSBjb21wb25lbnREaWRDYXRjaFxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0NhcnRQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCB0eXBlIENhcnRJdGVtVHlwZSA9IFRQcm9kdWN0ICYgeyBxdWFudGl0eTogbnVtYmVyIH07XHJcblxyXG5leHBvcnQgdHlwZSBDYXJ0U3RhdGUgPSB7XHJcbiAgW2tleTogc3RyaW5nXTogQ2FydEl0ZW1UeXBlO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQ2FydEFjdGlvbiA9IHtcclxuICB0eXBlOiAnYWRkJyB8ICdyZW1vdmUnO1xyXG4gIGl0ZW06IFRQcm9kdWN0O1xyXG4gIHF1YW50aXR5PzogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdFN0YXRlID0ge30gYXMgQ2FydFN0YXRlO1xyXG5cclxuY29uc3QgQ2FydEl0ZW1zQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZGVmYXVsdFN0YXRlKTtcclxuY29uc3QgQ2FydERpc3BhdGNoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKCgpID0+IHt9KSBhcyBEaXNwYXRjaDxDYXJ0QWN0aW9uPik7XHJcblxyXG5jb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjYXJ0UmVkdWNlcnMsIGRlZmF1bHRTdGF0ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydEl0ZW1zQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICA8Q2FydERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PntjaGlsZHJlbn08L0NhcnREaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L0NhcnRJdGVtc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNhcnRSZWR1Y2VycyhzdGF0ZTogQ2FydFN0YXRlLCB7IGl0ZW0sIHR5cGUsIHF1YW50aXR5OiBxdHlUb0FkZCA9IDEgfTogQ2FydEFjdGlvbikge1xyXG4gIGNvbnN0IGV4aXN0aW5nQ2FydEl0ZW0gPSBzdGF0ZVtpdGVtLmlkXTtcclxuXHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlICdhZGQnOiB7XHJcbiAgICAgIGlmIChleGlzdGluZ0NhcnRJdGVtICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gZXhpc3RpbmdDYXJ0SXRlbS5xdWFudGl0eSArIHF0eVRvQWRkO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIFtpdGVtLmlkXToge1xyXG4gICAgICAgICAgICAuLi5leGlzdGluZ0NhcnRJdGVtLFxyXG4gICAgICAgICAgICBxdWFudGl0eSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBbaXRlbS5pZF06IHtcclxuICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICBxdWFudGl0eTogcXR5VG9BZGQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlICdyZW1vdmUnOiB7XHJcbiAgICAgIGlmIChleGlzdGluZ0NhcnRJdGVtID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcXVhbnRpdHkgPSBleGlzdGluZ0NhcnRJdGVtLnF1YW50aXR5IC0gMTtcclxuICAgICAgaWYgKHF1YW50aXR5ID4gMCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIFtpdGVtLmlkXToge1xyXG4gICAgICAgICAgICAuLi5leGlzdGluZ0NhcnRJdGVtLFxyXG4gICAgICAgICAgICBxdWFudGl0eSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV3Q2FydEl0ZW1zID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgICBkZWxldGUgbmV3Q2FydEl0ZW1zW2l0ZW0uaWRdO1xyXG4gICAgICByZXR1cm4gbmV3Q2FydEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGU6ICR7dHlwZX1gKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldENhcnRTdWJUb3RhbCA9IChzdW06IG51bWJlciwgaXRlbTogQ2FydEl0ZW1UeXBlKSA9PiB7XHJcbiAgc3VtICs9IGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5O1xyXG4gIHJldHVybiBzdW07XHJcbn07XHJcbmNvbnN0IGdldENhcnRDb3VudCA9IChzdW06IG51bWJlciwgaXRlbTogQ2FydEl0ZW1UeXBlKSA9PiBzdW0gKyBpdGVtLnF1YW50aXR5O1xyXG4vKipcclxuICogSGV5IHRoZXJlIGluc2F0aWFibHkgYnJhaW4sXHJcbiAqIEFyZSB5b3UgaW50ZXJlc3RlZCBpbiB0aGlzIHBhdHRlcm4gd2hlcmUgdGhlIENvbnRleHQgdmFsdWVzIGFyZVxyXG4gKiBleHBvc2VkIHdpdGhvdXQgYWN0dWFsbHkgcHJvdmluZGluZyBhY2Nlc3MgdG8gdGhlIENvbnRleHQgaXRzZWxmIDopXHJcbiAqIGh0dHBzOi8va2VudGNkb2Rkcy5jb20vYmxvZy9ob3ctdG8tdXNlLXJlYWN0LWNvbnRleHQtZWZmZWN0aXZlbHlcclxuICovXHJcbmV4cG9ydCBjb25zdCB1c2VDYXJ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGl0ZW1zQnlJZCA9IHVzZUNvbnRleHQoQ2FydEl0ZW1zQ29udGV4dCk7XHJcbiAgY29uc3QgaXRlbXMgPSBPYmplY3QudmFsdWVzKGl0ZW1zQnlJZCk7XHJcbiAgLy8gTm90IGZhbWlsaWFyIHdpdGggQXJyYXkucmVkdWNlPyA6KVxyXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L1JlZHVjZVxyXG4gIGNvbnN0IGNvdW50ID0gaXRlbXMucmVkdWNlKGdldENhcnRDb3VudCwgMCk7XHJcbiAgY29uc3Qgc3ViVG90YWwgPSBpdGVtcy5yZWR1Y2UoZ2V0Q2FydFN1YlRvdGFsLCAwKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGl0ZW1zLFxyXG4gICAgaXRlbXNCeUlkLFxyXG4gICAgY291bnQsXHJcbiAgICBzdWJUb3RhbCxcclxuICB9O1xyXG59O1xyXG5leHBvcnQgY29uc3QgdXNlQ2FydE11dGF0aW9ucyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUNvbnRleHQoQ2FydERpc3BhdGNoQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0OiBUUHJvZHVjdCwgcXVhbnRpdHk/OiBudW1iZXIpID0+XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdhZGQnLFxyXG4gICAgICBpdGVtOiBwcm9kdWN0LFxyXG4gICAgICBxdWFudGl0eSxcclxuICAgIH0pO1xyXG5cclxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChwcm9kdWN0OiBUUHJvZHVjdCkgPT5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ3JlbW92ZScsXHJcbiAgICAgIGl0ZW06IHByb2R1Y3QsXHJcbiAgICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGFkZFRvQ2FydCxcclxuICAgIHJlbW92ZUZyb21DYXJ0LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0UHJvdmlkZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=