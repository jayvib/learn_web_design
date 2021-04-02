<template>
  <div class="bistro-gallery">
    <h1 class="text-center">Black Goose Bistro Gallery</h1>
    <p>Not is our food good, it's also good-looking! Our patrons often stop to admire
    our fare with quick Instagram before digging in. We've collected a few of our favorite shots here.</p>

    <h2>Our Baked Goods</h2>
    <p>
      <router-link to="/blackgoosebistrogallery/bread">
        <picture>
          <!--1200 pixel-wide-->
          <source
            media="(min-width: 480px)"
            srcset="/images/chapter07/responsivegallery/images/bread-1200.jpg 1200w,
                    /images/chapter07/responsivegallery/images/bread-800.jpg 800w">
          <!--Fallback-->
          <img src="/images/chapter07/responsivegallery/images/bread-400.jpg" alt="Close-up of sliced rustic bread"/>
        </picture>
      </router-link><br/>
      We start our day at the crack of dawn to bake our own muffins, bread, and dinner rolls.
      Loaves not used that day are donated to the local food shelter.
    </p>

    <h2>Our Burgers</h2>
    <p>
      <router-link to="/blackgoosebistrogallery/burger">
        <picture>
          <source
            media="(min-width: 480px)"
            srcset="/images/chapter07/responsivegallery/images/burgers-1200.jpg 1200w,
                    /images/chapter07/responsivegallery/images/burgers-800.jpg 800w">
          <img src="/images/chapter07/responsivegallery/images/burgers-400.jpg" alt="Close-up of rustic burger">
        </picture>
      </router-link><br>
      People come from all over to enjoy our lovingly made burgers.
      We grind our own locally-sourced organic beef and turkey so you
      know it's fresh and free from fillers and other nonsense.
      Go for one of our creative topping combos or stick with the classics.
    </p>

    <h2>Catch of the Day</h2>
    <p>
      <router-link to="/blackgoosebistrogallery/fish">
        <picture>
          <source
            media="(min-width: 480px)"
            srcset="/images/chapter07/responsivegallery/images/fish-1200.jpg 1200w,
                    /images/chapter07/responsivegallery/images/fish-800.jpg 800w"
          >
          <img src="/images/chapter07/responsivegallery/images/fish-400.jpg" alt="Fish with Roasted Potatoes"/>
        </picture>
      </router-link><br>
      Our chef works with local fisherman to pick the freshest the sea has
      to offer for our daily seafood special. Our Roast Cod Caponata with
      Roasted Potatoes is an old favorite with our regulars.
    </p>
  </div>
</template>

<script>
  export default {
    name: "BlackGooseBistroGalleryHome"
  }
</script>

<style scoped>
  .bistro-gallery img {
    max-width: 100%;
  }

  .bistro-gallery h1 {
    text-align: center;
    font-family: serif;
    font-weight: normal;
    text-transform: uppercase;
    border-bottom: 1px solid #57b1dc;
    margin-top: 30px;
  }

  .bistro-gallery h2 {
    color: #d1633c;
    font-size: 1em;
  }
</style>