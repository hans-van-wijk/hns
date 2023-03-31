<script lang="ts">
  import "./Drawer.css";

  export let open = false;
</script>

<div class="hns-drawer" class:open>
  <button on:click={() => (open = !open)}>Menu</button>
  <slot />
</div>

<style>
  .hns-drawer {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .hns-drawer.open {
    transform: translateX(0);
  }
</style>
