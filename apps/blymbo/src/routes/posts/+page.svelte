<script lang="ts">
	import { Section, Hero, Container, Split, Image, Text, Heading } from 'hns-library';
	import type { PageData } from './types';
	import Stack from 'hns-library/src/layout/Stack.svelte';
	export let data: PageData;
</script>

<Section>
	<Container type="contained" padded>
		<Hero title="Blog" type="contained" />
	</Container>
</Section>

<Container type="contained" padded>
	<Stack>
		{#each data.posts as { image, title, content, slug }}
			<Split>
				<div slot="first">
					<a href="/posts/{slug}">
						<Image src={image} />
					</a>
				</div>
				<Stack slot="second">
					<Heading scale={2}>{title}</Heading>
					<Text>{content}</Text>
					{slug}
				</Stack>
			</Split>
		{/each}
	</Stack>
</Container>
