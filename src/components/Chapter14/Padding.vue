<template>
  <div class="container">
    <h4>Long Property</h4>
    <div id="example-1">
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
    </div>
    <h4>Short Property</h4>
    <div id="example-2">
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
      In the following example and in FIGURE 14-2 , a simple box is given a width
      of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
      border, and a 20-pixel margin all around. In the default content box model,
      the width and height values are applied to the content area only.
    </div>
  </div>
</template>

<script>
export default {
name: "Padding"
}
</script>

<style scoped>
  #example-1 {
    background-color: #c6de89;
    padding-top: 2em;
    padding-right: 4em;
    padding-bottom: 2em;
    padding-left: 4em;
  }

  #example-2 {
    padding: 2em 4em;
    background-color: #c6de89;
  }
</style>