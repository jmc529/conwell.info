<script lang="ts">
	import { icons, type IconName } from '$lib/data/icons';

	export let name: IconName;
	export let title = '';
</script>

<img src={icons[name]} alt={title || name} title={title || name} loading="lazy" />
