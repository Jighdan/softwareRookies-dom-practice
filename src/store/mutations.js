import generateId from "../plugins/idGenerator";

export default {
	setTableRowsData (state, newRowsData) {
		state.table.rows = newRowsData;
	},

	addRow (state) {
		const rowTemplate = {
			id: generateId(),
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
			const highestNumber = Number.MAX_SAFE_INTEGER;

			const sortedTableData = state.table.rows.sort((a, b) => {
				let firstValue = a.cells[columnName] === "" ? highestNumber : a.cells[columnName];
				let secondValue = b.cells[columnName] === "" ? highestNumber : b.cells[columnName];

				return firstValue - secondValue;
			});
			return sortedTableData;

		} else {
			const highestString = "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ";

			const sortedTableData = state.table.rows.sort((a, b) => {
				let firstValueUpper = a.cells[columnName].toUpperCase();
				let secondValueUpper = b.cells[columnName].toUpperCase();

				let firstValue = firstValueUpper === "" ? highestString : firstValueUpper;
				let secondValue = secondValueUpper === "" ? highestString : secondValueUpper;

				if (firstValue < secondValue) { return -1 };
				if (firstValue > secondValue ) { return 1 };
				// If firstValue and secondValue are equal
				return 0;
			});

			return sortedTableData;
		};
	},

	addRowToSelectedRows (state, { rowId }) {
		if (!state.selectedRows.includes(rowId)) {
			state.selectedRows.push(rowId);
		}
	},

	removeRowFromSelectedRows (state, { rowId }) {
		if (state.selectedRows.includes(rowId)) {
			const rowIndex = state.selectedRows.indexOf(rowId);
			state.selectedRows.splice(rowIndex, 1);
		}
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