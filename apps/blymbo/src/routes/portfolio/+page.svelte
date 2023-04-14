<script lang="ts">
	import { Grid, Container, Section, Stack, Split, Logobar, Hero } from 'hns-library';
	import PortfolioBlock from '$lib/components/PortfolioBlock.svelte';
	import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10 } from 'logoipsum';
	import project1 from '$lib/images/project-1.png';
	import project2 from '$lib/images/project-2.png';
	import project3 from '$lib/images/project-3.png';
	import project4 from '$lib/images/project-4.png';

	const projects = [
		{
			title: 'Image description',
			description: 'Web design',
			src: project1,
			link: '/portfolio/item'
		},
		{
			title: 'Image description',
			description: 'Web design',
			src: project2,
			link: '/portfolio/item'
		},
		{
			title: 'Image description',
			description: 'Web design',
			src: project3,
			link: '/portfolio/item'
		},
		{
			title: 'Image description',
			description: 'Web design',
			src: project4,
			link: '/portfolio/item'
		},
		{
			title: 'Image description',
			description: 'Web design',
			src: project1,
			link: '/portfolio/item'
		},
		{
			title: 'Image description',
			description: 'Web design',
			src: project2,
			link: '/portfolio/item'
		},
		{
			title: 'Image description',
			description: 'Web design',
			src: project3,
			link: '/portfolio/item'
		},
		{
			title: 'Image description',
			description: 'Web design',
			src: project4,
			link: '/portfolio/item'
		},
		{
			title: 'Image description',
			description: 'Web design',
			src: project1,
			link: '/portfolio/item'
		},
		{
			title: 'Image description',
			description: 'Web design',
			src: project2,
			link: '/portfolio/item'
		},
		{
			title: 'Image description',
			description: 'Web design',
			src: project3,
			link: '/portfolio/item'
		},
		{
			title: 'Image description',
			description: 'Web design',
			src: project4,
			link: '/portfolio/item'
		},
		{
			title: 'Image description',
			description: 'Web design',
			src: project1,
			link: '/portfolio/item'
		}
	];
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
