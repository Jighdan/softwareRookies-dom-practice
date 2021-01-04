import domGenerate from "./modules/domGenerators/index";

const DOM = {
	generate: domGenerate,
	element: {
		table: {
			container: document.getElementById("tableContainer")
		},
		button: {
			newRow: document.getElementById("buttonNewRow"),
			newColumn: document.getElementById("buttonNewColumn"),
		},
		modal: {
			container: document.getElementById("modal"),
			close: document.getElementById("modalClose")
		},
		form: document.getElementById("headerForm")
	}
};

export default DOM;