<template>
  <nav class="w-full p-6 mb-4">
    <div
      class="flex flex-col items-center md:flex md:flex-row md:justify-between"
    >
      <div class="pt-1">
        <router-link v-if="!isMobile()" to="/">
          <span
            class="fas fa-code text-hotmag text-5xl block"
            aria-hidden="true"
          ></span>
        </router-link>
        <span
          v-else
          @click="isOpen = !isOpen"
          class="fas fa-code text-hotmag text-5xl block"
          aria-hidden="true"
        ></span>
      </div>
      <div
        :class="{ hidden: !isOpen }"
        class="flex flex-col items-center md:flex md:flex-row md:order-last md:space-x-5 p-4"
      >
        <router-link
          v-show="isMobile()"
          to="/"
          class="hover:text-hotmag text-white/80 font-thin block py-2 px-4 rounded-md hover:bg-gray-700 md:inline-block md:bg-transparent md:p-0 md:hover:bg-transparent"
          >Home</router-link
        >
        <router-link
          to="/projects"
          class="hover:text-hotmag text-white/80 font-thin block py-2 px-4 rounded-md hover:bg-gray-700 md:inline-block md:bg-transparent md:p-0 md:hover:bg-transparent"
          >Projects</router-link
        >
        <a
          href="https://docs.google.com/document/d/1B2lo_Q2c3jFH3Y4F5X13gHGRFADub1wEtfgeZMF-JK0/edit?usp=drivesdk"
          target="_blank"
          class="hover:text-hotmag text-white/80 font-thin block py-2 px-4 rounded-md hover:bg-gray-700 md:inline-block md:bg-transparent md:p-0 md:hover:bg-transparent"
          >Resume</a
        >
      </div>
    </div>
  </nav>
</template>

<script scoped>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
