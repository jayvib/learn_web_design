<template>
  <div>
    <h2>Description List</h2>
    <dl>
      <fragment
        v-for="typeSetting in typeSettings"
        :key="typeSetting.name.toLocaleLowerCase()">
        <dt>{{ typeSetting.name }}</dt>
        <dd>{{ typeSetting.description }}</dd>
      </fragment>
    </dl>
  </div>
</template>

<script>
  export default {
    name: "ListDescription",
    data() {
      return {
        typeSettings: [
          {
            name: "Linotype",
            description: "Line-casting allowed type to be selected, used, then recirculated\n" +
              "into the machine automatically. This advance increased the speed of\n" +
              "typesetting and printing dramatically."
          },
          {
            name: "Photocomposition",
            description: "Typefaces are stored on film then projected onto photo-sensitive\n" +
              "paper. Lenses adjust the size of the type."
          },
          {
            name: "Digital type",
            description: "Digital typefaces store the outline of the font shape in a\n" +
              "format such as Postscript. The outline may be scaled to any size for\n" +
              "output.\n" +
              "Postscript emerged as a standard due to its support of\n" +
              "graphics and its early support on the Macintosh computer and Apple\n" +
              "laser printer."
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>