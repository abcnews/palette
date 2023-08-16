<script lang="ts">
	import { DivergentPalette } from '$lib/palettes.js';
	export let selectedPalette: DivergentPalette = DivergentPalette.RedBlue;
</script>

<div class="field">
	<label for="palette">Select palette</label>
	<select id="palette" bind:value={selectedPalette}>
		<option value={DivergentPalette.RedBlue}>Red - Blue</option>
		<option value={DivergentPalette.GreenPurple}>Green - Purple</option>
		<option value={DivergentPalette.PurpleRed}>Purple - Red</option>
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
