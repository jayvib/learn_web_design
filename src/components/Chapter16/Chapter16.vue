<template>
  <div class="container">
    <h1 class="text-center mt-2">Chapter 16: Layout and Flexbox</h1>
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
  import Flex from "./Flex";

  export default {
    name: "Chapter16",
    components: {
      ButtonCollapseItem
    },
    data() {
      return {
        components: [
          { name: "Flex", component: Flex },
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