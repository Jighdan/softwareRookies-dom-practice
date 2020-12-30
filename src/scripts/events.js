import element from "./domElements";
import DOM from "./modules/generators/index";
import table from "./tableData";

const addRowEvent = () => {
	console.log(table)
	table.addRow();
	DOM.table.refreshTable(element.tableContainer, table.data);
	console.log(table)
};

const addColumnEvent = () =>{
	console.log("Column added");
};

export const initializeEvents = () => {
	element.button.newRow.addEventListener("click", addRowEvent);
	element.button.newColumn.addEventListener("click", addColumnEvent);
};