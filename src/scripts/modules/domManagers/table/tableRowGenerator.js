import { generateElementContent } from "../index";
import { generateRowSelector, generateRowSettings } from "./tableRowAddons";
import { generateCell } from "./tableCellGenerator";

export const generateRow = (row, headers) => {
	const rowSelector = generateElementContent("td", generateRowSelector());
	const rowSettings = generateElementContent("td", generateRowSettings());

	const cells = Object.keys(row.cells).map(cellHeader => {
		// Converting the cell content to it's HTML equivalent
		const headerType = headers[cellHeader];
		const cellValue = row.cells[cellHeader];
		const cell = generateCell(headerType, cellValue);

		return generateElementContent("td", cell);
		}
	);

	// Creating table row
	const rowContainer = document.createElement("tr");
	// Adding a the table id to the row itself as a data-* attribute
	rowContainer["data-row-id"] = row.id;

	// Setting the order of the row content
	const rowContent = [rowSelector, ...cells, rowSettings];

	// Adding the content to the row
	rowContent.forEach(rowItem => rowContainer.appendChild(rowItem));

	return rowContainer;
};
