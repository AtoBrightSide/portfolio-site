import { motion } from "motion/react";
export const Contact = () => {
    return <motion.section layout className="max-w-[768px] mx-auto text-pine-tree-green dark:text-corn-silk/70">
        <h1 className="font-display mt-10 mb-3">Contact</h1>
        <form action="https://getform.io/f/ayvyxveb" method="POST" className="flex flex-wrap gap-5 sm:gap-10 ">
            <section className="w-full sm:w-2/5 sm:max-w-1/2 flex flex-col gap-1">
                <label htmlFor="name" className="text-sm">Name</label>
                <input type="text" placeholder="Your Name" required className="bg-warm-gold/30 dark:bg-woodland-green p-1 rounded-sm focus:outline-pine-tree-green dark:focus:outline-corn-silk" />
            </section>

            <section className="w-full sm:w-2/5 sm:max-w-1/2 flex flex-col gap-1">
                <label htmlFor="email" className="text-sm">Email</label>
                <input type="email" name="email" placeholder="Your email" required className="bg-warm-gold/30 dark:bg-woodland-green p-1 rounded-sm focus:outline-pine-tree-green dark:focus:outline-corn-silk" />
            </section>

            <section className="w-full sm:w-full flex flex-col gap-1">
                <label htmlFor="message">What do you want to talk about?</label>
                <textarea name="message" required className="bg-warm-gold/30 dark:bg-woodland-green p-1 rounded-sm focus:outline-pine-tree-green dark:focus:outline-corn-silk" placeholder="Your message"></textarea>
            </section>

            <div className="w-full flex justify-center">
                <motion.button whileHover={{ scale: 1.01, opacity: 0.8 }} className="py-2 px-4 rounded mx-auto bg-woodland-green text-corn-silk">Send message</motion.button>
            </div>
        </form>
    </motion.section>
}