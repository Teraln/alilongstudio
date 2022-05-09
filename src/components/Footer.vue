<template>
  <div>
    <b-container class="footerContainer">
      <b-row class="text-center" align-v="center">
        <b-col cols="8" md="4" offset="2" offset-md="4" align-v="center">
          <b-card title="This is a jew" img-top tag="article" class="mb-2 footerCard" align-self="center">
            <b-avatar
              src="https://firebasestorage.googleapis.com/v0/b/als-website-1d36f.appspot.com/o/Alioster.png?alt=media&token=c848d97f-eb98-4cb1-8b04-240ad850d367"
              size="6rem"></b-avatar>
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.footerCard {
  color: #ffffff;
  background-color: #020202;
}
</style>
