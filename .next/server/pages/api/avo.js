module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/avo/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cors-middleware.ts":
/*!****************************!*\
  !*** ./cors-middleware.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Hey there you curious :)
 *
 * By default, NextJS APIs are same-site origin only.
 * But since *I needed the main project*
 * to have public API access, I had to configure CORS.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors
 * @see https://github.com/expressjs/cors#configuration-options
 */
const CORS_OPTIONS = {
  methods: ['GET', 'OPTIONS']
};

function promisifyMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
} // Initialize the cors middleware


const cors = promisifyMiddleware(cors__WEBPACK_IMPORTED_MODULE_0___default()(CORS_OPTIONS));
/* harmony default export */ __webpack_exports__["default"] = (cors);

/***/ }),

/***/ "./database/data.ts":
/*!**************************!*\
  !*** ./database/data.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const data = {
  '2zd33b8c': {
    name: 'Maluma Hass Avocado',
    id: '2zd33b8c',
    sku: 'NUR72KCM',
    price: 1.15,
    image: '/images/maluma.jpg',
    attributes: {
      description: 'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',
      shape: 'Oval',
      hardiness: '1 °C',
      taste: 'Catchy, is an avocado'
    }
  },
  '6trfgkkj': {
    name: 'Fuerte Avocado',
    id: '6trfgkkj',
    sku: 'AX4M8SJV',
    price: 1.21,
    image: '/images/fuerte.jpg',
    attributes: {
      description: 'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',
      shape: 'Pear',
      hardiness: '-1 °C',
      taste: 'Magnificent, is a strong avocado'
    }
  },
  '7bcr49em': {
    name: 'Gwen Hass Avocado',
    id: '7bcr49em',
    sku: 'HYA78F6J',
    price: 1.25,
    image: '/images/gwen.jpg',
    attributes: {
      description: "A seedling bred from 'Hass' x 'Thille' in 1982, 'Gwen' is higher yielding and more dwarfing than 'Hass' in California. The fruit has an oval shape, slightly smaller than 'Hass' (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than 'Hass', and is dull green when ripe. It is frost-hardy down to −1 °C (30 °F)",
      shape: 'Plump',
      hardiness: '−1 °C',
      taste: 'Superb, is an avocado'
    }
  },
  '098323ks': {
    name: 'Bacon Avocado',
    id: '098323ks',
    sku: 'BXD100BLK',
    price: 1.51,
    image: '/images/bacon.jpg',
    attributes: {
      description: 'Developed by a farmer, James Bacon, in 1954, Bacon has medium-sized fruit with smooth, green skin with yellow-green, light-tasting flesh. When ripe, the skin remains green, but darkens slightly, and fruit yields to gentle pressure. It is cold-hardy down to −5 °C (23 °F)',
      shape: 'Oval',
      hardiness: '−5 °C',
      taste: 'Creamy, is an avocado'
    }
  },
  b8uthe2y: {
    name: 'Hass Avocado',
    id: 'b8uthe2y',
    sku: 'RMRCZN7E',
    price: 1.39,
    image: '/images/hass.jpg',
    attributes: {
      description: "The 'Hass' is the most common cultivar of avocado. It produces fruit year-round and accounts for 80% of cultivated avocados in the world.[21][55] All 'Hass' trees are descended from a single 'mother tree' raised by a mail carrier named Rudolph Hass, of La Habra Heights, California.[20][55] Hass patented the productive tree in 1935. The 'mother tree', of uncertain subspecies, died of root rot and was cut down in September 2002.[21][55][56] 'Hass' trees have medium-sized (150–250 g or 5.3–8.8 oz), ovate fruit with a black, pebbled skin. The flesh has a nutty, rich flavor with 19% oil. A hybrid Guatemalan type can withstand temperatures to −1 °C (30 °F)",
      shape: 'Oval',
      hardiness: '−1 °C',
      taste: 'Gorgeous, is an avocado'
    }
  },
  ewxsd6xb: {
    name: 'Lamb Hass Avocado',
    id: 'ewxsd6xb',
    sku: 'N55229ZA',
    price: 1.34,
    image: '/images/lamb.jpg',
    attributes: {
      description: 'The Lamb Hass avocado is a cross between a Hass and Gwen avocado. The fruits are larger in size and later maturing than Hass. It is gaining in popularity as a commercial and backyard variety due to its exceptional flavor and easy peeling qualities. The tree has an upright, compact habit.',
      shape: 'Obovate',
      hardiness: '-2 °C',
      taste: 'Great, is an avocado'
    }
  },
  fpr72m9k: {
    name: 'Pinkerton Avocado',
    id: 'fpr72m9k',
    sku: 'B4HZ42TM',
    price: 1.27,
    image: '/images/pinkerton.jpg',
    attributes: {
      description: "First grown on the Pinkerton Ranch in Saticoy, California, in the early 1970s, 'Pinkerton' is a seedling of 'Hass' x 'Rincon'. The large fruit has a small seed, and its green skin deepens in color as it ripens. The thick flesh has a smooth, creamy texture, pale green color, good flavor, and high oil content. It shows some cold tolerance, to −1 °C (30 °F) and bears consistently heavy crops. A hybrid Guatemalan type, it has excellent peeling characteristics",
      shape: 'Long pear',
      hardiness: '−1 °C',
      taste: 'Marvelous, is an avocado'
    }
  },
  t9dv25gs: {
    name: 'Reed Avocado',
    id: 't9dv25gs',
    sku: 'ZY3T9XXC',
    price: 1.18,
    image: '/images/reed.jpg',
    attributes: {
      description: 'Developed from a chance seedling found in 1948 by James S. Reed in California, this cultivar has large, round, green fruit with a smooth texture and dark, thick, glossy skin. Smooth and delicate, the flesh has a slightly nutty flavor. The skin ripens green. A Guatemalan type, it is hardy to −1 °C (30 °F). Tree size is about 5 by 4 m (16.4 by 13.1 ft)',
      shape: 'Round',
      hardiness: '−1 °C',
      taste: 'Exquisite, is an avocado'
    }
  },
  t345w48y: {
    name: 'Zutano Avocado',
    id: 't345w48y',
    sku: 'MW79ZZ6Y',
    price: 1.25,
    image: '/images/zutano.jpg',
    attributes: {
      description: 'The Zutano avocado is a cold hardy, consistent producing avocado variety. It resembles the Fuerte in appearance but is less flavorful but more cold hardy. The green fruits are obovate in shape with waxy bumps on the skin. The flesh has a low oil but high water content which causes it to have a more fibrous texture.',
      shape: 'Pear',
      hardiness: '-5 °C',
      taste: 'Splendid, is an avocado'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./database/db.ts":
/*!************************!*\
  !*** ./database/db.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./database/data.ts");
// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)


class Database {
  constructor() {}

  async getAll() {
    const asArray = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__["default"]);
    await randomDelay();
    return asArray;
  }

  async getById(id) {
    if (!Object.prototype.hasOwnProperty.call(_data__WEBPACK_IMPORTED_MODULE_0__["default"], id)) {
      return null;
    }

    const entry = _data__WEBPACK_IMPORTED_MODULE_0__["default"][id];
    await randomDelay();
    return entry;
  }

} // Let's also add a delay to make it a bit closer to reality


const randomDelay = () => new Promise(resolve => {
  const max = 350;
  const min = 100;
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  setTimeout(resolve, delay);
});

/* harmony default export */ __webpack_exports__["default"] = (Database);

/***/ }),

/***/ "./pages/api/avo/index.ts":
/*!********************************!*\
  !*** ./pages/api/avo/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @database */ "./database/db.ts");
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cors */ "./cors-middleware.ts");



const allAvos = async (req, res) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await Object(_cors__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
    const db = new _database__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const allEntries = await db.getAll();
    const lenght = allEntries.length; // Notice: We're manually setting the response object
    // However Next.JS offers Express-like helpers :)
    // https://nextjs.org/docs/api-routes/response-helpers

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      lenght,
      data: allEntries
    }));
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.end(JSON.stringify({
      length: 0,
      data: [],
      error: 'Something went wrong'
    }));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (allAvos);

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29ycy1taWRkbGV3YXJlLnRzIiwid2VicGFjazovLy8uL2RhdGFiYXNlL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vZGF0YWJhc2UvZGIudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F2by9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiXSwibmFtZXMiOlsiQ09SU19PUFRJT05TIiwibWV0aG9kcyIsInByb21pc2lmeU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsImNvcnMiLCJjb3JzV3JhcHBlciIsImRhdGEiLCJuYW1lIiwiaWQiLCJza3UiLCJwcmljZSIsImltYWdlIiwiYXR0cmlidXRlcyIsImRlc2NyaXB0aW9uIiwic2hhcGUiLCJoYXJkaW5lc3MiLCJ0YXN0ZSIsImI4dXRoZTJ5IiwiZXd4c2Q2eGIiLCJmcHI3Mm05ayIsInQ5ZHYyNWdzIiwidDM0NXc0OHkiLCJEYXRhYmFzZSIsImNvbnN0cnVjdG9yIiwiZ2V0QWxsIiwiYXNBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsImFsbERhdGEiLCJyYW5kb21EZWxheSIsImdldEJ5SWQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJlbnRyeSIsIm1heCIsIm1pbiIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCIsImFsbEF2b3MiLCJlbmFibGVQdWJsaWNBY2Nlc3MiLCJkYiIsIkRCIiwiYWxsRW50cmllcyIsImxlbmdodCIsImxlbmd0aCIsInN0YXR1c0NvZGUiLCJzZXRIZWFkZXIiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QUFVO0FBQ1ZDLFdBQU8sQ0FBQ0MsS0FBUixDQUFjRixDQUFkO0FBQ0F4RCxPQUFHLENBQUNtRCxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FuRCxPQUFHLENBQUNxRCxHQUFKLENBQVFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVMLFlBQU0sRUFBRSxDQUFWO0FBQWExQyxVQUFJLEVBQUUsRUFBbkI7QUFBdUJrRCxXQUFLLEVBQUU7QUFBOUIsS0FBZixDQUFSO0FBQ0Q7QUFDRixDQXJCRDs7QUF1QmVkLHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDM0JBLGlDIiwiZmlsZSI6InBhZ2VzL2FwaS9hdm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9hdm8vaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgY29yc1dyYXBwZXIgZnJvbSAnY29ycyc7XHJcbmltcG9ydCB7IFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnZXhwcmVzcyc7XHJcblxyXG4vKipcclxuICogSGV5IHRoZXJlIHlvdSBjdXJpb3VzIDopXHJcbiAqXHJcbiAqIEJ5IGRlZmF1bHQsIE5leHRKUyBBUElzIGFyZSBzYW1lLXNpdGUgb3JpZ2luIG9ubHkuXHJcbiAqIEJ1dCBzaW5jZSAqSSBuZWVkZWQgdGhlIG1haW4gcHJvamVjdCpcclxuICogdG8gaGF2ZSBwdWJsaWMgQVBJIGFjY2VzcywgSSBoYWQgdG8gY29uZmlndXJlIENPUlMuXHJcbiAqXHJcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL2FwaS1yb3V0ZXMtY29yc1xyXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9leHByZXNzanMvY29ycyNjb25maWd1cmF0aW9uLW9wdGlvbnNcclxuICovXHJcbmNvbnN0IENPUlNfT1BUSU9OUyA9IHtcclxuICBtZXRob2RzOiBbJ0dFVCcsICdPUFRJT05TJ10sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBwcm9taXNpZnlNaWRkbGV3YXJlKG1pZGRsZXdhcmU6IFJlcXVlc3RIYW5kbGVyKSB7XHJcbiAgcmV0dXJuIChyZXE6IGFueSwgcmVzOiBhbnkpID0+XHJcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIG1pZGRsZXdhcmUocmVxLCByZXMsIChyZXN1bHQ6IEVycm9yIHwgdW5rbm93bikgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBJbml0aWFsaXplIHRoZSBjb3JzIG1pZGRsZXdhcmVcclxuY29uc3QgY29ycyA9IHByb21pc2lmeU1pZGRsZXdhcmUoY29yc1dyYXBwZXIoQ09SU19PUFRJT05TKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb3JzO1xyXG4iLCJjb25zdCBkYXRhOiBSZWNvcmQ8VFByb2R1Y3RJZCwgVFByb2R1Y3Q+ID0ge1xyXG4gICcyemQzM2I4Yyc6IHtcclxuICAgIG5hbWU6ICdNYWx1bWEgSGFzcyBBdm9jYWRvJyxcclxuICAgIGlkOiAnMnpkMzNiOGMnLFxyXG4gICAgc2t1OiAnTlVSNzJLQ00nLFxyXG4gICAgcHJpY2U6IDEuMTUsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvbWFsdW1hLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdBIHJlbGF0aXZlbHkgbmV3IGN1bHRpdmFyLCBpdCB3YXMsIHRoZSBwcmV0dHkgYm95IGJhYnksIGRpc2NvdmVyZWQgaW4gU291dGggQWZyaWNhIGluIHRoZSBlYXJseSAxOTkwcyBieSBNci4gQS5HLiAoRHJpZXMpIEpvdWJlcnQuIE1hbHVtYSBCYWJ5eS4gSXQgaXMgYSBjaGFuY2Ugc2VlZGxpbmcgb2YgdW5rbm93biBwYXJlbnRhZ2UnLFxyXG4gICAgICBzaGFwZTogJ092YWwnLFxyXG4gICAgICBoYXJkaW5lc3M6ICcxIMKwQycsXHJcbiAgICAgIHRhc3RlOiAnQ2F0Y2h5LCBpcyBhbiBhdm9jYWRvJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICAnNnRyZmdra2onOiB7XHJcbiAgICBuYW1lOiAnRnVlcnRlIEF2b2NhZG8nLFxyXG4gICAgaWQ6ICc2dHJmZ2traicsXHJcbiAgICBza3U6ICdBWDRNOFNKVicsXHJcbiAgICBwcmljZTogMS4yMSxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9mdWVydGUuanBnJyxcclxuICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgJ1RoZSBGdWVydGUgYXZvY2FkbyBpcyB0aGUgc2Vjb25kIGxhcmdlc3QgY29tbWVyY2lhbCB2YXJpZXR5IGJlaGluZCBIYXNzLiBJdCBpcyBhIGxvbmcgdGltZSBDYWxpZm9ybmlhIGNvbW1lcmNpYWwgdmFyaWV0eSB2YWx1ZWQgZm9yIGl0cyB3aW50ZXIgc2Vhc29uIHJpcGVuaW5nIGFuZCBpdHMgQi1UeXBlIGJsb3Nzb20gdHlwZSB3aGljaCBtb3N0IGdyb3dlcnMgcGxhbnQgYWRqYWNlbnQgdG8gdGhlIEhhc3MgZm9yIGEgbW9yZSBjb25zaXN0ZW50IHByb2R1Y3Rpb24gY3ljbGUuIFRoaXMgYXZvY2FkbyB0ZW5kcyB0byBwcm9kdWNlIGhlYXZpbHkgaW4gYWx0ZXJuYXRlIHllYXJzLicsXHJcbiAgICAgIHNoYXBlOiAnUGVhcicsXHJcbiAgICAgIGhhcmRpbmVzczogJy0xIMKwQycsXHJcbiAgICAgIHRhc3RlOiAnTWFnbmlmaWNlbnQsIGlzIGEgc3Ryb25nIGF2b2NhZG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gICc3YmNyNDllbSc6IHtcclxuICAgIG5hbWU6ICdHd2VuIEhhc3MgQXZvY2FkbycsXHJcbiAgICBpZDogJzdiY3I0OWVtJyxcclxuICAgIHNrdTogJ0hZQTc4RjZKJyxcclxuICAgIHByaWNlOiAxLjI1LFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2d3ZW4uanBnJyxcclxuICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJBIHNlZWRsaW5nIGJyZWQgZnJvbSAnSGFzcycgeCAnVGhpbGxlJyBpbiAxOTgyLCAnR3dlbicgaXMgaGlnaGVyIHlpZWxkaW5nIGFuZCBtb3JlIGR3YXJmaW5nIHRoYW4gJ0hhc3MnIGluIENhbGlmb3JuaWEuIFRoZSBmcnVpdCBoYXMgYW4gb3ZhbCBzaGFwZSwgc2xpZ2h0bHkgc21hbGxlciB0aGFuICdIYXNzJyAoMTAw4oCTMjAwIGcgb3IgMy414oCTNy4xIG96KSwgd2l0aCBhIHJpY2gsIG51dHR5IGZsYXZvci4gVGhlIHNraW4gdGV4dHVyZSBpcyBtb3JlIGZpbmVseSBwZWJibGVkIHRoYW4gJ0hhc3MnLCBhbmQgaXMgZHVsbCBncmVlbiB3aGVuIHJpcGUuIEl0IGlzIGZyb3N0LWhhcmR5IGRvd24gdG8g4oiSMSDCsEMgKDMwIMKwRilcIixcclxuICAgICAgc2hhcGU6ICdQbHVtcCcsXHJcbiAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcclxuICAgICAgdGFzdGU6ICdTdXBlcmIsIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gICcwOTgzMjNrcyc6IHtcclxuICAgIG5hbWU6ICdCYWNvbiBBdm9jYWRvJyxcclxuICAgIGlkOiAnMDk4MzIza3MnLFxyXG4gICAgc2t1OiAnQlhEMTAwQkxLJyxcclxuICAgIHByaWNlOiAxLjUxLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2JhY29uLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdEZXZlbG9wZWQgYnkgYSBmYXJtZXIsIEphbWVzIEJhY29uLCBpbiAxOTU0LCBCYWNvbiBoYXMgbWVkaXVtLXNpemVkIGZydWl0IHdpdGggc21vb3RoLCBncmVlbiBza2luIHdpdGggeWVsbG93LWdyZWVuLCBsaWdodC10YXN0aW5nIGZsZXNoLiBXaGVuIHJpcGUsIHRoZSBza2luIHJlbWFpbnMgZ3JlZW4sIGJ1dCBkYXJrZW5zIHNsaWdodGx5LCBhbmQgZnJ1aXQgeWllbGRzIHRvIGdlbnRsZSBwcmVzc3VyZS4gSXQgaXMgY29sZC1oYXJkeSBkb3duIHRvIOKIkjUgwrBDICgyMyDCsEYpJyxcclxuICAgICAgc2hhcGU6ICdPdmFsJyxcclxuICAgICAgaGFyZGluZXNzOiAn4oiSNSDCsEMnLFxyXG4gICAgICB0YXN0ZTogJ0NyZWFteSwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYjh1dGhlMnk6IHtcclxuICAgIG5hbWU6ICdIYXNzIEF2b2NhZG8nLFxyXG4gICAgaWQ6ICdiOHV0aGUyeScsXHJcbiAgICBza3U6ICdSTVJDWk43RScsXHJcbiAgICBwcmljZTogMS4zOSxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9oYXNzLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiVGhlICdIYXNzJyBpcyB0aGUgbW9zdCBjb21tb24gY3VsdGl2YXIgb2YgYXZvY2Fkby4gSXQgcHJvZHVjZXMgZnJ1aXQgeWVhci1yb3VuZCBhbmQgYWNjb3VudHMgZm9yIDgwJSBvZiBjdWx0aXZhdGVkIGF2b2NhZG9zIGluIHRoZSB3b3JsZC5bMjFdWzU1XSBBbGwgJ0hhc3MnIHRyZWVzIGFyZSBkZXNjZW5kZWQgZnJvbSBhIHNpbmdsZSAnbW90aGVyIHRyZWUnIHJhaXNlZCBieSBhIG1haWwgY2FycmllciBuYW1lZCBSdWRvbHBoIEhhc3MsIG9mIExhIEhhYnJhIEhlaWdodHMsIENhbGlmb3JuaWEuWzIwXVs1NV0gSGFzcyBwYXRlbnRlZCB0aGUgcHJvZHVjdGl2ZSB0cmVlIGluIDE5MzUuIFRoZSAnbW90aGVyIHRyZWUnLCBvZiB1bmNlcnRhaW4gc3Vic3BlY2llcywgZGllZCBvZiByb290IHJvdCBhbmQgd2FzIGN1dCBkb3duIGluIFNlcHRlbWJlciAyMDAyLlsyMV1bNTVdWzU2XSAnSGFzcycgdHJlZXMgaGF2ZSBtZWRpdW0tc2l6ZWQgKDE1MOKAkzI1MCBnIG9yIDUuM+KAkzguOCBveiksIG92YXRlIGZydWl0IHdpdGggYSBibGFjaywgcGViYmxlZCBza2luLiBUaGUgZmxlc2ggaGFzIGEgbnV0dHksIHJpY2ggZmxhdm9yIHdpdGggMTklIG9pbC4gQSBoeWJyaWQgR3VhdGVtYWxhbiB0eXBlIGNhbiB3aXRoc3RhbmQgdGVtcGVyYXR1cmVzIHRvIOKIkjEgwrBDICgzMCDCsEYpXCIsXHJcbiAgICAgIHNoYXBlOiAnT3ZhbCcsXHJcbiAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcclxuICAgICAgdGFzdGU6ICdHb3JnZW91cywgaXMgYW4gYXZvY2FkbycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXd4c2Q2eGI6IHtcclxuICAgIG5hbWU6ICdMYW1iIEhhc3MgQXZvY2FkbycsXHJcbiAgICBpZDogJ2V3eHNkNnhiJyxcclxuICAgIHNrdTogJ041NTIyOVpBJyxcclxuICAgIHByaWNlOiAxLjM0LFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2xhbWIuanBnJyxcclxuICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgJ1RoZSBMYW1iIEhhc3MgYXZvY2FkbyBpcyBhIGNyb3NzIGJldHdlZW4gYSBIYXNzIGFuZCBHd2VuIGF2b2NhZG8uIFRoZSBmcnVpdHMgYXJlIGxhcmdlciBpbiBzaXplIGFuZCBsYXRlciBtYXR1cmluZyB0aGFuIEhhc3MuIEl0IGlzIGdhaW5pbmcgaW4gcG9wdWxhcml0eSBhcyBhIGNvbW1lcmNpYWwgYW5kIGJhY2t5YXJkIHZhcmlldHkgZHVlIHRvIGl0cyBleGNlcHRpb25hbCBmbGF2b3IgYW5kIGVhc3kgcGVlbGluZyBxdWFsaXRpZXMuIFRoZSB0cmVlIGhhcyBhbiB1cHJpZ2h0LCBjb21wYWN0IGhhYml0LicsXHJcbiAgICAgIHNoYXBlOiAnT2JvdmF0ZScsXHJcbiAgICAgIGhhcmRpbmVzczogJy0yIMKwQycsXHJcbiAgICAgIHRhc3RlOiAnR3JlYXQsIGlzIGFuIGF2b2NhZG8nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZwcjcybTlrOiB7XHJcbiAgICBuYW1lOiAnUGlua2VydG9uIEF2b2NhZG8nLFxyXG4gICAgaWQ6ICdmcHI3Mm05aycsXHJcbiAgICBza3U6ICdCNEhaNDJUTScsXHJcbiAgICBwcmljZTogMS4yNyxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9waW5rZXJ0b24uanBnJyxcclxuICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJGaXJzdCBncm93biBvbiB0aGUgUGlua2VydG9uIFJhbmNoIGluIFNhdGljb3ksIENhbGlmb3JuaWEsIGluIHRoZSBlYXJseSAxOTcwcywgJ1BpbmtlcnRvbicgaXMgYSBzZWVkbGluZyBvZiAnSGFzcycgeCAnUmluY29uJy4gVGhlIGxhcmdlIGZydWl0IGhhcyBhIHNtYWxsIHNlZWQsIGFuZCBpdHMgZ3JlZW4gc2tpbiBkZWVwZW5zIGluIGNvbG9yIGFzIGl0IHJpcGVucy4gVGhlIHRoaWNrIGZsZXNoIGhhcyBhIHNtb290aCwgY3JlYW15IHRleHR1cmUsIHBhbGUgZ3JlZW4gY29sb3IsIGdvb2QgZmxhdm9yLCBhbmQgaGlnaCBvaWwgY29udGVudC4gSXQgc2hvd3Mgc29tZSBjb2xkIHRvbGVyYW5jZSwgdG8g4oiSMSDCsEMgKDMwIMKwRikgYW5kIGJlYXJzIGNvbnNpc3RlbnRseSBoZWF2eSBjcm9wcy4gQSBoeWJyaWQgR3VhdGVtYWxhbiB0eXBlLCBpdCBoYXMgZXhjZWxsZW50IHBlZWxpbmcgY2hhcmFjdGVyaXN0aWNzXCIsXHJcbiAgICAgIHNoYXBlOiAnTG9uZyBwZWFyJyxcclxuICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxyXG4gICAgICB0YXN0ZTogJ01hcnZlbG91cywgaXMgYW4gYXZvY2FkbycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdDlkdjI1Z3M6IHtcclxuICAgIG5hbWU6ICdSZWVkIEF2b2NhZG8nLFxyXG4gICAgaWQ6ICd0OWR2MjVncycsXHJcbiAgICBza3U6ICdaWTNUOVhYQycsXHJcbiAgICBwcmljZTogMS4xOCxcclxuICAgIGltYWdlOiAnL2ltYWdlcy9yZWVkLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdEZXZlbG9wZWQgZnJvbSBhIGNoYW5jZSBzZWVkbGluZyBmb3VuZCBpbiAxOTQ4IGJ5IEphbWVzIFMuIFJlZWQgaW4gQ2FsaWZvcm5pYSwgdGhpcyBjdWx0aXZhciBoYXMgbGFyZ2UsIHJvdW5kLCBncmVlbiBmcnVpdCB3aXRoIGEgc21vb3RoIHRleHR1cmUgYW5kIGRhcmssIHRoaWNrLCBnbG9zc3kgc2tpbi4gU21vb3RoIGFuZCBkZWxpY2F0ZSwgdGhlIGZsZXNoIGhhcyBhIHNsaWdodGx5IG51dHR5IGZsYXZvci4gVGhlIHNraW4gcmlwZW5zIGdyZWVuLiBBIEd1YXRlbWFsYW4gdHlwZSwgaXQgaXMgaGFyZHkgdG8g4oiSMSDCsEMgKDMwIMKwRikuIFRyZWUgc2l6ZSBpcyBhYm91dCA1IGJ5IDQgbSAoMTYuNCBieSAxMy4xIGZ0KScsXHJcbiAgICAgIHNoYXBlOiAnUm91bmQnLFxyXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXHJcbiAgICAgIHRhc3RlOiAnRXhxdWlzaXRlLCBpcyBhbiBhdm9jYWRvJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0MzQ1dzQ4eToge1xyXG4gICAgbmFtZTogJ1p1dGFubyBBdm9jYWRvJyxcclxuICAgIGlkOiAndDM0NXc0OHknLFxyXG4gICAgc2t1OiAnTVc3OVpaNlknLFxyXG4gICAgcHJpY2U6IDEuMjUsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvenV0YW5vLmpwZycsXHJcbiAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICdUaGUgWnV0YW5vIGF2b2NhZG8gaXMgYSBjb2xkIGhhcmR5LCBjb25zaXN0ZW50IHByb2R1Y2luZyBhdm9jYWRvIHZhcmlldHkuIEl0IHJlc2VtYmxlcyB0aGUgRnVlcnRlIGluIGFwcGVhcmFuY2UgYnV0IGlzIGxlc3MgZmxhdm9yZnVsIGJ1dCBtb3JlIGNvbGQgaGFyZHkuIFRoZSBncmVlbiBmcnVpdHMgYXJlIG9ib3ZhdGUgaW4gc2hhcGUgd2l0aCB3YXh5IGJ1bXBzIG9uIHRoZSBza2luLiBUaGUgZmxlc2ggaGFzIGEgbG93IG9pbCBidXQgaGlnaCB3YXRlciBjb250ZW50IHdoaWNoIGNhdXNlcyBpdCB0byBoYXZlIGEgbW9yZSBmaWJyb3VzIHRleHR1cmUuJyxcclxuICAgICAgc2hhcGU6ICdQZWFyJyxcclxuICAgICAgaGFyZGluZXNzOiAnLTUgwrBDJyxcclxuICAgICAgdGFzdGU6ICdTcGxlbmRpZCwgaXMgYW4gYXZvY2FkbycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xyXG4iLCIvLyBPaCB5b3UgY3VyaW91cy4uLlxyXG4vLyBUaGlzIGlzIG5vdCBhIHJlYWwgZGF0YWJhc2UsXHJcbi8vIEJ1dCBsZXQncyBpbWFnaW5lIGl0IGlzIG9uZSA6KVxyXG5pbXBvcnQgYWxsRGF0YSBmcm9tICcuL2RhdGEnO1xyXG5cclxuY2xhc3MgRGF0YWJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgYXN5bmMgZ2V0QWxsKCk6IFByb21pc2U8VFByb2R1Y3RbXT4ge1xyXG4gICAgY29uc3QgYXNBcnJheSA9IE9iamVjdC52YWx1ZXMoYWxsRGF0YSk7XHJcbiAgICBhd2FpdCByYW5kb21EZWxheSgpO1xyXG4gICAgcmV0dXJuIGFzQXJyYXk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRCeUlkKGlkOiBzdHJpbmcpOiBQcm9taXNlPFRQcm9kdWN0IHwgbnVsbD4ge1xyXG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYWxsRGF0YSwgaWQpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVudHJ5ID0gYWxsRGF0YVtpZF07XHJcbiAgICBhd2FpdCByYW5kb21EZWxheSgpO1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGV0J3MgYWxzbyBhZGQgYSBkZWxheSB0byBtYWtlIGl0IGEgYml0IGNsb3NlciB0byByZWFsaXR5XHJcbmNvbnN0IHJhbmRvbURlbGF5ID0gKCkgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgY29uc3QgbWF4ID0gMzUwO1xyXG4gICAgY29uc3QgbWluID0gMTAwO1xyXG4gICAgY29uc3QgZGVsYXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cclxuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpO1xyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YWJhc2U7XHJcbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJztcclxuaW1wb3J0IERCIGZyb20gJ0BkYXRhYmFzZSc7XHJcbmltcG9ydCBlbmFibGVQdWJsaWNBY2Nlc3MgZnJvbSAnQGNvcnMnO1xyXG5cclxuY29uc3QgYWxsQXZvcyA9IGFzeW5jIChyZXE6IEluY29taW5nTWVzc2FnZSwgcmVzOiBTZXJ2ZXJSZXNwb25zZSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBHZW5lcmFsbHksIHlvdSB3b3VsZCBub3Qgd2FudCB0aGlzIGluIHlvdXIgYXBwcy5cclxuICAgIC8vIFNlZSBtb3JlIGluICdjb3JzLmpzJ1xyXG4gICAgYXdhaXQgZW5hYmxlUHVibGljQWNjZXNzKHJlcSwgcmVzKTtcclxuXHJcbiAgICBjb25zdCBkYiA9IG5ldyBEQigpO1xyXG4gICAgY29uc3QgYWxsRW50cmllcyA9IGF3YWl0IGRiLmdldEFsbCgpO1xyXG4gICAgY29uc3QgbGVuZ2h0ID0gYWxsRW50cmllcy5sZW5ndGg7XHJcblxyXG4gICAgLy8gTm90aWNlOiBXZSdyZSBtYW51YWxseSBzZXR0aW5nIHRoZSByZXNwb25zZSBvYmplY3RcclxuICAgIC8vIEhvd2V2ZXIgTmV4dC5KUyBvZmZlcnMgRXhwcmVzcy1saWtlIGhlbHBlcnMgOilcclxuICAgIC8vIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvcmVzcG9uc2UtaGVscGVyc1xyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IGxlbmdodCwgZGF0YTogYWxsRW50cmllcyB9KSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IGxlbmd0aDogMCwgZGF0YTogW10sIGVycm9yOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnIH0pKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGxBdm9zO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=