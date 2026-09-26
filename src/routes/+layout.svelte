<script lang="ts">
	import 'chota';
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Footer from '$lib/components/Footer.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	let prevScrollPos = 0;

	function scrollToId(event: MouseEvent, id: string) {
		const el = document.getElementById(id);
		if (el === null) return;

		event.preventDefault();
		el.scrollIntoView({ behavior: 'smooth' });
		history.replaceState(null, '', `/#${id}`);
	}

	function handleScroll() {
		const currentScrollPos = window.scrollY;
		const el = document.getElementById('navbar');

		if (el !== null) {
			el.style.top = prevScrollPos > currentScrollPos || currentScrollPos <= 0 ? '0' : `-${el.offsetHeight}px`;
			prevScrollPos = currentScrollPos;
		}
	}

	function cv() {
		window.open('/conwellJoseph.pdf', '_blank');
	}

	onMount(() => {
		if (browser) window.addEventListener('scroll', handleScroll, { passive: true });
	});

	onDestroy(() => {
		if (browser) window.removeEventListener('scroll', handleScroll);
	});
</script>

<header>
	<nav id="navbar" class="nav" aria-label="main navigation">
		<div class="nav-left">
			<a class="brand" href="/">
				<img id="logo" alt="Clover Logo" aria-label="Brand logo" src="/svgs/clover.svg" />
			</a>
		</div>

		<div class="tabs">
			{#each data.sections as section}
				<a
					aria-label={section.name}
					href="/#{section.id}"
					on:click={(event) => scrollToId(event, section.id)}
				>
					{section.name}
				</a>
			{/each}
		</div>

		<div class="nav-right">
			<button class="button primary" on:click={cv}>
				<strong>Resume</strong>
			</button>
		</div>
	</nav>
</header>

<slot />

<Footer />

<style lang="scss">
	#logo {
		height: 3rem;
		width: 3rem;

		&:hover {
			background-color: transparent;
			cursor: unset;
		}
	}

	header {
		padding: 0;

		nav {
			background-color: #fafafa;
			transition: top 0.3s;
			height: $navHeight;
			margin: 0;
			padding: 0 1vw;

			a {
				border: none;
			}
		}
	}

	/* Keep every section reachable on narrow screens without hiding navigation. */
	@media (max-width: $min-width) {
		header nav {
			.tabs {
				flex-wrap: nowrap;
				overflow-x: auto;
				-webkit-overflow-scrolling: touch;
			}
		}
	}
</style>
