<script lang="ts">
	import { createContinuousScale } from '$lib/scales.js';
	import Stripes from '$lib/_chart-components/Stripes.svelte';
	import GradientSwatch from '$lib/_documentation/GradientSwatch.svelte';
	import type { SequentialPalette } from '$lib/palettes.js';

	export let data;
	export let palette: SequentialPalette;

	const DEFAULT_EXTENT = 1.5;
	let domain: [number, number] = [-DEFAULT_EXTENT, DEFAULT_EXTENT];
	let extent: number = DEFAULT_EXTENT;

	$: domain = [-extent, extent];
</script>

<div><GradientSwatch {palette} orientation="h" /></div>

<p>Example use as a continuous palette:</p>
<div class="field">
	<label for="extent">Set domain extent</label>
	<input type="range" min={0.1} max={5} step={0.1} bind:value={extent} />
	<span>{domain}</span>
</div>

<Stripes {data} scale={createContinuousScale(palette, domain)} />

<style>
	.field {
		margin: 1rem 0;
	}
	label {
		display: block;
		font-weight: bold;
	}
</style>
