import { GitHubLogoIcon, LinkedInLogoIcon, PaperPlaneIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
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
            link: "https://github.com/AtoBrightSide/",
            icon: GitHubLogoIcon,
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
        <div ref={ref} className={`w-full h-min flex flex-col items-center my-20 gap-y-5 ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
            <div className="text-3xl font-semibold uppercase">Do Reach Out</div>
            <div className="w-4/6 md:w-1/2 flex justify-between md:justify-evenly">
                {LINKS.map((link, index) => <>
                    <a href={link.link} target="_blank" className=""><link.icon key={index} className="w-10 h-10 hover:opacity-70 hover:cursor-pointer"></link.icon></a>
                </>)}
            </div>
        </div>
    );
}