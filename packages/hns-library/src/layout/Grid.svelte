<script lang="ts">
  export let col = 6;
</script>

<div class="hns-grid" style={`grid-template-columns: repeat(2, 1fr)`}>
  <slot />
</div>

<style>
  .hns-grid {
    display: grid;
    grid-gap: var(--hns-gutter);
  }
</style>
