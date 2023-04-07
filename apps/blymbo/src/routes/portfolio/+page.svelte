<script lang="ts">
	import { Container, Section, Stack, Split, Logobar, Hero } from 'hns-library';
	import PortfolioBlock from '$lib/components/PortfolioBlock.svelte';
	import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10 } from 'logoipsum';
	import project1 from '$lib/images/project-1.png';
	import project2 from '$lib/images/project-2.png';
	import project3 from '$lib/images/project-3.png';
	import project4 from '$lib/images/project-4.png';
</script>

<Section>
	<Container type="contained" padded>
		<Hero title="Portfolio" type="contained" />
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
				<Split>
					<div slot="first">
						<PortfolioBlock title="Image description" description="Web design" src={project1} />
					</div>
					<div slot="second">
						<PortfolioBlock title="Image description" description="Web design" src={project2} />
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
	</Container></Section
>
