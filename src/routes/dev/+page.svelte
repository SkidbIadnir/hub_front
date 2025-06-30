<script lang="ts">
	import { onMount } from 'svelte';

	// Portfolio data
	const profile = {
		name: 'Nicolas Jurdyc',
		title: 'Full-Stack Developer | AI Solutions & Web Technologies',
		email: 'n.jurdyc@proton.me',
		phone: '+33 06 73 46 26 43',
		location: '259 rue Gilbert Descrottes, 69360 Solaize, France',
		bio: 'Full-stack developer with hands-on experience in AI-driven applications and modern web technologies. Proven track record in developing production-ready AI solutions using React, TypeScript, and Python. Passionate about AI agents and conversational interfaces, with experience building scalable web applications from concept to deployment.'
	};

	const skills = [
		{
			category: 'Frontend Development',
			items: [
				'TypeScript/JavaScript',
				'React.js',
				'Next.js',
				'SvelteKit',
				'TailwindCSS',
				'Progressive Web Applications (PWA)'
			]
		},
		{
			category: 'Backend Development',
			items: [
				'Node.js',
				'TypeScript/NestJS',
				'Python',
				'FastAPI',
				'PostgreSQL',
				'NoSQL Databases',
				'Redis'
			]
		},
		{
			category: 'AI & Machine Learning',
			items: [
				'Retrieval-Augmented Generation (RAG)',
				'Large Language Models (LLMs)',
				'AI Chat Applications',
				'Conversational Interfaces'
			]
		},
		{
			category: 'DevOps & Tools',
			items: ['AWS Cloud Services', 'Git', 'Agile Development']
		}
	];

	const experience = [
		{
			title: 'Innovation Department Developer',
			company: 'Blueway, Lyon France',
			period: '09/2023 - 09/2024',
			type: 'Internship & Fixed-Term Contract',
			responsibilities: [
				'Developed production-ready AI chat application using React and SvelteKit, implementing conversational user interfaces from concept to deployment',
				'Built Retrieval-Augmented Generation (RAG) system using Python and FastAPI, integrating multiple LLMs for enhanced AI agent capabilities',
				'Created Progressive Web Application using SvelteKit and TailwindCSS, focusing on user experience optimization and performance',
				'Collaborated with cross-functional teams to deliver AI-powered solutions, gaining deep experience in AI agent development and deployment'
			]
		},
		{
			title: 'Python Developer',
			company: 'ESI Group, Lyon France',
			period: '04/2022 - 08/2022',
			type: 'Internship',
			responsibilities: [
				'Optimized legacy software systems improving performance and maintainability for enterprise-level applications',
				'Developed comprehensive technical documentation ensuring code quality and knowledge transfer',
				'Collaborated with international development teams on software enhancement projects, demonstrating strong communication skills in English'
			]
		}
	];

	const education = [
		{
			degree: "Master's Degree",
			institution: 'Epitech Paris',
			year: '2018-2024',
			location: 'Lyon/Berlin'
		},
		{
			degree: 'Video Game Development & Game Design Certification',
			institution: 'Keimyung University',
			year: '2022-2023',
			location: 'Daegu, South Korea'
		}
	];

	const certifications = [
		{
			name: 'AI Agent Development',
			description: 'Hands-on experience with conversational AI and chat-based user experiences'
		},
		{
			name: 'Startup Experience',
			description: 'Thrived in fast-paced environment with focus on rapid iteration and deployment'
		},
		{
			name: 'Self-Starting',
			description: 'Demonstrated ability to take projects from concept to production independently'
		},
		{
			name: 'Detail-Oriented',
			description: 'Strong focus on code quality, testing, and documentation'
		}
	];

	const projects = [
		{
			name: 'AI-Powered RAG System',
			description:
				'Designed and implemented end-to-end AI solution with chat interface, integrating multiple LLMs for enhanced conversational capabilities. Built scalable backend architecture using FastAPI and modern web frameworks.',
			company: 'Blueway',
			technologies: ['Python', 'FastAPI', 'React', 'LLMs', 'RAG']
		},
		{
			name: 'Dynafood - Full-Stack Platform',
			description:
				'2.5-year group project where I led agile development team for comprehensive platform including mobile app, website, and browser extension. Developed associated backend systems with focus on scalability and performance.',
			technologies: ['Full-Stack', 'Mobile App', 'Browser Extension', 'Agile']
		},
		{
			name: 'Statistics Tracking Platform',
			description:
				'Built and deployed full-stack web application demonstrating real-world development skills.',
			link: 'https://stat.skidhub.fr/',
			technologies: ['Full-Stack', 'Web Application', 'Deployment']
		},
		{
			name: 'Portfolio Website',
			description: 'A responsive portfolio website built with SvelteKit and TailwindCSS',
			link: 'https://nicolas-dev.vercel.app/',
			technologies: ['SvelteKit', 'TailwindCSS', 'DaisyUI']
		}
	];

	const languages = [
		{ name: 'French', level: 'Native' },
		{ name: 'English', level: 'Proficient (Read, Write, Speak)' }
	];

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
							<button
								class="nav-link"
								data-section="about"
								on:click={() => scrollToSection('about')}>About</button
							>
						</li>
						<li>
							<button
								class="nav-link"
								data-section="experience"
								on:click={() => scrollToSection('experience')}>Experience</button
							>
						</li>
						<li>
							<button
								class="nav-link"
								data-section="projects"
								on:click={() => scrollToSection('projects')}>Projects</button
							>
						</li>
						<li>
							<button
								class="nav-link"
								data-section="skills"
								on:click={() => scrollToSection('skills')}>Skills</button
							>
						</li>
						<li>
							<button
								class="nav-link"
								data-section="education"
								on:click={() => scrollToSection('education')}>Education</button
							>
						</li>
						<li>
							<button
								class="nav-link"
								data-section="contact"
								on:click={() => scrollToSection('contact')}>Contact</button
							>
						</li>
					</ul>
				</div>

				<a class="btn btn-ghost text-xl" href="/en/dev">{profile.name}</a>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					<li>
						<button class="nav-link" data-section="about" on:click={() => scrollToSection('about')}
							>About</button
						>
					</li>
					<li>
						<button
							class="nav-link"
							data-section="experience"
							on:click={() => scrollToSection('experience')}>Experience</button
						>
					</li>
					<li>
						<button
							class="nav-link"
							data-section="projects"
							on:click={() => scrollToSection('projects')}>Projects</button
						>
					</li>
					<li>
						<button
							class="nav-link"
							data-section="skills"
							on:click={() => scrollToSection('skills')}>Skills</button
						>
					</li>
					<li>
						<button
							class="nav-link"
							data-section="education"
							on:click={() => scrollToSection('education')}>Education</button
						>
					</li>
					<li>
						<button
							class="nav-link"
							data-section="contact"
							on:click={() => scrollToSection('contact')}>Contact</button
						>
					</li>
				</ul>
			</div>
			<div class="navbar-end">
				<button class="btn btn-primary" on:click={() => scrollToSection('contact')}>Hire Me</button>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="container mx-auto px-4">
		<!-- About Section -->
		<section id="about" class="my-16 scroll-mt-24">
			<h2 class="text-secondary mb-8 text-center text-3xl font-bold">About Me</h2>
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
							<button class="btn btn-primary" on:click={() => scrollToSection('contact')}
								>Contact Me</button
							>
							<button class="btn btn-outline" on:click={() => scrollToSection('projects')}
								>View Projects</button
							>
						</div>
					</div>
				</div>
			</div>

			<div class="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
				<div class="card bg-base-200">
					<div class="card-body">
						<h2 class="card-title text-primary">Languages</h2>
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
						<h2 class="card-title text-primary">Additional Strengths</h2>
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
			<h2 class="text-secondary mb-8 text-center text-3xl font-bold">Work Experience</h2>
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
			<h2 class="text-secondary mb-8 text-center text-3xl font-bold">Projects</h2>
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
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										class="btn btn-primary btn-sm"
									>
										View Project
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
			<h2 class="text-secondary mb-8 text-center text-3xl font-bold">Technical Skills</h2>
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
			<h2 class="text-secondary mb-8 text-center text-3xl font-bold">Education & Training</h2>
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
			<h2 class="text-secondary mb-8 text-center text-3xl font-bold">Contact Me</h2>
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
							Email
						</h3>
						<p class="py-2">{profile.email}</p>
						<div class="card-actions">
							<a href={`mailto:${profile.email}`} class="btn btn-primary btn-sm">Send Email</a>
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
							Phone
						</h3>
						<p class="py-2">{profile.phone}</p>
						<div class="card-actions">
							<a href={`tel:${profile.phone.replace(/\s+/g, '')}`} class="btn btn-primary btn-sm"
								>Call Me</a
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
							Location
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
	.nav-link.bg-primary {
		background-color: hsl(var(--p));
		color: hsl(var(--pc));
	}
	.nav-link {
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
	}
</style>
