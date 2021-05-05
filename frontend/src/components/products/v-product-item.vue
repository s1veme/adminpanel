<template>
  <div class="v-product item">
    <div class="container mx-auto py-10 flex justify-center">
      <div
        class="bg-white w-80 shadow-lg cursor-pointer rounded transform hover:scale-105 duration-300 ease-in-out"
      >
        <div class="">
          <img src="https://picsum.photos/400/300" alt="" class="rounded-t" />
        </div>
        <div class="p-4">
          <h2 class="text-2xl uppercase">{{ productData.name }}</h2>
          <!-- <p class="font-light text-gray-500 text-lg my-2">{{ productData.price }} &euro;</p> --> 
          <p>
            {{ productData.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-product-item",
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {};
  },
};
</script>
