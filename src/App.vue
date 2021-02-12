<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="$router.push('/ch05')">Chapter05</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container">
      <router-view></router-view>
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
  /* reset browser styles */
  html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1.2;
  }
  ol {
    padding-left: 1.4em;
    list-style: decimal;
  }
  ul {
    padding-left: 1.4em;
    list-style: square;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
</style>
