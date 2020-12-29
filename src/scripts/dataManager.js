const setCellDataDefaultState = (cellType) => (cellType !== "number" ? "" : 0);

export const addRow = (tableData) => {
	const rowTemplate = {
		id: uuidv4(),
		cells: {}
	};

	Object.keys(tableData.headers).forEach(header => {
		rowTemplate.cells[header] = setCellDataDefaultState(tableData.headers[header]);
	});

	// Adds the new row to the tableData object
	tableData.rows.push(rowTemplate);
};

export const addColumn = (tableData, payload) => {
	// Payload = { name: String, type: String }
	// Registers the new column to tableData.headers
	tableData.headers[payload.name] = payload.type;

	// Iterates over all the rows and adds the new column
	tableData.rows.forEach(row => row.cells[payload.name] = setCellDataDefaultState(payload.type));
};