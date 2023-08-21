import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const theme = writable<Theme>('system');

if (browser) {
	theme.set((window.localStorage.getItem('theme') as Theme) || 'system');
	theme.subscribe((d) => {
		window.localStorage.setItem('theme', d);
	});
}
