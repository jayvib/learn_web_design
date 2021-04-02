<template>
  <div class="container">
    <h1 id="opa1" class="display-4">Playing with Opacity</h1>
    <h1 id="opa2" class="display-4">Playing with Opacity</h1>
    <h1 id="opa3" class="display-4">Playing with Opacity</h1>
  </div>
</template>

<script>
export default {
name: "Opacity"
}
</script>

<style scoped>
   h1 {
     color: gold;
     background: white;
     font-weight: bold;
   }
  #opa1 {
    opacity: .25;
  }

  #opa2 {
    opacity: .5;
  }

  #opa3 {
    opacity: 1;
  }

  .container {
    background-color: #00b5ad;
    padding: 3em;
  }
</style>