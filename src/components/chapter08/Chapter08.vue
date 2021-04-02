<template>
  <div class="container">
    <h1 class="text-center mt-2">Chapter 08</h1>
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
  import Basic from "./Table/Basic";
  import ExerciseEightOne from "./Exercises/ExerciseEightOne";
  import Spanning from "./Table/Spanning";
  import ExerciseEightTwo from "./Exercises/ExerciseEightTwo";
  import ExerciseEightThree from "./Exercises/ExerciseEightThree";
  import Accessibility from "./Table/Accessibility";
  import ColumnAndRowGroup from "./Table/ColumnAndRowGroup";

  export default {
    name: "Chapter08",
    components: {
      ButtonCollapseItem
    },
    data() {
      return {
        components: [
          { name: 'Basic', component: Basic },
          { name: 'Spanning', component: Spanning },
          { name: 'Accessibility', component: Accessibility },
          { name: 'Column and Row Group', component: ColumnAndRowGroup },
        ],
        exercises: [
          { name: 'Exercise 8-1', component: ExerciseEightOne },
          { name: 'Exercise 8-2', component: ExerciseEightTwo},
          { name: 'Exercise 8-3', component: ExerciseEightThree},
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