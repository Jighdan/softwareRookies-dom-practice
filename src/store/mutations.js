export default {
	addRow (state) {
		const rowTemplate = {
			id: uuidv4(),
			cells: {}
		};

		// Check if there are headers in the table and adds the to the row
		if (state.table.columns) {
			Object.keys(state.table.columns).forEach(columnName => {
				rowTemplate.cells[columnName] = "";
			});
		};

		// Registers the new row
		state.table.rows.push(rowTemplate);
	},

	addColumn (state, { columnName, columnType }) {
		// Registers the new column to `data.headers`
		state.table.columns[columnName] = columnType;
		// Iterates over all of the available rows and adds the new column
		state.table.rows.forEach(row => row.cells[columnName] = "");
	},

	updateRowCell (state, { rowId, newCellState }) {
		const { cellName, cellValue } = newCellState;
		// Find a row with an id that matches the passed rowId parameter
		// And update the cell
		state.table.rows.find(row => row.id === rowId)
			.cells[cellName] = cellValue;
	}
};