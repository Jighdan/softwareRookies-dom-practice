import element from "./domElements";
import DOM from "./modules/domManagers/index";
import table from "./tableData";

const buttonAddRow = () => {
	table.addRow();
	DOM.table.generate(element.table.container, table.data);
};

const buttonAddColumn = (columnName, columnType) => {
	table.addColumn(columnName, columnType);
	DOM.table.generate(element.table.container, table.data);
};

const newColumnForm = (event) => {
	event.preventDefault();
	const { headerName, headerType } = element.form.elements;
	table.addColumn(headerName.value, headerType.value);
	DOM.table.generate(element.table.container, table.data);
};

export const initializeEvents = () => {
	// Buttons
	element.button.newRow.addEventListener("click", buttonAddRow);
	element.button.newColumn.addEventListener("click", buttonAddColumn);
	element.form.addEventListener("submit", newColumnForm);
};