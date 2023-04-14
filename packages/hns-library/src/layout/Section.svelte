<script lang="ts">
  export let el = "section";
  export let spacing = "";
</script>

<svelte:element
  this={el}
  class={`hns-section ${$$props.class}`}
  class:hns-section-spacing-page={spacing === "page"}
  class:hns-section-spacing-small={spacing === "small"}
>
  {#if $$slots.mediabg}
    <div class="hns-section-mediabg">
      <slot name="mediabg" />
    </div>
  {/if}
  <slot />
</svelte:element>

<style>
  .hns-section {
    position: relative;
    padding-block: var(--hns-row-spacing, 2rem);
  }

  .hns-section-spacing-page {
    padding-block: var(--hns-section-page-spacing, 4rem);
  }

  .hns-section-mediabg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>
