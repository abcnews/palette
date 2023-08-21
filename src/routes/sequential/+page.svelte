<script lang="ts">
	import SequentialPaletteSelector from '$lib/_documentation/SequentialPaletteSelector.svelte';
	import SequentialContinuousPalette from '$lib/_documentation/SequentialContinuousPalette.svelte';
	import { ColourMode, SequentialPalette } from '$lib/palettes.js';
	import SequentialSteppedPalette from '$lib/_documentation/SequentialSteppedPalette.svelte';
	import { theme } from '$lib/stores.js';

	export let data;
	let palette: SequentialPalette = SequentialPalette.Blue;
	let mode: ColourMode = $theme === 'dark' ? ColourMode.Dark : ColourMode.Light;
	$: mode = $theme === 'dark' ? ColourMode.Dark : ColourMode.Light;
</script>

<h2>Sequential</h2>
<SequentialPaletteSelector bind:selectedPalette={palette} />

<h3 id="continous">Continuous</h3>
<SequentialContinuousPalette {palette} {mode} data={data.globalAverageTemperature} />

<h3 id="stepped">Stepped</h3>
<SequentialSteppedPalette {palette} {mode} />

<svelte:head>
	<meta name="color-scheme" content={mode === 'l' ? 'light' : 'dark'} />
</svelte:head>

<style>
</style>
