import { generateElementContent } from "../index";
import { capitalizeString } from "../../formatters";
import { generateRow } from "./tableRowGenerator";
import { generateRowSelector } from "./tableRowAddons";

const generateTableHeader = (tableContainer, tableData) => {
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
};

const generateTableBody = (tableContainer, tableData) => {
	const tableBody = tableContainer.createTBody();
	tableData.rows.forEach(row => {
		const tableBodyRow = generateRow(row, tableData.headers);
		tableBody.appendChild(tableBodyRow);
	});
};

export const initializeTable = (tableContainer, tableData) => {
	generateTableHeader(tableContainer, tableData);
	generateTableBody(tableContainer, tableData);
};

export const refreshTable = (tableContainer, tableData) => {
	const tableBody = tableContainer.getElementByTagName("tbody")[0];
	tableContainer.deleteTHead();
	tableBody.remove();
	initializeTable(tableContainer, tableData);
};