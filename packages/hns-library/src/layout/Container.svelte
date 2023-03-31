<script lang="ts">
  export let type: string = "";
</script>

<div
  class="hns-container"
  class:hns-container-content={type === "content"}
  class:hns-container-contained={type === "contained"}
>
  <slot />
</div>

<style>
  .hns-container {
    padding-inline: var(--hns-container-padding);
    margin-inline: auto;
    /* outline: 1px solid red; */
    container: container / inline-size;
    width: 100%;
  }

  .hns-container-content {
    max-width: var(--hns-container-content-width, 55ch);
  }

  .hns-container-contained {
    max-width: calc(var(--hns-container-content-width, 55ch) * 2);
  }
</style>
