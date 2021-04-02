<template>
  <div class="container">
    <form action="#" method="post" enctype="multipart/form-data">
      <label>
        Send a photo to be used as your online icon <em>(optional)</em><br>
        <input type="file" name="photo">
      </label>
    </form>
  </div>
</template>

<script>
  export default {
    name: "FileSelection"
  }
</script>

<style scoped>

</style>