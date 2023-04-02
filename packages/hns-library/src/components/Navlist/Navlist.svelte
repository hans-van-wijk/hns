<script lang="ts">
  import "./Navlist.css";
  import Stack from "../../layout/Stack.svelte";
  export let layout = "vertical";
  export let items = [];
</script>

{#if items.length > 0}
  <nav class="hns-nav-list">
    <Stack el="ul" {layout}>
      {#each items as { title, link }}
        <li>
          <a class="hns-box-link" href={link}>
            {title}
          </a>
        </li>
      {/each}
    </Stack>
  </nav>
{/if}
