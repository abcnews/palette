<script lang="ts">
	import { scaleLinear } from 'd3-scale';
	import { extent as getExtent } from 'd3-array';
	import { getDefaultCategoricalPalette } from '$lib/palettes.js';

	type Data = {
		label: string;
		value: number;
	};

	const getExtentOrZero = (data: Data[]): [number, number] => {
		const ext = getExtent(data, (d: Data) => d.value);
		return typeof ext[0] === 'undefined' || typeof ext[1] === 'undefined' ? [0, 0] : ext;
	};

	export let data: Data[];
	export let extent: [number, number] = getExtentOrZero(data);

	data.reduce(
		(acc, d) => {
			return [Math.min(acc[0], d.value), Math.max(acc[1], d.value)];
		},
		[Infinity, -Infinity]
	);

	$: xScale = scaleLinear().domain(extent).range([0, width]);
	let width = 0;
	export let fill = getDefaultCategoricalPalette(1)[0];
</script>

<div bind:clientWidth={width}>
	<ul>
		{#each data as d}
			<li class="row">
				<span class="bar-label">{d.label}</span>
				<span class="bar" style:background={fill} style:width={xScale(d.value) + 'px'} />
				<span class="bar-value">{d.value}</span>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		display: block;
		margin: 0;
		padding: 0;
	}

	.row {
		margin: 1em 0;
		padding: 0;
		list-style: none;
		position: relative;
		font-size: 14px;
		line-height: 15px;
		display: flex;
		flex-direction: row;
		justify-content: left;
	}

	.bar,
	.bar-label,
	.bar-value {
		display: inline-block;
	}

	.bar {
		display: block;
		position: relative;
		margin-top: 5px;
	}
</style>
