import EventManager from "../plugins/eventManager";
import state from "./state";
import mutations from "./mutations";
import getters from "./getters";

export default class Store {
	constructor () {
		this.state = state;
		this.mutations = mutations;
		this.getters = getters;
		this.events = new EventManager();
		this.localStorageKey = "softwareRookies-dom-practice-state";
	};

	commit (mutationName, payload, notifyEvents=true) {
		if (typeof this.mutations[mutationName] !== "function") {
			console.error(`Mutation '${mutationName}' doesn't exist`);
			return false;
		};

		// Commit the mutation
		this.mutations[mutationName](this.state, payload);
		
		if (notifyEvents) {
			// Notify the stateChange for the observers
			this.events.notify("stateChange", this.state);
		};

		// Save the current table state in the local storage
		localStorage.setItem(this.localStorageKey, JSON.stringify(this.state.table));
	};

	getter (getterName, payload) {
		if (typeof this.getters[getterName] !== "function") {
			console.error(`Getter '${getterName}' doesn't exist`);
			return false;
		};

		return this.getters[getterName](this.state, payload);
	}

	fetchSavedState() {
		const localStorageState = localStorage.getItem(this.localStorageKey);
		if (localStorageState) { this.state.table = JSON.parse(localStorageState) };
	};
};
