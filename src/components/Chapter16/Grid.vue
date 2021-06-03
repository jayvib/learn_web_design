<template>
  <div class="container">

    <h4>Basic</h4>
    <div id="layout">
      <div class="one">One</div>
      <div class="two">Two</div>
      <div class="three">Three</div>
      <div class="four">Four</div>
      <div class="five">Five</div>
    </div>

    <h4>Named Grid</h4>
    <div id="named-grid">
      <div class="one">One</div>
      <div class="two">Two</div>
      <div class="three">Three</div>
      <div class="four">Four</div>
      <div class="five">Five</div>
    </div>

    <h4>Fractional Unit</h4>
    <p>Allows to fill up the remaining space.</p>
    <div id="fractional-unit">
      <div class="one">One</div>
      <div class="two">Two</div>
      <div class="three">Three</div>
      <div class="four">Four</div>
      <div class="five">Five</div>
    </div>

    <h4>Min-Max Size Range</h4>
    <div id="min-max-range">
      <div class="one">One</div>
      <div class="two">Two</div>
      <div class="three">Three</div>
      <div class="four">Four</div>
      <div class="five">Five</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid"
}
</script>

<style scoped>

  #min-max-range {
    display: grid;
    grid-template-rows: 100px 400px 100px;
    grid-template-columns: 200px minmax(15em, 45em) 200px;
  }

  #fractional-unit {
    display: grid;
    grid-template-rows: 100px 400px 100px;
    grid-template-columns: 200px 1fr 200px;
  }

  #named-grid {
    display: grid;
    grid-template-rows: [header-start] 100px [content-start] 400px [footer-start] 100px;
    grid-template-columns: [ads] 200px [main] 500px [links] 200px;
  }

  #layout {
    display: grid;
    grid-template-rows: 100px 400px 100px;
    grid-template-columns: 200px 500px 200px;
  }

  .one {
    background-color: #b30303;
    color: white;
  }

  .two {
    background-color: orangered;
    color: white;
  }

  .three {
    background-color: #77c105;
    color: white;
  }

  .four {
    background-color: #54b1dc;
    color: white;
  }

  .five {
    background-color: fuchsia;
    color: white;
  }
</style>