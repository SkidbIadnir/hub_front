<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { _ } from 'svelte-i18n';

	const currentLang = $page.params.lang || 'en';

	function navigateToProfile(profile: string) {
		goto(`/${currentLang}/${profile}`);
	}
</script>

<div class="bg-base-100 flex min-h-screen items-center justify-center p-4">
	<div class="container mx-auto max-w-6xl">
		<!-- Header Section -->
		<div class="mb-12 text-center">
			<h1 class="text-primary mb-4 text-4xl font-bold md:text-6xl">
				{$_('welcome.title', { default: 'Welcome' })}
			</h1>
			<p class="text-base-content/80 mx-auto max-w-2xl text-xl md:text-2xl">
				{$_('welcome.subtitle', { default: 'Choose your adventure and discover my world' })}
			</p>
		</div>

		<!-- Profile Selection Cards -->
		<div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
			<!-- Developer Profile Card -->
			<div
				class="card bg-base-200 group transform cursor-pointer shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
				onclick={() => navigateToProfile('dev')}
				role="button"
				tabindex="0"
				onkeydown={(e) => e.key === 'Enter' && navigateToProfile('dev')}
			>
				<div class="card-body p-8 text-center">
					<!-- Icon/Avatar for Dev -->
					<div
						class="bg-primary group-hover:bg-secondary mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full transition-colors"
					>
						<svg class="text-primary-content h-12 w-12" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>

					<h2 class="text-primary mb-4 text-3xl font-bold">
						{$_('profiles.developer.title', { default: 'Developer' })}
					</h2>

					<p class="text-base-content/70 mb-6 text-lg leading-relaxed">
						{$_('profiles.developer.description', {
							default:
								"Explore my technical journey, projects, and coding adventures. Discover the tools, frameworks, and solutions I've built."
						})}
					</p>

					<!-- Tech Stack Preview -->
					<div class="mb-6 flex flex-wrap justify-center gap-2">
						<span class="badge badge-secondary">TypeScript</span>
						<span class="badge badge-secondary">Svelte</span>
						<span class="badge badge-secondary">Node.js</span>
						<span class="badge badge-secondary">Python</span>
					</div>

					<div class="card-actions justify-center">
						<button class="btn btn-primary btn-lg group-hover:btn-secondary transition-colors">
							{$_('profiles.developer.cta', { default: 'Enter Dev World' })}
							<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<!-- Spirits Enthusiast Profile Card -->
			<div
				class="card bg-base-200 group transform cursor-pointer shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
				onclick={() => navigateToProfile('spirit')}
				role="button"
				tabindex="0"
				onkeydown={(e) => e.key === 'Enter' && navigateToProfile('spirit')}
			>
				<div class="card-body p-8 text-center">
					<!-- Icon/Avatar for Spirits -->
					<div
						class="bg-accent group-hover:bg-secondary mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full transition-colors"
					>
						<svg class="text-accent-content h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
							/>
						</svg>
					</div>

					<h2 class="text-accent mb-4 text-3xl font-bold">
						{$_('profiles.spirits.title', { default: 'Spirits Enthusiast' })}
					</h2>

					<p class="text-base-content/70 mb-6 text-lg leading-relaxed">
						{$_('profiles.spirits.description', {
							default:
								'Dive into my passion for fine spirits, tastings, and the art of distillation. Experience my journey through flavors and craftsmanship.'
						})}
					</p>

					<!-- Spirits Categories Preview -->
					<div class="mb-6 flex flex-wrap justify-center gap-2">
						<span class="badge badge-accent badge-outline">Whisky</span>
						<span class="badge badge-accent badge-outline">Rum</span>
						<span class="badge badge-accent badge-outline">Gin</span>
						<span class="badge badge-accent badge-outline">Cognac</span>
					</div>

					<div class="card-actions justify-center">
						<button class="btn btn-accent btn-lg group-hover:btn-secondary transition-colors">
							{$_('profiles.spirits.cta', { default: 'Enter Spirits World' })}
							<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Additional Info Section -->
		<div class="mt-16 text-center">
			<p class="text-base-content/60 mx-auto max-w-xl">
				{$_('welcome.footer', {
					default:
						'Both worlds represent different facets of my passion and expertise. Feel free to explore both!'
				})}
			</p>
		</div>
	</div>
</div>

<style>
	.card {
		background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.card:hover {
		background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
		border-color: rgba(255, 255, 255, 0.2);
	}

	/* Custom responsive breakpoints for better mobile experience */
	@media (max-width: 640px) {
		.card-body {
			padding: 1.5rem !important;
		}

		.text-4xl {
			font-size: 2.5rem;
		}

		.text-xl {
			font-size: 1.25rem;
		}
	}
</style>
