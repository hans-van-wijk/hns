<script lang="ts">
	import { Heading, Drawer, Stack, Navlist } from 'hns-library';
	import { page } from '$app/stores';
	import '../app.css';
	import 'hancss/index.css';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { Container } from 'hns-library';
	import Section from 'hns-library/src/layout/Section.svelte';
	import Header from 'hns-library/src/components/Header.svelte';

	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');
		const typeTheme = action.searchParams.get('typeTheme');
		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
		if (typeTheme) {
			document.documentElement.setAttribute('data-typetheme', typeTheme);
		}
	};

	const fontlist = [
		'inter',
		'august',
		'barlow',
		'bendicion',
		'bigilla',
		'brand',
		'chomsky',
		'corben',
		'dmSerifDisplay',
		'dugasPro',
		'squadaOne',
		'editorialNew',
		'formulaCondensed',
		'frKrakenSlab',
		'leMurmure',
		'mak',
		'mattone',
		'migha',
		'ericaOne'
	];

	const navItems = [
		{
			title: 'Home',
			link: '/'
		},
		{
			title: 'Template',
			link: '/templates'
		},
		{
			title: 'template',
			link: '/landing-a'
		},
		{
			title: 'Styleguide',
			link: '/styleguide'
		}
	];

	const themes = [
		{
			name: 'default'
		},
		{
			name: 'hns'
		},
		{
			name: 'purple'
		}
	];

	export let open = false;
</script>

<Header {navItems} contentWidth="contained" />

<slot />

<Drawer bind:open>
	<Stack>
		<form class="style-switcher" method="POST" use:enhance={submitUpdateTheme}>
			<Stack>
				<Heading el="p" scale={1} text="Color" />
				{#if themes.length > 0}
					<ul>
						{#each themes as { name }}
							<li>
								<button formaction="/?/setTheme&theme={name}-light&redirectTo={$page.url.pathname}"
									>{name} light</button
								>
							</li>
							<li>
								<button formaction="/?/setTheme&theme={name}-dark&redirectTo={$page.url.pathname}"
									>{name} dark</button
								>
							</li>
						{/each}
					</ul>
				{/if}
				<Heading el="p" scale={1} text="Type" />
				<ul>
					{#each fontlist as font}
						<li>
							<button formaction="/?/setTheme&typeTheme={font}&redirectTo={$page.url.pathname}"
								>{font}</button
							>
						</li>
					{/each}
				</ul>
			</Stack>
		</form>
	</Stack>
</Drawer>

<button class="settings" on:click={() => (open = !open)}>Settings</button>

<style>
	.settings {
		position: fixed;
		left: 2rem;
		bottom: 2rem;
	}
</style>
