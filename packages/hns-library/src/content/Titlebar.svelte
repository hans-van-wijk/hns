<script lang="ts">
  import Heading from "../ui/Heading.svelte";

  export let title = "";
  export let scale = 1;
</script>

<div class="hns-titlebar">
  <Heading {scale} level={3} class="titlebar__title">{title}</Heading>
</div>

<style>
  .hns-titlebar {
    --border-color: var(--hns-border-color);
    padding-bottom: calc(var(--hns-gutter) / 2);
    border-bottom: 1px solid var(--border-color);
  }
</style>
