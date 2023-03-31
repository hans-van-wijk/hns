<script lang="ts">
  export let rev = false;
</script>

<div class="hns-split" class:hns-split-rev={rev}>
  <slot name="first" />
  <slot name="second" />
</div>
