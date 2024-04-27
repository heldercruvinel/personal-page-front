'use client';

import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext({ 
    theme: 'light', 
    setTheme: (theme: string) => {} 
});

export function ThemeProvider({ 
    children 
}:{
    children: React.ReactNode;
}) {
    const [ theme, setTheme ] = useState('light');

    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    return useContext(ThemeContext);
}