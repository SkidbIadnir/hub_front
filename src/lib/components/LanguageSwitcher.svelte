<script lang="ts">
	import { setLanguage, availableLanguages, currentLocale } from '$lib/i18n/stores';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import ukFlag from '$lib/assets/flags/uk.png';
	import frFlag from '$lib/assets/flags/fr.png';
	import krFlag from '$lib/assets/flags/kr.png';

	// Map language codes to imported flag images
	const flagMap: Record<string, string> = {
		en: ukFlag,
		fr: frFlag,
		ko: krFlag
	};

	function handleLanguageChange(langCode: string) {
		setLanguage(langCode);

		// Close the dropdown by blurring the button
		const dropdown = document.activeElement as HTMLElement;
		dropdown?.blur();

		// Navigate to the new language route
		const currentPath = $page.url.pathname;
		// Remove current language from path and add new language
		const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '') || '/dev';
		goto(`/${langCode}${pathWithoutLang}`);
	}
</script>

<div class="dropdown dropdown-end">
	<div tabindex="0" role="button" class="btn btn-ghost btn-sm">
		{#each availableLanguages as lang}
			{#if lang.code === $currentLocale}
				<img src={flagMap[lang.code]} alt={lang.name} class="h-4 w-6 rounded-sm object-cover" />
				<span class="hidden sm:inline">{lang.name}</span>
			{/if}
		{/each}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</div>
	<ul class="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
		{#each availableLanguages as lang}
			<li>
				<button
					class="flex items-center gap-2"
					class:active={lang.code === $currentLocale}
					onclick={() => handleLanguageChange(lang.code)}
				>
					<img src={flagMap[lang.code]} alt={lang.name} class="h-4 w-6 rounded-sm object-cover" />
					<span class="flex-1">{lang.name}</span>
					{#if lang.beta}
						<span class="badge badge-primary badge-xs">Beta</span>
					{/if}
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
	.active {
		background-color: hsl(var(--p));
		color: hsl(var(--pc));
	}
</style>
