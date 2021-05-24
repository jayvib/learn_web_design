<template>
  <div class="container">
    <h1 class="text-center mt-2">Chapter 14</h1>
    <hr/>
    <div v-if="components.length > 0">
      <ButtonCollapseItem
        v-for="component in components"
        :key="component.name.toLocaleLowerCase()"
        :idx="component.name.toLocaleLowerCase()"
        :component="component.component">
        <template v-slot:header>{{ component.name }}</template>
      </ButtonCollapseItem>
    </div>
    <div v-if="exercises.length > 0">
      <hr/>
      <h1 class="text-center mt-2">Exercises</h1>
      <ButtonCollapseItem
        v-for="component in exercises"
        :key="component.name.toLocaleLowerCase()"
        :idx="component.name.toLocaleLowerCase()"
        :component="component.component">
        <template v-slot:header>{{ component.name }}</template>
      </ButtonCollapseItem>
    </div>
  </div>
</template>

<script>
  import ButtonCollapseItem from "../ButtonCollapseItem"
  import Box from "./Box";
  import Height from "./Height";
  import Padding from "./Padding"
  import Borders from "./Borders";
  import Display from "./Display";
  import BoxDropShadows from "./BoxDropShadows";

  export default {
    name: "Chapter14",
    components: {
      ButtonCollapseItem
    },
    data() {
      return {
        components: [
          { name: 'Box', component: Box },
          { name: 'Height', component: Height },
          { name: 'Padding', component: Padding },
          { name: 'Borders', component: Borders },
          { name: 'Display', component: Display },
          { name: 'Box Drop Shadow', component: BoxDropShadows },
        ],
        exercises: [
        ],
      }
    }
  }
</script>

<style>
  body {
    background-color: #faf1d5;
  }
</style>