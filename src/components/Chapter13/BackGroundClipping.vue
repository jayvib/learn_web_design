<template>
  <div class="container">
    <blockquote v-for="(value, index) in values" :key="'bgc'+index" :class="['bgc'+index]">
      <h4>{{ value }}</h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris dapibus auctor vestibulum. Praesent mollis convallis pretium.
      Vestibulum ac lacus quis eros tincidunt efficitur.
      Etiam posuere, diam quis varius malesuada, sapien metus consequat neque,
      et pharetra metus nibh eget ligula. Donec in pulvinar neque. Fusce ac ipsum elit.
      Etiam consequat volutpat justo eget auctor. Vestibulum vitae libero sed libero volutpat tempor.
      Nulla eleifend mattis gravida. Donec lacinia est et pretium vestibulum.
      Nam ultrices eros et metus faucibus, vel laoreet ipsum accumsan. Vivamus vitae urna quam.
      Nullam eu suscipit dolor, sit amet bibendum dui. Aenean consectetur mauris quis malesuada feugiat. Quisque faucibus ultrices nulla, vel euismod purus molestie a.
    </blockquote>
  </div>
</template>

<script>
export default {
name: "BackGroundClipping",
  data() {
  return {
    loop: 3,
    values: ['Border Box', 'Padding Box', 'Content Box']
  }
  }
}
</script>

<style scoped>
  blockquote {
    color: green;
    border: 10px dashed;
    background: #c6de89;
    padding: 1em;
  }

  .bgc0 {
    background-clip: border-box;
  }

  .bgc1 {
    background-clip: padding-box;
  }

  .bgc2 {
    background-clip: content-box;
  }
</style>