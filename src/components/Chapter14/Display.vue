<template>
  <div class="container">
    <h4>Block Display</h4>
    <div class="block-example">
      <span style="background-color: #c6de89;">Hello</span>
      <span style="background-color: #999999;">World</span>
    </div>
    <h4>Inline Display</h4>
    <div class="inline-example">
      <div style="background-color: #c6de89;">Hello</div>
      <div style="background-color: #999999;">World</div>
    </div>
    <h4>Inline Block Display</h4>
    <div class="inline-block-example">
      <div style="background-color: #c6de89;">Hello</div>
      <div style="background-color: #999999;">World</div>
    </div>
  </div>
</template>

<script>
export default {
name: "Display"
}
</script>

<style scoped>
  .block-example span {
    display: block;
  }
  .inline-example div {
    display: inline;
    margin-right: 10px;
    height: 3em;
  }

  .inline-block-example div {
    display: inline-block;
    height: 3em;
    margin-right: 10px;
  }
</style>