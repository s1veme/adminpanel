<template>
  <div class="v-navbar absolute right-0">
    <div class="flex justify-end mr-10">
      <div class="relative">
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="relative z-10 block rounded-md bg-white p-2 focus:outline-none bg-black"
        >
          <svg
            class="h-5 w-5 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <div
          v-if="dropdownOpen"
          @click="dropdownOpen = false"
          class="fixed inset-0 h-full z-10"
        ></div>

        <div
          v-if="dropdownOpen"
          class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
        >
          <router-link
            href="#"
            class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
            to="/"
          >
            home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-navbar",

  data() {
    return {
        dropdownOpen: false,
    };
  },

  methods: {},
};
</script>
