<script lang="ts">
	import { Section, Container, Split, Stack, Image, Text, Heading, Button } from 'hns-library';
	import IconCard from '$lib/components/IconCard.svelte';
	/* @ts-ignore */
	import studio from '$lib/images/studio.png?fullwidth';
</script>

<Section>
	<Container type="contained" padded>
		<Stack spacing="row">
			<Image src={studio} ratio="panorama" />
			<Container type="content">
				<Stack>
					<Text
						scale={1.3}
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit sapien vel faucibus bibendum. Curabitur sit amet nisi lobortis, placerat urna sed, porta leo. In nec condimentum lorem, non malesuada libero. Ut tincidunt mi nec eros pharetra tristique. Suspendisse potenti. Mauris porttitor, libero suscipit viverra aliquet,"
					/>
					<Text
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit sapien vel faucibus bibendum. Curabitur sit amet nisi lobortis, placerat urna sed, porta leo. In nec condimentum lorem, non malesuada libero. Ut tincidunt mi nec eros pharetra tristique. Suspendisse potenti. Mauris porttitor, libero suscipit viverra aliquet,"
					/>
				</Stack>
			</Container>
			<Split>
				<div slot="first">
					<Image ratio="square" />
				</div>
				<div slot="second">
					<Image ratio="square" />
				</div>
			</Split>
			<Stack>
				<Heading scale={2.5} text="Our values" />
				<Split>
					<div slot="first">
						<IconCard
							title="Service type #1"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit sapien vel faucibus bibendum. Curabitur sit amet nisi lobortis, placerat urna sed, porta leo."
							icon="edit"
						/>
					</div>
					<div slot="second">
						<IconCard
							title="Service type #2"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit sapien vel faucibus bibendum. Curabitur sit amet nisi lobortis, placerat urna sed, porta leo."
							icon="activity"
						/>
					</div>
				</Split>
			</Stack>
			<Stack>
				<Heading scale={2.5} text="Ready to get started?" />
				<Button>Call us</Button>
			</Stack>
		</Stack>
	</Container>
</Section>
