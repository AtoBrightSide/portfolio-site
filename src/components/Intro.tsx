import { motion } from "motion/react"
import { useContext } from "react";
import { Moon, Sun } from "lucide-react"
import { ThemeContext } from "../context/ThemeContext";

export const IntroSection = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const LINKS = [
        {
            href: "https://www.linkedin.com/in/abel-mesele",
            label: "LinkedIn",
            color: "#0077B5",
            darkColor: "#58A6FF",
        },
        {
            href: "https://github.com/AtoBrightSide",
            label: "GitHub",
            color: "#181717",
            darkColor: "#C9D1D9",
        },
        {
            href: "https://leetcode.com/Ato_Brightside",
            label: "Leetcode",
            color: "#A66300",
            darkColor: "#D78B00",
        },
        {
            href: "https://www.upwork.com/freelancers/~01f02132fd9e14b66e?mp_source=share",
            label: "Upwork",
            color: "#14834F",
            darkColor: "#23A060",
        }
    ]

    const Icon = ({ ...props }) => {
        return theme === "light" ?
            <motion.div
                initial={{ opacity: 0, rotate: '-45deg' }}
                animate={{ opacity: 1, rotate: '0deg' }}
                exit={{ opacity: 0 }}
                {...props}
            >
                <Moon />
            </motion.div> :
            <motion.div
                initial={{ opacity: 0, rotate: '-45deg' }}
                animate={{ opacity: 1, rotate: '0deg' }}
                exit={{ opacity: 0 }}
                {...props}
            >
                <Sun />
            </motion.div>
    }

    return <motion.section layout className="relative max-w-[768px] text-woodland-green dark:text-corn-silk font-secondary mx-auto">
        <p className="text-sm dark:text-corn-silk/70">Hi, the name is</p>
        <h1 className="text-3xl font-display font-bold">Abel Mesele</h1>

        <Icon className="absolute top-5 right-0 cursor-pointer" onClick={() => setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")} />

        <div key={"link-container"} className="flex gap-x-5 mt-5">
            {LINKS.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    className={`text-[${link.color}] dark:text-[${link.darkColor}] hover:text-corn-silk dark:hover:text-deep-teal hover:z-[1]
                    relative after:content-[''] 
                    after:absolute after:left-[-0.2em] after:right-[-0.2em]
                    after:bottom-0 after:h-[1px]
                    after:bg-[${link.color}]
                    dark:after:bg-[${link.darkColor}]
                    after:origin-bottom
                    after:transition-transform after:duration-[125ms] after:ease-in-out
                    hover:after:transform hover:after:scale-y-[20]
                    focus:after:transform focus:after:scale-y-[20   ]
                    hover:after:z-[-1] focus:after:z-[-1]`}
                >
                    {link.label}
                </a>
            ))}
        </div>
    </motion.section>
}