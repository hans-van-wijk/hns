<script lang="ts">
	import { Heading, Container, Section, Button } from 'hns-library';

	let products = [
		{ name: 't-shirt', quantity: 10 },
		{ name: 'mug', quantity: 30 },
		{ name: 'sticker', quantity: 8 },
		{ name: 'sweatshirt', quantity: 12 }
	];

	function addProduct() {
		let cup = { name: 'cup', quantity: 4 };
		products = [cup, ...products];
	}
</script>

<Section>
	<Container padded>
		<Button on:click={addProduct}>Add to cart</Button>

		{#each products as product, i (product.name)}
			<div>
				<Heading>{product.name}</Heading>
				<input type="checkbox" />
				<div>{i}</div>
			</div>
		{/each}
	</Container>
</Section>
