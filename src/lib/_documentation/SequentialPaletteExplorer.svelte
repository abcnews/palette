<script type="ts">
	import { SequentialPalette, DivergentPalette, isDivergentPalette } from '$lib/palettes';
	import { createContinuousScale } from '$lib/scales';
	import Stripes from '$lib/_chart-components/Stripes.svelte';
	import GradientSwatch from '$lib/_documentation/GradientSwatch.svelte';

	export let data;

	let domain: [number, number] | [number, number, number] = [-1.5, 1.5];
	let selectedPalette: SequentialPalette | DivergentPalette = SequentialPalette.Blue;
	let extent: number = 1.5;

	$: domain = isDivergentPalette(selectedPalette) ? [-extent, 0, extent] : [-extent, extent];
</script>

<div class="field">
	<label for="palette">Select palette</label>
	<select id="palette" bind:value={selectedPalette}>
		<optgroup label="Sequential">
			{#each Object.entries(SequentialPalette) as [name, value]}
				<option {value}>{name}</option>
			{/each}
		</optgroup>
		<optgroup label="Divergent">
			<option value="red-blue">Red - Blue</option>
			<option value="green-purple">Green - Purple</option>
			<option value="purple-red">Purple - Red</option>
		</optgroup>
	</select>
</div>

<div><GradientSwatch palette={selectedPalette} orientation="h" /></div>

<h3>Stripes</h3>
<div class="field">
	<label for="extent">Set domain extent</label>
	<input type="range" min={0.1} max={5} step={0.1} bind:value={extent} />
	<span>{domain}</span>
</div>

<Stripes {data} scale={createContinuousScale(selectedPalette, domain)} />

<style>
	.field {
		margin: 1rem 0;
	}
	label {
		display: block;
		font-weight: bold;
	}
</style>
