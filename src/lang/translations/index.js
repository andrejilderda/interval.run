export default {
	en: {
		name: 'English',
		load: () => { return Promise.resolve({}); },
		// for global messages, change the above line to:
		// load: () => { return import('./en.json'); },
	},
	nl: {
		name: 'Nederlands',
		load: () => { return Promise.resolve({}); },
	},
};
