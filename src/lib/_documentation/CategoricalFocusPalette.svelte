<script lang="ts">
	import SwatchTable from '$lib/_documentation/SwatchTable.svelte';
	import { getColourName } from '$lib/colours.js';
	import { ColourMode, getFocusCategoricalPalette } from '$lib/palettes.js';
	import Swatch from './Swatch.svelte';

	export let mode: ColourMode;

	let palettes: { emphasis: string; deemphasis: string; palette: string[] }[];
	$: palettes = Array(3)
		.fill(undefined)
		.map((_, i) => getFocusCategoricalPalette(i + 1, mode));
</script>

<SwatchTable>
	<thead>
		<th />
		<th colspan="3">
			Use in this order
			<svg
				width="77"
				height="16"
				viewBox="0 0 577 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M576.707 8.70716C577.098 8.31663 577.098 7.68347 576.707 7.29294L570.343 0.928983C569.953 0.538458 569.319 0.538458 568.929 0.928982C568.538 1.31951 568.538 1.95267 568.929 2.3432L574.586 8.00005L568.929 13.6569C568.538 14.0474 568.538 14.6806 568.929 15.0711C569.319 15.4616 569.953 15.4616 570.343 15.0711L576.707 8.70716ZM-1.76712e-07 8.99995L576 9.00005L576 7.00005L1.76721e-07 6.99995L-1.76712e-07 8.99995Z"
					fill="black"
				/>
			</svg>
		</th>
		<th>Then add 1 highligted category</th>
		<th>and/or 1 <em>or more</em> de-emphasised categories</th>
	</thead>
	<tfoot>
		<tr>
			<th />
			{#each palettes[2].palette as colour}
				<td style="color: {colour};">
					<strong>{getColourName(colour)}</strong>
					{colour}
				</td>
			{/each}
			<td style="color: {palettes[2].emphasis};">
				<strong>{getColourName(palettes[2].emphasis)}</strong>
				{palettes[2].emphasis}
			</td>
			<td style="color: {palettes[2].deemphasis};">
				<strong>{getColourName(palettes[2].deemphasis)}</strong>
				{palettes[2].deemphasis}
			</td>
		</tr>
	</tfoot>
	<tbody>
		{#each palettes as palette, i}
			<tr>
				<th>{i + 1} categor{i === 0 ? 'y' : 'ies'}</th>
				{#each [0, 1, 2] as num}
					<td
						>{#if palette.palette[num]}<Swatch colour={palette.palette[num]} />{/if}</td
					>
				{/each}
				<td><Swatch colour={palette.emphasis} /></td>
				<td><Swatch colour={palette.deemphasis} /></td>
			</tr>
		{/each}
	</tbody>
</SwatchTable>

<style>
	th,
	td {
		padding: 10px;
	}
	tr th {
		text-align: right;
	}
	tr td {
		border-bottom: 1px solid #a9bed9;
	}

	tfoot td {
		text-align: center;
	}

	tfoot strong {
		display: block;
	}
</style>
