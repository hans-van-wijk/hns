<script lang="ts">
  export let masonry = false;
</script>

<div class="hns-grid" class:masonry>
  <slot />
</div>

<style>
  .hns-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
    gap: var(--hns-gutter);
  }

  .masonry {
    /* firefox */
    grid-template-rows: masonry;
  }
</style>
