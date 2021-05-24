<template>
  <div>
    <h1>Article</h1>
    <h2 class="article_sub">Article with Section</h2>
    <article>
      <h3>Get to Know Helvetica</h3>
      <section>
        <h4>History of Helvetica</h4>
        <p>...</p>
      </section>
      <section>
        <h3>Helvetica Today</h3>
        <p>...</p>
      </section>
    </article>  
    <h2 class="article_sub">Section with Article</h2>
    <section id="essay">
      <article>
        <h3>A Fresh Look at Future</h3>
        <p>...</p>
      </article>
      <article>
        <h3>Getting Personal with Humanist</h3>
        <p>...</p>
      </article>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Article' 
  }
</script>

<style scoped>
  .article_sub {
    border-bottom: solid 1px rgb(59, 58, 58);
    width: 25%;
  }
</style>