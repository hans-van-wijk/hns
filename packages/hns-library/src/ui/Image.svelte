<script lang="ts">
  export let width = 600;
  export let height = 400;
  // Panoramic (16:9) | Vertical (9:16) | Square (1:1) | Horizontal (4:3) | Portrait (3:4)
  /**
   * @type {"panoramic" | "vertical" | "square" | "horizontal" | "portrait"}
   */
  export let ratio = "panoramic";
  export let src = `https://via.placeholder.com/${width}x${height}?text=IMG`;
</script>

<img class={`hns-ar-${ratio}`} alt="Placeholder" {src} />

<style>
  img {
    object-fit: cover;
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
  .hns-ar-horizontal {
    aspect-ratio: 4/3;
  }
  .hns-ar-portrait {
    aspect-ratio: 3/4;
  }
</style>
