(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ru--spot-lesson-2-md"],{

/***/ "DEGo":
/*!*************************************************************************************!*\
  !*** ./docs/ru/spot-lesson2.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson2_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson2.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"WjIF\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson2_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ru/spot-lesson2.md?");

/***/ }),

/***/ "RWL/":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"17c86829-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/spot-lesson2.md?vue&type=template&id=38ea3d74& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"In the second lesson you will learn how to use Spot Command services and walk with Spot.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"the-challenge\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#the-challenge\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"The challenge\")]), _c('p', [_vm._v(\"You have a list of points with their local coordinates in the \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/home/student/lessons\")]), _vm._v(\" directory. Spot should go through these points. The origin of the local coordinates is in the place where Spot was turned on. On each point Spot should make one of the motions from the following list, then go to the next point. \")]), _c('p', [_vm._v(\"The list of moves:\")]), _c('ul', [_c('li', [_vm._v(\"To turn around himself\")]), _c('li', [_vm._v(\"To lie down in pose to change battery\")]), _c('li', [_vm._v(\"To nod\")]), _c('li', [_vm._v(\"To change the stance of robot's legs\")]), _c('li', [_vm._v(\"To go sideways to the next point\")])]), _c('p', [_vm._v(\"Create and execute a Python script that implements behavior described.\")]), _c('blockquote', [_c('p', [_vm._v(\"You can find Spot local coordinates with:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-python\"\n    }\n  }, [_vm._v(\"get_vision_tform_body(robot_state_client.get_robot_state().kinematic_state.transforms_snapshot)\")])])]), _c('h2', {\n    attrs: {\n      \"id\": \"theory\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#theory\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Theory\")]), _c('p', [_vm._v(\"You can control Spot with \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"Robot Command Service\")]), _vm._v(\". Firstly you need to build a command to supply it to the command service.\\nSpot SDK has a \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"RobotCommandBuilder\")]), _vm._v(\" class for it.\\nFull list of methods and its descriprions you can find \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/bosdyn-client/src/bosdyn/client/robot_command.py#L593\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"here\")]), _vm._v(\". \")]), _c('p', [_vm._v(\"In this lesson you may need to use:\")]), _c('ul', [_c('li', [_vm._v(\"Stand Command\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-python\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-function\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"def\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-title\"\n    }\n  }, [_vm._v(\"stand_command\")]), _vm._v(\"(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }, [_vm._v(\"params=\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-literal\"\n    }\n  }, [_vm._v(\"None\")]), _vm._v(\", body_height=\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"0.0\")]), _vm._v(\", \\n                footprint_R_body=geometry.EulerZXY(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }), _vm._v(\")\")]), _vm._v(\")\")])])]), _c('ul', [_c('li', [_vm._v(\"Go to point\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-python\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-function\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"def\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-title\"\n    }\n  }, [_vm._v(\"synchro_se2_trajectory_point_command\")]), _vm._v(\"(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }, [_vm._v(\"goal_x, goal_y, goal_heading,      \\n                                    frame_name, params=\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-literal\"\n    }\n  }, [_vm._v(\"None\")]), _vm._v(\",\\n                                    body_height=\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"0.0\")]), _vm._v(\",\\n                                    locomotion_hint=spot_command_pb2.HINT_AUTO,\\n                                    build_on_command=\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-literal\"\n    }\n  }, [_vm._v(\"None\")])]), _vm._v(\")\")])])]), _c('p', [_vm._v(\"Check usage example \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/boston-dynamics/spot-sdk/blob/master/python/examples/frame_trajectory_command/frame_trajectory_command.py\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"here\")]), _vm._v(\".\")]), _c('ul', [_c('li', [_vm._v(\"Velocity Command\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-python\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-function\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"def\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-title\"\n    }\n  }, [_vm._v(\"synchro_velocity_command\")]), _vm._v(\"(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }, [_vm._v(\"v_x, v_y, v_rot, params=\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-literal\"\n    }\n  }, [_vm._v(\"None\")]), _vm._v(\", body_height=\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"0.0\")]), _vm._v(\",\\n                            locomotion_hint=spot_command_pb2.HINT_AUTO, \\n                            frame_name=BODY_FRAME_NAME\")]), _vm._v(\")\")])])]), _c('ul', [_c('li', [_vm._v(\"Stance Command\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-python\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-function\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"def\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-title\"\n    }\n  }, [_vm._v(\"stance_command\")]), _vm._v(\"(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }, [_vm._v(\"se2_frame_name, pos_fl_rt_frame, pos_fr_rt_frame, \\n                        pos_hl_rt_frame,\\n                        pos_hr_rt_frame, accuracy=\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"0.05\")]), _vm._v(\", \\n                        params=\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-literal\"\n    }\n  }, [_vm._v(\"None\")]), _vm._v(\", body_height=\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"0.0\")]), _vm._v(\",\\n                        footprint_R_body=geometry.EulerZXY(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }), _vm._v(\"), \\n                        build_on_command=\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-literal\"\n    }\n  }, [_vm._v(\"None\")])]), _vm._v(\")\")])])]), _c('p', [_vm._v(\"The example of use is \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/boston-dynamics/spot-sdk/blob/91ed30607264e795699995d6d7834ba0c8a94d36/python/examples/stance/stance_in_place.py\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"here\")])]), _c('ul', [_c('li', [_vm._v(\"Pose to change battery\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-python\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-function\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"def\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-title\"\n    }\n  }, [_vm._v(\"battery_change_pose_command\")]), _vm._v(\"(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }, [_vm._v(\"dir_hint=\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"1\")])]), _vm._v(\")\")])])]), _c('p', [_vm._v(\"Example of building and running velocity command:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-python\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"from\")]), _vm._v(\" bosdyn.client.robot_command \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"import\")]), _vm._v(\" RobotCommandClient, RobotCommandBuilder\\n\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"import\")]), _vm._v(\" time\\n\\ncommand_client = robot.ensure_client(RobotCommandClient.default_service_name)\\ncmd = RobotCommandBuilder.velocity_command(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"0.5\")]), _vm._v(\", \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"0\")]), _vm._v(\", \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"0.5\")]), _vm._v(\")\\ncommand_client.robot_command(cmd, end_time_secs=time.time() + \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"2\")]), _vm._v(\")\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"practice\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#practice\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Practice\")]), _c('blockquote', [_c('p', [_vm._v(\"Ensure you have Yggdrasil Network software running and configured as described in the \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/spot-lesson0\"\n    }\n  }, [_vm._v(\"Lesson 0\")]), _vm._v(\". Otherwise you will not have connection to the robot.\\nOn macOS you may need to launch Yggdrasil Network in the terminal:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"sudo yggdrasil -useconffile /etc/yggdrasil.conf\")])])]), _c('ol', [_c('li', [_vm._v(\"Connect to Spot from a terminal or using your development environment remote execution function.\")])]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-console\"\n    }\n  }, [_vm._v(\"ssh student@strelka.ygg.merklebot.com\")])]), _c('ol', {\n    attrs: {\n      \"start\": \"2\"\n    }\n  }, [_c('li', [_vm._v(\"Develop and demonstrate your solution to the challenge.\")])]), _c('p', [_vm._v(\"We create \"), _c('a', {\n    attrs: {\n      \"href\": \"https://dev.bostondynamics.com/python/examples/estop/readme\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"E-Stop endpoint\")]), _vm._v(\" for you, so you should not create it.\\nFor Spot authentication use username and password from \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/home/student/credentials\")]), _vm._v(\" file.\\nSpot address is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"192.168.50.3\")]), _vm._v(\".\")])]);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson2.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%2217c86829-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "SO3C":
/*!*********************************!*\
  !*** ./docs/ru/spot-lesson2.md ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spot_lesson2_md_vue_type_template_id_38ea3d74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spot-lesson2.md?vue&type=template&id=38ea3d74& */ \"cS3T\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _spot_lesson2_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spot-lesson2.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"DEGo\");\n/* harmony import */ var _spot_lesson2_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spot-lesson2.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"TDhd\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _spot_lesson2_md_vue_type_template_id_38ea3d74___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _spot_lesson2_md_vue_type_template_id_38ea3d74___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _spot_lesson2_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_spot_lesson2_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _spot_lesson2_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_spot_lesson2_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson2.md?");

/***/ }),

/***/ "TDhd":
/*!******************************************************************************************!*\
  !*** ./docs/ru/spot-lesson2.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson2_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson2.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"UFca\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson2_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ru/spot-lesson2.md?");

/***/ }),

/***/ "UFca":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/spot-lesson2.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Lesson 2. Remote controlled and programmed motion\",\n  \"contributors\": [\"LoSk-p\", \"khssnv\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson2.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

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

/***/ "WjIF":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/spot-lesson2.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson2.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "cS3T":
/*!****************************************************************!*\
  !*** ./docs/ru/spot-lesson2.md?vue&type=template&id=38ea3d74& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson2_md_vue_type_template_id_38ea3d74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"17c86829-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson2.md?vue&type=template&id=38ea3d74& */ \"RWL/\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson2_md_vue_type_template_id_38ea3d74___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson2_md_vue_type_template_id_38ea3d74___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ru/spot-lesson2.md?");

/***/ })

}]);