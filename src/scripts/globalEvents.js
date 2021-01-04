import element from "./domElements";
import DOM from "./modules/domManagers/index";
import table from "./tableData";

const tableAddRow = () => {
	table.addRow();
	DOM.table.generate(element.table.container, table.data);
};

const showModal = () => {
	// Fire up the modal when clicked
	element.modal.container.style.display = "block";
};

const modalClose = () => {
	element.modal.container.display = "none";
}

const newColumnForm = (event) => {
	event.preventDefault();
	const { headerName, headerType } = element.form.elements;
	table.addColumn(headerName.value, headerType.value);
	DOM.table.generate(element.table.container, table.data);
};

export const initializeEvents = () => {
	// Buttons
	element.button.newRow.addEventListener("click", tableAddRow);
	element.button.newColumn.addEventListener("click", showModal);
	element.form.addEventListener("submit", newColumnForm);

	// Modal
	window.addEventListener("click", (event) => {
		if (event.target === element.modal.container) {
			element.modal.container.style.display = "none";
		}
	})

	element.modal.close.addEventListener("click", () => (
		element.modal.container.style.display = "none"
	));
};