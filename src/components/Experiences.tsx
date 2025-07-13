import { ExperienceCard, ExperienceCardType } from "./ExperienceCard"

const ALL_XPS: ExperienceCardType[] = [
    {
        logo: "/New A2SV Logo (With Text) (1).svg",
        company_name: "A2SV - Africa To Silicon Valley",
        position: "Software Engineer",
        link: "https://a2sv.org/",
    },
    {
        logo: "/upwork-svgrepo-com.svg",
        company_name: "Upwork",
        position: "Full stack developer",
        link: "https://www.upwork.com/freelancers/~01f02132fd9e14b66e",
    },
    {
        logo: "",
        company_name: "EPHI | National Data Management Center",
        position: "Software Engineering Intern",
        link: "https://a2sv.org/",
    }
]
export const Experiences = () => {
    return <section className='max-w-[768px] mx-auto flex flex-col gap-5 dark:text-corn-silk/70'>
        <h1 className="font-display">Experience</h1>
        {ALL_XPS.map((xp, index) =>
            <ExperienceCard
                key={index}
                logo={xp.logo}
                company_name={xp.company_name}
                position={xp.position}
                link={xp.link}
            />)}
    </section>
}