<template>
  <footer class="flex justify-center text-[#5C7356] font-thin">
    <div class="flex-col">
      <p class="text-sm md:text-base">
        All rights reserved, and all that jazz &copy; {{ current_date }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => {
    return {
      current_date: new Date().getFullYear(),
    };
  },
};
</script>
