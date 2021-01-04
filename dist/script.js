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

/***/ "./src/scripts/domElements.js":
/*!************************************!*\
  !*** ./src/scripts/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst element = {\n\ttable: {\n\t\tcontainer: document.getElementById(\"tableContainer\"),\n\t\tselectors: function () {\n\t\t\treturn this.container\n\t\t\t\t.querySelectorAll(\"input[type='checkbox'\")\n\t\t}\n\t},\n\tbutton: {\n\t\tnewRow: document.getElementById(\"buttonNewRow\"),\n\t\tnewColumn: document.getElementById(\"buttonNewColumn\"),\n\t},\n\tmodal: {\n\t\tcontainer: document.getElementById(\"modal\"),\n\t\tclose: document.getElementById(\"modalClose\")\n\t},\n\tform: document.getElementById(\"headerForm\")\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element);\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/domElements.js?");

/***/ }),

/***/ "./src/scripts/globalEvents.js":
/*!*************************************!*\
  !*** ./src/scripts/globalEvents.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeEvents\": () => /* binding */ initializeEvents\n/* harmony export */ });\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/scripts/domElements.js\");\n/* harmony import */ var _modules_domManagers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domManagers/index */ \"./src/scripts/modules/domManagers/index.js\");\n/* harmony import */ var _tableData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableData */ \"./src/scripts/tableData.js\");\n\n\n\n\nconst tableAddRow = () => {\n\t_tableData__WEBPACK_IMPORTED_MODULE_2__.default.addRow();\n\t_modules_domManagers_index__WEBPACK_IMPORTED_MODULE_1__.default.table.generate(_domElements__WEBPACK_IMPORTED_MODULE_0__.default.table.container, _tableData__WEBPACK_IMPORTED_MODULE_2__.default.data);\n};\n\nconst showModal = () => {\n\t// Fire up the modal when clicked\n\t_domElements__WEBPACK_IMPORTED_MODULE_0__.default.modal.container.style.display = \"block\";\n};\n\nconst modalClose = () => {\n\t_domElements__WEBPACK_IMPORTED_MODULE_0__.default.modal.container.display = \"none\";\n}\n\nconst newColumnForm = (event) => {\n\tevent.preventDefault();\n\tconst { headerName, headerType } = _domElements__WEBPACK_IMPORTED_MODULE_0__.default.form.elements;\n\t_tableData__WEBPACK_IMPORTED_MODULE_2__.default.addColumn(headerName.value, headerType.value);\n\t_modules_domManagers_index__WEBPACK_IMPORTED_MODULE_1__.default.table.generate(_domElements__WEBPACK_IMPORTED_MODULE_0__.default.table.container, _tableData__WEBPACK_IMPORTED_MODULE_2__.default.data);\n};\n\nconst initializeEvents = () => {\n\t// Buttons\n\t_domElements__WEBPACK_IMPORTED_MODULE_0__.default.button.newRow.addEventListener(\"click\", tableAddRow);\n\t_domElements__WEBPACK_IMPORTED_MODULE_0__.default.button.newColumn.addEventListener(\"click\", showModal);\n\t_domElements__WEBPACK_IMPORTED_MODULE_0__.default.form.addEventListener(\"submit\", newColumnForm);\n\n\t// Modal\n\twindow.addEventListener(\"click\", (event) => {\n\t\tif (event.target === _domElements__WEBPACK_IMPORTED_MODULE_0__.default.modal.container) {\n\t\t\t_domElements__WEBPACK_IMPORTED_MODULE_0__.default.modal.container.style.display = \"none\";\n\t\t}\n\t})\n\n\t_domElements__WEBPACK_IMPORTED_MODULE_0__.default.modal.close.addEventListener(\"click\", () => (\n\t\t_domElements__WEBPACK_IMPORTED_MODULE_0__.default.modal.container.style.display = \"none\"\n\t));\n};\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/globalEvents.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tableData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableData */ \"./src/scripts/tableData.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ \"./src/scripts/domElements.js\");\n/* harmony import */ var _modules_domManagers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/domManagers/index */ \"./src/scripts/modules/domManagers/index.js\");\n/* harmony import */ var _globalEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globalEvents */ \"./src/scripts/globalEvents.js\");\n\n\n\n\n\n_modules_domManagers_index__WEBPACK_IMPORTED_MODULE_2__.default.table.generate(_domElements__WEBPACK_IMPORTED_MODULE_1__.default.table.container, _tableData__WEBPACK_IMPORTED_MODULE_0__.default.data);\n(0,_globalEvents__WEBPACK_IMPORTED_MODULE_3__.initializeEvents)();\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modules/domManagers/button/index.js":
/*!*********************************************************!*\
  !*** ./src/scripts/modules/domManagers/button/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleButtonDisabled\": () => /* binding */ toggleButtonDisabled\n/* harmony export */ });\nconst toggleButtonDisabled = (targetButton) => {\n\tconst disabledStyleClass = \"button-disabled\";\n\n\t// Removes the targetButton class\n\ttargetButton.classList.contains(disabledStyleClass)\n\t\t? targetButton.classList.remove(disabledStyleClass)\n\t\t: targetButton.classList.add(disabledStyleClass)\n\n\t// Toggles the disabled property of targetButton\n\ttargetButton.disabled = !targetButton.disabled;\n};\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/domManagers/button/index.js?");

/***/ }),

/***/ "./src/scripts/modules/domManagers/index.js":
/*!**************************************************!*\
  !*** ./src/scripts/modules/domManagers/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateElementContent\": () => /* binding */ generateElementContent,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _table_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table/index */ \"./src/scripts/modules/domManagers/table/index.js\");\n/* harmony import */ var _button_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/index */ \"./src/scripts/modules/domManagers/button/index.js\");\n\n\n\nconst generateElementContent = (elementTag, elementContent) => {\n\tconst element = document.createElement(elementTag);\n\tif (elementContent) {\n\t\ttypeof elementContent === \"object\"\n\t\t\t? element.appendChild(elementContent)\n\t\t\t: element.innerHTML = elementContent;\n\t}\n\t\n\treturn element;\n};\n\nconst DOM = {\n\ttable: _table_index__WEBPACK_IMPORTED_MODULE_0__.default,\n\tbutton: {\n\t\ttoggleDisabled: _button_index__WEBPACK_IMPORTED_MODULE_1__.toggleButtonDisabled\n\t}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/domManagers/index.js?");

/***/ }),

/***/ "./src/scripts/modules/domManagers/table/index.js":
/*!********************************************************!*\
  !*** ./src/scripts/modules/domManagers/table/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/scripts/modules/domManagers/index.js\");\n/* harmony import */ var _textFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../textFormat */ \"./src/scripts/modules/textFormat.js\");\n/* harmony import */ var _tableRowGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableRowGenerator */ \"./src/scripts/modules/domManagers/table/tableRowGenerator.js\");\n/* harmony import */ var _tableRowAddons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tableRowAddons */ \"./src/scripts/modules/domManagers/table/tableRowAddons.js\");\n\n\n\n\n\n/* \n\tCases: \n\t\t- How do we remove an specific row?\n\t\t\t\"Add a `data` element to each row of the table\"\n\n\t\t- Pass required data once to the table and then to their respective functions?\n\t\t\t\"An OOP approach, define a `tableDom` class and then pass the required parameters\"\n*/\n\nconst tableDom = {\n\t_generateHeader: function (tableContainer, tableData) {\n\t\tconst tableHead = tableContainer.createTHead();\n\t\tconst tableHeadRow = tableHead.insertRow();\n\t\tconst tableHeadSelector = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"th\", (0,_tableRowAddons__WEBPACK_IMPORTED_MODULE_3__.generateRowSelector)());\n\n\t\tconst tableHeadCells = Object.keys(tableData.headers).map(header => {\n\t\t\t// Generate table's head content\n\t\t\tconst tableHeadCellContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"h3\", (0,_textFormat__WEBPACK_IMPORTED_MODULE_1__.capitalizeString)(header));\n\t\t\t// Add content to the table header cell\n\t\t\tconst tableHeadCell = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"th\", tableHeadCellContent);\n\t\t\treturn tableHeadCell\n\t\t});\n\n\t\tconst tableHeadRowContent = [tableHeadSelector, ...tableHeadCells, (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"th\", false)];\n\t\ttableHeadRowContent.forEach(tableHeadRowItem => tableHeadRow.appendChild(tableHeadRowItem));\n\n\t\t// Add a `header` id to the row for the selector event\n\t\ttableHeadRow.setAttribute(\"data-row-id\", \"header\");\n\t},\n\n\t_generateBody: function (tableContainer, tableData) {\n\t\tconst tableBody = tableContainer.createTBody();\n\t\ttableData.rows.forEach(row => {\n\t\t\tconst tableBodyRow = (0,_tableRowGenerator__WEBPACK_IMPORTED_MODULE_2__.generateRow)(row, tableData.headers);\n\t\t\ttableBody.appendChild(tableBodyRow);\n\t\t});\n\t},\n\n\tgenerate: function (tableContainer, tableData) {\n\t\t// Check if there's content inside `tableContainer`\n\t\tconst tableBody = tableContainer.getElementsByTagName(\"tbody\");\n\t\tif (tableBody.length) {\n\t\t\ttableContainer.deleteTHead();\n\t\t\ttableBody[0].remove();\n\t\t};\n\n\t\tthis._generateHeader(tableContainer, tableData);\n\t\tthis._generateBody(tableContainer, tableData);\n\t}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableDom);\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/domManagers/table/index.js?");

/***/ }),

/***/ "./src/scripts/modules/domManagers/table/tableCellGenerator.js":
/*!*********************************************************************!*\
  !*** ./src/scripts/modules/domManagers/table/tableCellGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateCell\": () => /* binding */ generateCell\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/scripts/modules/domManagers/index.js\");\n\n\nconst convertToAnchor = (type, value) => {\n\tconst anchor = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"a\", value);\n\tanchor.rel = \"noreferrer noopener\";\n\tanchor.target = \"_blank\";\n\ttype === \"url\"\n\t\t? anchor.href = value \n\t\t: anchor.href = `mailto:${ value }`;\n\t\n\treturn anchor;\n};\n\nconst generateCell = (cellType, cellValue) => {\n\tswitch (cellType) {\n\t\tcase \"email\":\n\t\t\treturn convertToAnchor(\"email\", cellValue);\n\t\tcase \"url\":\n\t\t\treturn convertToAnchor(\"url\", cellValue);\n\t\tcase \"number\":\n\t\t\treturn (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"span\", cellValue);\n\t\tdefault:\n\t\t\t// Generate a paragraph element\n\t\t\treturn (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"p\", cellValue);\n\t}\n};\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/domManagers/table/tableCellGenerator.js?");

/***/ }),

/***/ "./src/scripts/modules/domManagers/table/tableRowAddons.js":
/*!*****************************************************************!*\
  !*** ./src/scripts/modules/domManagers/table/tableRowAddons.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateRowSelector\": () => /* binding */ generateRowSelector,\n/* harmony export */   \"generateRowSettings\": () => /* binding */ generateRowSettings\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/scripts/modules/domManagers/index.js\");\n\n\nconst generateRowSelectorEvent = (rowSelector) => {\n\t// Assumes that the checkbox path will be `... tr > td > input`\n\t// This event tries to get the table row's id\n\trowSelector.addEventListener(\"click\", (event) => {\n\t\tconst rowParent = event.path[2];\n\t\tconst { rowId } = rowParent.dataset;\n\t\tconsole.log(rowId)\n\t});\n\n\treturn rowSelector;\n};\n\nconst generateRowSelector = (rowId) => {\n\tconst rowSelector = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"input\", false);\n\trowSelector.setAttribute(\"type\", \"checkbox\");\n\tif (rowId) { rowSelector.setAttribute(\"data-row-id\", rowId) };\n\n\treturn generateRowSelectorEvent(rowSelector);\n};\n\nconst generateRowSettings = () => {\n\tconst svgPath = \"./icons/settings.svg\";\n\tconst rowSettings = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"img\", false);\n\trowSettings.src = svgPath;\n\treturn rowSettings;\n};\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/domManagers/table/tableRowAddons.js?");

/***/ }),

/***/ "./src/scripts/modules/domManagers/table/tableRowGenerator.js":
/*!********************************************************************!*\
  !*** ./src/scripts/modules/domManagers/table/tableRowGenerator.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateRow\": () => /* binding */ generateRow\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/scripts/modules/domManagers/index.js\");\n/* harmony import */ var _tableRowAddons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableRowAddons */ \"./src/scripts/modules/domManagers/table/tableRowAddons.js\");\n/* harmony import */ var _tableCellGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableCellGenerator */ \"./src/scripts/modules/domManagers/table/tableCellGenerator.js\");\n\n\n\n\nconst generateRow = (row, headers) => {\n\tconst rowSelector = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"td\", (0,_tableRowAddons__WEBPACK_IMPORTED_MODULE_1__.generateRowSelector)(row.id));\n\tconst rowSettings = (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"td\", (0,_tableRowAddons__WEBPACK_IMPORTED_MODULE_1__.generateRowSettings)());\n\n\tconst cells = Object.keys(row.cells).map(cellHeader => {\n\t\t// Converting the cell content to it's HTML equivalent\n\t\tconst headerType = headers[cellHeader];\n\t\tconst cellValue = row.cells[cellHeader];\n\t\tconst cell = (0,_tableCellGenerator__WEBPACK_IMPORTED_MODULE_2__.generateCell)(headerType, cellValue);\n\n\t\treturn (0,_index__WEBPACK_IMPORTED_MODULE_0__.generateElementContent)(\"td\", cell);\n\t\t}\n\t);\n\n\t// Creating table row\n\tconst rowContainer = document.createElement(\"tr\");\n\t// Adding a the table id to the row itself as a data-* attribute\n\trowContainer.setAttribute(\"data-row-id\", row.id);\n\n\t// Setting the order of the row content\n\tconst rowContent = [rowSelector, ...cells, rowSettings];\n\n\t// Adding the content to the row\n\trowContent.forEach(rowItem => rowContainer.appendChild(rowItem));\n\n\treturn rowContainer;\n};\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/modules/domManagers/table/tableRowGenerator.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst setCellDataDefaultState = (cellType) => (cellType !== \"number\" ? \"\" : 0);\n\n/*\n\tHad to switch from arrow functions to regular functions because it seems\n\tthat I don't understand `this` that well. Added to future refactors.\n\t\n\thttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions\n*/\n\nconst table = new Object({\n\tdata: {\n\t\theaders: {\n\t\t\t// headerName: headerType\n\t\t},\n\t\trows: [\n\t\t\t/*\n\t\t\t\t{\n\t\t\t\t\tid: uuidv4(),\n\t\t\t\t\tcells: {\n\t\t\t\t\t\theaderName: cellValue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t*/\n\t\t]\n\t},\n\n\taddRow: function() {\n\t\tconst rowTemplate = {\n\t\t\tid: uuidv4(),\n\t\t\tcells: {}\n\t\t};\n\n\t\t// Check if there are headers in the table and adds the to the row\n\t\tif (this.data.headers) {\n\t\t\tObject.keys(this.data.headers).forEach(header => {\n\t\t\t\trowTemplate.cells[header] = setCellDataDefaultState(this.data.headers[header])\n\t\t\t})\n\t\t};\n\n\t\t// Registers the new row\n\t\tthis.data.rows.push(rowTemplate);\n\t},\n\n\taddColumn: function(columnName, columnType) {\n\t\t// Payload = { name: String, type: String }\n\t\t// Registers the new column to `data.headers`\n\t\tthis.data.headers[columnName] = columnType;\n\n\t\t// Iterates over all of the available rows and adds the new column\n\t\tthis.data.rows.forEach(row => row.cells[columnName] = setCellDataDefaultState(columnType));\n\t}\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (table);\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/scripts/tableData.js?");

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