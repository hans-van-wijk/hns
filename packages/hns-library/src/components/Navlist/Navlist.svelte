<script lang="ts">
  import "./Navlist.css";
  export let items = [];
</script>

{#if items.length > 0}
  <nav class="hns-nav-list">
    <ul>
      {#each items as { title, link }}
        <li>
          <a class="hns-box-link" href={link}>
            {title}
          </a>
        </li>
      {/each}
      <li />
    </ul>
  </nav>
{/if}
