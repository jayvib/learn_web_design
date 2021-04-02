<template>
  <div class="container">
    <h4>List Style Type</h4>
    <p>Changing to none...</p>
    <ul class="none">
      <li v-for="fruit in fruits" :key="'none_'+fruit">{{ fruit }}</li>
    </ul>

    <p>Changing to decimal</p>
    <ul class="decimal">
      <li v-for="fruit in fruits" :key="'decimal_'+fruit">{{ fruit }}</li>
    </ul>

    <p>Changing to decimal with leading zero</p>
    <ul class="decimal-leading-zero">
      <li v-for="fruit in fruits" :key="'decimal_leading_zero_'+fruit">{{ fruit }}</li>
    </ul>

    <p>Changing to lower alpha</p>
    <ul class="lower-alpha">
      <li v-for="fruit in fruits" :key="'lower_alpha_'+fruit">{{ fruit }}</li>
    </ul>

    <h4>Marker Position</h4>
    <p>Inside</p>
    <ul id="inside">
      <li v-for="fruit in fruits" :key="'inside_'+fruit">{{ fruit }}</li>
    </ul>

<!--    <h4>Customize Bullets</h4>-->
<!--    <ul id="customize">-->
<!--      <li v-for="fruit in fruits" :key="'customize_'+fruit">{{ fruit }}</li>-->
<!--    </ul>-->
  </div>
</template>

<script>
export default {
  name: "ListStyle",
  data() {
    return {
      fruits: ['Orange', 'Apple', 'Banana', 'Watermelon'],
    }
  }
}
</script>

<style scoped>
  ul.none li {
    list-style-type: none;
  }

  ul.decimal {
    list-style-type: decimal;
  }

  ul.decimal-leading-zero {
    list-style-type: decimal-leading-zero;
  }

  ul.lower-alpha {
    list-style-type: lower-alpha;
  }

  #inside {
    list-style-position: inside;
  }

  #customize {
    list-style: url('../../assets/chapter12/basket-icon.gif') disc outside;
  }
</style>