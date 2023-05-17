<script lang="ts">
	import { HnsIsland, Stack, Image, Text, Button } from 'hns-library';
	export let src = '';
	export let title = '';
	export let description = '';
	export let link = '';
</script>

<div class="portfolio-block">
	<HnsIsland>
		{#if link}
			<a href={link}>
				<Stack spacing="small">
					<Image {src} />
					<Text contrast>{title}</Text>
					<Text>{description}</Text>
					<Button>View project</Button>
				</Stack>
			</a>
		{:else}
			<Stack>
				<Image ratio="horizontal" {src} />
				<Text contrast>{title}</Text>
				<Text>{description}</Text>
				<Button>View project</Button>
			</Stack>
		{/if}
	</HnsIsland>
</div>
