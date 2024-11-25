import { DotsHorizontalIcon, GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons"
import { useState } from "react"
import { useInView } from "react-intersection-observer";

export interface ProjectCardProps {
    title: string,
    projectDesc: string,
    projectImage: string,
    tech_stack: string[],
    product: string,
    demo_link: string,
    github: boolean,
}
export const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
    const [showMore, setShowMore] = useState(false);
    const { ref, inView } = useInView();
    return (
        <div ref={ref} className={`w-96 md:w-[500px] h-96 ${showMore ? 'h-fit' : ''} md:h-[600px] flex flex-col justify-between items-center md:mx-auto p-5 md:p-2 ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
            <img src={project.projectImage} alt="ecommerce_image" className="w-full" />
            <div className="text-center text-2xl">{project.title}</div>
            <div className="flex gap-2">
                <div className={`w-[90%] h-12 overflow-clip ${showMore ? 'h-fit' : 'overflow-hidden'}`}>{project.projectDesc}</div>
                <DotsHorizontalIcon className="w-5 h-5 hover:cursor-pointer hover:opacity-50" onClick={_ => setShowMore(!showMore)}></DotsHorizontalIcon>
            </div>
            <div className={`w-full h-10 ${showMore ? 'h-fit' : 'overflow-clip'} overflow-y-hidden flex flex-wrap text-start`}>
                <div className="font-semibold">Tech Stack: </div>
                {project.tech_stack.map((stack, index) =>
                    <div key={index}>{stack}, </div>
                )}
            </div>
            <div className="w-32 h-8 rounded-md bg-[#5B7355] text-white flex justify-center hover:opacity-80 hover:cursor-pointer transition-all duration-300">
                <div className="flex items-center justify-center gap-2">
                    {project.github ? (
                        <a href={project.demo_link} target="_blank" className="flex items-center justify-center gap-2">
                            <GitHubLogoIcon className="w-6 h-6"></GitHubLogoIcon>
                            <div className="text-sm">{project.product}</div>
                        </a>
                    ) : (
                        <a href={project.demo_link} target="_blank" className="flex items-center justify-center gap-2">
                            <Link1Icon className="w-6 h-6"></Link1Icon>
                            <div className="text-sm">{project.product}</div>
                        </a>
                    )}
                </div>

            </div>
        </div >
    )
}