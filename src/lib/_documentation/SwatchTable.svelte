<script lang="ts">
	import { getColourName, getLabelColour } from '$lib/colours.js';
	import Swatch from './Swatch.svelte';
	import SwatchColourLabel from './SwatchColourLabel.svelte';
	export let palette: { colour: string; usage: string }[];
</script>

<table>
	<thead>
		<tr>
			<th colspan="2" />
			<th>Usage</th>
			<th class="suplimentary" />
			<th class="suplimentary">supplementary <br />4.5:1 label colours</th>
		</tr>
	</thead>
	<tbody>
		{#each palette as { colour, usage }, index}
			{@const name = getColourName(colour)}
			<tr>
				<th><SwatchColourLabel {name} hex={colour} /></th>
				<td><Swatch {colour} /></td>
				<td>{usage}</td>
				{#if getLabelColour(name) !== colour}
					<td><Swatch colour={getLabelColour(name)} /></td>
					<td class="suplimentary"
						><SwatchColourLabel name={name + ' label'} hex={getLabelColour(name)} /></td
					>
				{:else}<td colspan="2" />
				{/if}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		border-collapse: collapse;
	}
	.suplimentary {
		border-left: none;
	}

	th {
		vertical-align: bottom;
		text-align: left;
		font-size: 0.8rem;
	}

	td {
		border-bottom: 1px solid #a9bed9;
		padding: 10px;
		width: 40px;
	}

	tbody th {
		border-bottom: 1px solid #a9bed9;
		padding: 10px;
	}
</style>
