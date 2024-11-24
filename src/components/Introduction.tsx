import { useInView } from "react-intersection-observer"

export const Introduction = () => {
    const {ref, inView} = useInView();
    return <div id="introduction">
        <div ref={ref} className={`w-full flex flex-col md:flex-row md:justify-around items-start p-10 gap-y-2 ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
            <div className="flex flex-col gap-y-2 md:items-start">
                <div className="text-3xl md:text-5xl font-bold md:font-semibold text-center mt-5 md:mb-5">Allow me to introduce myself</div>
                <div className="">A Software Engineer</div>
                <div className="">Proficient in Python, JavaScript and TypeScript</div>
                <div className="">Built projects in React, Next, Express, Flask</div>
                <div className="">Enjoy reading books, watching movies, and sacrificing pieces in chess!</div>
            </div>
            <img src="/6170426_3054594.svg" alt="portrait" className="w-56 h-56 md:w-96 md:h-96 self-center" />
        </div>
    </div>
}