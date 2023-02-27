/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ConfigClass.js":
/*!****************************!*\
  !*** ./src/ConfigClass.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ConfigClass)\n/* harmony export */ });\nclass ConfigClass {\n  constructor() {}\n  static getUrlApi() {\n    this.urlApi = \"http://localhost:3000\";\n    return this.urlApi;\n  }\n}\n\n//# sourceURL=webpack://web-app/./src/ConfigClass.js?");

/***/ }),

/***/ "./src/controllers/PortfolioController.js":
/*!************************************************!*\
  !*** ./src/controllers/PortfolioController.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_portfolio_portfolioModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/portfolio/portfolioModel */ \"./src/models/portfolio/portfolioModel.js\");\n/* harmony import */ var _models_portfolio_PortfolioClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/portfolio/PortfolioClass */ \"./src/models/portfolio/PortfolioClass.js\");\n\n\nlet divMsg = window.document.getElementById(\"msg\");\nlet divPortfolios = window.document.getElementById(\"listagem\");\nlet divFormulario = window.document.getElementById(\"formulario\");\nlet objPortfolioController;\nclass PortfolioController {\n  getTodosTable(divPortfolios) {\n    let promise = new Promise(function (resolve, reject) {\n      let promiseFetch = PortfolioModel.getTodos();\n      promiseFetch.then(response => {\n        resolve(response);\n      });\n    });\n    promise.then(response => {\n      let dados = \"\";\n      if (response.erro) {\n        this.exibirMsgAlert(response.msg, 'erro');\n      } else {\n        dados += `<div class = \"table-responsive\">\n                                <table class=\"table table-striped table-bordered table-hover table-sm\">\n                                    <thead class = \"table-dark\">\n\n                                        <tr>\n                                            <th>Código</th>\n                                            <th>Descrição</th>\n                                            <th></th>\n                                            <th></th>\n                                        </tr>\n                                    \n                                    </thead>\n\n                                    <tbody>`;\n        for (const servico of response.dados) {\n          dados += `<tr>\n                                                    \n                                                        <td>${servico.id_portfolio}</td>\n                                                        <td>${servico.descricao}</td>\n                                                        <td><button type=\"button\" class=\"btn btn-primary btn-editar\" data-id=\"${servico.id_portfolio}\">Editar</button></td>\n                                                        <td><button type=\"button\" class=\"btn btn-primary btn-excluir\" data-id=\"${servico.id_portfolio}\">Excluir</button></td>\n\n                                                    </tr>`;\n        }\n        dados += \"</tbody></table></div>\";\n        divPortfolios.innerHTML = dados;\n      }\n      for (const servico of response.dados) {\n        dados += ``;\n      }\n    }).catch(response => console.log(\"erro catch:\", response));\n  }\n  ocultarElemento(elemento) {\n    document.getElementById(elemento).style.display = \"none\";\n    console.log('teste');\n  }\n  exibirElemento(elemento) {\n    document.getElementById(elemento).style.display = \"block\";\n  }\n  limparCamposForm(form) {\n    form.id.value = \"\";\n    form.descricao.value = \"\";\n    form.detalhes.value = \"\";\n  }\n  exibirMsgAlert(msg, tipo) {\n    let dados = \"\";\n    if (tipo == \"sucesso\") {\n      dados = `<div class=\"alert alert-dark alert-success\" role=\"alert\">\n                        ${msg}\n                    </div>`;\n    } else if (tipo == \"erro\") {\n      dados = `<div class=\"alert alert-dark alert-danger\" role=\"alert\">\n                        ${msg}\n                    </div>`;\n    }\n    divMsg.innerHTML = dados;\n  }\n  registrarEvents() {}\n}\nfunction main() {\n  objPortfolioController = new PortfolioController();\n  objPortfolioController.ocultarElemento(\"formulario\");\n  objPortfolioController.getTodosTable(divPortfolios);\n}\nwindow.onload = main;\n\n//# sourceURL=webpack://web-app/./src/controllers/PortfolioController.js?");

/***/ }),

/***/ "./src/models/portfolio/PortfolioClass.js":
/*!************************************************!*\
  !*** ./src/models/portfolio/PortfolioClass.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PortfolioClass)\n/* harmony export */ });\nclass PortfolioClass {\n  constructor(id, descricao, detalhes) {\n    if (id != null) this.id_portfolio = id;\n    this.descricao = descricao;\n    this.detalhes = detalhes;\n  }\n}\n\n//# sourceURL=webpack://web-app/./src/models/portfolio/PortfolioClass.js?");

/***/ }),

/***/ "./src/models/portfolio/portfolioModel.js":
/*!************************************************!*\
  !*** ./src/models/portfolio/portfolioModel.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PortfolioModel)\n/* harmony export */ });\n/* harmony import */ var _ConfigClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ConfigClass */ \"./src/ConfigClass.js\");\n\nconst caminho = `${_ConfigClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getUrlApi().toString()}/portfolio`;\nclass PortfolioModel {\n  constructor() {}\n  static getTodos() {\n    return fetch(caminho).then(response => {\n      if (response.status >= 400) {\n        throw new Error('erro maior que 400');\n      }\n      return response.json();\n    });\n  }\n}\n\n//# sourceURL=webpack://web-app/./src/models/portfolio/portfolioModel.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/controllers/PortfolioController.js");
/******/ 	
/******/ })()
;