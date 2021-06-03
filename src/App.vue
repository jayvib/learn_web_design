<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch05')">Chapter05</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch06')">Chapter06</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch07')">Chapter07</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch08')">Chapter08</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch09')">Chapter09</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch10')">Chapter10</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch11')">Chapter11</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch12')">Chapter12</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch13')">Chapter13</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch14')">Chapter14</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch15')">Chapter15</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch16')">Chapter16</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch17')">Chapter 17</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch18')">Chapter 18</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/jenkitchen')">Jen Kitchen</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/blackgoosebistrogallery')">Black Goose Bistro Gallery</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/blackgoosebistro')">Black Goose Bistro</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/summermenu')">Summer Menu</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <router-view class="mt-4"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  html {
    font-size: 100%;
  }

  .width-25 {
    width: 25%;
  }

  .emoji-bullet li {
    list-style: none;
    margin: 0;
    padding: 0;
    text-indent: -0.7rem;
  }

  .emoji-bullet li::before {
    content: "👉"
  }

</style>
