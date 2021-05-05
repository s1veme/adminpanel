<template>
  <div class="v-products" v-if="products">
    <div class="container mx-auto">
      <div class="flex justify-center" v-if="showLoading">
        <vLoader />
      </div>
      <div class="flex flex-wrap justify-between">
        <vProductItem
          v-for="product in products"
          :key="product.id"
          :productData="product"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <h1>ДОБАВЬТЕ ТОВАР</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import vLoader from "../v-loader";
import vProductItem from "./v-product-item";

export default {
  name: "v-products",

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["products", "showLoading"]),
  },

  methods: {
    ...mapActions(["getProducts_actions"]),
  },

  mounted() {
    this.getProducts_actions();
  },

  components: {
    vProductItem,
    vLoader,
  },
};
</script>
