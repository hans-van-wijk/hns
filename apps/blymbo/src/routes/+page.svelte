<script lang="ts">
	import { Stack, Container, Section, Hero, Split, Logobar } from 'hns-library';
	import project1 from '$lib/images/project-1.webp';
	import project2 from '$lib/images/project-2.webp';
	import project3 from '$lib/images/project-3.webp';
	import project4 from '$lib/images/project-4.webp';
	import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10 } from 'logoipsum';
	import PortfolioBlock from '$lib/components/PortfolioBlock.svelte';
	import IconCard from '$lib/components/IconCard.svelte';
</script>

<svelte:head>
	<title>Blymbo</title>
</svelte:head>

<Section>
	<Container type="contained" padded>
		<IconCard />
		<Hero title="Increase your sales with Blymbo Digital Agency" />
		<Stack spacing="row">
			<Stack>
				<Split>
					<div slot="first">
						<PortfolioBlock title="Image description" description="Web design" src={project1} />
					</div>
					<div slot="second">
						<PortfolioBlock title="Image description" description="Web design" src={project2} />
					</div>
				</Split>
				<Split>
					<div slot="first">
						<PortfolioBlock title="Image description" description="Web design" src={project3} />
					</div>
					<div slot="second">
						<PortfolioBlock title="Image description" description="Web design" src={project4} />
					</div>
				</Split>
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
	</Container>
</Section>
