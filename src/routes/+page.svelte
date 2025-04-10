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
		{#if localLanguage === 'en'}
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
		</div>
	</div>
</div>
