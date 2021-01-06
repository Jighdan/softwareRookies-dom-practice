import ComponentBase from "./ComponentBase";
import store from "../store/index";

export default class Modal extends ComponentBase {
	constructor () {
		super({ store, element: document.getElementById("modal") });
		this.elementClose = document.getElementById("modalClose");
		this.hasRenderedOnce = false;
	};

	hideModal() {
		this.element.style.display = "none";
	};

	addEvents() {
		// Close modal on click away
		window.addEventListener("click", (event) => {
			if (event.target === this.element) {
				this.hideModal();
			};
		});

		// Close modal on when clicked the close element
		this.elementClose.addEventListener("click", () => (
			this.hideModal()
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