<template>
  <div class="container">
    <h2>Unordered List</h2>
    <h3>Basic</h3>
    <ul>
      <li v-for="font in fonts" :key="font">{{ font }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ListUnordered",
    data() {
      return {
        fonts: [
          "Serif",
          "Sans-serif",
          "Script",
          "Display",
          "Dingbats"
        ]
      }
    }
  }
</script>

<style scoped>

</style>