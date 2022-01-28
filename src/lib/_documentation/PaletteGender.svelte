<script type="ts">
	import SwatchTable from '$lib/_documentation/SwatchTable.svelte';
	import { getGenderPalette } from '$lib/palettes';
</script>

<SwatchTable palette={Object.entries(getGenderPalette()).map(([name, colour]) => colour)} />
