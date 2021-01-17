import TableRowCell from "./tableRowCell";
import TableRowSelector from "./tableRowSelector";

const tableRow = (row, tableColumns) => {
	const element = document.createElement("tr");

	const elementSelector = document.createElement("td");
	elementSelector.appendChild(new TableRowSelector(row.id).render());

	const elementEmptyCell = document.createElement("td");
	
	const elementCells = Object.keys(row.cells).map(cellName => {
		const cellType = tableColumns[cellName];
		const cellValue = row.cells[cellName];
		const cellNode = new TableRowCell(row.id, cellName, cellType, cellValue).render();
		return cellNode;
	});

	// Adding cells to the row
	element.appendChild(elementSelector);
	elementCells.forEach(cell => element.appendChild(cell));
	element.appendChild(elementEmptyCell);

	// Adding a the table id to the row itself as a data-* attribute
	element.setAttribute("data-row-id", row.id);

	return element;
};

export default tableRow;