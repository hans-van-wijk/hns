<!-- https://codepen.io/argyleink/pen/bGgyOGP -->

<div class="hns-carrousel">
  <slot />
</div>

<style>
  .hns-carrousel {
    --column-size: 55ch;
    overflow-x: scroll;
    overscroll-behavior-inline: contain;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 2.5rem;
    max-width: 100%;
    display: grid;
    grid-auto-flow: column;
    gap: 2.5rem;
    margin-bottom: 160px;
  }

  :global(.hns-carrousel > *) {
    width: var(--column-size);
    max-width: calc(100vw - 7.5rem);
  }
</style>
