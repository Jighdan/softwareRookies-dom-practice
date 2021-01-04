import { generateElementContent } from "../index";

const generateRowSelectorEvent = (rowSelector) => {
	// Assumes that the checkbox path will be `... tr > td > input`
	// This event tries to get the table row's id
	rowSelector.addEventListener("click", (event) => {
		const rowParent = event.path[2];
		const { rowId } = rowParent.dataset;
		console.log(rowId)
	});

	return rowSelector;
};

export const generateRowSelector = (rowId) => {
	const rowSelector = generateElementContent("input", false);
	rowSelector.setAttribute("type", "checkbox");
	if (rowId) { rowSelector.setAttribute("data-row-id", rowId) };

	return generateRowSelectorEvent(rowSelector);
};

export const generateRowSettings = () => {
	const svgPath = "./icons/settings.svg";
	const rowSettings = generateElementContent("img", false);
	rowSettings.src = svgPath;
	return rowSettings;
};
