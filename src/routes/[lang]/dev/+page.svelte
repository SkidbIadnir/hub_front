<script lang="ts">
	import { onMount } from 'svelte';
	import { _, json } from 'svelte-i18n';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// Get translations for dynamic content
	let profile = $derived({
		name: $_('profile.name'),
		title: $_('profile.title'),
		email: $_('profile.email'),
		phone: $_('profile.phone'),
		location: $_('profile.location'),
		bio: $_('profile.bio')
	});

	let skills = $derived([
		{
			category: $_('skillCategories.frontend'),
			items: [
				$_('skills.typescript'),
				$_('skills.react'),
				$_('skills.nextjs'),
				$_('skills.sveltekit'),
				$_('skills.tailwindcss'),
				$_('skills.pwa')
			]
		},
		{
			category: $_('skillCategories.backend'),
			items: [
				$_('skills.nodejs'),
				$_('skills.nestjs'),
				$_('skills.python'),
				$_('skills.fastapi'),
				$_('skills.postgresql'),
				$_('skills.nosql'),
				$_('skills.redis')
			]
		},
		{
			category: $_('skillCategories.ai'),
			items: [$_('skills.rag'), $_('skills.llms'), $_('skills.aiChat'), $_('skills.conversational')]
		},
		{
			category: $_('skillCategories.devops'),
			items: [$_('skills.aws'), $_('skills.git'), $_('skills.agile')]
		}
	]);

	let experience = $derived($json('experience') as any[]);
	let education = $derived($json('education') as any[]);
	let certifications = $derived($json('certifications') as any[]);
	let projects = $derived($json('projects') as any[]);
	let languages = $derived($json('languages') as any[]);

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function scrollToSection(id: string) {
		isMenuOpen = false;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	onMount(() => {
		// Set up intersection observers for section detection
		const sections = document.querySelectorAll('section[id]');
		const navLinks = document.querySelectorAll('.nav-link');

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						navLinks.forEach((link) => {
							link.classList.toggle(
								'bg-primary',
								link.getAttribute('data-section') === entry.target.id
							);
							link.classList.toggle(
								'text-primary-content',
								link.getAttribute('data-section') === entry.target.id
							);
						});
					}
				});
			},
			{ threshold: 0.2 }
		);

		sections.forEach((section) => {
			observer.observe(section);
		});
	});
</script>

<div class="bg-base-100 min-h-screen">
	<!-- Header -->
	<header class="bg-base-200 sticky top-0 z-50 shadow-md">
		<div class="navbar container mx-auto">
			<div class="navbar-start">
				<div class="dropdown dropdown-bottom lg:hidden">
					<div tabindex="0" role="button" class="btn m-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/></svg
						>
					</div>
					<ul
						tabindex="-1"
						class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
					>
						<li>
							<button class="nav-link" data-section="about" onclick={() => scrollToSection('about')}
								>{$_('nav.about')}</button
							>
						</li>
						<li>
							<button
								class="nav-link"
								data-section="experience"
								onclick={() => scrollToSection('experience')}>{$_('nav.experience')}</button
							>
						</li>
						<li>
							<button
								class="nav-link"
								data-section="projects"
								onclick={() => scrollToSection('projects')}>{$_('nav.projects')}</button
							>
						</li>
						<li>
							<button
								class="nav-link"
								data-section="skills"
								onclick={() => scrollToSection('skills')}>{$_('nav.skills')}</button
							>
						</li>
						<li>
							<button
								class="nav-link"
								data-section="education"
								onclick={() => scrollToSection('education')}>{$_('nav.education')}</button
							>
						</li>
						<li>
							<button
								class="nav-link"
								data-section="contact"
								onclick={() => scrollToSection('contact')}>{$_('nav.contact')}</button
							>
						</li>
					</ul>
				</div>

				<a class="btn btn-ghost text-xl" href={`/${data.locale}/dev`}>{profile.name}</a>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					<li>
						<button class="nav-link" data-section="about" onclick={() => scrollToSection('about')}
							>{$_('nav.about')}</button
						>
					</li>
					<li>
						<button
							class="nav-link"
							data-section="experience"
							onclick={() => scrollToSection('experience')}>{$_('nav.experience')}</button
						>
					</li>
					<li>
						<button
							class="nav-link"
							data-section="projects"
							onclick={() => scrollToSection('projects')}>{$_('nav.projects')}</button
						>
					</li>
					<li>
						<button class="nav-link" data-section="skills" onclick={() => scrollToSection('skills')}
							>{$_('nav.skills')}</button
						>
					</li>
					<li>
						<button
							class="nav-link"
							data-section="education"
							onclick={() => scrollToSection('education')}>{$_('nav.education')}</button
						>
					</li>
					<li>
						<button
							class="nav-link"
							data-section="contact"
							onclick={() => scrollToSection('contact')}>{$_('nav.contact')}</button
						>
					</li>
				</ul>
			</div>
			<div class="navbar-end">
				<LanguageSwitcher />
				<button class="btn btn-primary ml-2" onclick={() => scrollToSection('contact')}
					>{$_('nav.hireMe')}</button
				>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="container mx-auto px-4">
		<!-- About Section -->
		<section id="about" class="my-16 scroll-mt-24">
			<h2 class="text-secondary mb-8 text-center text-3xl font-bold">
				{$_('sections.about.title')}
			</h2>
			<div class="hero bg-base-200 rounded-xl">
				<div class="hero-content flex-col lg:flex-row">
					<div class="avatar">
						<div class="ring-primary ring-offset-base-100 w-64 rounded-full ring ring-offset-2">
							<img src="https://placehold.co/400x400?text=NJ" alt="Profile" />
						</div>
					</div>
					<div>
						<h1 class="text-5xl font-bold">{profile.name}</h1>
						<h2 class="text-primary mt-2 text-2xl">{profile.title}</h2>
						<p class="py-6">{profile.bio}</p>
						<div class="mt-4 flex flex-wrap gap-2">
							<button class="btn btn-primary" onclick={() => scrollToSection('contact')}
								>{$_('sections.about.contactMe')}</button
							>
							<button class="btn btn-outline" onclick={() => scrollToSection('projects')}
								>{$_('sections.about.viewProjects')}</button
							>
						</div>
					</div>
				</div>
			</div>

			<div class="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
				<div class="card bg-base-200">
					<div class="card-body">
						<h2 class="card-title text-primary">{$_('sections.about.languages')}</h2>
						<ul class="mt-4 space-y-2">
							{#each languages as language}
								<li class="flex items-center">
									<span class="font-semibold">{language.name}:</span>
									<span class="ml-2">{language.level}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
				<div class="card bg-base-200">
					<div class="card-body">
						<h2 class="card-title text-primary">{$_('sections.about.additionalStrengths')}</h2>
						<ul class="mt-4 space-y-3">
							{#each certifications as cert}
								<li class="border-primary border-l-4 pl-4">
									<div class="font-semibold">{cert.name}</div>
									<div class="text-sm opacity-75">{cert.description}</div>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</section>

		<!-- Experience Section -->
		<section id="experience" class="my-16 scroll-mt-24">
			<h2 class="text-secondary mb-8 text-center text-3xl font-bold">
				{$_('sections.experience.title')}
			</h2>
			<div class="space-y-8">
				{#each experience as job}
					<div class="card bg-base-200 shadow-xl">
						<div class="card-body">
							<h3 class="card-title text-xl">{job.title}</h3>
							<div class="flex flex-col md:flex-row md:items-center md:justify-between">
								<p class="text-primary font-semibold">{job.company}</p>
								<div class="flex flex-col gap-2 md:flex-row md:items-center">
									<p class="badge badge-outline">{job.period}</p>
									{#if job.type}
										<p class="badge badge-secondary">{job.type}</p>
									{/if}
								</div>
							</div>
							<div class="divider"></div>
							<ul class="list-disc space-y-2 pl-5">
								{#each job.responsibilities as responsibility}
									<li>{responsibility}</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Projects Section -->
		<section id="projects" class="my-16 scroll-mt-24">
			<h2 class="text-secondary mb-8 text-center text-3xl font-bold">
				{$_('sections.projects.title')}
			</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each projects as project}
					<div class="card bg-base-200 shadow-xl">
						<div class="card-body">
							<h3 class="card-title text-xl">{project.name}</h3>
							{#if project.company}
								<p class="text-primary font-semibold">{project.company}</p>
							{/if}
							<p>{project.description}</p>
							<div class="my-4 flex flex-wrap gap-2">
								{#each project.technologies as tech}
									<span class="badge badge-primary">{tech}</span>
								{/each}
							</div>
							{#if project.link}
								<div class="card-actions justify-end">
									<a
										href={String(project.link)}
										target="_blank"
										rel="noopener noreferrer"
										class="btn btn-primary btn-sm"
									>
										{$_('sections.projects.viewProject')}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="ml-1 h-4 w-4"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
											/>
										</svg>
									</a>
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Skills Section -->
		<section id="skills" class="my-16 scroll-mt-24">
			<h2 class="text-secondary mb-8 text-center text-3xl font-bold">
				{$_('sections.skills.title')}
			</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each skills as skillCategory}
					<div class="card bg-base-200 shadow-xl">
						<div class="card-body">
							<h3 class="card-title mb-4 text-xl">{skillCategory.category}</h3>
							<div class="flex flex-wrap gap-3">
								{#each skillCategory.items as skill}
									<span class="badge badge-lg py-4">{skill}</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Education Section -->
		<section id="education" class="my-16 scroll-mt-24">
			<h2 class="text-secondary mb-8 text-center text-3xl font-bold">
				{$_('sections.education.title')}
			</h2>
			<div class="space-y-6">
				{#each education as edu}
					<div class="card bg-base-200 shadow-xl">
						<div class="card-body">
							<h3 class="card-title text-xl">{edu.degree}</h3>
							<div class="flex flex-col md:flex-row md:items-center md:justify-between">
								<p class="text-primary font-semibold">{edu.institution}</p>
								<div class="flex flex-col gap-2 md:flex-row md:items-center">
									<p class="badge badge-outline">{edu.year}</p>
									{#if edu.location}
										<p class="badge badge-secondary">{edu.location}</p>
									{/if}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Contact Section -->
		<section id="contact" class="my-16 scroll-mt-24">
			<h2 class="text-secondary mb-8 text-center text-3xl font-bold">
				{$_('sections.contact.title')}
			</h2>
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="card-title">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							{$_('sections.contact.email')}
						</h3>
						<p class="py-2">{profile.email}</p>
						<div class="card-actions">
							<a href={`mailto:${profile.email}`} class="btn btn-primary btn-sm"
								>{$_('sections.contact.sendEmail')}</a
							>
						</div>
					</div>
				</div>
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="card-title">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							{$_('sections.contact.phone')}
						</h3>
						<p class="py-2">{profile.phone}</p>
						<div class="card-actions">
							<a href={`tel:${profile.phone.replace(/\s+/g, '')}`} class="btn btn-primary btn-sm"
								>{$_('sections.contact.callMe')}</a
							>
						</div>
					</div>
				</div>
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="card-title">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							{$_('sections.contact.location')}
						</h3>
						<p class="py-2">{profile.location}</p>
					</div>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	/* Custom styles for active navigation */
	:global(.nav-link.bg-primary) {
		background-color: hsl(var(--p));
		color: hsl(var(--pc));
	}
	:global(.nav-link) {
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}
</style>
