export default {
	en: {
		name: 'English',
		load: () => { return import('./en.json'); },
	},
	nl: {
		name: 'Nederlands',
		load: () => { return import('./nl.json'); },
	},
};
