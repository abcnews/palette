<script lang="ts">
	import { ColourMode } from '$lib/palettes.js';

	export let selectedMode: ColourMode = ColourMode.Light;
</script>

<div class="field">
	<label for="palette">Select palette</label>
	<select id="palette" bind:value={selectedMode}>
		<option value={ColourMode.Light}>Light</option>
		<option value={ColourMode.Dark}>Dark</option>
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
