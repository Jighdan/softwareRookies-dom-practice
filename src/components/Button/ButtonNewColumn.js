import ComponentBase from "../ComponentBase";
import store from "../../store/index";

export default class ButtonNewColumn extends ComponentBase {
	constructor() {
		super({ store, element: document.getElementById("buttonNewColumn") });
		this.elementModal = document.getElementById("modal");
		this.hasRenderedOnce = false;
	};

	addEvents() {
		this.element.addEventListener("click", () => (
			// Fire up the modal box
			this.elementModal.style.display = "block"
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