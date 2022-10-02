<template>
  <div
    class="flex flex-col items-center justify-start mx-auto font-body p-4 md:p-20 md:space-x-20 md:flex md:flex-row md:justify-center">
    <div class="relative h-36 w-36 md:h-96 md:w-96">
      <img src="../assets/photo_2022-07-17_20-35-23-modified.png" alt="its_me"
        class="h-full w-full object-contain rounded-full relative border-1" />
    </div>
    <div class="w-full flex flex-col items-center content-center md:flex md:flex-row md:justify-between md:mt-12">
      <div class="w-fit flex-col p-5 md:p-0">
        <div class="text-[#5C7356] font-thin md:text-lg">
          Hi, the name is
          <div class="text-4xl font-semibold text-[#5C7356] md:font-thin md:text-6xl">
            Abel Mesele
          </div>
        </div>
        <div class="flex text-4xl w-full font-semibold md:font-thin md:text-6xl">
          <Type />
        </div>
      </div>
    </div>
  </div>

</template>

<script scoped>
import Type from "../components/Type.vue";
export default {
  name: "Herosection",
  components: { Type },
};
</script>
