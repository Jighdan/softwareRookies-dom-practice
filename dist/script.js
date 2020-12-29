/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_generators_table_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/generators/table/index */ \"./src/scripts/modules/generators/table/index.js\");\n\nconst tableContainer = document.getElementById(\"tableContainer\");\n\nconst tableData = {\n\theaders: {\n\t\t// headerName: headerType\n\t\tname: \"text\",\n\t\tage: \"number\"\n\t},\n\trows: [\n\t\t/*\n\t\t{\n\t\t\tid: uuidv4(),\n\t\t\tcells: {\n\t\t\t\theaderName: cellValue\n\t\t\t}\n\t\t}\n\t\t*/\n\t\t{\n\t\t\tid: 12512,\n\t\t\tcells: {\n\t\t\t\tname: \"Jon\",\n\t\t\t\tage: 51\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\tid: 124,\n\t\t\tcells: {\n\t\t\t\t\"name\": \"Erick\",\n\t\t\t\tage: 21 \n\t\t\t}\n\t\t}\n\t]\n};\n\n(0,_modules_generators_table_index__WEBPACK_IMPORTED_MODULE_0__.initializeTable)(tableContainer, tableData);\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modules/formatters.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/formatters.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalizeString\": () => /* binding */ capitalizeString\n/* harmony export */ });\nconst capitalizeString = (string) => (string.replace(/\\w\\S*/g, (w) => (w.replace(/^\\w/, (c) => c.toUpperCase()))));\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/formatters.js?");

/***/ }),

/***/ "./src/scripts/modules/generators/index.js":
/*!*************************************************!*\
  !*** ./src/scripts/modules/generators/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateElementContent\": () => /* binding */ generateElementContent\n/* harmony export */ });\nconst generateElementContent = (elementTag, elementContent) => {\n\tconst element = document.createElement(elementTag);\n\tif (elementContent) {\n\t\ttypeof elementContent === \"object\"\n\t\t\t? element.appendChild(elementContent)\n\t\t\t: element.innerHTML = elementContent;\n\t}\n\t\n\treturn element\n};\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/generators/index.js?");

/***/ }),

/***/ "./src/scripts/modules/generators/table/index.js":
/*!*******************************************************!*\
  !*** ./src/scripts/modules/generators/table/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeTable\": () => /* binding */ initializeTable,\n/* harmony export */   \"refreshTable\": () => /* binding */ refreshTable\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/scripts/modules/generators/index.js\");\n/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../formatters */ \"./src/scripts/modules/formatters.js\");\n/* harmony import */ var _tableRowGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableRowGenerator */ \"./src/scripts/modules/generators/table/tableRowGenerator.js\");\n/* harmony import */ var _tableRowAddons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tableRowAddons */ \"./src/scripts/modules/generators/table/tableRowAddons.js\");\n\n\n\n\n\nconst generateTableHeader = (tableContainer, tableData) => {\n\tconst tableHead = tableContainer.createTHead();\n\tconst tableHeadRow = tableHead.insertRow();\n\tconst tableHeadSelector = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"th\", (0,_tableRowAddons__WEBPACK_IMPORTED_MODULE_3__.generateRowSelector)());\n\n\tconst tableHeadCells = Object.keys(tableData.headers).map(header => {\n\t\t// Generate table's head content\n\t\tconst tableHeadCellContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"h3\", (0,_formatters__WEBPACK_IMPORTED_MODULE_1__.capitalizeString)(header));\n\t\t// Add content to the table header cell\n\t\tconst tableHeadCell = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"th\", tableHeadCellContent);\n\t\treturn tableHeadCell\n\t});\n\n\tconst tableHeadRowContent = [tableHeadSelector, ...tableHeadCells, (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"th\", false)];\n\ttableHeadRowContent.forEach(tableHeadRowItem => tableHeadRow.appendChild(tableHeadRowItem));\n};\n\nconst generateTableBody = (tableContainer, tableData) => {\n\tconst tableBody = tableContainer.createTBody();\n\ttableData.rows.forEach(row => {\n\t\tconst tableBodyRow = (0,_tableRowGenerator__WEBPACK_IMPORTED_MODULE_2__.generateRow)(row, tableData.headers);\n\t\ttableBody.appendChild(tableBodyRow);\n\t});\n};\n\nconst initializeTable = (tableContainer, tableData) => {\n\tgenerateTableHeader(tableContainer, tableData);\n\tgenerateTableBody(tableContainer, tableData);\n};\n\nconst refreshTable = (tableContainer, tableData) => {\n\tconst tableBody = tableContainer.getElementByTagName(\"tbody\")[0];\n\ttableContainer.deleteTHead();\n\ttableBody.remove();\n\tinitializeTable(tableContainer, tableData);\n};\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/generators/table/index.js?");

/***/ }),

/***/ "./src/scripts/modules/generators/table/tableCellGenerator.js":
/*!********************************************************************!*\
  !*** ./src/scripts/modules/generators/table/tableCellGenerator.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateDataCell\": () => /* binding */ generateDataCell,\n/* harmony export */   \"generateHeaderDataCell\": () => /* binding */ generateHeaderDataCell,\n/* harmony export */   \"generateCell\": () => /* binding */ generateCell\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/scripts/modules/generators/index.js\");\n\n\nconst convertToAnchor = (type, value) => {\n\tconst anchor = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"a\", value);\n\tanchor.rel = \"noreferrer noopener\";\n\tanchor.target = \"_blank\";\n\ttype === \"url\"\n\t\t? anchor.href = value \n\t\t: anchor.href = `mailto:${ value }`;\n\t\n\treturn anchor;\n};\n\nconst generateDataCell = (content) => {\n\tconst dataCell = document.createElement(\"td\");\n\tdataCell.appendChild(content);\n\treturn dataCell;\n};\n\nconst generateHeaderDataCell = (content) => {\n\tconst dataCell = document.createElement(\"th\");\n\tdataCell.appendChild(content);\n\treturn dataCell;\n};\n\nconst generateCell = (cellType, cellValue) => {\n\tswitch (cellType) {\n\t\tcase \"email\":\n\t\t\treturn convertToAnchor(\"email\", cellValue);\n\t\tcase \"url\":\n\t\t\treturn convertToAnchor(\"url\", cellValue);\n\t\tcase \"number\":\n\t\t\treturn (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"span\", cellValue);\n\t\tdefault:\n\t\t\t// Generate a paragraph element\n\t\t\treturn (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"p\", cellValue);\n\t}\n};\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/generators/table/tableCellGenerator.js?");

/***/ }),

/***/ "./src/scripts/modules/generators/table/tableRowAddons.js":
/*!****************************************************************!*\
  !*** ./src/scripts/modules/generators/table/tableRowAddons.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateRowSelector\": () => /* binding */ generateRowSelector,\n/* harmony export */   \"generateRowSettings\": () => /* binding */ generateRowSettings\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/scripts/modules/generators/index.js\");\n\n\nconst generateRowSelector = () => {\n\tconst rowSelector = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"input\", false);\n\trowSelector.setAttribute(\"type\", \"checkbox\");\n\treturn rowSelector;\n};\n\nconst generateRowSettings = () => {\n\tconst svgPath = \"./icons/settings.svg\";\n\tconst rowSettings = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"img\", false);\n\trowSettings.src = svgPath;\n\treturn rowSettings;\n};\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/generators/table/tableRowAddons.js?");

/***/ }),

/***/ "./src/scripts/modules/generators/table/tableRowGenerator.js":
/*!*******************************************************************!*\
  !*** ./src/scripts/modules/generators/table/tableRowGenerator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateRow\": () => /* binding */ generateRow\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/scripts/modules/generators/index.js\");\n/* harmony import */ var _tableRowAddons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableRowAddons */ \"./src/scripts/modules/generators/table/tableRowAddons.js\");\n/* harmony import */ var _tableCellGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableCellGenerator */ \"./src/scripts/modules/generators/table/tableCellGenerator.js\");\n\n\n\n\nconst generateRow = (row, headers) => {\n\tconst rowSelector = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"td\", (0,_tableRowAddons__WEBPACK_IMPORTED_MODULE_1__.generateRowSelector)());\n\tconst rowSettings = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"td\", (0,_tableRowAddons__WEBPACK_IMPORTED_MODULE_1__.generateRowSettings)());\n\n\tconst cells = Object.keys(row.cells).map(cellHeader => {\n\t\t// Converting the cell content to it's HTML equivalent\n\t\tconst headerType = headers[cellHeader];\n\t\tconst cellValue = row.cells[cellHeader];\n\t\tconst cell = (0,_tableCellGenerator__WEBPACK_IMPORTED_MODULE_2__.generateCell)(headerType, cellValue);\n\n\t\treturn (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"td\", cell);\n\t\t}\n\t);\n\n\t// Creating table row\n\tconst rowContainer = document.createElement(\"tr\");\n\t// Adding a the table id to the row itself as a data-* attribute\n\trowContainer[\"data-row-id\"] = row.id;\n\n\t// Setting the order of the row content\n\tconst rowContent = [rowSelector, ...cells, rowSettings];\n\n\t// Adding the content to the row\n\trowContent.forEach(rowItem => rowContainer.appendChild(rowItem));\n\n\treturn rowContainer;\n};\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/generators/table/tableRowGenerator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/scripts/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;