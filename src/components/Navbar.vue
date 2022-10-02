<template>
  <nav class="md:flex md:justify-between bg-[#BFBBB4]">
    <div class="flex justify-between items-center p-8" onclick="">
      <span class="fas fa-code text-[#5C7356] text-5xl block animate__animated animate__rotateIn"
        aria-hidden="true"></span>
      <i @click="toggleMenu()" class="md:hidden text-2xl cursor-pointer"
        :class="[isOpen ? 'fas fa-times' : 'fas fa-bars']"></i>
    </div>
    <ul
      class="items-center p-2 bg-[#BFBBB4] text-lg text-white md:flex md:flex-row md:justify-between md:space-x-4 duration-300 ease-in"
      :class="[isOpen ? 'flex flex-col ' : 'hidden']">
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        Resume
      </li>
    </ul>
  </nav>
</template>

<script scoped>
import "animate.css"
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  },
};
</script>
<!-- <span class="fas fa-code text-[#5C7356] text-5xl block" aria-hidden="true"></span> -->