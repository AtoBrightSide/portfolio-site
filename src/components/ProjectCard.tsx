import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons"
import { ChevronDown, SquareArrowUpRight } from "lucide-react";
import { useState } from "react"
import { motion } from 'motion/react';

import { useInView } from "react-intersection-observer";
import { useIsMobile } from "../hooks/use-mobile";

export interface ProjectCardProps {
    title: string,
    projectDesc: string,
    projectImages: string[],
    tech_stack: string[],
    product: string,
    demo_link: string,
    github: boolean,
    inProgress: boolean,
}
export const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
    const [showMore, setShowMore] = useState(false);
    const isMobile = useIsMobile();
    const { ref, inView } = useInView();

    const Icon = ({ ...props }) => {
        return <motion.div {...props}
            className={`absolute top-2 right-0 block cursor-pointer hover:opacity-80`}
            initial={{ rotate: showMore ? '0deg' : '180deg' }}
            animate={{ rotate: showMore ? '180deg' : '0deg' }}
        >
            <ChevronDown />
        </motion.div>;
    }

    return (
        <div ref={ref} className={`relative max-w-full h-24 ${showMore && 'h-fit'} text-pine-tree-green dark:text-corn-silk/70 flex flex-col items-start md:mx-auto ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
            <div className="flex items-center gap-2 font-display font-medium text-start text-2xl">
                {project.title}
                {!isMobile && <a href={project.demo_link} target="_blank"><SquareArrowUpRight size={15} className="text-pine-tree-green/60 dark:text-corn-silk/70" /></a>}
            </div>

            <div className={`max-h-12 ${showMore && 'max-h-full'} truncate text-wrap overflow-hidden md:text-lg`}>{project.projectDesc}</div>

            <Icon onClick={() => setShowMore(prevShowMore => !prevShowMore)} />

            {showMore && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-y-2">
                <div className={`w-full flex flex-wrap text-start gap-1`}>
                    {project.tech_stack.map((stack, index) =>
                        <div key={index} className="py-1 px-2 text-sm bg-porshe-brown dark:bg-woodland-green rounded-br-lg rounded-tl-lg">{stack}</div>
                    )}
                </div>

                <div className="relative flex">
                    <img src={project.projectImages[0]} alt="ecommerce_image" className="w-full max-w-[425px] object-cover object-left" />
                    <div className="hidden min-[425px]:flex flex-col">
                        {project.projectImages.map((img, idx) => idx > 0 &&
                            <img src={img} key={idx} className="max-h-[250px] object-cover object-top" />
                        )}
                    </div>


                    {project.inProgress &&
                        <div className="w-auto h-min absolute p-1 rounded left-1 bottom-1 text-white bg-[hsl(108,15%,50%)] text-sm">
                            In progress
                        </div>
                    }
                </div>

                {isMobile && <div className="w-full h-8 min-h-8 mt-auto rounded-md bg-woodland-green text-corn-silk flex justify-center hover:opacity-80 hover:cursor-pointer transition-all duration-300">
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
                </div>}
            </motion.div>}
        </div >
    )
}