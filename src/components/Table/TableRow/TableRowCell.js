import ComponentBase from "./../../ComponentBase";
import store from "./../../../store/index";

export default class TableRowCell extends ComponentBase {
	constructor (rowId, cellName, cellType, cellValue) {
		super({ store, element: document.createElement("td") });
		this.elementContent = document.createElement("p");
		this.rowId = rowId;
		this.cellName = cellName;
		this.cellType = cellType;
		this.cellValue = cellValue;
		this.hasRenderedOnce = false;
	};

	promptNewCellValue() {
		// Using a default value in case there's no input
		let newCellValue = prompt("Input new cell value", this.cellValue) || this.cellValue;

		// No need to update the store state if the value will be the same
		if (newCellValue !== this.cellValue) {
			const newCellState = { cellName: this.cellName, cellValue: newCellValue };
			store.commit("updateRowCell", { rowId: this.rowId, newCellState });
		};
	};

	addEvents() {
		this.element.addEventListener("dblclick", () => this.promptNewCellValue());

		// Clicking on a cell that's a URL or email should direct to that
		// property on Control + Click
		if (["email", "url"].includes(this.cellType)) {
			// We need to convert email to `mailto:email` in order
			// for it to work
			const cellValue = this.cellType === "email" ? `mailto:${this.cellValue}` : this.cellValue;

			this.element.addEventListener("click", event => {
				if (event.ctrlKey) {
					window.open(cellValue, "_blank");
				};
			});
		};
	};

	render() {
		if (!this.hasRenderedOnce) {
			this.addEvents();
		};
		
		// Adds the content to the element
		this.elementContent.innerText = this.cellValue;
		this.element.appendChild(this.elementContent);

		this.hasRenderedOnce = true;
		return this.element;
	}
};
