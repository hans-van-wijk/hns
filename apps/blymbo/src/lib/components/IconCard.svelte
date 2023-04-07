<script lang="ts">
	import { Card, Text, Stack } from 'hns-library';
	import Icon from '@iconify/svelte';
	export let title = '';
	export let description = '';
</script>

<Card>
	<Stack spacing="small" justify="center">
		<div class="icon">
			<Icon icon="feather:activity" />
		</div>
		{#if title}
			<Text el="h3" text={title} />
		{/if}
		{#if description}
			<Text el="p" text={description} />
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
