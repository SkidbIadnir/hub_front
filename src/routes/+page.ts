import { redirect } from '@sveltejs/kit';
import { browser } from '$app/environment';

export const load = async () => {
	// Get stored language preference or default to 'en'
	let language = 'en';
	if (browser) {
		language = localStorage.getItem('locale') || 'en';
	}

	// Redirect to language-specific route
	throw redirect(302, `/${language}/dev`);
};
