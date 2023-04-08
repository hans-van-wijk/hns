<script lang="ts">
	import 'hancss/index.css';
	import { Header, Container, Stack, Text } from 'hns-library';
	import Section from 'hns-library/src/layout/Section.svelte';

	const navItems = [
		{
			title: 'About',
			href: '/about'
		},
		{
			title: 'Portfolio',
			href: '/portfolio'
		},
		{
			title: 'Contact',
			href: '/contact'
		}
	];
</script>

<Container type="contained" padded>
	<Header {navItems} />
</Container>

<slot />

<Section>
	<Container type="contained" padded>
		<Stack layout="horizontal" spread>
			<Text scale={1.2} text="Blymbo" contrast />
			<Text text="about" />
		</Stack>
	</Container>
</Section>
