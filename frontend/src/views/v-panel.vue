<template>
  <div class="v-panel">
    <h1>{{ isAdmin }}</h1>
    <vActions />

    <hr class="mt-10 mb-10" />

    <vProducts />
  </div>
</template>

<script>
import vActions from "../components/admin-panel/v-actions";
import vProducts from "../components/products/v-products";

export default {
  name: "v-panel",
  components: {
    vActions,
    vProducts,
  },

  data() {},

  methods: {},
};
</script>

<style></style>
