<script lang="ts">
	import { browser } from '$app/environment';
	import { theme } from '$lib/stores.js';
	if (browser) {
		theme.set((window.localStorage.getItem('theme') as Theme) || 'system');
		theme.subscribe((d) => {
			window.localStorage.setItem('theme', d);
		});
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/fonts.css" />
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
</svelte:head>

<div class="wrapper">
	<h1>ABC News Digital Data Visualisation Colour Palettes</h1>
	<select bind:value={$theme}>
		<option value="system">System</option>
		<option value="light">Light</option>
		<option value="dark">Dark</option>
	</select>

	<div class="menu">
		<ul>
			<li>
				<a href="/categorical">Categorical</a>
				<ul>
					<li>
						<a href="/categorical#nominal">Nominal</a>
						<ul>
							<li><a href="/categorical#generic">Generic</a></li>
							<li><a href="/categorical#semantic">Semantic</a></li>
						</ul>
					</li>
					<li><a href="/categorical#ordinal">Ordinal</a></li>
				</ul>
			</li>
			<li>
				<a href="/sequential">Sequential</a>
				<ul>
					<li><a href="/sequential#continuous">Continuous</a></li>
					<li><a href="/sequential#stepped">Stepped</a></li>
				</ul>
			</li>
			<li>
				<a href="/divergent">Divergent</a>
				<ul>
					<li><a href="/divergent#continuous">Continuous</a></li>
					<li><a href="/divergent#stepped">Stepped</a></li>
				</ul>
			</li>
		</ul>
	</div>
	<slot />
</div>

<style>
	:global(body, html) {
		font-family: ABCSans, sans-serif;
		font-size: 16px;
		line-height: 1.5;
	}

	.wrapper {
		max-width: 1000px;
		margin: 0 auto;
		padding: 30px;
	}
</style>
