<template>
  <div>
    <span class="normal">Normal</span> |
    <span class="italic">Italic</span> |
    <span class="oblique">Oblique</span> |
  </div>
</template>

<script>
export default {
name: "FontStyleItalic"
}
</script>

<style scoped>
  .normal {
    font-style: normal;
  }

  .italic {
    font-style: italic;
  }

  .oblique {
    font-style: oblique;
  }
</style>