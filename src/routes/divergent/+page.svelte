<script lang="ts">
	import DivergentPaletteSelector from '$lib/_documentation/DivergentPaletteSelector.svelte';
	import DivergentContinuousPalette from '$lib/_documentation/DivergentContinuousPalette.svelte';
	import { ColourMode, DivergentPalette } from '$lib/palettes.js';
	import DivergentSteppedPalette from '$lib/_documentation/DivergentSteppedPalette.svelte';
	import ColourModeSelector from '$lib/_documentation/ColourModeSelector.svelte';

	export let data;

	let palette: DivergentPalette = DivergentPalette.RedBlue;
	let mode: ColourMode = ColourMode.Light;
</script>

<svelte:head>
	<meta name="color-scheme" content={mode === 'l' ? 'light' : 'dark'} />
</svelte:head>

<h2>Divergent</h2>

<DivergentPaletteSelector bind:selectedPalette={palette} />
<ColourModeSelector bind:selectedMode={mode} />

<h3 id="continuous">Continuous</h3>
<DivergentContinuousPalette {palette} {mode} data={data.globalAverageTemperature} />

<h3 id="stepped">Stepped</h3>
<DivergentSteppedPalette {palette} {mode} />

<style>
</style>
