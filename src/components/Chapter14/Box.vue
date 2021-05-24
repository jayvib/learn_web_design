<template>
  <div class="container">
    <h4>Content Box</h4>
    <div class="example ml-2">
      <h5>Example</h5>
      <p id="content-box">
        In the following example and in FIGURE 14-2 , a simple box is given a width
        of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
        border, and a 20-pixel margin all around. In the default content box model,
        the width and height values are applied to the content area only.
      </p>
    </div>

    <h4>Border Box</h4>
    <div class="example ml-2">
      <h5>Example</h5>
      <p id="border-box">
        In the following example and in FIGURE 14-2 , a simple box is given a width
        of 500 pixels and a height of 150 pixels, with 20 pixels of padding, a 5-pixel
        border, and a 20-pixel margin all around. In the default content box model,
        the width and height values are applied to the content area only.
      </p>
    </div>
  </div>
</template>

<script>
export default {
name: "Box"
}
</script>

<style scoped>
  #content-box {
    background: #f2f5d5;
    width: 500px;
    height: 150px;
    padding: 20px;
    border: 5px solid gray;
    margin: 20px;
    box-sizing: content-box;
  }
  #border-box {
    background: #f2f5d5;
    box-sizing: border-box;
    width: 500px;
    height: 150px;
    padding: 20px;
    border: 5px solid gray;
    margin: 20px;
  }
</style>