<script lang="ts">
	import { SequentialPalette, getSequentialSteppedPalette } from '$lib/palettes.js';
	import { color } from 'd3-color';
	export let selectedPalette: SequentialPalette;

	$: lengths = new Array<string[]>(9)
		.fill(undefined)
		.map((_, i) => getSequentialSteppedPalette(10 - i, selectedPalette));

	const colourLuminance = (c: string) => {
		const rgb = color(c);
		const l = ['r', 'g', 'b']
			.map((d) => {
				const ratio = rgb[d] / 255;
				const v = ratio <= 0.04045 ? ratio / 12.92 : ((ratio + 0.055) / 1.055) ** 2.4;
				return v;
			})
			.reduce((t, d, i, arr) => {
				switch (i) {
					case 0:
						return t + 0.2126 * d;
					case 1:
						return t + 0.7152 * d;
					case 2:
						return t + 0.0722 * d;
				}
			}, 0);
		return l;
	};
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
					{color(colourStr).formatHex()}
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
