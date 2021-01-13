import ComponentBase from "../ComponentBase";
import store from "../../store/index";
import tableRow from "./tableRow";
import tableRowSelector from "./tableRowSelector";
import { capitalizeString } from "../../plugins/textFormat";

export default class Table extends ComponentBase {
	constructor () {
		super({ store, element: document.getElementById("table") })
		this.tableHeader = null;
		this.tableBody = null;
	};

	generateHeader() {
		const tableHeadSelector = document.createElement("th");
		tableHeadSelector.appendChild(tableRowSelector("main"));

		const tableHeadEmptyCell = document.createElement("th");
		
		const tableHeaderCells = Object.keys(store.state.table.columns).map(columnName => {
			const tableHeaderCellContent = document.createElement("h3");
			tableHeaderCellContent.innerText = capitalizeString(columnName);

			const tableHeaderCell = document.createElement("th");
			tableHeaderCell.appendChild(tableHeaderCellContent);
		
			return tableHeaderCell;
		});

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
		if (Object.keys(store.state.table.columns).length && store.state.table.rows.length) {
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
