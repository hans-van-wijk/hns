<script lang="ts">
  export let url: string;
</script>

<div class="hns-video-bg">
  <video playsinline={true} autoplay={true} loop={true} src={url} muted />
  <slot />
</div>

<style>
  .hns-video-bg {
    position: relative;
  }

  .hns-video-bg video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
</style>
