<script lang="ts">
  // https://codepen.io/ntenebruso/pen/QWLzVjY
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  let cursor = tweened(0, { duration: 200, easing: cubicOut });
  let cursorInner = tweened(0, { duration: 200, easing: cubicOut });

  onMount(() => {
    document.addEventListener("mousemove", (e) => {
      cursor.set(e.clientX);
      cursorInner.set(e.clientY);
    });
  });

  $: style = `left: ${$cursor}px; top: ${$cursorInner}px;`;
  $: cursorInnerStyle = `left: ${$cursor}px; top: ${$cursorInner}px;`;
</script>

<div class="cursor" {style} />
<div class="cursor-inner" style={cursorInnerStyle} />

<style>
  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #e1e1e1;
    mix-blend-mode: difference;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9999;
  }

  .cursor-inner {
    position: fixed;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    mix-blend-mode: difference;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9999;
  }
</style>
