<template>
  <div class="container">
    <h2>Number</h2>
    <p>
      Number of guest: <input type="number" v-model="guests" min="1" max="6"><br>
      Value: {{ guests }}
    </p>

    <h2>Range</h2>
    <p>
      Satisfactory (from 0 to 10):
      <input type="range" v-model="satisfaction" step="1" max="10" min="0"><br/>
      Value: {{ satisfaction }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "Numeric",
    data() {
      return {
        guests: 0,
        satisfaction: 0,
      }
    }
  }
</script>

<style scoped>

</style>