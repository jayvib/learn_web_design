<template>
  <div class="container">
    <div
      class="example"
      v-for="bs in boxShadows"
      :key="bs"
      :style="'box-shadow:'+bs">
      {{ bs }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxDropShadows",
  data() {
    return {
      boxShadows: [
        "6px 6px gray;",
        "6px 6px 5px gray;", // 5px blur
        "6px 6px 5px 10px gray;"
      ]
    }
  }
}
</script>

<style scoped>
  .example {
    background-color: #c6de89;
    height: 250px;
    width: 250px;
    display: inline-block;
    margin-right: 1em;
  }
</style>