<script lang="ts">
	import github from 'devicon/icons/github/github-original.svg';
	import linkedin from 'devicon/icons/linkedin/linkedin-original.svg';

	const STATICFORMS_ENDPOINT = 'https://api.staticforms.dev/submit';
	const email = 'jmc529@vt.edu';
</script>

<section id="contact" class="section">
	<h2 class="text-center">Contact</h2>

	<div class="card">
		<p>
			Let's link up! I try to get back to emails as fast as possible, if you want to reach out:
			send me a message here or on some other platform.
		</p>

		<form action={STATICFORMS_ENDPOINT} method="POST" class="contact-form">
			<input type="hidden" name="apiKey" value="sf_ee7fe5257c2d5cb6fae95e4e" />
			<input type="hidden" name="subject" value="Joe Conwell submission" />

			<label for="name">Name
				<input id="name" name="name" type="text" required />
			</label>

			<label for="email">Email
				<input id="email" name="email" type="email" required />
			</label>

			<label for="message">Message
				<textarea id="message" name="message" required></textarea>
			</label>

			<button class="button primary" type="submit">Send</button>
		</form>

		<ul class="social">
			<li>
				<a href="mailto:{email}">
					<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
						<path
							fill="currentColor"
							d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm2.6.5L12 12.2 19.4 5.5H4.6Z"
						/>
					</svg>
					<span>Email</span>
				</a>
			</li>
			<li>
				<a href="https://github.com/jmc529" target="_blank" rel="noreferrer noopener">
					<img src={github} alt="" width="28" height="28" />
					<span>GitHub</span>
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/joe-conwell/" target="_blank" rel="noreferrer noopener">
					<img src={linkedin} alt="" width="28" height="28" />
					<span>LinkedIn</span>
				</a>
			</li>
		</ul>
	</div>
</section>

<style lang="scss">
	.section {
		padding: 2rem 0;
	}

	h2 {
		font-size: clamp(1.5rem, 4vw, 2.5rem);
		margin-bottom: 1.5rem;
	}

	.card {
		background-color: #f5f5f5;
		text-align: center;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 40rem;
		margin: 1.5rem auto 0;
		text-align: left;

		label {
			display: block;
			font-weight: bold;
			margin-bottom: 0.25rem;
		}

		input,
		textarea {
			width: 100%;
			padding: 0.5rem;
			border: 1px solid $light-gray;
			border-radius: 0.25rem;
			font-family: inherit;
			font-size: 1rem;
			box-sizing: border-box;
		}

		button {
			align-self: flex-start;
			margin-top: 0.5rem;
		}
	}

	.social {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		list-style: none;
		margin: 1.5rem 0 0;
		padding: 0;

		a {
			align-items: center;
			color: inherit;
			display: flex;
			flex-direction: column;
			gap: 0.35rem;
			text-decoration: none;
		}

		img,
		svg {
			display: block;
		}

		span {
			font-size: 0.85rem;
		}
	}
</style>
