<script lang="ts">
	import SequentialPaletteSelector from '$lib/_documentation/SequentialPaletteSelector.svelte';
	import SequentialContinuousPalette from '$lib/_documentation/SequentialContinuousPalette.svelte';
	import { SequentialPalette } from '$lib/palettes.js';
	import SequentialSteppedPalette from '$lib/_documentation/SequentialSteppedPalette.svelte';

	export let data;
	let palette: SequentialPalette = SequentialPalette.Blue;
</script>

<h2>Sequential</h2>
<SequentialPaletteSelector bind:selectedPalette={palette} />

<h3 id="continous">Continuous</h3>
<SequentialContinuousPalette {palette} data={data.globalAverageTemperature} />

<h3 id="stepped">Stepped</h3>
<SequentialSteppedPalette {palette} />

<style>
</style>
