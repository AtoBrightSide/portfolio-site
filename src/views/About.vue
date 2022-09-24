<template>
  <div class="flex-col justify-center justify-items-center items-center space-y-5 text-white">
    <div
      class="text-2xl ml-5 uppercase mb-10 font-semibold md:ml-36 md:text-4xl"
    >
      Allow me to <span class="text-hotmag">introduce</span> myself
    </div>
    <div class="text-2xl ml-10">
      I fell in love with programming and I have at least learnt something, I
      think… 🤷‍♂️
    </div>
    <div class="text-2xl ml-10">
      I am fluent in
      <span class="text-hotmag italic">Python, JavaScript and Java</span>
    </div>
    <div class="text-2xl ml-10">
      My fields of interest lie in the development of applications using modern
      web technologies
    </div>
    <div class="flex justify-center">
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
