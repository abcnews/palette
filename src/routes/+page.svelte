<script lang="ts">
	import ExampleBarChart from '$lib/_examples/ExampleBarChart.svelte';
	import PaletteNominalDefault from '$lib/_documentation/PaletteNominalDefault.svelte';
	import PaletteNominalExtended from '$lib/_documentation/PaletteNominalExtended.svelte';
	import PaletteGender from '$lib/_documentation/PaletteGender.svelte';
	import PaletteSentement from '$lib/_documentation/PaletteSentement.svelte';
	import PalettePolitical from '$lib/_documentation/PalettePolitical.svelte';
	import SequentialPaletteExplorer from '$lib/_documentation/SequentialPaletteExplorer.svelte';
	import OrdinalCategoricalPaletteExplorer from '$lib/_documentation/OrdinalCategoricalPaletteExplorer.svelte';
	export let data;
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

<h2>Sequential palettes</h2>

<p>
	Sequential palettes are used for choropleth maps or data visualisations where overall pattern is
	the key takeway (eg. heat maps) and the values have an inherent order (eg. 0% to 100%).
</p>
<p>
	These palettes shift hue, shade, and saturation as they progress from least (Sequential Grey-0) to
	most (Sequential Black-10). They have been created to be friendly to all forms of colour vision
	deficiency. Blue is the default and should be used in most circumstances but alternative palettes
	are provided for when the default blue doesn’t fit the tone of the visualisation / story.
</p>
<p>
	In most cases the continuous scale will be used, but discreet steps are provided for when you want
	to prioritise quick readability over nuance, or when there’s a important logic to bucketizing the
	data this way. Note: The colour steps here are provided just for reference. These palettes will
	eventually be provided in a programmed package for use with bespoke chart creation. This package
	will provide the specific colours for stepped palettes automatically based on the number of steps
	required. Each colour in the sequence will have the same contrast ratio with the colour preceding
	it and the colour following it.
</p>
<p>
	An AA contrast compliant categorical palette with five perceptually distinct colours has also been
	provided for each colour group. This is for use in charts where the data follows an inherent order
	but the seperate categorical values are important rather than overall patttern. For example a line
	chart with four categories— 0-25%, 26-50%, 51-75%, 76-100%.
</p>

<SequentialPaletteExplorer data={data.globalAverageTemperature} />

<h2>Ordinal categorical palettes</h2>

<OrdinalCategoricalPaletteExplorer />

<style>
</style>
