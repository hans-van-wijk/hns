<script lang="ts">
	import { Container, Hero, CollectionGrid, Stack } from 'hns-library';
	import Token from '$lib/components/Token.svelte';
</script>

<Hero title="Tokens" type="contained" />

<Container type="contained">
	<CollectionGrid>
		<Token label="App background" token="hns-app-background" />
		<Token label="App text color" token="hns-app-text-color" />
		<Token label="App Heading color" token="hns-heading-color" />
	</CollectionGrid>
</Container>
