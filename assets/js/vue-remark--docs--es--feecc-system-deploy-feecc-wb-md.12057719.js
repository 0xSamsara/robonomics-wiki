(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--es--feecc-system-deploy-feecc-wb-md"],{

/***/ "4Fd8":
/*!**********************************************************************************************************!*\
  !*** ./docs/es/feecc-system-deploy-feecc-wb.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_system_deploy_feecc_wb_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./feecc-system-deploy-feecc-wb.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"gBva\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_system_deploy_feecc_wb_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/es/feecc-system-deploy-feecc-wb.md?");

/***/ }),

/***/ "Ia+V":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"17c86829-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/feecc-system-deploy-feecc-wb.md?vue&type=template&id=6b6171fa& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('VueRemarkRoot', [_c('h2', {\n    attrs: {\n      \"id\": \"общая-информация\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D0%BE%D0%B1%D1%89%D0%B0%D1%8F-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Общая информация:\")]), _c('p', [_vm._v(\"Работа системы \\\"Feecc Рабочее Место Инженера\\\" (далее Feecc РМИ) зависит от работы сервисов feecc-workbench-frontend (Фронтенд), feecc-workbench-daemon (Daemon), feecc-ipfs-gateway (IPFS Gateway), feecc-print-server (Print Server), feecc-cameraman (Cameraman), feecc-hid-reader-daemon (HID Daemon).\")]), _c('p', [_vm._v(\"Чтобы узнать больше о сервисах, обратитесь в раздел \"), _c('a', {\n    attrs: {\n      \"href\": \"/docs/feecc-system-architecture\"\n    }\n  }, [_vm._v(\"Обзор архитектуры\")]), _vm._v(\".\")]), _c('h2', {\n    attrs: {\n      \"id\": \"запуск-hid-daemon\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-hid-daemon\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Запуск HID Daemon\")]), _c('blockquote', [_c('p', [_vm._v(\"Инструкция может устареть, обратитесь к инструкции в \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/Multi-Agent-io/feecc-hid-reader-daemon#readme\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"репозитории\")])])]), _c('ol', [_c('li', [_c('p', [_vm._v(\"Склонируйте репозиторий\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"git clone https://github.com/Multi-Agent-io/feecc-hid-reader-daemon\")])])]), _c('li', [_c('p', [_vm._v(\"Обновите систему и установите необходимые пакеты:\")]), _c('p', [_vm._v(\"Для Debian-based систем:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"sudo apt update -y\\nsudo apt upgrade -y\\nsudo apt dist-upgrade -y\\nsudo apt autoremove -y\\nsudo apt install -y htop python3 python3-dev python3-pip gcc\")])])]), _c('li', [_c('p', [_vm._v(\"Запустите Daemon\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"sudo mv EventToInternet /etc/systemd/system/\\nsudo chown -R root:root /etc/systemd/system/EventToInternet\\n\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-built_in\"\n    }\n  }, [_vm._v(\"cd\")]), _vm._v(\" /etc/systemd/system/EventToInternet\")])])]), _c('li', [_c('p', [_vm._v(\"Установите пакеты (обязательно с \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"sudo\")]), _vm._v(\")\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"sudo python3 -m pip install -r requirements.txt\\nsudo bash install.sh\")])])])]), _c('ul', [_c('li', [_c('p', [_vm._v(\"Для удаления:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_vm._v(\"sudo bash /etc/systemd/system/EventToInternet/uninstall.sh\\nsudo rm -rf /etc/systemd/system/EventToInternet*\")])])])]), _c('h2', {\n    attrs: {\n      \"id\": \"запуск-workbench-daemon\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-workbench-daemon\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Запуск Workbench Daemon\")]), _c('blockquote', [_c('p', [_vm._v(\"Инструкция может устареть, обратитесь к инструкции в \"), _c('a', {\n    attrs: {\n      \"href\": \"https://github.com/Multi-Agent-io/feecc-workbench-daemon#readme\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"репозитории\")])])]), _c('ol', [_c('li', [_c('p', [_vm._v(\"Склонируйте репозиторий\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"git clone https://github.com/Multi-Agent-io/feecc-workbench-daemon && cd feecc-workbench-daemon\")])])]), _c('li', [_c('p', [_vm._v(\"Проведите конфигурацию, открыв docker-compose.yml любым текстовым редактором\")]), _c('p', [_vm._v(\"Измените переменные окружения. Значения каждого параметра:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"MONGODB_URI (Required): MongoDB connection URI\\nROBONOMICS_ENABLE_DATALOG (Optional): enable datalog posting or not (bool)\\nROBONOMICS_ACCOUNT_SEED (Optional): Your Robonomics network account seed phrase\\nROBONOMICS_SUBSTRATE_NODE_URL (Optional): Robonomics network node URI\\nYOURLS_SERVER (Required): Your Your Yourls server URL\\nYOURLS_USERNAME (Required): Yourls server username\\nYOURLS_PASSWORD (Required): Yourls server password\\nIPFS_GATEWAY_ENABLE (Optional): Whether to enable IPFS posting or not\\nIPFS_GATEWAY_IPFS_SERVER_URI (Optional): Your IPFS gateway deployment URI\\nPRINTER_ENABLE (Optional): Whether to enable printing or not\\nPRINTER_PRINT_SERVER_URI (Optional): Your Print-server deployment URI\\nPRINTER_SKIP_ACK (Optional): Whether to wait for the task acknowledgement (slow) or not\\nPRINTER_PRINT_BARCODE (Optional): Whether to print barcodes or not\\nPRINTER_PRINT_QR (Optional): Whether to print QR codes or not\\nPRINTER_PRINT_QR_ONLY_FOR_COMPOSITE (Optional): Whether to enable QR code printing for non-composite units or note or not\\nPRINTER_QR_ADD_LOGOS (Optional): Whether to add logos to the QR code or not\\nPRINTER_PRINT_SECURITY_TAG (Optional): Whether to enable printing security tags or not\\nPRINTER_SECURITY_TAG_ADD_TIMESTAMP (Optional): Whether to enable timestamps on security tags or not\\nCAMERA_ENABLE (Optional): Whether to enable Cameraman or not\\nCAMERA_CAMERAMAN_URI (Optional): Your Cameraman deployment URI\\nCAMERA_CAMERA_NO (Optional): Camera number\\nWORKBENCH_NUMBER (Required): Workbench number\\nHID_DEVICES_RFID_READER (Optional): RFID reader device name\\nHID_DEVICES_BARCODE_READER (Optional): Barcode reader device name\\nLOG_ECS_ENABLE (Optional): Emit file logs in the ECS format (defaults to \\\"disabled\\\")\\n\")])])]), _c('li', [_c('p', [_vm._v(\"Запустите Workbench daemon:\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"sudo docker-compose up -d --build\")])])]), _c('li', [_c('p', [_vm._v(\"Проверьте работоспособность:\")]), _c('p', [_vm._v(\"Перейдите на \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"127.0.0.1:5000/docs\")]), _vm._v(\" и убедитесь, что Swagger отдает данные о REST API\")])])]), _c('h2', {\n    attrs: {\n      \"id\": \"запуск-ipfs-gateway\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-ipfs-gateway\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Запуск IPFS Gateway\")]), _c('ol', [_c('li', [_c('p', [_vm._v(\"Склонируйте репозитории\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"git clone https://github.com/Multi-Agent-io/feecc-ipfs-gateway.git\")])])]), _c('li', [_c('p', [_vm._v(\"Измените параметры\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-built_in\"\n    }\n  }, [_vm._v(\"cd\")]), _vm._v(\" feecc-ipfs-gateway\\nvim docker-compose.yml\")])]), _c('p', [_vm._v(\"Значение параметров:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"  MONGODB_URI: ''  # Your MongoDB connection URI ending with /db-name\\n  PRODUCTION_ENVIRONMENT: no  # Leave \\\"no\\\" if you want testing credentials to work\\n  LOCAL_IPFS_ENABLED: yes  # Whether to enable local IPFS node publishing or not.\\n  PINATA_ENABLED: yes  # Whether to upload files to Pinata.cloud or not\\n  PINATA_API: ''  # Pinata.cloud credentials. Leave empty if you don't need it\\n  PINATA_SECRET_API: ''  # Pinata.cloud credentials. Leave empty if you don't need it\\n  ROBONOMICS_ENABLE_DATALOG: no  # Whether to post CIDs to Robonomics network datalog or not\\n  ROBONOMICS_ACCOUNT_SEED: ''  # Robonomics network account seed\\n  ROBONOMICS_SUBSTRATE_NODE_URL: ''  # Robonomics node URL in case you want to use non-default node\\n  PY_IPFS_HTTP_CLIENT_DEFAULT_ADDR: '/dns/ipfsnode/tcp/5001/http'  # Node address, don't change\\n  AUTH_MODE: \\\"workbench\\\" # Auth mode. Available options are \\\"analytics\\\", \\\"workbench\\\" and \\\"noauth\\\"\\n\")])])]), _c('li', [_c('p', [_vm._v(\"Запустите контейнер\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"sudo docker-compose up --build\")])])]), _c('li', [_c('p', [_vm._v(\"Проверьте работоспособность\")]), _c('p', [_vm._v(\"Проверьте развертывание, перейдя по адресу \"), _c('a', {\n    attrs: {\n      \"href\": \"http://127.0.0.1:8082/docs\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"http://127.0.0.1:8082/docs\")]), _vm._v(\" в браузере. Вы должны увидеть страницу SwaggerUI. \")])])]), _c('h2', {\n    attrs: {\n      \"id\": \"запуск-print-server\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-print-server\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Запуск Print server\")]), _c('ol', [_c('li', [_c('p', [_vm._v(\"Склонируйте репозиторий\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"git clone https://github.com/Multi-Agent-io/feecc-print-server.git\")])])]), _c('li', [_c('p', [_vm._v(\"Измените параметры\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-built_in\"\n    }\n  }, [_vm._v(\"cd\")]), _vm._v(\" feecc-print-server\\nvim docker-compose.yml\")])]), _c('p', [_vm._v(\"Значения параметров:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"MONGODB_URI - Your MongoDB connection URI ending with /db-name\\nPRODUCTION_ENVIRONMENT - Leave null if you want testing credentials to work, otherwise set it to true\\nPAPER_WIDTH - Paper width in mm\\nPRINTER_MODEL - Label printer model name\\nRED - Whether the black and red paper is loaded or not (boolean, null for false)\\n\")])])]), _c('li', [_c('p', [_vm._v(\"Запустите контейнер\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"sudo docker-compose up --build\")])])]), _c('li', [_c('p', [_vm._v(\"Проверьте работоспособность\")]), _c('p', [_vm._v(\"Проверьте развертывание, перейдя по адресу \"), _c('a', {\n    attrs: {\n      \"href\": \"http://127.0.0.1:8083/docs\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"http://127.0.0.1:8083/docs\")]), _vm._v(\" в браузере. Вы должны увидеть страницу SwaggerUI. \")])])]), _c('h2', {\n    attrs: {\n      \"id\": \"запуск-cameraman\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-cameraman\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Запуск Cameraman\")]), _c('ol', [_c('li', [_c('p', [_vm._v(\"Склонируйте репозитории\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"git clone https://github.com/Multi-Agent-io/feecc-cameraman.git\")])])]), _c('li', [_c('p', [_vm._v(\"Измените параметры\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-bash\"\n    }\n  }, [_c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-built_in\"\n    }\n  }, [_vm._v(\"cd\")]), _vm._v(\" feecc-cameraman\\nvim docker-compose.yml\")])]), _c('p', [_vm._v(\"Значение параметров:\")]), _c('pre', [_c('code', {\n    pre: true\n  }, [_vm._v(\"MONGODB_URI - Your MongoDB connection URI ending with /db-name\\nPRODUCTION_ENVIRONMENT - Leave null if you want testing credentials to work, otherwise set it to true\\nFFMPEG_COMMAND - ffmpeg command used for capturing the video stream\\nCAMERAS_CONFIG - A JSON-like string for camera configuration. This string represents a JSON list of strings, each one describing an RTSP stream (\\\"-\\\" separated stream number and RTSP stream URI). Example: '[\\\"1-rtsp://login:password@192.168.88.239:554/Streaming/Channels/101\\\"]'\\n\")])])]), _c('li', [_c('p', [_vm._v(\"Запустите контейнер\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"sudo docker-compose up --build\")])])]), _c('li', [_c('p', [_vm._v(\"Проверьте работоспособность\")]), _c('p', [_vm._v(\"Проверьте развертывание, перейдя по адресу \"), _c('a', {\n    attrs: {\n      \"href\": \"http://127.0.0.1:8081/docs\",\n      \"target\": \"_blank\",\n      \"rel\": \"nofollow noopener noreferrer\"\n    }\n  }, [_vm._v(\"http://127.0.0.1:8081/docs\")]), _vm._v(\" в браузере. Вы должны увидеть страницу SwaggerUI. \")])])]), _c('h2', {\n    attrs: {\n      \"id\": \"запуск-фронтенда\"\n    }\n  }, [_c('a', {\n    attrs: {\n      \"href\": \"#%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-%D1%84%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4%D0%B0\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_vm._v(\"#\")]), _vm._v(\"Запуск фронтенда\")]), _c('ol', [_c('li', [_c('p', [_vm._v(\"Склонируйте репозитории\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"git clone https://github.com/Multi-Agent-io/feecc-workbench-frontend.git\")])])]), _c('li', [_c('p', [_vm._v(\"Измените параметры\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"vim configs/config.json\")])]), _c('p', [_vm._v(\"Значение параметров:\")]), _c('pre', [_c('code', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs language-json\"\n    }\n  }, [_vm._v(\"{ \\n   \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"\\\"socket\\\"\")]), _vm._v(\": адрес Workbench Daemon,\\n   \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"\\\"interface_language\\\"\")]), _vm._v(\": Язык интерфейса (\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"ru\\\"\")]), _vm._v(\"/\"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-string\"\n    }\n  }, [_vm._v(\"\\\"en\\\"\")]), _vm._v(\"),\\n   \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"\\\"dev_show_reducers\\\"\")]), _vm._v(\": Режим разработчика,\\n   \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"\\\"pulling_period\\\"\")]), _vm._v(\": Периодичность получения обновлений с бекенда в мс,\\n   \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"\\\"use_devtools\\\"\")]), _vm._v(\": использование devtools,\\n   \"), _c('span', {\n    pre: true,\n    attrs: {\n      \"class\": \"hljs-attr\"\n    }\n  }, [_vm._v(\"\\\"show_test_schemas\\\"\")]), _vm._v(\": показывать ли тестовые схемы\\n}\")])])]), _c('li', [_c('p', [_vm._v(\"Запустите контейнер\")]), _c('p', [_c('code', {\n    pre: true\n  }, [_vm._v(\"docker-compose up --build -d\")])])]), _c('li', [_c('p', [_vm._v(\"Проверьте работоспособность\")]), _c('p', [_vm._v(\"Откройте в браузере страницу \"), _c('code', {\n    pre: true\n  }, [_vm._v(\"localhost:3000\")]), _vm._v(\". Должна открыться страница авторизации.\")])])])]);\n};\nvar staticRenderFns = [];\n\n\n//# sourceURL=webpack:///./docs/es/feecc-system-deploy-feecc-wb.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%2217c86829-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

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

/***/ "XpDX":
/*!*****************************************************************************************************!*\
  !*** ./docs/es/feecc-system-deploy-feecc-wb.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_system_deploy_feecc_wb_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./feecc-system-deploy-feecc-wb.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"lA06\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_system_deploy_feecc_wb_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/es/feecc-system-deploy-feecc-wb.md?");

/***/ }),

/***/ "fdmV":
/*!*************************************************!*\
  !*** ./docs/es/feecc-system-deploy-feecc-wb.md ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _feecc_system_deploy_feecc_wb_md_vue_type_template_id_6b6171fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feecc-system-deploy-feecc-wb.md?vue&type=template&id=6b6171fa& */ \"hctb\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _feecc_system_deploy_feecc_wb_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feecc-system-deploy-feecc-wb.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"XpDX\");\n/* harmony import */ var _feecc_system_deploy_feecc_wb_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feecc-system-deploy-feecc-wb.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"4Fd8\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _feecc_system_deploy_feecc_wb_md_vue_type_template_id_6b6171fa___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _feecc_system_deploy_feecc_wb_md_vue_type_template_id_6b6171fa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _feecc_system_deploy_feecc_wb_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_feecc_system_deploy_feecc_wb_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _feecc_system_deploy_feecc_wb_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_feecc_system_deploy_feecc_wb_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/es/feecc-system-deploy-feecc-wb.md?");

/***/ }),

/***/ "gBva":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/feecc-system-deploy-feecc-wb.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Развертывание \\\"Feecc Рабочее Место Инженера\\\" (РМИ или Workbench)\",\n  \"contributors\": [\"timofeev41\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/es/feecc-system-deploy-feecc-wb.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "hctb":
/*!********************************************************************************!*\
  !*** ./docs/es/feecc-system-deploy-feecc-wb.md?vue&type=template&id=6b6171fa& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_system_deploy_feecc_wb_md_vue_type_template_id_6b6171fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"17c86829-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./feecc-system-deploy-feecc-wb.md?vue&type=template&id=6b6171fa& */ \"Ia+V\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_system_deploy_feecc_wb_md_vue_type_template_id_6b6171fa___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_17c86829_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_feecc_system_deploy_feecc_wb_md_vue_type_template_id_6b6171fa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/es/feecc-system-deploy-feecc-wb.md?");

/***/ }),

/***/ "lA06":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/es/feecc-system-deploy-feecc-wb.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/es/feecc-system-deploy-feecc-wb.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ })

}]);