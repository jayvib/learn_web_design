<template>
  <div class="container">
    <h4>Linear Gradient</h4>
    <div class="linear-gradient ">
      <div
        v-for="bi in linearGradients"
        :key="bi"
        class="gradient-example mr-2 d-inline-block text-center"
        :style="`background-image:${bi}`"
      >
        <code>{{ bi }}</code>
      </div>
    </div>

    <h4>Radial Gradient</h4>
    <div class="radial-gradient ">
      <div
        v-for="rg in radialGradients"
        :key="rg"
        class="gradient-example mr-2 d-inline-block text-center"
        :style="`background-image:${rg}`"
      >
        <code>{{ rg }}</code>
      </div>
    </div>

    <h4>Repeating Gradient</h4>
    <div class="repeating-gradient ">
      <div
        v-for="rg in repeatingGradients"
        :key="rg"
        class="gradient-example mr-2 d-inline-block text-center"
        :style="`background-image:${rg}`"
      >
        <code>{{ rg }}</code>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Gradient",
  data() {
    return {
      linearGradients: [
        "linear-gradient(to top right, aqua, green)",
        "linear-gradient(180deg, aqua, green)",
        "linear-gradient(to top right, aqua, green)",
        "linear-gradient(90deg, yellow, orange 25%, purple)",
        "linear-gradient(54deg, red, orange, yellow, green, blue 50%)"
      ],
      radialGradients: [
        "radial-gradient(yellow, green)",
        "radial-gradient(circle, yellow, green)",
        "radial-gradient(200px 80px,yellow, green)",
        "radial-gradient(farthest-side at right bottom, yellow, orange 50%, purple)"
      ],
      repeatingGradients: [
        "repeating-linear-gradient(to bottom, white, silver 30px)",
        "repeating-linear-gradient(45deg, orange, orange 12px, white 12px, white 24px)"
      ]
    }
  }
}
</script>

<style scoped>
  .gradient-example {
    height: 250px;
    width: 250px;
  }
</style>