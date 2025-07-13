import { SquareArrowUpRight } from "lucide-react"
import { FC } from "react"
import { motion } from "motion/react"

export type ExperienceCardType = {
    logo: string,
    company_name: string,
    position: string,
    link: string,
}
export const ExperienceCard: FC<ExperienceCardType> = ({ logo, company_name, position, link }) => {
    return <div className="flex gap-5 items-center text-pine-tree-green dark:text-corn-silk/70">
        <img src={logo} alt={`${company_name}-logo`} width={40} className="text-xs max-w-12 truncate" />
        <div className="flex flex-col sm:w-full sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center gap-2">
                <p className="text-base font-medium">{company_name}</p>
                <motion.a initial={{scale: 1}} whileHover={{scale: 1.3}} className="cursor-auto" href={link} target="_blank" aria-label={`Visit ${company_name} website`}><SquareArrowUpRight size={15} /></motion.a>
            </div>
            <p className="text-sm">{position}</p>
        </div>
    </div>
}