<script lang="ts">
	import { ColourMode, SequentialPalette, getSequentialSteppedPalette } from '$lib/palettes.js';
	import { colourLuminance } from '$lib/utils.js';
	import { color } from 'd3-color';
	export let palette: SequentialPalette;
	export let mode: ColourMode;
	$: lengths = new Array<string[]>(9)
		.fill([''])
		.map((_, i) => getSequentialSteppedPalette(10 - i, palette, mode));
</script>

<div>
	{#each lengths as colours}
		<div class="row" style:--steps={colours.length}>
			<div class="label">{colours.length - 1} Steps</div>
			{#each colours as colourStr}
				<div
					class="swatch"
					style={`background: ${colourStr}; color: ${
						colourLuminance(colourStr) > 0.179 ? '#000' : '#fff'
					};`}
				>
					{color(colourStr)?.formatHex()}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.label {
		text-align: right;
		padding: 0.8rem;
		font-size: 0.8em;
		font-weight: bold;
	}
	.row {
		display: grid;
		grid-template-columns: 1fr repeat(var(--steps), 5em);
	}
	.swatch {
		padding: 0.8rem 0.3em;
		font-size: 0.8em;
		text-align: center;
	}
</style>
