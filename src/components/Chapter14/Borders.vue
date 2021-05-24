<template>
  <div class="borders">
    <h4>Border Styles</h4>
    <div id="example01" class="example">
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
    </div>
    <br/>
    <div id="example02" class="example">
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
    </div>
    <br>
    <h4>Border Width</h4>
    <div id="example03" class="example">
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
    </div>
    <br>
    <div id="example04" class="example">
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
    </div>

    <br>
    <h4>Border Color</h4>
    <div id="example05" class="example">
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
    </div>
    <br>
    <h4>Shorthand</h4>
    <div id="example06" class="example">
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
    </div>
    <b4></b4>
    <h4>Rounded Corner</h4>
    <div
      v-for="roundedCornerValue in roundedCornerValues"
      :key="roundedCornerValue"
      style="height: 250px; width: 250px; background-color: #c6de89"
      :style="roundedCornerValue"
      class="d-inline-block rounded-corner"
    >
      {{ roundedCornerValue }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Borders",
  data() {
    return {
      roundedCornerValues: [
        "border-radius: 1em",
        "border-radius: 50px",
        "border-top-right-radius:  50px;",
        "border-top-left-radius: 1em; border-top-right-radius: 2em; border-bottom-right-radius: 1em;",
      ]
    }
  }
}
</script>

<style scoped>
  .rounded-corner {
    margin-right: 10px;
  }

  .example {
    background-color: #c6de89;
    padding: 2em 4em;
  }

  #example01 {
    border-top-style: solid;
    border-right-style: dashed;
    border-bottom-style: double;
    border-left-style: dotted;
  }

  #example02 {
    border-style: solid dashed double dotted;
  }

  #example03 {
    border-style: solid;
    border-top-width: thin;
    border-right-width: medium;
    border-bottom-width: thick;
    border-left-width: 12px;
  }
  #example04 {
    border-style: solid;
    border-width: thin medium thick 12px;
  }

  #example05 {
    border-style: solid;
    border-width: 12px;
    border-color: maroon aqua;
  }

  #example06 {
    border: maroon 12px solid;
  }

</style>