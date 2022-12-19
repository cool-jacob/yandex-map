(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["component"] = factory();
	else
		root["component"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "099d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_dist_index_js_vue_loader_options_YandexMap_vue_vue_type_style_index_0_id_75a1265d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d345");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_dist_index_js_vue_loader_options_YandexMap_vue_vue_type_style_index_0_id_75a1265d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_dist_index_js_vue_loader_options_YandexMap_vue_vue_type_style_index_0_id_75a1265d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4888":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/map-point.d6387ad7.svg";

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript() {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript');
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript;
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript;
    }

    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    } catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = stackDetails && stackDetails[1] || false,
        line = stackDetails && stackDetails[2] || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection

      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }

        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }

        // If inline source matches, return the script tag
        if (scriptLocation === currentLocation && scripts[i].innerHTML && scripts[i].innerHTML.trim() === inlineScriptSource) {
          return scripts[i];
        }
      }

      // If no match, return null
      return null;
    }
  }
  ;
  return getCurrentScript;
});

/***/ }),

/***/ "d345":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "YandexMap", function() { return /* reexport */ YandexMap; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript;
  if (true) {
    var getCurrentScript = __webpack_require__("8875");
    currentScript = getCurrentScript();

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', {
        get: getCurrentScript
      });
    }
  }
  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
  if (src) {
    __webpack_require__.p = src[1]; // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a9589f8-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/dist??vue-loader-options!./src/component/YandexMap.vue?vue&type=template&id=75a1265d&scoped=true
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ymap-wrapper__custom"},[_c('div',{staticStyle:{"width":"100%","height":"100%"},attrs:{"id":_vm.mapId}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/component/YandexMap.vue?vue&type=template&id=75a1265d&scoped=true

// CONCATENATED MODULE: ./src/component/service/YmapsAddTpl.js
/** Добавить контроллеры на карту (Поиск, Зум) */
function fAddTemplateToMap(Cls, ctx) {
  var cls = new Cls(ctx.Map);
  cls.fCreate();
  ctx.Map.controls.add(cls, {});
  return cls;
}

/** Добавить на карту объекты */
function fAddBaloonToMap(Cls, ctx) {
  var cls = new Cls(ctx.Map, ctx.markers);
  return cls.fCreate();
}
// CONCATENATED MODULE: ./src/component/YMapsControlModule/YMapsCtrlBase.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var YMapsBase = /*#__PURE__*/function () {
  function YMapsBase(map) {
    _classCallCheck(this, YMapsBase);
    this.events = new ymaps.event.Manager();
    this.options = new ymaps.option.Manager();
    this.state = new ymaps.data.Manager();
    this.Map = map;
  }

  /** Устанвливаем родительский элемент для контрола созданного с помощью templateLayoutFactory */
  _createClass(YMapsBase, [{
    key: "setParent",
    value: function setParent(parent) {
      this.parent = parent;
      if (parent) {
        var map = parent.getMap();
        var Layout = this.fCreate();
        this.layout = new Layout({
          map: map
        });
        this.layout.setParentElement(map.panes.get('controls').getElement());
      } else {
        this.layout.setParentElement(null);
      }
    }

    /** Получаем родительский элемент для контрола созданного с помощью templateLayoutFactory */
  }, {
    key: "getParent",
    value: function getParent() {
      return this.parent;
    }
  }]);
  return YMapsBase;
}();
// CONCATENATED MODULE: ./src/component/YMapsControlModule/YMapsSearch.js
function YMapsSearch_typeof(obj) { "@babel/helpers - typeof"; return YMapsSearch_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, YMapsSearch_typeof(obj); }
function YMapsSearch_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function YMapsSearch_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, YMapsSearch_toPropertyKey(descriptor.key), descriptor); } }
function YMapsSearch_createClass(Constructor, protoProps, staticProps) { if (protoProps) YMapsSearch_defineProperties(Constructor.prototype, protoProps); if (staticProps) YMapsSearch_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (YMapsSearch_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = YMapsSearch_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function YMapsSearch_toPropertyKey(arg) { var key = YMapsSearch_toPrimitive(arg, "string"); return YMapsSearch_typeof(key) === "symbol" ? key : String(key); }
function YMapsSearch_toPrimitive(input, hint) { if (YMapsSearch_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (YMapsSearch_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var YMapsSearch = /*#__PURE__*/function (_YMapsBase) {
  _inherits(YMapsSearch, _YMapsBase);
  var _super = _createSuper(YMapsSearch);
  function YMapsSearch() {
    var _this;
    YMapsSearch_classCallCheck(this, YMapsSearch);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "tpl", "<div class=\"input-wrapper\">\n\t\t\t\t<input placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441\" id=\"suggest\" class=\"yamaps-search__input\" type=\"text\">\n\t\t\t\t<button id=\"search_btn\" class=\"yamaps-search__button\">\u041D\u0430\u0439\u0442\u0438</button>\n\t\t\t</div>");
    return _this;
  }
  YMapsSearch_createClass(YMapsSearch, [{
    key: "fCreate",
    value: /** Создаем объект контрола, с помощью templateLayoutFactory */
    function fCreate() {
      var SearchLayout = ymaps.templateLayoutFactory.createClass(this.tpl, {
        /** Объект инпута поиска */
        SuggestView: null,
        /** Значение инпута поиска */
        suggestionValue: null,
        /** Объект карты, получаем из родительского модуля */
        Map: this.Map,
        build: function build() {
          SearchLayout.superclass.build.call(this);
          // Навешиваем события
          this.fCreateSuggestView();
          this.fSetEventsOnSearch();
        },
        clear: function clear() {
          this.fRemoveEventListeners();
          SearchLayout.superclass.clear.call(this);
        },
        /** Навешиваем события на инпут */fSetEventsOnSearch: function fSetEventsOnSearch() {
          document.querySelector('#suggest').addEventListener('input', this.fSaveValueOnInputType.bind(this));
          document.querySelector('#search_btn').addEventListener('click', this.fSearchByButton.bind(this));
          document.querySelector('#suggest').addEventListener('keydown', this.fSearchByEnter.bind(this));
          this.SuggestView.events.add('select', this.fSearchBySelect.bind(this));
        },
        /** Создaем suggestView поверх кастомного инпута, чтобы сохранить подсказки от яндекса */fCreateSuggestView: function fCreateSuggestView() {
          this.SuggestView = new ymaps.SuggestView('suggest', {
            provider: 'yandex#search',
            results: 3,
            offset: [0, -2000]
          });
        },
        /** Сохраняем значение инпут при вводе, для поиска по кнопке или клику на enter */fSaveValueOnInputType: function fSaveValueOnInputType(e) {
          this.suggestionValue = e.target.value;
          if (e.target.value.trim().length > 0) {
            this.SuggestView.options.set('offset', [0, 0]);
          } else {
            this.SuggestView.options.set('offset', [0, -2000]);
            this.suggestionValue = null;
          }
        },
        /** Поиск по карте отталкиваясь от данных из custom input  */
        fSearchBySelect: function fSearchBySelect(e) {
          var q = e.get('item').value;
          this.fSearch(q);
        },
        /** Поиск по enter */
        fSearchByEnter: function fSearchByEnter(e) {
          if (e.code.toLowerCase() === 'enter') {
            this.fSearch(e.target.value);
          }
        },
        /** Поиск по кнопке */
        fSearchByButton: function fSearchByButton(e) {
          if (this.suggestionValue) this.fSearch(this.suggestionValue);
        },
        /** Поиск и центрирование карты по результатам */
        fSearch: function fSearch(value) {
          var _this2 = this;
          ymaps.geocode(value).then(function (result) {
            var coords = result.geoObjects.get(0).geometry.getCoordinates();
            _this2.Map.setCenter([coords[0], coords[1]]);
          });
        },
        /** Удаляем обработчики событий */
        fRemoveEventListeners: function fRemoveEventListeners() {
          document.querySelector('#suggest').removeEventListener('input', this.fSaveValueOnInputType.bind(this));
          document.querySelector('#search_btn').removeEventListener('click', this.fSearchByButton.bind(this));
          document.querySelector('#suggest').removeEventListener('keydown', this.fSearchByEnter.bind(this));
          this.SuggestView.events.remove('select', this.fSearchBySelect.bind(this));
        }
      });
      return SearchLayout;
    }
  }]);
  return YMapsSearch;
}(YMapsBase);
// CONCATENATED MODULE: ./src/component/YMapsControlModule/YMapsStyles.js
function YMapsStyles_typeof(obj) { "@babel/helpers - typeof"; return YMapsStyles_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, YMapsStyles_typeof(obj); }
function YMapsStyles_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function YMapsStyles_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, YMapsStyles_toPropertyKey(descriptor.key), descriptor); } }
function YMapsStyles_createClass(Constructor, protoProps, staticProps) { if (protoProps) YMapsStyles_defineProperties(Constructor.prototype, protoProps); if (staticProps) YMapsStyles_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function YMapsStyles_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) YMapsStyles_setPrototypeOf(subClass, superClass); }
function YMapsStyles_setPrototypeOf(o, p) { YMapsStyles_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return YMapsStyles_setPrototypeOf(o, p); }
function YMapsStyles_createSuper(Derived) { var hasNativeReflectConstruct = YMapsStyles_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = YMapsStyles_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = YMapsStyles_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return YMapsStyles_possibleConstructorReturn(this, result); }; }
function YMapsStyles_possibleConstructorReturn(self, call) { if (call && (YMapsStyles_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return YMapsStyles_assertThisInitialized(self); }
function YMapsStyles_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function YMapsStyles_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function YMapsStyles_getPrototypeOf(o) { YMapsStyles_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return YMapsStyles_getPrototypeOf(o); }
function YMapsStyles_defineProperty(obj, key, value) { key = YMapsStyles_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function YMapsStyles_toPropertyKey(arg) { var key = YMapsStyles_toPrimitive(arg, "string"); return YMapsStyles_typeof(key) === "symbol" ? key : String(key); }
function YMapsStyles_toPrimitive(input, hint) { if (YMapsStyles_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (YMapsStyles_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var YMapsStyles = /*#__PURE__*/function (_YMapsBase) {
  YMapsStyles_inherits(YMapsStyles, _YMapsBase);
  var _super = YMapsStyles_createSuper(YMapsStyles);
  function YMapsStyles() {
    var _this;
    YMapsStyles_classCallCheck(this, YMapsStyles);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    YMapsStyles_defineProperty(YMapsStyles_assertThisInitialized(_this), "tpl", "<style>\n            \t.range {\n            \t    width: 40px;\n            \t    height: 225px;\n            \t    padding: 5px;\n            \t    box-sizing: border-box;\n            \t    display: flex;\n            \t    flex-direction: column;\n            \t    justify-content: space-between;\n            \t    background: rgba(218,218,218,0.49);\n            \t    border-radius: 9px;\n            \t    cursor: pointer;\n            \t    position: absolute;\n            \t    right: 15px;\n            \t    top: 275px;\n            \t}\n            \t.range-btn  {\n            \t    width: 30px;\n            \t    height: 30px;\n            \t    padding: 2px;\n            \t    display: flex;\n            \t    flex-direction: column;\n            \t    justify-content: center;\n            \t    align-items: center;\n            \t    box-sizing: border-box;\n            \t    border: none;\n            \t    background: #FFFFFF;\n            \t    box-shadow: 0px 0px 8.57692px rgba(0, 0, 0, 0.15);\n            \t    border-radius: 4px;\n            \t    cursor: pointer;\n            \t}\n            \t.range-icon {\n            \t    width: 100%;\n            \t    background-color: blue;\n            \t    border-radius: 10550px;\n            \t}\n            \t.range-plus__horizontal {\n            \t    transform: rotate(45deg);\n            \t    top: -50%;\n            \t}\n            \t.range-line {\n            \t    width: 30px;\n            \t    height: 3px;\n            \t    background: #F9F9F9;\n            \t    box-shadow: 0px 0px 8.57692px rgba(0, 0, 0, 0.15);\n            \t    border-radius: 3px;\n            \t}\n            \t.range-line.range-line__active {\n            \t    width: 29.79px;\n            \t    height: 8.58px;\n            \t    background: #FFFFFF;\n            \t    box-shadow: 0px 0px 4.28846px #979797;\n            \t    border-radius: 3px;\n            \t}\n            \t.input-wrapper {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 10px;\n\t\t\t\t\tleft: 10px;\n\t\t\t\t\tborder: 1px solid transparent;\n\t\t\t\t\twidth: 320px;\n\t\t\t\t\theight: 36px;\n\t\t\t\t\tbackground: #FFFFFF;\n\t\t\t\t\tborder-radius: 35px;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: stretch;\n\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t\tfilter: drop-shadow(0px 1px 8px rgba(96, 98, 102, 0.3));\n\t\t\t\t}\n\t\t\t\t.yamaps-search__input {\n\t\t\t\t\twidth: 64%;\n\t\t\t\t\tborder-top-left-radius: 35px;\n\t\t\t\t\tborder-bottom-left-radius: 35px;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tpadding-left: 12px;\n\t\t\t\t\tborder: none;\n\t\t\t\t}\n\t\t\t\t.yamaps-search__input::placeholder {\n\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\tfont-size: 13px;\n\t\t\t\t\tline-height: 14px;\n\t\t\t\t\tcolor: #606266;\n\t\t\t\t}\n\t\t\t\t.yamaps-search__input:focus {\n\t\t\t\t\toutline: none;\n\t\t\t\t\tborder: 1px solid #FFE485;\n\t\t\t\t}\n\t\t\t\t.yamaps-search__button {\n\t\t\t\t\twidth: 40%;\n\t\t\t\t\tbackground-color: #FFE485;\n\t\t\t\t\theight: 35px;\n\t\t\t\t\tborder: 1px solid #FFE485;\n\t\t\t\t\tborder-top-right-radius: 35px;\n\t\t\t\t\tborder-bottom-right-radius: 35px;\n\t\t\t\t\tfont-family: 'Open Sans';\n\t\t\t\t\tfont-style: normal;\n\t\t\t\t\tfont-weight: 600;\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\tline-height: 16px;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tcolor: #1D1E1F;\n\t\t\t\t}\n\t\t\t\t.ymaps-2-1-79-copyright__content,\n            \t.ymaps-2-1-79-gototech,\n            \t.ymaps-2-1-79-gotoymaps__container {\n            \t    display: none;\n            \t}\n\t\t\t\t@media screen and ( max-width: 550px) {\n\t\t\t\t\t.range {\n\t\t\t\t\t\ttop: 150px;\n\t\t\t\t\t}\n\t\t\t\t}\n            </style>");
    return _this;
  }
  YMapsStyles_createClass(YMapsStyles, [{
    key: "fCreate",
    value: /** Создаем объект контрола, с помощью templateLayoutFactory */
    function fCreate() {
      var StylesLayout = ymaps.templateLayoutFactory.createClass(this.tpl, {
        build: function build() {
          StylesLayout.superclass.build.call(this);
        },
        clear: function clear() {
          StylesLayout.superclass.clear.call(this);
        }
      });
      return StylesLayout;
    }
  }]);
  return YMapsStyles;
}(YMapsBase);
// CONCATENATED MODULE: ./src/component/YMapsObjectModule/YMapsObjects.js
function YMapsObjects_typeof(obj) { "@babel/helpers - typeof"; return YMapsObjects_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, YMapsObjects_typeof(obj); }
function YMapsObjects_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function YMapsObjects_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, YMapsObjects_toPropertyKey(descriptor.key), descriptor); } }
function YMapsObjects_createClass(Constructor, protoProps, staticProps) { if (protoProps) YMapsObjects_defineProperties(Constructor.prototype, protoProps); if (staticProps) YMapsObjects_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function YMapsObjects_defineProperty(obj, key, value) { key = YMapsObjects_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function YMapsObjects_toPropertyKey(arg) { var key = YMapsObjects_toPrimitive(arg, "string"); return YMapsObjects_typeof(key) === "symbol" ? key : String(key); }
function YMapsObjects_toPrimitive(input, hint) { if (YMapsObjects_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (YMapsObjects_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var YMapsObjects = /*#__PURE__*/function () {
  /** Карта */

  /** Маркеры */

  function YMapsObjects(map, markers) {
    YMapsObjects_classCallCheck(this, YMapsObjects);
    YMapsObjects_defineProperty(this, "Map", void 0);
    YMapsObjects_defineProperty(this, "markers", void 0);
    this.markers = markers;
    this.Map = map;
  }

  /** Создаем объект контрола, с помощью templateLayoutFactory */
  YMapsObjects_createClass(YMapsObjects, [{
    key: "fCreate",
    value: function fCreate() {
      this.Map.geoObjects.removeAll();
      this.objectManager = new ymaps.ObjectManager({
        // Чтобы метки начали кластеризоваться, выставляем опцию.
        clusterize: true,
        // Опции для кастомной иконки одиночной метки
        geoObjectIconLayout: 'default#image',
        // Своё изображение иконки метки.
        geoObjectIconImageHref: __webpack_require__("4888"),
        // Размеры метки.
        geoObjectIconImageSize: [50, 50],
        // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
        geoObjectIconImageOffset: [-25, -50],
        // Опции для кастомной иконки кластера
        clusterIconLayout: 'default#image',
        // Своё изображение иконки метки.
        clusterIconImageHref: __webpack_require__("4888"),
        // Размеры метки.
        clusterIconImageSize: [70, 70],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        clusterIconImageOffset: [-35, -70]
      });
      var objectColection = [];
      for (var i = 0; i < this.markers.length; i++) {
        objectColection.push({
          type: 'Feature',
          id: this.markers[i].id,
          geometry: {
            type: 'Point',
            coordinates: [this.markers[i].latitude, this.markers[i].longitude]
          }
        });
      }
      this.objectManager.add(objectColection);
      this.Map.geoObjects.add(this.objectManager);
      return this.objectManager;
    }
  }]);
  return YMapsObjects;
}();
// CONCATENATED MODULE: ./src/component/YMapsControlModule/YMapsZoom.js
function YMapsZoom_typeof(obj) { "@babel/helpers - typeof"; return YMapsZoom_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, YMapsZoom_typeof(obj); }
function YMapsZoom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function YMapsZoom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, YMapsZoom_toPropertyKey(descriptor.key), descriptor); } }
function YMapsZoom_createClass(Constructor, protoProps, staticProps) { if (protoProps) YMapsZoom_defineProperties(Constructor.prototype, protoProps); if (staticProps) YMapsZoom_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function YMapsZoom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) YMapsZoom_setPrototypeOf(subClass, superClass); }
function YMapsZoom_setPrototypeOf(o, p) { YMapsZoom_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return YMapsZoom_setPrototypeOf(o, p); }
function YMapsZoom_createSuper(Derived) { var hasNativeReflectConstruct = YMapsZoom_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = YMapsZoom_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = YMapsZoom_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return YMapsZoom_possibleConstructorReturn(this, result); }; }
function YMapsZoom_possibleConstructorReturn(self, call) { if (call && (YMapsZoom_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return YMapsZoom_assertThisInitialized(self); }
function YMapsZoom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function YMapsZoom_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function YMapsZoom_getPrototypeOf(o) { YMapsZoom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return YMapsZoom_getPrototypeOf(o); }
function YMapsZoom_defineProperty(obj, key, value) { key = YMapsZoom_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function YMapsZoom_toPropertyKey(arg) { var key = YMapsZoom_toPrimitive(arg, "string"); return YMapsZoom_typeof(key) === "symbol" ? key : String(key); }
function YMapsZoom_toPrimitive(input, hint) { if (YMapsZoom_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (YMapsZoom_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var YMapsZoom = /*#__PURE__*/function (_YMapsBase) {
  YMapsZoom_inherits(YMapsZoom, _YMapsBase);
  var _super = YMapsZoom_createSuper(YMapsZoom);
  function YMapsZoom() {
    var _this;
    YMapsZoom_classCallCheck(this, YMapsZoom);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    YMapsZoom_defineProperty(YMapsZoom_assertThisInitialized(_this), "tpl", "<div class=\"range\">\n                <button id=\"zoom-out\" class=\"range-btn\">\n                    <svg width=\"23\" height=\"5\" viewBox=\"0 0 23 5\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <rect x=\"22.3064\" y=\"0.63501\" width=\"3.69927\" height=\"22.0241\" rx=\"1.84963\" transform=\"rotate(90 22.3064 0.63501)\" fill=\"#36A6F2\"/>\n                    </svg>    \n                </button>\n                <div class=\"range-line range-line__active\"></div>\n                <div class=\"range-line\"></div>\n                <div class=\"range-line\"></div>\n                <div class=\"range-line\"></div>\n                <div class=\"range-line\"></div>\n                <div class=\"range-line\"></div>\n                <div class=\"range-line\"></div>\n                <div class=\"range-line\"></div>\n                <div class=\"range-line\"></div>\n                <div class=\"range-line\"></div>\n                <button id=\"zoom-in\" class=\"range-btn\">\n                    <svg width=\"23\" height=\"23\" viewBox=\"0 0 23 23\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <rect x=\"9.45898\" y=\"0.790527\" width=\"3.67068\" height=\"22.1956\" rx=\"1.83534\" fill=\"#36A6F2\"/>\n                        <rect x=\"22.3064\" y=\"10.0388\" width=\"3.69927\" height=\"22.0241\" rx=\"1.84963\" transform=\"rotate(90 22.3064 10.0388)\" fill=\"#36A6F2\"/>\n                    </svg>                 \n                </button>\n            </div>");
    return _this;
  }
  YMapsZoom_createClass(YMapsZoom, [{
    key: "fCreate",
    value: /** Создаем объект контрола, с помощью templateLayoutFactory */
    function fCreate() {
      var СustomZoomLayout = ymaps.templateLayoutFactory.createClass(this.tpl, {
        zoomBtnItem: null,
        zoomScrollTimeout: null,
        zoomOptions: {
          checkZoomRange: true,
          smooth: true,
          duration: 300
        },
        // Монтируем карту
        build: function build() {
          var map = this.getData().map;

          // Вызываем родительский метод build.
          СustomZoomLayout.superclass.build.call(this);

          // Получаем элементы отображающие текущий зум
          this.zoomBtnItem = document.querySelectorAll('.range-line');

          // Привязываем функции-обработчики к контексту и сохраняем ссылки на них, чтобы потом отписаться от событий.
          this.zoomInCb = ymaps.util.bind(this.zoomIn, this);
          this.zoomOutCb = ymaps.util.bind(this.zoomOut, this);
          this.zoomByRangeLineClickCb = ymaps.util.bind(this.zoomByRangeLineClick, this);
          this.setCustomZoomValueCb = ymaps.util.bind(this.setCustomZoomValue, this);

          // Начинаем слушать события макета.
          document.querySelector('#zoom-in').addEventListener('click', this.zoomInCb);
          document.querySelector('#zoom-out').addEventListener('click', this.zoomOutCb);
          document.querySelector('.range').addEventListener('click', this.zoomByRangeLineClickCb);
          map.events.add('wheel', this.setCustomZoomValueCb);

          // Получаем и устанавливаем значение zoom
          var curr_zoom = map.getZoom();
          map.setZoom(curr_zoom, {
            checkZoomRange: true
          });
        },
        // Очищаем объект карты
        clear: function clear() {
          var _document$querySelect, _document$querySelect2, _document$querySelect3;
          var map = this.getData().map;

          // Снимаем обработчики.
          (_document$querySelect = document.querySelector('#zoom-in')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.removeEventListener('click', this.zoomInCb);
          (_document$querySelect2 = document.querySelector('#zoom-out')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.removeEventListener('click', this.zoomOutCb);
          (_document$querySelect3 = document.querySelector('.range')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.removeEventListener('click', this.zoomByRangeLineClickCb);
          map.events.remove('wheel', this.setCustomZoomValueCb);

          // Очищаем таймаут зума при скролле
          clearTimeout(this.zoomScrollTimeout);

          // Вызываем родительский метод clear.
          СustomZoomLayout.superclass.clear.call(this);
        },
        // Устанавливаем значение самодельного зума при клике по одной из полосок на нем
        zoomByRangeLineClick: function zoomByRangeLineClick(e) {
          var map = this.getData().map;
          if (e.target.classList.contains('range-line')) {
            for (var i = 0; i < this.zoomBtnItem.length; i++) {
              this.zoomBtnItem[i].classList.remove('range-line__active');
            }
            e.target.classList.add('range-line__active');
            var indexOfActive = 0;
            var zoomBtnItemNew = document.querySelectorAll('.range-line');
            for (var _i = 0; _i < zoomBtnItemNew.length; _i++) {
              if (zoomBtnItemNew[_i].classList.contains('range-line__active')) {
                indexOfActive = _i;
              }
            }
            map.setZoom(indexOfActive + 10, this.zoomOptions);
          }
        },
        // Устанавливаем значение на самодельном зуме, при скролле коллесиком
        setCustomZoomValue: function setCustomZoomValue(e) {
          var _this2 = this;
          var map = this.getData().map;
          var checkInterval = setInterval(function () {
            var zoom = map.getZoom();
            _this2.zoomBtnItem[zoom - 10].classList.add('range-line__active');
            for (var i = 0; i < _this2.zoomBtnItem.length; i++) {
              _this2.zoomBtnItem[i].classList.remove('range-line__active');
            }
            _this2.zoomBtnItem[zoom - 10].classList.add('range-line__active');
          }, 10);
          this.zoomScrollTimeout = setTimeout(function () {
            clearInterval(checkInterval);
          }, 1000);
        },
        // Приблизить
        zoomIn: function zoomIn() {
          var map = this.getData().map;
          var zoom = map.getZoom();
          if (zoom < 19) {
            map.setZoom(zoom + 1, this.zoomOptions);
            for (var i = 0; i < this.zoomBtnItem.length; i++) {
              this.zoomBtnItem[i].classList.remove('range-line__active');
            }
            var curr_zoom = map.getZoom();
            this.zoomBtnItem[curr_zoom + 1 - 10].classList.add('range-line__active');
          } else {
            this.zoomBtnItem[this.zoomBtnItem.length - 1].classList.add('range-line__active');
          }
        },
        // Отдалить
        zoomOut: function zoomOut() {
          var map = this.getData().map;
          var zoom = map.getZoom();
          if (zoom > 10) {
            map.setZoom(zoom - 1, this.zoomOptions);
            for (var i = 0; i < this.zoomBtnItem.length; i++) {
              this.zoomBtnItem[i].classList.remove('range-line__active');
            }
            var curr_zoom = map.getZoom();
            this.zoomBtnItem[curr_zoom - 1 - 10].classList.add('range-line__active');
          } else {
            this.zoomBtnItem[0].classList.add('range-line__active');
          }
        }
      });
      return СustomZoomLayout;
    }
  }]);
  return YMapsZoom;
}(YMapsBase);
// CONCATENATED MODULE: ./src/component/YandexMap.js
function YandexMap_typeof(obj) { "@babel/helpers - typeof"; return YandexMap_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, YandexMap_typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == YandexMap_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function YandexMap_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function YandexMap_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, YandexMap_toPropertyKey(descriptor.key), descriptor); } }
function YandexMap_createClass(Constructor, protoProps, staticProps) { if (protoProps) YandexMap_defineProperties(Constructor.prototype, protoProps); if (staticProps) YandexMap_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function YandexMap_defineProperty(obj, key, value) { key = YandexMap_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function YandexMap_toPropertyKey(arg) { var key = YandexMap_toPrimitive(arg, "string"); return YandexMap_typeof(key) === "symbol" ? key : String(key); }
function YandexMap_toPrimitive(input, hint) { if (YandexMap_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (YandexMap_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/** Модуль инициализации карты */
var YandexMap_YMapsCustom = /*#__PURE__*/function () {
  /** Id карты */

  /** Координаты центра */

  /** Элементы управления для отрисовки */

  /** Маркеры на карте */

  /** Начальные опции зума */

  /** Объект карты */

  /** Контроллеры карты */

  function YMapsCustom(MapConfig) {
    YandexMap_classCallCheck(this, YMapsCustom);
    YandexMap_defineProperty(this, "mapId", void 0);
    YandexMap_defineProperty(this, "center", void 0);
    YandexMap_defineProperty(this, "controls", void 0);
    YandexMap_defineProperty(this, "markers", void 0);
    YandexMap_defineProperty(this, "zoomOptions", void 0);
    YandexMap_defineProperty(this, "Map", void 0);
    YandexMap_defineProperty(this, "MapControls", {});
    this.mapId = MapConfig.mapId;
    this.center = MapConfig.center;
    this.controls = MapConfig.controls;
    this.markers = MapConfig.markers;
    this.zoomOptions = MapConfig.zoomOptions;
  }

  /** Инициализация карты */
  YandexMap_createClass(YMapsCustom, [{
    key: "faInitMap",
    value: function () {
      var _faInitMap = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return ymaps.ready();
              case 2:
                // Создаем объект карты
                this.Map = new ymaps.Map(this.mapId, {
                  center: this.center,
                  zoom: this.zoomOptions.zoom,
                  controls: this.controls
                }, {
                  minZoom: this.zoomOptions.minZoom,
                  maxZoom: this.zoomOptions.maxZoom
                });

                // Применим шаблон стилей
                fAddTemplateToMap(YMapsStyles, this);

                // Добавить кастомный инпут поиска
                this.MapControls.search_control = fAddTemplateToMap(YMapsSearch, this);

                // Добавим кастомный элемент зума карты
                this.MapControls.zoom_control = fAddTemplateToMap(YMapsZoom, this);

                // Добавим объекты на карту
                this.MapControls.map_objects = fAddBaloonToMap(YMapsObjects, this);

                // Вернем созданные объекты для взаимодействия с Vue
                return _context.abrupt("return", {
                  map: this.Map,
                  map_objects: this.MapControls.map_objects,
                  search_control: this.MapControls.search_control,
                  zoom_control: this.MapControls.zoom_control
                });
              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function faInitMap() {
        return _faInitMap.apply(this, arguments);
      }
      return faInitMap;
    }()
  }]);
  return YMapsCustom;
}();
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/dist??vue-loader-options!./src/component/YandexMap.vue?vue&type=script&lang=js
function YandexMapvue_type_script_lang_js_typeof(obj) { "@babel/helpers - typeof"; return YandexMapvue_type_script_lang_js_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, YandexMapvue_type_script_lang_js_typeof(obj); }
function YandexMapvue_type_script_lang_js_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ YandexMapvue_type_script_lang_js_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == YandexMapvue_type_script_lang_js_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function YandexMapvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function YandexMapvue_type_script_lang_js_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { YandexMapvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { YandexMapvue_type_script_lang_js_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ var YandexMapvue_type_script_lang_js = ({
  name: 'YandexMap',
  props: {
    markers: {
      type: Array,
      "default": null
    },
    coordsCenter: {
      type: Array,
      "default": null
    },
    apiKey: {
      type: String,
      "default": ''
    },
    oneMarkerCoords: {
      type: Array,
      "default": null
    },
    currentCoords: []
  },
  data: function data() {
    return {
      map: null,
      coords: [],
      objectManager: null,
      point: null,
      oneMarker: null,
      searchControl: null,
      mapId: "yandex-map-".concat(Math.round(Math.random() * 1000))
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (!document.getElementById('yandex-maps')) {
      var scriptYandexMap = document.createElement('script');
      scriptYandexMap.setAttribute('src', "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=".concat(this.apiKey, "&mode=release&coordorder=latlong"));
      scriptYandexMap.setAttribute('id', 'yandex-maps');
      document.head.appendChild(scriptYandexMap);
      scriptYandexMap.addEventListener('load', function () {
        _this.initializeYandexMap();
      });
    } else {
      this.initializeYandexMap();
    }
  },
  methods: {
    // Инициализация карты
    initializeYandexMap: function initializeYandexMap() {
      var _this2 = this;
      return YandexMapvue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/YandexMapvue_type_script_lang_js_regeneratorRuntime().mark(function _callee() {
        var markers, Map, _yield$Map$faInitMap, map, map_objects, search_control, zoom_control;
        return YandexMapvue_type_script_lang_js_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                markers = [];
                if (_this2.markers) {
                  markers = _toConsumableArray(_this2.markers);
                }

                // Создаём объект карты
                Map = new YandexMap_YMapsCustom({
                  mapId: _this2.mapId,
                  center: _this2.coordsCenter,
                  controls: [],
                  markers: markers,
                  zoomOptions: {
                    zoom: 10,
                    minZoom: 10,
                    maxZoom: 19
                  }
                });
                _context.next = 5;
                return Map.faInitMap();
              case 5:
                _yield$Map$faInitMap = _context.sent;
                map = _yield$Map$faInitMap.map;
                map_objects = _yield$Map$faInitMap.map_objects;
                search_control = _yield$Map$faInitMap.search_control;
                zoom_control = _yield$Map$faInitMap.zoom_control;
                _this2.map = map;
                _this2.objectManager = map_objects;
                if (!_this2.markers) {
                  _this2.map.events.add('click', _this2.onClickMap);
                  _this2.searchControl = new ymaps.control.SearchControl({
                    options: {
                      "float": 'left',
                      floatIndex: 100,
                      noPlacemark: false
                    }
                  });
                  if (_this2.oneMarkerCoords) {
                    _this2.oneMarker = new ymaps.Placemark(_this2.oneMarkerCoords);
                    _this2.map.geoObjects.add(_this2.oneMarker);
                  }
                  _this2.map.controls.add(_this2.searchControl);
                  _this2.searchControl.events.add('resultselect', _this2.Search);
                } else _this2.setMarkers();
                _this2.map.events.add(['boundschange', 'datachange', 'objecttypeschange'], _this2.getVisibleObjects.bind(_this2));
                _this2.$emit("InitializeYandexMap", _this2.map);
              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // Получаем только видимые объекты
    getVisibleObjects: function getVisibleObjects() {
      var aVisibleCoords = [];
      var objects = ymaps.geoQuery(this.objectManager.objects).searchInside(this.map);
      for (var i = 0; i < objects["_objects"].length; i++) {
        aVisibleCoords.push(objects["_objects"][i].geometry["_coordinates"]);
      }
      this.$emit("getVisibleObjects", aVisibleCoords);
    },
    // Установка маркеров на карте
    setMarkers: function setMarkers() {
      this.objectManager.objects.events.add(['click'], this.onClickEvent);
    },
    // Событие клика на маркер
    onClickEvent: function onClickEvent(e) {
      var objectId = e.get('objectId'),
        objectGeometry = this.objectManager.objects.getById(objectId).geometry.type;
      // Если событие произошло на метке, изменяем цвет ее иконки.
      if (objectGeometry === 'Point') {
        this.$emit("ClickMarker", objectId);
        this.point = objectId;
      }
    },
    // Событие клика по карте
    onClickMap: function onClickMap(e) {
      var coords = e.get('coords');
      this.map.geoObjects.removeAll();
      this.oneMarker = new ymaps.Placemark(coords);
      this.map.geoObjects.add(this.oneMarker);
      this.$emit("ClickMap", coords);
    },
    // Событие выбора результата поиска
    Search: function Search(e) {
      if (this.oneMarker) this.map.geoObjects.remove(this.oneMarker);
      var resultList = this.searchControl.getResultsArray();
      var index = this.searchControl.getSelectedIndex();
      var result = resultList[index].properties.get('metaDataProperty.GeocoderMetaData');
      var param = {
        text: result.text,
        addrresDetails: result.AddressDetails
      };
      this.$emit("Search", param);
    }
  },
  watch: {
    coordsCenter: function coordsCenter() {
      if (this.coordsCenter && this.map) {
        this.map.setCenter(this.coordsCenter);
        this.setMarkers();
      }
    },
    markers: {
      handler: function handler() {
        var _this3 = this;
        return YandexMapvue_type_script_lang_js_asyncToGenerator( /*#__PURE__*/YandexMapvue_type_script_lang_js_regeneratorRuntime().mark(function _callee2() {
          var objectColection, i;
          return YandexMapvue_type_script_lang_js_regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this3.objectManager.removeAll();
                  objectColection = [];
                  for (i = 0; i < _this3.markers.length; i++) {
                    objectColection.push({
                      type: 'Feature',
                      id: _this3.markers[i].id,
                      geometry: {
                        type: 'Point',
                        coordinates: [_this3.markers[i].latitude, _this3.markers[i].longitude]
                      }
                    });
                  }
                  _this3.objectManager.add(objectColection);
                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      }
    },
    currentCoords: {
      deep: true,
      handler: function handler(currVal, oldVal) {
        if (currVal && this.map) {
          this.map.setCenter(currVal);
          this.map.setZoom(18, {
            checkZoomRange: true,
            smooth: true,
            duration: 300
          });
          setTimeout(function () {
            document.querySelector('#zoom-in').click();
          }, 300);
        }
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.map.geoObjects.length) {
      this.map.geoObjects.removeAll();
    }
  }
});
// CONCATENATED MODULE: ./src/component/YandexMap.vue?vue&type=script&lang=js
 /* harmony default export */ var component_YandexMapvue_type_script_lang_js = (YandexMapvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/component/YandexMap.vue?vue&type=style&index=0&id=75a1265d&scoped=true&lang=css
var YandexMapvue_type_style_index_0_id_75a1265d_scoped_true_lang_css = __webpack_require__("099d");

// CONCATENATED MODULE: ./src/component/YandexMap.vue





component_YandexMapvue_type_script_lang_js.render = render
component_YandexMapvue_type_script_lang_js.__scopeId = "data-v-75a1265d"

/* harmony default export */ var YandexMap = (component_YandexMapvue_type_script_lang_js);
// CONCATENATED MODULE: ./src/index.js


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



/***/ })

/******/ });
});
//# sourceMappingURL=component.umd.js.map