<template>
  <div class="container">
    <h2>Ordered List</h2>
    <h3>Basic</h3>
    <ol>
      <li v-for="typeSetting in typeSettings"
        :key="typeSetting.toLocaleLowerCase()">
        {{ typeSetting }}
      </li>
    </ol>
    <h3>Starting Number</h3>
    <ol start="17">
      <li v-for="typeSetting in typeSettings"
        :key="typeSetting.toLocaleLowerCase()">
        {{ typeSetting }}
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: "ListOrdered",
    data() {
      return {
        typeSettings: [
          'Gutenberg develops moveable type (1450s)',
          'Linotype is introduced (1890s)',
          'Photocomposition catches on (1950s)',
          'Type goes digital (1980s)'
        ]
      }
    }
  }
</script>

<style scoped>

</style>