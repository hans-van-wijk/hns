<script lang="ts">
  import Heading from "../ui/Heading.svelte";
  import Container from "../layout/Container.svelte";
  export let type: string = "";
  export let title: string = "";
  export let subtitle: string = "";
</script>

<div class="hero">
  <Container {type}>
    {#if title}
      <Heading el="h1" scale={5} text={title} />
    {/if}
    {#if subtitle}
      <p class="hero-subtitle">{subtitle}</p>
    {/if}
    <slot />
  </Container>
</div>

<style>
  .hero {
    padding-block: var(--hns-row-spacing, 8rem);
  }
  .hero-subtitle {
    font-size: 2rem;
  }
</style>
