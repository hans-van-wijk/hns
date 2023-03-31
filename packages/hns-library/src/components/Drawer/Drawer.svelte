<script lang="ts">
  import "./Drawer.css";

  export let open = false;
</script>

<div class="hns-drawer" class:open>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span class="hns-drawer-close" on:click={() => (open = !open)}>X</span>
  <slot />
</div>
