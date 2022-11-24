(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ja--spot-lesson-5-md"],{

/***/ "4OBq":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"17c86829-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/spot-lesson5.md?vue&type=template&id=5fc2732c& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"In this lesson you will learn what should you do if you just got the robot: the first run and network setup. Also you will learn how to run the calibration process that should be run monthly.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"the-challenge\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#the-challenge\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"The challenge\")]), _c('p', [_vm._v(\"Create and execute Python script implements behaviors described.\")]), _c('ol', [_c('li', [_vm._v(\"Run \\\"spot check\\\" and save the result of the calibration in a \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/home/student/result\")]), _vm._v(\" directory as a text file.\")]), _c('li', [_vm._v(\"Run camera calibration procedure.\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"theory\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#theory\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Theory\")]), _c('h3', {\n    attrs: {\n      \"id\": \"first-run\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#first-run\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"First Run\")]), _c('p', [_vm._v(\"Look at \"), _c('a', {\n    attrs: {\n      \"href\": \"https://support.bostondynamics.com/s/article/Startup-Procedure\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Startup Procedure\")]), _vm._v(\" page in Documentation.\")]), _c('h3', {\n    attrs: {\n      \"id\": \"networking\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#networking\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Networking\")]), _c('p', [_vm._v(\"Spot offers a variety of networking options to support a diverse set of applications and environments. Options include:\")]), _c('ul', [_c('li', [_c('p', [_vm._v(\"Spot as a connected peer. Physicall connection to Spot.\")])]), _c('li', [_c('p', [_vm._v(\"Spot as a WiFi access point. \")])]), _c('li', [_c('p', [_vm._v(\"Spot as a WiFi client. Spot can join an existing WiFi network, and applications can also join the same WiFi network to talk to Spot.\")])])]), _c('p', [_vm._v(\"For more information look at \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dev.bostondynamics.com/docs/concepts/networking\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Networking page\")]), _vm._v(\".\")]), _c('p', [_vm._v(\"Spot Core is connected to the Spot via payload port. Spot Core can be connected to the Internet with Wi-Fi dongle. The setup instructions you can find at \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dev.bostondynamics.com/docs/payload/spot_core_cockpit.html?highlight=spot%20check\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"Spot Core Cockpit\")]), _vm._v(\" page.\")]), _c('h3', {\n    attrs: {\n      \"id\": \"calibration\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#calibration\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Calibration\")]), _c('p', [_vm._v(\"Spot Check is a full calibration of the robot. Also you can run the camera calibration \")]), _c('ul', [_c('li', [_c('p', [_c('a', {\n    attrs: {\n      \"href\": \"https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L164\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"run_spot_check\")]), _vm._v(\" runs full spot check routine. The robot should be sitting on flat ground when this routine is started. This routine calibrates robot joints and checks camera health.\")])]), _c('li', [_c('p', [_c('a', {\n    attrs: {\n      \"href\": \"https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L204\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"run_camera_calibration\")]), _vm._v(\". Run full camera calibration routine for robot. This function blocks until calibration has completed. This function should be called once the robot is powered on and standing with his back to the calibration stand at a distance of 1 meter. Calibation process takes about 20 minutes.\")])])]), _c('h2', {\n    attrs: {\n      \"id\": \"practice\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#practice\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Practice\")]), _c('blockquote', [_c('p', [_vm._v(\"Ensure you have Yggdrasil Network software running and configured as described in the \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/spot-lesson0\"\n    }\n  }, [_vm._v(\"Lesson 0\")]), _vm._v(\". Otherwise you will not have connection to the robot.\\nOn macOS you may need to launch Yggdrasil Network in the terminal:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"sudo yggdrasil -useconffile /etc/yggdrasil.conf\")])])]), _c('ol', [_c('li', [_vm._v(\"Connect to Spot from a terminal or using your development environment remote execution function.\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-console\"\n    }\n  }, [_vm._v(\"ssh student@strelka.ygg.merklebot.com\")])]), _c('ol', {\n    attrs: {\n      \"start\": \"2\"\n    }\n  }, [_c('li', [_vm._v(\"Develop and demonstrate your solution to the challenge.\")])]), _c('p', [_vm._v(\"We create \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dev.bostondynamics.com/python/examples/estop/readme\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"E-Stop endpoint\")]), _vm._v(\" for you, so you should not create it.\\nFor Spot authentication use username and password from \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/home/student/credentials\")]), _vm._v(\" file.\\nSpot address is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"192.168.50.3\")]), _vm._v(\".\")])]);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/ja/spot-lesson5.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%2217c86829-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "4mfy":
/*!*********************************!*\
  !*** ./docs/ja/spot-lesson5.md ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spot_lesson5_md_vue_type_template_id_5fc2732c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spot-lesson5.md?vue&type=template&id=5fc2732c& */ \"W14i\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _spot_lesson5_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spot-lesson5.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"rf47\");\n/* harmony import */ var _spot_lesson5_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spot-lesson5.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"BtvG\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _spot_lesson5_md_vue_type_template_id_5fc2732c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _spot_lesson5_md_vue_type_template_id_5fc2732c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _spot_lesson5_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_spot_lesson5_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _spot_lesson5_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_spot_lesson5_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ja/spot-lesson5.md?");

/***/ }),

/***/ "6sWj":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/spot-lesson5.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Lesson 5. Robot service. Camera calibration and \\\"Spot check\\\" procedure\",\n  \"contributors\": [\"LoSk-p\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ja/spot-lesson5.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "BtvG":
/*!******************************************************************************************!*\
  !*** ./docs/ja/spot-lesson5.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson5_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson5.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"6sWj\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson5_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/spot-lesson5.md?");

/***/ }),

/***/ "ItK/":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ja/spot-lesson5.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ja/spot-lesson5.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

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

/***/ "W14i":
/*!****************************************************************!*\
  !*** ./docs/ja/spot-lesson5.md?vue&type=template&id=5fc2732c& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson5_md_vue_type_template_id_5fc2732c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"17c86829-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson5.md?vue&type=template&id=5fc2732c& */ \"4OBq\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson5_md_vue_type_template_id_5fc2732c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson5_md_vue_type_template_id_5fc2732c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ja/spot-lesson5.md?");

/***/ }),

/***/ "rf47":
/*!*************************************************************************************!*\
  !*** ./docs/ja/spot-lesson5.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson5_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson5.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"ItK/\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson5_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ja/spot-lesson5.md?");

/***/ })

}]);