const generateAnchorElement = (anchorType, anchorValue) => {
	const element = document.createElement("a").appendChild(document.createTextNode(anchorValue));
	element.setAttribute("rel", "noreferrer noopener");
	element.setAttribute("target", "_blank");
	anchorType === "url"
		? element.setAttribute("href", anchorValue)
		: element.setAttribute("href", `mailto:${anchorValue}`);

	return element;
};

const tableRowCell = (cellType, cellValue) => {
	const element = document.createElement("td");
	let elementContent;

	switch (cellType) {
		case ["email", "url"].includes(cellType):
			elementContent = generateAnchorElement(cellType, cellValue);
		default:
			elementContent = document.createElement("p");
			elementContent.innerText = cellValue;
	};

	element.appendChild(elementContent);
	return element;
};

export default tableRowCell;