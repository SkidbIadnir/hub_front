import { describe, test, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

// Mock SvelteKit navigation
vi.mock('$app/navigation', () => ({
	goto: vi.fn()
}));

describe('/+page.svelte', () => {
	beforeEach(() => {
		// Mock localStorage
		Object.defineProperty(window, 'localStorage', {
			value: {
				getItem: vi.fn(() => 'en'),
				setItem: vi.fn(),
				removeItem: vi.fn(),
				clear: vi.fn()
			},
			writable: true
		});
	});

	test('should render h1', () => {
		render(Page);
		expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
	});
});
