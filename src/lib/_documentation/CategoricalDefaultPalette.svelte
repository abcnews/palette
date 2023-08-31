<script lang="ts">
	import SwatchTable from '$lib/_documentation/SwatchTable.svelte';
	import { getColourName } from '$lib/colours.js';
	import { ColourMode, getDefaultCategoricalPalette } from '$lib/palettes.js';
	import Swatch from './Swatch.svelte';

	export let mode: ColourMode;

	let palettes: string[][];
	$: palettes = Array(8)
		.fill(undefined)
		.map((_, i) => getDefaultCategoricalPalette(i + 1, mode));
</script>

<SwatchTable>
	<thead>
		<th />
		<th colspan="8">
			Use in this order
			<svg
				width="577"
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
	</thead>
	<tfoot>
		<tr>
			<th />
			{#each palettes[7] as colour}
				<td style="color: {colour};">
					<strong>{getColourName(colour)}</strong>
					{colour}
				</td>
			{/each}
		</tr>
	</tfoot>
	<tbody>
		{#each palettes as palette, i}
			<tr>
				<th>{i + 1} categor{i === 0 ? 'y' : 'ies'}</th>
				{#each [1, 2, 3, 4, 5, 6, 7, 8] as num}
					<td
						>{#if palette[num - 1]}<Swatch colour={palette[num - 1]} />{/if}</td
					>
				{/each}
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
