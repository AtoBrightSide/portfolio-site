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
          projectImage: "../assets/photo_2022-07-17_20-35-23-modified.png",
          tech_stack: ["Next", "Typescript", "Express", "MongoDB"],
          info: {
            product: "Website",
            demo_link: "https://rateeat.app",
            github: false,
          },
        },
        {
          title: "getz Cars",
          projectDesc:
            "A mobile friendly web application that allows users to look for cars according to their preference.",
          projectImage: "Something",
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
          projectImage: "Something",
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
          projectImage: "Something",
          tech_stack: ["Python", "Flask", "Postgres"],
          info: {
            product: "Web App",
            demo_link: "https://github.com/AtoBrightSide/lyrics-api",
            github: true,
          },
        },
      ],
    };
  },
};
</script>
