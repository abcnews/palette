<script lang="ts">
	import SwatchTable from '$lib/_documentation/SwatchTable.svelte';
	import { getSentimentPalette } from '$lib/palettes.js';
</script>

<SwatchTable palette={Object.entries(getSentimentPalette()).map(([name, colour]) => colour)} />
