<script lang="ts">
  import Heading from "../ui/Heading.svelte";
  import Text from "../ui/Text.svelte";
  import Container from "../layout/Container.svelte";
  export let type: string = "";
  export let title: string = "";
  export let subtitle: string = "";
  export let headingSize: number = 3.01;
</script>

<div class="hero">
  <Container {type}>
    {#if title}
      <Heading el="h1" scale={headingSize}>{title}</Heading>
    {/if}
    {#if subtitle}
      <Text scale={1.5}>{subtitle}</Text>
    {/if}
    <slot />
  </Container>
</div>

<style>
  .hero {
    padding-block: clamp(1rem, 1rem + 5vw, 5rem);
    aspect-ratio: 21/9;
    display: flex;
    align-items: center;
  }
</style>
