<template>
  <div class="float">
    <h4>Float</h4>
    <div class="example">
      <h5>Normal Float</h5>
      <img src="/images/chapter15/icecream.jpeg" alt="Ice Cream">
      That’s a nice effect. We’ve gotten rid of a lot of wasted space on the page, but
      now the text is bumping right up against the image. How do you think you
      would add some space between the image element and the surrounding text?
      If you guessed “add a margin,” you’re absolutely right. I’ll add 1em of space on
      all sides of the image with the margin property ( FIGURE 15-3 ). You can begin
      to see how the box properties work together to improve page layout.
    </div>
    <div id="float-right" class="example mt-2">
      <h5>Float Right</h5>
      <img src="/images/chapter15/icecream.jpeg" alt="Ice Cream">
      That’s a nice effect. We’ve gotten rid of a lot of wasted space on the page, but
      now the text is bumping right up against the image. How do you think you
      would add some space between the image element and the surrounding text?
      If you guessed “add a margin,” you’re absolutely right. I’ll add 1em of space on
      all sides of the image with the margin property ( FIGURE 15-3 ). You can begin
      to see how the box properties work together to improve page layout.
      That’s a nice effect. We’ve gotten rid of a lot of wasted space on the page, but
      now the text is bumping right up against the image. How do you think you
      would add some space between the image element and the surrounding text?
      If you guessed “add a margin,” you’re absolutely right. I’ll add 1em of space on
      all sides of the image with the margin property ( FIGURE 15-3 ). You can begin
    </div>
    <div id="inline-text" class="example mt-2">
      <h5>Floated Inline Text</h5>
      <span class="tip">TIP: Make sure that your packing tub or bucket
has a hole below the top of the mold so the water will drain
off</span>
      That’s a nice effect. We’ve gotten rid of a lot of wasted space on the page, but
      now the text is bumping right up against the image. How do you think you
      would add some space between the image element and the surrounding text?
      If you guessed “add a margin,” you’re absolutely right. I’ll add 1em of space on
      all sides of the image with the margin property ( FIGURE 15-3 ). You can begin
      to see how the box properties work together to improve page layout.
    </div>
    <div id="float-block" class="example mt-2">
      <h5>Float Right</h5>
      <img src="/images/chapter15/icecream.jpeg" alt="Ice Cream">
      That’s a nice effect. We’ve gotten rid of a lot of wasted space on the page, but
      now the text is bumping right up against the image. How do you think you
      would add some space between the image element and the surrounding text?
    </div>
    <div id="clear" class="example mt-2">
      <h5>Floated Inline Text</h5>
      <span class="tip">TIP: Make sure that your packing tub or bucket
has a hole below the top of the mold so the water will drain
off</span>
      That’s a nice effect. We’ve gotten rid of a lot of wasted space on the page, but
      now the text is bumping right up against the image. How do you think you
      would add some space between the image element and the surrounding text?
      If you guessed “add a margin,” you’re absolutely right. I’ll add 1em of space on
      all sides of the image with the margin property ( FIGURE 15-3 ). You can begin
      to see how the box properties work together to improve page layout.
    </div>

    <div id="clearfix" class="example mt-2">
      <h5>Clear Fix</h5>
      <div class="img">
        <img src="/images/chapter15/icecream.jpeg" alt="Ice Cream">
      </div>
      That’s a nice effect. We’ve gotten rid of a lot of wasted space on the page, but
      now the text is bumping right up against the image. How do you think you
      would add some space between the image element and the surrounding text?
      That’s a nice effect. We’ve gotten rid of a lot of wasted space on the page, but
      now the text is bumping right up against the image. How do you think you
      would add some space between the image element and the surrounding text?
      If you guessed “add a margin,” you’re absolutely right. I’ll add 1em of space on
      all sides of the image with the margin property ( FIGURE 15-3 ). You can begin
      to see how the box properties work together to improve page layout.
    </div>

    <div id="fancy-text-wrap" class="example mt-2">
      <h5>Fancy Text</h5>
      That’s a nice effect. We’ve gotten rid of a lot of wasted space on the page, but
      now the text is bumping right up against the image. How do you think you
      would add some space between the image element and the surrounding text?
      <div class="img">
        <img src="/images/chapter15/icecream.jpeg" alt="Ice Cream">
      </div>
      That’s a nice effect. We’ve gotten rid of a lot of wasted space on the page, but
      now the text is bumping right up against the image. How do you think you
      would add some space between the image element and the surrounding text?
      If you guessed “add a margin,” you’re absolutely right. I’ll add 1em of space on
      all sides of the image with the margin property ( FIGURE 15-3 ). You can begin
      to see how the box properties work together to improve page layout.
      That’s a nice effect. We’ve gotten rid of a lot of wasted space on the page, but
      now the text is bumping right up against the image. How do you think you
      would add some space between the image element and the surrounding text?
      That’s a nice effect. We’ve gotten rid of a lot of wasted space on the page, but
      now the text is bumping right up against the image. How do you think you
      would add some space between the image element and the surrounding text?
      If you guessed “add a margin,” you’re absolutely right. I’ll add 1em of space on
      all sides of the image with the margin property ( FIGURE 15-3 ). You can begin
      to see how the box properties work together to improve page layout.
    </div>
  </div>
</template>

<script>
export default {
  name: "Float"
}
</script>

<style scoped>
  #fancy-text-wrap img {
    float: left;
    margin: 0 2rem 2rem 0;
  }

  .example {
    background-color: #d2dc9d;
    padding: 2em 5em;
    color: gray;
  }

  #float-right img {
    float: right;
    margin: 1em;
  }

  #clearfix .img {
    float: left;
    margin: 1em;
  }

  #clearfix:after {
    content: " ";
    display: block;
    clear: both;
  }

  #inline-text span.tip {
    float: right;
    margin: 1em;
    width: 300px;
    color: #fff;
    background-color: lightseagreen;
    padding: 1em;
  }

  #float-block img {
    float: right;
    margin: 1em;
  }
  #clear {
    clear: right;
  }
</style>