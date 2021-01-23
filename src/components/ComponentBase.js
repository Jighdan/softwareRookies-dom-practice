import Store from "../store/store";

export default class ComponentBase {
	constructor(props={}) {
		this.render = this.render || function(){};

		// If there's an store passed in, subscribe the component
		// to the Events Manager
		if (props.store instanceof Store) {
			props.store.events.subscribe("stateChange", () => this.render());
		};

		if (props.hasOwnProperty("element")) {
			this.element = props.element;
		};
	};
};