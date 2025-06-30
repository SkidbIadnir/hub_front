<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import LanguageDropdown from '$lib/components/LanguageDropdown.svelte';

	let localLanguage: string = 'en';

	onMount(() => {
		// Initialize from localStorage if available
		localLanguage = localStorage.getItem('language') || 'en';
	});

	const setProfile = (profile: string) => {
		localStorage.setItem('profile', profile);
		goto(`/${localLanguage}/${profile}`);
	};
</script>

<div class="">
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
		<a class="btn btn-primary" href="/dev"> Go to the developer profile </a>
		<!-- Uncomment the following section to display a welcome message and language selection -->
		<!-- {#if localLanguage === 'en'}
			<h1 class="mb-4 text-4xl font-bold">Welcome to my portfolio</h1>
			<p class="mb-4">Choose your language and profile:</p>
		{:else if localLanguage === 'fr'}
			<h1 class="mb-4 text-4xl font-bold">Bienvenue sur mon portfolio</h1>
			<p class="mb-4">Choisissez votre langue et votre profil :</p>
		{/if}
		<LanguageDropdown bind:lang={localLanguage} />
		<div class="mt-4 flex gap-4">
			<button on:click={() => setProfile('dev')} class="btn btn-primary">
				{localLanguage === 'en' ? 'Developer' : 'Développeur'}
			</button>
			<button on:click={() => setProfile('spirit')} class="btn btn-secondary">
				{localLanguage === 'en' ? 'Spirit Enthusiast' : 'Amateur de Spiritueux'}
			</button>
		</div> -->
	</div>
</div>
