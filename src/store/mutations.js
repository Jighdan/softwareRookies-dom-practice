export default {
	setTableRowsData (state, newRowsData) {
		state.table.rows = newRowsData;
	},

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
	},

	sortRows (state, { columnName, columnType }) {
		// NOTE -> Empty cells will always be < than any letter or number (except zero)
		if (columnType === "number") {
			state.table.rows.sort((a, b) => a.cells[columnName] - b.cells[columnName]);
		} else {
			state.table.rows.sort((a, b) => {
				let firstValue = a.cells[columnName].toUpperCase();
				let secondValue = b.cells[columnName].toUpperCase();
	
				if (firstValue < secondValue) { return -1 };
				if (firstValue > secondValue) { return 1 };
				// If they happen to be equal
				return 0;
			});
		};
	}
};