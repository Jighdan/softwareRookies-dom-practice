import EventManager from "../plugins/eventManager";
import state from "./state";
import mutations from "./mutations";

export default class Store {
	constructor () {
		this.state = state;
		this.mutations = mutations;
		this.events = new EventManager();
		this.localStorageKey = "softwareRookies-dom-practice-state";
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
		// Save the current state in the local storage
		localStorage.setItem(this.localStorageKey, JSON.stringify(this.state));
	};

	fetchSavedState() {
		const localStorageState = localStorage.getItem(this.localStorageKey);
		console.log(localStorageState)
		if (localStorageState) { this.state = JSON.parse(localStorageState) };
	};
};
