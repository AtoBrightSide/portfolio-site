import { createContext, FC, ReactNode, useState } from "react";

type ThemeContextType = {
    theme: "light" | "dark",
    setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>,
}
export const ThemeContext = createContext<ThemeContextType>({ theme: "light", setTheme: () => { } });

export const ThemeContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark">('light');
    const ctx = {
        theme,
        setTheme
    }
    return <ThemeContext.Provider value={ctx}>
        {children}
    </ThemeContext.Provider>
}