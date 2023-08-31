<script lang="ts">
	import SwatchTable from '$lib/_documentation/SwatchTable.svelte';
	import { getColourName } from '$lib/colours.js';
	import { ColourMode, getSentimentPalette } from '$lib/palettes.js';

	import Swatch from './Swatch.svelte';
	export let mode: ColourMode;

	let palettes: ReturnType<typeof getSentimentPalette>[];
	let negative: string[];
	let positive: string[];
	$: palettes = Array(3)
		.fill(undefined)
		.map((_, i) => getSentimentPalette(i + 1, mode));
	$: negative = palettes[2].negative.slice().reverse();
	$: positive = palettes[2].positive.slice();
</script>

<SwatchTable>
	<thead>
		<tr>
			<td />
			<th>Less / Disagree / Worse</th>
			<th colspan="2" />
			<th>More / Agree / Better</th>
			<td />
		</tr>
		<tr>
			<td />
			<th>Much</th>
			<th>Somewhat</th>
			<th>A bit</th>
			<th>Neutral</th>
			<th>A bit</th>
			<th>Somewhat</th>
			<th>Much</th>
			<th>Don't know / NA</th>
		</tr>
	</thead>
	<tfoot>
		<tr>
			<td />
			{#each negative as colour}
				<td>
					<strong>{getColourName(colour)}</strong>
					{colour}
				</td>
			{/each}
			<td>
				<strong>{getColourName(palettes[0].neutral)}</strong>
				{palettes[0].neutral}
			</td>
			{#each positive as colour}
				<td>
					<strong>{getColourName(colour)}</strong>
					{colour}
				</td>
			{/each}
			<td>
				<strong>{getColourName(palettes[0].na)}</strong>
				{palettes[0].na}
			</td>
		</tr>
	</tfoot>
	<tbody>
		{#each palettes as { neutral, na }, i}
			<tr>
				<th>
					<strong>{positive.length} levels of sentiment</strong>
					{positive.length * 2 + 1} categories
				</th>
				{#each negative as colour}
					<td>
						{#if palettes[i].negative.includes(colour)}<Swatch {colour} />{/if}
					</td>
				{/each}
				<td><Swatch colour={neutral} /></td>
				{#each positive as colour}
					<td>
						{#if palettes[i].positive.includes(colour)}<Swatch {colour} />{/if}
					</td>
				{/each}
				<td><Swatch colour={na} /></td>
			</tr>
		{/each}
	</tbody>
</SwatchTable>
