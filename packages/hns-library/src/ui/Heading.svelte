<script lang="ts">
  export let el = "p";
  export let scale = 1;
  export let ratio = 1.333;
  export let uppercase = false;

  const remSize = () => {
    let value = scale;
    if (scale > 1) {
      value--;
      for (var i = 1; i < scale; i++) {
        // console.log(i);
        value = value * ratio;
      }
    }
    // console.log(value);
    return Math.round(value * 100) / 100 + "rem";
  };
</script>

<svelte:element
  this={el}
  class:uppercase
  class={`hns-heading hns-scale-${scale} ${$$props.class}`}
  style={`--hns-heading-max: ${remSize()}`}
>
  <slot />
</svelte:element>

<style>
  .hns-heading {
    line-height: 1.1;
    font-size: clamp(16px, 1rem + 9vw, var(--hns-heading-max));
  }

  .uppercase {
    text-transform: uppercase;
    letter-spacing: -0.06em;
  }
</style>
