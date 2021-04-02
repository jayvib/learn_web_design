<template>
  <div>
    <b-button
      @click="toggleCollapses(idx)"
      :variant="randomVariant"
      class=" width-25 mt-2 d-block">
      <slot name="header"></slot>
    </b-button>
    <b-collapse
      :id="idx"
      class="mt-2">
      <component :is="component"></component>
    </b-collapse>
  </div>
</template>

<script>

  import {getRandomVariant} from "../lib/color";

  export default {
    name: "ButtonCollapseItem",
    props: {
      idx: String,
      component: Object,
      variant: {
        type: String,
        default: 'success'
      }
    },
    methods: {
      toggleCollapses(id) {
        this.$root.$emit('bv::toggle::collapse', id)
      },
    },
    computed: {
      randomVariant() {
        return getRandomVariant()
      }
    }
  }
</script>

<style scoped>

</style>