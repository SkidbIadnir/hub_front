import type { LayoutLoad } from './$types';
import { setLanguage } from '$lib/i18n/stores';
import { redirect } from '@sveltejs/kit';

export const load: LayoutLoad = async ({ params }) => {
	const { lang } = params;

	// Validate the language parameter
	const supportedLocales = ['en', 'fr', 'ko'];
	if (!supportedLocales.includes(lang)) {
		// Redirect to default language if invalid locale
		throw redirect(302, '/en/dev');
	}

	// Set the language and sync with localStorage
	setLanguage(lang);

	return {
		locale: lang
	};
};
