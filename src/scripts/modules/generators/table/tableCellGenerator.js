import { generateElementContent } from "../index";

const convertToAnchor = (type, value) => {
	const anchor = generateElementContent("a", value);
	anchor.rel = "noreferrer noopener";
	anchor.target = "_blank";
	type === "url"
		? anchor.href = value 
		: anchor.href = `mailto:${ value }`;
	
	return anchor;
};

export const generateDataCell = (content) => {
	const dataCell = document.createElement("td");
	dataCell.appendChild(content);
	return dataCell;
};

export const generateHeaderDataCell = (content) => {
	const dataCell = document.createElement("th");
	dataCell.appendChild(content);
	return dataCell;
};

export const generateCell = (cellType, cellValue) => {
	switch (cellType) {
		case "email":
			return convertToAnchor("email", cellValue);
		case "url":
			return convertToAnchor("url", cellValue);
		case "number":
			return generateElementContent("span", cellValue);
		default:
			// Generate a paragraph element
			return generateElementContent("p", cellValue);
	}
};
