<template>
  <div>
    <h1 class="text-center mt-2">Chapter 05</h1>
    <hr/>
    <ButtonCollapseItem
      v-for="component in components"
      :key="component.name.toLocaleLowerCase()"
      :idx="component.name.toLocaleLowerCase()"
      :component="component.component">
      <template v-slot:header>{{ component.name }}</template>
    </ButtonCollapseItem>
    <hr>
    <h1 class="text-center mt-2">Exercises</h1>
    <ButtonCollapseItem
      v-for="exercise in exercises"
      :key="exercise.name.toLocaleLowerCase()"
      :idx="exercise.name.toLocaleLowerCase()"
      :component="exercise.component">
      <template v-slot:header>{{ exercise.name }}</template>
    </ButtonCollapseItem>
  </div>
</template>

<script>
  import ButtonCollapseItem from "./ButtonCollapseItem";
  import ListUnordered from "./List/ListUnordered";
  import ListOrdered from "./List/ListOrdered";
  import ListDescription from "./List/ListDescription";
  import BlockQuote from "./GroupingContent/BlockQuote";
  import PreformattedText from "./GroupingContent/PreformattedText";
  import Figure from "./GroupingContent/Figure";
  import ExerciseFiveOne from "./Exercises/ExerciseFiveOne";
  import Main from "./HTML5/Main";
  import Header from "./HTML5/Header";

  export default {
    name: "Chapter05",
    components: {
      ButtonCollapseItem,
    },
    data() {
      return {
        components: [
          { name: 'Unordered List', component: ListUnordered },
          { name: 'Ordered List', component: ListOrdered },
          { name: 'Description List', component: ListDescription},
          { name: 'Group Content', component: BlockQuote },
          { name: 'Preformatted Text', component: PreformattedText},
          { name: 'Figure', component: Figure },
          { name: 'Main', component: Main },
          { name: 'Header', component: Header },
        ],
        exercises: [
          { name: 'Exercise-5-1', component: ExerciseFiveOne },
        ]
      }
    }
  }
</script>

<style scoped>

</style>