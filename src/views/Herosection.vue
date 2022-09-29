<template>
  <div>
    <div
      class="flex flex-col items-center justify-start space-y-0 mx-auto mt-10 font-body md:p-20 md:space-x-20 md:flex-row md:space-y-0"
    >
      <div class="relative h-36 w-36 md:h-96 md:w-96">
        <!-- <div
        class="rounded-full absolute bg-gradient-to-r from-hotmag to-veryLightGray animate-spin shadow inset-0 -m-1.5"
      ></div> -->
        <img
          src="../assets/photo_2022-07-17_20-35-23-modified.png"
          alt="its_me"
          class="h-full w-full object-contain rounded-full relative border-1"
        />
      </div>
      <div
        class="w-full flex flex-col items-center content-center md:flex md:flex-row md:justify-between"
      >
        <div class="w-fit flex-col p-5 md:p-0">
          <div class="text-white/80 font-thin">
            Hi, the name is
            <div
              class="text-4xl font-semibold text-hotmag md:font-thin md:text-6xl"
            >
              Abel Mesele
            </div>
          </div>
          <div
            class="flex text-4xl text-white/80 font-semibold md:font-thin md:text-6xl"
          >
            <Type />
          </div>
        </div>
      </div>
    </div>
    <About />
  </div>
</template>

<script scoped>
import Type from "../components/Type.vue";
import About from "./About.vue";
export default {
  name: "Herosection",
  components: { Type, About },
};
</script>
