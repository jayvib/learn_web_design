<template>
  <div>
    <b-button
      @click="toggleCollapses(idx)"
      variant="dark"
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

  export default {
    name: "ButtonCollapseItem",
    props: ['idx', 'component'],
    methods: {
      toggleCollapses(id) {
        this.$root.$emit('bv::toggle::collapse', id)
      }
    }
  }
</script>

<style scoped>

</style>