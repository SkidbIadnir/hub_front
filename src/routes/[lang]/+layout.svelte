<script lang="ts">
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';
	import { initializeI18n } from '$lib/i18n/stores';

	let { children, data }: { children: any; data: LayoutData } = $props();

	onMount(async () => {
		// Force the language from the URL parameter
		await initializeI18n(data.locale);
	});
</script>

{@render children()}
