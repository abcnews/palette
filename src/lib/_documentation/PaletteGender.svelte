<script lang="ts">
	import { getColourName } from '$lib/colours.js';
	import { ColourMode, getGenderPalette } from '$lib/palettes.js';
	import Swatch from './Swatch.svelte';
	import SwatchTable from './SwatchTable.svelte';
	export let mode: ColourMode;

	let palette = getGenderPalette(mode);
	$: palette = getGenderPalette(mode);
</script>

<SwatchTable>
	<thead>
		<tr>
			{#each Object.entries(palette) as [id, { colour, usage }]}
				<th>{usage}</th>
			{/each}
		</tr>
	</thead>
	<tfoot>
		<tr>
			{#each Object.entries(palette) as [id, { colour, usage }]}
				<td style="color: {colour};">
					<strong>{getColourName(colour)}</strong>
					{colour}
				</td>
			{/each}
		</tr>
	</tfoot>
	<tbody>
		<tr>
			{#each Object.entries(palette) as [id, { colour, usage }]}
				<td><Swatch {colour} /></td>
			{/each}
		</tr>
	</tbody>
</SwatchTable>
