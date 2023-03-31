<script lang="ts">
  export let el: string = "p";
  export let text: string;
  export let scale: number = 1;
</script>

<svelte:element
  this={el}
  class={`hns-heading hns-scale-${scale}`}
  style={`font-size: calc(${scale} * 1.333rem)`}
>
  {text}
</svelte:element>

<style>
  .hns-heading {
    line-height: 1.1;
  }
</style>
