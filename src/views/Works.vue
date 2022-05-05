/* eslint-disable */
<template>
  <div>
    <b-container
      id="worksContainerDesktop"
      p="0"
      fluid
      class="a"
      v-for="(work, index) in worksArray"
      :key="work.id"
    >
      <component :is="checkIndex(index)" :work="work"></component>
    </b-container>
  </div>
</template>

<script>
import TableCardL from "../components/elements/TableCardL.vue";
import TableCardR from "../components/elements/TableCardR.vue";

export default {
  name: "Works",
  components: { TableCardL: TableCardL, TableCardR: TableCardR },
  data() {
    return {
      worksArray: this.$store.getters.works,
      width: document.documentElement.clientWidth,
      isMobile: false,
    };
  },

  methods: {
    checkIndex(number) {
      if ((number + 2) % 2 == 0) {
        return "TableCardL";
      } else {
        return "TableCardR";
      }
    },
    onResize() {
      this.isMobile = window.innerWidth < 768;
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },
};
</script>

<style>
.a {
  background-color: black;
  height: 100vh;
}
</style>
