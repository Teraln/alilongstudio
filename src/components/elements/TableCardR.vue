<template>
  <b-container fluid class="table">
    <b-row class="text-center" align-v="center">
      <!-- Image -->
      <b-col cols="12" md="9">
        <img class="image" src="../../assets/images/IMG_0637.jpg" alt=""
      /></b-col>
      <!-- Card -->
      <b-col cols="12" md="3"
        ><b-container>
          <b-row>
            <b-col></b-col>
            <b-col cols="8"
              ><div>
                <b-card
                  :title="work.title"
                  tag="article"
                  class="tableCard mb-2"
                >
                  <b-card-text>
                    {{ work.paragraph }}
                  </b-card-text>

                  <b-button class="cardButton" :href="work.link"
                    >VIEW PROJECT</b-button
                  >
                </b-card>
              </div></b-col
            >
            <b-col></b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "TableCardR",
  props: ["work"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.table {
  color: #ffffff;
}
.tableCard {
  background-color: transparent;
  text-align: left;
}
.cardButton {
  background-color: transparent;
}
.image {
  height: 100vh;
  max-width: 100%;
  object-fit: cover;
}
</style>
