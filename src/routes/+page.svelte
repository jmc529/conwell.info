<script lang="ts">
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';

	const site = 'https://jmconwell.com';
	const title = "Joseph Conwell's Portfolio";
	const description =
		'Portfolio of Joe Conwell: cook, coder, and cat-dad. Projects, work experience, and contact information.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="{site}/" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Joseph Conwell" />
	<meta property="og:url" content="{site}/" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{site}/sitemeta.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="600" />
	<meta property="og:image:alt" content="Joseph Conwell" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{site}/sitemeta.jpg" />
</svelte:head>

<main>
	<Hero />
	<AboutMe />
	<Projects />
	<Experience />
	<Contact />
</main>
