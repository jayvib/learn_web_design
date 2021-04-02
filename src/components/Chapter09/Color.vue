<template>
  <div class="container">
    <label>Your favorite color: <input type="color" v-model="favoriteColor"></label>
    Value: {{ favoriteColor }}
  </div>
</template>

<script>
  export default {
    name: "Color",
    data() {
      return {
        favoriteColor: null
      }
    }
  }
</script>

<style scoped>

</style>