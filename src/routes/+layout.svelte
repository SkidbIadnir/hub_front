<script lang="ts">
	import '../app.css';
	import '../lib/i18n';
	import { onMount } from 'svelte';
	import { initializeI18n } from '$lib/i18n/stores';

	let { children } = $props();

	onMount(async () => {
		await initializeI18n();
	});
</script>

{@render children()}
