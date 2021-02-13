<template>
  <div>
    <h2>Header</h2>
    <h3>Basic</h3>
    <header>
      <img src="../../../assets/logo.png" alt="logo">
      <h1>
        Vue JS Framework<br>
        <small class="text-secondary">A Javascript framework</small>
      </h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Shop</a></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>