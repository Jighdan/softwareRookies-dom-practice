import store from "../../../store/index";
import TableHeaderOptionsItem from "./TableHeaderOptionsItem";

const ICON_OPTIONS_PATH = "./icons/options.svg";

// Not necessary for the `TableHeaderOptions` class to inherit
// from our `ComponentBase` since it won't be changing it's content
// When the state mutates

export default class TableHeaderOptions {
	constructor() {
		this.element = document.createElement("div");
		this.elementIcon = document.createElement("img");
		this.elementContent = document.createElement("ul");
		this.availableOptions = [
			{
				optionName: "Export as CSV",
				optionCallback: function() { console.log("Export as CSV") }
			},
			{
				optionName: "Export as JSON",
				optionCallback: function() { console.log("Export as JSON") }
			},
			{
				optionName: "Delete",
				optionCallback: function() {
					let confirmation = confirm("Are you sure you want to delete the selected rows?");
					if (confirmation) {
						store.commit("deleteAllSelectedRows");
					};
				}
			}
		];

		// Adding classes and attributes to the elements	
		this.elementIcon.setAttribute("src", ICON_OPTIONS_PATH);
		this.elementIcon.setAttribute("alt", "Gear Icon");
		this.elementContent.classList.add("dropdown-content");
		this.element.classList.add("dropdown");

		// Add each option item with their corresponding callback function
		// to `elementContent`
		this.availableOptions.forEach(({ optionName, optionCallback }) => {
			const optionItem = new TableHeaderOptionsItem(optionName, optionCallback);
			this.elementContent.appendChild(optionItem.render());
		});

		// Appending the generated icon and content to the main element
		this.element.append(this.elementIcon, this.elementContent);
	};

	addEvents() {
		this.element.addEventListener("click", () => {
			this.elementContent.classList.toggle("dropdown-content-show");
		});
	};

	render() {
		// Even that this component won't be updating on state mutation,
		// web will keep using `render()` for naming consistency
		this.addEvents();

		return this.element;
	};
};
