<script lang="ts">
	import { Container, Hero, Section } from 'hns-library';

	export let data;

	function formatDate(date: Date) {
		const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'long' });
		return formatter.format(date);
	}
</script>

<Section>
	<Container type="content">
		<Hero title={data.post.title} type="contained" />
		<hgroup>
			<h2>{formatDate(data.post.createdAt)}</h2>
		</hgroup>

		<div class="content">
			{@html data.post.content}
		</div>
	</Container>
</Section>
