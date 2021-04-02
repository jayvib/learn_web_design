<template>
  <div>
    <h1>About Jen's Kitchen</h1>
    <p>The recipes listed here are ones that I have developed myself.
      In some cases, I started with a recipe found in a cookbook or magazine,
      but over time, I've adapted it enough to call it my own. <i>Bon Appetit!</i>
    </p>
    <p>The site also includes links to my favorite online cooking resources.
      One day, I hope to include a section of restaurant reviews.
    </p>
    <p>If you have recommendations, feel free to email me at
      <a href="mailto:jen@example.com">jen@example.com</a> or <a href="tel:+01-800-555-1212">Call us free at (800) 555-1212</a>
    </p>
    <p><router-link to="/jenkitchen">Back to home page</router-link></p>
  </div>
</template>

<script>
  export default {
    name: "JenKitchenAbout"
  }
</script>

<style scoped>

</style>