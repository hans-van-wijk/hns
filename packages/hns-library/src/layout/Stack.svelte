<script>
  export let el = "div";
  export let spacing = "gutter";
  export let layout = "vertical";
  export let justify = "";
  export let spread = false;
</script>

<svelte:element
  this={el}
  class:hns-stack-spread={spread}
  class:hns-stack-center={justify === "center"}
  class={`hns-stack hns-stack-spacing-${spacing} 
  hns-stack-${layout}`}
>
  <slot />
</svelte:element>

<style>
  .hns-stack {
    display: flex;
    flex-direction: column;
    gap: var(--hns-gutter, 1rem);
  }
  .hns-stack-horizontal {
    flex-direction: row;
  }
  .hns-stack-center {
    align-items: center;
    text-align: center;
  }
  .hns-stack-spread {
    justify-content: space-between;
    align-items: center;
  }
  .hns-stack-spacing-row {
    gap: var(--hns-row-spacing, 10rem);
  }
  .hns-stack-spacing-small {
    gap: var(--hns-stack-spacing-small, 1rem);
  }
</style>
