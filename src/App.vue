<template>
  <div>
    <main-header></main-header>
    <sub-header></sub-header>

    <router-view></router-view>
    <blok></blok>
    <qualitys></qualitys>
    <main-footer></main-footer>
  </div>
</template>

<script>
import style from "./assets/scss/style.scss";
import Blok from "./components/Blok.vue";
import MainFooter from "./components/MainFooter.vue";
import MainHeader from "./components/MainHeader.vue";
import Qualitys from "./components/Qualitys.vue";
import SubHeader from "./components/SubHeader.vue";
export default {
  components: { MainHeader, SubHeader, Blok, Qualitys, MainFooter },
  mounted() {
    this.$store.dispatch("loadCatalog");
    this.$store.dispatch("loadCart");
  },
};
</script>

<style lang="scss">
</style>
