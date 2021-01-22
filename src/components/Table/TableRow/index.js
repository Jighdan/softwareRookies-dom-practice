import ComponentBase from "./../../ComponentBase";
import store from "./../../../store/index";
import TableRowCell from "./TableRowCell";
import TableRowSelector from "./TableRowSelector";

export default class TableRow extends ComponentBase {
	constructor(rowData) {
		super({ store, element: document.createElement("tr") });
		this.rowData = rowData;
		this.hasRenderedOnce = false;
	};

	generateCells() {
		const rowCells = Object.keys(this.rowData.cells).map(cellName => {
			const cellType = store.getter("tableData").columns[cellName];
			const cellValue = this.rowData.cells[cellName];
			const cellNode = new TableRowCell(this.rowData.id, cellName, cellType, cellValue);
			return cellNode.render();
		});

		return rowCells;
	};

	generateRow() {
		const rowDataCells = this.generateCells();

		// Generate row selector
		const rowSelector = document.createElement("td");
		rowSelector.appendChild(new TableRowSelector(this.rowData.id).render());

		// Every row needs an empty cell to compensate for the table header
		// options cell
		const rowEmptyCell = document.createElement("td");

		this.element.appendChild(rowSelector);
		rowDataCells.forEach(dataCell => this.element.appendChild(dataCell));
		this.element.appendChild(rowEmptyCell);
	};

	render() {
		if (!this.hasRenderedOnce) {
			this.generateRow();
		};

		this.hasRenderedOnce = true;
		return this.element;
	};
};