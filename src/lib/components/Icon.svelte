<script lang="ts">
	import { icons, type IconName } from '$lib/data/icons';

	let { name, title = '' }: { name: IconName; title?: string } = $props();
</script>

<img src={icons[name]} alt={title || name} title={title || name} loading="lazy" />
