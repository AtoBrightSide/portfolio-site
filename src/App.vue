<template>
  <div id="top" class="flex-col bg-[#D9D8D7] text-[#5C7356] w-full p-0 m-0 scroll-smooth font-body">
    <Navbar />
    <Herosection id="herosection"/>
    <About id="about"/>
    <Projects id="projects"/>
    <Connect />
    <Footer class="bottom-0 mt-5" />
  </div>
</template>

<script scoped>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import About from "./components/About.vue";
import Connect from "./components/Connect.vue";
import Herosection from "./components/Herosection.vue";
import Projects from "./components/Projects.vue"
export default {
  components: {
    Navbar,
    Footer,
    Herosection,
    About,
    Projects,
    Connect,
  },
};
</script>

<!-- gradient-to-r from-[#4aad76] to-[#379683] -->
