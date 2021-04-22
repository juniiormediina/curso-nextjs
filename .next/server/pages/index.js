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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: ./components/Layout/Layout.tsx + 3 modules
var Layout = __webpack_require__("pdCo");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./components/SVGIcons/index.ts + 3 modules
var SVGIcons = __webpack_require__("tofE");

// CONCATENATED MODULE: ./components/KawaiiHeader/AnimatedHeader.tsx
var __jsx = external_react_default.a.createElement;




const AnimatedHeader = ({
  visible,
  onClick,
  onComplete
}) => __jsx(external_semantic_ui_react_["Header"], {
  size: "huge",
  as: "h1",
  onClick: onClick
}, "Platzi", __jsx(external_semantic_ui_react_["Transition"], {
  animation: "jiggle",
  visible: visible,
  duration: 900,
  onComplete: onComplete
}, __jsx(SVGIcons["a" /* Avocado */], {
  size: "58px"
})), "Avo");

/* harmony default export */ var KawaiiHeader_AnimatedHeader = (AnimatedHeader);
// CONCATENATED MODULE: ./components/KawaiiHeader/RottenHeader.tsx
var RottenHeader_jsx = external_react_default.a.createElement;




const RottenHeader = () => RottenHeader_jsx(external_semantic_ui_react_["Header"], {
  size: "huge",
  as: "h1"
}, "Platzi", RottenHeader_jsx(SVGIcons["c" /* PosMeMuero */], {
  size: "58px"
}), "Avo");

/* harmony default export */ var KawaiiHeader_RottenHeader = (RottenHeader);
// CONCATENATED MODULE: ./components/KawaiiHeader/ModalHeaderContent.tsx

var ModalHeaderContent_jsx = external_react_default.a.createElement;




const ModalHeaderContent = () => {
  return ModalHeaderContent_jsx("div", {
    className: "jsx-3586822566" + " " + 'container'
  }, ModalHeaderContent_jsx(external_semantic_ui_react_["Grid"], {
    columns: 2
  }, ModalHeaderContent_jsx(external_semantic_ui_react_["Grid"].Row, {
    verticalAlign: 'middle'
  }, ModalHeaderContent_jsx(external_semantic_ui_react_["Grid"].Column, {
    width: "5"
  }, ModalHeaderContent_jsx(SVGIcons["c" /* PosMeMuero */], {
    size: "154px"
  })), ModalHeaderContent_jsx(external_semantic_ui_react_["Grid"].Column, {
    width: "11"
  }, ModalHeaderContent_jsx(external_semantic_ui_react_["Header"], {
    as: "h2"
  }, "Mataste el aguacate"), ModalHeaderContent_jsx("p", {
    className: "jsx-3586822566"
  }, "Lo tocaste tanto que lo mataste."), ModalHeaderContent_jsx("p", {
    className: "jsx-3586822566"
  }, "Por otro lado, eres una persona muy curiosa y has descubierto esto. :)")))), ModalHeaderContent_jsx(style_default.a, {
    id: "3586822566"
  }, [".container.jsx-3586822566{padding:2rem;}"]));
};

/* harmony default export */ var KawaiiHeader_ModalHeaderContent = (ModalHeaderContent);
// CONCATENATED MODULE: ./components/KawaiiHeader/KawaiiHeader.tsx

var KawaiiHeader_jsx = external_react_default.a.createElement;






const KawaiiHeader = () => {
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(true);
  const {
    0: meMori,
    1: setMeMori
  } = Object(external_react_["useState"])(false);
  const {
    0: modalOpen,
    1: setModalOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: count,
    1: setCount
  } = Object(external_react_["useState"])(0);

  const closeModal = () => setModalOpen(false);

  const toggleVisible = () => setVisible(prevVisible => !prevVisible);

  Object(external_react_["useEffect"])(() => {
    window.setTimeout(toggleVisible, 350);
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (count === 4) {
      setMeMori(true);
      setModalOpen(true);
    }
  }, [count]);
  return KawaiiHeader_jsx("div", {
    className: "jsx-927310824" + " " + 'container'
  }, meMori ? KawaiiHeader_jsx(KawaiiHeader_RottenHeader, null) : KawaiiHeader_jsx(KawaiiHeader_AnimatedHeader, {
    visible: visible,
    onClick: toggleVisible,
    onComplete: () => setCount(prevCount => prevCount + 1)
  }), KawaiiHeader_jsx(external_semantic_ui_react_["Confirm"], {
    open: modalOpen,
    content: KawaiiHeader_ModalHeaderContent,
    onCancel: closeModal,
    onConfirm: closeModal,
    cancelButton: "Ay, lo siento",
    confirmButton: "OK",
    closeOnDimmerClick: false
  }), KawaiiHeader_jsx(style_default.a, {
    id: "927310824"
  }, [".container.jsx-927310824{margin:2rem 0 3rem;}", ".container.jsx-927310824 .header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"]));
};

/* harmony default export */ var KawaiiHeader_KawaiiHeader = (KawaiiHeader);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/ProductList/ProductList.tsx
var ProductList_jsx = external_react_default.a.createElement;




const mapProductsToCards = products => products.map(({
  name,
  id,
  price,
  image
}) => ProductList_jsx(link_default.a, {
  key: id,
  href: "/product/[id]",
  as: `/product/${id}`,
  passHref: true
}, ProductList_jsx(external_semantic_ui_react_["Card"], {
  as: "a",
  header: name,
  image: image,
  meta: ProductList_jsx(external_semantic_ui_react_["Card"].Meta, {
    style: {
      color: 'dimgray'
    }
  }, price)
})));

const ProductList = ({
  products
}) => ProductList_jsx(external_semantic_ui_react_["Card"].Group, {
  itemsPerRow: 2,
  stackable: true
}, mapProductsToCards(products));

/* harmony default export */ var ProductList_ProductList = (ProductList);
// CONCATENATED MODULE: ./pages/index.tsx
var pages_jsx = external_react_default.a.createElement;





const getServerSideProps = async () => {
  const response = await external_isomorphic_unfetch_default()('https://curso-nextjs-qfvrx0rrk-juniiormediina.vercel.app/api/avo');
  const {
    data: productList
  } = await response.json();
  return {
    props: {
      productList
    }
  };
};

const HomePage = ({
  productList
}) => {
  return pages_jsx(Layout["a" /* default */], null, pages_jsx(KawaiiHeader_KawaiiHeader, null), pages_jsx(ProductList_ProductList, {
    products: productList
  }));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "laJZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useCartMutations; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
    value: state
  }, __jsx(CartDispatchContext.Provider, {
    value: dispatch
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
/* harmony default export */ __webpack_exports__["a"] = (CartProvider);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pdCo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/SVGIcons/index.ts + 3 modules
var SVGIcons = __webpack_require__("tofE");

// CONCATENATED MODULE: ./components/Navbar/ShoppingCartIcon.tsx

var __jsx = external_react_default.a.createElement;



const ShoppingCartIcon = ({
  cartCount,
  name
}) => {
  const showCartCount = () => {
    if (!cartCount) {
      return `(0)`;
    }

    if (cartCount > 9) {
      return __jsx("span", null, "9", __jsx("sup", null, "+"));
    }

    return `(${cartCount})`;
  };

  return __jsx("div", {
    className: "jsx-3475005549" + " " + 'container'
  }, __jsx(SVGIcons["b" /* Basket */], null), __jsx("div", {
    className: "jsx-3475005549" + " " + 'text'
  }, ` ${name} `, showCartCount()), __jsx(style_default.a, {
    id: "3475005549"
  }, [".container.jsx-3475005549{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".text.jsx-3475005549{margin-left:0.5rem;}", ".text.jsx-3475005549 span.jsx-3475005549{font-size:smaller;}"]));
};

/* harmony default export */ var Navbar_ShoppingCartIcon = (ShoppingCartIcon);
// EXTERNAL MODULE: ./store/Cart.tsx
var Cart = __webpack_require__("laJZ");

// CONCATENATED MODULE: ./components/Navbar/Navbar.tsx

var Navbar_jsx = external_react_default.a.createElement;








const Navbar = () => {
  const {
    pathname
  } = Object(router_["useRouter"])();
  const {
    count: cartCount
  } = Object(Cart["b" /* useCart */])();
  return Navbar_jsx(external_semantic_ui_react_["Menu"], {
    size: "huge",
    borderless: true,
    pointing: true,
    as: "header"
  }, Navbar_jsx(external_semantic_ui_react_["Container"], {
    text: true
  }, Navbar_jsx(link_default.a, {
    href: "/",
    passHref: true
  }, Navbar_jsx(external_semantic_ui_react_["Menu"].Item, {
    active: pathname === '/',
    title: "Inicio | Todos los productos"
  }, Navbar_jsx(SVGIcons["a" /* Avocado */], null), "Avo Store")), Navbar_jsx(external_semantic_ui_react_["Menu"].Menu, {
    position: "right"
  }, Navbar_jsx(link_default.a, {
    href: "/cart",
    passHref: true
  }, Navbar_jsx(external_semantic_ui_react_["Menu"].Item, {
    active: pathname === '/cart'
  }, Navbar_jsx(Navbar_ShoppingCartIcon, {
    cartCount: cartCount,
    name: "Canasta"
  }))))), Navbar_jsx(style_default.a, {
    id: "1732775377"
  }, [".ui.menu.huge{font-size:1.5rem;}"]));
};

/* harmony default export */ var Navbar_Navbar = (Navbar);
// CONCATENATED MODULE: ./components/Footer/Footer.tsx

var Footer_jsx = external_react_default.a.createElement;




const Footer = () => Footer_jsx(external_semantic_ui_react_["Segment"], {
  vertical: true,
  as: "footer",
  style: {
    padding: '4em 0em',
    marginTop: '3em',
    borderTop: '1px solid #f2f2f2'
  }
}, Footer_jsx(external_semantic_ui_react_["Container"], {
  text: true
}, Footer_jsx(external_semantic_ui_react_["Grid"], {
  stackable: true
}, Footer_jsx(external_semantic_ui_react_["Grid"].Row, null, Footer_jsx(external_semantic_ui_react_["Grid"].Column, {
  width: 4
}, Footer_jsx(external_semantic_ui_react_["Header"], {
  as: "h4",
  content: "Nosotros"
}), Footer_jsx(external_semantic_ui_react_["List"], null, Footer_jsx(external_semantic_ui_react_["List"].Item, null, Footer_jsx(link_default.a, {
  href: "/about"
}, Footer_jsx("a", {
  className: "jsx-2456406465"
}, "Conoce m\xE1s"))))), Footer_jsx(external_semantic_ui_react_["Grid"].Column, {
  width: 5
}, Footer_jsx(external_semantic_ui_react_["Header"], {
  as: "h4",
  content: "Servicios"
}), Footer_jsx(external_semantic_ui_react_["List"], null, Footer_jsx(external_semantic_ui_react_["List"].Item, null, Footer_jsx(link_default.a, {
  href: "/"
}, Footer_jsx("a", {
  className: "jsx-2456406465"
}, "Todos los productos"))))), Footer_jsx(external_semantic_ui_react_["Grid"].Column, {
  width: 7
}, Footer_jsx(external_semantic_ui_react_["Header"], {
  as: "h4"
}, "Hecho para"), Footer_jsx("p", {
  className: "jsx-2456406465"
}, Footer_jsx("a", {
  href: "https://platzi.com/",
  className: "jsx-2456406465"
}, "Platzi y su curso de Next.JS"), " de Platzi dictado por", ' ', Footer_jsx("a", {
  href: "https://twitter.com/jonalvarezz",
  className: "jsx-2456406465"
}, "@jonalvarezz")), Footer_jsx(external_semantic_ui_react_["List"], {
  horizontal: true,
  style: {
    display: 'flex'
  }
}, Footer_jsx(external_semantic_ui_react_["List"].Item, {
  icon: "twitter",
  style: {
    display: 'flex'
  },
  content: Footer_jsx("a", {
    href: "https://twitter.com/jonalvarezz",
    className: "jsx-2456406465"
  }, "Twitter")
}), Footer_jsx(external_semantic_ui_react_["List"].Item, {
  icon: "github",
  style: {
    display: 'flex'
  },
  content: Footer_jsx("a", {
    href: "https://github.com/jonalvarezz/platzi-nextjs",
    className: "jsx-2456406465"
  }, "GitHub")
}))))), Footer_jsx("div", {
  className: "jsx-2456406465" + " " + 'colophon'
}, Footer_jsx("p", {
  className: "jsx-2456406465" + " " + 'colophon-entry'
}, "Icons made by", ' ', Footer_jsx("a", {
  target: "_blank",
  href: "https://www.flaticon.com/authors/freepik",
  title: "Freepik",
  className: "jsx-2456406465"
}, "Freepik"), ' from ', Footer_jsx("a", {
  target: "_blank",
  href: "https://www.flaticon.com/",
  title: "Flaticon",
  className: "jsx-2456406465"
}, "www.flaticon.com")), Footer_jsx("p", {
  className: "jsx-2456406465" + " " + 'colophon-entry'
}, "Avocado images taken from", ' ', Footer_jsx("a", {
  target: "_blank",
  href: "https://www.californiaavocado.com/avocado101/avocado-varieties",
  title: "California Avocado",
  className: "jsx-2456406465" + " " + 'acnor'
}, "Avocado 101"), ' at ', Footer_jsx("a", {
  target: "_blank",
  href: "https://www.californiaavocado.com",
  title: "Flaticon",
  className: "jsx-2456406465"
}, "California Avocado")))), Footer_jsx(style_default.a, {
  id: "2456406465"
}, [".colophon.jsx-2456406465{text-align:center;margin-top:3.2rem;font-size:0.8rem;}", ".colophon-entry.jsx-2456406465{color:grey;margin-bottom:0;}"]));

/* harmony default export */ var Footer_Footer = (Footer);
// CONCATENATED MODULE: ./components/Layout/Layout.tsx
var Layout_jsx = external_react_default.a.createElement;





const Layout = ({
  children
}) => Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx(Navbar_Navbar, null), Layout_jsx(external_semantic_ui_react_["Container"], {
  as: "main",
  text: true
}, children), Layout_jsx(Footer_Footer, null));

/* harmony default export */ var Layout_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "tofE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ SVGIcons_Avocado; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ SVGIcons_Basket; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ SVGIcons_PosMeMuero; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/SVGIcons/Avocado.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Avocado = (_ref) => {
  let {
    size = '34px'
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["size"]);

  return __jsx("svg", _extends({
    width: size,
    height: size,
    viewBox: "-99 0 511 512"
  }, otherProps), __jsx("path", {
    d: "M187.8 38.09c-20.324 20.32-27.742 48.996-30.41 69.043-1.723 12.91 9.266 23.895 22.176 22.176 20.047-2.672 48.719-10.09 69.043-30.41 20.32-20.324 27.742-48.996 30.41-69.047 1.719-12.906-9.266-23.895-22.176-22.176-20.047 2.672-48.723 10.09-69.043 30.414z",
    fill: "#8ee2cf"
  }), __jsx("path", {
    d: "M198.63 95.566a7.496 7.496 0 01-5.305-2.195 7.509 7.509 0 010-10.61l39.145-39.144c2.93-2.926 7.68-2.926 10.605 0a7.502 7.502 0 010 10.609L203.93 93.37a7.48 7.48 0 01-5.3 2.195z",
    fill: "#6fce91"
  }), __jsx("path", {
    d: "M156.62 115.68c-8.629 0-15.621-6.992-15.621-15.621 0-22.523-18.324-40.848-40.848-40.848-8.629 0-15.625-6.992-15.625-15.621s6.996-15.625 15.625-15.625c39.75 0 72.094 32.344 72.094 72.094 0 8.629-6.996 15.621-15.625 15.621z",
    fill: "#e1b89a"
  }), __jsx("path", {
    d: "M172.24 100.06a71.81 71.81 0 00-2.86-20.043 123.29 123.29 0 00-33.098 1.031c3 5.684 4.712 12.148 4.712 19.012 0 8.63 6.992 15.621 15.62 15.621 8.63 0 15.626-6.992 15.626-15.62z",
    fill: "#d2996f"
  }), __jsx("path", {
    d: "M156.62 504.5C74.671 504.5 8 437.828 8 355.88c0-44.492 13.129-67.688 24.711-88.152 10.344-18.281 18.52-32.723 18.52-65.512 0-58.109 47.277-105.39 105.39-105.39 58.109 0 105.39 47.277 105.39 105.39 0 32.789 8.172 47.23 18.52 65.512 11.582 20.465 24.711 43.66 24.711 88.152 0 81.945-66.672 148.62-148.62 148.62z",
    fill: "#4e5660"
  }), __jsx("path", {
    d: "M250.63 470.89C89.4 448.304 64.94 206.77 120.97 103.04c-40.621 14.645-69.742 53.57-69.742 99.18 0 32.789-8.176 47.227-18.52 65.508-11.586 20.465-24.711 43.66-24.711 88.152 0 81.949 66.668 148.62 148.62 148.62 35.641 0 68.383-12.613 94.016-33.605z",
    fill: "#383c43"
  }), __jsx("path", {
    d: "M34.039 355.88c0-75.926 43.23-75.051 43.23-153.66 0-43.824 35.523-79.348 79.348-79.348 43.824 0 79.352 35.523 79.352 79.348 0 78.613 43.23 77.738 43.23 153.66 0 67.699-54.883 122.58-122.58 122.58-67.699 0-122.58-54.879-122.58-122.58z",
    fill: "#89d47f"
  }), __jsx("path", {
    d: "M105.57 141.48c-17.301 14.555-28.305 36.355-28.305 60.738 0 78.609-43.23 77.734-43.23 153.66 0 67.699 54.879 122.58 122.58 122.58 22.035 0 42.707-5.816 60.578-15.992-115.52-43.246-142.49-215.11-111.62-320.98z",
    fill: "#5ec783"
  }), __jsx("path", {
    d: "M199.05 313.44c-23.438-23.438-61.438-23.438-84.875 0s-23.438 61.434 0 84.871 61.438 23.438 84.875 0 23.438-61.434 0-84.871z",
    fill: "#e1b89a"
  }), __jsx("path", {
    d: "M205.79 390.27c-64.918 10.973-95.234-59.492-62.641-92.875-26.656 6.117-46.547 29.969-46.547 58.48 0 33.145 26.871 60.016 60.016 60.016 20.348 0 38.316-10.137 49.172-25.621z",
    fill: "#d2996f"
  }), __jsx("path", {
    d: "M120.71 275.37c0-9.234-9.398-16.719-20.996-16.719-11.594 0-20.996 7.484-20.996 16.719 0 9.234 9.402 16.719 20.996 16.719 11.598 0 20.996-7.484 20.996-16.719zM234.52 275.37c0-9.234-9.398-16.719-20.996-16.719-11.594 0-20.996 7.484-20.996 16.719 0 9.234 9.402 16.719 20.996 16.719 11.598 0 20.996-7.484 20.996-16.719z",
    fill: "#fff"
  }), __jsx("path", {
    d: "M201.29 266.19a7.5 7.5 0 007.5-7.5v-7.414a7.5 7.5 0 00-7.5-7.5 7.497 7.497 0 00-7.5 7.5v7.414c0 4.144 3.356 7.5 7.5 7.5zM156.622 423.4c37.23 0 67.516-30.289 67.516-67.516 0-37.23-30.285-67.516-67.516-67.516-37.227 0-67.516 30.285-67.516 67.516 0 37.227 30.289 67.516 67.516 67.516zm0-120.03c28.957 0 52.516 23.559 52.516 52.516 0 28.957-23.559 52.516-52.516 52.516-28.957 0-52.516-23.559-52.516-52.516 0-28.957 23.559-52.516 52.516-52.516zm130.43-39.332c-10.184-17.996-17.543-31-17.543-61.812 0-32.555-13.859-61.93-35.977-82.551 7.688-4.445 14.527-9.613 20.383-15.465 5.121-5.121 9.762-11.02 13.793-17.527a7.507 7.507 0 00-2.426-10.328 7.501 7.501 0 00-10.324 2.426c-3.426 5.531-7.347 10.516-11.652 14.82-6.18 6.18-13.703 11.508-22.41 15.879-12.328-8.57-26.43-14.754-41.645-17.863a79.24 79.24 0 00-4.734-19.902c4.812-11.242 11.043-20.773 18.586-28.312 18.746-18.746 45.547-25.727 64.73-28.281 3.816-.508 7.566.758 10.28 3.473 2.716 2.714 3.981 6.46 3.474 10.28-.883 6.626-2.157 13.09-3.782 19.216a7.501 7.501 0 005.32 9.175c4.005 1.055 8.11-1.32 9.176-5.324 1.79-6.738 3.188-13.832 4.153-21.086 1.133-8.488-1.688-16.824-7.73-22.867-6.048-6.047-14.38-8.867-22.872-7.734-21.477 2.86-51.64 10.828-73.355 32.543-6.379 6.379-11.945 13.89-16.637 22.422a80.293 80.293 0 00-10.227-12.152c-14.953-14.566-34.656-22.59-55.484-22.59-12.75 0-23.125 10.37-23.125 23.125 0 12.75 10.375 23.12 23.125 23.12 15.57 0 28.72 10.657 32.352 25.22-50.695 11.078-88.77 56.316-88.77 110.29 0 30.812-7.36 43.816-17.547 61.82C14.145 285.323.5 309.432.5 355.893c0 32.602 9.989 63.852 28.883 90.383a7.5 7.5 0 0010.461 1.754c3.371-2.403 4.16-7.086 1.758-10.457C24.524 413.6 15.5 385.353 15.5 355.893c0-42.512 12.609-64.793 23.738-84.457 10.457-18.48 19.492-34.438 19.492-69.203 0-53.977 43.914-97.887 97.887-97.887 4.836 0 9.586.355 14.23 1.035.07.015.145.02.219.031 47.148 7.004 83.44 47.754 83.44 96.82 0 34.766 9.032 50.723 19.493 69.207 11.129 19.66 23.738 41.941 23.738 84.453 0 77.816-63.305 141.12-141.12 141.12-33.891 0-66.676-12.246-92.32-34.48-3.13-2.715-7.867-2.375-10.582.754a7.506 7.506 0 00.754 10.582c28.37 24.598 64.648 38.145 102.15 38.145 86.086 0 156.12-70.035 156.12-156.12 0-46.465-13.645-70.574-25.688-91.848zm-130.43-174.7c-3.113 0-6.195.133-9.246.379-4.746-21.844-24.145-37.996-47.223-37.996-4.48 0-8.125-3.645-8.125-8.121 0-4.48 3.644-8.125 8.125-8.125 16.895 0 32.883 6.512 45.016 18.332 10.016 9.758 16.48 22.23 18.69 35.77a113.892 113.892 0 00-7.237-.238zm0 396.63c71.727 0 130.08-58.352 130.08-130.08 0-39.609-11.34-59.645-22.309-79.02-10.762-19.016-20.926-36.973-20.926-74.645 0-47.891-38.957-86.852-86.848-86.852s-86.852 38.961-86.852 86.852c0 37.672-10.164 55.629-20.922 74.645-10.969 19.375-22.309 39.41-22.309 79.02.004 71.727 58.355 130.08 130.08 130.08zm-94.719-201.71c11.242-19.867 22.871-40.406 22.871-82.031 0-39.617 32.23-71.848 71.848-71.848 39.617 0 71.852 32.23 71.852 71.848 0 41.625 11.625 62.164 22.871 82.031 10.469 18.5 20.359 35.977 20.359 71.633 0 63.453-51.625 115.08-115.08 115.08-63.453 0-115.08-51.625-115.08-115.08 0-35.656 9.89-53.133 20.359-71.633zm50.055-18.059a7.5 7.5 0 007.5-7.5v-7.414a7.5 7.5 0 00-7.5-7.5 7.497 7.497 0 00-7.5 7.5v7.414c0 4.144 3.356 7.5 7.5 7.5zm44.664 5.695a23.107 23.107 0 0017.43-7.941 7.492 7.492 0 00-.727-10.578 7.497 7.497 0 00-10.582.726c-1.543 1.774-3.777 2.793-6.12 2.793s-4.575-1.019-6.122-2.793a7.492 7.492 0 00-10.578-.726 7.496 7.496 0 00-.73 10.578 23.112 23.112 0 0017.43 7.941z"
  }));
};

/* harmony default export */ var SVGIcons_Avocado = (Avocado);
// CONCATENATED MODULE: ./components/SVGIcons/Basket.tsx
var Basket_jsx = external_react_default.a.createElement;


const Basket = ({
  size = '34px'
}) => Basket_jsx("svg", {
  width: size,
  height: size,
  viewBox: "0 0 512 512"
}, Basket_jsx("path", {
  d: "M490.1 292.03H21.9c-7.953 0-14.4-6.447-14.4-14.4v-34.391c0-7.953 6.447-14.4 14.4-14.4h468.2c7.953 0 14.4 6.447 14.4 14.4v34.391c0 7.952-6.447 14.4-14.4 14.4z",
  fill: "#FAD97E"
}), Basket_jsx("path", {
  d: "M490.1 228.84h-38.076c7.953 0 14.4 6.447 14.4 14.4v34.391c0 7.953-6.447 14.4-14.4 14.4H490.1c7.953 0 14.4-6.447 14.4-14.4V243.24c0-7.953-6.447-14.4-14.4-14.4z",
  opacity: 0.1
}), Basket_jsx("path", {
  d: "M466.42 292.03H45.57l21.084 153.34c2.439 17.741 17.599 30.959 35.507 30.959h307.67c17.908 0 33.068-13.218 35.507-30.959l21.084-153.34z",
  fill: "#A16B4E"
}), Basket_jsx("path", {
  d: "M45.576 292.03l3.561 25.899h375.65l-17.523 127.44c-2.439 17.741-17.599 30.959-35.507 30.959h38.076c17.908 0 33.068-13.218 35.507-30.959l17.523-127.44 3.561-25.899H45.574z",
  opacity: 0.1
}), Basket_jsx("path", {
  d: "M427.22 228.84h-47.241v-94.743c0-28.224-22.962-51.186-51.186-51.186h-145.59c-28.224 0-51.186 22.962-51.186 51.186v94.743H84.776v-94.743c0-54.272 44.154-98.427 98.427-98.427h145.59c54.273 0 98.427 44.154 98.427 98.427v94.743z",
  fill: "#A16B4E"
}), Basket_jsx("path", {
  opacity: 0.1,
  d: "M84.78 202.94H132.02V228.84199999999998H84.78z"
}), Basket_jsx("path", {
  opacity: 0.1,
  d: "M379.98 202.94H427.22V228.84199999999998H379.98z"
}), Basket_jsx("path", {
  fill: "#FAD97E",
  d: "M193.91 35.672H318.09000000000003V82.912H193.91z"
}), Basket_jsx("g", {
  opacity: 0.1
}, Basket_jsx("path", {
  d: "M152.94 438.94l6.718-6.718a7.5 7.5 0 00-10.607-10.606l-6.717 6.717-6.717-6.717-6.717-6.718 6.717-6.718a7.5 7.5 0 00-10.607-10.606l-6.717 6.717-6.717-6.717a7.5 7.5 0 00-10.607 10.606l6.717 6.718-6.717 6.718a7.5 7.5 0 005.304 12.803 7.478 7.478 0 005.304-2.197l6.717-6.717 13.435 13.435-6.718 6.718a7.5 7.5 0 005.304 12.803 7.478 7.478 0 005.304-2.197l6.717-6.717 6.717 6.717c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197a7.5 7.5 0 000-10.606l-6.721-6.718zM426.23 363.1l6.718-6.718a7.5 7.5 0 00-.001-10.607 7.498 7.498 0 00-10.606 0l-6.717 6.717-6.717-6.717a7.5 7.5 0 00-10.606 0 7.5 7.5 0 00-.001 10.607l6.718 6.718-6.718 6.718a7.5 7.5 0 00.001 10.607c1.464 1.465 3.384 2.197 5.303 2.197s3.839-.732 5.304-2.197l6.717-6.717 6.717 6.717a7.476 7.476 0 005.304 2.197 7.474 7.474 0 005.303-2.197 7.5 7.5 0 00.001-10.607l-6.72-6.718z"
})), Basket_jsx("g", {
  fill: "#F15B70",
  opacity: 0.3
}, Basket_jsx("ellipse", {
  cx: 193.02,
  cy: 369.52,
  rx: 26.96,
  ry: 11.698
}), Basket_jsx("ellipse", {
  cx: 318.98,
  cy: 369.52,
  rx: 26.96,
  ry: 11.698
})), Basket_jsx("path", {
  d: "M490.1 221.34h-55.378v-87.243c0-58.408-47.519-105.93-105.93-105.93h-145.59c-58.408 0-105.93 47.519-105.93 105.93v87.243H21.894c-12.076 0-21.9 9.824-21.9 21.9v34.391c0 12.076 9.824 21.9 21.9 21.9h17.137l14.35 104.36a7.5 7.5 0 1014.859-2.044l-14.07-102.32h346.6c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5H21.9a6.907 6.907 0 01-6.9-6.9v-34.391c0-3.805 3.096-6.9 6.9-6.9h62.868l.01.001.01-.001h47.221l.01.001.01-.001h247.94l.01.001.01-.001h47.221l.01.001.01-.001h62.867c3.805 0 6.9 3.095 6.9 6.9v34.391c0 3.805-3.096 6.9-6.9 6.9h-56.094c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h23.817l-19.913 144.82c-1.92 13.956-13.99 24.48-28.077 24.48H102.16c-14.087 0-26.157-10.524-28.077-24.481l-1.696-12.333a7.5 7.5 0 10-14.859 2.044l1.696 12.332c2.935 21.343 21.394 37.438 42.937 37.438h307.67c21.543 0 40.002-16.095 42.936-37.438l20.193-146.86h17.137c12.076 0 21.9-9.824 21.9-21.9v-34.391c0-12.073-9.824-21.899-21.9-21.899zM296.76 43.17h13.835v32.241H296.76V43.17zm-33.255 0h18.255v32.241h-18.255V43.17zm-33.255 0h18.255v32.241H230.25V43.17zm-28.835 0h13.835v32.241h-13.835V43.17zm171.07 178.17h-232.96v-48.044c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v48.044h-32.24v-87.243c0-50.137 40.79-90.927 90.927-90.927h3.205v32.241h-3.205c-32.36 0-58.686 26.327-58.686 58.686V143c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-8.903c0-24.088 19.598-43.686 43.686-43.686h145.59c24.089 0 43.687 19.598 43.687 43.686v87.243h-.002zm47.241 0h-32.24v-87.243c0-32.359-26.326-58.686-58.687-58.686h-3.205v-32.24h3.205c50.137 0 90.927 40.79 90.927 90.927v87.242zm-93.24 122.15v-10.455c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10.455c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5zm-125.96 0v-10.455c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v10.455a7.5 7.5 0 0015 0zm55.482 15.528a29.528 29.528 0 0022.26-10.137 7.499 7.499 0 00-.727-10.582 7.5 7.5 0 00-10.582.726c-2.765 3.173-6.757 4.993-10.951 4.993s-8.186-1.82-10.951-4.993a7.5 7.5 0 00-10.582-.726 7.5 7.5 0 00-.727 10.582 29.524 29.524 0 0022.26 10.137z"
}));

/* harmony default export */ var SVGIcons_Basket = (Basket);
// CONCATENATED MODULE: ./components/SVGIcons/PosMeMuero.tsx
var PosMeMuero_jsx = external_react_default.a.createElement;

function PosMeMuero_extends() { PosMeMuero_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PosMeMuero_extends.apply(this, arguments); }

function PosMeMuero_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PosMeMuero_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PosMeMuero_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * Original Icon from Freepik, set: Cinco de Mayo.
 * And edited por yo merengues.
 * www.flaticon.com
 */
const PosMeMuero = (_ref) => {
  let {
    size = '58px'
  } = _ref,
      otherProps = PosMeMuero_objectWithoutProperties(_ref, ["size"]);

  return PosMeMuero_jsx("svg", PosMeMuero_extends({
    width: size,
    height: size,
    viewBox: "0 0 640 640"
  }, otherProps), PosMeMuero_jsx("defs", null, PosMeMuero_jsx("path", {
    id: "a",
    d: "M329.21 133.97c-2.16 16.15 11.58 29.89 27.73 27.74 25.07-3.35 60.92-12.62 86.34-38.03 25.41-25.42 34.69-61.28 38.03-86.35 2.15-16.14-11.59-29.88-27.73-27.73-25.07 3.34-60.93 12.62-86.35 38.03-25.41 25.41-34.69 61.27-38.02 86.34z"
  }), PosMeMuero_jsx("path", {
    id: "b",
    d: "M375.04 117.25c-3.66-3.66-3.66-9.6 0-13.26 4.89-4.9 44.05-44.06 48.95-48.95 3.66-3.66 9.6-3.66 13.26 0a9.361 9.361 0 010 13.26c-4.89 4.9-44.05 44.06-48.95 48.95-1.83 1.83-4.23 2.75-6.63 2.75s-4.8-.92-6.63-2.75z"
  }), PosMeMuero_jsx("path", {
    id: "c",
    d: "M308.7 125.13c0-28.17-22.91-51.08-51.08-51.08-10.79 0-19.54-8.75-19.54-19.54s8.75-19.54 19.54-19.54c49.71 0 90.16 40.45 90.16 90.16 0 10.79-8.75 19.53-19.54 19.53s-19.54-8.74-19.54-19.53z"
  }), PosMeMuero_jsx("path", {
    id: "d",
    d: "M344.2 100.06c-5.24-.54-10.57-.82-15.96-.82-8.66 0-17.15.73-25.43 2.11a50.803 50.803 0 015.89 23.78c0 10.79 8.75 19.53 19.54 19.53s19.54-8.74 19.54-19.53c0-8.7-1.27-17.1-3.58-25.07z"
  }), PosMeMuero_jsx("path", {
    id: "e",
    d: "M142.39 445.04c0-55.64 16.41-84.64 30.9-110.24 12.93-22.86 23.16-40.92 23.16-81.92 0-72.67 59.12-131.79 131.79-131.79s131.79 59.12 131.79 131.79c0 41 10.22 59.06 23.16 81.92 14.49 25.6 30.91 54.6 30.91 110.24 0 102.48-83.38 185.85-185.86 185.85s-185.85-83.37-185.85-185.85z"
  }), PosMeMuero_jsx("path", {
    id: "f",
    d: "M283.66 128.85c-50.8 18.32-87.21 67-87.21 124.03 0 41.01-10.23 59.06-23.16 81.92-14.49 25.6-30.9 54.6-30.9 110.24 0 102.48 83.37 185.85 185.85 185.85 44.57 0 85.51-15.77 117.57-42.02-201.63-28.25-232.21-330.29-162.15-460.02z"
  }), PosMeMuero_jsx("path", {
    id: "g",
    d: "M229.01 252.88c0-54.81 44.42-99.23 99.23-99.23 54.8 0 99.23 44.42 99.23 99.23 0 98.31 54.06 97.21 54.06 192.16 0 84.66-68.63 153.29-153.29 153.29S174.95 529.7 174.95 445.04c0-94.95 54.06-93.85 54.06-192.16z"
  }), PosMeMuero_jsx("path", {
    id: "h",
    d: "M229.01 252.88c0 98.31-54.06 97.21-54.06 192.16 0 84.66 68.63 153.29 153.29 153.29 27.55 0 53.41-7.27 75.75-20-144.46-54.08-178.19-269-139.58-401.4-21.64 18.2-35.4 45.46-35.4 75.95z"
  }), PosMeMuero_jsx("path", {
    id: "i",
    d: "M275.16 391.98c-29.31 29.31-29.31 76.83 0 106.14s76.83 29.31 106.14 0 29.31-76.83 0-106.14-76.83-29.31-106.14 0z"
  }), PosMeMuero_jsx("path", {
    id: "j",
    d: "M311.4 371.91c-33.34 7.65-58.21 37.48-58.21 73.13 0 41.45 33.6 75.05 75.05 75.05 25.44 0 47.91-12.67 61.49-32.04-81.18 13.73-119.09-74.39-78.33-116.14z"
  }), PosMeMuero_jsx("path", {
    id: "k",
    d: "M393.48 323.5v-9.27c0-5.19-4.2-9.38-9.38-9.38-5.19 0-9.38 4.19-9.38 9.38v9.27c0 5.18 4.19 9.38 9.38 9.38 5.18 0 9.38-4.2 9.38-9.38zm19.19 121.54c0-46.56-37.87-84.43-84.43-84.43s-84.43 37.87-84.43 84.43c0 46.55 37.87 84.43 84.43 84.43s84.43-37.88 84.43-84.43zm-18.76 0c0 36.21-29.46 65.67-65.67 65.67s-65.67-29.46-65.67-65.67 29.46-65.67 65.67-65.67 65.67 29.46 65.67 65.67zm75.5-192.16c0-40.71-17.33-77.44-44.99-103.23 9.62-5.56 18.17-12.02 25.49-19.34 6.41-6.4 12.21-13.78 17.25-21.92 2.73-4.4 1.37-10.18-3.03-12.91s-10.19-1.37-12.91 3.03c-4.29 6.92-9.19 13.15-14.58 18.53-7.72 7.73-17.13 14.39-28.02 19.86-15.42-10.72-33.05-18.45-52.08-22.34-.91-8.59-2.89-16.94-5.92-24.89 6.02-14.06 13.81-25.98 23.24-35.4 23.45-23.45 56.96-32.18 80.95-35.37 4.77-.64 9.46.95 12.86 4.34 3.39 3.4 4.98 8.08 4.34 12.86-1.1 8.28-2.69 16.37-4.73 24.03a9.374 9.374 0 006.66 11.47c5 1.32 10.14-1.65 11.47-6.66 2.24-8.42 3.99-17.29 5.19-26.36 1.42-10.62-2.11-21.04-9.66-28.6-7.57-7.56-17.99-11.09-28.6-9.67C425.48 3.88 387.76 13.85 360.6 41c-7.98 7.98-14.94 17.37-20.8 28.04-3.72-5.41-7.99-10.51-12.79-15.19-18.7-18.22-43.34-28.25-69.39-28.25-15.94 0-28.92 12.97-28.92 28.92 0 15.94 12.98 28.91 28.92 28.91 19.47 0 35.92 13.33 40.46 31.54-63.4 13.85-111.01 70.42-111.01 137.91 0 38.53-9.2 54.8-21.94 77.31-15.06 26.6-32.12 56.75-32.12 114.85 0 40.77 12.49 79.85 36.12 113.03 3 4.21 8.86 5.2 13.08 2.19 4.21-3 5.2-8.86 2.2-13.08-21.36-29.97-32.64-65.3-32.64-102.14 0-53.16 15.76-81.03 29.68-105.62 13.08-23.11 24.38-43.06 24.38-86.54 0-67.5 54.91-122.41 122.41-122.41 6.05 0 11.99.45 17.79 1.3.09.02.18.02.28.03 58.96 8.76 104.34 59.72 104.34 121.08 0 43.48 11.3 63.43 24.38 86.55 13.92 24.58 29.69 52.45 29.69 105.61 0 97.31-79.17 176.48-176.48 176.48-42.38 0-83.38-15.32-115.45-43.12-3.91-3.4-9.84-2.97-13.24.94a9.388 9.388 0 00.95 13.24c35.48 30.76 80.84 47.7 127.74 47.7 107.65 0 195.23-87.58 195.23-195.24 0-58.11-17.06-88.26-32.12-114.86-12.73-22.5-21.94-38.77-21.94-77.3zm-152.73-140.7c-5.94-27.31-30.2-47.51-59.06-47.51-5.6 0-10.16-4.56-10.16-10.16s4.56-10.16 10.16-10.16c21.13 0 41.12 8.14 56.3 22.92 12.52 12.21 20.61 27.8 23.37 44.74-2.99-.19-6.01-.3-9.05-.3-3.89 0-7.75.16-11.56.47zm174.23 332.86c0-49.53-14.18-74.59-27.9-98.82-13.45-23.78-26.17-46.23-26.17-93.34 0-59.89-48.71-108.61-108.6-108.61s-108.61 48.72-108.61 108.61c0 47.11-12.71 69.56-26.17 93.34-13.71 24.23-27.89 49.29-27.89 98.82 0 89.7 72.97 162.67 162.67 162.67s162.67-72.97 162.67-162.67zM238.39 252.88c0-49.55 40.31-89.85 89.85-89.85s89.85 40.3 89.85 89.85c0 52.05 14.54 77.74 28.6 102.58 13.09 23.14 25.46 44.99 25.46 89.58 0 79.35-64.56 143.91-143.91 143.91s-143.91-64.56-143.91-143.91c0-44.59 12.37-66.44 25.46-89.58 14.06-24.84 28.6-50.53 28.6-102.58zm43.37 70.62v-9.27c0-5.19-4.2-9.38-9.38-9.38s-9.37 4.19-9.37 9.38v9.27c0 5.18 4.19 9.38 9.37 9.38s9.38-4.2 9.38-9.38zm68.27 6.57c3.41-3.9 3-9.83-.9-13.23-3.91-3.4-9.83-3-13.24.91-1.93 2.22-4.72 3.49-7.65 3.49s-5.72-1.27-7.66-3.49c-3.4-3.91-9.32-4.31-13.22-.91-3.91 3.4-4.32 9.33-.92 13.23 5.5 6.31 13.45 9.93 21.8 9.93 8.36 0 16.3-3.62 21.79-9.93z"
  }), PosMeMuero_jsx("path", {
    id: "l",
    d: "M291.25 294.42c4.27 4.27 4.27 11.2 0 15.47l-32.57 32.57a10.936 10.936 0 01-15.48 0c-1.54-1.54 1.55 1.55 0 0-4.27-4.27-4.27-11.19 0-15.47 8.07-8.06 24.51-24.51 32.58-32.57 4.27-4.27 11.19-4.27 15.47 0 1.54 1.55-1.55-1.54 0 0z"
  }), PosMeMuero_jsx("path", {
    id: "m",
    d: "M291.82 341.25c-4.27 4.27-11.2 4.27-15.47 0l-32.57-32.57a10.955 10.955 0 010-15.48c1.55-1.54-1.55 1.55 0 0 4.27-4.27 11.2-4.27 15.47 0 8.06 8.07 24.51 24.51 32.57 32.58 4.27 4.27 4.27 11.19 0 15.47-1.55 1.54 1.55-1.55 0 0z"
  }), PosMeMuero_jsx("path", {
    id: "n",
    d: "M303.11 300h50.22v50h-50.22v-50z"
  }), PosMeMuero_jsx("path", {
    id: "o",
    d: "M414.25 296.59c4.27 4.27 4.27 11.2 0 15.47l-32.57 32.57a10.955 10.955 0 01-15.48 0c-1.54-1.55 1.55 1.55 0 0-4.27-4.27-4.27-11.2 0-15.47 8.07-8.06 24.51-24.51 32.58-32.57 4.27-4.27 11.19-4.27 15.47 0 1.54 1.55-1.55-1.55 0 0z"
  }), PosMeMuero_jsx("path", {
    id: "p",
    d: "M414.82 343.41c-4.27 4.27-11.2 4.27-15.47 0l-32.57-32.57c-4.27-4.27-4.27-11.2 0-15.47 1.55-1.55-1.55 1.55 0 0 4.27-4.27 11.2-4.27 15.47 0l32.57 32.57c4.27 4.27 4.27 11.2 0 15.47-1.55 1.55 1.55-1.55 0 0z"
  }), PosMeMuero_jsx("path", {
    id: "q",
    d: "M333.96 316l1.29.2 1.27.25 1.25.3 1.22.36 1.21.41 1.18.45 1.16.51 1.13.55 1.1.6 1.08.64 1.05.68 1.01.73.99.76.95.81.91.84.88.88.85.92.8.95.77.98.73 1.02.68 1.05.64 1.07.6 1.11.55 1.13.5 1.16.46 1.18.41 1.2.35 1.23.31 1.25.25 1.27.2 1.29.14 1.3.08 1.18h-13.11l-.13-1.2-.25-1.26-.34-1.22-.42-1.19-.51-1.15-.59-1.1-.67-1.04-.74-1-.81-.93-.88-.88-.93-.81-1-.74-1.04-.67-1.1-.59-1.15-.51-1.19-.42-1.22-.34-1.27-.25-1.29-.15-1.32-.05-1.32.05-1.29.15-1.27.25-1.22.34-1.19.42-1.15.51-1.1.59-1.04.67-1 .74-.93.81-.88.88-.81.93-.74 1-.67 1.04-.59 1.1-.51 1.15-.42 1.19-.34 1.22-.25 1.26-.13 1.2h-13.11l.08-1.18.14-1.3.2-1.29.25-1.27.31-1.25.35-1.23.41-1.2.46-1.18.5-1.16.55-1.13.6-1.11.64-1.07.68-1.05.73-1.02.77-.98.8-.95.85-.92.88-.88.91-.84.95-.81.99-.76 1.01-.73 1.05-.68 1.08-.64 1.1-.6 1.13-.55 1.16-.51 1.18-.45 1.21-.41 1.22-.36 1.25-.3 1.27-.25 1.29-.2 1.3-.15 1.32-.08 1.34-.03 1.34.03 1.32.08 1.3.15z"
  })), PosMeMuero_jsx("use", {
    fill: "#153830",
    xlinkHref: "#a"
  }), PosMeMuero_jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#a"
  }), PosMeMuero_jsx("use", {
    fill: "#021107",
    xlinkHref: "#b"
  }), PosMeMuero_jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#b"
  }), PosMeMuero_jsx("use", {
    fill: "#754c2e",
    xlinkHref: "#c"
  }), PosMeMuero_jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#c"
  }), PosMeMuero_jsx("use", {
    fill: "#2c1708",
    xlinkHref: "#d"
  }), PosMeMuero_jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#d"
  }), PosMeMuero_jsx("use", {
    fill: "#4e5660",
    xlinkHref: "#e"
  }), PosMeMuero_jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#e"
  }), PosMeMuero_jsx("use", {
    fill: "#383c43",
    xlinkHref: "#f"
  }), PosMeMuero_jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#f"
  }), PosMeMuero_jsx("use", {
    fill: "#7a8179",
    xlinkHref: "#g"
  }), PosMeMuero_jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#g"
  }), PosMeMuero_jsx("use", {
    fill: "#202923",
    xlinkHref: "#h"
  }), PosMeMuero_jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#h"
  }), PosMeMuero_jsx("use", {
    fill: "#754c2e",
    xlinkHref: "#i"
  }), PosMeMuero_jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#i"
  }), PosMeMuero_jsx("use", {
    fill: "#2c1708",
    xlinkHref: "#j"
  }), PosMeMuero_jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#j"
  }), PosMeMuero_jsx("use", {
    xlinkHref: "#k"
  }), PosMeMuero_jsx("use", {
    fillOpacity: 0,
    stroke: "#000",
    strokeOpacity: 0,
    xlinkHref: "#k"
  }), PosMeMuero_jsx("use", {
    xlinkHref: "#l"
  }), PosMeMuero_jsx("use", {
    xlinkHref: "#m"
  }), PosMeMuero_jsx("use", {
    fill: "#7a8179",
    xlinkHref: "#n"
  }), PosMeMuero_jsx("use", {
    xlinkHref: "#o"
  }), PosMeMuero_jsx("use", {
    xlinkHref: "#p"
  }), PosMeMuero_jsx("use", {
    xlinkHref: "#q"
  }));
};

/* harmony default export */ var SVGIcons_PosMeMuero = (PosMeMuero);
// CONCATENATED MODULE: ./components/SVGIcons/index.ts




/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ })

/******/ });