<script lang="ts">
  import Heading from "../ui/Heading.svelte";
  import Container from "../layout/Container.svelte";
  export let type: string = "";
  export let title: string = "";
  export let subtitle: string = "";
  export let headingSize: number = 3;
  export let alignContent: string = "center";
</script>

<div class="hero">
  <Container {alignContent} {type}>
    {#if title}
      <Heading el="h1" text={title} scale={headingSize} />
    {/if}
    {#if subtitle}
      <p class="hero-subtitle">{subtitle}</p>
    {/if}
    <slot />
  </Container>
</div>

<style>
  .hero {
    padding-block: clamp(1rem, 1rem + 5vw, 5rem);
    aspect-ratio: 16/9;
    display: flex;
    align-items: center;
  }
  .hero-subtitle {
    font-size: 2rem;
  }
</style>
