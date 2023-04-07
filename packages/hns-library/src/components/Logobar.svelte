<script lang="ts">
  // Based on https://github.com/abosch19/svelte-fast-marquee/blob/main/src/Marquee.svelte
</script>

<div class="hns-logo-bar">
  <div class="hns-logo-bar--logos">
    <slot />
  </div>
  <div class="hns-logo-bar--logos">
    <slot />
  </div>
</div>

<style>
  .hns-logo-bar {
    will-change: transform;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: var(--hns-color-primary);
    color: var(--hns-color-white);
    font-size: 1.5rem;
    font-weight: 700;
    width: 100%;
    overflow: hidden;
    container: hns-logo-bar / inline-size;
    position: relative;
  }

  .hns-logo-bar::before,
  .hns-logo-bar::after {
    content: "";
    display: block;
    width: 2rem;
    bottom: 0;
    position: absolute;
    top: 0;
    background: linear-gradient(
      90deg,
      var(--hns-app-background, #fff) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 1;
    /* mouse-pointer-events: none; */
  }

  .hns-logo-bar::before {
    left: 0;
  }

  .hns-logo-bar::after {
    right: 0;
    transform: rotate(180deg);
  }

  .hns-logo-bar--logos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: var(--hns-gutter, 1rem);
    animation: hns-logo-bar--animation 25s linear infinite;
    padding-left: var(--hns-gutter, 1rem);
  }

  @keyframes hns-logo-bar--animation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
