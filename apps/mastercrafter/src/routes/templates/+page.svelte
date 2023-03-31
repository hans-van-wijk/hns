<script lang="ts">
	import SplitImage from '$lib/components/SplitImage.svelte';
	import { Card, Carrousel, Container, Hero, Split, Stack, Text } from 'hns-library';
</script>

<Hero type="contained" title="Marketing solutions for startups" />

<Container type="contained">
	<Card>
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design & Web Design" />
	</Card>

	<Carrousel>
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design & Web Design" />
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design & Web Design" />
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design & Web Design" />
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design & Web Design" />
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design & Web Design" />
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design & Web Design" />
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design & Web Design" />
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design & Web Design" />
	</Carrousel>

	<Carrousel>
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design – Web Design" />
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design – Web Design" />
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design – Web Design" />
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design – Web Design" />
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design – Web Design" />
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design – Web Design" />
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design – Web Design" />
		<SplitImage title="Marketing solutions for startups" subtitle="Product Design – Web Design" />
	</Carrousel>

	<Stack>
		<Split>
			<div slot="first">
				<SplitImage
					title="Marketing solutions for startups"
					subtitle="Product Design – Web Design"
				/>
			</div>
			<div slot="second">
				<SplitImage
					title="Marketing solutions for startups"
					subtitle="Product Design – Web Design"
				/>
			</div>
		</Split>
		<Split>
			<div slot="first">
				<SplitImage
					title="Marketing solutions for startups"
					subtitle="Product Design – Web Design"
				/>
			</div>
			<div slot="second">
				<SplitImage
					title="Marketing solutions for startups"
					subtitle="Product Design – Web Design"
				/>
			</div>
		</Split>
		<Split>
			<div slot="first">
				<SplitImage
					title="Marketing solutions for startups"
					subtitle="Product Design – Web Design"
				/>
			</div>
			<div slot="second">
				<SplitImage
					title="Marketing solutions for startups"
					subtitle="Product Design – Web Design"
				/>
			</div>
		</Split>
	</Stack>
</Container>
