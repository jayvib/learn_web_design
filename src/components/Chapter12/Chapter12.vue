<template>
  <div class="container">
    <h1 class="text-center mt-2">Chapter 12</h1>
    <hr/>
    <div v-if="components.length > 0">
      <ButtonCollapseItem
        v-for="component in components"
        :key="component.name.toLocaleLowerCase()"
        :idx="component.name.toLocaleLowerCase()"
        :variant="getVariant"
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
  import ExerciseTwelveOne from "./Exercises/ExerciseTwelveOne";
  import EM from "./EM";
  import FontSizePercentage from "./FontSizePercentage";
  import FontWeight from "./FontWeight";
  import FontStyleItalic from "./FontStyleItalic";
  import FontVariant from "./FontVariant";
  import FontStretch from "./FontStretch";
  import FontLineHeight from "./FontLineHeight";
  import TextIndent from "./TextIndent";
  import HorizontalTextAlign from "./HorizontalTextAlign";
  import TextDecoration from "./TextDecoration";
  import TextTransform from "./TextTransform";
  import TextSpacing from "./TextSpacing";
  import TextShadow from "./TextShadow";
  import ListStyle from "./ListStyle";
  import {getRandomVariant} from "../../lib/color";

  export default {
    name: "Chapter12",
    components: {
      ButtonCollapseItem
    },
    data() {
      return {
        components: [
          { name: 'em', component: EM },
          { name: 'Font Size Percentage', component: FontSizePercentage },
          { name: 'Font Weight', component: FontWeight },
          { name: 'Italic', component: FontStyleItalic },
          { name: 'Font Variant', component: FontVariant },
          { name: 'Font Stretch', component: FontStretch },
          { name: 'Line Height', component: FontLineHeight },
          { name: 'Indent', component: TextIndent },
          { name: 'Horizontal Text Align', component: HorizontalTextAlign },
          { name: 'Text Decoration', component: TextDecoration },
          { name: 'Text Transform', component: TextTransform },
          { name: 'Text Spacing', component: TextSpacing },
          { name: 'Text Shadow', component: TextShadow },
          { name: 'List Style', component: ListStyle },
        ],
        exercises: [
          { name: "Exercise", component: ExerciseTwelveOne }
        ],
      }
    },
    computed: {
      getVariant() {
        const variant = getRandomVariant()
        console.log(variant)
        return variant
      }
    }
  }
</script>

<style>
  body {
    background-color: #faf1d5;
  }
</style>