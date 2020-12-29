import { generateElementContent } from "../index";

export const generateRowSelector = () => {
	const rowSelector = generateElementContent("input", false);
	rowSelector.setAttribute("type", "checkbox");
	return rowSelector;
};

export const generateRowSettings = () => {
	const svgPath = "./icons/settings.svg";
	const rowSettings = generateElementContent("img", false);
	rowSettings.src = svgPath;
	return rowSettings;
};
