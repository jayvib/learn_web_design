<template>
  <div class="container">
    <h4>RGB</h4>
    <div class="cname p-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris dapibus auctor vestibulum. Praesent mollis convallis pretium.
      Vestibulum ac lacus quis eros tincidunt efficitur.
      Etiam posuere, diam quis varius malesuada, sapien metus consequat neque,
      et pharetra metus nibh eget ligula. Donec in pulvinar neque. Fusce ac ipsum elit.
      Etiam consequat volutpat justo eget auctor. Vestibulum vitae libero sed libero volutpat tempor.
      Nulla eleifend mattis gravida. Donec lacinia est et pretium vestibulum.
      Nam ultrices eros et metus faucibus, vel laoreet ipsum accumsan. Vivamus vitae urna quam.
      Nullam eu suscipit dolor, sit amet bibendum dui. Aenean consectetur mauris quis malesuada feugiat. Quisque faucibus ultrices nulla, vel euismod purus molestie a.
    </div>

    <h4 class="mt-4">RGBa</h4>
    <div class="rgba p-2 display-2">
      <p id="rgba-1">Play with RGBA</p>
      <p id="rgba-2">Play with RGBA</p>
      <p id="rgba-3">Play with RGBA</p>
    </div>

    <h4 class="mt-4">HSL</h4>
    <div class="hsl display-4">
      Play With Hue
    </div>
  </div>
</template>

<script>
export default {
name: "ColorName"
}
</script>

<style scoped>
  .cname {
    color: silver;
    background-color: gray;
    border-bottom-color: teal;
  }

  .rgba {
    background-color: #6cca7d;
    font-weight: bold;
  }

  #rgba-1 {
    color: rgba(0, 0, 0, .1);
  }

  #rgba-2 {
    color: rgba(0, 0, 0, .5);
  }

  #rgba-3 {
    color: rgba(0, 0, 0, 1);
  }

  .hsl {
    color: hsla(265, 51%, 80%, .65);
  }

</style>