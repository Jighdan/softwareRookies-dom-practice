import ComponentBase from "../ComponentBase";
import store from "../../store/index";
import TableHeaderCell from "./tableHeaderCell";
import tableRow from "./tableRow";
import TableRowSelector from "./tableRowSelector";

export default class Table extends ComponentBase {
	constructor () {
		super({ store, element: document.getElementById("table") })
		this.tableHeader = null;
		this.tableBody = null;
	};

	generateHeader() {
		const tableHeadSelector = document.createElement("th");
		tableHeadSelector.appendChild(new TableRowSelector("main").render());
		const tableHeadEmptyCell = document.createElement("th");

		const tableHeaderCells = Object.keys(store.state.table.columns)
			.map(columnName => {
				const columnType = store.state.table.columns[columnName];
				return new TableHeaderCell(columnName, columnType).render();
			}
		);

		const tableHeadRow = document.createElement("tr");
		tableHeadRow.appendChild(tableHeadSelector);
		tableHeaderCells.forEach(headerCell => tableHeadRow.appendChild(headerCell));
		tableHeadRow.appendChild(tableHeadEmptyCell);

		const tableHeader = document.createElement("thead");
		tableHeader.appendChild(tableHeadRow)

		this.element.appendChild(tableHeader);
		this.tableHeader = tableHeader;
	};

	generateBody() {
		const tableBodyRows = store.state.table.rows.map(row => tableRow(row, store.state.table.columns));
		const tableBody = document.createElement("tbody");
		tableBodyRows.forEach(row => tableBody.appendChild(row));
		this.element.appendChild(tableBody);
		this.tableBody = tableBody;
	};

	render() {
		if (Object.keys(store.state.table.columns).length || store.state.table.rows.length) {
			// Clear the table if it has a header or body
			if (this.tableHead || this.tableBody) {
				this.element.innerHTML = "";
			}

			this.generateHeader();
			this.generateBody();
			return this.element;
		};
	};
};
