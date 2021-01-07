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

/***/ "./src/components/Button/ButtonNewColumn.js":
/*!**************************************************!*\
  !*** ./src/components/Button/ButtonNewColumn.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ButtonNewColumn\n/* harmony export */ });\n/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentBase */ \"./src/components/ComponentBase.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ \"./src/store/index.js\");\n\n\n\nclass ButtonNewColumn extends _ComponentBase__WEBPACK_IMPORTED_MODULE_0__.default {\n\tconstructor() {\n\t\tsuper({ store: _store_index__WEBPACK_IMPORTED_MODULE_1__.default, element: document.getElementById(\"buttonNewColumn\") });\n\t\tthis.elementModal = document.getElementById(\"modal\");\n\t\tthis.hasRenderedOnce = false;\n\t};\n\n\taddEvents() {\n\t\tthis.element.addEventListener(\"click\", () => (\n\t\t\t// Fire up the modal box\n\t\t\tthis.elementModal.style.display = \"block\"\n\t\t));\n\t};\n\n\trender() {\n\t\tif (!this.hasRenderedOnce) {\n\t\t\tthis.addEvents();\n\t\t};\n\t\t\n\t\tthis.hasRenderedOnce = true;\n\t\treturn this.element;\n\t};\n};\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/components/Button/ButtonNewColumn.js?");

/***/ }),

/***/ "./src/components/Button/ButtonNewRow.js":
/*!***********************************************!*\
  !*** ./src/components/Button/ButtonNewRow.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ButtonNewRow\n/* harmony export */ });\n/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentBase */ \"./src/components/ComponentBase.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ \"./src/store/index.js\");\n\n\n\nclass ButtonNewRow extends _ComponentBase__WEBPACK_IMPORTED_MODULE_0__.default {\n\tconstructor() {\n\t\tsuper({ store: _store_index__WEBPACK_IMPORTED_MODULE_1__.default, element: document.getElementById(\"buttonNewRow\") });\n\t\tthis.hasRenderedOnce = false;\n\t};\n\n\taddEvents() {\n\t\tthis.element.addEventListener(\"click\", () => (\n\t\t\t_store_index__WEBPACK_IMPORTED_MODULE_1__.default.commit(\"addRow\")\n\t\t));\n\t};\n\n\trender() {\n\t\tif (!this.hasRenderedOnce) {\n\t\t\tthis.addEvents();\n\t\t};\n\t\tthis.hasRenderedOnce = true;\n\t\treturn this.element;\n\t};\n};\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/components/Button/ButtonNewRow.js?");

/***/ }),

/***/ "./src/components/ComponentBase.js":
/*!*****************************************!*\
  !*** ./src/components/ComponentBase.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ComponentBase\n/* harmony export */ });\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.js\");\n\n\nclass ComponentBase {\n\tconstructor(props={}) {\n\t\tthis.render = this.render || function(){};\n\n\t\t// If there's an store passed in, subscribe the component\n\t\t// to the Events Manager\n\t\tif (props.store instanceof _store_store__WEBPACK_IMPORTED_MODULE_0__.default) {\n\t\t\tprops.store.events.subscribe(\"stateChange\", () => this.render());\n\t\t};\n\n\t\tif (props.hasOwnProperty(\"element\")) {\n\t\t\tthis.element = props.element;\n\t\t};\n\t};\n};\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/components/ComponentBase.js?");

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Form\n/* harmony export */ });\n/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentBase */ \"./src/components/ComponentBase.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.js\");\n\n\n\nclass Form extends _ComponentBase__WEBPACK_IMPORTED_MODULE_0__.default {\n\tconstructor () {\n\t\tsuper({ store: _store_index__WEBPACK_IMPORTED_MODULE_1__.default, element: document.getElementById(\"newColumnForm\") });\n\t\tthis.elementModal = document.getElementById(\"modal\");\n\t\tthis.formSubmitted = false;\n\t\tthis.hasRenderedOnce = false;\n\t};\n\n\thideModal() {\n\t\tthis.elementModal.style.display = \"none\";\n\t};\n\n\thandleSubmit(event) {\n\t\tevent.preventDefault();\n\n\t\t// Scoping messed me up badly for straight 30 minutes\n\t\tconst formElements = this.elements;\n\t\tconst { columnName, columnType } = formElements;\n\n\t\t// Adds the new column to the table\n\t\t_store_index__WEBPACK_IMPORTED_MODULE_1__.default.commit(\"addColumn\", {\n\t\t\tcolumnName: columnName.value,\n\t\t\tcolumnType: columnType.value\n\t\t});\n\n\t\t// Resets the form input values\n\t\tthis.elements.columnName.value = \"\";\n\t};\n\n\taddEvents() {\n\t\tthis.element.addEventListener(\"submit\", this.handleSubmit);\n\t};\n\n\trender() {\n\t\tif (!this.hasRenderedOnce) {\n\t\t\tthis.addEvents();\n\t\t};\n\n\t\tthis.hasRenderedOnce = true;\n\t\treturn this.element;\n\t}\n};\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/components/Form.js?");

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Modal\n/* harmony export */ });\n/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentBase */ \"./src/components/ComponentBase.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.js\");\n\n\n\nclass Modal extends _ComponentBase__WEBPACK_IMPORTED_MODULE_0__.default {\n\tconstructor () {\n\t\tsuper({ store: _store_index__WEBPACK_IMPORTED_MODULE_1__.default, element: document.getElementById(\"modal\") });\n\t\tthis.elementClose = document.getElementById(\"modalClose\");\n\t\tthis.hasRenderedOnce = false;\n\t};\n\n\thideModal() {\n\t\tthis.element.style.display = \"none\";\n\t};\n\n\taddEvents() {\n\t\t// Close modal on click away\n\t\twindow.addEventListener(\"click\", (event) => {\n\t\t\tif (event.target === this.element) {\n\t\t\t\tthis.hideModal();\n\t\t\t};\n\t\t});\n\n\t\t// Close modal on when clicked the close element\n\t\tthis.elementClose.addEventListener(\"click\", () => (\n\t\t\tthis.hideModal()\n\t\t));\n\t};\n\n\trender() {\n\t\tif (!this.hasRenderedOnce) {\n\t\t\tthis.addEvents();\n\t\t};\n\n\t\tthis.hasRenderedOnce = true;\n\t\treturn this.element;\n\t};\n};\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/components/Modal.js?");

/***/ }),

/***/ "./src/components/Table/index.js":
/*!***************************************!*\
  !*** ./src/components/Table/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ComponentBase */ \"./src/components/ComponentBase.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ \"./src/store/index.js\");\n/* harmony import */ var _tableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableRow */ \"./src/components/Table/tableRow.js\");\n/* harmony import */ var _tableRowSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tableRowSelector */ \"./src/components/Table/tableRowSelector.js\");\n/* harmony import */ var _plugins_textFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../plugins/textFormat */ \"./src/plugins/textFormat.js\");\n\n\n\n\n\n\nclass Table extends _ComponentBase__WEBPACK_IMPORTED_MODULE_0__.default {\n\tconstructor () {\n\t\tsuper({ store: _store_index__WEBPACK_IMPORTED_MODULE_1__.default, element: document.getElementById(\"tableContainer\") })\n\t\tthis.tableData = _store_index__WEBPACK_IMPORTED_MODULE_1__.default.state.table;\n\t\tthis.tableHeader = null;\n\t\tthis.tableBody = null;\n\n\t\tthis.element.setAttribute(\"id\", \"tableContainer\")\n\t};\n\n\tgenerateHeader() {\n\t\tconst tableHeadSelector = document.createElement(\"th\");\n\t\ttableHeadSelector.appendChild((0,_tableRowSelector__WEBPACK_IMPORTED_MODULE_3__.default)(\"main\"));\n\n\t\tconst tableHeadEmptyCell = document.createElement(\"th\");\n\t\t\n\t\tconst tableHeaderCells = Object.keys(this.tableData.columns).map(columnName => {\n\t\t\tconst tableHeaderCellContent = document.createElement(\"h3\");\n\t\t\ttableHeaderCellContent.innerText = (0,_plugins_textFormat__WEBPACK_IMPORTED_MODULE_4__.capitalizeString)(columnName);\n\n\t\t\tconst tableHeaderCell = document.createElement(\"th\");\n\t\t\ttableHeaderCell.appendChild(tableHeaderCellContent);\n\t\t\n\t\t\treturn tableHeaderCell;\n\t\t});\n\n\t\tconst tableHeadRow = document.createElement(\"tr\");\n\t\ttableHeadRow.appendChild(tableHeadSelector);\n\t\ttableHeaderCells.forEach(headerCell => tableHeadRow.appendChild(headerCell));\n\t\ttableHeadRow.appendChild(tableHeadEmptyCell);\n\n\t\tconst tableHeader = document.createElement(\"thead\");\n\t\ttableHeader.appendChild(tableHeadRow)\n\n\t\tthis.element.appendChild(tableHeader);\n\t\tthis.tableHeader = tableHeader;\n\t};\n\n\tgenerateBody() {\n\t\tconst tableBodyRows = this.tableData.rows.map(row => (0,_tableRow__WEBPACK_IMPORTED_MODULE_2__.default)(row, this.tableData.columns));\n\t\tconst tableBody = document.createElement(\"tbody\");\n\t\ttableBodyRows.forEach(row => tableBody.appendChild(row));\n\t\tthis.element.appendChild(tableBody);\n\t\tthis.tableBody = tableBody;\n\t};\n\n\trender() {\n\t\t// Clear the table if it has a header or body\n\t\tif (this.tableHead || this.tableBody) {\n\t\t\tthis.element.innerHTML = \"\";\n\t\t}\n\n\t\tthis.generateHeader();\n\t\tthis.generateBody();\n\t\treturn this.element;\n\t}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/components/Table/index.js?");

/***/ }),

/***/ "./src/components/Table/tableRow.js":
/*!******************************************!*\
  !*** ./src/components/Table/tableRow.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _tableRowCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableRowCell */ \"./src/components/Table/tableRowCell.js\");\n/* harmony import */ var _tableRowSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableRowSelector */ \"./src/components/Table/tableRowSelector.js\");\n/* harmony import */ var _tableRowOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableRowOptions */ \"./src/components/Table/tableRowOptions.js\");\n\n\n\n\nconst tableRow = (row, tableColumns) => {\n\tconst element = document.createElement(\"tr\");\n\n\tconst elementSelector = document.createElement(\"td\");\n\telementSelector.appendChild((0,_tableRowSelector__WEBPACK_IMPORTED_MODULE_1__.default)(row.id));\n\n\tconst elementOptions = document.createElement(\"td\");\n\telementOptions.appendChild((0,_tableRowOptions__WEBPACK_IMPORTED_MODULE_2__.default)());\n\t\n\tconst elementCells = Object.keys(row.cells).map(cellName => {\n\t\tconst cellType = tableColumns[cellName];\n\t\tconst cellValue = row.cells[cellName];\n\t\tconst cellNode = (0,_tableRowCell__WEBPACK_IMPORTED_MODULE_0__.default)(cellType, cellValue);\n\t\treturn cellNode;\n\t});\n\n\t// Adding cells to the row\n\telement.appendChild(elementSelector);\n\telementCells.forEach(cell => element.appendChild(cell));\n\telement.appendChild(elementOptions);\n\n\t// Adding a the table id to the row itself as a data-* attribute\n\telement.setAttribute(\"data-row-id\", row.id);\n\n\treturn element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableRow);\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/components/Table/tableRow.js?");

/***/ }),

/***/ "./src/components/Table/tableRowCell.js":
/*!**********************************************!*\
  !*** ./src/components/Table/tableRowCell.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst generateAnchorElement = (anchorType, anchorValue) => {\n\tconst element = document.createElement(\"a\").appendChild(document.createTextNode(anchorValue));\n\telement.setAttribute(\"rel\", \"noreferrer noopener\");\n\telement.setAttribute(\"target\", \"_blank\");\n\tanchorType === \"url\"\n\t\t? element.setAttribute(\"href\", anchorValue)\n\t\t: element.setAttribute(\"href\", `mailto:${anchorValue}`);\n\n\treturn element;\n};\n\nconst tableRowCell = (cellType, cellValue) => {\n\tconst element = document.createElement(\"td\");\n\tlet elementContent;\n\n\tswitch (cellType) {\n\t\tcase [\"email\", \"url\"].includes(cellType):\n\t\t\telementContent = generateAnchorElement(cellType, cellValue);\n\t\tdefault:\n\t\t\telementContent = document.createElement(\"p\");\n\t\t\telementContent.innerText = cellValue;\n\t};\n\n\telement.appendChild(elementContent);\n\treturn element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableRowCell);\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/components/Table/tableRowCell.js?");

/***/ }),

/***/ "./src/components/Table/tableRowOptions.js":
/*!*************************************************!*\
  !*** ./src/components/Table/tableRowOptions.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst tableRowOptions = () => {\n\tconst element = document.createElement(\"img\");\n\n\treturn element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableRowOptions);\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/components/Table/tableRowOptions.js?");

/***/ }),

/***/ "./src/components/Table/tableRowSelector.js":
/*!**************************************************!*\
  !*** ./src/components/Table/tableRowSelector.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst tableRowSelector = (rowId) => {\n\tconst element = document.createElement(\"input\");\n\telement.setAttribute(\"type\", \"checkbox\");\n\telement.setAttribute(\"data-row-id\", rowId);\n\n\t// Listen for clicks\n\telement.addEventListener(\"click\", (event) => {\n\t\t// Assumes that the element path will be -> ... tr > td > element\n\t\tconst elementGrandparent = event.path[2];\n\t\tconst { rowId } = elementGrandparent.dataset\n\n\t\tconsole.log(`This row id => ${rowId}`)\n\t});\n\n\treturn element;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tableRowSelector);\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/components/Table/tableRowSelector.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Table_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Table/index */ \"./src/components/Table/index.js\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Modal */ \"./src/components/Modal.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Form */ \"./src/components/Form.js\");\n/* harmony import */ var _components_Button_ButtonNewColumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Button/ButtonNewColumn */ \"./src/components/Button/ButtonNewColumn.js\");\n/* harmony import */ var _components_Button_ButtonNewRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Button/ButtonNewRow */ \"./src/components/Button/ButtonNewRow.js\");\n\n\n\n\n\n\nconst instanceOfTable = new _components_Table_index__WEBPACK_IMPORTED_MODULE_0__.default();\nconst instanceOfModal = new _components_Modal__WEBPACK_IMPORTED_MODULE_1__.default();\nconst instanceOfForm = new _components_Form__WEBPACK_IMPORTED_MODULE_2__.default();\nconst instanceOfButtonNewColumn = new _components_Button_ButtonNewColumn__WEBPACK_IMPORTED_MODULE_3__.default();\nconst instanceOfButtonNewRow = new _components_Button_ButtonNewRow__WEBPACK_IMPORTED_MODULE_4__.default();\n\ninstanceOfTable.render();\ninstanceOfModal.render();\ninstanceOfForm.render();\ninstanceOfButtonNewColumn.render();\ninstanceOfButtonNewRow.render();\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/main.js?");

/***/ }),

/***/ "./src/plugins/eventManager.js":
/*!*************************************!*\
  !*** ./src/plugins/eventManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ EventManager\n/* harmony export */ });\n/*\n\t- WTF! I don't get this.\n\t- Read this my child -> https://refactoring.guru/design-patterns/observer\n*/\n\nclass EventManager {\n\tconstructor () {\n\t\tthis.events = {};\n\t};\n\n\tsubscribe (event, callback) {\n\t\tif (!this.events.hasOwnProperty(event)) {\n\t\t\tthis.events[event] = [];\n\t\t};\n\n\t\treturn this.events[event].push(callback);\n\t};\n\n\tnotify (event, data) {\n\t\tif (!this.events.hasOwnProperty(event)) {\n\t\t\treturn [];\n\t\t};\n\n\t\t// Go through each subscription an call it's callback\n\t\t// with the new data\n\t\treturn this.events[event].map(callback => callback(data));\n\t};\n};\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/plugins/eventManager.js?");

/***/ }),

/***/ "./src/plugins/textFormat.js":
/*!***********************************!*\
  !*** ./src/plugins/textFormat.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalizeString\": () => /* binding */ capitalizeString\n/* harmony export */ });\nconst capitalizeString = (string) => {\n\treturn string.replace(/\\w\\S*/g, (word) => {\n\t\treturn word.replace(/^\\w/, (character) => character.toUpperCase());\n\t});\n};\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/plugins/textFormat.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/store/store.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _store__WEBPACK_IMPORTED_MODULE_0__.default());\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/store/index.js?");

/***/ }),

/***/ "./src/store/mutations.js":
/*!********************************!*\
  !*** ./src/store/mutations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\taddRow (state) {\n\t\tconst rowTemplate = {\n\t\t\tid: uuidv4(),\n\t\t\tcells: {}\n\t\t};\n\n\t\t// Check if there are headers in the table and adds the to the row\n\t\tif (state.table.columns) {\n\t\t\tObject.keys(state.table.columns).forEach(columnName => {\n\t\t\t\trowTemplate.cells[columnName] = state.table.columns[columnName]\n\t\t\t});\n\t\t};\n\n\t\t// Registers the new row\n\t\tstate.table.rows.push(rowTemplate);\n\t},\n\n\taddColumn (state, { columnName, columnType }) {\n\t\t// Registers the new column to `data.headers`\n\t\tstate.table.columns[columnName] = columnType;\n\t\t// Iterates over all of the available rows and adds the new column\n\t\tstate.table.rows.forEach(row => row.cells[columnName] = columnType);\n\t}\n});\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/store/mutations.js?");

/***/ }),

/***/ "./src/store/state.js":
/*!****************************!*\
  !*** ./src/store/state.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst state = {\n\ttable: {\n\t\tcolumns: {\n\t\t\t// headerName: headerType\n\t\t},\n\t\trows: [\n\t\t\t/*\n\t\t\t\t{\n\t\t\t\t\tid: uuidv4(),\n\t\t\t\t\tcells: {\n\t\t\t\t\t\theaderName: cellValue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t*/\n\t\t]\n\t}\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/store/state.js?");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Store\n/* harmony export */ });\n/* harmony import */ var _plugins_eventManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/eventManager */ \"./src/plugins/eventManager.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/store/state.js\");\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutations */ \"./src/store/mutations.js\");\n\n\n\n\nclass Store {\n\tconstructor () {\n\t\tthis.state = _state__WEBPACK_IMPORTED_MODULE_1__.default;\n\t\tthis.mutations = _mutations__WEBPACK_IMPORTED_MODULE_2__.default;\n\t\tthis.events = new _plugins_eventManager__WEBPACK_IMPORTED_MODULE_0__.default();\n\t};\n\n\tcommit (mutationName, payload) {\n\t\tif (typeof this.mutations[mutationName] !== \"function\") {\n\t\t\tconsole.error(\"Mutations not found\");\n\t\t\treturn false;\n\t\t};\n\n\t\t// Commit the mutation\n\t\tthis.mutations[mutationName](this.state, payload);\n\t\t// Notify the stateChange for the observers\n\t\tthis.events.notify(\"stateChange\", this.state);\n\t};\n};\n\n\n//# sourceURL=webpack://softwarerookies-dom-test/./src/store/store.js?");

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
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;