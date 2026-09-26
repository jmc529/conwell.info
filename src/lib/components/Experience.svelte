<script lang="ts">
	import { jobs, type Accent } from '$lib/data/experience';

	const accents: Record<Accent, string> = {
		primary: '#32976f',
		success: '#14854f',
		neutral: '#7e7e7e',
		dark: '#3a3a3a'
	};
</script>

<section id="experience" class="section band">
	<h2 class="text-center">Work Experience</h2>

	<div class="stack">
		{#each jobs as job}
			<article class="card" style:--accent={accents[job.accent]}>
				<h3>
					<a href={job.href} target="_blank" rel="noreferrer noopener">{job.company}</a>
				</h3>
				<p class="role">{job.role}</p>
				<p>
					{#each job.body as segment}
						{#if segment.href}
							<a href={segment.href} target="_blank" rel="noreferrer noopener">{segment.text}</a>
						{:else}
							{segment.text}
						{/if}
					{/each}
				</p>
			</article>
		{/each}
	</div>
</section>

<style lang="scss">
	.band {
		background-color: #d1d3c5;
		padding: 2rem 0;
	}

	h2 {
		font-size: clamp(1.5rem, 4vw, 2.5rem);
		margin-bottom: 1.5rem;
	}

	.stack {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.card {
		background-color: #f5f5f5;
		border-left: 4px solid var(--accent, $light-gray);
	}

	h3 {
		font-size: 1.25rem;
		margin-bottom: 0.25rem;
	}

	.role {
		font-weight: bold;
		margin-bottom: 0.75rem;
	}
</style>
