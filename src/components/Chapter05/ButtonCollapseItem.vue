<template>
  <div>
    <b-button @click="toggleCollapses(idx)" variant="dark" class="mt-2 d-block">
      <slot name="header"></slot>
    </b-button>
    <b-collapse :id="idx" class="width-25 mt-2">
      <slot name="body"></slot>
    </b-collapse>
  </div>
</template>

<script>

  export default {
    name: "ButtonCollapseItem",
    props: ['idx'],
    methods: {
      toggleCollapses(id) {
        this.$root.$emit('bv::toggle::collapse', id)
      }
    }
  }
</script>

<style scoped>

</style>