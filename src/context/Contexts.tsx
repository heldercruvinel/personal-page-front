'use client';

import { createContext, useContext } from "react";

export const ThemeContext = createContext({ 
    theme: 'light', 
    setTheme: (theme: string) => {} 
});

export function useThemeContext() {
    return useContext(ThemeContext);
}