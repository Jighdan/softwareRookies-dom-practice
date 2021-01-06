import EventManager from "../plugins/eventManager";
import state from "./state";
import mutations from "./mutations";

export default class Store {
	constructor () {
		this.state = state;
		this.mutations = mutations;
		this.events = new EventManager();
	};

	commit (mutationName, payload) {
		if (typeof this.mutations[mutationName] !== "function") {
			console.error("Mutations not found");
			return false;
		};

		// Commit the mutation
		this.mutations[mutationName](this.state, payload);
		// Notify the stateChange for the observers
		this.events.notify("stateChange", this.state);
	};
};
