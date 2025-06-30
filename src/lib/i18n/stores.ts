import { writable } from 'svelte/store';
import { locale, waitLocale } from 'svelte-i18n';
import { browser } from '$app/environment';

export const currentLocale = writable('en');

// Function to change language
export function setLanguage(lang: string) {
	locale.set(lang);
	currentLocale.set(lang);

	// Store preference in localStorage
	if (browser) {
		localStorage.setItem('locale', lang);
	}
}

// Function to get stored language preference
export function getStoredLanguage(): string {
	if (browser) {
		return localStorage.getItem('locale') || 'en';
	}
	return 'en';
}

// Available languages
export const availableLanguages = [
	{ code: 'en', name: 'English' },
	{ code: 'fr', name: 'Français' },
	{ code: 'ko', name: '한국어', beta: true }
];

// Wait for locale to be ready
export async function initializeI18n(forcedLang?: string) {
	const lang = forcedLang || getStoredLanguage();
	setLanguage(lang);
	await waitLocale();
}
