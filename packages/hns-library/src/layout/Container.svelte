<script lang="ts">
  export let type = "";
  export let padded = false;
  export let alignContent = "";
</script>

<div
  class="hns-container"
  class:hns-container--padded={padded}
  class:hns-container-content={type === "content"}
  class:hns-container-contained={type === "contained"}
>
  <slot />
</div>

<style>
  .hns-container {
    margin-inline: auto;
    /* outline: 1px solid red; */
    container: container / inline-size;
    width: 100%;
  }

  .hns-container--padded {
    padding-inline: var(--hns-container-padding);
  }

  .hns-container-content {
    max-width: var(--hns-container-content-width, 55ch);
  }

  .hns-container-contained {
    max-width: calc(var(--hns-container-content-width, 55ch) * 2);
  }
</style>
