<script type="ts"></script>

<div data-theme="default-light" class="hns-card theme-default">
  <slot />
</div>

<style>
  .hns-card {
    padding: var(--hns-gutter, 2.5rem);
    border: 1px solid var(--hns-island-line-color);
    min-height: 100%;
    background-color: var(--hns-island-background-color);
  }
</style>
