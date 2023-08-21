<script lang="ts">
	import PaletteNominalDefault from '$lib/_documentation/PaletteNominalDefault.svelte';
	import PaletteNominalExtended from '$lib/_documentation/PaletteNominalExtended.svelte';
	import PaletteGender from '$lib/_documentation/PaletteGender.svelte';
	import PaletteSentement from '$lib/_documentation/PaletteSentement.svelte';
	import PalettePolitical from '$lib/_documentation/PalettePolitical.svelte';
	import OrdinalCategoricalPalette from '$lib/_documentation/OrdinalCategoricalPalette.svelte';
	import { ColourMode, OrdinalPalette } from '$lib/palettes.js';
	import OrdinalPaletteSelector from '$lib/_documentation/OrdinalPaletteSelector.svelte';

	import { theme } from '$lib/stores.js';
	let ordinalPalette: OrdinalPalette = OrdinalPalette.Blue;
	let mode: ColourMode = $theme === 'dark' ? ColourMode.Dark : ColourMode.Light;
	$: mode = $theme === 'dark' ? ColourMode.Dark : ColourMode.Light;
</script>

<h2 id="categorical">Categorical</h2>
<p>
	Categorical palettes come in two broad flavours: nominal and ordinal. Nominal palettes are used to
	represent categorical data with no inherent order while ordinal palettes are used to represent
	data where there is some natural order for the categories being visualised.
</p>

<h3 id="nominal">Nominal</h3>

<h4 id="generic">Generic — default</h4>

<p>
	It's usually wise to limit the number of categories simultaneously visualised and there are
	inherrent limits to the number that it's possible to distinctly represent using colour.
</p>

<PaletteNominalDefault />

<h4>Generic - extended</h4>
<p>
	The extended qualitative palette has been optimised for perceptual differentiation and colour
	vision deficiencies and should be used for categorical data when the default palette doesn't
	discriminate enough between small elements ie. line charts, scatterplots. This palette has colours
	for up to seven categories. The descending order of colours is optimised to enhance
	discriminatability when coloured chart elements are ordered e.g. stacked bar charts, stacked area
	charts, chart keys. When chart elements are not ordered e.g. scatter plots, use the colours in the
	order best suited to discriminate between data points, instead of in the descending order shown
	here.
</p>
<p>Emphasis Orange-1 and de-emphasis Grey-1 are never used in conjunction with this palette.</p>

<PaletteNominalExtended />

<h4 id="semantic">Semantic</h4>

<p>
	Some palettes are specifically designed for visualising certain categories where the colour has
	semantic meaning.
</p>

<h5>Gender</h5>
<p>Use when the data is categorised by gender.</p>

<PaletteGender />

<h5>Positive/Negative sentement palette</h5>
<p>Use when the data carries inherent positive or negative meaning.</p>
<PaletteSentement />

<h5>Political party palette</h5>
<p>Use only for categorical data representing political parties.</p>
<PalettePolitical />

<h3 id="ordinal">Ordinal</h3>

<p>
	Ordinal palettes are used to visualise categorical data where the categories have some natural
	order.
</p>

<OrdinalPaletteSelector bind:selectedPalette={ordinalPalette} />
<OrdinalCategoricalPalette palette={ordinalPalette} {mode} />
