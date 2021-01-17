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
		state.table.rows.find(row => row.id === rowId).cells[cellName] = cellValue;
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
	},

	addRowToSelectedRows (state, { rowId }) {
		state.selectedRows.push(rowId);
	},

	removeRowFromSelectedRows (state, { rowId }) {
		const rowIndex = state.selectedRows.indexOf(rowId);
		state.selectedRows.splice(rowIndex, 1);
	},

	deleteAllSelectedRows (state) {
		// Iterate over all the rowIds in state.selectedRows
		state.selectedRows.forEach(rowId => {
			// Find the row inside table.rows that matches the rowId
			let selectedRow = state.table.rows.find(row => row.id === rowId);
			// Removes the row from the selectedRows state
			state.selectedRows.shift();
			// Get the index of that row
			let index = state.table.rows.indexOf(selectedRow);
			state.table.rows.splice(index, 1);
		});
	}
};