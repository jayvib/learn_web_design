<template>
  <div class="container">
    <h4>First Line</h4>
    <div class="first-line ml-3">
      <dt><code>::first-line</code></dt>
      <dd>This selector applies a style rule to the first line of the specified element.</dd>
      <h5>Example</h5>
      <div class="example">
        <p>You’ve seen how browsers add bullets and numbers to lists automatically,
        even though they are not actually in the HTML source. That is an example of
        generated content, content that browsers insert on the fly. It is possible to tell
          browsers to generate content before or after any element you like by using the</p>
      </div>
    </div>

    <h4>First Letter</h4>
    <div class="first-letter ml-3">
      <dt><code>:first-letter</code></dt>
      <dd>This applies a style rule to the first letter of the specified element.</dd>
      <h5>Example</h5>
      <div class="example">
        <p>
          You’ve seen how browsers add bullets and numbers to lists automatically,
          even though they are not actually in the HTML source. That is an example of
          generated content, content that browsers insert on the fly. It is possible to tell
          browsers to generate content before or after any element you like by using the.
        </p>
      </div>
    </div>

    <h4>Before</h4>
    <div class="before ml-3">
      <dt><code>::before</code></dt>
      <dd>Add a content before a target element</dd>
      <h4>Example</h4>
      <div class="example">
        <p class="warning">We are required to warn you that unercooked food is a health risk.</p>
      </div>
    </div>

    <h4>After</h4>
    <div class="after ml-3">
      <dt><code>::after</code></dt>
      <dd>Add a content after a target element</dd>
      <h4>Example</h4>
      <div class="example">
      </div>
      <p class="warning">We are required to warn you that unercooked food is a health risk.</p>
    </div>
  </div>
</template>

<script>
export default {
name: "PsuedoElement"
}
</script>

<style scoped>
  .after p.warning::after {
    content: " Thank You.";
    color: red;
  }

  .before p.warning::before {
    content: url(/warning_icon.ico);
    margin-right: 6px;
  }

  .first-letter p::first-letter {
    font-size: 300%;
    color: orange;
  }

  .first-line p::first-line {
    letter-spacing: 9px;
  }
</style>