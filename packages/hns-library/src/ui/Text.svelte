<script lang="ts">
  export let el: string = "span";
  export let text: string;
  export let scale: number = 1;

  const remSize = () => {
    const sizesArray = Array.from({ length: scale });
    if (sizesArray.length > 0) {
      return 0;
    } else {
      return 16;
    }
  };
</script>

<svelte:element
  this={el}
  class={`hns-heading hns-scale-${remSize()}`}
  style={scale > 1
    ? `font-size: calc(${scale} * 1.333rem)`
    : "font-size: 1rem;"}
>
  {text}
</svelte:element>
