<template>
  <div>
    <h2>Inline Element Semantics</h2>

    <h3>Emphasized Text</h3>
    <p><em>Arlo</em> is very smart.</p>
    <p>Arlo is <em>very</em> smart.</p>

    <h3>Strong Text</h3>
    <p>When returning the car, <strong>drop the keys in the red box by the front desk</strong></p>

    <h3>Bold Text</h3>
    <p><b>b</b></p>
    <p>The slabs at the end of letter strokes are called <b>serifs</b></p>

    <h3>Italic Text</h3>
    <p><i>i</i></p>
    <p>Simple change the font and <i>Viola!</i>, a new personality</p>

    <h3>Strike-through</h3>
    <p>Scala Sans was designed by <s>Eric Gill</s> Martin Majoor</p>

    <h3>Underline Text</h3>
    <p>New York subway signaage is set in <u>Helviteca</u></p>

    <h3>Small text</h3>
    <p><small>(This font is free for personal and commercial use.)</small></p>

    <h3>Quotation Text</h3>
    <p>Matthew Carter says, <q>Our alphabet hasn't changed in eons</q></p>

    <h3>Abbr</h3>
    <abbr title="Points">pts.</abbr>
    <abbr title="American Type Founders">ATF</abbr>

    <h3>Citation</h3>
    <div class="container">
      <p>Passages of this article were inspired<cite>The Complete Manual of Typography</cite> by James Felici
      </p>
    </div>

    <h3>Defining Terms</h3>
    <p><dfn>Script typefaces</dfn> are based on handwriting.</p>

    <h3>Program Element</h3>
    <h4>Code</h4>
    <code>
      >> x + y
    </code>

    <h4>Variable</h4>
    <var>var x;</var>

    <h4>Sample</h4>
    <pre>
    <samp>
      import "fmt"

      func main() {
        fmt.Println("Hello World")
      }
    </samp>
    </pre>

    <h4>Keyboard</h4>
    <kbd>Ctrl + K</kbd>

    <h3>Subscript and Supercript</h3>
    <div class="container">
      <h4>Subscript</h4>
      <p>H<sub>2</sub>O</p>
      <h4>Superscript</h4>
      <p>E=MC<sup>2</sup></p>
    </div>

    <h3>Higlighted Text</h3>
    <div class="container">
      <p>...PART I. ADMINISTRATION OF THE GOVERNMENT. TITLE IX. <mark>TAXATION.</mark></p>
    </div>

    <h3>Dates and Time</h3>
    <div class="container">
      <p><time datetime="2016-12-25T15:00-8:00">3pm PST on December 25, 2016</time></p>
      <p><time datetime="21:30">9:30p.m</time></p>
      <p><time datetime="2016-01-3">January 01, 2016</time></p>
      <p><time datetime="2016-01-3T21:20:20">January 01, 2016, 9:20 pm</time></p>
    </div>

    <h3>Inserted and deleted text</h3>
    <p>Chief Executive Officer: <del title="retired">Peter Pan</del> <ins>Pippi Longstocking</ins></p>
  </div>
</template>

<script>
  export default {
    name: 'Inline'
  }
</script>

<style lang="scss" scoped>

</style>