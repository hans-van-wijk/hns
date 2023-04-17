<script lang="ts">
	import { Image, Heading, Text, Stack } from 'hns-library';
	export let title = '';
	export let subtitle = '';
</script>

<Stack>
	<Image />
	<div>
		<Heading scale={2.1} text={title} />
		<Text text={subtitle} />
	</div>
</Stack>
