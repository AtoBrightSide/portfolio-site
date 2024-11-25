import { MixIcon, ReaderIcon, RocketIcon } from "@radix-ui/react-icons";

export const Navbar = () => {
    return (
        <nav className="bg-[#D9D8D7] flex flex-col md:flex-row md:justify-between md:sticky md:top-0 md:z-10">
            <div className="text-8xl font-bold text-center mb-5">{'</>'}</div>
            <div className="w-full md:w-1/2 flex md:flex-row justify-around md:items-center">
                <a href="#introduction" className="flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
                    <RocketIcon className='w-7 h-7'></RocketIcon>
                    <div className="text-sm">About</div>
                </a>
                <a href="#projects" className="flex flex-col items-center hover:opacity-70 hover:cursor-pointer hover:animate__animated hover:animate__fadeIn">
                    <MixIcon className='w-7 h-7'></MixIcon>
                    <div className="text-sm">Projects</div>
                </a>
                <a href="https://docs.google.com/document/d/1B2lo_Q2c3jFH3Y4F5X13gHGRFADub1wEtfgeZMF-JK0/edit?usp=sharing" target="_blank" className="flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
                    <ReaderIcon className='w-7 h-7'></ReaderIcon>
                    <div className="text-sm">Resume</div>
                </a>
            </div>
        </nav>
    );
}