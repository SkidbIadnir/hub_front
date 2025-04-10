<script lang="ts">
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	import uk from '../assets/flags/uk.png';
	import fr from '../assets/flags/fr.png';

	// Props
	export let lang = 'en';

	// Language configuration
	const languageOptions = [
		{ name: 'English', code: 'en', flag: uk },
		{ name: 'Français', code: 'fr', flag: fr }
	];

	// Derived values using reactive declarations
	$: currentLanguage = languageOptions.find((l) => l.code === lang) || languageOptions[0];
	$: selectedLanguage = currentLanguage.name;
	$: selectedLanguageFlag = currentLanguage.flag;

	onMount(async () => {
		// Initialize from localStorage if available
		const savedLang = localStorage.getItem('language');
		if (savedLang) {
			lang = savedLang;
			await tick(); // Ensure the UI updates after the assignment
		}
	});

	function changeLanguage(newLang: string) {
		lang = newLang;
		localStorage.setItem('language', lang);
	}
</script>

<div class="dropdown">
	<div tabindex="0" role="button" class="btn m-1">
		<img src={selectedLanguageFlag} alt={selectedLanguage} class="h-5 w-5" />
		<span class="ml-2">{selectedLanguage}</span>
	</div>
	<ul class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
		{#each languageOptions as language}
			<li>
				<button
					on:click={() => changeLanguage(language.code)}
					class="flex items-center gap-2"
					aria-selected={lang === language.code}
				>
					<img src={language.flag} alt={language.name} class="h-5 w-5" />
					<span>{language.name}</span>
				</button>
			</li>
		{/each}
	</ul>
</div>
