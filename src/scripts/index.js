import table from "./tableData";
import element from "./domElements";
import DOM from "./modules/generators/index";
import { initializeEvents } from "./events";

const tableData = {
	headers: {
		// headerName: headerType
		name: "text",
		age: "number"
	},
	rows: [
		/*
		{
			id: uuidv4(),
			cells: {
				headerName: cellValue
			}
		}
		*/
		{
			id: 12512,
			cells: {
				name: "Jon",
				age: 51
			}
		},
		{
			id: 124,
			cells: {
				"name": "Erick",
				age: 21 
			}
		}
	]
};

DOM.table.initializeTable(element.tableContainer, table.data);
initializeEvents();
