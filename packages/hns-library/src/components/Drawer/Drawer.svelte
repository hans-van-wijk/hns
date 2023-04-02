<script lang="ts">
  import Icon from "@iconify/svelte";
  import "./Drawer.css";

  export let open = false;
</script>

<div class="hns-drawer" class:open>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span class="hns-drawer-close" on:click={() => (open = !open)}>
    <Icon icon="feather:x" /></span
  >
  <slot />
</div>
