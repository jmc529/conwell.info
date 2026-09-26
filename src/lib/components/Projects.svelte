<script lang="ts">
	import { projects } from '$lib/data/projects';
</script>

<section id="projects" class="section">
	<h2 class="text-center">Featured Projects</h2>

	<div class="row">
		{#each projects as project (project.title)}
			<div class="col-4-md col-12">
				<article class="card">
					<a href={project.href} target="_blank" rel="noreferrer noopener">
						<img src={project.image} alt={project.alt} loading="lazy" />
					</a>
					<h3>
						<a href={project.href} target="_blank" rel="noreferrer noopener">{project.title}</a>
					</h3>
					<p>{project.summary}</p>
					<p class="tags">
						{#each project.tags as tag (tag)}
							<span class="tag">{tag}</span>
						{/each}
					</p>
				</article>
			</div>
		{/each}
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

	h3 {
		font-size: 1.1rem;
		margin: 0.75rem 0 0.5rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		height: 100%;
		margin-bottom: 1.5rem;

		img {
			display: block;
			width: 100%;
		}

		p {
			margin-bottom: 0.75rem;
		}

		.tags {
			margin-top: auto;
		}

		.tag {
			background-color: $dark-gray;
			color: $text-primary;
			margin-right: 0.25rem;
		}
	}
</style>
