import tableDom from "./table/index";

export const generateElement = (elementTag, ...elementChildren) => {
	const element = document.createElement(elementTag);
	if (elementChildren) {
		elementChildren.forEach(children => element.appendChild(children))
	};
	
	return element;
};

const domGenerate = {
	table: tableDom
};

export default domGenerate;