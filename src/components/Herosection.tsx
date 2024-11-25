import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact, FaSass, FaUnity, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiFlask, SiTypescript, SiPostgresql, SiRedux, SiIntellijidea, SiPycharm, SiSpringboot, SiVuetify } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import { Introduction } from "./Introduction";

export const Herosection = () => {
    const { ref, inView } = useInView();
    const [textIndex, setTextIndex] = useState<number>(0);
    const SKILLS = [
        <span className="w-56 animate__animated animate__fadeInDown">PWAs</span>,
        <span className="w-56 animate__animated animate__fadeInUp">android apps</span>,
        <span className="w-56 animate__animated animate__fadeInDown">RESTful APIs</span>,
        <span className="w-56 animate__animated animate__fadeInUp">anything you want!!!</span>,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex(prevIndex => (prevIndex + 1) % SKILLS.length)
        }, 3000);
        return () => clearInterval(interval)
    }, [SKILLS.length])

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

    return (
        <div className={`flex flex-col items-center`}>
            <div ref={ref} className={`w-full flex flex-col md:flex-row items-center md:p-20 gap-x-16 ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
                <img src="/photo_2022-07-17_20-35-23-modified.png" alt="portrait" className="w-44 md:w-80 h-44 md:h-80 my-10" />
                <div className="flex flex-col items-center md:items-start md:gap-y-2">
                    <div className="animate__animated animate__fadeInDown">Hi, the name is <br /> <span className="text-start text-4xl font-semibold md:text-6xl">Abel Mesele</span> </div>
                    <div className="text-2xl ml-24 md:m-0 flex gap-x-1">
                        <div className="">I build </div>
                        {SKILLS[textIndex]}
                    </div>
                </div>
            </div>

            {/* <div className="hidden md:flex w-96 h-96 absolute bg-red-100 right-32 top-72"></div> */}

            <div className="h-min w-4/5 my-10 md:mt-0 md:w-2/5 lg:w-1/4 flex flex-wrap justify-center gap-x-2 gap-y-5 p-5">
                {ICONS.map((Icon, index) => (
                    <Icon key={index} className={`w-10 h-10 md:w-12 md:h-12 p-0 opacity-50 hover:opacity-90 transition-all duration-400`}></Icon>
                ))}
            </div>

            <Introduction />
        </div>
    );
}