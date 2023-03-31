<script lang="ts">
  export let el: string = "span";
  export let text: string;
  export let scale: number = 1;
</script>

<svelte:element
  this={el}
  style={scale > 1
    ? `font-size: calc(${scale} * 1.333rem)`
    : "font-size: 1rem;"}
>
  {text}
</svelte:element>
