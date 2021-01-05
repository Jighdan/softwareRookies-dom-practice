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

/***/ "./src/scripts/DOM.js":
/*!****************************!*\
  !*** ./src/scripts/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _modules_domGenerators_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domGenerators/index */ \"./src/scripts/modules/domGenerators/index.js\");\n\n\nconst DOM = {\n\tgenerate: _modules_domGenerators_index__WEBPACK_IMPORTED_MODULE_0__.default,\n\telement: {\n\t\ttable: {\n\t\t\tcontainer: document.getElementById(\"tableContainer\")\n\t\t},\n\t\tbutton: {\n\t\t\tnewRow: document.getElementById(\"buttonNewRow\"),\n\t\t\tnewColumn: document.getElementById(\"buttonNewColumn\"),\n\t\t},\n\t\tmodal: {\n\t\t\tcontainer: document.getElementById(\"modal\"),\n\t\t\tclose: document.getElementById(\"modalClose\")\n\t\t},\n\t\tform: document.getElementById(\"headerForm\")\n\t}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/DOM.js?");

/***/ }),

/***/ "./src/scripts/globalEvents.js":
/*!*************************************!*\
  !*** ./src/scripts/globalEvents.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeEvents\": () => /* binding */ initializeEvents\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/scripts/DOM.js\");\n/* harmony import */ var _tableData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableData */ \"./src/scripts/tableData.js\");\n\n\n\n\nconst tableAddRow = () => {\n\t_tableData__WEBPACK_IMPORTED_MODULE_1__.default.addRow();\n\t_DOM__WEBPACK_IMPORTED_MODULE_0__.default.generate.table.initialize(_DOM__WEBPACK_IMPORTED_MODULE_0__.default.element.table.container, _tableData__WEBPACK_IMPORTED_MODULE_1__.default.data);\n};\n\nconst showModal = () => {\n\t// Fire up the modal when clicked\n\t_DOM__WEBPACK_IMPORTED_MODULE_0__.default.element.modal.container.style.display = \"block\";\n};\n\nconst modalClose = () => {\n\t_DOM__WEBPACK_IMPORTED_MODULE_0__.default.element.modal.container.display = \"none\";\n}\n\nconst newColumnForm = (event) => {\n\tevent.preventDefault();\n\tconst { headerName, headerType } = _DOM__WEBPACK_IMPORTED_MODULE_0__.default.element.form.elements;\n\t_tableData__WEBPACK_IMPORTED_MODULE_1__.default.addColumn(headerName.value, headerType.value);\n\t_DOM__WEBPACK_IMPORTED_MODULE_0__.default.generate.table.initialize(_DOM__WEBPACK_IMPORTED_MODULE_0__.default.element.table.container, _tableData__WEBPACK_IMPORTED_MODULE_1__.default.data);\n\tmodalClose();\n};\n\nconst initializeEvents = () => {\n\t// Buttons\n\t_DOM__WEBPACK_IMPORTED_MODULE_0__.default.element.button.newRow.addEventListener(\"click\", tableAddRow);\n\t_DOM__WEBPACK_IMPORTED_MODULE_0__.default.element.button.newColumn.addEventListener(\"click\", showModal);\n\t_DOM__WEBPACK_IMPORTED_MODULE_0__.default.element.form.addEventListener(\"submit\", newColumnForm);\n\n\t// Modal\n\twindow.addEventListener(\"click\", (event) => {\n\t\tif (event.target === _DOM__WEBPACK_IMPORTED_MODULE_0__.default.element.modal.container) {\n\t\t\t_DOM__WEBPACK_IMPORTED_MODULE_0__.default.element.modal.container.style.display = \"none\";\n\t\t}\n\t})\n\n\t_DOM__WEBPACK_IMPORTED_MODULE_0__.default.element.modal.close.addEventListener(\"click\", () => (\n\t\t_DOM__WEBPACK_IMPORTED_MODULE_0__.default.element.modal.container.style.display = \"none\"\n\t));\n};\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/globalEvents.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tableData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableData */ \"./src/scripts/tableData.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/scripts/DOM.js\");\n/* harmony import */ var _globalEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalEvents */ \"./src/scripts/globalEvents.js\");\n\n\n\n\n// What a mess. Can we see to split code as components instead of hierarchy?\n\n_DOM__WEBPACK_IMPORTED_MODULE_1__.default.generate.table.initialize(_DOM__WEBPACK_IMPORTED_MODULE_1__.default.element.table.container, _tableData__WEBPACK_IMPORTED_MODULE_0__.default.data);\n(0,_globalEvents__WEBPACK_IMPORTED_MODULE_2__.initializeEvents)();\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modules/domGenerators/index.js":
/*!****************************************************!*\
  !*** ./src/scripts/modules/domGenerators/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateElement\": () => /* binding */ generateElement,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _table_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table/index */ \"./src/scripts/modules/domGenerators/table/index.js\");\n\n\nconst generateElement = (elementTag, ...elementChildren) => {\n\tconst element = document.createElement(elementTag);\n\tif (elementChildren) {\n\t\telementChildren.forEach(children => element.appendChild(children))\n\t};\n\t\n\treturn element;\n};\n\nconst domGenerate = {\n\ttable: _table_index__WEBPACK_IMPORTED_MODULE_0__.default\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domGenerate);\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/domGenerators/index.js?");

/***/ }),

/***/ "./src/scripts/modules/domGenerators/table/index.js":
/*!**********************************************************!*\
  !*** ./src/scripts/modules/domGenerators/table/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/scripts/modules/domGenerators/index.js\");\n/* harmony import */ var _textFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../textFormat */ \"./src/scripts/modules/textFormat.js\");\n/* harmony import */ var _tableRowGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableRowGenerator */ \"./src/scripts/modules/domGenerators/table/tableRowGenerator.js\");\n/* harmony import */ var _tableRowAddons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tableRowAddons */ \"./src/scripts/modules/domGenerators/table/tableRowAddons.js\");\n\n\n\n\n\n/* \n\tCases: \n\t\t- How do we remove an specific row?\n\t\t\t\"Add a `data` element to each row of the table\"\n\n\t\t- Pass required data once to the table and then to their respective functions?\n\t\t\t\"An OOP approach, define a `tableDom` class and then pass the required parameters\"\n*/\n\nconst tableDom = {\n\t_generateHeader: function (tableContainer, tableData) {\n\t\tconst tableHeadSelector = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"th\", (0,_tableRowAddons__WEBPACK_IMPORTED_MODULE_3__.generateRowSelector)());\n\t\tconst tableHeadEmptyCell = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"th\");\n\n\t\tconst tableHeadCells = Object.keys(tableData.columns).map(columnName => {\n\t\t\t// Generate table's head content\n\t\t\tconst columnText = (0,_textFormat__WEBPACK_IMPORTED_MODULE_1__.capitalizeString)(columnName);\n\t\t\tconst tableHeadCellContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"h3\", document.createTextNode(columnText));\n\t\t\t// Add content to the table header cell\n\t\t\tconst tableHeadCell = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"th\", tableHeadCellContent);\n\t\t\treturn tableHeadCell\n\t\t});\n\n\t\tconst tableHeadRow = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"tr\", tableHeadSelector, ...tableHeadCells, tableHeadEmptyCell);\n\t\t// Add a `header` id to the row for the selector event\n\t\ttableHeadRow.setAttribute(\"data-row-id\", \"header\");\n\t\tconst tableHead = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"thead\", tableHeadRow);\n\t\ttableContainer.appendChild(tableHead);\n\t},\n\n\t_generateBody: function (tableContainer, tableData) {\n\t\tconst tableBodyRows = tableData.rows.map(row => (0,_tableRowGenerator__WEBPACK_IMPORTED_MODULE_2__.generateRow)(row, tableData.columns));\n\t\tconst tableBody = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"tbody\", ...tableBodyRows);\n\t\ttableContainer.appendChild(tableBody);\n\t},\n\n\tinitialize: function (tableContainer, tableData) {\n\t\t// Check if there's content inside `tableContainer`\n\t\tconst tableBody = tableContainer.getElementsByTagName(\"tbody\");\n\t\tif (tableBody.length) {\n\t\t\ttableContainer.deleteTHead();\n\t\t\ttableBody[0].remove();\n\t\t};\n\n\t\tthis._generateHeader(tableContainer, tableData);\n\t\tthis._generateBody(tableContainer, tableData);\n\t}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableDom);\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/domGenerators/table/index.js?");

/***/ }),

/***/ "./src/scripts/modules/domGenerators/table/tableCellGenerator.js":
/*!***********************************************************************!*\
  !*** ./src/scripts/modules/domGenerators/table/tableCellGenerator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateCell\": () => /* binding */ generateCell\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/scripts/modules/domGenerators/index.js\");\n\n\nconst convertToAnchor = (type, value) => {\n\tconst anchor = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"a\", document.createTextNode(value));\n\tanchor.rel = \"noreferrer noopener\";\n\tanchor.target = \"_blank\";\n\ttype === \"url\"\n\t\t? anchor.href = value \n\t\t: anchor.href = `mailto:${ value }`;\n\t\n\treturn anchor;\n};\n\nconst generateCell = (cellType, cellValue) => {\n\tconst value = document.createTextNode(cellValue);\n\tswitch (cellType) {\n\t\tcase \"email\":\n\t\t\treturn convertToAnchor(\"email\", cellValue);\n\t\tcase \"url\":\n\t\t\treturn convertToAnchor(\"url\", cellValue);\n\t\tcase \"number\":\n\t\t\treturn (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"span\", value);\n\t\tdefault:\n\t\t\t// Generate a paragraph element\n\t\t\treturn (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"p\", value);\n\t}\n};\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/domGenerators/table/tableCellGenerator.js?");

/***/ }),

/***/ "./src/scripts/modules/domGenerators/table/tableRowAddons.js":
/*!*******************************************************************!*\
  !*** ./src/scripts/modules/domGenerators/table/tableRowAddons.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateRowSelector\": () => /* binding */ generateRowSelector,\n/* harmony export */   \"generateRowSettings\": () => /* binding */ generateRowSettings\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/scripts/modules/domGenerators/index.js\");\n\n\nconst generateRowSelectorEvent = (rowSelector) => {\n\trowSelector.addEventListener(\"click\", (event) => {\n\t\t// Assumes that the checkbox path will be `... tr > td > input`\n\t\tconst rowParent = event.path[2];\n\t\tconst { rowId } = rowParent.dataset;\n\t\tconsole.info(`This row id => ${rowId}`);\n\t});\n\n\treturn rowSelector;\n};\n\nconst generateRowSelector = (rowId) => {\n\tconst rowSelector = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"input\");\n\trowSelector.setAttribute(\"type\", \"checkbox\");\n\tif (rowId) { rowSelector.setAttribute(\"data-row-id\", rowId) };\n\n\treturn generateRowSelectorEvent(rowSelector);\n};\n\nconst generateRowSettings = () => {\n\tconst svgPath = \"./icons/settings.svg\";\n\tconst rowSettings = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"img\");\n\trowSettings.src = svgPath;\n\treturn rowSettings;\n};\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/domGenerators/table/tableRowAddons.js?");

/***/ }),

/***/ "./src/scripts/modules/domGenerators/table/tableRowGenerator.js":
/*!**********************************************************************!*\
  !*** ./src/scripts/modules/domGenerators/table/tableRowGenerator.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateRow\": () => /* binding */ generateRow\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/scripts/modules/domGenerators/index.js\");\n/* harmony import */ var _tableRowAddons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableRowAddons */ \"./src/scripts/modules/domGenerators/table/tableRowAddons.js\");\n/* harmony import */ var _tableCellGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableCellGenerator */ \"./src/scripts/modules/domGenerators/table/tableCellGenerator.js\");\n\n\n\n\nconst generateRow = (row, columns) => {\n\tconst rowSelector = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"td\", (0,_tableRowAddons__WEBPACK_IMPORTED_MODULE_1__.generateRowSelector)(row.id));\n\tconst rowSettings = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"td\", (0,_tableRowAddons__WEBPACK_IMPORTED_MODULE_1__.generateRowSettings)());\n\n\tconst cells = Object.keys(row.cells).map(cellHeader => {\n\t\t// Converting the cell content to it's HTML equivalent\n\t\tconst headerType = columns[cellHeader];\n\t\tconst cellValue = row.cells[cellHeader];\n\t\tconst cell = (0,_tableCellGenerator__WEBPACK_IMPORTED_MODULE_2__.generateCell)(headerType, cellValue);\n\n\t\treturn (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"td\", cell);\n\t\t}\n\t);\n\n\t// Creating table row\n\tconst rowContainer = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElement)(\"tr\", rowSelector, ...cells, rowSettings)\n\t// Adding a the table id to the row itself as a data-* attribute\n\trowContainer.setAttribute(\"data-row-id\", row.id);\n\treturn rowContainer;\n};\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/domGenerators/table/tableRowGenerator.js?");

/***/ }),

/***/ "./src/scripts/modules/textFormat.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/textFormat.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalizeString\": () => /* binding */ capitalizeString\n/* harmony export */ });\nconst capitalizeString = (string) => (string.replace(/\\w\\S*/g, (w) => (w.replace(/^\\w/, (c) => c.toUpperCase()))));\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/textFormat.js?");

/***/ }),

/***/ "./src/scripts/tableData.js":
/*!**********************************!*\
  !*** ./src/scripts/tableData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst setCellDataDefaultState = (cellType) => (cellType !== \"number\" ? \"\" : 0);\n\n/*\n\tHad to switch from arrow functions to regular functions because it seems\n\tthat I don't understand `this` that well. Added to future refactors.\n\t\n\thttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions\n*/\n\nconst table = new Object({\n\tdata: {\n\t\tcolumns: {\n\t\t\t// headerName: headerType\n\t\t},\n\t\trows: [\n\t\t\t/*\n\t\t\t\t{\n\t\t\t\t\tid: uuidv4(),\n\t\t\t\t\tcells: {\n\t\t\t\t\t\theaderName: cellValue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t*/\n\t\t]\n\t},\n\n\taddRow: function() {\n\t\tconst rowTemplate = {\n\t\t\tid: uuidv4(),\n\t\t\tcells: {}\n\t\t};\n\n\t\t// Check if there are headers in the table and adds the to the row\n\t\tif (this.data.columns) {\n\t\t\tObject.keys(this.data.columns).forEach(columnName => {\n\t\t\t\trowTemplate.cells[columnName] = setCellDataDefaultState(this.data.columns[columnName])\n\t\t\t})\n\t\t};\n\n\t\t// Registers the new row\n\t\tthis.data.rows.push(rowTemplate);\n\t},\n\n\taddColumn: function(columnName, columnType) {\n\t\t// Registers the new column to `data.headers`\n\t\tthis.data.columns[columnName] = columnType;\n\t\t// Iterates over all of the available rows and adds the new column\n\t\tthis.data.rows.forEach(row => row.cells[columnName] = setCellDataDefaultState(columnType));\n\t}\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (table);\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/tableData.js?");

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