import ComponentBase from "../ComponentBase";
import store from "../../store/index";

export default class TableRowSelector extends ComponentBase {
	constructor(rowId) {
		super({ store, element: document.createElement("input") });
		this.rowId = rowId;
		this.hasRenderedOnce = false;

		this.element.setAttribute("type", "checkbox");
		this.element.setAttribute("data-row-id", rowId);
	};

	addEvents() {
		switch (this.rowId) {
			case "main":
				this.element.addEventListener("change", () => {
					// TO-DO
				});
			default:
				this.element.addEventListener("change", () => {
					if (this.element.checked) {
						store.commit("addRowToSelectedRows", { rowId: this.rowId }, false);
					} else {
						store.commit("removeRowFromSelectedRows", { rowId: this.rowId }, false);
					}
				}
			);
		}
	};

	render() {
		if (!this.hasRenderedOnce) {
			this.addEvents();
		};

		this.hasRenderedOnce = true;
		return this.element;
	};
};
