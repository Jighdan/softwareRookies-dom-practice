import ComponentBase from "../ComponentBase";
import store from "../../store/index";
import TableHeaderOptions from "./TableHeader/TableHeaderOptions";
import TableHeaderCell from "./TableHeader/TableHeaderCell";
import TableRow from "./TableRow/index";
import TableRowSelector from "./TableRow/TableRowSelector";

export default class Table extends ComponentBase {
	constructor () {
		super({ store, element: document.createElement("table") })
		this.elementContainer = document.getElementById("tableContainer");
	};

	generateHeader() {
		const tableHeadSelector = document.createElement("th");
		tableHeadSelector.appendChild(new TableRowSelector("main").render());
		const tableHeaderOptions = document.createElement("th");
		tableHeaderOptions.appendChild(new TableHeaderOptions().render());

		const tableHeaderCells = Object.keys(store.getter("table").columns)
			.map(columnName => {
				const columnType = store.getter("table").columns[columnName];
				return new TableHeaderCell(columnName, columnType).render();
			}
		);

		const tableHeadRow = document.createElement("tr");
		tableHeadRow.appendChild(tableHeadSelector);
		tableHeaderCells.forEach(headerCell => tableHeadRow.appendChild(headerCell));
		tableHeadRow.appendChild(tableHeaderOptions);

		const tableHeader = document.createElement("thead");
		tableHeader.appendChild(tableHeadRow)

		this.element.appendChild(tableHeader);
	};

	generateBody() {
		const tableBodyRows = store.getter("table").rows.map(rowData => new TableRow(rowData).render());
		const tableBody = document.createElement("tbody");
		tableBodyRows.forEach(row => tableBody.appendChild(row));
		this.element.appendChild(tableBody);
	};

	render() {
		const storedTableHasContent = Object.keys(store.getter("table").columns).length || store.getter("tableData").rows.length;

		if (!storedTableHasContent) {
			this.element = document.createElement("h1");
			this.element.innerText = "Start by creating a New Row";
		};

		if (storedTableHasContent) {
			this.element = document.createElement("table");

			this.elementContainer.innerHTML = "";

			this.generateHeader();
			this.generateBody();
		};

		this.elementContainer.appendChild(this.element);
		return this.element;
	};
};
