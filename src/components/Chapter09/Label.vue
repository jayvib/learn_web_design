<template>
  <div class="container">
    <h3>Implicit Asssociation</h3>
    <ul>
      <li><label><input type="checkbox" name="genre" value="punk"> Punk</label></li>
      <li><label><input type="checkbox" name="genre" value="jazz"> Jazz</label></li>
      <li><label><input type="checkbox" name="genre" value="rock"> Rock</label></li>
    </ul>
    <h3>Explicit Association</h3>
    <label for="form-login-username">Login Account</label>
    <input type="text" name="login" id="form-login-username"/>
    <label for="form-login-password">Password</label>
    <input type="password" name="password" id="form-login-password">
  </div>
</template>

<script>
  export default {
    name: "Label"
  }
</script>

<style scoped>

</style>