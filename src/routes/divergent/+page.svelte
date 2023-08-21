<script lang="ts">
	import DivergentPaletteSelector from '$lib/_documentation/DivergentPaletteSelector.svelte';
	import DivergentContinuousPalette from '$lib/_documentation/DivergentContinuousPalette.svelte';
	import { ColourMode, DivergentPalette } from '$lib/palettes.js';
	import DivergentSteppedPalette from '$lib/_documentation/DivergentSteppedPalette.svelte';
	import { theme } from '$lib/stores.js';

	export let data;

	let palette: DivergentPalette = DivergentPalette.RedBlue;
	let mode: ColourMode = $theme === 'dark' ? ColourMode.Dark : ColourMode.Light;
	$: mode = $theme === 'dark' ? ColourMode.Dark : ColourMode.Light;
</script>

<h2>Divergent</h2>

<DivergentPaletteSelector bind:selectedPalette={palette} />

<h3 id="continuous">Continuous</h3>
<DivergentContinuousPalette {palette} {mode} data={data.globalAverageTemperature} />

<h3 id="stepped">Stepped</h3>
<DivergentSteppedPalette {palette} {mode} />

<style>
</style>
