import { sveltekit } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import { defineConfig } from 'vite';

// SvelteKit 3 reads its config from the `sveltekit()` plugin options instead of `svelte.config.js`
export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: preprocess(),
			// SvelteKit 3 replaced `$lib` with `#lib`; keep the `$lib` alias so existing imports work
			alias: { $lib: 'src/lib' }
		})
	]
});
