<script lang="ts">
	import type { PageData } from './$types';
	import '../app.css';
	import 'hancss/index.css';
	import { Footer, Transition, Header, Container } from 'hns-library';
	import { HnsCustomCursor } from 'hns-customcursor';
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
			title: 'Posts',
			href: '/posts'
		},
		{
			title: 'Products',
			href: '/products'
		},
		{
			title: 'Contact',
			href: '/contact'
		}
	];

	export let data: PageData;
</script>

<div class="hns">
	<Header {navItems} />
	<Container type="contained" padded>
		<Transition key={data.url}>
			<slot />
		</Transition>

		<Footer />
	</Container>
</div>

<HnsCustomCursor />

<style>
	.hns {
		min-height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
