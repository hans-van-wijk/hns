<script lang="ts">
	import { Image, Heading, Text, Stack } from 'hns-library';
	export let title = '';
	export let subtitle = '';
</script>

<Stack>
	<Image />
	<div>
		<Heading text={title} />
		<Text text={subtitle} />
	</div>
</Stack>
