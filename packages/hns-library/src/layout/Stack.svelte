<script>
  export let spacing = "gutter";
</script>

<div class="hns-stack hns-stack-spacing-{spacing}">
  <slot />
</div>

<style>
  .hns-stack {
    display: flex;
    flex-direction: column;
    gap: var(--hns-gutter, 2.5rem);
  }
  .hns-stack-spacing-row {
    gap: var(--hns-row-spacing, 10rem);
  }
</style>
