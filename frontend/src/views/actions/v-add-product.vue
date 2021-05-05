<template>
  <div class="v-add-product">
    <div
      id="contact"
      class="relative w-full min-h-screen bg-black text-red-500"
    >
      <div
        class="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center"
      >
        <form
          @submit.prevent="addProductInShop"
          class="w-full md:w-1/2 border border-red-500 p-6 bg-gray-900"
        >
          <h2 class="text-2xl pb-3 font-semibold">
            Добавить услугу
          </h2>
          <div>
            <div class="flex flex-col mb-3">
              <label for="name">Название</label>
              <input
                type="text"
                id="name"
                class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                autocomplete="off"
                v-model="name"
              />
            </div>
            <div class="flex flex-col mb-3">
              <label for="message">Описание услуги</label>
              <textarea
                rows="4"
                id="message"
                class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
                v-model="description"
              ></textarea>
            </div>
          </div>
          <div class="w-full pt-3">
            <button
              type="submit"
              class="w-full bg-gray-900 border border-red-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-red-500 hover:text-white text-xl cursor-pointer"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-add-product",

  data() {
    return {
      name: '',
      description: ''
    };
  },

  methods: {
    addProductInShop() {
      let data = {
        name: this.name,
        description: this.description
      }
      this.$store.dispatch('addProdcutInShop_actions', data)
      .then(() => this.$router.push('/'))
      .catch(err => console.log(err))
    },
  },
};
</script>

<style></style>
