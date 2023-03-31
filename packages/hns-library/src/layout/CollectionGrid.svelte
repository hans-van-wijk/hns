<div class="hns-collection-grid">
  <slot />
</div>

<style>
  .hns-collection-grid {
    display: grid;
    gap: var(--hns-gutter, 2.5rem);
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
</style>
