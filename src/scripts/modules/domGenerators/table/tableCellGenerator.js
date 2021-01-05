import { generateElement } from "../index";

const convertToAnchor = (type, value) => {
	const anchor = generateElement("a", document.createTextNode(value));
	anchor.rel = "noreferrer noopener";
	anchor.target = "_blank";
	type === "url"
		? anchor.href = value 
		: anchor.href = `mailto:${ value }`;
	
	return anchor;
};

export const generateCell = (cellType, cellValue) => {
	const value = document.createTextNode(cellValue);
	switch (cellType) {
		case "email":
			return convertToAnchor("email", cellValue);
		case "url":
			return convertToAnchor("url", cellValue);
		case "number":
			return generateElement("span", value);
		default:
			// Generate a paragraph element
			return generateElement("p", value);
	}
};
