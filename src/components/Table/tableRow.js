import TableRowCell from "./tableRowCell";
import tableRowSelector from "./tableRowSelector";
import tableRowOptions from "./tableRowOptions";

const tableRow = (row, tableColumns) => {
	const element = document.createElement("tr");

	const elementSelector = document.createElement("td");
	elementSelector.appendChild(tableRowSelector(row.id));

	const elementOptions = document.createElement("td");
	elementOptions.appendChild(tableRowOptions());
	
	const elementCells = Object.keys(row.cells).map(cellName => {
		const cellType = tableColumns[cellName];
		const cellValue = row.cells[cellName];
		const cellNode = new TableRowCell(row.id, cellType, cellValue).render();
		return cellNode;
	});

	// Adding cells to the row
	element.appendChild(elementSelector);
	elementCells.forEach(cell => element.appendChild(cell));
	element.appendChild(elementOptions);

	// Adding a the table id to the row itself as a data-* attribute
	element.setAttribute("data-row-id", row.id);

	return element;
};

export default tableRow;