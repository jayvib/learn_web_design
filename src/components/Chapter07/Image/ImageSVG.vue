<template>
  <div>
    <h2>SVG</h2>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180">
      <rect width="300" height="180" fill="purple" rx="20" ry="20"></rect>
      <text x="40" y="114" fill="yellow" font-family="'Verdana-Bold'" font-size="72">
        Hello!
      </text>
    </svg>
    <br/>
    <br/>
    <h3>SVG as Image</h3>
    <img src="/images/chapter07/svg/icons/facebook.svg" alt="Facebook Icon"/>
    <br/>
    <br/>
    <h3>SVG as Inline</h3>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="100"
         height="100">
      <circle fill="#D4AB00" cx="36" cy="36" r="36"></circle>
      <circle opacity=".7" fill="#FFF" stroke="#8A291C" cx="36.1" cy="35.9"
              r="31.2"></circle>
      <circle fill="#A52C1B" cx="38.8" cy="13.5" r="4.8"></circle>
      <circle fill="#A52C1B" cx="22.4" cy="20.9" r="4.8"></circle>
      <circle fill="#A52C1B" cx="32" cy="37.2" r="4.8"></circle>
      <circle fill="#A52C1B" cx="16.6" cy="39.9" r="4.8"></circle>
      <circle fill="#A52C1B" cx="26.2" cy="53.3" r="4.8"></circle>
      <circle fill="#A52C1B" cx="42.5" cy="27.3" r="4.8"></circle>
      <circle fill="#A52C1B" cx="44.3" cy="55.2" r="4.8"></circle>
      <circle fill="#A52C1B" cx="54.7" cy="42.9" r="4.8"></circle>
      <circle fill="#A52C1B" cx="56" cy="28.3" r="4.8"></circle>
    </svg>
    <p>This summer, try making pizza on your grill</p>

    <h3>Embedded with object element</h3>
    <object type="image/svg+xml" data="/images/chapter07/svg/icons/facebook.svg">
      <img src="/images/chapter07/svg/icons/facebook.svg" alt="Facebook Icon"/>
    </object>
    <h3>Source set</h3>
  </div>
</template>

<script>
  export default {
    name: "ImageSVG"
  }
</script>

<style scoped>

</style>