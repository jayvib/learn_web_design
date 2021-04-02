<template>
  <div class="container">
    <h3>Mailing List Sign up</h3>
    <form @onsubmit="onSubmit">
      <fieldset>
        <legend>Join our email list</legend>
        <p>Get news about the band such as tour dates and special MP3 releases sent to your own in-box.</p>
        <ol>
          <li>
            <label for="firstlast">Name: </label>
            <input v-model="fullname" id="firstlast" type="text">
          </li>
          <li>
            <label for="email">Email:</label>
            <input type="email" v-model="email" id="email">
          </li>
        </ol>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Basic",
    data() {
      return {
        email: null,
        fullname: null,
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(`Submitting: ${this.fullname} ${this.email}`)
      }
    }
  }
</script>

<style scoped>

</style>