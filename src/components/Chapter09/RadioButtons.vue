<template>
  <div class="container">
    <p>How old are you?</p>
    <ol>
      <li><input type="radio" name="age" v-model="age" value="under24" checked/> Under 24</li>
      <li><input type="radio" name="age" v-model="age" value="25-34"> 25 to 34</li>
      <li><input type="radio" name="age" v-model="age" value="35-44"> 35 to 44</li>
      <li><input type="radio" name="age" v-model="age" value="over45"> 45+</li>
    </ol>
    Your Age: {{ readableAge }}
  </div>
</template>

<script>
  export default {
    name: "RadioButtons",
    data() {
      return {
        age: 'under24',
      }
    },
    computed: {
      readableAge() {
        switch (this.age) {
          case 'under24':
            return "Under 24"
          case '25-34':
            return "25 to 34"
          case '35-44':
            return "35 to 44"
          default:
            return "Over 45"
        }
      }
    }
  }
</script>

<style scoped>
  ol, li {
    list-style-type: none;
  }
</style>