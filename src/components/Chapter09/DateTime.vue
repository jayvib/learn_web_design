<template>
  <div class="container">
    <h2>Time</h2>
    <input type="time" v-model="timeValue"><span> value: {{ timeValue }}</span>
    <h2>Date</h2>
    <input type="date" v-model="dateValue"/><span> value: {{ dateValue }}</span>
    <h2>Date Time Local</h2>
    <input type="datetime-local" v-model="dateTimeValue"> <span> value: {{ dateTimeValue }}</span>
    <h2>Month</h2>
    <input type="month" v-model="monthValue"><span> value: {{ monthValue }}</span>
    <h2>Week</h2>
    <input type="week" v-model="weekValue"> <span> value: {{ weekValue }}</span>
  </div>
</template>

<script>
  export default {
    name: "DateTime",
    data() {
      return {
        timeValue: null,
        dateValue: null,
        dateTimeValue: null,
        monthValue: null,
        weekValue: null,
      }
    }
  }
</script>

<style scoped>

</style>