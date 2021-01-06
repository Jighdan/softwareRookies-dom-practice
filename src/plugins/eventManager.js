/*
	- WTF! I don't get this.
	- Read this my child -> https://refactoring.guru/design-patterns/observer
*/

export default class EventManager {
	constructor () {
		this.events = {};
	};

	subscribe (event, callback) {
		if (!this.events.hasOwnProperty(event)) {
			this.events[event] = [];
		};

		return this.events[event].push(callback);
	};

	notify (event, data) {
		if (!this.events.hasOwnProperty(event)) {
			return [];
		};

		// Go through each subscription an call it's callback
		// with the new data
		return this.events[event].map(callback => callback(data));
	};
};
