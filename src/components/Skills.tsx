import { FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact, FaSass, FaUnity, FaVuejs } from "react-icons/fa";
import { SiFlask, SiTypescript, SiPostgresql, SiRedux, SiIntellijidea, SiPycharm, SiSpringboot, SiVuetify } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { IconType } from "react-icons";

const ICONS: IconType[] = [
    FaCss3Alt,
    FaReact,
    FaHtml5,
    IoLogoJavascript,
    FaPython,
    SiFlask,
    FaNodeJs,
    FaJava,
    SiSpringboot,
    SiTypescript,
    SiPostgresql,
    DiMongodb,
    AiOutlineDotNet,
    RiTailwindCssFill,
    RiNextjsFill,
    FaVuejs,
    SiVuetify,
    SiRedux,
    FaSass,
    FaUnity,
    VscVscode,
    SiPycharm,
    SiIntellijidea,
]

export const Skills = () => {
    const duplicatedIcons = [...ICONS, ...ICONS];

    return <section className="max-w-[768px] mx-auto dark:text-corn-silk">
        <h1 className="font-display dark:text-corn-silk/70">Skills</h1>
        <div
            className="h-min my-10 md:mt-0 border-r border-l rounded-tl-md rounded-br-md overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] flex gap-x-2 gap-y-5 px-2 py-3">
            <div className="flex gap-1 animate-marquee hover:[animation-play-state:paused] mask-l-from-30%">
                {duplicatedIcons.map((Icon, index) => (
                    <Icon key={index} className={`w-10 h-10 md:w-12 md:h-12 p-0 opacity-50 hover:opacity-90 transition-all duration-400}`}></Icon>
                ))}
            </div>
        </div>
    </section>
}
