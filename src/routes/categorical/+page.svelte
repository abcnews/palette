<script lang="ts">
	import CategoricalDefaultPalette from '$lib/_documentation/CategoricalDefaultPalette.svelte';

	import PaletteGender from '$lib/_documentation/PaletteGender.svelte';
	import PaletteSentement from '$lib/_documentation/PaletteSentement.svelte';
	import PalettePolitical from '$lib/_documentation/PalettePolitical.svelte';
	import OrdinalCategoricalPalette from '$lib/_documentation/OrdinalCategoricalPalette.svelte';
	import { ColourMode, OrdinalPalette, getSentimentPalette } from '$lib/palettes.js';
	import OrdinalPaletteSelector from '$lib/_documentation/OrdinalPaletteSelector.svelte';

	import { theme } from '$lib/stores.js';
	import CategoricalFocusPalette from '$lib/_documentation/CategoricalFocusPalette.svelte';
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

<CategoricalDefaultPalette {mode} />

<h4 id="focus">Focus</h4>

<CategoricalFocusPalette {mode} />

<h4>Gender</h4>

<PaletteGender {mode} />

<h4>Sentiment</h4>
<PaletteSentement {mode} />

<h4>Political</h4>
<PalettePolitical {mode} />

<h3 id="ordinal">Ordinal</h3>

<p>
	Ordinal palettes are used to visualise categorical data where the categories have some natural
	order.
</p>

<OrdinalPaletteSelector bind:selectedPalette={ordinalPalette} />
<OrdinalCategoricalPalette palette={ordinalPalette} {mode} />
