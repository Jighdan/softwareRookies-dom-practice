import { generateElement } from "../index";

const generateRowSelectorEvent = (rowSelector) => {
	rowSelector.addEventListener("click", (event) => {
		// Assumes that the checkbox path will be `... tr > td > input`
		const rowParent = event.path[2];
		const { rowId } = rowParent.dataset;
		console.info(`This row id => ${rowId}`);
	});

	return rowSelector;
};

export const generateRowSelector = (rowId) => {
	const rowSelector = generateElement("input");
	rowSelector.setAttribute("type", "checkbox");
	if (rowId) { rowSelector.setAttribute("data-row-id", rowId) };

	return generateRowSelectorEvent(rowSelector);
};

export const generateRowSettings = () => {
	const svgPath = "./icons/settings.svg";
	const rowSettings = generateElement("img");
	rowSettings.src = svgPath;
	return rowSettings;
};
