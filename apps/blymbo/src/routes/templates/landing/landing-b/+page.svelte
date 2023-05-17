<script lang="ts">
	import {
		Carrousel,
		Card,
		Image,
		Stack,
		Container,
		Section,
		Split,
		Heading,
		Text,
		Hero,
		VideoBg,
		Input,
		Button
	} from 'hns-library';
</script>

<svelte:head>
	<title>Landing a | Wireframer</title>
</svelte:head>

<Stack>
	<VideoBg url="home-bg-NV2HXGUL.mp4">
		<div style="--hns-heading-color: #fff">
			<Hero title="Hans" type="content">
				<Stack>
					<Input type="search" placeholder="Search entire catalog" />
					<div>
						<Button size="tiny">Tag #1</Button>
						<Button size="tiny">Tag #2</Button>
						<Button size="tiny">Tag #3</Button>
						<Button size="tiny">Tag #4</Button>
					</div>
				</Stack>
			</Hero>
		</div>
	</VideoBg>

	<Container type="contained" padded>
		<Section>
			<Stack spacing="row">
				<Split>
					<div slot="first">
						<Stack>
							<Heading el="h3" scale={3}>Just add .co to any .eth name</Heading>
							<Text el="p" scale={1}>
								You’ll see all of their links, NFTs, ENS domains, and profile all in one place.</Text
							>
						</Stack>
					</div>
					<div slot="second">
						<!-- svelte-ignore a11y-media-has-caption -->
						<video
							playsinline={true}
							autoplay={true}
							loop={true}
							src="homepage_animation-6OK5OEAX.mp4"
						/>
					</div>
				</Split>

				<Split rev>
					<div slot="first">
						<Stack>
							<Heading el="h3" scale={3}>Customize yours. It's free!</Heading>
							<Text el="p" scale={1}>
								Connect your wallet to customize your own eth.co profile. Add links, a bio, avatar
								and more - show all your stuff in one place.
							</Text>
						</Stack>
					</div>
					<div slot="second">
						<Image src="homepage_customize_graphic-ETGVKACY.png" />
					</div>
				</Split>

				<Carrousel>
					<Card>
						<img
							alt="pc"
							src="image sha3 f41fba2297427f5dc13c20ee5c74f9265967ff091f00ea3b0485958ca711615d.jpg"
						/>
					</Card>
					<Card>
						<img
							alt="pc"
							src="image sha3 f41fba2297427f5dc13c20ee5c74f9265967ff091f00ea3b0485958ca711615d.jpg"
						/>
					</Card>
					<Card>
						<img
							alt="pc"
							src="image sha3 f41fba2297427f5dc13c20ee5c74f9265967ff091f00ea3b0485958ca711615d.jpg"
						/>
					</Card>
					<Card>
						<img
							alt="pc"
							src="image sha3 f41fba2297427f5dc13c20ee5c74f9265967ff091f00ea3b0485958ca711615d.jpg"
						/>
					</Card>
					<Card>
						<img
							alt="pc"
							src="image sha3 f41fba2297427f5dc13c20ee5c74f9265967ff091f00ea3b0485958ca711615d.jpg"
						/>
					</Card>
					<Card>
						<img
							alt="pc"
							src="image sha3 f41fba2297427f5dc13c20ee5c74f9265967ff091f00ea3b0485958ca711615d.jpg"
						/>
					</Card>
				</Carrousel>
			</Stack>
		</Section>
	</Container>
</Stack>
