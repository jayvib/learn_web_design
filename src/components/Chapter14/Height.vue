<template>
  <div class="container">
    <h4>Overflow</h4>
    <div class="ml-2 example">
      <h5>Visible</h5>
      <div class="overflow-example d-inline-block" id="overflow-visible">
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
    <div class="ml-2 example">
      <h5>Overflow Hidden</h5>
      <div class="overflow-example d-inline-block" id="overflow-hidden">
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
    <div class="ml-2 example">
      <h5>Overflow Scroll</h5>
      <div class="overflow-example d-inline-block" id="overflow-scroll">
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
    <div class="ml-2 example">
      <h5>Overflow Auto Short</h5>
      <div class="overflow-example d-inline-block" id="overflow-auto-short">
        In the following example and in FIGURE 14-2 , a simple box is given a width
      </div>
    </div>
    <div class="ml-2 example">
      <h5>Overflow Auto Long</h5>
      <div class="overflow-example d-inline-block" id="overflow-auto-long">
        In the following example and in FIGURE 14-2 , a simple box is given a width
        border, and a 20-pixel margin all around. In the default content box model,
        the width and height values are applied to the content area only.
        In the following example and in FIGURE 14-2 , a simple box is given a width
        of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
        border, and a 20-pixel margin all around. In the default content box model,
        the width and height values are applied to the content area only.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Height"
}
</script>

<style scoped>
  .overflow-example {
    background: #c6de89;
    height: 250px;
  }

  .example {
    width: 250px;
    display: inline-block;
  }

  #overflow-visible {
    overflow: visible;
  }

  #overflow-hidden {
    overflow: hidden;
  }

  #overflow-scroll {
    overflow: scroll;
  }

  #overflow-auto-short, #overflow-auto-long {
    overflow: auto;
  }

</style>