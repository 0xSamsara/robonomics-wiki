(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--en--raspberry-setup-md"],{

/***/ "7gvU":
/*!*******************************************************************!*\
  !*** ./docs/en/raspberry-setup.md?vue&type=template&id=98ea977e& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_709914d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_raspberry_setup_md_vue_type_template_id_98ea977e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"709914d4-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./raspberry-setup.md?vue&type=template&id=98ea977e& */ \"J1ae\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_709914d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_raspberry_setup_md_vue_type_template_id_98ea977e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_709914d4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_raspberry_setup_md_vue_type_template_id_98ea977e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/en/raspberry-setup.md?");

/***/ }),

/***/ "J1ae":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"709914d4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/en/raspberry-setup.md?vue&type=template&id=98ea977e& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_vm._v(\"For both methods, the first thing you need to do is setup a Raspberry Pi.\")]),_c('p',[_vm._v(\"Install \"),_c('a',{attrs:{\"href\":\"https://www.raspberrypi.com/software/\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"Raspberry Pi Imager\")]),_vm._v(\" on your computer. Then, insert the SD card and run the Imager program. From the menu, select 64-bit Ubuntu Server as the operating system and ensure to select your SD card from the storage dropdown, and then press \"),_c('code',{pre:true},[_vm._v(\"write\")]),_vm._v(\".\")]),_c('p',[_c('g-image',{attrs:{\"src\":__webpack_require__(/*! !assets-loader?alt=pi!../images/home-assistant/pi.png */ \"SRUW\"),\"alt\":\"pi\"}})],1),_c('p',[_vm._v(\"Open the SD card's storage from your computer and navigate inside the root folder of the card. The name of the folder should be something similar to \"),_c('code',{pre:true},[_vm._v(\"system-boot\")]),_vm._v(\".\")]),_c('p',[_vm._v(\"Find the file named \"),_c('code',{pre:true},[_vm._v(\"network-config\")]),_vm._v(\" and open it in a text editor. Copy the below text and paste it into the file:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"version: 2\\nethernets:\\n  eth0:\\n    dhcp4: true\\n    optional: true\\nwifis:\\n  wlan0:\\n    dhcp4: true\\n    optional: true\\n    access-points:\\n      \\\"YOUR_WIFI_NAME\\\":\\n        password: \\\"YOUR_WIFI_PASSWORD\\\"\\n\")])]),_c('p',[_c('strong',[_vm._v(\"Make sure that you input your actual wifi name and your wifi password.\")]),_vm._v(\" Then you need to save the file, and insert the SD card to the Raspberry Pi and turn it on. It must connect to your wi-fi network, now you need to find its address. Firstly find your address in the local network with:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"ip a\")])]),_c('p',[_vm._v(\"It must look like \"),_c('code',{pre:true},[_vm._v(\"192.168.xx.xx\")]),_vm._v(\" or \"),_c('code',{pre:true},[_vm._v(\"172.xx.xx.xx\")]),_vm._v(\".\")]),_c('p',[_vm._v(\"Then scan the network with your address and zero in the end:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"$ sudo nmap -sP 192.168.xx.0/24\\nStarting Nmap 7.80 ( https://nmap.org ) at 2020-06-26 13:50 CEST\\nNmap scan report \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"for\")]),_vm._v(\" _gateway (192.168.43.1)\\nHost is up (0.015s latency).\\nMAC Address: 8E:F5:A3:DB:03:27 (Unknown)\\nNmap scan report \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"for\")]),_vm._v(\" ubuntu (192.168.43.56)\\nHost is up (0.049s latency).\\nMAC Address: DC:A6:32:02:46:50 (Raspberry Pi Trading)\\nNmap scan report \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"for\")]),_vm._v(\" LAPTOP-27UBLNO7 (192.168.43.234)\\nHost is up (0.00057s latency).\\nMAC Address: 7C:B2:7D:9E:95:DA (Intel Corporate)\\nNmap scan report \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"for\")]),_vm._v(\" ed-vm (192.168.43.138)\\nHost is up.\\nNmap \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"done\")]),_vm._v(\": 256 IP addresses (4 hosts up) scanned \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"in\")]),_vm._v(\" 2.07 seconds\")])]),_c('p',[_vm._v(\"In this example we can see that the Raspberry Pi's address is \"),_c('code',{pre:true},[_vm._v(\"192.168.43.56\")]),_vm._v(\". Now you can connect to it over ssh:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"ssh ubuntu@192.168.43.56\")])]),_c('p',[_vm._v(\"Password is \\\"ubuntu\\\".\")]),_c('h2',{attrs:{\"id\":\"home-assistant\"}},[_c('a',{attrs:{\"href\":\"#home-assistant\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Home Assistant\")]),_c('p',[_vm._v(\"Now we need to install Home Assistant to the Raspberry Pi. Detailed instructions can be found \"),_c('a',{attrs:{\"href\":\"https://www.home-assistant.io/installation/linux#install-home-assistant-core\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"here\")]),_vm._v(\". You need to install \"),_c('code',{pre:true},[_vm._v(\"Home Assistant Core\")]),_vm._v(\". It's actual version is 2021.11.5 and instruction assumes that we already have installed Python 3.9 or newer.\")]),_c('p',[_vm._v(\"Update your system and install necessary packages:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"ubuntu@ubuntu:~$ sudo apt-get update\\nubuntu@ubuntu:~$ sudo apt-get upgrade -y\\nubuntu@ubuntu:~$ sudo apt-get install -y python3 python3-dev python3-venv python3-pip libffi-dev libssl-dev libjpeg-dev zlib1g-dev autoconf build-essential libopenjp2-7 libtiff5 tzdata libcurl4-openssl-dev\")])]),_c('p',[_vm._v(\"Create user \"),_c('code',{pre:true},[_vm._v(\"homeassistant\")]),_vm._v(\" and the directory for homeassistant core:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"ubuntu@ubuntu:~$ sudo useradd -rm homeassistant\\nubuntu@ubuntu:~$ sudo mkdir /srv/homeassistant\\nubuntu@ubuntu:~$ sudo chown homeassistant:homeassistant /srv/homeassistant\")])]),_c('p',[_vm._v(\"Next up is to create and change to a virtual environment for Home Assistant Core. This will be done as the homeassistant account.\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"ubuntu@ubuntu:~$ sudo -u homeassistant -H -s\\nhomeassistant@ubuntu:/home/ubuntu$ \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-built_in\"}},[_vm._v(\"cd\")]),_vm._v(\" /srv/homeassistant\\nhomeassistant@ubuntu:/srv/homeassistant$ python3.9 -m venv .\\nhomeassistant@ubuntu:/srv/homeassistant$ \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-built_in\"}},[_vm._v(\"source\")]),_vm._v(\" bin/activate\")])]),_c('p',[_vm._v(\"Then install required Python packages:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"(homeassistant) homeassistant@ubuntu:/srv/homeassistant$ python3 -m pip install wheel\\n(homeassistant) homeassistant@ubuntu:/srv/homeassistant$ pip3 install homeassistant==2021.11.5\")])]),_c('p',[_vm._v(\"Start Home Assistant Core for the first time. This will complete the installation for you, automatically creating the \"),_c('code',{pre:true},[_vm._v(\".homeassistant\")]),_vm._v(\"configuration directory in the \"),_c('code',{pre:true},[_vm._v(\"/home/homeassistant\")]),_vm._v(\" directory, and installing any basic dependencies:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"(homeassistant) homeassistant@ubuntu:/srv/homeassistant$ hass\")])]),_c('p',[_vm._v(\"You can now reach your installation via the web interface on \"),_c('code',{pre:true},[_vm._v(\"http://%RASPBERRY_IP_ADDRESS%:8123\")]),_vm._v(\". \\nIn this example: \"),_c('code',{pre:true},[_vm._v(\"http://192.168.43.56:8123\")])]),_c('p',[_vm._v(\"Create user and finish setup, then stop Home Assistant with \"),_c('code',{pre:true},[_vm._v(\"Ctrl+C\")]),_vm._v(\".\")]),_c('p',[_vm._v(\"After this installation process has been completed, from the\"),_c('code',{pre:true},[_vm._v(\"python_scripts\")]),_vm._v(\" folder import some necessary scripts:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"(homeassistant) homeassistant@ubuntu:/srv/homeassistant$ mkdir python_scripts\\n(homeassistant) homeassistant@ubuntu:/srv/homeassistant$ \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-built_in\"}},[_vm._v(\"cd\")]),_vm._v(\" python_scripts/\\n(homeassistant) homeassistant@ubuntu:/srv/homeassistant/python_scripts$ wget https://raw.githubusercontent.com/airalab/robonomics-smarthome/main/python_scripts/send_datalog.py\\n(homeassistant) homeassistant@ubuntu:/srv/homeassistant/python_scripts$ wget https://raw.githubusercontent.com/airalab/robonomics-smarthome/main/python_scripts/control.py\\n(homeassistant) homeassistant@ubuntu:/srv/homeassistant/python_scripts$ wget https://raw.githubusercontent.com/airalab/robonomics-smarthome/main/python_scripts/utils.py\\n(homeassistant) homeassistant@ubuntu:/srv/homeassistant/python_scripts$ wget https://raw.githubusercontent.com/airalab/robonomics-smarthome/main/python_scripts/create_config.py\\n(homeassistant) homeassistant@ubuntu:/srv/homeassistant/python_scripts$ wget https://raw.githubusercontent.com/airalab/robonomics-smarthome/main/python_scripts/decrypt.py\\n(homeassistant) homeassistant@ubuntu:/srv/homeassistant/python_scripts$ wget https://raw.githubusercontent.com/airalab/robonomics-smarthome/main/python_scripts/encrypt.py\")])]),_c('p',[_vm._v(\"Add mnemonic seed from your user account in \"),_c('code',{pre:true},[_vm._v(\"config.config\")]),_vm._v(\" file:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"(homeassistant) homeassistant@ubuntu:/srv/homeassistant/python_scripts$ nano /srv/homeassistant/python_scripts/config.config\")])]),_c('p',[_vm._v(\"In this format:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"[user]\\nSEED = <your mnemonic or raw seed>\\n\")])]),_c('h2',{attrs:{\"id\":\"substrate-interface\"}},[_c('a',{attrs:{\"href\":\"#substrate-interface\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Substrate Interface\")]),_c('p',[_vm._v(\"To pub data to Robonomics you need to install \"),_c('code',{pre:true},[_vm._v(\"substrate-interface\")]),_vm._v(\" python package (you need to install RUST before) to your raspberry. \")]),_c('p',[_vm._v(\"Install RUST:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"(homeassistant) homeassistant@ubuntu:/srv/homeassistant/python_scripts$ curl --proto \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-string\"}},[_vm._v(\"'=https'\")]),_vm._v(\" --tlsv1.2 -sSf https://sh.rustup.rs | sh\\n(homeassistant) homeassistant@ubuntu:/srv/homeassistant/python_scripts$ \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-built_in\"}},[_vm._v(\"source\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-variable\"}},[_vm._v(\"$HOME\")]),_vm._v(\"/.cargo/env\\n(homeassistant) homeassistant@ubuntu:/srv/homeassistant/python_scripts$ rustup default nightly\")])]),_c('p',[_vm._v(\"And install necessary python packages to the virtual environment:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"(homeassistant) homeassistant@ubuntu:/srv/homeassistant/python_scripts$ pip3 install pynacl==1.4.0 packaging pycurl\\n(homeassistant) homeassistant@ubuntu:/srv/homeassistant/python_scripts$ pip3 install substrate-interface==1.1.2 --use-feature=2020-resolver\\n(homeassistant) homeassistant@ubuntu:/srv/homeassistant/python_scripts$ pip3 install python-miio==0.5.8 --use-feature=2020-resolver\")])]),_c('h2',{attrs:{\"id\":\"systemd-services\"}},[_c('a',{attrs:{\"href\":\"#systemd-services\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Systemd services\")]),_c('p',[_vm._v(\"Now change user (you can run under any user, which allows you to use sudo):\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"(homeassistant) homeassistant@ubuntu:/srv/homeassistant/python_scripts$ \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-built_in\"}},[_vm._v(\"exit\")])])]),_c('p',[_vm._v(\"Create new service for home assistant start: \")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"ubuntu@ubuntu:~$ sudo nano /etc/systemd/system/home-assistant@homeassistant.service \")])]),_c('p',[_vm._v(\"Paste the following:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"[Unit]\\nDescription=Home Assistant\\nAfter=network-online.target\\n[Service]\\nType=simple\\nUser=%i\\nWorkingDirectory=/srv/%i/\\nExecStart=/srv/homeassistant/bin/hass -c \\\"/home/%i/.homeassistant\\\"\\nEnvironment=\\\"PATH=/srv/%i/bin\\\"\\n\\n[Install]\\nWantedBy=multi-user.target\\n\")])]),_c('p',[_vm._v(\"Do the same for robonomics control service:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"ubuntu@ubuntu:~$ sudo nano /etc/systemd/system/robonomics-control@homeassistant.service \")])]),_c('p',[_vm._v(\"With:\")]),_c('pre',[_c('code',{pre:true},[_vm._v(\"[Unit]\\nDescription=Robonomics Control\\nAfter=network-online.target\\n[Service]\\nType=simple\\nUser=%i\\nWorkingDirectory=/srv/%i/\\nExecStart=/srv/homeassistant/bin/python3.9 \\\"/srv/%i/python_scripts/control.py\\\"\\nEnvironment=\\\"PATH=/srv/%i/bin\\\"\\n\\n[Install]\\nWantedBy=multi-user.target\\n\")])]),_c('p',[_vm._v(\"And enable both services:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"ubuntu@ubuntu:~$ sudo systemctl \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-built_in\"}},[_vm._v(\"enable\")]),_vm._v(\" home-assistant@homeassistant.service\\nubuntu@ubuntu:~$ sudo systemctl \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-built_in\"}},[_vm._v(\"enable\")]),_vm._v(\" robonomics-control@homeassistant.service\")])]),_c('p',[_vm._v(\"After that you can connect your devices:\")]),_c('ul',[_c('li',[_c('a',{attrs:{\"href\":\"/docs/zigbee2-mqtt\"}},[_vm._v(\"Connection with zigbee2MQTT\")])]),_c('li',[_c('a',{attrs:{\"href\":\"/docs/xiaomi-gateway\"}},[_vm._v(\"Connection through Xiaomi Gateway\")])]),_c('li',[_c('a',{attrs:{\"href\":\"/docs/vacuum-connect\"}},[_vm._v(\"Connect Vacuum Cleaner\")])])])])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/en/raspberry-setup.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22709914d4-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "Pv0W":
/*!*********************************************************************************************!*\
  !*** ./docs/en/raspberry-setup.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_raspberry_setup_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./raspberry-setup.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"kMAO\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_raspberry_setup_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/en/raspberry-setup.md?");

/***/ }),

/***/ "SRUW":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/gridsome/lib/webpack/loaders/assets-loader.js?alt=pi!./docs/images/home-assistant/pi.png ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"type\":\"image\",\"mimeType\":\"image/png\",\"src\":\"/assets/static/pi.802c48c.46db5e0535c274a27e533f40bb273367.png\",\"size\":{\"width\":670,\"height\":444},\"sizes\":\"(max-width: 670px) 100vw, 670px\",\"srcset\":[\"/assets/static/pi.802c48c.46db5e0535c274a27e533f40bb273367.png 670w\"],\"dataUri\":\"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 670 444' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-86b6fbee54a6aef20a745400e809dca0'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-86b6fbee54a6aef20a745400e809dca0)' width='670' height='444' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAqCAYAAAADBl3iAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAInUlEQVRo3u1YC1CVxxW%2bYyftNKYzUeMLwhvN0OIjgJGXiCigoE1orRJa0ZanKFUjkvCwxiqipj5aUYzYJi1FREDaJoIS5I3yEGmMXNCmMaNGEFBU4D64j69n97/3ciFqAG8YStiZb87Z3XPOnv3%2b/Xf3/0Vz7O1hSLzm4AD7V1%2bFq4sr9uz9A6KjohAbF4%2bEnTvwTtQmhISGIzwkGHExbyMsfD1i3o7Glrc2ISZ2K97dthUBK36B0JAwhAYHYUPkevxmzRrMdbCj2A4DysPBzg7Ojo5wd3OD3ezZmOfqioCVK2A/1wl%2bc2cCsUuQvMweIktzcxgaFmZmsCLp5OhECczHYi8vzHNxgZuLM%2bzt7El3hu2PbWD7E1uepLPjXPj6LoW350LY2thg1oyZPGkX6mOEWpqbDS4HCwtYW1pynbVZW1rAguR0ihc8ywSu00wh%2bkdODr4tZJ46hVMZGTh58iRJ0qmelZXJ9aysLJzOztLZpJ84we1OZ2cjm/oYWF9WZuYz5ZDzGJ3J1CzK73QORPiOF5FEIsFQoaurCwqFAh3tnbh14yuo5Gp0SxS4%2bd/bkHbI0N0tx1DmwyDq7u7GUEAmk3HG6%2bvrEXpgBdYk%2b%2bBw5ntI/Fs8Vh32xsakIDQ33YVKpYJcLsdQ5TXkBPyn4XP4J3tidbkHrPyNYBtujlVl7gg%2b8nM8aH0IpUox8gjQTkgqlXASUpMPw8vDHCvHW%2bNnxtbw9ZqO/H/%2bi/dJpdJePiNmBbAJKUl2qhWIcFqMcJEptr9kh4QJDtggMkdC4FooiIBuqWxkrgAZPVlWzn2Yjje/Z4RKi58ietwM7J04ByWmPlg11hK1RWW6VTCiVoA%2bATl/PIY3RJOwZvwr2ENPf%2bv4WVj14jQEPmeKko/yBAIk0pH3Cmg3wcZbX2KXiTMif2CFv7%2b8AMeN52P3czbY7eCLVnkXVN0jeBNkJKiIhILjafCfMB1hY0wROsYEb1k5oSr3E04Qs%2bkme62PvuzbNmwI0E%2bOTYC9w3wien06GwIrteKrSI2IRfo7Cbh25xZvk5OPvB/xhu0KkGsmpy0saS20k2K6UqEU%2bglcU6npvZf0stFOWL/oH5GGIsKgK0CpVCI9PR1JSUlobGzslTyzY9dgfhKcO4eCTwq4rtS0cR7oFshiaAvTU1NTcfToUVRUVKC2thZqtVpH6LAjgE0wNDQUy5cvR0pKCpKTk7Fv3z4kJiZyff/%2b/di2bRvi4%2bO5TQZ9BcbFxWH79u269s2bN3MCDx48iPb2doSFhWHdunUICgpCJn0ZGvqYNPgewJKNiYlBVFQUAgIC6Dvfl%2buBgYHYuHEjoqOj4efnh9jYWE6Cu7s7wsPDsWXLFk5Cbm4un3RkZCSfLIvBVhVbNYwcViSa12VYEaCVbKm2tLTgzJkzSEtLQ15eHvLz83mdkXPo0CHU1dXhyJEjEIvFOHv2LAoKCnhbTU0Nmpqa%2bEpgbawUFhZy2dbWxmNr95ZhRYA%2bCawo9N5r/dLQ0MDf86cVtryrqqp6xWMT1sY0%2bCkg65LAkJB2dkLW2QVJR6cOUo1U0%2b4v1fV16HTWz3TuSzGgpolKNPE6OnvF1rYbCiIaC0MFpYHtDAHR9ZgkDBixj9FjBxHnafENGe8pEBU%2b74qBwwVFY%2bdxsHrRC/N4W%2bFYVw7ePnYwcQX/wh%2b66OLy2ION1Q%2bIysyWQR/l5gT6VC230Eo9aPoqrN9AqfESlL7sw%2bulRotRbvk6ykx9UWbiy9t5LD2fr4PGM2djLu1tQ3rFND/ez8eY6k1xl/aOZd4752eBqIyS5QMRuE4Dlk72%2bjqmeKFkkifKjH3w2S9/h4a1e3A1kGTEbohDduAz/xg0hCdCHLwD4l%2b/i8oZK1AyYSH5PSEeg3ZMIlAYwxvFEzxwySMCjet28/jXNh1ArVsQisd59ORG9syvTOM/EJT28RH17aywWY4Ls9/EhZn%2bvTFLA9Kr3UJwyWs9yWCu1y6ORM2CUNQsXItqd5LzQ3DR/lc9fk%2bIw54sXz1Wr/cas/K11ahhcdzDcHnZJlQ5rcaFGSsFP7Irt2SrTliBJZSzPoo1KNGT%2bnpfEnoIMPFBET3h5o9LoXhER1JTK2St7ZC13Bdw954A0lmf5PZdLqV3SL/VLNQZ7rRA%2bhWhuU1nz%2bO0auI0C3FYf/WitTj/fUc0xhyCopOOuaY2IT71sbg89s0mLnk7SaVMjqsRiSj6kRuKTH2QPXUBTushZ6oHh1Dvkcwu12gRyp9MgC8n4N7FK8Ll44ubaMu9iAcXruBefiUelNZCcuMO2otr0JZXhUfVV0hexMNqMboab0B2uxUdn15HR901tBdewoOKK%2bgSf8HrHf%2bmtqJa3Cc8qq6HWnMXqvH5LQrGzMHnez%2bEiu4B7cWXabxP%2bZjtRVV4WNNIvtdp7DrcL6hGZ8OX3E8cdUDYJM18cWqKOzIJWTTBE1PccHSSE5InOuLYJBf8ZbIrnzjrZ3YffzMBi9B%2buYEPoqYbG1sJKnk3VFI51JqvNJWEbmWPJNSvhLJTyv/gsC807kOS2bN23sTq1M9jsHYpfQpLpLpbX43vBoGA9/4qfP11SQVb5sNtaVz6VGa5qOjJszz4jTLmT8KpQwRkaCbHkDFlPtKIhLTJbkgnnRGSqSGI9X30JAJKNZUS2oTqwnZCnPhn1O84xqV413EBCSmo35ki6ImsrpVCe/3OY1zn7Vp7Xk/pibFL8Kvf8T7qf/8%2bKuidLh63ANVL1kO854MeW30fvRgsp4a9H6DSIwwlLy1CCb22Z4089eCFc32g7csjFBh7P34P0D8Fil50x3k6d791vODKd3228oppMufpifbHr4DsSiZ68j2LnQLsifYX/ToF%2bJnLzvAhgG5MImFAfuyuobmHaB9ef/GNK2CgAZ8Vgx3zcU9zMBA9a4D/d4wSMErAKAGjBIwSMErAdxj/A5%2bASTyldmdPAAAAAElFTkSuQmCC' /%3e%3c/svg%3e\"}\n\n//# sourceURL=webpack:///./docs/images/home-assistant/pi.png?./node_modules/gridsome/lib/webpack/loaders/assets-loader.js?alt=pi");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render: function render(h) {\n    return h('div', null, this.$slots[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "W/oW":
/*!****************************************************************************************!*\
  !*** ./docs/en/raspberry-setup.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_raspberry_setup_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./raspberry-setup.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"ge3P\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_raspberry_setup_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/en/raspberry-setup.md?");

/***/ }),

/***/ "ge3P":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/en/raspberry-setup.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/en/raspberry-setup.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "kMAO":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/en/raspberry-setup.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Raspberry Setup\",\n  \"contributors\": [\"LoSk-p\", \"dergudzon\", \"Leemo94\"],\n  \"translated\": true\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/en/raspberry-setup.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "kvcZ":
/*!************************************!*\
  !*** ./docs/en/raspberry-setup.md ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raspberry_setup_md_vue_type_template_id_98ea977e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raspberry-setup.md?vue&type=template&id=98ea977e& */ \"7gvU\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _raspberry_setup_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raspberry-setup.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"W/oW\");\n/* harmony import */ var _raspberry_setup_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./raspberry-setup.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"Pv0W\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _raspberry_setup_md_vue_type_template_id_98ea977e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _raspberry_setup_md_vue_type_template_id_98ea977e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _raspberry_setup_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_raspberry_setup_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _raspberry_setup_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_raspberry_setup_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/en/raspberry-setup.md?");

/***/ })

}]);