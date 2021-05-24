<template>
  <div class="d-flex">
    <section class="section">
      <h1>Web Typography</h1>
      <p>Back in 1997, there were competing font formats and tools for
maki  ng them...</p>
      <p>We now have a number of methods for using beautiful fonts on web
      pages...</p>
    </section>
    <aside class="aside">
      <h2>Web Font Resources</h2>
      <ul>
        <li><a href="http://typekit.com/">Typekit</a></li>
        <li><a href="http://fonts.google.com">Google Fonts</a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
  export default {
    name: 'Aside'
  }
</script>

<style scoped>
  .section {
    width: 75%;
  }

  .aside {
    width: 25%;
    border: 1px solid rgb(95, 92, 92);
    padding: 5px;
    box-sizing: border-box;
  }
</style>