<script lang="ts">
	import { Card, Stack, Text } from 'hns-library';
	export let label: string = 'Token';
	export let token: string;
</script>

<div class="token">
	<Card>
		<Stack>
			<div class="fill" style="background-color: var(--{token})" />
			<Text text={label} />
		</Stack>
	</Card>
</div>

<style>
	.fill {
		aspect-ratio: 6/6;
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
	}
</style>
