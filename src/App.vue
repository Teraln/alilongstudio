<template>
  <div id="app">
    <NavBar />
    <router-view />
    <!--<Footer /> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
//import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: { NavBar },

  data: () => ({}),
  created() {
    this.$store.dispatch("fetchWorks");
    this.$store.dispatch("fetchDarkrooms");
  },
};
</script>

<style lang="scss">
body {
  font-size: 16px !important;
  background-color: #020202;
  color: #ffffff;
  text-align: center;
}

#app {
  font-size: 16px !important;
  background-color: #020202;
  color: #ffffff;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container-fluid {
  padding-inline: 0;
}

/* #nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
