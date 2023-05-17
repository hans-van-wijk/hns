<script lang="ts">
	import { Hero, Container, Split, Image, Text, Heading } from 'hns-library';
	import Stack from 'hns-library/src/layout/Stack.svelte';
	export let data;
</script>

<Container type="contained" padded>
	<Container type="contained">
		<Hero title="Products" type="contained" />
	</Container>
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
