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
            inProgress: false,
        },
        {
            title: "GetzAuto",
            projectDesc: "A mobile friendly web application that allows users to look for cars according to their preference.",
            projectImage: "/GetzAuto.png",
            tech_stack: ["React", "Typescript", "Tailwind", "Express", "MongoDB"],
            product: "Web App",
            demo_link: "https://www.getzcarsell.com/",
            github: false,
            inProgress: false,
        },
        {
            title: "Atlas",
            projectDesc: "A full-featured car marketplace web app where users can effortlessly buy, sell, or rent vehicles.",
            projectImage: "/atlas-welcome.png",
            tech_stack: ["React", "Typescript", "Tailwind", "Express", "Supabase"],
            product: "Web App",
            demo_link: "https://atlas-web-livid.vercel.app/",
            github: false,
            inProgress: true,
        },
        {
            title: "The Joker",
            projectDesc: "Explore a variety of jokes by type, save your favorites, and get a daily laugh with our fun and easy-to-use joke app.",
            projectImage: "/laptop-gf2aa9359c_1280.png",
            tech_stack: ["Flutter", "Dart",],
            product: "GitHub",
            demo_link: "https://github.com/AtoBrightSide/flutter-jokes-app",
            github: true,
            inProgress: false,
        },
        {
            title: "Lyrics API",
            projectDesc: "The lyrics API allows music lovers to explore, upload, and like song lyrics, with full CRUD functionality and user registration ",
            projectImage: "/laptop-gf2aa9359c_1280.png",
            tech_stack: ["Python", "Flask", "Postgres"],
            product: "GitHub",
            demo_link: "https://github.com/AtoBrightSide/lyrics-api",
            github: true,
            inProgress: false,
        },
        {
            title: "EveryoneShops",
            projectDesc: "EveryoneShops is a versatile e-commerce website template built with TypeScript and React. Designed to be a flexible solution, it can be adapted to suit the needs of any business looking to establish an online presence. Whether you're selling electronics, fashion, groceries, or anything else, EveryoneShops provides a solid foundation to get started quickly and efficiently.",
            projectImage: "/EveryoneShops_1.png",
            tech_stack: ["Typescript", "React", "Tailwind"],
            product: "Web App",
            demo_link: "https://everyoneshops.netlify.app",
            github: false,
            inProgress: false,
        },
    ];
    return (
        <div id="projects" className="w-full flex flex-col md:flex md:flex-row md:flex-wrap items-center mt-10 md:px-10 gap-y-5 font-secondary">
            <div className="text-3xl md:text-6xl w-full text-center font-title">Previous Work</div>
            {PROJECTS.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
    );
}