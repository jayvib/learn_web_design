<template>
  <div>
    <h1 class="text-center mt-2">Chapter 05</h1>
    <hr/>
    <ButtonCollapseItem idx="testing">
      <template v-slot:header>Unordered List</template>
      <template v-slot:body>
        <ListUnordered/>
      </template>
    </ButtonCollapseItem>
  </div>
</template>

<script>
  import ButtonCollapseItem from "./ButtonCollapseItem";
  import ListUnordered from "./List/ListUnordered";

  export default {
    name: "Chapter05",
    components: {
      ListUnordered,
      ButtonCollapseItem
    }
  }
</script>

<style scoped>

</style>