import ComponentBase from "./../../ComponentBase";
import store from "./../../../store/index";

export default class TableRowSelector extends ComponentBase {
	constructor(rowId) {
		super({ store, element: document.createElement("input") });
		this.rowId = rowId;
		this.hasRenderedOnce = false;

		this.element.setAttribute("type", "checkbox");

		rowId === "main"
			? this.element.setAttribute("data-row-main", rowId)
			: this.element.setAttribute("data-row-id", rowId);
	};

	addEvents() {	
		if (this.rowId === "main") {
			this.element.addEventListener("change", () => {
				const availableSelectors = document.querySelectorAll("input[type=checkbox][data-row-id]");

				if (this.element.checked) {
					// Toggle all the available row selectors an checked
					new Array(...availableSelectors).map(selector => selector.checked = true);

					// Adds all the available selected rows to the selected rows state
					store.getter("table").rows.forEach(row => store.commit("addRowToSelectedRows", { rowId: row.id }, false));
				} else {
					// Toggle all the available row selectors as unchecked
					new Array(...availableSelectors).map(selector => selector.checked = false);

					// Removes all the available selected rows from the selected rows state
					store.getter("table").rows.forEach(row => store.commit("removeRowFromSelectedRows", { rowId: row.id }, false));
				}
			});
		};

		if (this.rowId !== "main") {
			this.element.addEventListener("change", () => {
				if (this.element.checked) {
					store.commit("addRowToSelectedRows", { rowId: this.rowId }, false);
				} else {
					store.commit("removeRowFromSelectedRows", { rowId: this.rowId }, false);
				};

				// When a change happens on a selector, update the indeterminate state
				// for the main selector
				const mainSelector = document.querySelector("input[type=checkbox][data-row-main]");
				const availableSelectors = document.querySelectorAll("input[type=checkbox][data-row-id]");

				const thereAreSomeSelectorsChecked = new Array(...availableSelectors).some(selector => selector.checked);
				const allTheSelectorsAreChecked = new Array(...availableSelectors).every(selector => selector.checked);
			
				if (thereAreSomeSelectorsChecked) {
					mainSelector.indeterminate = true;
				};

				if (allTheSelectorsAreChecked) {
					mainSelector.indeterminate = false;
					mainSelector.checked = true;
				}

				if (!thereAreSomeSelectorsChecked && !allTheSelectorsAreChecked) {
					mainSelector.indeterminate = false;
					mainSelector.checked = false;
				}
			});	
		};
	};

	render() {
		if (!this.hasRenderedOnce) {
			this.addEvents();
		};

		this.hasRenderedOnce = true;
		return this.element;
	};
};
