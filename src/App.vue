<template>
  <div class="flex-col bg-gradient-to-r from-[#4aad76] to-[#379683] w-full h-screen p-0 m-0">
    <Navbar />
    <div>
      <router-view />
    </div>
    <Footer class="absolute inset-x-0 bottom-0"/>
  </div>
</template>
<script scoped>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
