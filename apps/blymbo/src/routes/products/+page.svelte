<script lang="ts">
	import { Section, Hero, Container, Split, Image, Text, Heading } from 'hns-library';
	import type { PageData } from './types';
	import Stack from 'hns-library/src/layout/Stack.svelte';
	export let data: PageData;
	console.log(data);
</script>

<Section>
	<Container type="contained">
		<Hero title="Products" type="contained" />
	</Container>
</Section>

<Container type="contained" padded>
	<Stack>
		{#each data.products as { thumbnail, title, description }}
			<Split>
				<div slot="first">
					<Image src={thumbnail} />
				</div>
				<Stack slot="second">
					<Heading scale={2}>{title}</Heading>
					<Text>{description}</Text>
				</Stack>
			</Split>
		{/each}
	</Stack>
</Container>
