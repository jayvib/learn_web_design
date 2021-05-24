<template>
  <div class="container">
    <h4>Relative Positioning</h4>
    <div class="example" id="relative-positioning">
      Here I’ve positioned an inline em element. A <em>bright background color</em> on the
      em and a border on the containing paragraph make their boundaries appar-
      ent.
    </div>

    <h4 class="mt-2">Absolute Positioning</h4>
    <div>
      <div class="example" id="absolute-positioning" style="border: 1px solid black;">
        <p>Here I’ve positioned an inline em element. A <em>bright background color</em> on the
        em and a border on the containing paragraph make their boundaries appar-
        </p>
        ent.
      </div>
    </div>

    <h4 class="mt-2">Pixel Measurements</h4>
    <div id="pixel-measurement-A">
      <div id="pixel-measurement-B">
        <p>Here I’ve positioned an inline em element. A <em>bright background color</em> on the
          em and a border on the containing paragraph make their boundaries appar-
        </p>
      </div>
    </div>

    <h4 class="mt-2">Percentage Measurements</h4>
    <div id="percent-measurement-A">
      <div id="percent-measurement-B">
        <p>Here I’ve positioned an inline em element. A <em>bright background color</em> on the
          em and a border on the containing paragraph make their boundaries appar-
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Positioning"
}
</script>

<style scoped>
  #percent-measurement-A {
    position: relative;
    width: 75%;
    height: 300px;
    background-color: #c6de89;
  }

  #percent-measurement-B {
    position: absolute;
    background-color: steelblue;
    color: white;
    bottom: 0;
    left: 25%;
    padding: 1em;
  }

  #pixel-measurement-A {
    position: relative;
    width: 600px;
    height: 300px;
    background-color: #c6de89;
  }

  #pixel-measurement-B {
    position: absolute;
    background-color: steelblue;
    color: white;
    top: 25px;
    right:  50px;
    left: 100px;
    bottom: 75px;
  }

  #absolute-positioning em {
    position: absolute;
    top: 5px;
    left: 3em;
    margin: 25px;
    width: 200px;
    background-color: fuchsia;
  }

  #absolute-positioning p {
    position: relative;
    border: 2px solid purple;
  }

  .example {
    width: 75%;
    background-color: #d2dc9d;
    padding: 1em;
  }

  #relative-positioning em {
    position: relative;
    top: 2em;
    left: 3em;
    background-color: purple;
  }
</style>