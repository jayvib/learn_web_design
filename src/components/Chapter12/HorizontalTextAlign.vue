<template>
  <div class="container">
    <h4>Text Align Left</h4>
    <p id="text-align-p1">
      Percentage values are calculated based on the width of the parent element,
      and they are passed down to their descendant elements as percentage values
      (not calculated values). So if a div has a text-indent of 10%, so will all of its
      descendants.
    </p>

    <h4>Text Align Right</h4>
    <p id="text-align-p2">
      Percentage values are calculated based on the width of the parent element,
      and they are passed down to their descendant elements as percentage values
      (not calculated values). So if a div has a text-indent of 10%, so will all of its
      descendants.
    </p>
  </div>
</template>

<script>
export default {
name: "HorizontalTextAlign"
}
</script>

<style scoped>
  #text-align-p1 {
    text-align: left;
  }

  #text-align-p2 {
    text-align: right;
  }
</style>