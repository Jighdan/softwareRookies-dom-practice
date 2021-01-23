export default class TableHeaderOptionsItem {
	constructor(optionName, optionCallback) {
		this.element = document.createElement("li");
		this.optionCallback = optionCallback;

		this.element.classList.add("dropdown-content-item");
		this.element.innerText = optionName;
	};

	addEvents() {
		this.element.addEventListener("click", this.optionCallback);
	};

	render() {
		this.addEvents();

		return this.element;
	}
};
