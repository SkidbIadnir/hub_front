<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';

	onMount(() => {
		// Get stored language preference and redirect
		const storedLang = localStorage.getItem('locale') || 'en';
		// Redirect to the developer profile page
		// goto(`/${storedLang}/dev`);
	});
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<div class="hero flex flex-col items-center justify-center text-center">
		<h1 class="mb-4 text-4xl font-bold">Welcome to my Portfolio</h1>
		<p class="mb-8 text-lg">Explore my projects and skills.</p>
		<p class="mb-8 text-lg">Select your language:</p>
		<!-- Language switcher component -->
		<LanguageSwitcher />
	</div>
</div>
