<script lang="ts">
	import { Container, Heading, Stack, Hero, Section, Button } from 'hns-library';
</script>

<svelte:head>
	<title>Wireframer | Home</title>
</svelte:head>

<Section spacing="page">
	<Container type="contained" padded>
		<Stack>
			<Heading
				el="h1"
				scale={4}
				text="Learn modern design fundamentals and 4x your design career."
			/>

			<Button kind="cta">Get Started</Button>
			<Button>Get Started</Button>
			<div>Haha</div>
			<div>Haha</div>
			<div>Haha</div>
		</Stack>

		<div class="hns-split">
			<div>
				This means that if you have this exact same component in different parts of your UI, it’s
				able to use its own logic to resize and best fit its Container. You have better control over
				the card’s layout than you would if you only had the global viewport to rely on.
			</div>
			<div>
				This means that if you have this exact same component in different parts of your UI, it’s
				able to use its own logic to resize and best fit its container. You have better control over
				the card’s layout than you would if you only had the global viewport to rely on.
			</div>
		</div>
	</Container>
</Section>
