<script lang="ts">
	import SequentialPaletteSelector from '$lib/_documentation/SequentialPaletteSelector.svelte';
	import SequentialContinuousPalette from '$lib/_documentation/SequentialContinuousPalette.svelte';
	import { ColourMode, SequentialPalette } from '$lib/palettes.js';
	import SequentialSteppedPalette from '$lib/_documentation/SequentialSteppedPalette.svelte';
	import ColourModeSelector from '$lib/_documentation/ColourModeSelector.svelte';

	export let data;
	let palette: SequentialPalette = SequentialPalette.Blue;
	let mode: ColourMode = ColourMode.Light;
</script>

<h2>Sequential</h2>
<SequentialPaletteSelector bind:selectedPalette={palette} />
<ColourModeSelector bind:selectedMode={mode} />

<h3 id="continous">Continuous</h3>
<SequentialContinuousPalette {palette} {mode} data={data.globalAverageTemperature} />

<h3 id="stepped">Stepped</h3>
<SequentialSteppedPalette {palette} {mode} />

<svelte:head>
	<meta name="color-scheme" content={mode === 'l' ? 'light' : 'dark'} />
</svelte:head>

<style>
</style>
