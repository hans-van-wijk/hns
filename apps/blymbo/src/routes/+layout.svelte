<script lang="ts">
	import type { PageData } from './$types';

	import 'hancss/index.css';
	import { Transition, Header, Container, Stack, Text } from 'hns-library';
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
			title: 'Blog',
			href: '/blog'
		},
		{
			title: 'Contact',
			href: '/contact'
		}
	];

	export let data: PageData;
</script>

<Container type="contained" padded>
	<Header {navItems} />
</Container>

<Transition key={data.url} duration={600}>
	<slot />
</Transition>
<Section>
	<Container type="contained" padded>
		<Stack layout="horizontal" spread>
			<Text scale={1.2} text="Blymbo" contrast />
			<Text text="about" />
		</Stack>
	</Container>
</Section>
