(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ru--hardware-passing-dynamic-parameters-md"],{

/***/ "48jX":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"17c86829-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/hardware-passing-dynamic-parameters.md?vue&type=template&id=25480a4f& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('p', [_vm._v(\"In \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/connect-simple-cps/\"\n    }\n  }, [_vm._v(\"previous\")]), _vm._v(\" example we discussed how to create a simple CPS with Arduino. Our first CPS is able to do only one task: to blink a led. We suggest you to get through the first lesson. Now let's expand the example and teach our board to blink blue or red led depending on objective parameter.\")]), _c('blockquote', [_c('p', [_vm._v(\"The source code of this lesson is \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/airalab/robonomics_tutorials/tree/master/arduino_with_args\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"here\")]), _vm._v(\".\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"arduino\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#arduino\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Arduino\")]), _c('p', [_vm._v(\"The only difference in Arduino source code is instead of subscribing to one topic now we subscribe to \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/blink_red\")]), _vm._v(\" and \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/blink_blue\")]), _vm._v(\" topics\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-c\"\n    }\n  }, [_vm._v(\"  \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-meta\"\n    }\n  }, [_vm._v(\"#\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-meta-keyword\"\n    }\n  }, [_vm._v(\"include\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-meta-string\"\n    }\n  }, [_vm._v(\"<ros.h>\")])]), _vm._v(\"\\n  \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-meta\"\n    }\n  }, [_vm._v(\"#\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-meta-keyword\"\n    }\n  }, [_vm._v(\"include\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-meta-string\"\n    }\n  }, [_vm._v(\"<std_msgs/Empty.h>\")])]), _vm._v(\"\\n\\n  ros::NodeHandle nh;\\n\\n  \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-function\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"void\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-title\"\n    }\n  }, [_vm._v(\"blink\")]), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }, [_vm._v(\"(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"int\")]), _vm._v(\" led, \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"int\")]), _vm._v(\" mil)\")]), _vm._v(\" \")]), _vm._v(\"{\\n\\n    digitalWrite(led, HIGH);\\n    delay(mil);\\n    digitalWrite(led, LOW);\\n    delay(mil);\\n\\n  }\\n\\n  \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-function\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"void\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-title\"\n    }\n  }, [_vm._v(\"blinkRedCb\")]), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }, [_vm._v(\"(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"const\")]), _vm._v(\" std_msgs::Empty& msg)\")]), _vm._v(\" \")]), _vm._v(\"{\\n    blink(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"13\")]), _vm._v(\", \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"500\")]), _vm._v(\");\\n    blink(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"13\")]), _vm._v(\", \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"500\")]), _vm._v(\");\\n    blink(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"13\")]), _vm._v(\", \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"500\")]), _vm._v(\");\\n  }\\n\\n  \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-function\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"void\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-title\"\n    }\n  }, [_vm._v(\"blinkBlueCb\")]), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }, [_vm._v(\"(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"const\")]), _vm._v(\" std_msgs::Empty& msg)\")]), _vm._v(\" \")]), _vm._v(\"{\\n    blink(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"12\")]), _vm._v(\", \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"500\")]), _vm._v(\");\\n    blink(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"12\")]), _vm._v(\", \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"500\")]), _vm._v(\");\\n    blink(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"12\")]), _vm._v(\", \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"500\")]), _vm._v(\");\\n  }\\n\\n  \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-function\"\n    }\n  }, [_vm._v(\"ros::Subscriber<std_msgs::Empty> \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-title\"\n    }\n  }, [_vm._v(\"subRed\")]), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }, [_vm._v(\"(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"blink_red\\\"\")]), _vm._v(\", &blinkRedCb)\")])]), _vm._v(\";\\n  \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-function\"\n    }\n  }, [_vm._v(\"ros::Subscriber<std_msgs::Empty> \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-title\"\n    }\n  }, [_vm._v(\"subBlue\")]), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }, [_vm._v(\"(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"blink_blue\\\"\")]), _vm._v(\", &blinkBlueCb)\")])]), _vm._v(\";\\n\\n  \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-function\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"void\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-title\"\n    }\n  }, [_vm._v(\"setup\")]), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }, [_vm._v(\"()\")]), _vm._v(\"\\n  \")]), _vm._v(\"{\\n    pinMode(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"13\")]), _vm._v(\", OUTPUT);\\n    pinMode(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"12\")]), _vm._v(\", OUTPUT);\\n\\n    nh.initNode();\\n    nh.subscribe(subRed);\\n    nh.subscribe(subBlue);\\n  }\\n\\n  \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-function\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"void\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-title\"\n    }\n  }, [_vm._v(\"loop\")]), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }, [_vm._v(\"()\")]), _vm._v(\"\\n  \")]), _vm._v(\"{\\n    nh.spinOnce();\\n    delay(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-number\"\n    }\n  }, [_vm._v(\"1\")]), _vm._v(\");\\n  }\")])]), _c('h2', {\n    attrs: {\n      \"id\": \"ros\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#ros\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"ROS\")]), _c('p', [_vm._v(\"We can pass arguments via objective which points to rosbag file. Have a look at \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"blink.py\")]), _vm._v(\" script. The main difference is \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"blink()\")]), _vm._v(\" method:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-python\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-function\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"def\")]), _vm._v(\" \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-title\"\n    }\n  }, [_vm._v(\"blink\")]), _vm._v(\"(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-params\"\n    }\n  }, [_vm._v(\"self, data\")]), _vm._v(\"):\")]), _vm._v(\"\\n  \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"if\")]), _vm._v(\" data.data == \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"blue\\\"\")]), _vm._v(\":\\n      rospy.loginfo(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"Blinking blue...\\\"\")]), _vm._v(\")\\n      self.blink_blue.publish(Empty())\\n\\n  \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-keyword\"\n    }\n  }, [_vm._v(\"if\")]), _vm._v(\" data.data == \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"red\\\"\")]), _vm._v(\":\\n      rospy.loginfo(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"Blinking red...\\\"\")]), _vm._v(\")\\n      self.blink_red.publish(Empty())\\n\\n  rospy.wait_for_service(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"'/liability/finish'\")]), _vm._v(\")\\n  fin = rospy.ServiceProxy(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"'/liability/finish'\")]), _vm._v(\", FinishLiability)\\n  fin(FinishLiabilityRequest(address=self.liability, success=\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-literal\"\n    }\n  }, [_vm._v(\"True\")]), _vm._v(\"))\\n  rospy.loginfo(\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"Finished\\\"\")]), _vm._v(\")\")])]), _c('p', [_vm._v(\"Now \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"/blink\")]), _vm._v(\" topic has a \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"String\")]), _vm._v(\" type. You can find prepared rosbags in \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"rosbag\")]), _vm._v(\" folder.\")]), _c('h2', {\n    attrs: {\n      \"id\": \"aira\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#aira\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"AIRA\")]), _c('p', [_vm._v(\"Connect to AIRA client via SSH as described \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/aira-connecting-via-ssh/\"\n    }\n  }, [_vm._v(\"here\")]), _vm._v(\". Do not forget to add \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"COM1\")]), _vm._v(\" port in settings. Run the following command:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"$ rosrun arduino_with_args blink.py\\n\")])]), _c('p', [_vm._v(\"Also we need to add rosbag files to IPFS:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"$ ipfs add rosbag/blink_blue.bag\\n$ ipfs add rosbag/blink_red.bag\\n\")])]), _c('p', [_c('strong', [_vm._v(\"Before the next step you should approve XRT tokens on the Factory.\")])]), _c('p', [_vm._v(\"The last step is to build Dapp and launch. Take a look at the previous \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/connect-simple-cps/\"\n    }\n  }, [_vm._v(\"lesson\")]), _vm._v(\". To make Arduino blink the blue led send blue demand and blue offer messages. For the red one send corresponding messages.\")]), _c('p', [_vm._v(\"That's it! Now you are able to pass dynamic parameters to your cyber-physical system agent!\")])]);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/ru/hardware-passing-dynamic-parameters.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%2217c86829-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "4AgU":
/*!************************************************************************************************************!*\
  !*** ./docs/ru/hardware-passing-dynamic-parameters.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hardware_passing_dynamic_parameters_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hardware-passing-dynamic-parameters.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"pMQE\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hardware_passing_dynamic_parameters_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ru/hardware-passing-dynamic-parameters.md?");

/***/ }),

/***/ "CGvS":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/hardware-passing-dynamic-parameters.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Passing dynamic parameters\",\n  \"contributors\": [\"ensrationis\", \"akru\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ru/hardware-passing-dynamic-parameters.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "KTjY":
/*!***************************************************************************************!*\
  !*** ./docs/ru/hardware-passing-dynamic-parameters.md?vue&type=template&id=25480a4f& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hardware_passing_dynamic_parameters_md_vue_type_template_id_25480a4f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"17c86829-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hardware-passing-dynamic-parameters.md?vue&type=template&id=25480a4f& */ \"48jX\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hardware_passing_dynamic_parameters_md_vue_type_template_id_25480a4f___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hardware_passing_dynamic_parameters_md_vue_type_template_id_25480a4f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ru/hardware-passing-dynamic-parameters.md?");

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

/***/ "jd9w":
/*!********************************************************!*\
  !*** ./docs/ru/hardware-passing-dynamic-parameters.md ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hardware_passing_dynamic_parameters_md_vue_type_template_id_25480a4f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hardware-passing-dynamic-parameters.md?vue&type=template&id=25480a4f& */ \"KTjY\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _hardware_passing_dynamic_parameters_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hardware-passing-dynamic-parameters.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"4AgU\");\n/* harmony import */ var _hardware_passing_dynamic_parameters_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hardware-passing-dynamic-parameters.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"nvkL\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _hardware_passing_dynamic_parameters_md_vue_type_template_id_25480a4f___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _hardware_passing_dynamic_parameters_md_vue_type_template_id_25480a4f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _hardware_passing_dynamic_parameters_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_hardware_passing_dynamic_parameters_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _hardware_passing_dynamic_parameters_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_hardware_passing_dynamic_parameters_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ru/hardware-passing-dynamic-parameters.md?");

/***/ }),

/***/ "nvkL":
/*!*****************************************************************************************************************!*\
  !*** ./docs/ru/hardware-passing-dynamic-parameters.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hardware_passing_dynamic_parameters_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./hardware-passing-dynamic-parameters.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"CGvS\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_hardware_passing_dynamic_parameters_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ru/hardware-passing-dynamic-parameters.md?");

/***/ }),

/***/ "pMQE":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ru/hardware-passing-dynamic-parameters.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ru/hardware-passing-dynamic-parameters.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);