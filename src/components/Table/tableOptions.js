const ICON_OPTIONS_PATH = "./icons/options.svg";

// Not necessary to inherit from our default `ComponentBase` class
// since we won't be touching the store from this component, neither
// this component will mutate the store state, except from our `Delete` option

export default class TableHeadOptions {
	constructor() {
		this.element = document.createElement("div");

		this.elementIcon = document.createElement("img");
		this.elementIcon.setAttribute("src", ICON_OPTIONS_PATH);
		this.elementIcon.setAttribute("alt", "Gear Icon");

		this.elementContent = document.createElement("ul");
		this.elementContent.classList.add("dropdown-content");

		this.element.classList.add("dropdown");
		this.element.append(this.elementIcon, this.elementContent);
	};

	addEvents() {
		this.element.addEventListener("click", () => {
			this.elementContent.classList.toggle("dropdown-content-show");
		});
	};

	initializeContent() {
		const elementContent = ["Export as CSV", "Export as JSON", "Delete"];
		
		elementContent.forEach(contentText => {
			const elementContentItem = document.createElement("li");
			elementContentItem.classList.add("dropdown-content-item")
			elementContentItem.innerText = contentText;

			this.elementContent.appendChild(elementContentItem);
		});
	};

	// Even that this component won't be updating on state mutation,
	// web will keep using `render()` for naming consistency
	render() {
		this.initializeContent();
		this.addEvents();

		return this.element;
	};
};
