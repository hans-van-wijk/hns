<script lang="ts">
	import { HnsRadio, HnsRadioGroup, Header, Heading, Drawer, Stack } from 'hns-library';
	import { page } from '$app/stores';
	import '../app.css';
	import 'hancss/index.css';
	import { enhance, type SubmitFunction } from '$app/forms';

	export let themeValue = '';

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
			title: 'Template',
			href: '/templates'
		},
		{
			title: 'template',
			href: '/landing-a'
		},
		{
			title: 'Styleguide',
			href: '/styleguide'
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

<Header {navItems} containerWidth="contained" />

<slot />

<Drawer bind:open>
	<Stack>
		<HnsRadioGroup bind:themeValue label="Radio group legend">
			<HnsRadio label="Label 1" value="1" />
			<HnsRadio label="Label 2" value="2" />
			<HnsRadio label="Label 3" value="3" />
		</HnsRadioGroup>
		<form class="style-switcher" method="POST" use:enhance={submitUpdateTheme}>
			<Stack>
				<Heading el="p" scale={1}>Color</Heading>
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
				<Heading el="p" scale={1}>Type</Heading>
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
