<div class="hns-section">
  {#if $$slots.mediabg}
    <div class="hns-section-mediabg">
      <slot name="mediabg" />
    </div>
  {/if}
  <slot />
</div>

<style>
  .hns-section {
    position: relative;
    padding-block: var(--hns-row-spacing, 4rem);
  }

  .hns-section-mediabg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>
