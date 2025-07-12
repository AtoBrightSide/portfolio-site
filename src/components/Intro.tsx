import { Moon, Sun } from "lucide-react"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const IntroSection = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const Icon = ({ ...props }) => {
        return theme === "light" ?
            <Sun {...props} /> :
            <Moon {...props} />
    }

    return <section className="relative max-w-[768px] text-woodland-green font-secondary mx-auto">
        <p className="text-sm">Hello, my name is</p>
        <h1 className="text-3xl font-display font-bold">Abel Mesele</h1>

        <Icon className="absolute top-5 right-5" onClick={() => setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")} />

        <div className="flex gap-x-5 mt-5">
            <a href="https://www.linkedin.com/in/abel-mesele" target="_blank" className="text-[#0077B5]">LinkedIn</a>
            <a href="https://github.com/AtoBrightSide" target="_blank" className="text-[#181717]">GitHub</a>
            <a href="https://leetcode.com/Ato_Brightside" target="_blank" className="text-[#A66300]">Leetcode</a>
            <a href="https://www.upwork.com/freelancers/~01f02132fd9e14b66e?mp_source=share" target="_blank" className="text-[#14834F]">Upwork</a>
        </div>
    </section>
}