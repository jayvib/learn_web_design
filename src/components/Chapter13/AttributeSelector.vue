<template>
  <div class="container">
    <h4>Element[<i>attribute</i>]</h4>
    <div class="element-attribute ml-3">
      <dt><code>element[<i>attribute</i>]</code></dt>
      <dd>The simple attribute selector targets elements with a particular attribute regardless of its value.</dd>
      <h5>Example</h5>
      <div class="example">
        <label>
          <input name="firstname" class="form-control">
        </label>
        <br>
        <label>
          <input class="form-control">
        </label>
      </div>
    </div>

    <h4>Element[<i>attribute="exact value"</i>]</h4>
    <div class="element-exact-value ml-3">
      <dt><code>element[<i>attribute="exact value"</i>]</code></dt>
      <dd>The exact attribute value selector selects elements with a specific value for the attribute</dd>
      <h5>Example</h5>
      <div class="example">
        <label>
          <input name="firstname" class="form-control" placeholder="Enter First Name">
        </label>
        <br>
        <label>
          <input name="lastname" class="form-control" placeholder="Enter Last Name">
        </label>
      </div>
    </div>

    <h4>Element[<i>attribute~="value"</i>]</h4>
    <div class="element-partial-value ml-3">
      <dt><code>element[<i>attribute~="value"</i>]</code></dt>
      <dd>The partial attribute value seletor allows you to specify on part of an attribute value.</dd>
      <h5>Example</h5>
      <div class="example">
        <label>
          <input name="first name" class="form-control" placeholder="Enter First Name">
        </label>
        <br>
        <label>
          <input name="last name" class="form-control" placeholder="Enter Last Name">
        </label>
        <br>
        <label>
          <input name="profession" class="form-control" placeholder="Enter Profession">
        </label>
      </div>
    </div>

    <h4>Element[<i>attribute|="value"</i>]</h4>
    <div class="element-hyphen-value ml-3">
      <dt><code>element[<i>attribute|="value"</i>]</code></dt>
      <dd>The hyphen-separated attribute value selector targets hypens-separated values.</dd>
      <h5>Example</h5>
      <div class="example">
        <label>
          <input name="name-first" class="form-control" placeholder="Enter First Name">
        </label>
        <br>
        <label>
          <input name="name-last" class="form-control" placeholder="Enter Last Name">
        </label>
        <br>
        <label>
          <input name="profession" class="form-control" placeholder="Enter Profession">
        </label>
      </div>
    </div>

    <h4>Element[<i>attribute^="first part of value"</i>]</h4>
    <div class="element-first-part-value ml-3">
      <dt><code>element[<i>attriubute^='first part of value'</i>]</code></dt>
      <dd>The beginning substring attribute value selector matches elements whose specified
      attribute value start in the string of characters in the selector.</dd>
      <h5>Example</h5>
      <div class="example">
        <label><input name="nameFirst" placeholder="Enter first name" class="form-control"></label><br>
        <label><input name="nameLast" placeholder="Enter last name" class="form-control"></label><br>
        <label><input name="middleName" placeholder="Enter middle name" class="form-control"></label><br>
      </div>
    </div>

    <h4>Element[<i>attribute^="last part of value"</i>]</h4>
    <div class="element-last-part-value ml-3">
      <dt><code>element[<i>attriubute^='last part of value'</i>]</code></dt>
      <dd>The last substring attribute value selector matches elements whose specified
        attribute value start in the string of characters in the selector.</dd>
      <h5>Example</h5>
      <div class="example">
        <label><input name="nameFirst" placeholder="Enter first name" class="form-control"></label><br>
        <label><input name="lastName" placeholder="Enter last name" class="form-control"></label><br>
        <label><input name="middleName" placeholder="Enter middle name" class="form-control"></label><br>
      </div>
    </div>

    <h4>Element[<i>attribute^="any part of value"</i>]</h4>
    <div class="element-any-part-value ml-3">
      <dt><code>element[<i>attriubute^='any part of value'</i>]</code></dt>
      <dd>The any substring attribute value selector matches elements whose specified
        attribute value start in the string of characters in the selector.</dd>
      <h5>Example</h5>
      <div class="example">
        <label><input name="YourNameFirst" placeholder="Enter first name" class="form-control"></label><br>
        <label><input name="YourLastName" placeholder="Enter last name" class="form-control"></label><br>
        <label><input name="YourMiddleName" placeholder="Enter middle name" class="form-control"></label><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "AttributeSelector"
}
</script>

<style scoped>
  .element-any-part-value input[name*="Name"] {
    background-color: #c6de89;
  }

  .element-last-part-value input[name$="Name"] {
    background-color: #c6de89;
  }

  .element-first-part-value input[name^="name"] {
    background-color: #c6de89;
  }

  .element-hyphen-value input[name|="name"] {
    background-color: #c6de89;
  }

  .element-partial-value input[name~="name"] {
    background-color: #c6de89;
  }

  .element-exact-value input[name="firstname"] {
    background-color: lightsalmon;
  }

  .element-attribute input[name] {
    background-color: #c6de89;
  }
</style>