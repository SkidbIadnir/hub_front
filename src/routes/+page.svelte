<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		// Get stored language preference and redirect
		const storedLang = localStorage.getItem('locale') || 'en';
		goto(`/${storedLang}/dev`);
	});
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<h1 class="mb-4 text-4xl font-bold">This website is under construction</h1>
	<p class="mb-4">Please come back later.</p>

	<p class="mb-4">
		You can still check for the code at <a
			class="text-blue-500 hover:underline"
			href="https://github.com/SkidbIadnir/hub_front"
			target="_blank">https://github.com/SkidbIadnir/hub_front</a
		>
	</p>
	<p class="mb-4">
		But please note that the code does not reflect the future design or functionality of the
		website.
	</p>
	<p class="mb-4">Thank you for your understanding!</p>
	<p class="text-sm text-gray-500">Redirecting to developer profile...</p>
</div>
