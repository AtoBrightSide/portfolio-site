<template>
  <nav class="w-full p-6">
    <div class="flex justify-center md:justify-between">
      <div class="pt-1 order-first">
        <router-link to="/">
          <span
          class="fas fa-code text-hotmag text-5xl"
          aria-hidden="true"
        ></span>
        </router-link>
      </div>
      <div class="hidden md:flex md:order-last md:space-x-5 p-4">
        <router-link to="/projects" class="hover:text-hotmag text-white/80 font-thin"
          >Projects</router-link
        >
        <a
          href="https://drive.google.com/file/d/15QQvEtDFnSQQfPNI_jkx9VAhqjC8SNEp/view?usp=sharing"
          target="_blank"
          class="hover:text-hotmag text-white/80 font-thin"
          >Resume</a
        >
      </div>
    </div>
  </nav>
</template>

<script scoped>
export default {
  name: "Navbar",
};
</script>
