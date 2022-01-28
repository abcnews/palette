<script type="ts">
	import SwatchTable from '$lib/_documentation/SwatchTable.svelte';
	import { getSentimentPalette } from '$lib/palettes';
</script>

<SwatchTable palette={Object.entries(getSentimentPalette()).map(([name, colour]) => colour)} />
