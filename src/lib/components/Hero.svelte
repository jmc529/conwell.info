<section id="hero" class="hero">
	<div class="container text-right">
		<p class="lead">Hello, my name is</p>
		<h1>Joe Conwell</h1>
		<hr />
		<p class="lead">I am a</p>
		<h1>cook, coder, and cat-dad</h1>
		<p class="m-1">
			<a href="mailto:jmc529@vt.edu" class="button outline primary">
				<strong>Contact</strong>
			</a>
		</p>
	</div>
</section>

<style lang="scss">
	.hero {
		align-items: center;
		background: black url('/images/hero.JPG') center / cover no-repeat;
		display: flex;
		justify-content: center;
		min-height: 100vh;
		padding: 1rem;

		h1 {
			color: $text-primary;
			font-size: clamp(2rem, 6vw, 4rem);
			line-height: 1.2;
			margin: 0;
		}

		.lead {
			color: $text-primary;
			font-size: clamp(1rem, 2.5vw, 1.5rem);
			margin: 0.5rem 0;
		}

		hr {
			border: 0;
			border-top: 1px solid rgba(255, 255, 255, 0.4);
			margin: 1rem 0;
		}

		@media (max-width: $min-width) {
			background-image: url('/images/hero-phone.JPG');
		}
	}
</style>
