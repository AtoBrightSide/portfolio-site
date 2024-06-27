<template>
  <section class="h-fit container my-5 mx-auto space-y-11">

    <div class="flex justify-center text-5xl text-[#5B7355] font-bold">
      Previous <span class="text-[#9DBF84]">Work</span>
    </div>

    <div class="flex flex-col md:grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-3">
      <div v-for="project in projects" :key="project.title">
        <ProjectCard :title="project.title" :projectDesc="project.projectDesc" :projectImage="project.projectImage"
          :tech_stack="project.tech_stack" :info="project.info" />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";
export default {
  name: "Projects",
  components: { ProjectCard },
  data: () => {
    return {
      projects: [
        {
          title: "RateEat",
          projectDesc:
            "A platform that allows users to give and consume item specific reviews and show growth points of businesses.",
          projectImage: "/src/assets/RateEat.png",
          tech_stack: ["Next", "Typescript", "Express", "MongoDB"],
          info: {
            product: "Website",
            demo_link: "https://rateeat.app",
            github: false,
          },
        },
        {
          title: "GetzAuto",
          projectDesc:
            "A mobile friendly web application that allows users to look for cars according to their preference.",
          projectImage: "/src/assets/GetzAuto.png",
          tech_stack: ["React", "Typescript", "Express", "MongoDB"],
          info: {
            product: "Website",
            demo_link: "https://getzcarsell.com",
            github: false,
          },
        },
        {
          title: "The Joker",
          projectDesc:
            "Explore a variety of jokes by type, save your favorites, and get a daily laugh with our fun and easy-to-use joke app.",
          projectImage: "/src/assets/laptop-gf2aa9359c_1280.png",
          tech_stack: ["Flutter", "Dart",],
          info: {
            product: "Mobile",
            demo_link: "https://github.com/AtoBrightSide/flutter-jokes-app",
            github: true,
          },
        },
        {
          title: "Lyrics API",
          projectDesc: "The lyrics API allows music lovers to explore, upload, and like song lyrics, with full CRUD functionality and user registration ",
          projectImage: "/src/assets/laptop-gf2aa9359c_1280.png",
          tech_stack: ["Python", "Flask", "Postgres"],
          info: {
            product: "API",
            demo_link: "https://github.com/AtoBrightSide/lyrics-api",
            github: true,
          },
        },
        {
          title: "EveryoneShops",
          projectDesc: "EveryoneShops is a versatile e-commerce website template built with TypeScript and React. Designed to be a flexible solution, it can be adapted to suit the needs of any business looking to establish an online presence. Whether you're selling electronics, fashion, groceries, or anything else, EveryoneShops provides a solid foundation to get started quickly and efficiently.",
          projectImage: "/src/assets/EveryoneShops_1.png",
          tech_stack: ["Typescript", "React", "TailwindCSS"],
          info: {
            product: "Web App",
            demo_link: "https://everyoneshops.netlify.app",
            github: false,
          },
        },
      ],
    };
  },
};
</script>
