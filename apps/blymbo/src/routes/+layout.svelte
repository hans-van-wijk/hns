<script lang="ts">
	import 'hancss/index.css';
	import { Header, Container } from 'hns-library';

	const navItems = [
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
