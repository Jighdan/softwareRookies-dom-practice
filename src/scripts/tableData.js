const setCellDataDefaultState = (cellType) => (cellType !== "number" ? "" : 0);

/*
	Had to switch from arrow functions to regular functions because it seems
	that I don't understand `this` that well. Added to future refactors.
	
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

const table = new Object({
	data: {
		columns: {
			// headerName: headerType
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
		]
	},

	addRow: function() {
		const rowTemplate = {
			id: uuidv4(),
			cells: {}
		};

		// Check if there are headers in the table and adds the to the row
		if (this.data.columns) {
			Object.keys(this.data.columns).forEach(columnName => {
				rowTemplate.cells[columnName] = setCellDataDefaultState(this.data.columns[columnName])
			})
		};

		// Registers the new row
		this.data.rows.push(rowTemplate);
	},

	addColumn: function(columnName, columnType) {
		// Registers the new column to `data.headers`
		this.data.columns[columnName] = columnType;
		// Iterates over all of the available rows and adds the new column
		this.data.rows.forEach(row => row.cells[columnName] = setCellDataDefaultState(columnType));
	}
});

export default table;