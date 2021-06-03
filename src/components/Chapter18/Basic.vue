<template>
  <div class="container">
    <a href="#" class="smooth">awesomesauce</a>
  </div>
</template>

<script>
export default {
  name: "Basic"
}
</script>

<style scoped>
  .smooth {
    display: block;
    color: #FFFFFF;
    background-color: mediumblue;
    width: 10em;
    text-align: center;
    padding: 1em 2em;
    border-radius: 1.5em;
    text-decoration: none;
    transition-property: background-color;
    transition-duration: 1.3s;
    transition-timing-function: ease-out;
  }
  .smooth:hover, .smooth:focus {
    background-color: red;
  }
</style>