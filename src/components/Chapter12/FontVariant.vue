<template>
  <div>
    <h4>Small</h4>
    <p>2017<span class="small">AD</span></p>
    <h4>Ligatures</h4>
    <p>24<span id="ligature">fi</span> fi</p>
  </div>
</template>

<script>
export default {
  name: "FontVariant"
}
</script>

<style scoped>
  span.small {
    font-variant: small-caps;
  }

  span#ligature {
    font-variant-ligatures: common-ligatures;
  }
</style>