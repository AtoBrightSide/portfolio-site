import { motion } from "motion/react";

import { ProjectCard, ProjectCardProps } from "./ProjectCard";

const PROJECTS: ProjectCardProps[] = [
    {
        title: "RateEat",
        projectDesc: "A platform that allows users to give and consume item specific reviews and show growth points of businesses.",
        projectImages: ["/RateEat.png", "/rateeat.app_en (1).png", "/rateeat.app_en (2).png"],
        tech_stack: ["Next", "Typescript", "Express", "MongoDB", "Tailwind"],
        product: "Visit Website",
        demo_link: "https://rateeat.app",
        github: false,
        inProgress: false,
    },
    {
        title: "GetzAuto",
        projectDesc: "A mobile friendly web application that allows users to look for cars according to their preference.",
        projectImages: ["/GetzAuto.png", "/getzauto.netlify.app_.png", "/getzauto.netlify.app_ (1).png"],
        tech_stack: ["React", "Typescript", "Tailwind", "Express", "MongoDB"],
        product: "Visit Website",
        demo_link: "https://www.getzcarsell.com/",
        github: false,
        inProgress: false,
    },
    {
        title: "Atlas",
        projectDesc: "A full-featured car marketplace web app where users can effortlessly buy, sell, or rent vehicles.",
        projectImages: ["/atlas-welcome.png", "/atlas-cars-listings-desktop.png", "/atlas-cars-mobile.png"],
        tech_stack: ["React", "Typescript", "Tailwind", "Express", "Supabase"],
        product: "Visit Website",
        demo_link: "https://atlas-web-livid.vercel.app/",
        github: false,
        inProgress: true,
    },
    {
        title: "The Joker",
        projectDesc: "Explore a variety of jokes by type, save your favorites, and get a daily laugh with our fun and easy-to-use joke app.",
        projectImages: ["/laptop-gf2aa9359c_1280.png"],
        tech_stack: ["Flutter", "Dart",],
        product: "Visit GitHub",
        demo_link: "https://github.com/AtoBrightSide/flutter-jokes-app",
        github: true,
        inProgress: false,
    },
    {
        title: "Lyrics API",
        projectDesc: "The lyrics API allows music lovers to explore, upload, and like song lyrics, with full CRUD functionality and user registration ",
        projectImages: ["/laptop-gf2aa9359c_1280.png"],
        tech_stack: ["Python", "Flask", "Postgres"],
        product: "Visit GitHub",
        demo_link: "https://github.com/AtoBrightSide/lyrics-api",
        github: true,
        inProgress: false,
    },
    {
        title: "Custom Quiz Creator",
        projectDesc: "A React-based quiz builder that lets users design, validate, and save fully custom quizzes with dynamic question and answer management.",
        projectImages: [
            "/your-fun-quiz.netlify.app_ (2).png",
            "/your-fun-quiz.netlify.app_ (3).png",
            "/your-fun-quiz.netlify.app_.png"
        ],
        tech_stack: [
            "React",
            "React Router",
            "React Hook Form",
            "Tailwind CSS",
            "UUID"
        ],
        product: "Live Demo",
        demo_link: "https://your-fun-quiz.netlify.app/",
        github: true,
        inProgress: false
    },
    // {
    //     title: "EveryoneShops",
    //     projectDesc: "EveryoneShops is a versatile e-commerce website template built with TypeScript and React. Designed to be a flexible solution, it can be adapted to suit the needs of any business looking to establish an online presence. Whether you're selling electronics, fashion, groceries, or anything else, EveryoneShops provides a solid foundation to get started quickly and efficiently.",
    //     projectImages: ["/EveryoneShops_1.png"],
    //     tech_stack: ["Typescript", "React", "Tailwind"],
    //     product: "Visit Website",
    //     demo_link: "https://everyoneshops.netlify.app",
    //     github: false,
    //     inProgress: false,
    // },
];
export const Projects = () => {
    return (
        <motion.section layout id="projects" className="max-w-[768px] mx-auto gap-y-5 flex flex-col items-center font-secondary">
            {PROJECTS.map((project, index) => <ProjectCard key={index} project={project} />)}
        </motion.section>
    );
}