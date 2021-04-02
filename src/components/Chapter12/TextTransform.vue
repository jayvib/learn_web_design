<template>
  <div class="container">
    <div class="btn-group d-block">
      <button class="btn btn-primary" @click="applyNone">Normal</button>
      <button class="btn btn-secondary" @click="applyCapitalize">Capitalize</button>
      <button class="btn btn-warning" @click="applyLowerCase">Lowercase</button>
      <button class="btn btn-danger" @click="applyUpperCase">Uppercase</button>
      <button class="btn btn-success" @click="applyFullWidth">Full Width</button>
    </div>
    <p v-if="textTransformClass" class="mt-2">
      Value: {{ textTransformValue }}<br>
      Text: <span :class="[textTransformClass]">hello world</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "TextTransform",
    data() {
      return {
        textTransformClass: 'none',
        textTransformValue: 'None',
      }
    },
    methods: {
      applyCapitalize() {
        this.textTransformClass = 'txt-transform-capitalize'
        this.textTransformValue = 'Capitalize'
      },
      applyLowerCase() {
        this.textTransformClass = 'txt-transform-lowercase'
        this.textTransformValue = 'Lowercase'
      },
      applyUpperCase() {
        this.textTransformClass = 'txt-transform-uppercase'
        this.textTransformValue = 'Uppercase'
      },
      applyFullWidth() {
        this.textTransformClass = 'txt-transform-full-width'
        this.textTransformValue = 'Full-Width'
      },
      applyNone() {
        this.textTransformClass = 'txt-transform-none'
        this.textTransformValue = 'None'
      }
    }
  }
</script>

<style scoped>
  .txt-transform-capitalize {
    text-transform: capitalize;
  }

  .txt-transform-lowercase {
    text-transform: lowercase;
  }

  .txt-transform-uppercase {
    text-transform: uppercase;
  }

  .txt-transform-full-width {
    text-transform: full-width ;
  }

  .txt-transform-none {
    text-transform: none;
  }
</style>