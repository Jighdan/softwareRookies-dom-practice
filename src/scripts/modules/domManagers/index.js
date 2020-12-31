import tableDom from "./table/index";
import { toggleButtonDisabled } from "./button/index";

export const generateElementContent = (elementTag, elementContent) => {
	const element = document.createElement(elementTag);
	if (elementContent) {
		typeof elementContent === "object"
			? element.appendChild(elementContent)
			: element.innerHTML = elementContent;
	}
	
	return element;
};

const DOM = {
	table: tableDom,
	button: {
		toggleDisabled: toggleButtonDisabled
	}
};

export default DOM;