import { generateElementContent } from "../index";
import { capitalizeString } from "../../textFormat";
import { generateRow } from "./tableRowGenerator";
import { generateRowSelector } from "./tableRowAddons";

const tableDom = {
	_generateHeader: function (tableContainer, tableData) {
		const tableHead = tableContainer.createTHead();
		const tableHeadRow = tableHead.insertRow();
		const tableHeadSelector = generateElementContent("th", generateRowSelector());

		const tableHeadCells = Object.keys(tableData.headers).map(header => {
			// Generate table's head content
			const tableHeadCellContent = generateElementContent("h3", capitalizeString(header));
			// Add content to the table header cell
			const tableHeadCell = generateElementContent("th", tableHeadCellContent);
			return tableHeadCell
		});

		const tableHeadRowContent = [tableHeadSelector, ...tableHeadCells, generateElementContent("th", false)];
		tableHeadRowContent.forEach(tableHeadRowItem => tableHeadRow.appendChild(tableHeadRowItem));
	},

	_generateBody: function (tableContainer, tableData) {
		const tableBody = tableContainer.createTBody();
		tableData.rows.forEach(row => {
			const tableBodyRow = generateRow(row, tableData.headers);
			tableBody.appendChild(tableBodyRow);
		});
	},

	generate: function (tableContainer, tableData) {
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