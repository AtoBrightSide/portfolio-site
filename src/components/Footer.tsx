export const Footer = () => {
    return (
        <footer className="max-w-[768px] mx-auto h-24 py-2 dark:text-corn-silk/70 dark:bg-pine-tree-green text-sm flex flex-col items-center justify-end font-display">
            <div className="">&copy; {new Date().getFullYear()}</div>
            <div className="">All rights reserved, and all that jazz</div>
        </footer>
    );
}