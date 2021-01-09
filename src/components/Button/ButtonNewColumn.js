import ComponentBase from "../ComponentBase";
import store from "../../store/index";

export default class ButtonNewColumn extends ComponentBase {
	constructor() {
		super({ store, element: document.getElementById("buttonNewColumn") });
		this.elementModal = document.getElementById("modal");
		this.hasRenderedOnce = false;
	};

	setDisabledButton() {
		// Check if there are no rows in the table
		if (!store.state.table.rows.length) {
			this.element.disabled = true;
			this.element.classList.add("button-disabled");
		} else {
			this.element.disabled = false;
			this.element.classList.remove("button-disabled");
		}
	};

	addEvents() {
		this.element.addEventListener("click", () => (
			// Fire up the modal box
			this.elementModal.style.display = "block"
		));
	};

	render() {
		this.setDisabledButton();

		if (!this.hasRenderedOnce) {
			this.addEvents();
		};
	
		this.hasRenderedOnce = true;
		return this.element;
	};
};