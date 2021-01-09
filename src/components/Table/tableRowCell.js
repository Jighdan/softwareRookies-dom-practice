import ComponentBase from "../ComponentBase";
import store from "../../store/index";

export default class TableRowCell extends ComponentBase {
	constructor (rowId, cellType, cellValue) {
		super({ store, element: document.createElement("td") });
		this.elementContent = document.createElement("p");
		this.rowId = rowId;
		this.cellType = cellType;
		this.cellValue = cellValue;
		this.hasRenderedOnce = false;
	};

	promptNewCellValue() {
		// Using a default value in case there's no input
		let newCellValue = prompt("Input new cell value", this.cellValue) || this.cellValue;

		// No need to update the store if the value will be the same
		if (newCellValue !== this.cellValue) {
			const newCellState = { cellName: this.cellType, cellValue: newCellValue };
			store.commit("updateRowCell", { rowId: this.rowId, newCellState });
		};
	};

	addEvents() {
		this.element.addEventListener("dblclick", () => this.promptNewCellValue());
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
