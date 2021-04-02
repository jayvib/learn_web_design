<template>
  <div class="container">
    <fieldset>
      <legend>Mailing List Sign-up</legend>
      <ul>
        <li><label>Add me to your mailing list <input type="radio" value="yes" name="is-mailing-list"></label></li>
        <li><label>No Thanks <input type="radio" value="no" checked></label></li>
      </ul>
    </fieldset>

    <fieldset>
      <legend>Customer Information</legend>
      <ul>
        <li><label>Full name <input type="text" name="fullname"></label></li>
        <li><label>Email <input type="email" name="email"></label></li>
        <li><label>State <input type="text" name="state"></label></li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
  export default {
    name: "FieldSet"
  }
</script>

<style scoped>
  li {
    list-style-type: none;
  }
</style>