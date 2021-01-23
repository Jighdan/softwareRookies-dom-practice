export default {
	table(state) {
		return state.table;
	},

	selectedRows(state) {
		return state.selectedRows;
	},

	selectedRowsData(state) {
		return state.selectedRows.map(rowId => (
			state.table.rows.find(row => row.id === rowId)
		));
	}
};