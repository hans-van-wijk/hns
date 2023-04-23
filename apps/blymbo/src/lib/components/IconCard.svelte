<script lang="ts">
	import { Card, Text, Stack } from 'hns-library';
	import Icon from '@iconify/svelte';
	export let icon = '';
	export let title = '';
	export let description = '';
</script>

<Card>
	<Stack spacing="small" justify="center">
		{#if icon !== ''}
			<div class="icon">
				<Icon icon={`feather:${icon}`} />
			</div>
		{/if}

		{#if title}
			<Text el="h3">{title}</Text>
		{/if}
		{#if description}
			<Text el="p">{description}</Text>
		{/if}
		<slot />
	</Stack>
</Card>

<style>
	.icon {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		height: 3em;
		width: 3em;
		margin-bottom: 1rem;
		border-radius: 50%;
		background-color: white;
	}
</style>
