<script lang="ts">
  export let width = 600;
  export let height = 400;
  export let ratio = "panoramic";
  export let src = `https://via.placeholder.com/${width}x${height}?text=IMG`;
</script>

<picture class={`hns-image-container hns-ar-${ratio}`}>
  <source srcset={src} type="image/webp" />
  <source srcset={src} type="image/jpeg" />
  <img
    width="1300"
    class="lazy hns-image"
    alt="studio"
    loading="eager"
    decoding="async"
    {src}
  />
</picture>

<style>
  .hns-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .hns-ar-panoramic {
    aspect-ratio: 16/9;
  }
  .hns-ar-vertical {
    aspect-ratio: 9/16;
  }
  .hns-ar-square {
    aspect-ratio: 1/1;
  }
  .hns-ar-horizontal,
  .hns-image {
    aspect-ratio: 4/3;
  }
  .hns-ar-portrait {
    aspect-ratio: 3/4;
  }
</style>
