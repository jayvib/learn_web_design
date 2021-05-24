<template>
  <div class="container">
    <h4>Default</h4>
    <div class="default-container">
      <div class="box box1">1</div>
      <div class="box box2">2</div>
      <div class="box box3">3</div>
      <div class="box box4">4</div>
      <div class="box box5">5</div>
    </div>

    <h4>Display Flex: Column Reverse</h4>
    <div class="column-reverse-container">
      <div class="box box1">1</div>
      <div class="box box2">2</div>
      <div class="box box3">3</div>
      <div class="box box4">4</div>
      <div class="box box5">5</div>
    </div>

    <h4>Display Flex</h4>
    <div class="flex-container">
      <div class="box box1">1</div>
      <div class="box box2">2</div>
      <div class="box box3">3</div>
      <div class="box box4">4</div>
      <div class="box box5">5</div>
    </div>

    <h4>Display Flex: Row Reverse</h4>
    <div class="row-reverse-container">
      <div class="box box1">1</div>
      <div class="box box2">2</div>
      <div class="box box3">3</div>
      <div class="box box4">4</div>
      <div class="box box5">5</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flex"
}
</script>

<style scoped>
.row-reverse-container {
  border: 5px solid steelblue;
  display: flex;
  height: 100px;
  flex-direction: row-reverse;
}

.default-container {
  border: 5px solid steelblue;
  display: flex;
  flex-direction: column;
}

.column-reverse-container {
  border: 5px solid steelblue;
  display: flex;
  flex-direction: column-reverse;
}

.flex-container {
  border: 5px solid steelblue;
  display: flex;
  height: 100px;
}

.box {
  width: 40px;
  color: white;
  text-align: center;
}
.box1 {
  background: #932424;
}

.box2 {
  background-color: orangered;
}

.box3 {
  background-color: #77c105;
}

.box4 {
  background-color: steelblue;
}

.box5 {
  background-color: fuchsia;
}

</style>