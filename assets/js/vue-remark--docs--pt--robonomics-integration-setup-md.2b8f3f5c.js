(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--pt--robonomics-integration-setup-md"],{

/***/ "+9ws":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"17c86829-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/robonomics-integration-setup.md?vue&type=template&id=21bf291e& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"After finishing with \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/sub-activate/\"\n    }\n  }, [_vm._v(\"IOT subscription\")]), _vm._v(\" it's time to install \"), _c('strong', [_vm._v(\"Robonomics integration\")]), _vm._v(\". This integration allows Home Assistant to record datalogs with encrypted data from Home Assistant to Robonomics Parachain and listen launch commands from this Parachain to control smart devices. Integration use IPFS to store data and send IPFS hashes to  datalog or launch.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"configure\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#configure\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Configure\")]), _c('p', [_vm._v(\"Now you can add integration to Home Assistant. In web interface go to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Settings/Device & Services\")]), _vm._v(\" and press \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Add Integration\")]), _vm._v(\". Find there \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Robonomics\")]), _vm._v(\":\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/add-integration.jpg\"\n    }\n  }), _c('p', [_vm._v(\"Click on it and fill the configuration. Here you need to add seed from \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_CONTROLLER\")]), _vm._v(\" and public address of \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_OWNER\")]), _vm._v(\" accounts (which you previously created).\\nAlso, you can set sending interval, by default it is 10 minutes.\")]), _c('p', [_vm._v(\"Moreover, you can add your Pinata credentials. It is not necessary, if you will not do it, data will be pinned with your local node and Infura.If you add the credentials files will also be pinned on Pinata to help them spread wider over IPFS.\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/config.jpg\"\n    }\n  }), _c('p', [_vm._v(\" Fill in everything and press \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Submit\")]), _vm._v(\". If is, you will see \"), _c('strong', [_vm._v(\"Success\")]), _vm._v(\" window. Close it.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"use-dapp\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#use-dapp\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Use DApp\")]), _c('p', [_vm._v(\"Now it's time to create the first user for your Home Assistant.It shouldn't be \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_OWNER\")]), _vm._v(\" or \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_CONTROLLER\")]), _vm._v(\" accounts, because,\\nas said \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/sub-activate/\"\n    }\n  }, [_vm._v(\"earlier\")]), _vm._v(\" they provide security. Because of it, regular user shouldn't use them. \\nAlso, you can't use user, which you created af first start of Home Assistant, because this user don't have \\naccount in Robonomics Parachain.\")]), _c('p', [_vm._v(\"Create an account, as we did in the previous \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/sub-activate/\"\n    }\n  }, [_vm._v(\"article\")]), _vm._v(\". \\nAdd this account to the subscription \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dapp.robonomics.network/#/subscription/devices\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"here\")]), _vm._v(\". Now there should be three addresses in the access list - \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_OWNER\")]), _vm._v(\", \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_CONTROLLER\")]), _vm._v(\" and \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"user\")]), _vm._v(\".\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/user.jpg\"\n    }\n  }), _c('p', [_vm._v(\"Then go to the Dapp service \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dapp.robonomics.network/#/home-assistant\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_c('strong', [_vm._v(\"\\\"HomeAssistant Account\\\"\")])]), _vm._v(\". Choose account, \\nyou've just created at the right sidebar (check that you have chosen the intended account by pressing the profile icon).\\nThen enter the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"USER\")]), _vm._v(\" seed in the required field. In the next two raws type in \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_OWNER\")]), _vm._v(\" and \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SUB_CONTROLLER\")]), _vm._v(\" addresses:\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/acc-pass.jpg\"\n    }\n  }), _c('p', [_vm._v(\"If everything right, you will see \"), _c('strong', [_vm._v(\" 3. Verification status \")]), _vm._v(\" - \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Verified\")]), _vm._v(\".\")]), _c('p', [_vm._v(\"Create a password for a new HA user which you have just registered. Type the passport below \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Your Home Assistant password\")]), _vm._v(\" and click \\\"create password\\\". Confirm transaction. (Later you can restore it in \\\"restore\\\" tab.)\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/password.jpg\"\n    }\n  }), _c('p', [_vm._v(\"It’s free now since the accounts are using RWS subscription. After the registration process, you can log in to Home Assistant with your address as \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"login\")]), _vm._v(\" and a newly-created password. Go to login page and login:\")]), _c('robo-wiki-picture', {\n    attrs: {\n      \"src\": \"home-assistant/acc-login.jpg\"\n    }\n  }), _c('p', [_vm._v(\"Now you can use \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"SmartHome Telemetry\")]), _vm._v(\" DApp to control your home through the Robonomics. Go to the \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/use-dapp/\"\n    }\n  }, [_vm._v(\"article\")]), _vm._v(\" to have a try.\")])], 1);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/pt/robonomics-integration-setup.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%2217c86829-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "FQ60":
/*!*************************************************!*\
  !*** ./docs/pt/robonomics-integration-setup.md ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _robonomics_integration_setup_md_vue_type_template_id_21bf291e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./robonomics-integration-setup.md?vue&type=template&id=21bf291e& */ \"opar\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _robonomics_integration_setup_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./robonomics-integration-setup.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"wwqP\");\n/* harmony import */ var _robonomics_integration_setup_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./robonomics-integration-setup.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"HB8U\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _robonomics_integration_setup_md_vue_type_template_id_21bf291e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _robonomics_integration_setup_md_vue_type_template_id_21bf291e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _robonomics_integration_setup_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_robonomics_integration_setup_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _robonomics_integration_setup_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_robonomics_integration_setup_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/pt/robonomics-integration-setup.md?");

/***/ }),

/***/ "HB8U":
/*!**********************************************************************************************************!*\
  !*** ./docs/pt/robonomics-integration-setup.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_integration_setup_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./robonomics-integration-setup.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"iLhb\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_integration_setup_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/pt/robonomics-integration-setup.md?");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render(h) {\n    return h('div', null, this.$slots.default);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "iLhb":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/robonomics-integration-setup.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Robonomics integration setup\",\n  \"contributors\": [\"LoSk-p\", \"nakata5321\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/pt/robonomics-integration-setup.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "oNou":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/pt/robonomics-integration-setup.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/pt/robonomics-integration-setup.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "opar":
/*!********************************************************************************!*\
  !*** ./docs/pt/robonomics-integration-setup.md?vue&type=template&id=21bf291e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_integration_setup_md_vue_type_template_id_21bf291e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"17c86829-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./robonomics-integration-setup.md?vue&type=template&id=21bf291e& */ \"+9ws\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_integration_setup_md_vue_type_template_id_21bf291e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_integration_setup_md_vue_type_template_id_21bf291e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/pt/robonomics-integration-setup.md?");

/***/ }),

/***/ "wwqP":
/*!*****************************************************************************************************!*\
  !*** ./docs/pt/robonomics-integration-setup.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_integration_setup_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./robonomics-integration-setup.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"oNou\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_robonomics_integration_setup_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/pt/robonomics-integration-setup.md?");

/***/ })

}]);