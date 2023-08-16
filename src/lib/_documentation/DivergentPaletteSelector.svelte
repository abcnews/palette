<script lang="ts">
	import { DivergentPalette } from '$lib/palettes.js';
	export let selectedPalette: DivergentPalette = DivergentPalette.RedBlue;
</script>

<div class="field">
	<label for="palette">Select palette</label>
	<select id="palette" bind:value={selectedPalette}>
		<option value={DivergentPalette.RedBlue}>Red - Blue</option>
		<option value={DivergentPalette.PurpleGreen}>Purple — Green</option>
		<option value={DivergentPalette.RedViolet}>Red — Violet</option>
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
