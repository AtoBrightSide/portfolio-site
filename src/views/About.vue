<template>
  <div id="about" class="flex flex-col justify-between">
    <div class="flex-col md:flex md:flex-row md:justify-between">
      <div
        class="flex-col justify-center justify-items-center items-center space-y-5 text-white"
      >
        <div
          class="text-2xl ml-5 uppercase mb-10 font-semibold md:ml-36 md:text-4xl"
        >
          Allow me to <span class="text-hotmag">introduce</span> myself
        </div>
        <div class="text-2xl ml-10">
          I enjoy working on challenging problems to come up with efficient solutions 
        </div>
        <div class="text-2xl ml-10">
          I am fluent in
          <span class="text-hotmag italic">Python, JavaScript and Java</span>
        </div>
        <div class="text-2xl ml-10">
          My fields of interest lie in the development of applications using
          modern web technologies
        </div>
      </div>
      <div class="flex justify-center">
        <img
          src="../assets/home-main.541f8179af8209ce03ccf2178fe62dbf.svg"
          alt=""
          class="object-contain h-96 w-96"
        />
      </div>
    </div>
    <div class="w-full text-white flex justify-center">
      <Connect />
    </div>
  </div>
</template>

<script lang="ts" scoped>
import Connect from "../components/Connect.vue";
export default {
  name: "About",
  components: { Connect },
};
</script>
