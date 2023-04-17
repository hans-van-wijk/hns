<script lang="ts">
	import { Grid, Container, Section, Stack, Split, Logobar, Hero } from 'hns-library';
	import PortfolioBlock from '$lib/components/PortfolioBlock.svelte';
	import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10 } from 'logoipsum';
	import projects from '$lib/data/projects';
</script>

<Section>
	<Container type="contained" padded>
		<Hero title="Portfolio" type="contained" />
		<Stack spacing="row">
			<Stack>
				<Grid>
					{#each projects as project}
						<PortfolioBlock
							title={project.title}
							description={project.description}
							src={project.src}
							link={project.link}
						/>
					{/each}
				</Grid>
			</Stack>
			<Logobar>
				<Logo1 />
				<Logo2 />
				<Logo3 />
				<Logo4 />
				<Logo5 />
				<Logo6 />
				<Logo7 />
				<Logo8 />
				<Logo9 />
				<Logo10 />
			</Logobar>
		</Stack>
	</Container></Section
>
