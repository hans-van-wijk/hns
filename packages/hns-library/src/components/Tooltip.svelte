<!--
  <Tooltip title="Tooltip text">
    Hello world
  </Tooltip>
-->

<script lang="ts">
  export let title = "";
  let isHovered = false;
  let x;
  let y;

  function mouseMove(event) {
    x = event.clientX;
    y = event.clientY;
  }
  function mouseOver(event) {
    isHovered = true;
    x = event.clientX;
    y = event.clientY;
  }
  function mouseLeave(event) {
    isHovered = false;
    x = event.clientX;
    y = event.clientY;
  }
</script>

<div
  on:mousemove={mouseMove}
  on:mouseover={mouseOver}
  on:mouseleave={mouseLeave}
>
  <slot />
</div>

{#if isHovered}
  <div class="tooltip" style="top: {y}px; left: {x}px ">
    {title}
  </div>
{/if}

<style>
  div {
    position: relative;
  }
  .tooltip {
    border: 1px solid black;

    background-color: white;
    position: absolute;
  }
</style>
