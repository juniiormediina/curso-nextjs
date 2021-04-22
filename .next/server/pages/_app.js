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
/*! exports provided: reportWebVitals, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportWebVitals", function() { return reportWebVitals; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.css */ "./global.css");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/Cart */ "./store/Cart.tsx");

var _jsxFileName = "C:\\Users\\junii\\Documents\\Challenges\\curso-nextjs\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function reportWebVitals(metric) {
  // analytics - Calibre
  // esto nos ayuda a hacerle seguimientos exitos a nuestros sitios web
  console.log(metric); //serverAnalytics.log(metric)
}

const MyApp = ({
  Component,
  pageProps
}) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_store_Cart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\junii\\Documents\\Challenges\\curso-nextjs\\store\\Cart.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const defaultState = {};
const CartItemsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(defaultState);
const CartDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(() => {});

const CartProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(cartReducers, defaultState);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartItemsContext.Provider, {
    value: state,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartDispatchContext.Provider, {
      value: dispatch,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
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
  const itemsById = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(CartItemsContext);
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
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(CartDispatchContext);

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

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQ2FydC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJyZXBvcnRXZWJWaXRhbHMiLCJtZXRyaWMiLCJjb25zb2xlIiwibG9nIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkZWZhdWx0U3RhdGUiLCJDYXJ0SXRlbXNDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQ2FydERpc3BhdGNoQ29udGV4dCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJjYXJ0UmVkdWNlcnMiLCJpdGVtIiwidHlwZSIsInF1YW50aXR5IiwicXR5VG9BZGQiLCJleGlzdGluZ0NhcnRJdGVtIiwiaWQiLCJ1bmRlZmluZWQiLCJuZXdDYXJ0SXRlbXMiLCJFcnJvciIsImdldENhcnRTdWJUb3RhbCIsInN1bSIsInByaWNlIiwiZ2V0Q2FydENvdW50IiwidXNlQ2FydCIsIml0ZW1zQnlJZCIsInVzZUNvbnRleHQiLCJpdGVtcyIsIk9iamVjdCIsInZhbHVlcyIsImNvdW50IiwicmVkdWNlIiwic3ViVG90YWwiLCJ1c2VDYXJ0TXV0YXRpb25zIiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInJlbW92ZUZyb21DYXJ0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7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LEdBQVA7QUFNRCxDQWRNO0FBZUEsTUFBTUMsZ0JBQWdCLEdBQUcsTUFBTTtBQUNwQyxRQUFNekIsUUFBUSxHQUFHa0Isd0RBQVUsQ0FBQ3RCLG1CQUFELENBQTNCOztBQUVBLFFBQU04QixTQUFTLEdBQUcsQ0FBQ0MsT0FBRCxFQUFvQnRCLFFBQXBCLEtBQ2hCTCxRQUFRLENBQUM7QUFDUEksUUFBSSxFQUFFLEtBREM7QUFFUEQsUUFBSSxFQUFFd0IsT0FGQztBQUdQdEI7QUFITyxHQUFELENBRFY7O0FBT0EsUUFBTXVCLGNBQWMsR0FBSUQsT0FBRCxJQUNyQjNCLFFBQVEsQ0FBQztBQUNQSSxRQUFJLEVBQUUsUUFEQztBQUVQRCxRQUFJLEVBQUV3QjtBQUZDLEdBQUQsQ0FEVjs7QUFNQSxTQUFPO0FBQ0xELGFBREs7QUFFTEU7QUFGSyxHQUFQO0FBSUQsQ0FwQk07QUFzQlEvQiwyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pJQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2dsb2JhbC5jc3MnO1xyXG5cclxuaW1wb3J0IENhcnRQcm92aWRlciBmcm9tICdAc3RvcmUvQ2FydCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0V2ViVml0YWxzKG1ldHJpYykge1xyXG4gIC8vIGFuYWx5dGljcyAtIENhbGlicmVcclxuICAvLyBlc3RvIG5vcyBheXVkYSBhIGhhY2VybGUgc2VndWltaWVudG9zIGV4aXRvcyBhIG51ZXN0cm9zIHNpdGlvcyB3ZWJcclxuXHJcbiAgY29uc29sZS5sb2cobWV0cmljKVxyXG4gIC8vc2VydmVyQW5hbHl0aWNzLmxvZyhtZXRyaWMpXHJcbn1cclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcclxuICAvLyBBZGl0aW9uYWwgcHJvcHNcclxuICAvLyBBZGl0aW9uYWwgbGF5b3V0XHJcbiAgLy8gTWFuZWphciBlcnJvcmVzIC0gY29tcG9uZW50RGlkQ2F0Y2hcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9DYXJ0UHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgdHlwZSBDYXJ0SXRlbVR5cGUgPSBUUHJvZHVjdCAmIHsgcXVhbnRpdHk6IG51bWJlciB9O1xyXG5cclxuZXhwb3J0IHR5cGUgQ2FydFN0YXRlID0ge1xyXG4gIFtrZXk6IHN0cmluZ106IENhcnRJdGVtVHlwZTtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIENhcnRBY3Rpb24gPSB7XHJcbiAgdHlwZTogJ2FkZCcgfCAncmVtb3ZlJztcclxuICBpdGVtOiBUUHJvZHVjdDtcclxuICBxdWFudGl0eT86IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHt9IGFzIENhcnRTdGF0ZTtcclxuXHJcbmNvbnN0IENhcnRJdGVtc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGRlZmF1bHRTdGF0ZSk7XHJcbmNvbnN0IENhcnREaXNwYXRjaENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCgoKSA9PiB7fSkgYXMgRGlzcGF0Y2g8Q2FydEFjdGlvbj4pO1xyXG5cclxuY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXJzLCBkZWZhdWx0U3RhdGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRJdGVtc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgPENhcnREaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT57Y2hpbGRyZW59PC9DYXJ0RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9DYXJ0SXRlbXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjYXJ0UmVkdWNlcnMoc3RhdGU6IENhcnRTdGF0ZSwgeyBpdGVtLCB0eXBlLCBxdWFudGl0eTogcXR5VG9BZGQgPSAxIH06IENhcnRBY3Rpb24pIHtcclxuICBjb25zdCBleGlzdGluZ0NhcnRJdGVtID0gc3RhdGVbaXRlbS5pZF07XHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnYWRkJzoge1xyXG4gICAgICBpZiAoZXhpc3RpbmdDYXJ0SXRlbSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zdCBxdWFudGl0eSA9IGV4aXN0aW5nQ2FydEl0ZW0ucXVhbnRpdHkgKyBxdHlUb0FkZDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBbaXRlbS5pZF06IHtcclxuICAgICAgICAgICAgLi4uZXhpc3RpbmdDYXJ0SXRlbSxcclxuICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgW2l0ZW0uaWRdOiB7XHJcbiAgICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgICAgcXVhbnRpdHk6IHF0eVRvQWRkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSAncmVtb3ZlJzoge1xyXG4gICAgICBpZiAoZXhpc3RpbmdDYXJ0SXRlbSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHF1YW50aXR5ID0gZXhpc3RpbmdDYXJ0SXRlbS5xdWFudGl0eSAtIDE7XHJcbiAgICAgIGlmIChxdWFudGl0eSA+IDApIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBbaXRlbS5pZF06IHtcclxuICAgICAgICAgICAgLi4uZXhpc3RpbmdDYXJ0SXRlbSxcclxuICAgICAgICAgICAgcXVhbnRpdHksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5ld0NhcnRJdGVtcyA9IHsgLi4uc3RhdGUgfTtcclxuICAgICAgZGVsZXRlIG5ld0NhcnRJdGVtc1tpdGVtLmlkXTtcclxuICAgICAgcmV0dXJuIG5ld0NhcnRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke3R5cGV9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRDYXJ0U3ViVG90YWwgPSAoc3VtOiBudW1iZXIsIGl0ZW06IENhcnRJdGVtVHlwZSkgPT4ge1xyXG4gIHN1bSArPSBpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eTtcclxuICByZXR1cm4gc3VtO1xyXG59O1xyXG5jb25zdCBnZXRDYXJ0Q291bnQgPSAoc3VtOiBudW1iZXIsIGl0ZW06IENhcnRJdGVtVHlwZSkgPT4gc3VtICsgaXRlbS5xdWFudGl0eTtcclxuLyoqXHJcbiAqIEhleSB0aGVyZSBpbnNhdGlhYmx5IGJyYWluLFxyXG4gKiBBcmUgeW91IGludGVyZXN0ZWQgaW4gdGhpcyBwYXR0ZXJuIHdoZXJlIHRoZSBDb250ZXh0IHZhbHVlcyBhcmVcclxuICogZXhwb3NlZCB3aXRob3V0IGFjdHVhbGx5IHByb3ZpbmRpbmcgYWNjZXNzIHRvIHRoZSBDb250ZXh0IGl0c2VsZiA6KVxyXG4gKiBodHRwczovL2tlbnRjZG9kZHMuY29tL2Jsb2cvaG93LXRvLXVzZS1yZWFjdC1jb250ZXh0LWVmZmVjdGl2ZWx5XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpID0+IHtcclxuICBjb25zdCBpdGVtc0J5SWQgPSB1c2VDb250ZXh0KENhcnRJdGVtc0NvbnRleHQpO1xyXG4gIGNvbnN0IGl0ZW1zID0gT2JqZWN0LnZhbHVlcyhpdGVtc0J5SWQpO1xyXG4gIC8vIE5vdCBmYW1pbGlhciB3aXRoIEFycmF5LnJlZHVjZT8gOilcclxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9SZWR1Y2VcclxuICBjb25zdCBjb3VudCA9IGl0ZW1zLnJlZHVjZShnZXRDYXJ0Q291bnQsIDApO1xyXG4gIGNvbnN0IHN1YlRvdGFsID0gaXRlbXMucmVkdWNlKGdldENhcnRTdWJUb3RhbCwgMCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpdGVtcyxcclxuICAgIGl0ZW1zQnlJZCxcclxuICAgIGNvdW50LFxyXG4gICAgc3ViVG90YWwsXHJcbiAgfTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHVzZUNhcnRNdXRhdGlvbnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KENhcnREaXNwYXRjaENvbnRleHQpO1xyXG5cclxuICBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdDogVFByb2R1Y3QsIHF1YW50aXR5PzogbnVtYmVyKSA9PlxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnYWRkJyxcclxuICAgICAgaXRlbTogcHJvZHVjdCxcclxuICAgICAgcXVhbnRpdHksXHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAocHJvZHVjdDogVFByb2R1Y3QpID0+XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdyZW1vdmUnLFxyXG4gICAgICBpdGVtOiBwcm9kdWN0LFxyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBhZGRUb0NhcnQsXHJcbiAgICByZW1vdmVGcm9tQ2FydCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFByb3ZpZGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==