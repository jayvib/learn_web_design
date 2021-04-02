<template>
  <div class="container">
    <h2>ARIA</h2>

    <h3>Role</h3>
    <ul id="tabs" role="toolbar">
      <li>A-G</li>
      <li>H-0</li>
      <li>P-T</li>
      <li>U-Z</li>
    </ul>
    <div id="status" role="alert">You are no logner connected to the server.</div>
    <nav role="navigation"></nav>
    <header role="banner"></header>
    <main role="main"></main>
    <aside role="complementary"></aside>
    <footer role="contentinfo"></footer>
  </div>
</template>

<script>
  export default {
    name: "Aria"
  }
</script>

<style scoped>

</style>