<template>
  <div class="container">
    <h4>Underline</h4>
    <p class="txt-deco-underline">This is underline</p>
    <h4>Overline</h4>
    <p class="txt-deco-overline">Overline</p>
    <h4>Line Through</h4>
    <p class="txt-deco-line-through">Line Through</p>

    <div>
      <p>Toggle to Update the Text Decoration Value</p>
      <div class="btn-group">
        <button class="btn btn-primary" @click="applyUnderLine">Underline</button>
        <button class="btn btn-secondary" @click="applyOverLine">Overline</button>
        <button class="btn btn-danger" @click="applyLineThrough">Line Through</button>
        <button class="btn btn-info" @click="applyClear">Clear</button>
      </div>
      <br>
      <br>
      <p>👁‍ Watch: <span :class="[textDecoValue]">HELLO WORLD</span></p>
    </div>
  </div>
</template>

<script>
  const TEXT_DECORATION_VALUE = {
    UNDERLINE: "txt-deco-underline",
    OVERLINE: "txt-deco-overline",
    LINE_THROUGH: "txt-deco-line-through",
  }
export default {
  name: "TextDecoration",
  data() {
    return {
      textDecoValue: "",
    }
  },
  methods: {
    applyUnderLine() {
      this.textDecoValue =  TEXT_DECORATION_VALUE.UNDERLINE
    },
    applyOverLine() {
      this.textDecoValue = TEXT_DECORATION_VALUE.OVERLINE
    },
    applyLineThrough() {
      this.textDecoValue = TEXT_DECORATION_VALUE.LINE_THROUGH
    },
    applyClear() {
      this.textDecoValue = ""
    }
  }
}
</script>

<style scoped>
  .txt-deco-underline {
    text-decoration: underline;
  }
  .txt-deco-overline {
    text-decoration: overline;
  }
  .txt-deco-line-through {
    text-decoration: line-through;
  }
</style>