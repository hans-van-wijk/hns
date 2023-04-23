<script lang="ts">
	import { Split, Container, Heading, Stack, Section, Button, Text } from 'hns-library';
</script>

<svelte:head>
	<title>Wireframer | Home</title>
</svelte:head>

<Section spacing="page">
	<Container type="contained" padded>
		<Stack>
			<Heading el="h1" scale={4}
				>Learn modern design fundamentals and 4x your design career.</Heading
			>

			<Button kind="cta">Get Started</Button>
			<Button>Get Started</Button>
		</Stack>

		<Split>
			<div slot="first">
				<Text>
					This means that if you have this exact same component in different parts of your UI, it’s
					able to use its own logic to resize and best fit its Container. You have better control
					over the card’s layout than you would if you only had the global viewport to rely on.
				</Text>
			</div>
			<div slot="second">
				<Text>
					This means that if you have this exact same component in different parts of your UI, it’s
					able to use its own logic to resize and best fit its container. You have better control
					over the card’s layout than you would if you only had the global viewport to rely on.
				</Text>
			</div>
		</Split>
	</Container>
</Section>
