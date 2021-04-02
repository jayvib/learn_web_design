<template>
  <div class="container">
    <h4>Link<code>(:link)</code></h4>
    <p>Link 👉 <a href="https://google.com" target="_blank">Google</a></p>

    <h4>Focus<code>(:focus)</code></h4>
    <label class="mr-1">
      Name:
      <input type="text" v-model="name"/>
    </label>
    <span v-if="name">Your Name: {{ name }}</span>

    <h4>Hover <code>(:hover)</code></h4>
    <p>Hover 👉 <a href="#">Hover me!</a></p>

    <h4>First Child <code>(:first-child)</code></h4>
    <div class="first-child">
      <p>👉 This is first <span>child</span> element of p</p>
      <p>This is the sibling of p element</p>
    </div>

    <h4>Lang <code>(:lang)</code></h4>
    <div class="lang">
      <p>
        Some text
        <q lang="en">A quote in an english paragraph</q>
        and another quote,
        <q lang="nz">A quote from New Zealand</q>
      </p>
    </div>

    <h4>Checked <code>(:checked)</code></h4>
    <div class="checked">
      <label>
        <input class="radio" type="radio" checked="checked" value="male" name="gender"> Male
      </label>
      <br>
      <label>
        <input class="radio" type="radio" value="female" name="gender"> Female
      </label>
    </div>

    <h4>Disabled <code>(:disabled)</code></h4>
    <div class="disabled">
      <label>
        First Name
        <input class="form-control" type="text" disabled>
      </label>
    </div>

    <h4>Enabled <code>(:enabled)</code></h4>
    <div class="enabled">
      <label>
        First Name
        <input class="form-control" type="text">
      </label>
    </div>

    <h4>Empty <code>(:empty)</code></h4>
    <div class="empty">
      empty! 👉<p></p>
      <p>A paragraph</p>
      <p>Another paragraph</p>
    </div>

    <h4>First of Type <code>(:first-of-type)</code></h4>
    <div class="first-of-type ml-3">
      <dt><code>:first-of-type</code></dt>
      <dd>Specify a background color for the first element of its parent</dd>
      <h5>Example</h5>
      <p>The first paragraph</p>
      <p>The second paragraph</p>
      <p>The third paragraph</p>
      <p>The fourth paragraph</p>
    </div>

    <h4>In Range <code>(:in-range)</code></h4>
    <div class="in-range ml-3">
      <dt><code>:in-range</code></dt>
      <dd>Select and style only if the value of the
        <code>&lt;input&gt;</code> element is in
        <em>"range"</em>
      </dd>
      <h5>Example</h5>
      <label>
        Text
        <input type="text" name="firstname" class="form-control">
      </label>
      <br>
      <label>
        Range
        <input type="number" min="5" max="10" value="7" class="form-control">
      </label>
    </div>

    <h4>Invalid <code>(:invalid)</code></h4>
    <div class="invalid ml-3">
      <dt><code>:invalid</code></dt>
      <dd>Select and style only if the value of an input is invalid.</dd>
      <h5>Example</h5>
      <label>
        Email:
        <input type="email" name="email" class="form-control">
      </label>
    </div>

    <h4>Last Child <code>(:last-child)</code></h4>
    <div class="last-child ml-3">
      <dt><code>:last-child</code></dt>
      <dd>Specify a background color for the element that is the last child of its parent</dd>
      <h5>Example</h5>
      <p>The first paragraph</p>
      <p>The second paragraph</p>
      <p>The third paragraph</p>
      <p><strong>last child</strong> 👉 The fourth paragraph</p>
    </div>

    <h4>Last of Type <code>(:last-of-type)</code></h4>
    <div class="last-of-type ml-3">
      <dt><code>:last-of-type</code></dt>
      <dd>Specify a background color of the last type of element of its parent</dd>
      <h5>Example</h5>
      <div>
        <p>The first paragraph</p>
        <p>The second paragraph</p>
        <div>
          <h6>Nested paragraph</h6>
          <p>The third paragraph but nested</p>
          <p>The fourth paragraph but nested</p>
        </div>
        <div>
          <h6></h6>
          <p>Another nested paragraph</p>
          <p>Another nested paragraph</p>
        </div>
      </div>
    </div>

    <h4>Not <code>(:not)</code></h4>
    <div class="not ml-3">
      <dt><code>:not</code></dt>
      <dd>Set a style for all element that are not a <code>p</code> element.</dd>
      <h5>Example</h5>
      <div class="example">
        <h6>This is a Heading</h6>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
        <div>This is some text in a div element.</div>
        <a href="#">Link to Google</a>
      </div>
    </div>

    <h4>N<sup>th</sup> Child <code></code></h4>
    <div class="nth-child ml-3">
      <dt><code>:nth-child</code></dt>
      <dd>Matches every element that is the nth child, regardless of type, of its parent.</dd>
      <h5>Example</h5>
      <div class="example">
        <p>The first paragraph</p>
        <p>The second paragraph</p>
        <p>The third paragraph</p>
        <p>The fourth paragraph</p>
      </div>
    </div>

    <h4>N<sup>th</sup> Last Child</h4>
    <div class="nth-last-child ml-3">
      <dt><code>:nth-last-child</code></dt>
      <dd>Matches every element that is the nth child, regardless of type, of its parent,
      counting from the last child.</dd>
      <h5>Example</h5>
      <div class="example">
        <p>The first paragraph</p>
        <p>The second paragraph</p>
        <p>The third paragraph</p>
        <p>The fourth paragraph</p>
      </div>
    </div>

    <h4>N<sup>th</sup> Last of Type</h4>
    <div class="nth-last-of-type ml-3">
      <dt><code>:nth-last-of-type</code></dt>
      <dd>Matches every element that is the nth child, of a particular type, of its parent,
      counting from the last child</dd>
      <h5>Example</h5>
      <div class="example">
        <p>The first paragraph</p>
        <div class="nested">
          <p>The nested 1 paragraph</p>
          <p>The nested 2 paragraph</p>
        </div>
        <p>The third paragraph</p>
        <p>The fourth paragraph</p>
      </div>
    </div>

    <h4>N<sup>th</sup> of Type</h4>
    <div class="nth-of-type ml-3">
      <dt><code>:nth-of-type</code></dt>
      <dd>Matches every element that is the nth child, of a particular type, of its parent.</dd>
      <h5>Example</h5>
      <div class="example">
        <p>The first paragraph</p>
        <p>The second paragraph</p>
        <div class="nested">
          <p>The nested 1 paragraph</p>
          <p>The nested 2 paragraph</p>
        </div>
        <p>The third paragraph</p>
        <p>The fourth paragraph</p>
      </div>
    </div>

    <h4>Only of Type</h4>
    <di class="only-of-type ml-3">
      <dt><code>:only-of-type</code></dt>
      <dd>Matches every element that is the only child of its, of its parent.</dd>
      <h5>Example</h5>
      <div class="example">
        <div class="nested">
          <p>The first paragraph. Matched!</p>
        </div>
        <div class="nested">
          <p>The second paragraph</p>
          <p>The third paragraph</p>
          <div class="nested">
            <p>Another anonymous paragraph</p>
          </div>
        </div>
        <div>
          <p>The fourth paragraph</p>
        </div>
      </div>
    </di>

    <h4>Only Child</h4>
    <div class="only-child ml-3">
      <dt><code>:only-child</code></dt>
      <dd>Matches every element that is the only child of its parent</dd>
      <h5>Example</h5>
      <div class="example">
        <div>
          <p>This is a paragraph that is an only child.</p>
        </div>
        <div>
          <span>This is a span.</span>
          <p>This is a paragraph</p>
        </div>
      </div>
    </div>

    <h4>Optional</h4>
    <div class="optional ml-3">
      <dt><code>:optional</code></dt>
      <dd>Selects rom elements which are optional</dd>
      <h5>Example</h5>
      <div class="example">
        <p>An optional input element: <br><input></p>
        <p>A required input element: <br><input required></p>
      </div>
    </div>

    <h4>Out of Range</h4>
    <div class="out-of-range ml-3">
      <dt><code>:out-of-range</code></dt>
      <dd>Selects all elements with a value that is outside a specified range.</dd>
      <h5>Example</h5>
      <div class="example">
        <input type="number" min="5" max="15" v-model="numberValue" class="form-control">
        <button type="button" class="btn btn-success" @click="incrementValue">Increment</button>
        <button type="button" class="btn btn-danger" @click="decrementValue">Decrement</button>
      </div>
    </div>

    <h4>Read Only</h4>
    <div class="read-only ml-3">
      <dt><code>:read-only</code></dt>
      <dd>Selects elements which are <em>"readonly"</em></dd>
      <h5>Example</h5>
      <div class="example">
        <p>A normal input element:<br><input></p>
        <p>A readonly input element:<br><input readonly value="hello world"></p>
      </div>
    </div>

    <h4>Read-Write</h4>
    <div class="read-write ml-3">
      <dt><code>:read-write</code></dt>
      <dd>Selects from elements which are <em>"readable"</em> and <em>"writeable"</em></dd>
      <h5>Example</h5>
      <div class="example">
        <p>A normal input element:<br><input value="hello" class="form-control"></p>
        <p>A readonly input element:<br><input readonly value="hello" class="form-control"></p>
      </div>
    </div>

    <h4>Required</h4>
    <div class="required ml-3">
      <dt><code>:required</code></dt>
      <dd>Selects from elements which are required.</dd>
      <h5>Example</h5>
      <div class="example">
        <p>An optional input element: <br><input class="form-control"></p>
        <p>A required input element: <br><input required class="form-control"></p>
      </div>
    </div>

    <h4>Target</h4>
    <div class="target ml-3">
      <dt><code>:target</code></dt>
      <dd>Used to style the current active target element</dd>
      <h5>Example</h5>
      <div class="example">
        <p><a href="#news1">Jump to new content 1</a></p>
        <p><a href="#news2">Jump to new content 2</a></p>

        <p id="news1"><b>New content 1...</b></p>
        <p id="news2"><b>New content 2...</b></p>
      </div>
    </div>

    <h4>Valid</h4>
    <div class="valid ml-3">
      <dt><code>:valid</code></dt>
      <dd>Selects from elements with a value that validates according to the element's settings</dd>
      <h5>Example</h5>
      <div class="valid">
        <label>Email: <input type="email" class="form-control"></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "PsuedoClass",
  data() {
    return {
      name: '',
      numberValue: 5,
    }
  },
  methods: {
    incrementValue() {
      this.numberValue++
    },
    decrementValue() {
      this.numberValue--
    }
  }
}
</script>

<style scoped>

  .valid input:valid {
    background-color: #c6de89;
  }

  .valid input:invalid {
    background-color: lightsalmon;
  }

  .target :target {
    border: 2px solid #d4d4d4;
    background-color: #e5eecc;
  }

  .required input:required {
    background-color: #c6de89;
  }

  .read-write input:read-write {
    background-color: #c6de89;
  }

  .read-only input:read-only {
    background-color: #c6de89;
  }

  .out-of-range input:out-of-range {
    background-color: lightcoral;
  }

  .out-of-range input:in-range {
    background-color: #c6de89;
  }

  .optional input:optional {
    background-color: #c6de89;
    border: none;
  }

  .only-child p:only-child {
    background-color: #c6de89;
    padding: 5px;
  }

  .only-of-type p:only-of-type {
    background-color: #c6de89;
    padding: 5px;
  }

  .nth-of-type p:nth-of-type(2) {
    background-color: #c6de89;
    padding: 5px;
  }

  .nth-last-of-type p:nth-last-of-type(2) {
    background-color: #c6de89;
    padding: 5px;
  }

  .nth-last-child p:nth-last-child(2) {
    background-color: #c6de89;
    padding: 5px;
  }

  .nth-child .example p:nth-child(3) {
    background-color: #c6de89;
    padding: 5px;
  }

  .not .example :not(p) {
    color: gray;
  }

  .last-of-type p:last-of-type {
    background-color: #72d7b4;
    padding: 5px;
  }

  .last-child p:last-child {
    background-color: #c6de89;
    padding: 5px;
  }

  .invalid input:invalid {
    border: 2px solid red;
  }

  .in-range input:in-range {
    border: 5px solid tomato;
  }

  .in-range input[type=text] {
    border: 2px solid green;
  }

  div.first-of-type p:first-of-type {
    background: #c6de89;
  }

  div.enabled input[type=text]:enabled {
    background-color: #c6de89;
    color: gray;
  }

  div.disabled input[type=text]:disabled {
    background-color: #dddddd;
  }

  div.empty p:empty {
    width: 200px;
    height: 40px;
    background: #c6de89;
  }

  div.checked input:checked {
    height: 50px;
    width: 50px;
  }

  div.lang q:lang(en) {
    color: gray;
  }

  div.first-child p:first-child {
    color: gray;
  }

  div.first-child p:first-child span {
    font-style: italic;
    color: green;
  }

  a:link {
    color: maroon;
  }

  a:visited {
    color: gray;
  }

  a:focus {
    color: maroon;
    background-color: #ffd9d9;
  }

  a:hover {
    color: maroon;
    background-color: #ffd9d9;
    text-decoration: none;
  }

  a:active {
    color: red;
    background-color: #ffd9d9;
  }

  input:focus {
    background-color: #cdcd9a;
  }

  h4 {
    border-bottom: #5cada4 1px solid;
  }

  .nested {
    margin-left: 3rem;
  }

</style>