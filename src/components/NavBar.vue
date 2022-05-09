<template>
  <b-container p="0" fluid>
    <div>
      <b-navbar class="navbar" toggleable="lg" variant="info">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <div v-for="item in menu" :key="item.title">
              <router-link :to="item.route">
                <button class="button">
                  {{ item.title }}
                </button>
              </router-link>
            </div>
          </b-navbar-nav>

          <!-- Right aligned nav items -->

        </b-collapse>
        <b-navbar-nav class="ml-auto">
          <span class="brand px-3">Alistair Long Studio</span>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "NavBari",
  data() {
    return {
      //Routes (Views)
      menu: this.$store.getters.routes,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  //   background-color: #020202 !important;
  background-color: #020202 !important;
  color: #ffffff;
}

.button {
  background-color: transparent;
  color: #ffffff;
  padding: 0;
  margin-inline: 1rem;
  border: 0;
  font-weight: 100;
  font-size: 1.6rem;

  -webkit-transition: color 500ms;
  transition: color 500ms;

  &:hover {
    color: grey;
  }
}

.brand {
  color: #ffffff;
  font-size: 2.8rem;
}
</style>
