<script lang="ts">
  import "hancss/styles/button.css";

  /**
   * Kind of button
   * @type {"neutral", "cta"}
   */
  export let kind = "neutral";
  /**
   * Size of button
   * @type {"tiny", "small", "normal", "large"}
   */
  export let size = "normal";
</script>

<a on:click href="/" class="hns-button hns-button-{kind} hns-button-{size}">
  <slot />
</a>
