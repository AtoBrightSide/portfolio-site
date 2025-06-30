export const Footer = () => {
    return (
        <footer className="w-full h-24 py-2 text-white bg-[#5B7355] text-sm flex flex-col items-center justify-end font-display">
            <div className="">&copy; {new Date().getFullYear()}</div>
            <div className="">All rights reserved, and all that jazz</div>
        </footer>
    );
}