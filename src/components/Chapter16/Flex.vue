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

    <h4>Wrap Reverse</h4>
    <div class="wrap-reverse">
      <div class="box box1">1</div>
      <div class="box box2">2</div>
      <div class="box box3">3</div>
      <div class="box box4">4</div>
      <div class="box box5">5</div>
      <div class="box box1">6</div>
      <div class="box box2">7</div>
      <div class="box box3">8</div>
      <div class="box box4">9</div>
      <div class="box box5">10</div>
    </div>

    <h4>Flex Align: Flex Start</h4>
    <div class="flex-align-flex-start">
      <div class="box1 box-align">1</div>
      <div class="box2 box-align">2</div>
      <div class="box3 box-align">3</div>
      <div class="box4 box-align">4</div>
      <div class="box5 box-align">5</div>
    </div>

    <h4>Flex Align: Flex End</h4>
    <div class="flex-align-flex-end">
      <div class="box1 box-align">1</div>
      <div class="box2 box-align">2</div>
      <div class="box3 box-align">3</div>
      <div class="box4 box-align">4</div>
      <div class="box5 box-align">5</div>
    </div>

    <h4>Flex Align: Flex center</h4>
    <div class="flex-align-flex-center">
      <div class="box1 box-align">1</div>
      <div class="box2 box-align">2</div>
      <div class="box3 box-align">3</div>
      <div class="box4 box-align">4</div>
      <div class="box5 box-align">5</div>
    </div>

    <h4>Flex Align: Flex Space Between</h4>
    <div class="flex-align-flex-between">
      <div class="box1 box-align">1</div>
      <div class="box2 box-align">2</div>
      <div class="box3 box-align">3</div>
      <div class="box4 box-align">4</div>
      <div class="box5 box-align">5</div>
    </div>

    <h4>Flex Align: Flex Space Around</h4>
    <div class="flex-align-space-around">
      <div class="box1 box-align">1</div>
      <div class="box2 box-align">2</div>
      <div class="box3 box-align">3</div>
      <div class="box4 box-align">4</div>
      <div class="box5 box-align">5</div>
    </div>

    <h4>Flex Align: Align Items Flex Start</h4>
    <div class="align-items-flex-start align-items">
      <div class="box1 box-align">1</div>
      <div class="box2 box-align">2</div>
      <div class="box3 box-align">3</div>
      <div class="box4 box-align">4</div>
      <div class="box5 box-align">5</div>
    </div>

    <h4>Flex Align: Align Items Flex End</h4>
    <div class="align-items-flex-end align-items">
      <div class="box1 box-align">1</div>
      <div class="box2 box-align">2</div>
      <div class="box3 box-align">3</div>
      <div class="box4 box-align">4</div>
      <div class="box5 box-align">5</div>
    </div>

    <h4>Flex Align: Align Items Center</h4>
    <div class="align-items-center align-items">
      <div class="box1 box-align">1</div>
      <div class="box2 box-align">2</div>
      <div class="box3 box-align">3</div>
      <div class="box4 box-align">4</div>
      <div class="box5 box-align">5</div>
    </div>

    <h4>Flex Align: Align Items Stretched</h4>
    <div class="align-items-stretch align-items">
      <div class="box1 box-align">1</div>
      <div class="box2 box-align">2</div>
      <div class="box3 box-align">3</div>
      <div class="box4 box-align">4</div>
      <div class="box5 box-align">5</div>
    </div>

    <h4>Flex Align: Align Items Self</h4>

  </div>

</template>

<script>
export default {
  name: "Flex"
}
</script>

<style scoped>
.align-items-stretch {
  align-items: stretch;
}

.align-items-center {
  align-items: center;
}

.align-items {
  display: flex;
  height: 300px;
  border: 5px solid steelblue;
}

.align-items-flex-end {
  align-items: flex-end;
}

.align-items-flex-start {
  align-items: flex-start;
}

.flex-align-flex-between {
  display: flex;
  flex-direction: row;
  border: 5px solid steelblue;
  justify-content: space-between;
}

.flex-align-space-around {
  display: flex;
  flex-direction: row;
  border: 5px solid steelblue;
  justify-content: space-around;
}

.flex-align-flex-center {
  display: flex;
  flex-direction: row;
  border: 5px solid steelblue;
  justify-content: center;
}

.flex-align-flex-end {
  display: flex;
  flex-direction: row;
  border: 5px solid steelblue;
  justify-content: flex-end;
}

.flex-align-flex-start {
  display: flex;
  flex-direction: row;
  border: 5px solid steelblue;
}

.box-align {
  width: 50px;
  text-align: center;
  color: white;
}

.wrap-reverse {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  height: 50px;
}

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
  width: 25%;
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