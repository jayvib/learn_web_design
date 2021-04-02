<template>
  <div>
    <table>
      <tr>
        <th>7:00pm</th>
        <th>7:30pm</th>
        <th>8:00pm</th>
      </tr>
      <tr>
        <td colspan="3">The Sunday Night Movie</td>
      </tr>
      <tr>
        <td>Perry Mason</td>
        <td>Candid Camera</td>
        <td>What's my Line?</td>
      </tr>
      <tr>
        <td>Bonanza</td>
        <td colspan="2">The Wackiest Ship in the Army</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "ExerciseEightTwo"
  }
</script>

<style scoped>
  th, td {
    border: 1px solid gray;
    padding: 2px 10px;
  }

  th {
    text-align: center
  }
</style>
