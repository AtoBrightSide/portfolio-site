import { FC } from "react"

export type ExperienceCardType = {
    logo: string,
    company_name: string,
    position: string,
}
export const ExperienceCard: FC<ExperienceCardType> = ({ logo, company_name, position }) => {
    return <div className="flex gap-5 items-center text-pine-tree-green dark:text-corn-silk/70">
        <img src={logo} alt={`${company_name}-logo`} width={40} className="text-xs" />
        <div className="flex flex-col sm:w-full sm:flex-row sm:justify-between">
            <p className="text-base font-medium">{company_name}</p>
            <p className="text-sm">{position}</p>
        </div>
    </div>
}