import { motion } from "motion/react"
import { useContext } from "react";
import { Moon, Sun } from "lucide-react"
import { ThemeContext } from "../context/ThemeContext";

export const IntroSection = () => {
    const { theme, setTheme } = useContext(ThemeContext);

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

        <div className="flex gap-x-5 mt-5">
            <motion.a initial={{ textDecoration: "none" }} whileHover={{ textDecoration: "underline" }} href="https://www.linkedin.com/in/abel-mesele" target="_blank" className="text-[#0077B5] dark:text-[#58A6FF]">LinkedIn</motion.a>
            <motion.a initial={{ textDecoration: "none" }} whileHover={{ textDecoration: "underline" }} href="https://github.com/AtoBrightSide" target="_blank" className="text-[#181717] dark:text-[#C9D1D9] ">GitHub</motion.a>
            <motion.a initial={{ textDecoration: "none" }} whileHover={{ textDecoration: "underline" }} href="https://leetcode.com/Ato_Brightside" target="_blank" className="text-[#A66300] dark:text-[#D78B00]">Leetcode</motion.a>
            <motion.a initial={{ textDecoration: "none" }} whileHover={{ textDecoration: "underline" }} href="https://www.upwork.com/freelancers/~01f02132fd9e14b66e?mp_source=share" target="_blank" className="text-[#14834F] dark:text-[#23A060]">Upwork</motion.a>
        </div>
    </motion.section>
}