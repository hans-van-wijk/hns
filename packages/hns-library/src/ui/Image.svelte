<script lang="ts">
  export let width: number = 600;
  export let height: number = 400;
  export let src = `https://via.placeholder.com/${width}x${height}?text=IMG`;
</script>

<img alt="Placeholder" {src} />
