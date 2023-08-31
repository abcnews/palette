<script lang="ts">
	import { getColourName, getLabelColour } from '$lib/colours.js';

	import Swatch from '$lib/_documentation/Swatch.svelte';
	import SwatchColourLabel from '$lib/_documentation/SwatchColourLabel.svelte';
	export let palette: string[];
</script>

<table>
	<thead>
		<tr>
			<th />
			{#each palette as _, category}
				<th class="rotate">
					<span class="space" aria-hidden="true">
						{category + 1}
						{#if category === 0}category{:else}categories{/if}
					</span>
					<span class="display">
						{category + 1}
						{#if category === 0}category{:else}categories{/if}
					</span>
				</th>
			{/each}
			<th class="rotate"><span /></th>
			<th class="suplimentary" />
			<th class="suplimentary">supplementary <br />4.5:1 label colours</th>
		</tr>
	</thead>
	<tbody>
		{#each palette as colour, index}
			{@const name = getColourName(colour)}
			<tr>
				<th><SwatchColourLabel {name} hex={colour} /></th>
				{#each palette as _, catIdx}
					<td
						>{#if catIdx >= index}<Swatch {colour} />{/if}</td
					>
				{/each}
				{#if index === 0}
					<td class="use-order">Use in this order</td>
				{/if}
				{#if index === 1}
					<td class="use-order content" rowspan={palette.length - 1}
						><span class="arrow">↓</span></td
					>
				{/if}
				{#if getLabelColour(name) !== colour}
					<td><Swatch colour={getLabelColour(name)} /></td>
					<td class="suplimentary"
						><SwatchColourLabel name={name + ' label'} hex={getLabelColour(name)} /></td
					>
				{/if}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.rotate {
		white-space: nowrap;
		/* vertical-align: middle; */
		/* text-align: left; */
		text-align: left;
		writing-mode: vertical-lr;
		padding-top: 1.6em;
		border-right: 1px solid #a9bed9;
		transform: rotate(180deg) translate(100%, -100%) rotate(45deg);
		transform-origin: top right;
		/* transform: rotate(180deg); */
	}

	.suplimentary {
		border-left: none;
	}

	th.suplimentary {
		text-align: left;
		vertical-align: bottom;
		font-size: 0.8rem;
		padding: 10px;
	}
	.use-order {
		vertical-align: top;
		font-size: 0.6rem;
		font-style: italic;
		font-weight: 300;
		text-align: center;
		line-height: 1.1;
		border-bottom: none;
	}

	.arrow {
		font-size: 1rem;
		font-style: normal;
		transform-origin: center top;
		transform: scaleY(300%);
		display: block;
	}

	.space {
		visibility: hidden;
	}

	.display {
		position: absolute;
		top: 1.6em;
		right: 12px;
	}

	td {
		border-left: 1px solid #a9bed9;
		border-bottom: 1px solid #a9bed9;
		padding: 10px;
		width: 40px;
	}

	tbody th {
		border-bottom: 1px solid #a9bed9;
		padding: 10px;
	}
</style>
