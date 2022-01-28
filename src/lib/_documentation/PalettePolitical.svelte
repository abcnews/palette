<script type="ts">
	import SwatchTable from '$lib/_documentation/SwatchTable.svelte';
	import { getPoliticalPalette } from '$lib/palettes';
</script>

<SwatchTable palette={Object.entries(getPoliticalPalette()).map(([name, colour]) => colour)} />
