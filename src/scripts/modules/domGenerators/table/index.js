import { generateElement } from "../index";
import { capitalizeString } from "../../textFormat";
import { generateRow } from "./tableRowGenerator";
import { generateRowSelector } from "./tableRowAddons";

/* 
	Cases: 
		- How do we remove an specific row?
			"Add a `data` element to each row of the table"

		- Pass required data once to the table and then to their respective functions?
			"An OOP approach, define a `tableDom` class and then pass the required parameters"
*/

const tableDom = {
	_generateHeader: function (tableContainer, tableData) {
		const tableHeadSelector = generateElement("th", generateRowSelector());
		const tableHeadEmptyCell = generateElement("th");

		const tableHeadCells = Object.keys(tableData.columns).map(columnName => {
			// Generate table's head content
			const columnText = capitalizeString(columnName);
			const tableHeadCellContent = generateElement("h3", document.createTextNode(columnText));
			// Add content to the table header cell
			const tableHeadCell = generateElement("th", tableHeadCellContent);
			return tableHeadCell
		});

		const tableHeadRow = generateElement("tr", tableHeadSelector, ...tableHeadCells, tableHeadEmptyCell);
		// Add a `header` id to the row for the selector event
		tableHeadRow.setAttribute("data-row-id", "header");
		const tableHead = generateElement("thead", tableHeadRow);
		tableContainer.appendChild(tableHead);
	},

	_generateBody: function (tableContainer, tableData) {
		const tableBodyRows = tableData.rows.map(row => generateRow(row, tableData.columns));
		const tableBody = generateElement("tbody", ...tableBodyRows);
		tableContainer.appendChild(tableBody);
	},

	initialize: function (tableContainer, tableData) {
		// Check if there's content inside `tableContainer`
		const tableBody = tableContainer.getElementsByTagName("tbody");
		if (tableBody.length) {
			tableContainer.deleteTHead();
			tableBody[0].remove();
		};

		this._generateHeader(tableContainer, tableData);
		this._generateBody(tableContainer, tableData);
	}
};

export default tableDom;