<template>
  <div
    id="top"
    class="flex-col bg-bgPattern w-full p-0 m-0 scroll-smooth font-body"
  >
    <Navbar class="sticky top-0" />
    <div>
      <router-view />
    </div>
    <Footer class="bottom-0 mt-5"/>
  </div>
</template>
<script scoped>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Herosection from "./views/Herosection.vue";
import About from "./views/About.vue";
import Connect from "./components/Connect.vue";
export default {
  components: {
    Navbar,
    Footer,
    Herosection,
    About,
    Connect,
  },
};
</script>

<!-- gradient-to-r from-[#4aad76] to-[#379683] -->
