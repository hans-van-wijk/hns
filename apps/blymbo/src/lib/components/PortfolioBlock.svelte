<script lang="ts">
	import { Stack, Image, Text, Button } from 'hns-library';
	export let src = '';
	export let title = '';
	export let description = '';
</script>

<Stack spacing="small">
	<Image ratio="horizontal" {src} />
	<Text text={title} contrast />
	<Text text={description} />
	<Button>View project</Button>
</Stack>
