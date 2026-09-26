<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { about } from '$lib/data/about';
	import { techGroups } from '$lib/data/tech';
</script>

<section id="about" class="section band">
	<h2 class="text-center">About Me</h2>

	<div class="card prose">
		{#each about.paragraphs as paragraph, pIndex (pIndex)}
			<p>
				{#each paragraph as segment, sIndex (sIndex)}
					{#if segment.href}
						<a href={segment.href} target="_blank" rel="noreferrer noopener">{segment.text}</a>
					{:else}
						{segment.text}
					{/if}
				{/each}
			</p>
		{/each}
	</div>

	<div class="row">
		{#each techGroups as group (group.id)}
			<div class="col-6-md col-12">
				<div class="card" id={group.id}>
					<h3>{group.title}</h3>
					<ul class="icon-grid">
						{#each group.tech as item (item.name)}
							<li>
								<a href={item.href} target="_blank" rel="noreferrer noopener">
									<Icon name={item.icon} title={item.name} />
									<span class="visually-hidden">{item.name}</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
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

	h3 {
		font-size: 1.1rem;
		margin-bottom: 0.75rem;
	}

	.card {
		background-color: #f5f5f5;
		margin-bottom: 1.5rem;
	}

	.prose p + p {
		margin-top: 1rem;
	}

	.icon-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
		margin: 0;
		padding: 0;

		a {
			align-items: center;
			background-color: #fff;
			border-radius: 0.3rem;
			display: flex;
			height: 2.5rem;
			justify-content: center;
			padding: 0.4rem;
			transition: background-color 0.15s;
			width: 2.5rem;

			&:hover {
				background-color: #e6e6e6;
			}
		}

		:global(img) {
			height: 100%;
			width: 100%;
		}
	}

	.visually-hidden {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
</style>
