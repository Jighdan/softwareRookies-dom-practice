export const generateElementContent = (elementTag, elementContent) => {
	const element = document.createElement(elementTag);
	if (elementContent) {
		typeof elementContent === "object"
			? element.appendChild(elementContent)
			: element.innerHTML = elementContent;
	}
	
	return element
};