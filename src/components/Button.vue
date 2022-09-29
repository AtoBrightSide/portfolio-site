<template>
  <div class="bg-hotmag rounded text-white px-2 flex items-center">
    <div class="mr-3">
      <i
        v-if="!info.github"
        class="fab fa-github fa-2x text-2xl md:text-3xl"
      ></i>
      <i v-else class="fa fa-link fa-2x text-xl md:text-xl"></i>
    </div>
    <div class="">{{ info.product }}</div>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["info"],
};
</script>
