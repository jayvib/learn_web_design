<template>
  <div>
    <table>
      <tr>
        <td>apples</td>
        <td rowspan="3">orange</td>
        <td>pears</td>
      </tr>
      <tr>
        <td>bananas</td>
        <td rowspan="2">pineapple</td>
      </tr>
      <tr>
        <td>lychees</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "ExerciseEightThree"
  }
</script>

<style scoped>
  td {
    border: 1px solid gray;
    padding: 2px 5px;
  }
</style>