<script lang="ts">
  export let el: string = "span";
  export let text: string;
  export let scale: number = 1;
  export let contrast = false;
  export let block = false;

  const remSize = () => {
    let value = scale - 1;
    // console.log(value);
    if (scale > 1) {
      for (var i = 0; i < scale; i++) {
        value = value * 1.333;
      }
    }

    return Math.round(value * 100) / 100 + "rem";
  };
</script>

<svelte:element
  this={el}
  class={`hns-text`}
  class:hns-display-block={block}
  class:hns-text--contrast={contrast}
  style={scale > 1
    ? `font-size: calc(${scale} * 1.333rem)`
    : "font-size: 1rem;"}
>
  <slot />
  {text}
</svelte:element>
