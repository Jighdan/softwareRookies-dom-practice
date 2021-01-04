import DOM from "./DOM";

import table from "./tableData";

const tableAddRow = () => {
	table.addRow();
	DOM.generate.table.initialize(DOM.element.table.container, table.data);
};

const showModal = () => {
	// Fire up the modal when clicked
	DOM.element.modal.container.style.display = "block";
};

const modalClose = () => {
	DOM.element.modal.container.display = "none";
}

const newColumnForm = (event) => {
	event.preventDefault();
	const { headerName, headerType } = DOM.element.form.elements;
	table.addColumn(headerName.value, headerType.value);
	DOM.generate.table.initialize(DOM.element.table.container, table.data);
	modalClose();
};

export const initializeEvents = () => {
	// Buttons
	DOM.element.button.newRow.addEventListener("click", tableAddRow);
	DOM.element.button.newColumn.addEventListener("click", showModal);
	DOM.element.form.addEventListener("submit", newColumnForm);

	// Modal
	window.addEventListener("click", (event) => {
		if (event.target === DOM.element.modal.container) {
			DOM.element.modal.container.style.display = "none";
		}
	})

	DOM.element.modal.close.addEventListener("click", () => (
		DOM.element.modal.container.style.display = "none"
	));
};