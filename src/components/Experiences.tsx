import { ExperienceCard, ExperienceCardType } from "./ExperienceCard"

const ALL_XPS: ExperienceCardType[] = [
    {
        logo: "/New A2SV Logo (With Text) (1).svg",
        company_name: "A2SV - Africa To Silicon Valley",
        position: "Software Engineer"
    },
    {
        logo: "/upwork-svgrepo-com.svg",
        company_name: "Upwork",
        position: "Full stack developer",
    },
    {
        logo: "",
        company_name: "EPHI",
        position: "Software Engineering Intern"
    }
]
export const Experiences = () => {
    return <section className='max-w-[768px] mx-auto flex flex-col gap-5'>
        {ALL_XPS.map((xp, index) =>
            <ExperienceCard
                key={index}
                logo={xp.logo}
                company_name={xp.company_name}
                position={xp.position}
            />)}
    </section>
}