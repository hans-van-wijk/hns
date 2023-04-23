<script lang="ts">
	import { Cover, Hero, Section, Container, Grid } from 'hns-library';
	import ContentBlock from '../lib/components/ContentBlock.svelte';
</script>

<Cover
	title="Showing lost people a way"
	description="We are experts at showing lost people a way. It might not be the right way, but at they will have direction."
	link="https://hans.com"
	image="https://picsum.photos/200/300"
/>

<Section>
	<Container type="contained" padded>
		<Grid>
			<ContentBlock />
			<ContentBlock />
			<ContentBlock />
			<ContentBlock />
			<ContentBlock />
			<ContentBlock />
		</Grid>
	</Container>
</Section>

<Hero title="Hans" />

<Section>
	<Container>
		<h1>Welcome to SvelteKit</h1>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	</Container>
</Section>
