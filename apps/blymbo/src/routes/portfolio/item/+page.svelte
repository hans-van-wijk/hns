<script lang="ts">
	import { Container, Hero, Image, Text, Stack } from 'hns-library';
	import project1 from '$lib/images/project-1.png';
</script>

<Hero type="contained" title="The most amazing project since human history" />

<Container type="content" padded>
	<Stack>
		<Image ratio="horizontal" src={project1} />
		<Text
			el="p"
			text="KAAY Pro is an all-in-one digital platform designed to help small businesses establish a strong online presence. It includes a range of features such as a custom website, e-commerce solutions, branding and identity design, search engine optimization, social media marketing, and graphic design. With KAAY Pro, small businesses can have everything they need to succeed online in one convenient platform. Our team of experts will work closely with you to create a customized solution that meets your specific needs and helps you achieve your business objectives. Whether you're just starting out or looking to take your business to the next level, KAAY Pro has everything you need to succeed in the digital world."
		/>
	</Stack>
</Container>
