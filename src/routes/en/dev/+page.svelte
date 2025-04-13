<script lang="ts">
	import { onMount } from 'svelte';

	// Mock portfolio data
	const profile = {
		name: 'Nicolas Jurdyc',
		title: 'Web Fullstack Developer',
		email: 'n.jurdyc@proton.me',
		phone: '+33 6 73 46 26 43',
		location: 'Lyon, France',
		bio: 'I am a recently graduated computer science student with a specialization in web development. Throughout my academic journey, I have had the opportunity to work with various technologies and programming languages. Currently, I am actively seeking a full time job.'
	};

	const skills = [
		{
			category: 'Web Programming',
			items: ['JavaScript', 'TypeScript', 'NodeJs', 'SvelteKit', 'Flutter']
		},
		{ category: 'Software Programming', items: ['C++', 'C#', 'Python'] }
	];

	const experience = [
		{
			title: 'Web & AI Developer',
			company: 'Innovation Department Blueway Lyon',
			period: '09/2023 - 09/2024',
			responsibilities: [
				'Prototyping project using Large Language Model AI (GPT, Mistral)',
				'Creating the web application to access the API',
				'Deploying the application for intern testing',
				'Develop and deploy a Progressive Web App using SvelteKit, NodeJs (express)'
			]
		},
		{
			title: 'Stage Developer Python',
			company: 'ESI Group',
			period: '04/2022 - 06/2022',
			responsibilities: ['Legacy code optimization', 'Implementing new features', 'Documenting']
		}
	];

	const education = [
		{
			degree: 'Information Technologies Expert',
			institution: 'Epitech Paris',
			year: '2024'
		},
		{
			degree: 'Game Programming and Game Design',
			institution: 'Keimyung University Daegu, South Korea',
			year: '2022-2023'
		},
		{
			degree: 'Scientific Highschool Diploma',
			institution: '',
			year: '2018'
		}
	];

	const certifications = [
		{ name: 'WSET Spirit LVL 1', year: '2024' },
		{ name: 'WSET Spirit LVL 2', year: 'Ongoing' }
	];

	const projects = [
		{
			name: 'Personal Portfolio Website',
			description: 'A responsive portfolio website built with SvelteKit and TailwindCSS',
			link: 'https://nicolas-dev.vercel.app/',
			technologies: ['SvelteKit', 'TailwindCSS', 'DaisyUI']
		},
		{
			name: 'AI-Powered Assistant',
			description: 'A web application leveraging LLM APIs to create intelligent user interactions',
			technologies: ['NodeJS', 'Express', 'GPT API']
		}
	];

	const languages = [
		{ name: 'French', level: 'Mother tongue' },
		{ name: 'English', level: 'Understood, written, talked' }
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
						<h2 class="card-title text-primary">Certifications</h2>
						<ul class="mt-4 space-y-2">
							{#each certifications as cert}
								<li class="flex items-center justify-between">
									<span>{cert.name}</span>
									<span class="badge badge-primary">{cert.year}</span>
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
								<p class="badge badge-outline">{job.period}</p>
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

			<div class="mt-10">
				<div class="card bg-base-200 shadow-xl">
					<div class="card-body">
						<h3 class="card-title mb-4 text-xl">Skills Progress</h3>
						<div class="space-y-4">
							<div>
								<div class="mb-1 flex justify-between">
									<span>JavaScript/TypeScript</span>
									<span>90%</span>
								</div>
								<progress class="progress progress-primary" value="90" max="100"></progress>
							</div>
							<div>
								<div class="mb-1 flex justify-between">
									<span>SvelteKit</span>
									<span>85%</span>
								</div>
								<progress class="progress progress-primary" value="85" max="100"></progress>
							</div>
							<div>
								<div class="mb-1 flex justify-between">
									<span>NodeJS/Express</span>
									<span>80%</span>
								</div>
								<progress class="progress progress-primary" value="80" max="100"></progress>
							</div>
							<div>
								<div class="mb-1 flex justify-between">
									<span>Python</span>
									<span>75%</span>
								</div>
								<progress class="progress progress-primary" value="75" max="100"></progress>
							</div>
							<div>
								<div class="mb-1 flex justify-between">
									<span>C++</span>
									<span>65%</span>
								</div>
								<progress class="progress progress-primary" value="65" max="100"></progress>
							</div>
						</div>
					</div>
				</div>
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
								<p class="badge badge-outline">{edu.year}</p>
							</div>
						</div>
					</div>
				{/each}

				{#if certifications.length > 0}
					<div class="card bg-base-200 mt-8 shadow-xl">
						<div class="card-body">
							<h3 class="card-title text-xl">Certifications</h3>
							<div class="divider"></div>
							<ul class="space-y-3">
								{#each certifications as cert}
									<li class="flex items-center justify-between">
										<span class="font-medium">{cert.name}</span>
										<span class="badge badge-primary">{cert.year}</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/if}
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

			<div class="card bg-base-200 mt-8 shadow-xl">
				<div class="card-body">
					<h3 class="card-title mb-4 text-xl">Send me a message</h3>
					<form class="space-y-4">
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div class="form-control">
								<label class="label">
									<span class="label-text">Name</span>
								</label>
								<input type="text" placeholder="Your name" class="input input-bordered" />
							</div>
							<div class="form-control">
								<label class="label">
									<span class="label-text">Email</span>
								</label>
								<input type="email" placeholder="Your email" class="input input-bordered" />
							</div>
						</div>
						<div class="form-control">
							<label class="label">
								<span class="label-text">Subject</span>
							</label>
							<input type="text" placeholder="Message subject" class="input input-bordered" />
						</div>
						<div class="form-control">
							<label class="label">
								<span class="label-text">Message</span>
							</label>
							<textarea class="textarea textarea-bordered h-32" placeholder="Your message..."
							></textarea>
						</div>
						<div class="form-control mt-6">
							<button class="btn btn-primary">Send Message</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	</main>

	<!-- Footer -->
	<footer class="footer bg-base-200 text-base-content mt-16 p-10">
		<aside>
			<p class="text-xl font-bold">{profile.name}</p>
			<p>{profile.title}</p>
			<p class="text-sm opacity-75">© {new Date().getFullYear()} - All rights reserved</p>
		</aside>
		<nav>
			<header class="footer-title">Portfolio</header>
			<button class="link link-hover" on:click={() => scrollToSection('about')}>About</button>
			<button class="link link-hover" on:click={() => scrollToSection('experience')}
				>Experience</button
			>
			<button class="link link-hover" on:click={() => scrollToSection('projects')}>Projects</button>
		</nav>
		<nav>
			<header class="footer-title">Skills & Education</header>
			<button class="link link-hover" on:click={() => scrollToSection('skills')}>Skills</button>
			<button class="link link-hover" on:click={() => scrollToSection('education')}
				>Education</button
			>
		</nav>
		<nav>
			<header class="footer-title">Contact</header>
			<button class="link link-hover" on:click={() => scrollToSection('contact')}>Contact Me</button
			>
			<a href={`mailto:${profile.email}`} class="link link-hover">{profile.email}</a>
			<a href={`tel:${profile.phone.replace(/\s+/g, '')}`} class="link link-hover"
				>{profile.phone}</a
			>
		</nav>
	</footer>
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
