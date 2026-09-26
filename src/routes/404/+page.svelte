<svelte:head>
	<title>404 &middot; jmconwell.com</title>
	<meta name="description" content="Nothing is cooking here." />
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="scene">
	<img class="trees" src="/images/mount_trees.svg" alt="" aria-hidden="true" />

	<picture>
		<source media="(prefers-reduced-motion: reduce)" srcset="/images/camper.png" />
		<img class="camper" src="/images/camper.gif" alt="" aria-hidden="true" />
	</picture>

	<h1>404</h1>
	<p class="line">Nothing&rsquo;s cooking here.</p>
	<a class="button primary" href="/">Back to the menu</a>
</section>

<style lang="scss">
	/*
	 * Layered back to front: dusk gradient, the trees looming behind everything,
	 * then the camper parked in front of them. Copy sits on top.
	 *
	 * Both images are decorative here, so they are marked aria-hidden and the
	 * page carries all of its meaning in text.
	 */
	.scene {
		background: linear-gradient(to bottom, $midnight 0%, $night 45%, $twilight 100%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: calc(100vh - #{$navHeight});
		overflow: hidden;
		padding: 4rem 1rem 2rem;
		position: relative;
		text-align: center;
	}

	/* A soft glow low in the frame so the tree silhouettes have something to
	   sit against instead of flat colour. */
	.scene::after {
		background: radial-gradient(ellipse at 50% 100%, rgba(248, 155, 106, 0.28), transparent 65%);
		bottom: 0;
		content: '';
		height: 70%;
		left: 0;
		pointer-events: none;
		position: absolute;
		width: 100%;
		z-index: 0;
	}

	.trees {
		bottom: 0;
		left: 50%;
		pointer-events: none;
		position: absolute;
		transform: translateX(-50%);
		user-select: none;
		width: 160%;
		z-index: 1;
	}

	.camper {
		bottom: 6%;
		left: 50%;
		max-width: 34rem;
		pointer-events: none;
		position: absolute;
		transform: translateX(-50%);
		user-select: none;
		width: 78%;
		z-index: 2;
	}

	h1 {
		color: $text-primary;
		font-size: clamp(5rem, 22vw, 14rem);
		line-height: 0.9;
		margin: 0;
		position: relative;
		text-shadow: 0 0.15em 0.6em rgba(0, 0, 0, 0.55);
		z-index: 3;
	}

	.line {
		color: $text-primary;
		font-size: clamp(1.05rem, 3.2vw, 1.6rem);
		margin: 0.5rem 0 2rem;
		position: relative;
		text-shadow: 0 0.1em 0.5em rgba(0, 0, 0, 0.6);
		z-index: 3;
	}

	a {
		align-self: center;
		position: relative;
		z-index: 3;
	}

	/* Short viewports: pull the trees down and shrink the camper so the copy and
	   the link never end up underneath it. */
	@media (max-height: 32rem) {
		.trees {
			width: 190%;
		}

		.camper {
			bottom: 2%;
			width: 58%;
		}
	}
</style>
