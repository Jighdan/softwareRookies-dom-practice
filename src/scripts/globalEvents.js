import element from "./domElements";
import DOM from "./modules/domManagers/index";
import table from "./tableData";

const addRowEvent = () => {
	table.addRow();
	DOM.table.generate(element.table.container, table.data);
};

const addColumnEvent = (columnName, columnType) => {
	table.addColumn(columnName, columnType);
	console.log(table)
	DOM.table.generate(element.table.container, table.data);
};

export const initializeEvents = () => {
	// Buttons
	element.button.newRow.addEventListener("click", addRowEvent);
	element.button.newColumn.addEventListener("click", addColumnEvent);
};