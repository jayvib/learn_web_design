<template>
  <div class="container">
    <h1 class="text-center mt-2">Chapter 11</h1>
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
  import ColorName from "./ColorName";
  import ForeGround from "./ForeGround";
  import BackGround from "./BackGround";
  import BackGroundClipping from "./BackGroundClipping";
  import Opacity from "./Opacity";
  import PsuedoClass from "./PsuedoClass";
  import PsuedoElement from "./PsuedoElement";
  import AttributeSelector from "./AttributeSelector";
  import BackgroundImage from "./BackgroundImage";
  import BackgroundPosition from "./BackgroundPosition";
  import Gradient from "./Gradient";

  export default {
    name: "Chapter11",
    components: {
      ButtonCollapseItem
    },
    data() {
      return {
        components: [
          { name: 'Color Name', component: ColorName },
          { name: 'Foreground', component: ForeGround },
          { name: 'Background', component: BackGround },
          { name: 'Background Clipping', component: BackGroundClipping },
          { name: 'Opacity', component: Opacity },
          { name: 'Psuedo-Classes', component: PsuedoClass },
          { name: 'Psuedo-Elements', component: PsuedoElement },
          { name: 'Attribute Selectors', component: AttributeSelector },
          { name: 'Background Image', component: BackgroundImage },
          { name: 'Background Position', component: BackgroundPosition },
          { name: 'Gradient', component: Gradient },
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