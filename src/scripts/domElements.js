const element = {
	table: {
		container: document.getElementById("tableContainer"),
		selectors: function () {
			return this.container
				.querySelectorAll("input[type='checkbox'")
		}
	},
	button: {
		newRow: document.getElementById("buttonNewRow"),
		newColumn: document.getElementById("buttonNewColumn"),
	}
};

export default element;