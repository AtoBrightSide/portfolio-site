<template>
  <div
    class="flex flex-col rounded-md p-4 drop-shadow-xl"
  >
    <img
      class="w-full h-1/3 object-contain"
      src="../assets/laptop-gf2aa9359c_1280.png"
      alt="project_image"
    />
    <div class="text-2xl text-white text-center my-5">
      {{ title }}
    </div>
    <p class="text-slate-50/80">
      {{ projectDesc }}
    </p>
    <div class="flex text-white">
      <div class="font-bold">Technologies Used:</div>
      <div v-for="tech in tech_stack" :key="tech" class="flex">
        <p class="mx-1">{{ tech }},</p>
      </div>
    </div>
    <div class="flex w-full justify-center gap-2 mt-3">
      <a :href="info.demo_link">
        <Button :info="info"/>
      </a>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "ProjectCard",
  props: ["title", "projectImage", "projectDesc", "tech_stack", "info"],
  components: { Button },
};
</script>
