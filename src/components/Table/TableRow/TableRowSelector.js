import ComponentBase from "./../../ComponentBase";
import store from "./../../../store/index";

export default class TableRowSelector extends ComponentBase {
	constructor(rowId) {
		super({ store, element: document.createElement("input") });
		this.rowId = rowId;
		this.hasRenderedOnce = false;

		this.element.setAttribute("type", "checkbox");
		this.element.setAttribute("data-row-id", rowId);
	};

	addEvents() {
		if (this.rowId === "main") {
			this.element.addEventListener("change", () => {
				// Get all the available selectors
				const availableSelectors = document.querySelectorAll("input[type=checkbox][data-row-id]");

				if (this.element.checked) {
					// Toggle all the available row selectors an checked
					new Array(...availableSelectors).map(selector => selector.checked = true);

					// Adds all the available selected rows to the selected rows state
					store.state.table.rows.forEach(row => store.commit("addRowToSelectedRows", { rowId: row.id }, false));
				} else {
					// Toggle all the available row selectors as unchecked
					new Array(...availableSelectors).map(selector => selector.checked = false);

					// Removes all the available selected rows from the selected rows state
					store.state.table.rows.forEach(row => store.commit("removeRowFromSelectedRows", { rowId: row.id }, false));
				}
			});
		};

		if (this.rowId !== "main") {
			this.element.addEventListener("change", () => {
				if (this.element.checked) {
					store.commit("addRowToSelectedRows", { rowId: this.rowId }, false);
				} else {
					store.commit("removeRowFromSelectedRows", { rowId: this.rowId }, false);
				}
			});
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
