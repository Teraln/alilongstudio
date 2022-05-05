<template>
  <div id="DarkRoomElement">
    <div class="gallery-container">
      <!-- Hooper -->
      <div class="hooper-container">
        <!-- Control Buttons -->

        <b-button id="control-btn-next" @click="slideNext()">
          <b-icon
            icon="chevron-compact-right"
            aria-hidden="true"
            size="lg"
          ></b-icon>
        </b-button>

        <b-button id="control-btn-prev" @click="slidePrev()">
          <b-icon
            icon="chevron-compact-left"
            aria-hidden="true"
            size="lg"
          ></b-icon>
        </b-button>

        <!-- Title -->
        <div class="gallery-title">
          <h1>{{ darkroom.title }}</h1>
        </div>
        <hooper-progress slot="hooper-addons"></hooper-progress>
        <hooper id="gallery-hooper" :settings="hooperSettings" ref="carousel">
          <!-- Slides -->
          <slide
            id="gallery-slide"
            v-for="(item, index) in imagesArray"
            :key="index"
            :index="index"
          >
            <b-img id="item-image" :src="item" alt="" draggable="false"></b-img>
          </slide>
        </hooper>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Progress as HooperProgress } from "hooper";

import "hooper/dist/hooper.css";

export default {
  name: "DarkRoomElement",
  props: ["darkroom"],
  components: {
    Hooper,
    Slide,
    HooperProgress,
  },
  data() {
    return {
      imagesArray: this.darkroom.imageURL,
      hooperSettings: {
        itemsToShow: 1,
        infiniteScroll: true,
        transition: 500,
        wheelControl: false,
        mouseDrag: true,
        touchDrag: true,
        keysControl: true,
      },
    };
  },
  methods: {
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
#DarkRoomElement {
  //Component wrapper
  & .gallery-container {
    height: 100vh;
    padding-left: 0;
    padding-right: 0;
    //Title
    /*     & #gallery-title {
      text-align: center;
      margin: 3rem 0 4rem 0;
      font-weight: 300;
    } */
    //Hooper Container
    & .hooper-container {
      height: 100%;
      position: relative;
      &.gallery-title {
        height: 10%;
      }
      & #control-btn-next {
        background-color: transparent;
        position: absolute;
        top: 10%;
        right: 0;
        z-index: 3;
        height: 80%;
        width: 10%;
        border: 0;
        font-size: 2rem;
        outline: none;
        & #control-btn-next:focus {
          outline: none !important;
          border: none !important;
        }
      }
      & #control-btn-prev {
        background-color: transparent;
        position: absolute;
        top: 10%;
        left: 0;
        z-index: 3;
        height: 80%;
        width: 10%;
        border: 0;
        font-size: 2rem;
        outline: none;
      }

      //The hooper component
      & #gallery-hooper {
        outline: none;
        height: 90%;
        //Image element
        & .hooper-track {
          padding-left: 0;
        }
        & #gallery-slide {
          position: relative;
          //Item title container

          & #item-image {
            overflow: hidden;
            margin: auto;
            max-width: 100%;
            max-height: 90%;
          }
        }
        & .hooper-progress {
          background-color: transparent;
          & .hooper-progress-inner {
            background-color: #ffffff;
          }
        }
        & .hooper-slide {
          display: inherit;
          align-items: center;
        }
      }
    }
  }
}
.hooper-indicators {
  padding-left: 0;
}
.hooper-indicator.is-active {
  background-color: grey !important;
  color: #ffffff !important;
}
.hooper-indicator:hover {
  background-color: grey !important;
  color: #ffffff !important;
}
</style>
