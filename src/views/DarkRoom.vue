<template>
  <div id="DarkRoom">
    <b-container fluid>
      <b-row v-for="darkroom in darkroomsArray" :key="darkroom.id">
        <b-col>
          <DarkRoomElement :darkroom="darkroom" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DarkRoomElement from "../components/elements/DarkRoomElement.vue";

export default {
  name: "DarkRoom",
  components: { DarkRoomElement },

  data() {
    return {
      darkroomsArray: this.$store.getters.darkrooms,
    };
  },
  mounted() {},
  methods: {
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    smoothScroll() {
      const galleryView = document.querySelector("#gallery-hooper");

      galleryView.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
