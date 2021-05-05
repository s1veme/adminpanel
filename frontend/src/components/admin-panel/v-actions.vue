<template>
  <div class="v-actions">
    <div class="container mx-auto">
      <div class="mt-20 cart-button flex flex-wrap justify-betwee">
        <router-link
          to="/add-product"
          class="btn-actions"
          >
          Добавить товар
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-actions",
  components: {},

  data() {
    return {};
  },

  methods: {},
};
</script>

<style>
  .btn-actions {
    @apply p-5 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75;
  }
</style>
