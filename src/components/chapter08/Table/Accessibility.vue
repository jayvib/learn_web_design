<template>
  <div class="container">
    <h2>Caption</h2>
    <table>
      <caption>Nutritional Information</caption>
      <tr>
        <th>Menu Item</th>
        <th>Calories</th>
        <th>Fat (g)</th>
      </tr>
      <tr>
        <td>Chicken noodle soup</td>
        <td>120</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Caesar salad</td>
        <td>400</td>
        <td>26</td>
      </tr>
    </table>

    <h2>Scope</h2>
    <table>
      <tr>
        <th scope="row">Mars</th>
        <td>.95</td>
        <td>.62</td>
        <td>0</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Accessibility"
  }
</script>

<style scoped>
  th, td {
    border: 1px solid grey;
    padding: 2px 5px;
  }
  
  table caption {
    text-align: center;
  }
</style>