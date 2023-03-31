<div class="layout-sidebar">
  <div class="hns-sidebar">
    <slot name="sidebar" />
  </div>
  <div class="hns-sidebar-main">
    <slot />
  </div>
</div>

<style>
  .layout-sidebar {
    min-height: 100vh;
    display: grid;
    grid-template-columns: minmax(4rem, 30ch), auto;
  }
  .hns-sidebar-main {
    container: main / inline-size;
  }
</style>
