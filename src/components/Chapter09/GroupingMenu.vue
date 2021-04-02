<template>
  <div>
    <select v-model="icecream" size="7" multiple>
      <optgroup label="traditional">
        <option>Vanilla</option>
        <option>Chocolate</option>
      </optgroup>
      <optgroup label="fancy">
        <option>Super praline</option>
        <option>Nut surprise</option>
        <option>Candy corn</option>
      </optgroup>
    </select>
    <p>Selected: {{ icecream.join(', ')}}</p>
  </div>
</template>

<script>
  export default {
    name: "GroupingMenu",
    data() {
      return {
        icecream: []
      }
    }
  }
</script>

<style scoped>

</style>