<script lang="ts">
	import DivergentPaletteSelector from '$lib/_documentation/DivergentPaletteSelector.svelte';
	import DivergentContinuousPalette from '$lib/_documentation/DivergentContinuousPalette.svelte';
	import { DivergentPalette } from '$lib/palettes.js';
	import DivergentSteppedPalette from '$lib/_documentation/DivergentSteppedPalette.svelte';

	export let data;

	let palette: DivergentPalette = DivergentPalette.RedBlue;
</script>

<h2>Divergent</h2>

<DivergentPaletteSelector bind:selectedPalette={palette} />

<h3 id="continuous">Continuous</h3>
<DivergentContinuousPalette {palette} data={data.globalAverageTemperature} />

<h3 id="stepped">Stepped</h3>
<DivergentSteppedPalette {palette} />

<style>
</style>
