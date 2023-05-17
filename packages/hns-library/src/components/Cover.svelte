<script lang="ts">
  import Heading from "../ui/Heading.svelte";
  import Text from "../ui/Text.svelte";
  import Button from "../ui/Button/Button.svelte";
  import Stack from "../layout/Stack.svelte";

  export let image = "";
  export let title = "";
  export let description = "";
  export let link = "";
  export let position = "end";
</script>

<div class="cover" style={`align-items: ${position} `}>
  <div class="cover__content">
    <Stack spacing="small">
      <Heading scale={2.2} level="1" class="cover__title">{title}</Heading>
      <Text class="cover__description">{description}</Text>
      <a href={link} class="link">
        <Button>Read more</Button>
      </a>
    </Stack>
  </div>
  <div class="cover__media">
    <img class="cover__media__image" src={image} alt={title} />
  </div>
</div>

<style>
  :global(.hns-main:has(.cover)) {
    padding-top: 0;
  }

  .cover {
    position: relative;
    overflow: hidden;
    aspect-ratio: 21 / 9;
    background: purple;
    display: flex;
    padding-block: var(--hns-row-spacing, 4rem);
    padding-inline: var(--hns-column-spacing, 4rem);
    color: #fff;
    --hns-heading-color: #fff;
  }

  .cover__content {
    position: relative;
    z-index: 1;
    max-width: var(--hns-content-widths, 45ch);
  }

  .cover__media {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    mix-blend-mode: multiply;
  }

  .cover__media__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
  }
</style>
