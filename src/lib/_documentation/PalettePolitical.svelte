<script lang="ts">
	import SwatchTableX from '$lib/_documentation/SwatchTableX.svelte';
	import { ColourMode, getPoliticalPalette } from '$lib/palettes.js';
	export let mode: ColourMode;
</script>

<SwatchTableX palette={Object.entries(getPoliticalPalette(mode)).map(([name, colour]) => colour)} />
