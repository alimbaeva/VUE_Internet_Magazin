<template>
  <div>
    <filters></filters>
    <div class="fetured">
      <div class="container">
        <div class="fetured__product">
          <catalog
            v-for="product of catalog"
            :key="product.id"
            :data="product"
          ></catalog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Catalog from "../components/Catalog.vue";
import Filters from "../components/Filters.vue";
export default {
  components: { Catalog, Filters },
  name: "Home",
  computed: {
    catalog() {
      return this.$store.getters.getCatalog;
    },
  },
};
</script>
