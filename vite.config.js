import { sveltekit } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: preprocess(),
			// SvelteKit 3 replaced `$lib` with `#lib`; keep the `$lib` alias so existing imports work
			alias: { $lib: 'src/lib' }
		})
	]
});
