<script lang="ts">
	import {
		Grid,
		Stack,
		Container,
		Section,
		Hero,
		Split,
		Logobar,
		Heading,
		Text,
		Image
	} from 'hns-library';
	import projects from '$lib/data/projects';
	import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10 } from 'logoipsum';
	import PortfolioBlock from '$lib/components/PortfolioBlock.svelte';
	import IconCard from '$lib/components/IconCard.svelte';
</script>

<svelte:head>
	<title>Blymbo</title>
</svelte:head>

<Section>
	<Container type="contained" padded>
		<Hero title="Increase your sales with Blymbo Digital Agency" />
		<Stack spacing="row">
			<Split>
				<Stack slot="first">
					<Heading scale={2}>Why choose us?</Heading>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit sapien vel
						faucibus bibendum. Curabitur sit amet nisi lobortis, placerat urna sed, porta leo. In
						nec condimentum lorem, non malesuada libero. Ut tincidunt mi nec eros pharetra
						tristique. Suspendisse potenti. Mauris porttitor, libero suscipit viverra aliquet,
					</Text>
				</Stack>
				<div slot="second">
					<Image />
				</div>
			</Split>
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
			<Split>
				<div slot="first">
					<IconCard
						title="Service type #1"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit sapien vel faucibus bibendum. Curabitur sit amet nisi lobortis, placerat urna sed, porta leo."
						icon="edit"
					/>
				</div>
				<div slot="second">
					<IconCard
						title="Service type #2"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit sapien vel faucibus bibendum. Curabitur sit amet nisi lobortis, placerat urna sed, porta leo."
						icon="activity"
					/>
				</div>
			</Split>
		</Stack>
	</Container>
</Section>
