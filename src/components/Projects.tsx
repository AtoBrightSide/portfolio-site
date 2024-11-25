import { ProjectCard, ProjectCardProps } from "./ProjectCard";

export const Projects = () => {
    const PROJECTS: ProjectCardProps[] = [
        {
            title: "RateEat",
            projectDesc: "A platform that allows users to give and consume item specific reviews and show growth points of businesses.",
            projectImage: "/RateEat.png",
            tech_stack: ["Next", "Typescript", "Express", "MongoDB", "Tailwind"],
            product: "Web App",
            demo_link: "https://rateeat.app",
            github: false,
        },
        {
            title: "GetzAuto",
            projectDesc: "A mobile friendly web application that allows users to look for cars according to their preference.",
            projectImage: "/GetzAuto.png",
            tech_stack: ["React", "Typescript", "Tailwind", "Express", "MongoDB"],
            product: "Web App",
            demo_link: "https://getzauto.netlify.app/",
            github: false,
        },
        {
            title: "The Joker",
            projectDesc: "Explore a variety of jokes by type, save your favorites, and get a daily laugh with our fun and easy-to-use joke app.",
            projectImage: "/laptop-gf2aa9359c_1280.png",
            tech_stack: ["Flutter", "Dart",],
            product: "GitHub",
            demo_link: "https://github.com/AtoBrightSide/flutter-jokes-app",
            github: true,
        },
        {
            title: "Lyrics API",
            projectDesc: "The lyrics API allows music lovers to explore, upload, and like song lyrics, with full CRUD functionality and user registration ",
            projectImage: "/laptop-gf2aa9359c_1280.png",
            tech_stack: ["Python", "Flask", "Postgres"],
            product: "GitHub",
            demo_link: "https://github.com/AtoBrightSide/lyrics-api",
            github: true,
        },
        {
            title: "EveryoneShops",
            projectDesc: "EveryoneShops is a versatile e-commerce website template built with TypeScript and React. Designed to be a flexible solution, it can be adapted to suit the needs of any business looking to establish an online presence. Whether you're selling electronics, fashion, groceries, or anything else, EveryoneShops provides a solid foundation to get started quickly and efficiently.",
            projectImage: "/EveryoneShops_1.png",
            tech_stack: ["Typescript", "React", "Tailwind"],
            product: "Web App",
            demo_link: "https://everyoneshops.netlify.app",
            github: false,
        },
    ];
    return (
        <div id="projects" className="w-full flex flex-col md:flex md:flex-row md:flex-wrap items-center mt-10 md:px-10 gap-y-5">
            <div className="text-3xl md:text-6xl w-full text-center">Previous<span className="font-bold">Work</span></div>
            {PROJECTS.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
    );
}