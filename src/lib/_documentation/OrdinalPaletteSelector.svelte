<script lang="ts">
	import { OrdinalPalette } from '$lib/palettes.js';
	export let selectedPalette: OrdinalPalette;
</script>

<div class="field">
	<label for="palette">Select palette</label>
	<select id="palette" bind:value={selectedPalette}>
		{#each Object.entries(OrdinalPalette) as [name, value]}
			<option {value}>{name}</option>
		{/each}
	</select>
</div>

<style>
	.field {
		margin: 1rem 0;
	}
	label {
		display: block;
		font-weight: bold;
	}
</style>
