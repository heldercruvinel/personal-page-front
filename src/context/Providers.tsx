'use client';

import { ThemeContext } from "./Contexts";
import { useState } from "react";

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