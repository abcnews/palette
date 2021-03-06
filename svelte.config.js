import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		package: {
			files: (filename) => !filename.startsWith('_')
		},
		vite: {
			plugins: []
		}
	}
};

export default config;
