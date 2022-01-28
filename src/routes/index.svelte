<script type="ts">
	import { scaleDiverging, scaleLinear, scaleSequential } from 'd3-scale';

	import { getData } from '$lib/data';

	import ExampleBarChart from '$lib/_examples/ExampleBarChart.svelte';

	import { getDivergentPaletteInterpolator, getContinuousPaletteInterpolator } from '$lib/palettes';
	import PaletteNominalDefault from '$lib/_documentation/PaletteNominalDefault.svelte';
	import PaletteNominalExtended from '$lib/_documentation/PaletteNominalExtended.svelte';
	import PaletteGender from '$lib/_documentation/PaletteGender.svelte';
	import PaletteSentement from '$lib/_documentation/PaletteSentement.svelte';
	import PalettePolitical from '$lib/_documentation/PalettePolitical.svelte';
	import Stripes from '$lib/chart-components/Stripes.svelte';
	import { onMount } from 'svelte';

	const dataPromise = getData();

	onMount(() => {
		dataPromise
			.then((d) => console.log('promise fulfilled'))
			.catch((d) => console.log('promise rejected :>> ', d));
	});

	let value: number;
	$: value = 0.5;
</script>

<p>The purpose of this document, etc...</p>

<h2>Default palette</h2>
<p>
	The default qualitative palette should be the first choice for most charts that use categorical
	data. This palette has colours for up to five categories, not including categories that will be
	emphasised or de-emphasised. The descending order of colours is optimised to enhance
	discriminatability when coloured chart elements are ordered e.g. stacked bar charts, stacked area
	charts, chart keys. When chart elements are not ordered e.g. scatter plots, use the colours in the
	order best suited to distriminate between data points, instead of in the descending order shown
	here.
</p>
<p>
	Orange can be used to emphasise one data point. Grey can be used to de-emphasise multiple data
	points of less importance. These focus and de-focus colours can be used any time with the default
	palette but never with the extended palette or by themselves.
</p>

<PaletteNominalDefault />

<h2>Extended palette</h2>
<p>
	The extended qualitative palette has been optimised for perceptual differentiation and colour
	vision deficiencies and should be used for categorical data when the default palette doesn’t
	discriminate enough between small elements ie. line charts, scatterplots. This palette has colours
	for up to seven categories. The descending order of colours is optimised to enhance
	discriminatability when coloured chart elements are ordered e.g. stacked bar charts, stacked area
	charts, chart keys. When chart elements are not ordered e.g. scatter plots, use the colours in the
	order best suited to discriminate between data points, instead of in the descending order shown
	here.
</p>
<p>Emphasis Orange-1 and de-emphasis Grey-1 are never used in conjunction with this palette.</p>

<PaletteNominalExtended />

<h2>Gender palette</h2>
<p>Use when the data is categorised by gender.</p>

<PaletteGender />

<h2>Positive/Negative sentement palette</h2>
<p>Use when the data carries inherent positive or negative meaning.</p>
<PaletteSentement />

<h2>Political party palette</h2>
<p>Use only for categorical data representing political parties.</p>
<PalettePolitical />

<ExampleBarChart />

{#await dataPromise}
	<p>Loading stripes data ...</p>
{:then data}
	<p>Stripes</p>
	<Stripes {data} scale={scaleSequential([-0.8, 1.5], getContinuousPaletteInterpolator('red'))} />
{:catch error}
	<p>Error loading data: {error}</p>
{/await}

<input type="range" min="0" max="1" step="0.01" bind:value />
<div>value: {value}</div>
<div
	style:borderRadius="50%"
	style:width="30px"
	style:height="30px"
	style:background={getDivergentPaletteInterpolator(['green', 'purple'])(value)}
/>

<style>
</style>
