<script lang="ts">
  import "./Input.css";
  /**
   * Type of input
   * @type {"default", "search"}
   */
  export let type = "default";
  export let placeholder = "";
</script>

<input class="hns-input" {type} {placeholder} />
