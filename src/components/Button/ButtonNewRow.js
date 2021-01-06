import ComponentBase from "../ComponentBase";
import store from "../../store/index";

export default class ButtonNewRow extends ComponentBase {
	constructor() {
		super({ store, element: document.getElementById("buttonNewRow") });
		this.hasRenderedOnce = false;
	};

	addEvents() {
		this.element.addEventListener("click", () => (
			store.commit("addRow")
		));
	};

	render() {
		if (!this.hasRenderedOnce) {
			this.addEvents();
		};
		this.hasRenderedOnce = true;
		return this.element;
	};
};