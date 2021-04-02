<template>
  <div class="container">
    <h1 class="text-center mt-2">Chapter 09</h1>
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
  import Basic from "./Basic";
  import ExerciseNineOne from "./Exercises/ExerciseNineOne";
  import RadioButtons from "./RadioButtons";
  import Checkbox from "./Checkbox";
  import DropdownMenu from "./DropdownMenu";
  import GroupingMenu from "./GroupingMenu";
  import FileSelection from "./FileSelection";
  import DateTime from "./DateTime";
  import Numeric from "./Numeric";
  import Color from "./Color";
  import Progress from "./Progress";
  import Meter from "./Meter";
  import Label from "./Label";
  import FieldSet from "./FieldSet";

  export default {
    name: "Chapter08",
    components: {
      ButtonCollapseItem
    },
    data() {
      return {
        components: [
          { name: 'Basic', component: Basic },
          { name: 'Radio Buttons', component: RadioButtons },
          { name: 'Checkbox', component: Checkbox },
          { name: 'Dropdown Menu', component: DropdownMenu },
          { name: 'Grouping Menu', component: GroupingMenu },
          { name: 'File Selection', component: FileSelection },
          { name: 'Date Time Controls', component: DateTime},
          { name: 'Numeric', component: Numeric },
          { name: 'Color', component: Color },
          { name: 'Progress', component: Progress },
          { name: 'Meter', component: Meter },
          { name: 'Label', component: Label },
          { name: 'Field Set', component: FieldSet },
        ],
        exercises: [
          { name: 'Exercise 9-1', component: ExerciseNineOne }
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