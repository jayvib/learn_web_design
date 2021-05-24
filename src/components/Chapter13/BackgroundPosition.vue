<template>
  <div>

    <h4>Background Position: left bottom</h4>
    <div class="left-bottom canvas">
      <h5>Repeating Round</h5>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris dapibus auctor vestibulum. Praesent mollis convallis pretium.
      Vestibulum ac lacus quis eros tincidunt efficitur.
      Etiam posuere, diam quis varius malesuada, sapien metus consequat neque,
      et pharetra metus nibh eget ligula. Donec in pulvinar neque. Fusce ac ipsum elit.
      Etiam consequat volutpat justo eget auctor. Vestibulum vitae libero sed libero volutpat tempor.
      Nulla eleifend mattis gravida. Donec lacinia est et pretium vestibulum.
      Nam ultrices eros et metus faucibus, vel laoreet ipsum accumsan. Vivamus vitae urna quam.
      Nullam eu suscipit dolor, sit amet bibendum dui. Aenean consectetur mauris quis malesuada feugiat. Quisque faucibus ultrices nulla, vel euismod purus molestie a.
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

    <br>
    <div class="right-center canvas">
      <h5>Repeating Round</h5>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris dapibus auctor vestibulum. Praesent mollis convallis pretium.
      Vestibulum ac lacus quis eros tincidunt efficitur.
      Etiam posuere, diam quis varius malesuada, sapien metus consequat neque,
      et pharetra metus nibh eget ligula. Donec in pulvinar neque. Fusce ac ipsum elit.
      Etiam consequat volutpat justo eget auctor. Vestibulum vitae libero sed libero volutpat tempor.
      Nulla eleifend mattis gravida. Donec lacinia est et pretium vestibulum.
      Nam ultrices eros et metus faucibus, vel laoreet ipsum accumsan. Vivamus vitae urna quam.
      Nullam eu suscipit dolor, sit amet bibendum dui. Aenean consectetur mauris quis malesuada feugiat. Quisque faucibus ultrices nulla, vel euismod purus molestie a.
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
  </div>
</template>

<script>
export default {
name: "BackgroundPosition",
  data() {
    return {
      positionsKeyword: ["left bottom", "right center"]
    }
  }
}
</script>

<style scoped>
  div.canvas {
    background-color: #c6de89;
    padding: 5px;
    background-image: url("../../assets/chapter13/goose_shadow.png");
    background-repeat: no-repeat;
  }

  .left-bottom {
    background-position: left bottom;
  }

  .right-center {
    background-position: right center;
  }


</style>