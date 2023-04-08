<script lang="ts">
	import { Stack, Container, Section, Hero, Split, Logobar } from 'hns-library';
	// @ts-ignore
	import project1 from '$lib/images/project-1.png?width=1344;672;336&format=webp&srcset';
	// @ts-ignore
	import project2 from '$lib/images/project-2.png?width=1344;672;336&format=webp&srcset';
	// @ts-ignore
	import project3 from '$lib/images/project-3.png?width=1344;672;336&format=webp&srcset';
	// @ts-ignore
	import project4 from '$lib/images/project-4.png?width=1344;672;336&format=webp&srcset';
	// @ts-ignore
	import studio from '$lib/images/studio.png?width=1344;672;336&format=webp&srcset';
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

<style>
	picture {
		display: block;
	}
	img {
		width: 100%;
		max-width: 100%;
	}
</style>
