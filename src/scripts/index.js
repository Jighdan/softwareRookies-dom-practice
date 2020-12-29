import { initializeTable } from "./modules/generators/table/index";
const tableContainer = document.getElementById("tableContainer");

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

initializeTable(tableContainer, tableData);
