const tableRowSelector = (rowId) => {
	const element = document.createElement("input");
	element.setAttribute("type", "checkbox");
	element.setAttribute("data-row-id", rowId);

	// Listen for clicks
	element.addEventListener("click", (event) => {
		// Assumes that the element path will be -> ... tr > td > element
		const elementGrandparent = event.path[2];
		const { rowId } = elementGrandparent.dataset

		console.log(`This row id => ${rowId}`)
	});

	return element;
};

export default tableRowSelector;