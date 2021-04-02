<template>
  <div class="container">
    <h2>Column Spanning</h2>
    <table>
      <tr>
        <th colspan="2">Fat</th>
      </tr>
      <tr>
        <td>Saturated Fat (g)</td>
        <td>Unsaturated Fat(g)</td>
      </tr>
    </table>

    <h2>Row Spanning</h2>
    <table>
      <tr>
        <th rowspan="3">Service Size</th>
        <td>Small (8oz.)</td>
      </tr>
      <tr>
        <td>Medium (16oz.)</td>
      </tr>
      <tr>
        <td>Large (24oz.)</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Spanning"
  }
</script>

<style scoped>

</style>