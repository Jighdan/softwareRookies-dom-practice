import ComponentBase from "./ComponentBase";
import store from "../store/index";

export default class Form extends ComponentBase {
	constructor () {
		super({ store, element: document.getElementById("newColumnForm") });
		this.elementModal = document.getElementById("modal");
		this.formSubmitted = false;
		this.hasRenderedOnce = false;
	};

	hideModal() {
		this.elementModal.style.display = "none";
	};

	handleSubmit(event) {
		event.preventDefault();

		// Scoping messed me up badly for straight 30 minutes
		const formElements = this.elements;
		const { columnName, columnType } = formElements;

		// Adds the new column to the table
		store.commit("addColumn", {
			columnName: columnName.value,
			columnType: columnType.value
		});

		// Resets the form input values
		this.elements.columnName.value = "";
	};

	addEvents() {
		this.element.addEventListener("submit", this.handleSubmit);
	};

	render() {
		if (!this.hasRenderedOnce) {
			this.addEvents();
		};

		this.hasRenderedOnce = true;
		return this.element;
	}
};