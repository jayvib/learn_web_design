<template>
  <div>
    <header>
      <img src="../../../../assets/images/jenskitchen/jenskitchen.gif" alt="Jen's Kitchen banner" width="660" height="94">
      <h1>Welcome to Jen's Kitchen</h1>
    </header>

    <body>
      <p>People who know me that I love to cook. I've created this site to share some of my
        favorite recipes and online food recipes. <i>Bon Appetit!</i></p>

      <p><router-link to="/jenkitchen/about">About the site</router-link></p>

      <section>
        <h2>From Jen's Cookbook</h2>
        <ul class="emoji-bullet">
          <li><router-link to="/jenkitchen/recipe/tapenade">Tapenade (Olive Spread)</router-link></li>
          <li><router-link to="/jenkitchen/recipe/salmon">Garlic Salmon</router-link></li>
          <li><router-link to="/jenkitchen/recipe/pasta/linguine">Linguine with Clam Sauce</router-link></li>
          <li><router-link to="/jenkitchen/recipe/pasta/couscous">Couscous with Peas and Mint</router-link></li>
        </ul>
      </section>

      <section>
        <h2>Good Food on the Web</h2>
        <ul class="emoji-bullet">
          <li><a href="http://www.foodnetwork.com/">The Food Network</a></li>
          <li>Epicurious</li>
        </ul>
      </section>
    </body>

    <footer>
      <p><small>Copyright &copy; 2018, Jennifer Robbins</small></p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "JenKitchenHome"
  }
</script>

<style >
  @counter-style emoji-bullet {
    system: cyclic;
    symbols: "\1F449";
    suffix: " ";
  }

</style>