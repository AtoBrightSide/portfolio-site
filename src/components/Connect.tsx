import { LinkedInLogoIcon, PaperPlaneIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { useInView } from "react-intersection-observer";

type LinkType = {
    link: string,
    icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
}

export const Connect = () => {
    const { ref, inView } = useInView();
    const LINKS: LinkType[] = [
        {
            link: "https://www.linkedin.com/in/abel-mesele/",
            icon: LinkedInLogoIcon,
        },
        {
            link: "https://twitter.com/abelmesele1",
            icon: TwitterLogoIcon,
        },
        {
            link: "https://t.me/Ato_BrightSide",
            icon: PaperPlaneIcon,
        }
    ]
    return (
        <section ref={ref} className={`max-w-[768px] mx-auto h-min flex flex-col items-center my-5 gap-y-5 text-pine-tree-green dark:text-corn-silk/70 ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
            <div className="text-3xl font-medium font-display">Or reach out</div>
            <div className="w-4/6 md:w-1/2 flex justify-between md:justify-evenly">
                {LINKS.map((link, index) => <>
                    <a href={link.link} target="_blank" className=""><link.icon key={index} className="w-10 h-10 hover:opacity-70 hover:cursor-pointer"></link.icon></a>
                </>)}
            </div>
        </section>
    );
}