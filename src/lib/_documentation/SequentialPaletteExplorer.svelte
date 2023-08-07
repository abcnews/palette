<script lang="ts">
	import {
		SequentialPalette,
		DivergentPalette,
		isDivergentPalette,
		isSequentialPalette
	} from '$lib/palettes.js';
	import { createContinuousScale } from '$lib/scales.js';
	import Stripes from '$lib/_chart-components/Stripes.svelte';
	import GradientSwatch from '$lib/_documentation/GradientSwatch.svelte';
	import SequentialSteppedPaletteExplorer from '$lib/_documentation/SequentialSteppedPaletteExplorer.svelte';
	import DivergentSteppedPaletteExplorer from '$lib/_documentation/DivergentSteppedPaletteExplorer.svelte';

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
			<option value={DivergentPalette.RedBlue}>Red - Blue</option>
			<option value={DivergentPalette.GreenPurple}>Green - Purple</option>
			<option value={DivergentPalette.PurpleRed}>Purple - Red</option>
		</optgroup>
	</select>
</div>

<h3>Continuous</h3>
<div><GradientSwatch palette={selectedPalette} orientation="h" /></div>

<h4>Stripes</h4>
<div class="field">
	<label for="extent">Set domain extent</label>
	<input type="range" min={0.1} max={5} step={0.1} bind:value={extent} />
	<span>{domain}</span>
</div>

<Stripes {data} scale={createContinuousScale(selectedPalette, domain)} />

<h3>Stepped</h3>
{#if isSequentialPalette(selectedPalette)}
	<SequentialSteppedPaletteExplorer {selectedPalette} />
{:else}
	<DivergentSteppedPaletteExplorer {selectedPalette} />
{/if}

<style>
	.field {
		margin: 1rem 0;
	}
	label {
		display: block;
		font-weight: bold;
	}
</style>
