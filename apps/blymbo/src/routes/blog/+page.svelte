<script lang="ts">
	import { Section, Hero, Container, Split, Image, Text } from 'hns-library';
</script>

<Section>
	<Container type="contained" padded>
		<Hero alignContent="center" title="Blog" type="contained" />
	</Container>
</Section>

<Container type="contained" padded>
	<Split>
		<div slot="first"><Image /></div>
		<div slot="second">
			<a href="blog/article">
				<Text text="post" />
			</a>
		</div>
	</Split>
</Container>
