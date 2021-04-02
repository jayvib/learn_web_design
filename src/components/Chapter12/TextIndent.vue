<template>
  <div class="container">
    <h4>With 2em Indentation</h4>
    <p id="p1">
      Percentage values are calculated based on the width of the parent element,
      and they are passed down to their descendant elements as percentage values
      (not calculated values). So if a div has a text-indent of 10%, so will all of its
      descendants.
    </p>
    <h4>With 25% Indentation</h4>
    <p id="p2">
      Percentage values are calculated based on the width of the parent element,
      and they are passed down to their descendant elements as percentage values
      (not calculated values). So if a div has a text-indent of 10%, so will all of its
      descendants.
    </p>
    <h4>With -35px Indentation </h4>
    <p id="p3">
      Percentage values are calculated based on the width of the parent element,
      and they are passed down to their descendant elements as percentage values
      (not calculated values). So if a div has a text-indent of 10%, so will all of its
      descendants.
    </p>
  </div>
</template>

<script>
export default {
  name: "TextIndent"
}
</script>

<style scoped>
  #p1 {
    text-indent: 2em;
  }

  #p2 {
    text-indent: 25%;
  }

  #p3 {
    text-indent: -35px;
  }
</style>