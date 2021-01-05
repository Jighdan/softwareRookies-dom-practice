import { generateElement } from "../index";
import { generateRowSelector, generateRowSettings } from "./tableRowAddons";
import { generateCell } from "./tableCellGenerator";

export const generateRow = (row, columns) => {
	const rowSelector = generateElement("td", generateRowSelector(row.id));
	const rowSettings = generateElement("td", generateRowSettings());

	const cells = Object.keys(row.cells).map(cellHeader => {
		// Converting the cell content to it's HTML equivalent
		const headerType = columns[cellHeader];
		const cellValue = row.cells[cellHeader];
		const cell = generateCell(headerType, cellValue);

		return generateElement("td", cell);
		}
	);

	// Creating table row
	const rowContainer = generateElement("tr", rowSelector, ...cells, rowSettings)
	// Adding a the table id to the row itself as a data-* attribute
	rowContainer.setAttribute("data-row-id", row.id);
	return rowContainer;
};
