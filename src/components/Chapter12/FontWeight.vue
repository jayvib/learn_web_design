<template>
  <div class="container">
    <div class="verdana">
      👉 <span class="w-normal">Normal</span> |
      <span class="w-bold">bold</span> |
      <span class="w-bolder">bolder</span> |
      <span class="w-lighter">lighter</span>
    </div>
  </div>
</template>

<script>
export default {
name: "FontWeight"
}
</script>

<style scoped>
  .verdana {
    font-family: Verdana, sans-serif;
  }

  .verdana .w-normal {
    font-weight: normal;
  }

  .verdana .w-bold {
    font-weight: bold;
  }

  .verdana .w-bolder {
    font-weight: bolder;
  }

  .verdana .w-lighter {
    font-weight: lighter;
  }
</style>