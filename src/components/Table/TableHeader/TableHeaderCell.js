import ComponentBase from "./../../ComponentBase";
import store from "./../../../store/index";
import { capitalizeString } from "../../../plugins/textFormat";

export default class TableHeaderCell extends ComponentBase {
	constructor(columnName, columnType) {
		super({ store, element: document.createElement("th") });
		this.elementContent = document.createElement("h3");
		this.columnName = columnName;
		this.columnType = columnType;
		this.hasRenderedOnce = false;

		this.elementContent.innerText = capitalizeString(this.columnName);
		this.element.appendChild(this.elementContent);
	};

	addStyle() {
		this.element.classList.add("header-cell");
	};

	addEvents() {
		const cellData = { columnName: this.columnName, columnType: this.columnType }
		this.element.addEventListener("click", () => store.commit("sortRows", cellData));
	};

	render() {
		if (!this.hasRenderedOnce) {
			this.addStyle();
			this.addEvents();
		};

		this.hasRenderedOnce = true;
		return this.element;
	};
};
