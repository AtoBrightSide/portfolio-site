<template>
  <div id="about" class="flex flex-col justify-between items-center">
    <div class="text-2xl font-medium md:text-5xl md:font-bold">
      Allow me to <span class="text-[#9DBF84]">introduce</span> myself
    </div>
    <div class="flex flex-col justify-between items-center md:flex-row md:justify-around md:w-full">
      <div class="flex flex-col items-start p-4">
        <div v-for="item in info" key="item" class="text-sm p-2 md:text-lg">
          {{ item }}
        </div>
      </div>
      <img src="../assets/6170426_3054594.svg" alt="" class="object-contain h-72 w-72" />
    </div>
  </div>
</template>

<script lang="ts" scoped>

export default {
  name: "About",
  data() {
    return {
      info: [
        "A Software Engineer",
        "Proficient in Python, Javascript and Typescript",
        "Built projects in React, Vue, Next, Flask, Express, Django",
        "Enjoy reading books📖, watching movies🎬, and playing chess ♟!"
      ]
    }
  }
};
</script>

<!-- <img src="../assets/6170426_3054594.svg" alt="" class="object-contain h-72 w-72" /> -->