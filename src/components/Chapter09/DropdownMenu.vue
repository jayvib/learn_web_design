<template>
  <div>
    <p>What is your favorite 80s band?</p>
    <select v-model="eightiesFave">
      <option value="">Please select</option>
      <option>The Cure</option>
      <option>Cocteau Twins</option>
      <option>Tears for Fears</option>
      <option>Thompson Twins</option>
      <option value="EBTG">Everything But the Girl</option>
      <option>Depeche Mode</option>
      <option>The Smiths</option>
      <option>New Order</option>
    </select>
    <span class="ml-2">{{ eightiesFave }}</span>
  </div>
</template>

<script>
  export default {
    name: "DropdownMenu",
    data() {
      return {
        eightiesFave: '',
      }
    }
  }
</script>

<style scoped>

</style>