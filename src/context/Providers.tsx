'use client';

import { ThemeContext, MobileMenuContext } from "./Contexts";
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

export function MobileMenuProvider({ 
    children 
}:{
    children: React.ReactNode;
}) {
    const [ isOpened, setIsOpened ] = useState(false);

    return(
        <MobileMenuContext.Provider value={{ isOpened, setIsOpened }}>
            {children}
        </MobileMenuContext.Provider>
    )
}